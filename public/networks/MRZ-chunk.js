"use strict";
(self["webpackChunkidvc"] = self["webpackChunkidvc"] || []).push([[343],{

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

/***/ 5470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ loaderMRZ)
});

// EXTERNAL MODULE: ./src/context.ts + 6 modules
var context = __webpack_require__(4328);
// EXTERNAL MODULE: ./src/controllers/ModuleController.ts + 1 modules
var ModuleController = __webpack_require__(7286);
// EXTERNAL MODULE: ./node_modules/onnxruntime-web/dist/ort-web.min.js
var ort_web_min = __webpack_require__(8736);
// EXTERNAL MODULE: ./src/neural models/neuralModel.ts
var neuralModel = __webpack_require__(6955);
// EXTERNAL MODULE: ./src/neural models/Provider.ts
var Provider = __webpack_require__(813);
// EXTERNAL MODULE: ./src/helpers/color.ts
var color = __webpack_require__(683);
;// CONCATENATED MODULE: ./src/neural models/mrz/exits.js
var exits = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '*',
    '5',
    '6',
    '7',
    '*',
    '8',
    '9',
    'A',
    '*',
    'B',
    'C',
    '*',
    'D',
    '*',
    'E',
    '*',
    'F',
    '*',
    'G',
    '*',
    'H',
    'I',
    'J',
    '*',
    'K',
    '*',
    'L',
    '*',
    'M',
    'N',
    'O',
    'P',
    '*',
    'Q',
    'R',
    '*',
    'S',
    'T',
    '*',
    'U',
    '*',
    'V',
    '*',
    'W',
    'X',
    'Y',
    '*',
    'Z',
    '<',
    '*'
];
/* harmony default export */ const mrz_exits = ((/* unused pure expression or super */ null && (exits)));

;// CONCATENATED MODULE: ./src/neural models/mrzModel.ts
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
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





