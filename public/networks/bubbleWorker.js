/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/helpers/image.ts
var generateFaceColorFromAngle = function(angle) {
    var color = Math.abs(Math.trunc(255 - angle));
    if (color > 200) color = 200;
    if (color < 50) color = 50;
    return "rgba(255,215,".concat(color.toString(), ",0.3)");
};
/**
 *
 * @param {ImageData} iData
 * @param {number} threshold
 * @return number[] - black and whited array;
 */ var binarize = function(iData) {
    var threshold = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 120;
    var setColor = 1;
    var len = iData.width * iData.height;
    var result = new Uint8ClampedArray(len);
    var i;
    var red = 0;
    var green = 0;
    var blue = 0;
    var gray = 0;
    for(i = 0; i < len; i += 1){
        // eslint-disable-next-line no-bitwise
        var n = i << 2; // fast version of i * 4
        red = iData.data[n + 0];
        green = iData.data[n + 1];
        blue = iData.data[n + 2];
        // eslint-disable-next-line no-bitwise
        gray = 77 * red + 151 * green + 28 * blue >> 8;
        if (gray < threshold) {
            result[i] = setColor;
        }
    }
    return result;
};
var topPoint = function(position, width) {
    return position - width;
};
var bottomPoint = function(position, width) {
    return position + width;
};
var leftPoint = function(position, width) {
    return position % width > 1 ? position - 1 : -1;
};
var rightPoint = function(position, width) {
    return (position + 1) % width >= 0 ? position + 1 : -1;
};
var topLeftPoint = function(position, width) {
    return leftPoint(topPoint(position, width), width);
};
var topRightPoint = function(position, width) {
    return rightPoint(topPoint(position, width), width);
};
var bottomLeftPoint = function(position, width) {
    return leftPoint(bottomPoint(position, width), width);
};
var bottomRightPoint = function(position, width) {
    return rightPoint(bottomPoint(position, width), width);
};
var getNeigbors = function(position, width) {
    return [
        topLeftPoint,
        topPoint,
        topRightPoint,
        rightPoint,
        bottomRightPoint,
        bottomPoint,
        bottomLeftPoint,
        leftPoint
    ].map(function(fn) {
        return fn(position, width);
    });
};
var segmentize2 = function(binarizedImg, width) {
    var queue = [];
    var segments = [];
    var imgLen = binarizedImg.length;
    var segmentIdx = 0;
    var pixelIdx;
    var search = function() {
        var isValidPixel = function(el) {
            return el > 0 && binarizedImg[el] !== 0 && el < imgLen;
        };
        while(queue.length){
            var centerPixelIdx = queue.pop();
            if (!centerPixelIdx) break;
            // eslint-disable-next-line no-param-reassign
            binarizedImg[centerPixelIdx] = 0;
            segments[segmentIdx].add(centerPixelIdx);
            getNeigbors(centerPixelIdx, width).forEach(function(el) {
                if (isValidPixel(el)) {
                    queue.push(el);
                }
            });
        }
    };
    for(pixelIdx = 0; pixelIdx < imgLen; pixelIdx += 1){
        // eslint-disable-next-line no-continue
        if (binarizedImg[pixelIdx] === 0) continue;
        segments[segmentIdx] = new Set();
        queue.push(pixelIdx);
        search();
        segmentIdx += 1;
    }
    return segments;
};
var getResizedSizes = function(size, param) {
    var baseWidth = param.baseWidth, baseHeight = param.baseHeight;
    var width = size;
    var height = size;
    if (baseWidth > baseHeight) {
        width = size;
        height = width * baseHeight / baseWidth;
    }
    if (baseHeight > baseWidth) {
        height = size;
        width = height * baseWidth / baseHeight;
    }
    return {
        width: Math.trunc(width),
        height: Math.trunc(height)
    };
};
var getCrop = function(src, dst) {
    var srcWidth = src.width;
    var srcHeight = src.height;
    var aspectRatioSrc = srcWidth / srcHeight; // float
    var aspectRatioDst = dst.width / dst.height; // float
    var targetCrop = {
        x: 0,
        y: 0,
        width: dst.width,
        height: dst.height
    };
    if (aspectRatioSrc > aspectRatioDst) {
        targetCrop.height = ~~(dst.width / aspectRatioSrc);
        targetCrop.y = (dst.height - targetCrop.height) / 2;
    } else {
        targetCrop.width = ~~(targetCrop.height * aspectRatioSrc);
        targetCrop.x = (dst.width - targetCrop.width) / 2;
    }
    return targetCrop;
};

;// CONCATENATED MODULE: ./src/constatnts/imageProcessing.ts
var POINT_FILL_STYLE = 'rgba(255, 255, 255, 0.5)';
var POINT_STROKE_STYLE = 'rgba(255, 255, 255, 0)';
var SCALE_FACTOR = 0.3;

;// CONCATENATED MODULE: ./src/workers/bubbleWorker.ts


var getColumn = function(d, w) {
    return d % w;
};
var getRow = function(d, w) {
    return Math.floor(d / w);
};
var createCoordFromPointIdx = function(pixelPosition, width) {
    return [
        getColumn(pixelPosition, width),
        getRow(pixelPosition, width)
    ];
};
var notNull = function(value) {
    return value !== null && value !== undefined;
};
var coordinateSegment = function(param) {
    var segments = param.segments, width = param.width, scaleWidth = param.scaleWidth, scaleHeight = param.scaleHeight;
    var MIN_PERIMETER = 5;
    var MAX_PERIMETER = 500;
    return segments.map(function(segment) {
        var minX = Number.MAX_VALUE; // ignoring case of empty list for conciseness
        var minY = Number.MAX_VALUE;
        var maxX = Number.MIN_VALUE;
        var maxY = Number.MIN_VALUE;
        segment.forEach(function(position) {
            var coord = createCoordFromPointIdx(position, width);
            if (coord[0] < minX) minX = coord[0];
            if (coord[1] < minY) minY = coord[1];
            if (coord[0] > maxX) maxX = coord[0];
            if (coord[1] > maxY) maxY = coord[1];
        });
        var per = (maxX - minX) * (maxY - minY);
        if (per > MIN_PERIMETER && per < MAX_PERIMETER) {
            return {
                perimeter: per,
                x1: Math.trunc(minX / SCALE_FACTOR / scaleWidth),
                y1: Math.trunc(minY / SCALE_FACTOR / scaleHeight),
                x2: Math.trunc(maxX / SCALE_FACTOR / scaleWidth),
                y2: Math.trunc(maxY / SCALE_FACTOR / scaleHeight)
            };
        }
        return null;
    }).filter(notNull);
};
var pointsProcess = function(iData, scaleWidth, scaleHeight) {
    var bin = binarize(iData);
    return coordinateSegment({
        segments: segmentize2(bin, iData.width),
        width: iData.width,
        scaleWidth: scaleWidth,
        scaleHeight: scaleHeight
    });
};
onmessage = function(param) {
    var data = param.data;
    if (data && data.iData) {
        var segments = pointsProcess(data.iData, data.resizedToBorderScaleWidth, data.resizedToBorderScaleHeight);
        postMessage({
            segments: segments
        });
    }
};

// window.IDVC = __webpack_exports__["default"];
/******/ })()
;
