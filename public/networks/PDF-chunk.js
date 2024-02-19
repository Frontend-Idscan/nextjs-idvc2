"use strict";
(self["webpackChunkIDVC"] = self["webpackChunkIDVC"] || []).push([[596],{

/***/ 4550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ loadWorker)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var type = 'application/javascript';
var getCrossOriginWorkerURL = function(originalWorkerUrl) {
    var _options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var options = _object_spread({
        skipSameOrigin: true,
        useBlob: true
    }, _options);
    if (!originalWorkerUrl.includes('://') || originalWorkerUrl.includes(window.location.origin)) {
        // The same origin - Worker will run fine
        return Promise.resolve(originalWorkerUrl);
    }
    // eslint-disable-next-line no-promise-executor-return
    return new Promise(function(resolve, reject) {
        return fetch(originalWorkerUrl).then(function(res) {
            return res.text();
        }).then(function(codeString) {
            var workerPath = new URL(originalWorkerUrl).href.split('/');
            workerPath.pop();
            var importScriptsFix = "const _importScripts = importScripts;\nconst _fixImports = (url) => new URL(url, '".concat("".concat(workerPath.join('/'), "/"), "').href;\nimportScripts = (...urls) => _importScripts(...urls.map(_fixImports));");
            var finalURL = "data:".concat(type, ",").concat(encodeURIComponent(importScriptsFix + codeString));
            if (options.useBlob) {
                finalURL = URL.createObjectURL(new Blob([
                    'importScripts("'.concat(finalURL, '")')
                ], {
                    type: type
                }));
            }
            resolve(finalURL);
        }).catch(reject);
    });
};
var loadWorker = function() {
    var _ref = _async_to_generator(function(workerUrl) {
        var workerURL;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        getCrossOriginWorkerURL(workerUrl)
                    ];
                case 1:
                    workerURL = _state.sent();
                    return [
                        2,
                        new Worker(workerURL)
                    ];
            }
        });
    });
    return function loadWorker(workerUrl) {
        return _ref.apply(this, arguments);
    };
}();


/***/ }),

/***/ 8766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ loaderPDF)
});

// EXTERNAL MODULE: ./src/context.ts + 6 modules
var context = __webpack_require__(4328);
// EXTERNAL MODULE: ./src/types/enums/pdf.ts
var pdf = __webpack_require__(6399);
;// CONCATENATED MODULE: ./src/modules/PdfModule.ts
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}