var ONE_LETTER_SIZE = 784;
var HEIGHT = 28;
var WIDTH = 28;
var COLOR_COUNT = 1;
var INPUT_TENSOR_DIMS = [
    1,
    HEIGHT,
    WIDTH,
    COLOR_COUNT
];
var INPUT_TENSOR_NAME = 'input_1';
var OUTPUT_TENSOR_NAME = 'dense';
var MrzModel = /*#__PURE__*/ function(NeuralModel) {
    "use strict";
    _inherits(MrzModel, NeuralModel);
    var _super = _create_super(MrzModel);
    function MrzModel() {
        var url = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '', provider = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Provider/* Provider.WASM */.z.WASM, wasmPaths = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '';
        _class_call_check(this, MrzModel);
        var _this;
        _this = _super.call(this, url, provider, wasmPaths);
        _define_property(_assert_this_initialized(_this), "promiseList", void 0);
        _define_property(_assert_this_initialized(_this), "predictionList", void 0);
        return _this;
    }
    _create_class(MrzModel, [
        {
            key: "predict",
            value: function predict(rgb) {
                var inputTensor = new ort_web_min.Tensor('float32', rgb, INPUT_TENSOR_DIMS);
                var feeds = _define_property({}, INPUT_TENSOR_NAME, inputTensor);
                return this.session.run(feeds);
            }
        },
        {
            key: "predictFromArray",
            value: function predictFromArray(input, batchSize) {
                var _this = this;
                return _async_to_generator(function() {
                    var buf, i;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                if (!_this.promiseList) {
                                    _this.promiseList = new Array(batchSize).fill(0);
                                }
                                if (!_this.predictionList) {
                                    _this.predictionList = new Array(batchSize).fill(0);
                                }
                                if (_this.loading) {
                                    return [
                                        2,
                                        []
                                    ];
                                }
                                buf = (0,color/* normalize */.Fv)(input, color/* Normalization.STANDART */.eQ.STANDART);
                                for(i = 0; i < batchSize; i += 1){
                                    _this.promiseList[i] = _this.predict(buf.subarray(ONE_LETTER_SIZE * i, ONE_LETTER_SIZE * (i + 1)));
                                }
                                return [
                                    4,
                                    Promise.all(_this.promiseList)
                                ];
                            case 1:
                                _state.sent().forEach(function(prediction, i) {
                                    _this.predictionList[i] = _this.interpret(prediction[OUTPUT_TENSOR_NAME].data);
                                });
                                return [
                                    2,
                                    _this.predictionList
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "interpret",
            value: function interpret(data) {
                return Array.from(data).map(function(val, idx) {
                    return {
                        value: exits[idx],
                        confidence: val
                    };
                }).sort(function(a, b) {
                    return a.confidence - b.confidence;
                }).slice(-3).reverse();
            }
        },
        {
            key: "isLoading",
            get: function get() {
                return this.loading;
            }
        },
        {
            key: "predictFromImage",
            value: function predictFromImage(input, dstCanvas) {}
        }
    ]);
    return MrzModel;
}(neuralModel/* default */.Z);


// EXTERNAL MODULE: ./src/environment/networkNames.json
var networkNames = __webpack_require__(4554);
;// CONCATENATED MODULE: ./src/modules/MrzModule.ts
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function MrzModule_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function MrzModule_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                MrzModule_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                MrzModule_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function MrzModule_class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function MrzModule_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function MrzModule_create_class(Constructor, protoProps, staticProps) {
    if (protoProps) MrzModule_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) MrzModule_defineProperties(Constructor, staticProps);
    return Constructor;
}
function MrzModule_define_property(obj, key, value) {
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
            MrzModule_define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
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
function MrzModule_ts_generator(thisArg, body) {
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



/* eslint-disable no-underscore-dangle */ var MrzModule = /*#__PURE__*/ function() {
    "use strict";
    function MrzModule(worker, key, networkUrl) {
        var _this = this;
        MrzModule_class_call_check(this, MrzModule);
        MrzModule_define_property(this, "w", 0);
        MrzModule_define_property(this, "h", 0);
        MrzModule_define_property(this, "successCount", 0);
        MrzModule_define_property(this, "worker", void 0);
        MrzModule_define_property(this, "model", void 0);
        MrzModule_define_property(this, "isInitialized", false);
        MrzModule_define_property(this, "isProcessing", false);
        MrzModule_define_property(this, "MIN_MRZ_FRAMES", 3);
        this.model = new MrzModel("".concat(networkNames/* neurons.mrz */.t.$I), Provider/* Provider.WASM */.z.WASM, networkUrl);
        this.worker = worker;
        this.worker.postMessage({
            fn: 'init',
            initData: {
                key: key,
                networkUrl: networkUrl
            }
        });
        this.worker.onmessage = function(param) {
            var _param_data = param.data, name = _param_data.name, data = _param_data.data;
            if (name === 'initialization') {
                _this.isInitialized = data;
            }
        };
    }
    MrzModule_create_class(MrzModule, [
        {
            key: "getErrorVal",
            value: function getErrorVal(errorId) {
                var errorVal;
                if (errorId === -3) {
                    errorVal = 0; // 'License Key has expired'
                }
                if (errorId === -2) {
                    errorVal = 1; // 'Invalid License Key'
                }
                return errorVal;
            }
        },
        {
            /**
   * returns error Object
   * @return {ILicenceError}
   */ key: "licenseError",
            value: function licenseError(errorId) {
                return {
                    error: true,
                    errorType: 'licenceKeyError',
                    errorVal: this.getErrorVal(errorId)
                };
            }
        },
        {
            key: "yComparator",
            value: function yComparator(point1, point2) {
                return point1.y < point2.y ? [
                    point1,
                    point2
                ] : [
                    point2,
                    point1
                ];
            }
        },
        {
            key: "allocate",
            value: function allocate() {
            /* none */ }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "prepareMRZlocation",
            value: function prepareMRZlocation(locations) {
                var leftTop = locations.leftTop, rightTop = locations.rightTop, rightBottom = locations.rightBottom, leftBottom = locations.leftBottom;
                var points = [
                    leftTop,
                    rightTop,
                    rightBottom,
                    leftBottom
                ].sort(function(a, b) {
                    return a.x - b.x;
                });
                var _this_yComparator = _sliced_to_array(this.yComparator(points[0], points[1]), 2), tl = _this_yComparator[0], bl = _this_yComparator[1];
                var _this_yComparator1 = _sliced_to_array(this.yComparator(points[2], points[3]), 2), tr = _this_yComparator1[0], br = _this_yComparator1[1];
                var factor = 0.03;
                return {
                    leftTop: {
                        x: tl.x - factor,
                        y: tl.y - factor
                    },
                    rightTop: {
                        x: tr.x + factor,
                        y: tr.y - factor
                    },
                    rightBottom: {
                        x: br.x + factor,
                        y: br.y + factor
                    },
                    leftBottom: {
                        x: bl.x - factor,
                        y: bl.y + factor
                    }
                };
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "writeResults",
            value: function writeResults(mrzResults) {
                var res = {
                    mrzText: ''
                };
                var lines = mrzResults.fields.filter(function(field) {
                    return field.name.indexOf('Line') !== -1 && field.value.length > 0;
                }).map(function(field) {
                    return field.value;
                }).join('\n');
                if (lines.length > 0) {
                    res.mrzText = window.btoa(lines);
                }
                return res;
            }
        },
        {
            key: "predict",
            value: function predict(batchArr, batchSize) {
                var _this = this;
                return MrzModule_async_to_generator(function() {
                    var result;
                    return MrzModule_ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.model.predictFromArray(batchArr, batchSize)
                                ];
                            case 1:
                                result = _state.sent();
                                if (!(result.filter(function(param) {
                                    var _param = _sliced_to_array(param, 1), value = _param[0].value;
                                    return value === '*';
                                }).length > 3)) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _this.model.predictFromArray(batchArr.reverse(), batchSize)
                                ];
                            case 2:
                                result = _state.sent();
                                _state.label = 3;
                            case 3:
                                return [
                                    2,
                                    result
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "scan",
            value: function scan(iData) {
                var _this = this;
                return new Promise(function(resolve) {
                    _this.worker.postMessage({
                        fn: 'prepare',
                        iData: iData
                    });
                    var _this1 = _this;
                    _this.worker.onmessage = function() {
                        var _ref = MrzModule_async_to_generator(function(param) {
                            var _param_data, name, data, predictions;
                            return MrzModule_ts_generator(this, function(_state) {
                                switch(_state.label){
                                    case 0:
                                        _param_data = param.data, name = _param_data.name, data = _param_data.data;
                                        if (!(name === 'batchArr')) return [
                                            3,
                                            2
                                        ];
                                        return [
                                            4,
                                            _this1.predict(data.batchArr, data.batchSize)
                                        ];
                                    case 1:
                                        predictions = _state.sent();
                                        _this1.worker.postMessage({
                                            fn: 'process',
                                            predictions: predictions
                                        });
                                        return [
                                            2
                                        ];
                                    case 2:
                                        if (name === 'result') {
                                            resolve(data);
                                        }
                                        resolve(data);
                                        return [
                                            2
                                        ];
                                }
                            });
                        });
                        return function(_) {
                            return _ref.apply(this, arguments);
                        };
                    }();
                });
            }
        },
        {
            key: "processMRZ",
            value: /**
   * process frame for MRZ
   * @param data
   */ function processMRZ(data) {
                var _this = this;
                return MrzModule_async_to_generator(function() {
                    var _r_status, res, r, rating, color, isTrusted, isValidRating;
                    return MrzModule_ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                res = {
                                    status: false,
                                    cancel: false,
                                    touch: false,
                                    image: null,
                                    type: 'mrz',
                                    isSuccessProcess: false
                                };
                                if (_this.isProcessing) {
                                    return [
                                        2,
                                        res
                                    ];
                                }
                                if (!_this.isInitialized) {
                                    return [
                                        2,
                                        res
                                    ];
                                }
                                _this.isProcessing = true;
                                return [
                                    4,
                                    _this.scan(data)
                                ];
                            case 1:
                                r = _state.sent();
                                if (r === null || r === void 0 ? void 0 : r.errorId) {
                                    _this.isProcessing = false;
                                    return [
                                        2,
                                        _object_spread_props(_object_spread({}, r), {
                                            error: _this.licenseError(r.errorId)
                                        })
                                    ];
                                }
                                if (r && (r === null || r === void 0 ? void 0 : (_r_status = r.status) === null || _r_status === void 0 ? void 0 : _r_status.value) === 0 && (r === null || r === void 0 ? void 0 : r.count) > 0) {
                                    rating = _this.estimateResults(r);
                                    color = rating === r.count && r.symbolsConf > 0.95 ? 'green' : 'yellow';
                                    res.coords = {
                                        locations: _this.prepareMRZlocation(r.location),
                                        color: color
                                    };
                                    isTrusted = rating === r.count && r.symbolsConf > 0.85;
                                    isValidRating = rating >= r.count - 2;
                                    if (isTrusted || isValidRating) {
                                        _this.successCount += 1;
                                        res.isSuccessProcess = true;
                                        if (_this.successCount >= _this.MIN_MRZ_FRAMES) {
                                            res.status = true;
                                            res.needToCut = true;
                                            res.image = data;
                                            res.results = _this.writeResults(r);
                                        }
                                    }
                                } else {
                                    res.coords = null;
                                    _this.successCount = 0;
                                }
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
            // eslint-disable-next-line class-methods-use-this
            key: "estimateResults",
            value: function estimateResults(data) {
                return data.count === 0 ? 0 : data.fields.reduce(function(sum, param) {
                    var status = param.status;
                    return status === 'Valid' ? sum + 1 : sum;
                }, 0);
            }
        },
        {
            key: "detectMrz",
            value: /**
   * detects MRZ on ImageData
   * @param {ImageData} imageData
   * @return {Promise<>}
   */ function detectMrz(imageData) {
                var _this = this;
                return MrzModule_async_to_generator(function() {
                    var mrzResults, isNotMRZ, locations, results, res;
                    return MrzModule_ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    _this.scan(imageData)
                                ];
                            case 1:
                                mrzResults = _state.sent();
                                isNotMRZ = true;
                                if (mrzResults && mrzResults.count > 0 && mrzResults.symbolsConf > 0.80) {
                                    locations = _this.prepareMRZlocation(mrzResults.location);
                                    results = _this.writeResults(mrzResults);
                                    isNotMRZ = false;
                                    return [
                                        2,
                                        {
                                            status: true,
                                            locations: locations,
                                            results: results,
                                            isNotMRZ: isNotMRZ
                                        }
                                    ];
                                }
                                if (mrzResults && mrzResults.symbolsConf > 0.6) {
                                    isNotMRZ = false;
                                }
                                res = {
                                    status: false,
                                    isNotMRZ: isNotMRZ
                                };
                                if (mrzResults === null || mrzResults === void 0 ? void 0 : mrzResults.errorId) {
                                    res.error = _this.licenseError(mrzResults.errorId);
                                }
                                return [
                                    2,
                                    res
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return MrzModule;
}();
/* harmony default export */ const modules_MrzModule = (MrzModule);

// EXTERNAL MODULE: ./src/helpers/licenceKeyError.ts
var licenceKeyError = __webpack_require__(4295);
// EXTERNAL MODULE: ./src/helpers/workers.ts
var workers = __webpack_require__(4550);
;// CONCATENATED MODULE: ./src/loader/loaderMRZ.ts
function loaderMRZ_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function loaderMRZ_async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                loaderMRZ_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                loaderMRZ_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function loaderMRZ_ts_generator(thisArg, body) {
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





/* harmony default export */ const loaderMRZ = ((function() {
    var _ref = loaderMRZ_async_to_generator(function(param) {
        var commonLicenseKey, result, worker, mrzMod;
        return loaderMRZ_ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    commonLicenseKey = param.commonLicenseKey;
                    if (!!commonLicenseKey) return [
                        3,
                        1
                    ];
                    (0,licenceKeyError/* default */.Z)();
                    return [
                        3,
                        3
                    ];
                case 1:
                    return [
                        4,
                        (0,workers/* loadWorker */.o)("".concat(context/* default.chunkPublicPath */.Z.chunkPublicPath, "mrzWorker.js"))
                    ];
                case 2:
                    worker = _state.sent();
                    mrzMod = new modules_MrzModule(worker, commonLicenseKey, context/* default.networkUrl */.Z.networkUrl);
                    ModuleController/* default.setModule */.Z.setModule('module', 'mrz', mrzMod);
                    result = [
                        mrzMod.model.initialize.bind(mrzMod.model)
                    ];
                    _state.label = 3;
                case 3:
                    return [
                        2,
                        result
                    ];
            }
        });
    });
    return function(_) {
        return _ref.apply(this, arguments);
    };
})());


/***/ })

}]);