var PdfModule = /*#__PURE__*/ function() {
    "use strict";
    function PdfModule(worker, key, isNeedToLoadPDFWIthPreprocess) {
        var _this = this;
        _class_call_check(this, PdfModule);
        _define_property(this, "module", void 0);
        _define_property(this, "handle", null);
        _define_property(this, "bw", 0);
        _define_property(this, "bh", 0);
        _define_property(this, "src", null);
        _define_property(this, "out", null);
        _define_property(this, "isAllocate", false);
        _define_property(this, "worker", void 0);
        _define_property(this, "isProcessing", false);
        _define_property(this, "isInitialized", false);
        _define_property(this, "successCount", 0);
        _define_property(this, "pdfCapturedCount", 0);
        _define_property(this, "src2", null);
        _define_property(this, "locations", null);
        _define_property(this, "pdfCount", 0);
        _define_property(this, "geometry", void 0);
        _define_property(this, "minPDFframes", 1);
        _define_property(this, "cropSizes", void 0);
        _define_property(this, "canvasSizes", void 0);
        _define_property(this, "privateErrorId", 0);
        this.worker = worker;
        this.worker.onmessage = function(param) {
            var _param_data = param.data, name = _param_data.name, data = _param_data.data;
            if (name === 'initialization') {
                _this.isInitialized = data;
            }
        };
        this.worker.postMessage({
            fn: 'init',
            key: key,
            isNeedToLoadPDFWIthPreprocess: isNeedToLoadPDFWIthPreprocess
        });
    }
    _create_class(PdfModule, [
        {
            key: "errorId",
            get: function get() {
                return this.privateErrorId;
            },
            set: function set(id) {
                this.privateErrorId = [
                    pdf/* EResultStatus.Detected */.l.Detected,
                    pdf/* EResultStatus.Decoded */.l.Decoded
                ].includes(id) ? 0 : id;
            }
        },
        {
            key: "errorVal",
            get: function get() {
                var errorVal;
                if (this.errorId === pdf/* EResultStatus.LicenseKeyHasExpired */.l.LicenseKeyHasExpired) {
                    errorVal = 0; // 'License Key has expired';
                }
                if (this.errorId === pdf/* EResultStatus.InvalidLicenseKey */.l.InvalidLicenseKey) {
                    errorVal = 1; // 'Invalid License Key';
                }
                return errorVal;
            }
        },
        {
            /**
   *
   * @param geometry
   * @param {number} minPDFframes - c.config.minPDFframes
   * @param {{width: number, height: number}} cropSize - c.config.cropSize
   * @param {{width: number, height: number}} canvasSizes - ui.borderCanvas
   */ key: "init",
            value: function init(geometry, minPDFframes, cropSize, canvasSizes) {
                this.geometry = geometry;
                this.minPDFframes = minPDFframes;
                this.cropSizes = cropSize;
                this.canvasSizes = canvasSizes;
            }
        },
        {
            key: "licenseError",
            value: function licenseError() {
                return {
                    error: true,
                    errorType: 'licenceKeyError',
                    errorVal: this.errorVal
                };
            }
        },
        {
            // getLocations() {
            //   this.module.ccall(
            //     'pdf417_getLocation',
            //     ['boolean'],
            //     ['number', 'number'],
            //     [this.handle, this.locations],
            //   );
            // }
            // setResizedData(data) {
            //   this.module.HEAPU8.set(data, this.src);
            // }
            //
            // initReader(key) {
            //   this.reader = new this.module.PDF417Reader(key);
            // }
            //
            // destroyReader() {
            //   this.reader = null;
            // }
            //
            // setPdfData(data) {
            //   this.module.HEAPU8.set(data.data, this.src2);
            // }
            //
            // readPdf(): PDFResult {
            //   return this.reader.processImage(
            //     this.src2,
            //     this.bw,
            //     this.bh,
            //     4 * this.bw,
            //     this.module.EImageFormat.RGBA,
            //   );
            // }
            //
            // releasePdf() {
            //   this.reader.reset();
            // }
            // eslint-disable-next-line class-methods-use-this
            key: "create",
            value: function create() {}
        },
        {
            // free() {
            //   if (this.isAllocate) {
            //     // eslint-disable-next-line no-underscore-dangle
            //     this.module._free(this.src2);
            //     this.isAllocate = false;
            //   }
            // }
            key: "setSizes",
            value: function setSizes(bw, bh) {
                this.bw = bw;
                this.bh = bh;
                this.worker.postMessage({
                    fn: 'setSizes',
                    bw: bw,
                    bh: bh
                });
            }
        },
        {
            key: "allocate",
            value: function allocate() {
                this.worker.postMessage({
                    fn: 'allocate'
                });
            }
        },
        {
            key: "drawCords",
            value: function drawCords(locations) {
                var _this = this;
                var result = [];
                if (locations) {
                    var coords = [];
                    // key is string x1, x2, x3, x4, y1, y2, y3, y4
                    Object.entries(locations).forEach(function(param) {
                        var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                        var val = Math.trunc(value);
                        var coordName = key[0];
                        var coordPosition = +key[1] - 1;
                        if (!coords[coordPosition]) {
                            coords[coordPosition] = {
                                x: 0,
                                y: 0
                            };
                        }
                        if (coordName === 'x') {
                            coords[coordPosition].x = _this.canvasSizes.width * val / _this.bw;
                        } else {
                            coords[coordPosition].y = _this.canvasSizes.height * val / _this.bh;
                        }
                    });
                    var v1 = [
                        coords[3].x - coords[0].x,
                        coords[3].y - coords[0].y
                    ];
                    var v2 = [
                        coords[1].x - coords[0].x,
                        coords[1].y - coords[0].y
                    ];
                    var v3 = [
                        coords[2].x - coords[1].x,
                        coords[2].y - coords[1].y
                    ];
                    var v4 = [
                        coords[3].x - coords[2].x,
                        coords[3].y - coords[2].y
                    ];
                    var a1 = this.geometry.angleBetweenTwoVectors(v1, v2);
                    var a2 = this.geometry.angleBetweenTwoVectors(v3, v4);
                    if (a1 <= 100 && a1 >= 80 && a2 <= 100 && a2 >= 80) {
                        result = coords;
                    }
                }
                return result;
            }
        },
        {
            key: "processPDF",
            value: function processPDF(data) {
                var _this = this;
                return _async_to_generator(function() {
                    var res, pdfData;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (_this.isProcessing) {
                                    return [
                                        2,
                                        {}
                                    ];
                                }
                                res = {
                                    status: false,
                                    predict: false,
                                    touch: false,
                                    image: null,
                                    type: 'pdf',
                                    error: null,
                                    coords: [],
                                    trackString: '',
                                    pdfSuccessCount: 0,
                                    pdfCount: 0,
                                    isSuccessProcess: false,
                                    pdfCapturedCount: 0
                                };
                                if (!_this.isInitialized) {
                                    return [
                                        2,
                                        res
                                    ];
                                }
                                _this.isProcessing = true;
                                return [
                                    4,
                                    _this.readPDF(data)
                                ];
                            case 1:
                                pdfData = _state.sent();
                                if (pdfData.error) {
                                    _this.isProcessing = false;
                                    res.error = pdfData;
                                    return [
                                        2,
                                        res
                                    ];
                                }
                                if (pdfData && 'status' in pdfData) {
                                    if (pdfData.status.value === pdf/* EResultStatus.Detected */.l.Detected) {
                                        _this.pdfCapturedCount += 1;
                                    }
                                    if (pdfData.status.value === pdf/* EResultStatus.Detected */.l.Detected || pdfData.status.value === pdf/* EResultStatus.Decoded */.l.Decoded) {
                                        res.coords = _this.drawCords(pdfData.location);
                                        res.isSuccessProcess = true;
                                    } else {
                                        _this.successCount += 1;
                                        _this.drawCords(null);
                                    }
                                    if (pdfData.status.value === pdf/* EResultStatus.Decoded */.l.Decoded) {
                                        _this.pdfCount += 1;
                                        if (_this.pdfCount >= _this.minPDFframes) {
                                            _this.successCount = 0;
                                            _this.pdfCount = 0;
                                            res.trackString = pdfData.trackString || pdfData.data || '';
                                            res.status = true;
                                            res.image = data;
                                            res.pdfCapturedCount = 0;
                                        }
                                    } else {
                                        _this.pdfCount = 0;
                                    }
                                }
                                res.pdfSuccessCount = _this.successCount;
                                res.pdfCount = _this.pdfCount;
                                res.pdfCapturedCount = _this.pdfCapturedCount;
                                _this.isProcessing = false;
                                return [
                                    2,
                                    res
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "processPDFWithPreProcess",
            value: function processPDFWithPreProcess(iData) {
                var _this = this;
                return new Promise(function(resolve) {
                    _this.worker.onmessage = function(param) {
                        var _param_data = param.data, name = _param_data.name, data = _param_data.data;
                        if (name === 'result') {
                            var _data_status;
                            _this.errorId = data === null || data === void 0 ? void 0 : (_data_status = data.status) === null || _data_status === void 0 ? void 0 : _data_status.value;
                            var err = _this.errorId ? _this.licenseError() : null;
                            var result = err || data;
                            resolve(result);
                        } else {
                            resolve(data);
                        }
                    };
                    _this.worker.postMessage({
                        fn: 'pdfWithPreProcess',
                        iData: iData
                    });
                });
            }
        },
        {
            key: "readPDF",
            value: function readPDF(iData) {
                var _this = this;
                return _async_to_generator(function() {
                    return _ts_generator(this, function(_state) {
                        return [
                            2,
                            new Promise(function(resolve) {
                                _this.worker.onmessage = function(param) {
                                    var _param_data = param.data, name = _param_data.name, data = _param_data.data, bw = _param_data.bw, bh = _param_data.bh;
                                    if (name === 'ready') {
                                        _this.worker.postMessage({
                                            fn: 'process'
                                        });
                                    } else if (name === 'result') {
                                        var _data_status;
                                        _this.errorId = data === null || data === void 0 ? void 0 : (_data_status = data.status) === null || _data_status === void 0 ? void 0 : _data_status.value;
                                        var err = _this.errorId ? _this.licenseError() : null;
                                        var result = err || data;
                                        _this.bw = bw;
                                        _this.bh = bh;
                                        resolve(result);
                                    } else {
                                        resolve(data);
                                    }
                                };
                                _this.worker.postMessage({
                                    fn: 'prepare',
                                    iData: iData
                                });
                            })
                        ];
                    });
                })();
            }
        }
    ]);
    return PdfModule;
}();
/* harmony default export */ const modules_PdfModule = ((/* unused pure expression or super */ null && (PdfModule)));

// EXTERNAL MODULE: ./src/controllers/ModuleController.ts + 1 modules
var ModuleController = __webpack_require__(7286);
// EXTERNAL MODULE: ./src/helpers/workers.ts
var workers = __webpack_require__(4550);
;// CONCATENATED MODULE: ./src/loader/loaderPDF.ts
function loaderPDF_array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function loaderPDF_array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function loaderPDF_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function loaderPDF_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                loaderPDF_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                loaderPDF_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function loaderPDF_iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function loaderPDF_non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function loaderPDF_sliced_to_array(arr, i) {
    return loaderPDF_array_with_holes(arr) || loaderPDF_iterable_to_array_limit(arr, i) || loaderPDF_unsupported_iterable_to_array(arr, i) || loaderPDF_non_iterable_rest();
}
function loaderPDF_unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return loaderPDF_array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return loaderPDF_array_like_to_array(o, minLen);
}
function loaderPDF_ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return(g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g);
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}




var load = function() {
    var _ref = loaderPDF_async_to_generator(function(param) {
        var pdf417key, isNeedToLoadPDFWIthPreprocess, worker, pdfMod;
        return loaderPDF_ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    pdf417key = param.pdf417key;
                    isNeedToLoadPDFWIthPreprocess = !!Object.entries(context/* default.config.documentTypes */.Z.config.documentTypes).find(function(param) {
                        var _param = loaderPDF_sliced_to_array(param, 2), _ = _param[0], steps = _param[1];
                        return steps.find(function(step) {
                            return (step.type === 'pdf' || step.type === 'back') && step.mode.uploader;
                        });
                    });
                    return [
                        4,
                        (0,workers/* loadWorker */.o)("".concat(context/* default.chunkPublicPath */.Z.chunkPublicPath, "pdfWorker.js"))
                    ];
                case 1:
                    worker = _state.sent();
                    pdfMod = new PdfModule(worker, pdf417key, isNeedToLoadPDFWIthPreprocess);
                    ModuleController/* default.setModule */.Z.setModule('module', 'pdf', pdfMod);
                    return [
                        2
                    ];
            }
        });
    });
    return function load(_) {
        return _ref.apply(this, arguments);
    };
}();
/* harmony default export */ const loaderPDF = (load);


/***/ })

}]);