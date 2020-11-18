/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError(
            'Object.assign cannot be called with null or undefined'
        );
    }

    return Object(val);
}

function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }

        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }

        var test2 = {};
        for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }

        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
        });
        if (
            Object.keys(Object.assign({}, test3)).join('') !==
            'abcdefghijklmnopqrst'
        ) {
            return false;
        }

        return true;
    } catch (err) {
        return false;
    }
}

var objectAssign = shouldUseNative()
    ? Object.assign
    : function (target, source) {
          var arguments$1 = arguments;

          var from;
          var to = toObject(target);
          var symbols;

          for (var s = 1; s < arguments.length; s++) {
              from = Object(arguments$1[s]);

              for (var key in from) {
                  if (hasOwnProperty.call(from, key)) {
                      to[key] = from[key];
                  }
              }

              if (getOwnPropertySymbols) {
                  symbols = getOwnPropertySymbols(from);
                  for (var i = 0; i < symbols.length; i++) {
                      if (propIsEnumerable.call(from, symbols[i])) {
                          to[symbols[i]] = from[symbols[i]];
                      }
                  }
              }
          }

          return to;
      };

function unwrapExports(x) {
    return x &&
        x.__esModule &&
        Object.prototype.hasOwnProperty.call(x, 'default')
        ? x['default']
        : x;
}

function createCommonjsModule(fn, module) {
    return (
        (module = { exports: {} }), fn(module, module.exports), module.exports
    );
}

function getCjsExportFromNamespace(n) {
    return (n && n['default']) || n;
}

var indexesOf = function (ary, item) {
    var i = -1,
        indexes = [];
    while ((i = ary.indexOf(item, i + 1)) !== -1) {
        indexes.push(i);
    }
    return indexes;
};

function unique_pred(list, compare) {
    var ptr = 1,
        len = list.length,
        a = list[0],
        b = list[0];
    for (var i = 1; i < len; ++i) {
        b = a;
        a = list[i];
        if (compare(a, b)) {
            if (i === ptr) {
                ptr++;
                continue;
            }
            list[ptr++] = a;
        }
    }
    list.length = ptr;
    return list;
}

function unique_eq(list) {
    var ptr = 1,
        len = list.length,
        a = list[0],
        b = list[0];
    for (var i = 1; i < len; ++i, b = a) {
        b = a;
        a = list[i];
        if (a !== b) {
            if (i === ptr) {
                ptr++;
                continue;
            }
            list[ptr++] = a;
        }
    }
    list.length = ptr;
    return list;
}

function unique(list, compare, sorted) {
    if (list.length === 0) {
        return list;
    }
    if (compare) {
        if (!sorted) {
            list.sort(compare);
        }
        return unique_pred(list, compare);
    }
    if (!sorted) {
        list.sort();
    }
    return unique_eq(list);
}

var uniq = unique;

var unesc_1 = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = unesc;
    var whitespace = '[\\x20\\t\\r\\n\\f]';
    var unescapeRegExp = new RegExp(
        '\\\\([\\da-f]{1,6}' + whitespace + '?|(' + whitespace + ')|.)',
        'ig'
    );

    function unesc(str) {
        return str.replace(unescapeRegExp, function (
            _,
            escaped,
            escapedWhitespace
        ) {
            var high = '0x' + escaped - 0x10000;

            // eslint-disable-next-line no-self-compare

            return high !== high || escapedWhitespace
                ? escaped
                : high < 0
                ? String.fromCharCode(high + 0x10000)
                : String.fromCharCode(
                      (high >> 10) | 0xd800,
                      (high & 0x3ff) | 0xdc00
                  );
        });
    }

    module.exports = exports.default;
});

unwrapExports(unesc_1);

var getProp_1 = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = getProp;

    function getProp(obj) {
        var arguments$1 = arguments;

        for (
            var _len = arguments.length,
                props = new Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
            _key < _len;
            _key++
        ) {
            props[_key - 1] = arguments$1[_key];
        }

        while (props.length > 0) {
            var prop = props.shift();

            if (!obj[prop]) {
                return undefined;
            }

            obj = obj[prop];
        }

        return obj;
    }

    module.exports = exports.default;
});

unwrapExports(getProp_1);

var ensureObject_1 = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = ensureObject;

    function ensureObject(obj) {
        var arguments$1 = arguments;

        for (
            var _len = arguments.length,
                props = new Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
            _key < _len;
            _key++
        ) {
            props[_key - 1] = arguments$1[_key];
        }

        while (props.length > 0) {
            var prop = props.shift();

            if (!obj[prop]) {
                obj[prop] = {};
            }

            obj = obj[prop];
        }
    }

    module.exports = exports.default;
});

unwrapExports(ensureObject_1);

var stripComments_1 = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = stripComments;

    function stripComments(str) {
        var s = '';
        var commentStart = str.indexOf('/*');
        var lastEnd = 0;

        while (commentStart >= 0) {
            s = s + str.slice(lastEnd, commentStart);
            var commentEnd = str.indexOf('*/', commentStart + 2);

            if (commentEnd < 0) {
                return s;
            }

            lastEnd = commentEnd + 2;
            commentStart = str.indexOf('/*', lastEnd);
        }

        s = s + str.slice(lastEnd);
        return s;
    }

    module.exports = exports.default;
});

unwrapExports(stripComments_1);

var util = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.stripComments = exports.ensureObject = exports.getProp = exports.unesc = void 0;

    var _unesc = _interopRequireDefault(unesc_1);

    exports.unesc = _unesc.default;

    var _getProp = _interopRequireDefault(getProp_1);

    exports.getProp = _getProp.default;

    var _ensureObject = _interopRequireDefault(ensureObject_1);

    exports.ensureObject = _ensureObject.default;

    var _stripComments = _interopRequireDefault(stripComments_1);

    exports.stripComments = _stripComments.default;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }
});

unwrapExports(util);
var util_1 = util.stripComments;
var util_2 = util.ensureObject;
var util_3 = util.getProp;
var util_4 = util.unesc;

var node = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) {
                descriptor.writable = true;
            }
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) {
            _defineProperties(Constructor.prototype, protoProps);
        }
        if (staticProps) {
            _defineProperties(Constructor, staticProps);
        }
        return Constructor;
    }

    var cloneNode = function cloneNode(obj, parent) {
        if (typeof obj !== 'object' || obj === null) {
            return obj;
        }

        var cloned = new obj.constructor();

        for (var i in obj) {
            if (!obj.hasOwnProperty(i)) {
                continue;
            }

            var value = obj[i];
            var type = typeof value;

            if (i === 'parent' && type === 'object') {
                if (parent) {
                    cloned[i] = parent;
                }
            } else if (value instanceof Array) {
                cloned[i] = value.map(function (j) {
                    return cloneNode(j, cloned);
                });
            } else {
                cloned[i] = cloneNode(value, cloned);
            }
        }

        return cloned;
    };

    var Node = (function () {
        function Node(opts) {
            if (opts === void 0) {
                opts = {};
            }

            objectAssign(this, opts);
            this.spaces = this.spaces || {};
            this.spaces.before = this.spaces.before || '';
            this.spaces.after = this.spaces.after || '';
        }

        var _proto = Node.prototype;

        _proto.remove = function remove() {
            if (this.parent) {
                this.parent.removeChild(this);
            }

            this.parent = undefined;
            return this;
        };

        _proto.replaceWith = function replaceWith() {
            var arguments$1 = arguments;

            if (this.parent) {
                for (var index in arguments) {
                    this.parent.insertBefore(this, arguments$1[index]);
                }

                this.remove();
            }

            return this;
        };

        _proto.next = function next() {
            return this.parent.at(this.parent.index(this) + 1);
        };

        _proto.prev = function prev() {
            return this.parent.at(this.parent.index(this) - 1);
        };

        _proto.clone = function clone(overrides) {
            if (overrides === void 0) {
                overrides = {};
            }

            var cloned = cloneNode(this);

            for (var name in overrides) {
                cloned[name] = overrides[name];
            }

            return cloned;
        };

        _proto.appendToPropertyAndEscape = function appendToPropertyAndEscape(
            name,
            value,
            valueEscaped
        ) {
            if (!this.raws) {
                this.raws = {};
            }

            var originalValue = this[name];
            var originalEscaped = this.raws[name];
            this[name] = originalValue + value;

            if (originalEscaped || valueEscaped !== value) {
                this.raws[name] =
                    (originalEscaped || originalValue) + valueEscaped;
            } else {
                delete this.raws[name];
            }
        };

        _proto.setPropertyAndEscape = function setPropertyAndEscape(
            name,
            value,
            valueEscaped
        ) {
            if (!this.raws) {
                this.raws = {};
            }

            this[name] = value;

            this.raws[name] = valueEscaped;
        };

        _proto.setPropertyWithoutEscape = function setPropertyWithoutEscape(
            name,
            value
        ) {
            this[name] = value;

            if (this.raws) {
                delete this.raws[name];
            }
        };

        _proto.isAtPosition = function isAtPosition(line, column) {
            if (this.source && this.source.start && this.source.end) {
                if (this.source.start.line > line) {
                    return false;
                }

                if (this.source.end.line < line) {
                    return false;
                }

                if (
                    this.source.start.line === line &&
                    this.source.start.column > column
                ) {
                    return false;
                }

                if (
                    this.source.end.line === line &&
                    this.source.end.column < column
                ) {
                    return false;
                }

                return true;
            }

            return undefined;
        };

        _proto.stringifyProperty = function stringifyProperty(name) {
            return (this.raws && this.raws[name]) || this[name];
        };

        _proto.toString = function toString() {
            return [
                this.rawSpaceBefore,
                String(this.stringifyProperty('value')),
                this.rawSpaceAfter
            ].join('');
        };

        _createClass(Node, [
            {
                key: 'rawSpaceBefore',
                get: function get() {
                    var rawSpace =
                        this.raws &&
                        this.raws.spaces &&
                        this.raws.spaces.before;

                    if (rawSpace === undefined) {
                        rawSpace = this.spaces && this.spaces.before;
                    }

                    return rawSpace || '';
                },
                set: function set(raw) {
                    (0, util.ensureObject)(this, 'raws', 'spaces');
                    this.raws.spaces.before = raw;
                }
            },

            {
                key: 'rawSpaceAfter',
                get: function get() {
                    var rawSpace =
                        this.raws && this.raws.spaces && this.raws.spaces.after;

                    if (rawSpace === undefined) {
                        rawSpace = this.spaces.after;
                    }

                    return rawSpace || '';
                },
                set: function set(raw) {
                    (0, util.ensureObject)(this, 'raws', 'spaces');
                    this.raws.spaces.after = raw;
                }
            }
        ]);

        return Node;
    })();

    exports.default = Node;
    module.exports = exports.default;
});

unwrapExports(node);

var types = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.UNIVERSAL = exports.ATTRIBUTE = exports.CLASS = exports.COMBINATOR = exports.COMMENT = exports.ID = exports.NESTING = exports.PSEUDO = exports.ROOT = exports.SELECTOR = exports.STRING = exports.TAG = void 0;
    var TAG = 'tag';
    exports.TAG = TAG;
    var STRING = 'string';
    exports.STRING = STRING;
    var SELECTOR = 'selector';
    exports.SELECTOR = SELECTOR;
    var ROOT = 'root';
    exports.ROOT = ROOT;
    var PSEUDO = 'pseudo';
    exports.PSEUDO = PSEUDO;
    var NESTING = 'nesting';
    exports.NESTING = NESTING;
    var ID = 'id';
    exports.ID = ID;
    var COMMENT = 'comment';
    exports.COMMENT = COMMENT;
    var COMBINATOR = 'combinator';
    exports.COMBINATOR = COMBINATOR;
    var CLASS = 'class';
    exports.CLASS = CLASS;
    var ATTRIBUTE = 'attribute';
    exports.ATTRIBUTE = ATTRIBUTE;
    var UNIVERSAL = 'universal';
    exports.UNIVERSAL = UNIVERSAL;
});

unwrapExports(types);
var types_1 = types.UNIVERSAL;
var types_2 = types.ATTRIBUTE;
var types_3 = types.CLASS;
var types_4 = types.COMBINATOR;
var types_5 = types.COMMENT;
var types_6 = types.ID;
var types_7 = types.NESTING;
var types_8 = types.PSEUDO;
var types_9 = types.ROOT;
var types_10 = types.SELECTOR;
var types_11 = types.STRING;
var types_12 = types.TAG;

var container = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _node = _interopRequireDefault(node);

    var types$1 = _interopRequireWildcard(types);

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};
            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc =
                            Object.defineProperty &&
                            Object.getOwnPropertyDescriptor
                                ? Object.getOwnPropertyDescriptor(obj, key)
                                : {};
                        if (desc.get || desc.set) {
                            Object.defineProperty(newObj, key, desc);
                        } else {
                            newObj[key] = obj[key];
                        }
                    }
                }
            }
            newObj.default = obj;
            return newObj;
        }
    }

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) {
                descriptor.writable = true;
            }
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) {
            _defineProperties(Constructor.prototype, protoProps);
        }
        if (staticProps) {
            _defineProperties(Constructor, staticProps);
        }
        return Constructor;
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    var Container = (function (_Node) {
        _inheritsLoose(Container, _Node);

        function Container(opts) {
            var _this;

            _this = _Node.call(this, opts) || this;

            if (!_this.nodes) {
                _this.nodes = [];
            }

            return _this;
        }

        var _proto = Container.prototype;

        _proto.append = function append(selector) {
            selector.parent = this;
            this.nodes.push(selector);
            return this;
        };

        _proto.prepend = function prepend(selector) {
            selector.parent = this;
            this.nodes.unshift(selector);
            return this;
        };

        _proto.at = function at(index) {
            return this.nodes[index];
        };

        _proto.index = function index(child) {
            if (typeof child === 'number') {
                return child;
            }

            return this.nodes.indexOf(child);
        };

        _proto.removeChild = function removeChild(child) {
            child = this.index(child);
            this.at(child).parent = undefined;
            this.nodes.splice(child, 1);
            var index;

            for (var id in this.indexes) {
                index = this.indexes[id];

                if (index >= child) {
                    this.indexes[id] = index - 1;
                }
            }

            return this;
        };

        _proto.removeAll = function removeAll() {
            for (
                var _iterator = this.nodes,
                    _isArray = Array.isArray(_iterator),
                    _i = 0,
                    _iterator = _isArray
                        ? _iterator
                        : _iterator[Symbol.iterator]();
                ;

            ) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) {
                        break;
                    }
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) {
                        break;
                    }
                    _ref = _i.value;
                }

                var node = _ref;
                node.parent = undefined;
            }

            this.nodes = [];
            return this;
        };

        _proto.empty = function empty() {
            return this.removeAll();
        };

        _proto.insertAfter = function insertAfter(oldNode, newNode) {
            newNode.parent = this;
            var oldIndex = this.index(oldNode);
            this.nodes.splice(oldIndex + 1, 0, newNode);
            newNode.parent = this;
            var index;

            for (var id in this.indexes) {
                index = this.indexes[id];

                if (oldIndex <= index) {
                    this.indexes[id] = index + 1;
                }
            }

            return this;
        };

        _proto.insertBefore = function insertBefore(oldNode, newNode) {
            newNode.parent = this;
            var oldIndex = this.index(oldNode);
            this.nodes.splice(oldIndex, 0, newNode);
            newNode.parent = this;
            var index;

            for (var id in this.indexes) {
                index = this.indexes[id];

                if (index <= oldIndex) {
                    this.indexes[id] = index + 1;
                }
            }

            return this;
        };

        _proto._findChildAtPosition = function _findChildAtPosition(line, col) {
            var found = undefined;
            this.each(function (node) {
                if (node.atPosition) {
                    var foundChild = node.atPosition(line, col);

                    if (foundChild) {
                        found = foundChild;
                        return false;
                    }
                } else if (node.isAtPosition(line, col)) {
                    found = node;
                    return false;
                }
            });
            return found;
        };

        _proto.atPosition = function atPosition(line, col) {
            if (this.isAtPosition(line, col)) {
                return this._findChildAtPosition(line, col) || this;
            } else {
                return undefined;
            }
        };

        _proto._inferEndPosition = function _inferEndPosition() {
            if (this.last && this.last.source && this.last.source.end) {
                this.source = this.source || {};
                this.source.end = this.source.end || {};
                objectAssign(this.source.end, this.last.source.end);
            }
        };

        _proto.each = function each(callback) {
            if (!this.lastEach) {
                this.lastEach = 0;
            }

            if (!this.indexes) {
                this.indexes = {};
            }

            this.lastEach++;
            var id = this.lastEach;
            this.indexes[id] = 0;

            if (!this.length) {
                return undefined;
            }

            var index, result;

            while (this.indexes[id] < this.length) {
                index = this.indexes[id];
                result = callback(this.at(index), index);

                if (result === false) {
                    break;
                }

                this.indexes[id] += 1;
            }

            delete this.indexes[id];

            if (result === false) {
                return false;
            }
        };

        _proto.walk = function walk(callback) {
            return this.each(function (node, i) {
                var result = callback(node, i);

                if (result !== false && node.length) {
                    result = node.walk(callback);
                }

                if (result === false) {
                    return false;
                }
            });
        };

        _proto.walkAttributes = function walkAttributes(callback) {
            var _this2 = this;

            return this.walk(function (selector) {
                if (selector.type === types$1.ATTRIBUTE) {
                    return callback.call(_this2, selector);
                }
            });
        };

        _proto.walkClasses = function walkClasses(callback) {
            var _this3 = this;

            return this.walk(function (selector) {
                if (selector.type === types$1.CLASS) {
                    return callback.call(_this3, selector);
                }
            });
        };

        _proto.walkCombinators = function walkCombinators(callback) {
            var _this4 = this;

            return this.walk(function (selector) {
                if (selector.type === types$1.COMBINATOR) {
                    return callback.call(_this4, selector);
                }
            });
        };

        _proto.walkComments = function walkComments(callback) {
            var _this5 = this;

            return this.walk(function (selector) {
                if (selector.type === types$1.COMMENT) {
                    return callback.call(_this5, selector);
                }
            });
        };

        _proto.walkIds = function walkIds(callback) {
            var _this6 = this;

            return this.walk(function (selector) {
                if (selector.type === types$1.ID) {
                    return callback.call(_this6, selector);
                }
            });
        };

        _proto.walkNesting = function walkNesting(callback) {
            var _this7 = this;

            return this.walk(function (selector) {
                if (selector.type === types$1.NESTING) {
                    return callback.call(_this7, selector);
                }
            });
        };

        _proto.walkPseudos = function walkPseudos(callback) {
            var _this8 = this;

            return this.walk(function (selector) {
                if (selector.type === types$1.PSEUDO) {
                    return callback.call(_this8, selector);
                }
            });
        };

        _proto.walkTags = function walkTags(callback) {
            var _this9 = this;

            return this.walk(function (selector) {
                if (selector.type === types$1.TAG) {
                    return callback.call(_this9, selector);
                }
            });
        };

        _proto.walkUniversals = function walkUniversals(callback) {
            var _this10 = this;

            return this.walk(function (selector) {
                if (selector.type === types$1.UNIVERSAL) {
                    return callback.call(_this10, selector);
                }
            });
        };

        _proto.split = function split(callback) {
            var _this11 = this;

            var current = [];
            return this.reduce(function (memo, node, index) {
                var split = callback.call(_this11, node);
                current.push(node);

                if (split) {
                    memo.push(current);
                    current = [];
                } else if (index === _this11.length - 1) {
                    memo.push(current);
                }

                return memo;
            }, []);
        };

        _proto.map = function map(callback) {
            return this.nodes.map(callback);
        };

        _proto.reduce = function reduce(callback, memo) {
            return this.nodes.reduce(callback, memo);
        };

        _proto.every = function every(callback) {
            return this.nodes.every(callback);
        };

        _proto.some = function some(callback) {
            return this.nodes.some(callback);
        };

        _proto.filter = function filter(callback) {
            return this.nodes.filter(callback);
        };

        _proto.sort = function sort(callback) {
            return this.nodes.sort(callback);
        };

        _proto.toString = function toString() {
            return this.map(String).join('');
        };

        _createClass(Container, [
            {
                key: 'first',
                get: function get() {
                    return this.at(0);
                }
            },

            {
                key: 'last',
                get: function get() {
                    return this.at(this.length - 1);
                }
            },

            {
                key: 'length',
                get: function get() {
                    return this.nodes.length;
                }
            }
        ]);

        return Container;
    })(_node.default);

    exports.default = Container;
    module.exports = exports.default;
});

unwrapExports(container);

var root = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _container = _interopRequireDefault(container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) {
                descriptor.writable = true;
            }
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) {
            _defineProperties(Constructor.prototype, protoProps);
        }
        if (staticProps) {
            _defineProperties(Constructor, staticProps);
        }
        return Constructor;
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    var Root = (function (_Container) {
        _inheritsLoose(Root, _Container);

        function Root(opts) {
            var _this;

            _this = _Container.call(this, opts) || this;
            _this.type = types.ROOT;
            return _this;
        }

        var _proto = Root.prototype;

        _proto.toString = function toString() {
            var str = this.reduce(function (memo, selector) {
                memo.push(String(selector));
                return memo;
            }, []).join(',');
            return this.trailingComma ? str + ',' : str;
        };

        _proto.error = function error(message, options) {
            if (this._error) {
                return this._error(message, options);
            } else {
                return new Error(message);
            }
        };

        _createClass(Root, [
            {
                key: 'errorGenerator',
                set: function set(handler) {
                    this._error = handler;
                }
            }
        ]);

        return Root;
    })(_container.default);

    exports.default = Root;
    module.exports = exports.default;
});

unwrapExports(root);

var selector = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _container = _interopRequireDefault(container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    var Selector = (function (_Container) {
        _inheritsLoose(Selector, _Container);

        function Selector(opts) {
            var _this;

            _this = _Container.call(this, opts) || this;
            _this.type = types.SELECTOR;
            return _this;
        }

        return Selector;
    })(_container.default);

    exports.default = Selector;
    module.exports = exports.default;
});

unwrapExports(selector);

var object = {};
var hasOwnProperty$1 = object.hasOwnProperty;
var merge = function merge(options, defaults) {
    if (!options) {
        return defaults;
    }
    var result = {};
    for (var key in defaults) {
        result[key] = hasOwnProperty$1.call(options, key)
            ? options[key]
            : defaults[key];
    }
    return result;
};

var regexAnySingleEscape = /[ -,\.\/:-@\[-\^`\{-~]/;
var regexSingleEscape = /[ -,\.\/:-@\[\]\^`\{-~]/;
var regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;

var cssesc = function cssesc(string, options) {
    options = merge(options, cssesc.options);
    if (options.quotes != 'single' && options.quotes != 'double') {
        options.quotes = 'single';
    }
    var quote = options.quotes == 'double' ? '"' : "'";
    var isIdentifier = options.isIdentifier;

    var firstChar = string.charAt(0);
    var output = '';
    var counter = 0;
    var length = string.length;
    while (counter < length) {
        var character = string.charAt(counter++);
        var codePoint = character.charCodeAt();
        var value = void 0;

        if (codePoint < 0x20 || codePoint > 0x7e) {
            if (
                codePoint >= 0xd800 &&
                codePoint <= 0xdbff &&
                counter < length
            ) {
                var extra = string.charCodeAt(counter++);
                if ((extra & 0xfc00) == 0xdc00) {
                    codePoint =
                        ((codePoint & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                } else {
                    counter--;
                }
            }
            value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
        } else {
            if (options.escapeEverything) {
                if (regexAnySingleEscape.test(character)) {
                    value = '\\' + character;
                } else {
                    value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
                }
            } else if (/[\t\n\f\r\x0B]/.test(character)) {
                value = '\\' + codePoint.toString(16).toUpperCase() + ' ';
            } else if (
                character == '\\' ||
                (!isIdentifier &&
                    ((character == '"' && quote == character) ||
                        (character == "'" && quote == character))) ||
                (isIdentifier && regexSingleEscape.test(character))
            ) {
                value = '\\' + character;
            } else {
                value = character;
            }
        }
        output += value;
    }

    if (isIdentifier) {
        if (/^-[-\d]/.test(output)) {
            output = '\\-' + output.slice(1);
        } else if (/\d/.test(firstChar)) {
            output = '\\3' + firstChar + ' ' + output.slice(1);
        }
    }

    output = output.replace(regexExcessiveSpaces, function ($0, $1, $2) {
        if ($1 && $1.length % 2) {
            return $0;
        }

        return ($1 || '') + $2;
    });

    if (!isIdentifier && options.wrap) {
        return quote + output + quote;
    }
    return output;
};

cssesc.options = {
    escapeEverything: false,
    isIdentifier: false,
    quotes: 'single',
    wrap: false
};

cssesc.version = '3.0.0';

var cssesc_1 = cssesc;

var className = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _cssesc = _interopRequireDefault(cssesc_1);

    var _node = _interopRequireDefault(node);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) {
                descriptor.writable = true;
            }
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) {
            _defineProperties(Constructor.prototype, protoProps);
        }
        if (staticProps) {
            _defineProperties(Constructor, staticProps);
        }
        return Constructor;
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    var ClassName = (function (_Node) {
        _inheritsLoose(ClassName, _Node);

        function ClassName(opts) {
            var _this;

            _this = _Node.call(this, opts) || this;
            _this.type = types.CLASS;
            _this._constructed = true;
            return _this;
        }

        var _proto = ClassName.prototype;

        _proto.toString = function toString() {
            return [
                this.rawSpaceBefore,
                String('.' + this.stringifyProperty('value')),
                this.rawSpaceAfter
            ].join('');
        };

        _createClass(ClassName, [
            {
                key: 'value',
                set: function set(v) {
                    if (this._constructed) {
                        var escaped = (0, _cssesc.default)(v, {
                            isIdentifier: true
                        });

                        if (escaped !== v) {
                            (0, util.ensureObject)(this, 'raws');
                            this.raws.value = escaped;
                        } else if (this.raws) {
                            delete this.raws.value;
                        }
                    }

                    this._value = v;
                },
                get: function get() {
                    return this._value;
                }
            }
        ]);

        return ClassName;
    })(_node.default);

    exports.default = ClassName;
    module.exports = exports.default;
});

unwrapExports(className);

var comment = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _node = _interopRequireDefault(node);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    var Comment = (function (_Node) {
        _inheritsLoose(Comment, _Node);

        function Comment(opts) {
            var _this;

            _this = _Node.call(this, opts) || this;
            _this.type = types.COMMENT;
            return _this;
        }

        return Comment;
    })(_node.default);

    exports.default = Comment;
    module.exports = exports.default;
});

unwrapExports(comment);

var id = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _node = _interopRequireDefault(node);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    var ID = (function (_Node) {
        _inheritsLoose(ID, _Node);

        function ID(opts) {
            var _this;

            _this = _Node.call(this, opts) || this;
            _this.type = types.ID;
            return _this;
        }

        var _proto = ID.prototype;

        _proto.toString = function toString() {
            return [
                this.rawSpaceBefore,
                String('#' + this.stringifyProperty('value')),
                this.rawSpaceAfter
            ].join('');
        };

        return ID;
    })(_node.default);

    exports.default = ID;
    module.exports = exports.default;
});

unwrapExports(id);

var namespace = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _cssesc = _interopRequireDefault(cssesc_1);

    var _node = _interopRequireDefault(node);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) {
                descriptor.writable = true;
            }
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) {
            _defineProperties(Constructor.prototype, protoProps);
        }
        if (staticProps) {
            _defineProperties(Constructor, staticProps);
        }
        return Constructor;
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    var Namespace = (function (_Node) {
        _inheritsLoose(Namespace, _Node);

        function Namespace() {
            return _Node.apply(this, arguments) || this;
        }

        var _proto = Namespace.prototype;

        _proto.qualifiedName = function qualifiedName(value) {
            if (this.namespace) {
                return this.namespaceString + '|' + value;
            } else {
                return value;
            }
        };

        _proto.toString = function toString() {
            return [
                this.rawSpaceBefore,
                this.qualifiedName(this.stringifyProperty('value')),
                this.rawSpaceAfter
            ].join('');
        };

        _createClass(Namespace, [
            {
                key: 'namespace',
                get: function get() {
                    return this._namespace;
                },
                set: function set(namespace) {
                    if (
                        namespace === true ||
                        namespace === '*' ||
                        namespace === '&'
                    ) {
                        this._namespace = namespace;

                        if (this.raws) {
                            delete this.raws.namespace;
                        }

                        return;
                    }

                    var escaped = (0, _cssesc.default)(namespace, {
                        isIdentifier: true
                    });

                    this._namespace = namespace;

                    if (escaped !== namespace) {
                        (0, util.ensureObject)(this, 'raws');
                        this.raws.namespace = escaped;
                    } else if (this.raws) {
                        delete this.raws.namespace;
                    }
                }
            },

            {
                key: 'ns',
                get: function get() {
                    return this._namespace;
                },
                set: function set(namespace) {
                    this.namespace = namespace;
                }
            },

            {
                key: 'namespaceString',
                get: function get() {
                    if (this.namespace) {
                        var ns = this.stringifyProperty('namespace');

                        if (ns === true) {
                            return '';
                        } else {
                            return ns;
                        }
                    } else {
                        return '';
                    }
                }
            }
        ]);

        return Namespace;
    })(_node.default);

    exports.default = Namespace;
    module.exports = exports.default;
});

unwrapExports(namespace);

var tag = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _namespace = _interopRequireDefault(namespace);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    var Tag = (function (_Namespace) {
        _inheritsLoose(Tag, _Namespace);

        function Tag(opts) {
            var _this;

            _this = _Namespace.call(this, opts) || this;
            _this.type = types.TAG;
            return _this;
        }

        return Tag;
    })(_namespace.default);

    exports.default = Tag;
    module.exports = exports.default;
});

unwrapExports(tag);

var string = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _node = _interopRequireDefault(node);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    var String = (function (_Node) {
        _inheritsLoose(String, _Node);

        function String(opts) {
            var _this;

            _this = _Node.call(this, opts) || this;
            _this.type = types.STRING;
            return _this;
        }

        return String;
    })(_node.default);

    exports.default = String;
    module.exports = exports.default;
});

unwrapExports(string);

var pseudo = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _container = _interopRequireDefault(container);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    var Pseudo = (function (_Container) {
        _inheritsLoose(Pseudo, _Container);

        function Pseudo(opts) {
            var _this;

            _this = _Container.call(this, opts) || this;
            _this.type = types.PSEUDO;
            return _this;
        }

        var _proto = Pseudo.prototype;

        _proto.toString = function toString() {
            var params = this.length
                ? '(' + this.map(String).join(',') + ')'
                : '';
            return [
                this.rawSpaceBefore,
                this.stringifyProperty('value'),
                params,
                this.rawSpaceAfter
            ].join('');
        };

        return Pseudo;
    })(_container.default);

    exports.default = Pseudo;
    module.exports = exports.default;
});

unwrapExports(pseudo);

var global$1 =
    typeof global !== 'undefined'
        ? global
        : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
        ? window
        : {};

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var inited = false;
function init() {
    inited = true;
    var code =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
    }

    revLookup['-'.charCodeAt(0)] = 62;
    revLookup['_'.charCodeAt(0)] = 63;
}

function toByteArray(b64) {
    if (!inited) {
        init();
    }
    var i, j, l, tmp, placeHolders, arr;
    var len = b64.length;

    if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
    }

    placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

    arr = new Arr((len * 3) / 4 - placeHolders);

    l = placeHolders > 0 ? len - 4 : len;

    var L = 0;

    for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp =
            (revLookup[b64.charCodeAt(i)] << 18) |
            (revLookup[b64.charCodeAt(i + 1)] << 12) |
            (revLookup[b64.charCodeAt(i + 2)] << 6) |
            revLookup[b64.charCodeAt(i + 3)];
        arr[L++] = (tmp >> 16) & 0xff;
        arr[L++] = (tmp >> 8) & 0xff;
        arr[L++] = tmp & 0xff;
    }

    if (placeHolders === 2) {
        tmp =
            (revLookup[b64.charCodeAt(i)] << 2) |
            (revLookup[b64.charCodeAt(i + 1)] >> 4);
        arr[L++] = tmp & 0xff;
    } else if (placeHolders === 1) {
        tmp =
            (revLookup[b64.charCodeAt(i)] << 10) |
            (revLookup[b64.charCodeAt(i + 1)] << 4) |
            (revLookup[b64.charCodeAt(i + 2)] >> 2);
        arr[L++] = (tmp >> 8) & 0xff;
        arr[L++] = tmp & 0xff;
    }

    return arr;
}

function tripletToBase64(num) {
    return (
        lookup[(num >> 18) & 0x3f] +
        lookup[(num >> 12) & 0x3f] +
        lookup[(num >> 6) & 0x3f] +
        lookup[num & 0x3f]
    );
}

function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + uint8[i + 2];
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}

function fromByteArray(uint8) {
    if (!inited) {
        init();
    }
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3;
    var output = '';
    var parts = [];
    var maxChunkLength = 16383;

    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(
            encodeChunk(
                uint8,
                i,
                i + maxChunkLength > len2 ? len2 : i + maxChunkLength
            )
        );
    }

    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        output += lookup[tmp >> 2];
        output += lookup[(tmp << 4) & 0x3f];
        output += '==';
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        output += lookup[tmp >> 10];
        output += lookup[(tmp >> 4) & 0x3f];
        output += lookup[(tmp << 2) & 0x3f];
        output += '=';
    }

    parts.push(output);

    return parts.join('');
}

function read(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];

    i += d;

    e = s & ((1 << -nBits) - 1);
    s >>= -nBits;
    nBits += eLen;
    for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & ((1 << -nBits) - 1);
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
        e = 1 - eBias;
    } else if (e === eMax) {
        return m ? NaN : (s ? -1 : 1) * Infinity;
    } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
}

function write(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) {
            value += rt / c;
        } else {
            value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
            e++;
            c /= 2;
        }

        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }

    for (
        ;
        mLen >= 8;
        buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8
    ) {}

    e = (e << mLen) | m;
    eLen += mLen;
    for (
        ;
        eLen > 0;
        buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8
    ) {}

    buffer[offset + i - d] |= s * 128;
}

var toString = {}.toString;

var isArray =
    Array.isArray ||
    function (arr) {
        return toString.call(arr) == '[object Array]';
    };

var INSPECT_MAX_BYTES = 50;

Buffer.TYPED_ARRAY_SUPPORT =
    global$1.TYPED_ARRAY_SUPPORT !== undefined
        ? global$1.TYPED_ARRAY_SUPPORT
        : true;

function kMaxLength() {
    return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
    if (kMaxLength() < length) {
        throw new RangeError('Invalid typed array length');
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        that = new Uint8Array(length);
        that.__proto__ = Buffer.prototype;
    } else {
        if (that === null) {
            that = new Buffer(length);
        }
        that.length = length;
    }

    return that;
}

function Buffer(arg, encodingOrOffset, length) {
    if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, encodingOrOffset, length);
    }

    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
            throw new Error(
                'If encoding is specified then the first argument must be a string'
            );
        }
        return allocUnsafe(this, arg);
    }
    return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192;

Buffer._augment = function (arr) {
    arr.__proto__ = Buffer.prototype;
    return arr;
};

function from(that, value, encodingOrOffset, length) {
    if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number');
    }

    if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length);
    }

    if (typeof value === 'string') {
        return fromString(that, value, encodingOrOffset);
    }

    return fromObject(that, value);
}

Buffer.from = function (value, encodingOrOffset, length) {
    return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
    Buffer.prototype.__proto__ = Uint8Array.prototype;
    Buffer.__proto__ = Uint8Array;
}

function assertSize(size) {
    if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number');
    } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative');
    }
}

function alloc(that, size, fill, encoding) {
    assertSize(size);
    if (size <= 0) {
        return createBuffer(that, size);
    }
    if (fill !== undefined) {
        return typeof encoding === 'string'
            ? createBuffer(that, size).fill(fill, encoding)
            : createBuffer(that, size).fill(fill);
    }
    return createBuffer(that, size);
}

Buffer.alloc = function (size, fill, encoding) {
    return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
    assertSize(size);
    that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
            that[i] = 0;
        }
    }
    return that;
}

Buffer.allocUnsafe = function (size) {
    return allocUnsafe(null, size);
};

Buffer.allocUnsafeSlow = function (size) {
    return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
    }

    if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding');
    }

    var length = byteLength(string, encoding) | 0;
    that = createBuffer(that, length);

    var actual = that.write(string, encoding);

    if (actual !== length) {
        that = that.slice(0, actual);
    }

    return that;
}

function fromArrayLike(that, array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    that = createBuffer(that, length);
    for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
    }
    return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
    array.byteLength;

    if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError("'offset' is out of bounds");
    }

    if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError("'length' is out of bounds");
    }

    if (byteOffset === undefined && length === undefined) {
        array = new Uint8Array(array);
    } else if (length === undefined) {
        array = new Uint8Array(array, byteOffset);
    } else {
        array = new Uint8Array(array, byteOffset, length);
    }

    if (Buffer.TYPED_ARRAY_SUPPORT) {
        that = array;
        that.__proto__ = Buffer.prototype;
    } else {
        that = fromArrayLike(that, array);
    }
    return that;
}

function fromObject(that, obj) {
    if (internalIsBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);

        if (that.length === 0) {
            return that;
        }

        obj.copy(that, 0, 0, len);
        return that;
    }

    if (obj) {
        if (
            (typeof ArrayBuffer !== 'undefined' &&
                obj.buffer instanceof ArrayBuffer) ||
            'length' in obj
        ) {
            if (typeof obj.length !== 'number' || isnan(obj.length)) {
                return createBuffer(that, 0);
            }
            return fromArrayLike(that, obj);
        }

        if (obj.type === 'Buffer' && isArray(obj.data)) {
            return fromArrayLike(that, obj.data);
        }
    }

    throw new TypeError(
        'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
    );
}

function checked(length) {
    if (length >= kMaxLength()) {
        throw new RangeError(
            'Attempt to allocate Buffer larger than maximum ' +
                'size: 0x' +
                kMaxLength().toString(16) +
                ' bytes'
        );
    }
    return length | 0;
}
Buffer.isBuffer = isBuffer;
function internalIsBuffer(b) {
    return !!(b != null && b._isBuffer);
}

Buffer.compare = function compare(a, b) {
    if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
        throw new TypeError('Arguments must be Buffers');
    }

    if (a === b) {
        return 0;
    }

    var x = a.length;
    var y = b.length;

    for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
            x = a[i];
            y = b[i];
            break;
        }
    }

    if (x < y) {
        return -1;
    }
    if (y < x) {
        return 1;
    }
    return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
    switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};

Buffer.concat = function concat(list, length) {
    if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers');
    }

    if (list.length === 0) {
        return Buffer.alloc(0);
    }

    var i;
    if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
            length += list[i].length;
        }
    }

    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!internalIsBuffer(buf)) {
            throw new TypeError('"list" argument must be an Array of Buffers');
        }
        buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};

function byteLength(string, encoding) {
    if (internalIsBuffer(string)) {
        return string.length;
    }
    if (
        typeof ArrayBuffer !== 'undefined' &&
        typeof ArrayBuffer.isView === 'function' &&
        (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)
    ) {
        return string.byteLength;
    }
    if (typeof string !== 'string') {
        string = '' + string;
    }

    var len = string.length;
    if (len === 0) {
        return 0;
    }

    var loweredCase = false;
    for (;;) {
        switch (encoding) {
            case 'ascii':
            case 'latin1':
            case 'binary':
                return len;
            case 'utf8':
            case 'utf-8':
            case undefined:
                return utf8ToBytes(string).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return len * 2;
            case 'hex':
                return len >>> 1;
            case 'base64':
                return base64ToBytes(string).length;
            default:
                if (loweredCase) {
                    return utf8ToBytes(string).length;
                }
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
        }
    }
}
Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
    var loweredCase = false;

    if (start === undefined || start < 0) {
        start = 0;
    }

    if (start > this.length) {
        return '';
    }

    if (end === undefined || end > this.length) {
        end = this.length;
    }

    if (end <= 0) {
        return '';
    }

    end >>>= 0;
    start >>>= 0;

    if (end <= start) {
        return '';
    }

    if (!encoding) {
        encoding = 'utf8';
    }

    while (true) {
        switch (encoding) {
            case 'hex':
                return hexSlice(this, start, end);

            case 'utf8':
            case 'utf-8':
                return utf8Slice(this, start, end);

            case 'ascii':
                return asciiSlice(this, start, end);

            case 'latin1':
            case 'binary':
                return latin1Slice(this, start, end);

            case 'base64':
                return base64Slice(this, start, end);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return utf16leSlice(this, start, end);

            default:
                if (loweredCase) {
                    throw new TypeError('Unknown encoding: ' + encoding);
                }
                encoding = (encoding + '').toLowerCase();
                loweredCase = true;
        }
    }
}

Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits');
    }
    for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
    }
    return this;
};

Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits');
    }
    for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};

Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits');
    }
    for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};

Buffer.prototype.toString = function toString() {
    var length = this.length | 0;
    if (length === 0) {
        return '';
    }
    if (arguments.length === 0) {
        return utf8Slice(this, 0, length);
    }
    return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
    if (!internalIsBuffer(b)) {
        throw new TypeError('Argument must be a Buffer');
    }
    if (this === b) {
        return true;
    }
    return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = INSPECT_MAX_BYTES;
    if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
        if (this.length > max) {
            str += ' ... ';
        }
    }
    return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(
    target,
    start,
    end,
    thisStart,
    thisEnd
) {
    if (!internalIsBuffer(target)) {
        throw new TypeError('Argument must be a Buffer');
    }

    if (start === undefined) {
        start = 0;
    }
    if (end === undefined) {
        end = target ? target.length : 0;
    }
    if (thisStart === undefined) {
        thisStart = 0;
    }
    if (thisEnd === undefined) {
        thisEnd = this.length;
    }

    if (
        start < 0 ||
        end > target.length ||
        thisStart < 0 ||
        thisEnd > this.length
    ) {
        throw new RangeError('out of range index');
    }

    if (thisStart >= thisEnd && start >= end) {
        return 0;
    }
    if (thisStart >= thisEnd) {
        return -1;
    }
    if (start >= end) {
        return 1;
    }

    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;

    if (this === target) {
        return 0;
    }

    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);

    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);

    for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
            x = thisCopy[i];
            y = targetCopy[i];
            break;
        }
    }

    if (x < y) {
        return -1;
    }
    if (y < x) {
        return 1;
    }
    return 0;
};

function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    if (buffer.length === 0) {
        return -1;
    }

    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
    } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
    }
    byteOffset = +byteOffset;
    if (isNaN(byteOffset)) {
        byteOffset = dir ? 0 : buffer.length - 1;
    }

    if (byteOffset < 0) {
        byteOffset = buffer.length + byteOffset;
    }
    if (byteOffset >= buffer.length) {
        if (dir) {
            return -1;
        } else {
            byteOffset = buffer.length - 1;
        }
    } else if (byteOffset < 0) {
        if (dir) {
            byteOffset = 0;
        } else {
            return -1;
        }
    }

    if (typeof val === 'string') {
        val = Buffer.from(val, encoding);
    }

    if (internalIsBuffer(val)) {
        if (val.length === 0) {
            return -1;
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xff;
        if (
            Buffer.TYPED_ARRAY_SUPPORT &&
            typeof Uint8Array.prototype.indexOf === 'function'
        ) {
            if (dir) {
                return Uint8Array.prototype.indexOf.call(
                    buffer,
                    val,
                    byteOffset
                );
            } else {
                return Uint8Array.prototype.lastIndexOf.call(
                    buffer,
                    val,
                    byteOffset
                );
            }
        }
        return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
    }

    throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;

    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (
            encoding === 'ucs2' ||
            encoding === 'ucs-2' ||
            encoding === 'utf16le' ||
            encoding === 'utf-16le'
        ) {
            if (arr.length < 2 || val.length < 2) {
                return -1;
            }
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }

    function read(buf, i) {
        if (indexSize === 1) {
            return buf[i];
        } else {
            return buf.readUInt16BE(i * indexSize);
        }
    }

    var i;
    if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
            if (
                read(arr, i) ===
                read(val, foundIndex === -1 ? 0 : i - foundIndex)
            ) {
                if (foundIndex === -1) {
                    foundIndex = i;
                }
                if (i - foundIndex + 1 === valLength) {
                    return foundIndex * indexSize;
                }
            } else {
                if (foundIndex !== -1) {
                    i -= i - foundIndex;
                }
                foundIndex = -1;
            }
        }
    } else {
        if (byteOffset + valLength > arrLength) {
            byteOffset = arrLength - valLength;
        }
        for (i = byteOffset; i >= 0; i--) {
            var found = true;
            for (var j = 0; j < valLength; j++) {
                if (read(arr, i + j) !== read(val, j)) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return i;
            }
        }
    }

    return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) {
        length = remaining;
    } else {
        length = Number(length);
        if (length > remaining) {
            length = remaining;
        }
    }

    var strLen = string.length;
    if (strLen % 2 !== 0) {
        throw new TypeError('Invalid hex string');
    }

    if (length > strLen / 2) {
        length = strLen / 2;
    }
    for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed)) {
            return i;
        }
        buf[offset + i] = parsed;
    }
    return i;
}

function utf8Write(buf, string, offset, length) {
    return blitBuffer(
        utf8ToBytes(string, buf.length - offset),
        buf,
        offset,
        length
    );
}

function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
    return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
    return blitBuffer(
        utf16leToBytes(string, buf.length - offset),
        buf,
        offset,
        length
    );
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
            length = length | 0;
            if (encoding === undefined) {
                encoding = 'utf8';
            }
        } else {
            encoding = length;
            length = undefined;
        }
    } else {
        throw new Error(
            'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        );
    }

    var remaining = this.length - offset;
    if (length === undefined || length > remaining) {
        length = remaining;
    }

    if (
        (string.length > 0 && (length < 0 || offset < 0)) ||
        offset > this.length
    ) {
        throw new RangeError('Attempt to write outside buffer bounds');
    }

    if (!encoding) {
        encoding = 'utf8';
    }

    var loweredCase = false;
    for (;;) {
        switch (encoding) {
            case 'hex':
                return hexWrite(this, string, offset, length);

            case 'utf8':
            case 'utf-8':
                return utf8Write(this, string, offset, length);

            case 'ascii':
                return asciiWrite(this, string, offset, length);

            case 'latin1':
            case 'binary':
                return latin1Write(this, string, offset, length);

            case 'base64':
                return base64Write(this, string, offset, length);

            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return ucs2Write(this, string, offset, length);

            default:
                if (loweredCase) {
                    throw new TypeError('Unknown encoding: ' + encoding);
                }
                encoding = ('' + encoding).toLowerCase();
                loweredCase = true;
        }
    }
};

Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};

function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) {
        return fromByteArray(buf);
    } else {
        return fromByteArray(buf.slice(start, end));
    }
}

function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];

    var i = start;
    while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence =
            firstByte > 0xef
                ? 4
                : firstByte > 0xdf
                ? 3
                : firstByte > 0xbf
                ? 2
                : 1;

        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;

            switch (bytesPerSequence) {
                case 1:
                    if (firstByte < 0x80) {
                        codePoint = firstByte;
                    }
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xc0) === 0x80) {
                        tempCodePoint =
                            ((firstByte & 0x1f) << 0x6) | (secondByte & 0x3f);
                        if (tempCodePoint > 0x7f) {
                            codePoint = tempCodePoint;
                        }
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if (
                        (secondByte & 0xc0) === 0x80 &&
                        (thirdByte & 0xc0) === 0x80
                    ) {
                        tempCodePoint =
                            ((firstByte & 0xf) << 0xc) |
                            ((secondByte & 0x3f) << 0x6) |
                            (thirdByte & 0x3f);
                        if (
                            tempCodePoint > 0x7ff &&
                            (tempCodePoint < 0xd800 || tempCodePoint > 0xdfff)
                        ) {
                            codePoint = tempCodePoint;
                        }
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if (
                        (secondByte & 0xc0) === 0x80 &&
                        (thirdByte & 0xc0) === 0x80 &&
                        (fourthByte & 0xc0) === 0x80
                    ) {
                        tempCodePoint =
                            ((firstByte & 0xf) << 0x12) |
                            ((secondByte & 0x3f) << 0xc) |
                            ((thirdByte & 0x3f) << 0x6) |
                            (fourthByte & 0x3f);
                        if (
                            tempCodePoint > 0xffff &&
                            tempCodePoint < 0x110000
                        ) {
                            codePoint = tempCodePoint;
                        }
                    }
            }
        }

        if (codePoint === null) {
            codePoint = 0xfffd;
            bytesPerSequence = 1;
        } else if (codePoint > 0xffff) {
            codePoint -= 0x10000;
            res.push(((codePoint >>> 10) & 0x3ff) | 0xd800);
            codePoint = 0xdc00 | (codePoint & 0x3ff);
        }

        res.push(codePoint);
        i += bytesPerSequence;
    }

    return decodeCodePointsArray(res);
}

var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints);
    }

    var res = '';
    var i = 0;
    while (i < len) {
        res += String.fromCharCode.apply(
            String,
            codePoints.slice(i, (i += MAX_ARGUMENTS_LENGTH))
        );
    }
    return res;
}

function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7f);
    }
    return ret;
}

function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);

    for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
    }
    return ret;
}

function hexSlice(buf, start, end) {
    var len = buf.length;

    if (!start || start < 0) {
        start = 0;
    }
    if (!end || end < 0 || end > len) {
        end = len;
    }

    var out = '';
    for (var i = start; i < end; ++i) {
        out += toHex(buf[i]);
    }
    return out;
}

function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    }
    return res;
}

Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;

    if (start < 0) {
        start += len;
        if (start < 0) {
            start = 0;
        }
    } else if (start > len) {
        start = len;
    }

    if (end < 0) {
        end += len;
        if (end < 0) {
            end = 0;
        }
    } else if (end > len) {
        end = len;
    }

    if (end < start) {
        end = start;
    }

    var newBuf;
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer.prototype;
    } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for (var i = 0; i < sliceLen; ++i) {
            newBuf[i] = this[i + start];
        }
    }

    return newBuf;
};

function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) {
        throw new RangeError('offset is not uint');
    }
    if (offset + ext > length) {
        throw new RangeError('Trying to access beyond buffer length');
    }
}

Buffer.prototype.readUIntLE = function readUIntLE(
    offset,
    byteLength,
    noAssert
) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
    }

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
    }

    return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(
    offset,
    byteLength,
    noAssert
) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
    }

    var val = this[offset + --byteLength];
    var mul = 1;
    while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul;
    }

    return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    if (!noAssert) {
        checkOffset(offset, 1, this.length);
    }
    return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    if (!noAssert) {
        checkOffset(offset, 2, this.length);
    }
    return this[offset] | (this[offset + 1] << 8);
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    if (!noAssert) {
        checkOffset(offset, 2, this.length);
    }
    return (this[offset] << 8) | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    if (!noAssert) {
        checkOffset(offset, 4, this.length);
    }

    return (
        (this[offset] | (this[offset + 1] << 8) | (this[offset + 2] << 16)) +
        this[offset + 3] * 0x1000000
    );
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    if (!noAssert) {
        checkOffset(offset, 4, this.length);
    }

    return (
        this[offset] * 0x1000000 +
        ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3])
    );
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
    }

    var val = this[offset];
    var mul = 1;
    var i = 0;
    while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) {
        val -= Math.pow(2, 8 * byteLength);
    }

    return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
    }

    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul;
    }
    mul *= 0x80;

    if (val >= mul) {
        val -= Math.pow(2, 8 * byteLength);
    }

    return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    if (!noAssert) {
        checkOffset(offset, 1, this.length);
    }
    if (!(this[offset] & 0x80)) {
        return this[offset];
    }
    return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    if (!noAssert) {
        checkOffset(offset, 2, this.length);
    }
    var val = this[offset] | (this[offset + 1] << 8);
    return val & 0x8000 ? val | 0xffff0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    if (!noAssert) {
        checkOffset(offset, 2, this.length);
    }
    var val = this[offset + 1] | (this[offset] << 8);
    return val & 0x8000 ? val | 0xffff0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    if (!noAssert) {
        checkOffset(offset, 4, this.length);
    }

    return (
        this[offset] |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    );
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    if (!noAssert) {
        checkOffset(offset, 4, this.length);
    }

    return (
        (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        this[offset + 3]
    );
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    if (!noAssert) {
        checkOffset(offset, 4, this.length);
    }
    return read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    if (!noAssert) {
        checkOffset(offset, 4, this.length);
    }
    return read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    if (!noAssert) {
        checkOffset(offset, 8, this.length);
    }
    return read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    if (!noAssert) {
        checkOffset(offset, 8, this.length);
    }
    return read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
    if (!internalIsBuffer(buf)) {
        throw new TypeError('"buffer" argument must be a Buffer instance');
    }
    if (value > max || value < min) {
        throw new RangeError('"value" argument is out of bounds');
    }
    if (offset + ext > buf.length) {
        throw new RangeError('Index out of range');
    }
}

Buffer.prototype.writeUIntLE = function writeUIntLE(
    value,
    offset,
    byteLength,
    noAssert
) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var mul = 1;
    var i = 0;
    this[offset] = value & 0xff;
    while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xff;
    }

    return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(
    value,
    offset,
    byteLength,
    noAssert
) {
    value = +value;
    offset = offset | 0;
    byteLength = byteLength | 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
    }

    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xff;
    while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xff;
    }

    return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
        checkInt(this, value, offset, 1, 0xff, 0);
    }
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
        value = Math.floor(value);
    }
    this[offset] = value & 0xff;
    return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
    if (value < 0) {
        value = 0xffff + value + 1;
    }
    for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] =
            (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            ((littleEndian ? i : 1 - i) * 8);
    }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(
    value,
    offset,
    noAssert
) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
        checkInt(this, value, offset, 2, 0xffff, 0);
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
    } else {
        objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(
    value,
    offset,
    noAssert
) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
        checkInt(this, value, offset, 2, 0xffff, 0);
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
    } else {
        objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
    if (value < 0) {
        value = 0xffffffff + value + 1;
    }
    for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = (value >>> ((littleEndian ? i : 3 - i) * 8)) & 0xff;
    }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(
    value,
    offset,
    noAssert
) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
        checkInt(this, value, offset, 4, 0xffffffff, 0);
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = value >>> 24;
        this[offset + 2] = value >>> 16;
        this[offset + 1] = value >>> 8;
        this[offset] = value & 0xff;
    } else {
        objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(
    value,
    offset,
    noAssert
) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
        checkInt(this, value, offset, 4, 0xffffffff, 0);
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
    } else {
        objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(
    value,
    offset,
    byteLength,
    noAssert
) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xff;
    while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
            sub = 1;
        }
        this[offset + i] = (((value / mul) >> 0) - sub) & 0xff;
    }

    return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(
    value,
    offset,
    byteLength,
    noAssert
) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }

    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xff;
    while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
            sub = 1;
        }
        this[offset + i] = (((value / mul) >> 0) - sub) & 0xff;
    }

    return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
        checkInt(this, value, offset, 1, 0x7f, -0x80);
    }
    if (!Buffer.TYPED_ARRAY_SUPPORT) {
        value = Math.floor(value);
    }
    if (value < 0) {
        value = 0xff + value + 1;
    }
    this[offset] = value & 0xff;
    return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
        checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
    } else {
        objectWriteUInt16(this, value, offset, true);
    }
    return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
        checkInt(this, value, offset, 2, 0x7fff, -0x8000);
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 8;
        this[offset + 1] = value & 0xff;
    } else {
        objectWriteUInt16(this, value, offset, false);
    }
    return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
        checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value & 0xff;
        this[offset + 1] = value >>> 8;
        this[offset + 2] = value >>> 16;
        this[offset + 3] = value >>> 24;
    } else {
        objectWriteUInt32(this, value, offset, true);
    }
    return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset | 0;
    if (!noAssert) {
        checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
    }
    if (value < 0) {
        value = 0xffffffff + value + 1;
    }
    if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = value >>> 24;
        this[offset + 1] = value >>> 16;
        this[offset + 2] = value >>> 8;
        this[offset + 3] = value & 0xff;
    } else {
        objectWriteUInt32(this, value, offset, false);
    }
    return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) {
        throw new RangeError('Index out of range');
    }
    if (offset < 0) {
        throw new RangeError('Index out of range');
    }
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
    }
    write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
    if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
    }
    write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(
    value,
    offset,
    noAssert
) {
    return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(
    value,
    offset,
    noAssert
) {
    return writeDouble(this, value, offset, false, noAssert);
};

Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!start) {
        start = 0;
    }
    if (!end && end !== 0) {
        end = this.length;
    }
    if (targetStart >= target.length) {
        targetStart = target.length;
    }
    if (!targetStart) {
        targetStart = 0;
    }
    if (end > 0 && end < start) {
        end = start;
    }

    if (end === start) {
        return 0;
    }
    if (target.length === 0 || this.length === 0) {
        return 0;
    }

    if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds');
    }
    if (start < 0 || start >= this.length) {
        throw new RangeError('sourceStart out of bounds');
    }
    if (end < 0) {
        throw new RangeError('sourceEnd out of bounds');
    }

    if (end > this.length) {
        end = this.length;
    }
    if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
    }

    var len = end - start;
    var i;

    if (this === target && start < targetStart && targetStart < end) {
        for (i = len - 1; i >= 0; --i) {
            target[i + targetStart] = this[i + start];
        }
    } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        for (i = 0; i < len; ++i) {
            target[i + targetStart] = this[i + start];
        }
    } else {
        Uint8Array.prototype.set.call(
            target,
            this.subarray(start, start + len),
            targetStart
        );
    }

    return len;
};

Buffer.prototype.fill = function fill(val, start, end, encoding) {
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (code < 256) {
                val = code;
            }
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
            throw new TypeError('encoding must be a string');
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
            throw new TypeError('Unknown encoding: ' + encoding);
        }
    } else if (typeof val === 'number') {
        val = val & 255;
    }

    if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index');
    }

    if (end <= start) {
        return this;
    }

    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;

    if (!val) {
        val = 0;
    }

    var i;
    if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
            this[i] = val;
        }
    } else {
        var bytes = internalIsBuffer(val)
            ? val
            : utf8ToBytes(new Buffer(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
            this[i + start] = bytes[i % len];
        }
    }

    return this;
};

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
    str = stringtrim(str).replace(INVALID_BASE64_RE, '');

    if (str.length < 2) {
        return '';
    }

    while (str.length % 4 !== 0) {
        str = str + '=';
    }
    return str;
}

function stringtrim(str) {
    if (str.trim) {
        return str.trim();
    }
    return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
    if (n < 16) {
        return '0' + n.toString(16);
    }
    return n.toString(16);
}

function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];

    for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);

        if (codePoint > 0xd7ff && codePoint < 0xe000) {
            if (!leadSurrogate) {
                if (codePoint > 0xdbff) {
                    if ((units -= 3) > -1) {
                        bytes.push(0xef, 0xbf, 0xbd);
                    }
                    continue;
                } else if (i + 1 === length) {
                    if ((units -= 3) > -1) {
                        bytes.push(0xef, 0xbf, 0xbd);
                    }
                    continue;
                }

                leadSurrogate = codePoint;

                continue;
            }

            if (codePoint < 0xdc00) {
                if ((units -= 3) > -1) {
                    bytes.push(0xef, 0xbf, 0xbd);
                }
                leadSurrogate = codePoint;
                continue;
            }

            codePoint =
                (((leadSurrogate - 0xd800) << 10) | (codePoint - 0xdc00)) +
                0x10000;
        } else if (leadSurrogate) {
            if ((units -= 3) > -1) {
                bytes.push(0xef, 0xbf, 0xbd);
            }
        }

        leadSurrogate = null;

        if (codePoint < 0x80) {
            if ((units -= 1) < 0) {
                break;
            }
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) {
                break;
            }
            bytes.push((codePoint >> 0x6) | 0xc0, (codePoint & 0x3f) | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) {
                break;
            }
            bytes.push(
                (codePoint >> 0xc) | 0xe0,
                ((codePoint >> 0x6) & 0x3f) | 0x80,
                (codePoint & 0x3f) | 0x80
            );
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) {
                break;
            }
            bytes.push(
                (codePoint >> 0x12) | 0xf0,
                ((codePoint >> 0xc) & 0x3f) | 0x80,
                ((codePoint >> 0x6) & 0x3f) | 0x80,
                (codePoint & 0x3f) | 0x80
            );
        } else {
            throw new Error('Invalid code point');
        }
    }

    return bytes;
}

function asciiToBytes(str) {
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
        byteArray.push(str.charCodeAt(i) & 0xff);
    }
    return byteArray;
}

function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) {
            break;
        }

        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }

    return byteArray;
}

function base64ToBytes(str) {
    return toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
    for (var i = 0; i < length; ++i) {
        if (i + offset >= dst.length || i >= src.length) {
            break;
        }
        dst[i + offset] = src[i];
    }
    return i;
}

function isnan(val) {
    return val !== val; // eslint-disable-line no-self-compare
}

function isBuffer(obj) {
    return (
        obj != null &&
        (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
    );
}

function isFastBuffer(obj) {
    return (
        !!obj.constructor &&
        typeof obj.constructor.isBuffer === 'function' &&
        obj.constructor.isBuffer(obj)
    );
}

function isSlowBuffer(obj) {
    return (
        typeof obj.readFloatLE === 'function' &&
        typeof obj.slice === 'function' &&
        isFastBuffer(obj.slice(0, 0))
    );
}

if (typeof global$1.setTimeout === 'function');
if (typeof global$1.clearTimeout === 'function');

var performance = global$1.performance || {};
var performanceNow =
    performance.now ||
    performance.mozNow ||
    performance.msNow ||
    performance.oNow ||
    performance.webkitNow ||
    function () {
        return new Date().getTime();
    };

var inherits;
if (typeof Object.create === 'function') {
    inherits = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    };
} else {
    inherits = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function () {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    };
}
var inherits$1 = inherits;

var formatRegExp = /%[sdj%]/g;
function format(f) {
    var arguments$1 = arguments;

    if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
            objects.push(inspect(arguments$1[i]));
        }
        return objects.join(' ');
    }

    var i = 1;
    var args = arguments;
    var len = args.length;
    var str = String(f).replace(formatRegExp, function (x) {
        if (x === '%%') {
            return '%';
        }
        if (i >= len) {
            return x;
        }
        switch (x) {
            case '%s':
                return String(args[i++]);
            case '%d':
                return Number(args[i++]);
            case '%j':
                try {
                    return JSON.stringify(args[i++]);
                } catch (_) {
                    return '[Circular]';
                }
            default:
                return x;
        }
    });
    for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
            str += ' ' + x;
        } else {
            str += ' ' + inspect(x);
        }
    }
    return str;
}

function deprecate(fn, msg) {
    if (isUndefined(global$1.process)) {
        return function () {
            return deprecate(fn, msg).apply(this, arguments);
        };
    }

    var warned = false;
    function deprecated() {
        if (!warned) {
            {
                console.error(msg);
            }
            warned = true;
        }
        return fn.apply(this, arguments);
    }

    return deprecated;
}

var debugs = {};
var debugEnviron;
function debuglog(set) {
    if (isUndefined(debugEnviron)) {
        debugEnviron = '';
    }
    set = set.toUpperCase();
    if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
            var pid = 0;
            debugs[set] = function () {
                var msg = format.apply(null, arguments);
                console.error('%s %d: %s', set, pid, msg);
            };
        } else {
            debugs[set] = function () {};
        }
    }
    return debugs[set];
}

function inspect(obj, opts) {
    var ctx = {
        seen: [],
        stylize: stylizeNoColor
    };

    if (arguments.length >= 3) {
        ctx.depth = arguments[2];
    }
    if (arguments.length >= 4) {
        ctx.colors = arguments[3];
    }
    if (isBoolean(opts)) {
        ctx.showHidden = opts;
    } else if (opts) {
        _extend(ctx, opts);
    }

    if (isUndefined(ctx.showHidden)) {
        ctx.showHidden = false;
    }
    if (isUndefined(ctx.depth)) {
        ctx.depth = 2;
    }
    if (isUndefined(ctx.colors)) {
        ctx.colors = false;
    }
    if (isUndefined(ctx.customInspect)) {
        ctx.customInspect = true;
    }
    if (ctx.colors) {
        ctx.stylize = stylizeWithColor;
    }
    return formatValue(ctx, obj, ctx.depth);
}

inspect.colors = {
    bold: [1, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    white: [37, 39],
    grey: [90, 39],
    black: [30, 39],
    blue: [34, 39],
    cyan: [36, 39],
    green: [32, 39],
    magenta: [35, 39],
    red: [31, 39],
    yellow: [33, 39]
};

inspect.styles = {
    special: 'cyan',
    number: 'yellow',
    boolean: 'yellow',
    undefined: 'grey',
    null: 'bold',
    string: 'green',
    date: 'magenta',

    regexp: 'red'
};

function stylizeWithColor(str, styleType) {
    var style = inspect.styles[styleType];

    if (style) {
        return (
            '\u001b[' +
            inspect.colors[style][0] +
            'm' +
            str +
            '\u001b[' +
            inspect.colors[style][1] +
            'm'
        );
    } else {
        return str;
    }
}

function stylizeNoColor(str, styleType) {
    return str;
}

function arrayToHash(array) {
    var hash = {};

    array.forEach(function (val, idx) {
        hash[val] = true;
    });

    return hash;
}

function formatValue(ctx, value, recurseTimes) {
    if (
        ctx.customInspect &&
        value &&
        isFunction(value.inspect) &&
        value.inspect !== inspect &&
        !(value.constructor && value.constructor.prototype === value)
    ) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
            ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
    }

    var primitive = formatPrimitive(ctx, value);
    if (primitive) {
        return primitive;
    }

    var keys = Object.keys(value);
    var visibleKeys = arrayToHash(keys);

    if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
    }

    if (
        isError(value) &&
        (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)
    ) {
        return formatError(value);
    }

    if (keys.length === 0) {
        if (isFunction(value)) {
            var name = value.name ? ': ' + value.name : '';
            return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
            return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError(value)) {
            return formatError(value);
        }
    }

    var base = '',
        array = false,
        braces = ['{', '}'];

    if (isArray$1(value)) {
        array = true;
        braces = ['[', ']'];
    }

    if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
    }

    if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
    }

    if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
    }

    if (isError(value)) {
        base = ' ' + formatError(value);
    }

    if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
    }

    if (recurseTimes < 0) {
        if (isRegExp(value)) {
            return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
            return ctx.stylize('[Object]', 'special');
        }
    }

    ctx.seen.push(value);

    var output;
    if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
    } else {
        output = keys.map(function (key) {
            return formatProperty(
                ctx,
                value,
                recurseTimes,
                visibleKeys,
                key,
                array
            );
        });
    }

    ctx.seen.pop();

    return reduceToSingleString(output, base, braces);
}

function formatPrimitive(ctx, value) {
    if (isUndefined(value)) {
        return ctx.stylize('undefined', 'undefined');
    }
    if (isString(value)) {
        var simple =
            "'" +
            JSON.stringify(value)
                .replace(/^"|"$/g, '')
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"') +
            "'";
        return ctx.stylize(simple, 'string');
    }
    if (isNumber(value)) {
        return ctx.stylize('' + value, 'number');
    }
    if (isBoolean(value)) {
        return ctx.stylize('' + value, 'boolean');
    }

    if (isNull(value)) {
        return ctx.stylize('null', 'null');
    }
}

function formatError(value) {
    return '[' + Error.prototype.toString.call(value) + ']';
}

function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
    var output = [];
    for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty$2(value, String(i))) {
            output.push(
                formatProperty(
                    ctx,
                    value,
                    recurseTimes,
                    visibleKeys,
                    String(i),
                    true
                )
            );
        } else {
            output.push('');
        }
    }
    keys.forEach(function (key) {
        if (!key.match(/^\d+$/)) {
            output.push(
                formatProperty(ctx, value, recurseTimes, visibleKeys, key, true)
            );
        }
    });
    return output;
}

function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
    var name, str, desc;
    desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
    if (desc.get) {
        if (desc.set) {
            str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
            str = ctx.stylize('[Getter]', 'special');
        }
    } else {
        if (desc.set) {
            str = ctx.stylize('[Setter]', 'special');
        }
    }
    if (!hasOwnProperty$2(visibleKeys, key)) {
        name = '[' + key + ']';
    }
    if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
            if (isNull(recurseTimes)) {
                str = formatValue(ctx, desc.value, null);
            } else {
                str = formatValue(ctx, desc.value, recurseTimes - 1);
            }
            if (str.indexOf('\n') > -1) {
                if (array) {
                    str = str
                        .split('\n')
                        .map(function (line) {
                            return '  ' + line;
                        })
                        .join('\n')
                        .substr(2);
                } else {
                    str =
                        '\n' +
                        str
                            .split('\n')
                            .map(function (line) {
                                return '   ' + line;
                            })
                            .join('\n');
                }
            }
        } else {
            str = ctx.stylize('[Circular]', 'special');
        }
    }
    if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
            return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
            name = name.substr(1, name.length - 2);
            name = ctx.stylize(name, 'name');
        } else {
            name = name
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'");
            name = ctx.stylize(name, 'string');
        }
    }

    return name + ': ' + str;
}

function reduceToSingleString(output, base, braces) {
    var length = output.reduce(function (prev, cur) {
        if (cur.indexOf('\n') >= 0);
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
    }, 0);

    if (length > 60) {
        return (
            braces[0] +
            (base === '' ? '' : base + '\n ') +
            ' ' +
            output.join(',\n  ') +
            ' ' +
            braces[1]
        );
    }

    return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}

function isArray$1(ar) {
    return Array.isArray(ar);
}

function isBoolean(arg) {
    return typeof arg === 'boolean';
}

function isNull(arg) {
    return arg === null;
}

function isNullOrUndefined(arg) {
    return arg == null;
}

function isNumber(arg) {
    return typeof arg === 'number';
}

function isString(arg) {
    return typeof arg === 'string';
}

function isSymbol(arg) {
    return typeof arg === 'symbol';
}

function isUndefined(arg) {
    return arg === void 0;
}

function isRegExp(re) {
    return isObject(re) && objectToString(re) === '[object RegExp]';
}

function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
}

function isDate(d) {
    return isObject(d) && objectToString(d) === '[object Date]';
}

function isError(e) {
    return (
        isObject(e) &&
        (objectToString(e) === '[object Error]' || e instanceof Error)
    );
}

function isFunction(arg) {
    return typeof arg === 'function';
}

function isPrimitive(arg) {
    return (
        arg === null ||
        typeof arg === 'boolean' ||
        typeof arg === 'number' ||
        typeof arg === 'string' ||
        typeof arg === 'symbol' ||
        typeof arg === 'undefined'
    );
}

function isBuffer$1(maybeBuf) {
    return isBuffer(maybeBuf);
}

function objectToString(o) {
    return Object.prototype.toString.call(o);
}

function pad(n) {
    return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

function timestamp() {
    var d = new Date();
    var time = [
        pad(d.getHours()),
        pad(d.getMinutes()),
        pad(d.getSeconds())
    ].join(':');
    return [d.getDate(), months[d.getMonth()], time].join(' ');
}

function log() {
    console.log('%s - %s', timestamp(), format.apply(null, arguments));
}

function _extend(origin, add) {
    if (!add || !isObject(add)) {
        return origin;
    }

    var keys = Object.keys(add);
    var i = keys.length;
    while (i--) {
        origin[keys[i]] = add[keys[i]];
    }
    return origin;
}
function hasOwnProperty$2(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

var util$1 = {
    inherits: inherits$1,
    _extend: _extend,
    log: log,
    isBuffer: isBuffer$1,
    isPrimitive: isPrimitive,
    isFunction: isFunction,
    isError: isError,
    isDate: isDate,
    isObject: isObject,
    isRegExp: isRegExp,
    isUndefined: isUndefined,
    isSymbol: isSymbol,
    isString: isString,
    isNumber: isNumber,
    isNullOrUndefined: isNullOrUndefined,
    isNull: isNull,
    isBoolean: isBoolean,
    isArray: isArray$1,
    inspect: inspect,
    deprecate: deprecate,
    format: format,
    debuglog: debuglog
};

var util$2 = Object.freeze({
    format: format,
    deprecate: deprecate,
    debuglog: debuglog,
    inspect: inspect,
    isArray: isArray$1,
    isBoolean: isBoolean,
    isNull: isNull,
    isNullOrUndefined: isNullOrUndefined,
    isNumber: isNumber,
    isString: isString,
    isSymbol: isSymbol,
    isUndefined: isUndefined,
    isRegExp: isRegExp,
    isObject: isObject,
    isDate: isDate,
    isError: isError,
    isFunction: isFunction,
    isPrimitive: isPrimitive,
    isBuffer: isBuffer$1,
    log: log,
    inherits: inherits$1,
    _extend: _extend,
    default: util$1
});

var _require = getCjsExportFromNamespace(util$2);

var attribute = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.unescapeValue = unescapeValue;
    exports.default = void 0;

    var _cssesc = _interopRequireDefault(cssesc_1);

    var _unesc = _interopRequireDefault(unesc_1);

    var _namespace = _interopRequireDefault(namespace);

    var _CSSESC_QUOTE_OPTIONS;

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) {
                descriptor.writable = true;
            }
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) {
            _defineProperties(Constructor.prototype, protoProps);
        }
        if (staticProps) {
            _defineProperties(Constructor, staticProps);
        }
        return Constructor;
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    var deprecate = _require.deprecate;

    var WRAPPED_IN_QUOTES = /^('|")(.*)\1$/;
    var warnOfDeprecatedValueAssignment = deprecate(function () {},
    'Assigning an attribute a value containing characters that might need to be escaped is deprecated. ' + 'Call attribute.setValue() instead.');
    var warnOfDeprecatedQuotedAssignment = deprecate(function () {},
    'Assigning attr.quoted is deprecated and has no effect. Assign to attr.quoteMark instead.');
    var warnOfDeprecatedConstructor = deprecate(function () {},
    'Constructing an Attribute selector with a value without specifying quoteMark is deprecated. Note: The value should be unescaped now.');

    function unescapeValue(value) {
        var deprecatedUsage = false;
        var quoteMark = null;
        var unescaped = value;
        var m = unescaped.match(WRAPPED_IN_QUOTES);

        if (m) {
            quoteMark = m[1];
            unescaped = m[2];
        }

        unescaped = (0, _unesc.default)(unescaped);

        if (unescaped !== value) {
            deprecatedUsage = true;
        }

        return {
            deprecatedUsage: deprecatedUsage,
            unescaped: unescaped,
            quoteMark: quoteMark
        };
    }

    function handleDeprecatedContructorOpts(opts) {
        if (opts.quoteMark !== undefined) {
            return opts;
        }

        if (opts.value === undefined) {
            return opts;
        }

        warnOfDeprecatedConstructor();

        var _unescapeValue = unescapeValue(opts.value),
            quoteMark = _unescapeValue.quoteMark,
            unescaped = _unescapeValue.unescaped;

        if (!opts.raws) {
            opts.raws = {};
        }

        if (opts.raws.value === undefined) {
            opts.raws.value = opts.value;
        }

        opts.value = unescaped;
        opts.quoteMark = quoteMark;
        return opts;
    }

    var Attribute = (function (_Namespace) {
        _inheritsLoose(Attribute, _Namespace);

        function Attribute(opts) {
            var _this;

            if (opts === void 0) {
                opts = {};
            }

            _this =
                _Namespace.call(this, handleDeprecatedContructorOpts(opts)) ||
                this;
            _this.type = types.ATTRIBUTE;
            _this.raws = _this.raws || {};
            Object.defineProperty(_this.raws, 'unquoted', {
                get: deprecate(function () {
                    return _this.value;
                }, 'attr.raws.unquoted is deprecated. Call attr.value instead.'),
                set: deprecate(function () {
                    return _this.value;
                }, 'Setting attr.raws.unquoted is deprecated and has no effect. attr.value is unescaped by default now.')
            });

            _this._constructed = true;
            return _this;
        }

        var _proto = Attribute.prototype;

        _proto.getQuotedValue = function getQuotedValue(options) {
            if (options === void 0) {
                options = {};
            }

            var quoteMark = this._determineQuoteMark(options);

            var cssescopts = CSSESC_QUOTE_OPTIONS[quoteMark];
            var escaped = (0, _cssesc.default)(this._value, cssescopts);
            return escaped;
        };

        _proto._determineQuoteMark = function _determineQuoteMark(options) {
            return options.smart
                ? this.smartQuoteMark(options)
                : this.preferredQuoteMark(options);
        };

        _proto.setValue = function setValue(value, options) {
            if (options === void 0) {
                options = {};
            }

            this._value = value;
            this._quoteMark = this._determineQuoteMark(options);

            this._syncRawValue();
        };

        _proto.smartQuoteMark = function smartQuoteMark(options) {
            var v = this.value;
            var numSingleQuotes = v.replace(/[^']/g, '').length;
            var numDoubleQuotes = v.replace(/[^"]/g, '').length;

            if (numSingleQuotes + numDoubleQuotes === 0) {
                var escaped = (0, _cssesc.default)(v, {
                    isIdentifier: true
                });

                if (escaped === v) {
                    return Attribute.NO_QUOTE;
                } else {
                    var pref = this.preferredQuoteMark(options);

                    if (pref === Attribute.NO_QUOTE) {
                        var quote =
                            this.quoteMark ||
                            options.quoteMark ||
                            Attribute.DOUBLE_QUOTE;
                        var opts = CSSESC_QUOTE_OPTIONS[quote];
                        var quoteValue = (0, _cssesc.default)(v, opts);

                        if (quoteValue.length < escaped.length) {
                            return quote;
                        }
                    }

                    return pref;
                }
            } else if (numDoubleQuotes === numSingleQuotes) {
                return this.preferredQuoteMark(options);
            } else if (numDoubleQuotes < numSingleQuotes) {
                return Attribute.DOUBLE_QUOTE;
            } else {
                return Attribute.SINGLE_QUOTE;
            }
        };

        _proto.preferredQuoteMark = function preferredQuoteMark(options) {
            var quoteMark = options.preferCurrentQuoteMark
                ? this.quoteMark
                : options.quoteMark;

            if (quoteMark === undefined) {
                quoteMark = options.preferCurrentQuoteMark
                    ? options.quoteMark
                    : this.quoteMark;
            }

            if (quoteMark === undefined) {
                quoteMark = Attribute.DOUBLE_QUOTE;
            }

            return quoteMark;
        };

        _proto._syncRawValue = function _syncRawValue() {
            var rawValue = (0, _cssesc.default)(
                this._value,
                CSSESC_QUOTE_OPTIONS[this.quoteMark]
            );

            if (rawValue === this._value) {
                if (this.raws) {
                    delete this.raws.value;
                }
            } else {
                this.raws.value = rawValue;
            }
        };

        _proto._handleEscapes = function _handleEscapes(prop, value) {
            if (this._constructed) {
                var escaped = (0, _cssesc.default)(value, {
                    isIdentifier: true
                });

                if (escaped !== value) {
                    this.raws[prop] = escaped;
                } else {
                    delete this.raws[prop];
                }
            }
        };

        _proto._spacesFor = function _spacesFor(name) {
            var attrSpaces = {
                before: '',
                after: ''
            };

            var spaces = this.spaces[name] || {};
            var rawSpaces = (this.raws.spaces && this.raws.spaces[name]) || {};
            return objectAssign(attrSpaces, spaces, rawSpaces);
        };

        _proto._stringFor = function _stringFor(name, spaceName, concat) {
            if (spaceName === void 0) {
                spaceName = name;
            }

            if (concat === void 0) {
                concat = defaultAttrConcat;
            }

            var attrSpaces = this._spacesFor(spaceName);

            return concat(this.stringifyProperty(name), attrSpaces);
        };

        _proto.offsetOf = function offsetOf(name) {
            var count = 1;

            var attributeSpaces = this._spacesFor('attribute');

            count += attributeSpaces.before.length;

            if (name === 'namespace' || name === 'ns') {
                return this.namespace ? count : -1;
            }

            if (name === 'attributeNS') {
                return count;
            }

            count += this.namespaceString.length;

            if (this.namespace) {
                count += 1;
            }

            if (name === 'attribute') {
                return count;
            }

            count += this.stringifyProperty('attribute').length;
            count += attributeSpaces.after.length;

            var operatorSpaces = this._spacesFor('operator');

            count += operatorSpaces.before.length;
            var operator = this.stringifyProperty('operator');

            if (name === 'operator') {
                return operator ? count : -1;
            }

            count += operator.length;
            count += operatorSpaces.after.length;

            var valueSpaces = this._spacesFor('value');

            count += valueSpaces.before.length;
            var value = this.stringifyProperty('value');

            if (name === 'value') {
                return value ? count : -1;
            }

            count += value.length;
            count += valueSpaces.after.length;

            var insensitiveSpaces = this._spacesFor('insensitive');

            count += insensitiveSpaces.before.length;

            if (name === 'insensitive') {
                return this.insensitive ? count : -1;
            }

            return -1;
        };

        _proto.toString = function toString() {
            var _this2 = this;

            var selector = [this.rawSpaceBefore, '['];
            selector.push(this._stringFor('qualifiedAttribute', 'attribute'));

            if (this.operator && (this.value || this.value === '')) {
                selector.push(this._stringFor('operator'));
                selector.push(this._stringFor('value'));
                selector.push(
                    this._stringFor('insensitiveFlag', 'insensitive', function (
                        attrValue,
                        attrSpaces
                    ) {
                        if (
                            attrValue.length > 0 &&
                            !_this2.quoted &&
                            attrSpaces.before.length === 0 &&
                            !(_this2.spaces.value && _this2.spaces.value.after)
                        ) {
                            attrSpaces.before = ' ';
                        }

                        return defaultAttrConcat(attrValue, attrSpaces);
                    })
                );
            }

            selector.push(']');
            selector.push(this.rawSpaceAfter);
            return selector.join('');
        };

        _createClass(Attribute, [
            {
                key: 'quoted',
                get: function get() {
                    var qm = this.quoteMark;
                    return qm === "'" || qm === '"';
                },
                set: function set(value) {
                    warnOfDeprecatedQuotedAssignment();
                }
            },

            {
                key: 'quoteMark',
                get: function get() {
                    return this._quoteMark;
                },

                set: function set(quoteMark) {
                    if (!this._constructed) {
                        this._quoteMark = quoteMark;
                        return;
                    }

                    if (this._quoteMark !== quoteMark) {
                        this._quoteMark = quoteMark;

                        this._syncRawValue();
                    }
                }
            },

            {
                key: 'qualifiedAttribute',
                get: function get() {
                    return this.qualifiedName(
                        this.raws.attribute || this.attribute
                    );
                }
            },

            {
                key: 'insensitiveFlag',
                get: function get() {
                    return this.insensitive ? 'i' : '';
                }
            },

            {
                key: 'value',
                get: function get() {
                    return this._value;
                },

                set: function set(v) {
                    if (this._constructed) {
                        var _unescapeValue2 = unescapeValue(v),
                            deprecatedUsage = _unescapeValue2.deprecatedUsage,
                            unescaped = _unescapeValue2.unescaped,
                            quoteMark = _unescapeValue2.quoteMark;

                        if (deprecatedUsage) {
                            warnOfDeprecatedValueAssignment();
                        }

                        if (
                            unescaped === this._value &&
                            quoteMark === this._quoteMark
                        ) {
                            return;
                        }

                        this._value = unescaped;
                        this._quoteMark = quoteMark;

                        this._syncRawValue();
                    } else {
                        this._value = v;
                    }
                }
            },

            {
                key: 'attribute',
                get: function get() {
                    return this._attribute;
                },
                set: function set(name) {
                    this._handleEscapes('attribute', name);

                    this._attribute = name;
                }
            }
        ]);

        return Attribute;
    })(_namespace.default);

    exports.default = Attribute;
    Attribute.NO_QUOTE = null;
    Attribute.SINGLE_QUOTE = "'";
    Attribute.DOUBLE_QUOTE = '"';
    var CSSESC_QUOTE_OPTIONS =
        ((_CSSESC_QUOTE_OPTIONS = {
            "'": {
                quotes: 'single',
                wrap: true
            },

            '"': {
                quotes: 'double',
                wrap: true
            }
        }),
        (_CSSESC_QUOTE_OPTIONS[null] = {
            isIdentifier: true
        }),
        _CSSESC_QUOTE_OPTIONS);

    function defaultAttrConcat(attrValue, attrSpaces) {
        return '' + attrSpaces.before + attrValue + attrSpaces.after;
    }
});

unwrapExports(attribute);
var attribute_1 = attribute.unescapeValue;

var universal = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _namespace = _interopRequireDefault(namespace);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    var Universal = (function (_Namespace) {
        _inheritsLoose(Universal, _Namespace);

        function Universal(opts) {
            var _this;

            _this = _Namespace.call(this, opts) || this;
            _this.type = types.UNIVERSAL;
            _this.value = '*';
            return _this;
        }

        return Universal;
    })(_namespace.default);

    exports.default = Universal;
    module.exports = exports.default;
});

unwrapExports(universal);

var combinator = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _node = _interopRequireDefault(node);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    var Combinator = (function (_Node) {
        _inheritsLoose(Combinator, _Node);

        function Combinator(opts) {
            var _this;

            _this = _Node.call(this, opts) || this;
            _this.type = types.COMBINATOR;
            return _this;
        }

        return Combinator;
    })(_node.default);

    exports.default = Combinator;
    module.exports = exports.default;
});

unwrapExports(combinator);

var nesting = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _node = _interopRequireDefault(node);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _inheritsLoose(subClass, superClass) {
        subClass.prototype = Object.create(superClass.prototype);
        subClass.prototype.constructor = subClass;
        subClass.__proto__ = superClass;
    }

    var Nesting = (function (_Node) {
        _inheritsLoose(Nesting, _Node);

        function Nesting(opts) {
            var _this;

            _this = _Node.call(this, opts) || this;
            _this.type = types.NESTING;
            _this.value = '&';
            return _this;
        }

        return Nesting;
    })(_node.default);

    exports.default = Nesting;
    module.exports = exports.default;
});

unwrapExports(nesting);

var sortAscending_1 = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = sortAscending;

    function sortAscending(list) {
        return list.sort(function (a, b) {
            return a - b;
        });
    }
    module.exports = exports.default;
});

unwrapExports(sortAscending_1);

var tokenTypes = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.combinator = exports.word = exports.comment = exports.str = exports.tab = exports.newline = exports.feed = exports.cr = exports.backslash = exports.bang = exports.slash = exports.doubleQuote = exports.singleQuote = exports.space = exports.greaterThan = exports.pipe = exports.equals = exports.plus = exports.caret = exports.tilde = exports.dollar = exports.closeSquare = exports.openSquare = exports.closeParenthesis = exports.openParenthesis = exports.semicolon = exports.colon = exports.comma = exports.at = exports.asterisk = exports.ampersand = void 0;
    var ampersand = 38;

    exports.ampersand = ampersand;
    var asterisk = 42;

    exports.asterisk = asterisk;
    var at = 64;

    exports.at = at;
    var comma = 44;

    exports.comma = comma;
    var colon = 58;

    exports.colon = colon;
    var semicolon = 59;

    exports.semicolon = semicolon;
    var openParenthesis = 40;

    exports.openParenthesis = openParenthesis;
    var closeParenthesis = 41;

    exports.closeParenthesis = closeParenthesis;
    var openSquare = 91;

    exports.openSquare = openSquare;
    var closeSquare = 93;

    exports.closeSquare = closeSquare;
    var dollar = 36;

    exports.dollar = dollar;
    var tilde = 126;

    exports.tilde = tilde;
    var caret = 94;

    exports.caret = caret;
    var plus = 43;

    exports.plus = plus;
    var equals = 61;

    exports.equals = equals;
    var pipe = 124;

    exports.pipe = pipe;
    var greaterThan = 62;

    exports.greaterThan = greaterThan;
    var space = 32;

    exports.space = space;
    var singleQuote = 39;

    exports.singleQuote = singleQuote;
    var doubleQuote = 34;

    exports.doubleQuote = doubleQuote;
    var slash = 47;

    exports.slash = slash;
    var bang = 33;

    exports.bang = bang;
    var backslash = 92;

    exports.backslash = backslash;
    var cr = 13;

    exports.cr = cr;
    var feed = 12;

    exports.feed = feed;
    var newline = 10;

    exports.newline = newline;
    var tab = 9;

    exports.tab = tab;
    var str = singleQuote;

    exports.str = str;
    var comment = -1;
    exports.comment = comment;
    var word = -2;
    exports.word = word;
    var combinator = -3;
    exports.combinator = combinator;
});

unwrapExports(tokenTypes);
var tokenTypes_1 = tokenTypes.combinator;
var tokenTypes_2 = tokenTypes.word;
var tokenTypes_3 = tokenTypes.comment;
var tokenTypes_4 = tokenTypes.str;
var tokenTypes_5 = tokenTypes.tab;
var tokenTypes_6 = tokenTypes.newline;
var tokenTypes_7 = tokenTypes.feed;
var tokenTypes_8 = tokenTypes.cr;
var tokenTypes_9 = tokenTypes.backslash;
var tokenTypes_10 = tokenTypes.bang;
var tokenTypes_11 = tokenTypes.slash;
var tokenTypes_12 = tokenTypes.doubleQuote;
var tokenTypes_13 = tokenTypes.singleQuote;
var tokenTypes_14 = tokenTypes.space;
var tokenTypes_15 = tokenTypes.greaterThan;
var tokenTypes_16 = tokenTypes.pipe;
var tokenTypes_17 = tokenTypes.equals;
var tokenTypes_18 = tokenTypes.plus;
var tokenTypes_19 = tokenTypes.caret;
var tokenTypes_20 = tokenTypes.tilde;
var tokenTypes_21 = tokenTypes.dollar;
var tokenTypes_22 = tokenTypes.closeSquare;
var tokenTypes_23 = tokenTypes.openSquare;
var tokenTypes_24 = tokenTypes.closeParenthesis;
var tokenTypes_25 = tokenTypes.openParenthesis;
var tokenTypes_26 = tokenTypes.semicolon;
var tokenTypes_27 = tokenTypes.colon;
var tokenTypes_28 = tokenTypes.comma;
var tokenTypes_29 = tokenTypes.at;
var tokenTypes_30 = tokenTypes.asterisk;
var tokenTypes_31 = tokenTypes.ampersand;

var tokenize_1 = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = tokenize;
    exports.FIELDS = void 0;

    var t = _interopRequireWildcard(tokenTypes);

    var _unescapable, _wordDelimiters;

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};
            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc =
                            Object.defineProperty &&
                            Object.getOwnPropertyDescriptor
                                ? Object.getOwnPropertyDescriptor(obj, key)
                                : {};
                        if (desc.get || desc.set) {
                            Object.defineProperty(newObj, key, desc);
                        } else {
                            newObj[key] = obj[key];
                        }
                    }
                }
            }
            newObj.default = obj;
            return newObj;
        }
    }

    var unescapable =
        ((_unescapable = {}),
        (_unescapable[t.tab] = true),
        (_unescapable[t.newline] = true),
        (_unescapable[t.cr] = true),
        (_unescapable[t.feed] = true),
        _unescapable);
    var wordDelimiters =
        ((_wordDelimiters = {}),
        (_wordDelimiters[t.space] = true),
        (_wordDelimiters[t.tab] = true),
        (_wordDelimiters[t.newline] = true),
        (_wordDelimiters[t.cr] = true),
        (_wordDelimiters[t.feed] = true),
        (_wordDelimiters[t.ampersand] = true),
        (_wordDelimiters[t.asterisk] = true),
        (_wordDelimiters[t.bang] = true),
        (_wordDelimiters[t.comma] = true),
        (_wordDelimiters[t.colon] = true),
        (_wordDelimiters[t.semicolon] = true),
        (_wordDelimiters[t.openParenthesis] = true),
        (_wordDelimiters[t.closeParenthesis] = true),
        (_wordDelimiters[t.openSquare] = true),
        (_wordDelimiters[t.closeSquare] = true),
        (_wordDelimiters[t.singleQuote] = true),
        (_wordDelimiters[t.doubleQuote] = true),
        (_wordDelimiters[t.plus] = true),
        (_wordDelimiters[t.pipe] = true),
        (_wordDelimiters[t.tilde] = true),
        (_wordDelimiters[t.greaterThan] = true),
        (_wordDelimiters[t.equals] = true),
        (_wordDelimiters[t.dollar] = true),
        (_wordDelimiters[t.caret] = true),
        (_wordDelimiters[t.slash] = true),
        _wordDelimiters);
    var hex = {};
    var hexChars = '0123456789abcdefABCDEF';

    for (var i = 0; i < hexChars.length; i++) {
        hex[hexChars.charCodeAt(i)] = true;
    }

    function consumeWord(css, start) {
        var next = start;
        var code;

        do {
            code = css.charCodeAt(next);

            if (wordDelimiters[code]) {
                return next - 1;
            } else if (code === t.backslash) {
                next = consumeEscape(css, next) + 1;
            } else {
                next++;
            }
        } while (next < css.length);

        return next - 1;
    }

    function consumeEscape(css, start) {
        var next = start;
        var code = css.charCodeAt(next + 1);

        if (unescapable[code]);
        else if (hex[code]) {
            var hexDigits = 0;

            do {
                next++;
                hexDigits++;
                code = css.charCodeAt(next + 1);
            } while (hex[code] && hexDigits < 6);

            if (hexDigits < 6 && code === t.space) {
                next++;
            }
        } else {
            next++;
        }

        return next;
    }

    var FIELDS = {
        TYPE: 0,
        START_LINE: 1,
        START_COL: 2,
        END_LINE: 3,
        END_COL: 4,
        START_POS: 5,
        END_POS: 6
    };

    exports.FIELDS = FIELDS;

    function tokenize(input) {
        var tokens = [];
        var css = input.css.valueOf();
        var _css = css,
            length = _css.length;
        var offset = -1;
        var line = 1;
        var start = 0;
        var end = 0;
        var code,
            content,
            endColumn,
            endLine,
            escaped,
            escapePos,
            last,
            lines,
            next,
            nextLine,
            nextOffset,
            quote,
            tokenType;

        function unclosed(what, fix) {
            if (input.safe) {
                css += fix;
                next = css.length - 1;
            } else {
                throw input.error(
                    'Unclosed ' + what,
                    line,
                    start - offset,
                    start
                );
            }
        }

        while (start < length) {
            code = css.charCodeAt(start);

            if (code === t.newline) {
                offset = start;
                line += 1;
            }

            switch (code) {
                case t.space:
                case t.tab:
                case t.newline:
                case t.cr:
                case t.feed:
                    next = start;

                    do {
                        next += 1;
                        code = css.charCodeAt(next);

                        if (code === t.newline) {
                            offset = next;
                            line += 1;
                        }
                    } while (
                        code === t.space ||
                        code === t.newline ||
                        code === t.tab ||
                        code === t.cr ||
                        code === t.feed
                    );

                    tokenType = t.space;
                    endLine = line;
                    endColumn = next - offset - 1;
                    end = next;
                    break;

                case t.plus:
                case t.greaterThan:
                case t.tilde:
                case t.pipe:
                    next = start;

                    do {
                        next += 1;
                        code = css.charCodeAt(next);
                    } while (
                        code === t.plus ||
                        code === t.greaterThan ||
                        code === t.tilde ||
                        code === t.pipe
                    );

                    tokenType = t.combinator;
                    endLine = line;
                    endColumn = start - offset;
                    end = next;
                    break;

                case t.asterisk:
                case t.ampersand:
                case t.bang:
                case t.comma:
                case t.equals:
                case t.dollar:
                case t.caret:
                case t.openSquare:
                case t.closeSquare:
                case t.colon:
                case t.semicolon:
                case t.openParenthesis:
                case t.closeParenthesis:
                    next = start;
                    tokenType = code;
                    endLine = line;
                    endColumn = start - offset;
                    end = next + 1;
                    break;

                case t.singleQuote:
                case t.doubleQuote:
                    quote = code === t.singleQuote ? "'" : '"';
                    next = start;

                    do {
                        escaped = false;
                        next = css.indexOf(quote, next + 1);

                        if (next === -1) {
                            unclosed('quote', quote);
                        }

                        escapePos = next;

                        while (css.charCodeAt(escapePos - 1) === t.backslash) {
                            escapePos -= 1;
                            escaped = !escaped;
                        }
                    } while (escaped);

                    tokenType = t.str;
                    endLine = line;
                    endColumn = start - offset;
                    end = next + 1;
                    break;

                default:
                    if (
                        code === t.slash &&
                        css.charCodeAt(start + 1) === t.asterisk
                    ) {
                        next = css.indexOf('*/', start + 2) + 1;

                        if (next === 0) {
                            unclosed('comment', '*/');
                        }

                        content = css.slice(start, next + 1);
                        lines = content.split('\n');
                        last = lines.length - 1;

                        if (last > 0) {
                            nextLine = line + last;
                            nextOffset = next - lines[last].length;
                        } else {
                            nextLine = line;
                            nextOffset = offset;
                        }

                        tokenType = t.comment;
                        line = nextLine;
                        endLine = nextLine;
                        endColumn = next - nextOffset;
                    } else if (code === t.slash) {
                        next = start;
                        tokenType = code;
                        endLine = line;
                        endColumn = start - offset;
                        end = next + 1;
                    } else {
                        next = consumeWord(css, start);
                        tokenType = t.word;
                        endLine = line;
                        endColumn = next - offset;
                    }

                    end = next + 1;
                    break;
            }

            tokens.push([
                tokenType,
                line,
                start - offset,
                endLine,
                endColumn,
                start,
                end
            ]);

            if (nextOffset) {
                offset = nextOffset;
                nextOffset = null;
            }

            start = end;
        }

        return tokens;
    }
});

unwrapExports(tokenize_1);
var tokenize_2 = tokenize_1.FIELDS;

var parser = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _indexesOf = _interopRequireDefault(indexesOf);

    var _uniq = _interopRequireDefault(uniq);

    var _root = _interopRequireDefault(root);

    var _selector = _interopRequireDefault(selector);

    var _className = _interopRequireDefault(className);

    var _comment = _interopRequireDefault(comment);

    var _id = _interopRequireDefault(id);

    var _tag = _interopRequireDefault(tag);

    var _string = _interopRequireDefault(string);

    var _pseudo = _interopRequireDefault(pseudo);

    var _attribute = _interopRequireWildcard(attribute);

    var _universal = _interopRequireDefault(universal);

    var _combinator = _interopRequireDefault(combinator);

    var _nesting = _interopRequireDefault(nesting);

    var _sortAscending = _interopRequireDefault(sortAscending_1);

    var _tokenize = _interopRequireWildcard(tokenize_1);

    var tokens = _interopRequireWildcard(tokenTypes);

    var types$1 = _interopRequireWildcard(types);

    var _WHITESPACE_TOKENS, _Object$assign;

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};
            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc =
                            Object.defineProperty &&
                            Object.getOwnPropertyDescriptor
                                ? Object.getOwnPropertyDescriptor(obj, key)
                                : {};
                        if (desc.get || desc.set) {
                            Object.defineProperty(newObj, key, desc);
                        } else {
                            newObj[key] = obj[key];
                        }
                    }
                }
            }
            newObj.default = obj;
            return newObj;
        }
    }

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) {
                descriptor.writable = true;
            }
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }

    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) {
            _defineProperties(Constructor.prototype, protoProps);
        }
        if (staticProps) {
            _defineProperties(Constructor, staticProps);
        }
        return Constructor;
    }

    var WHITESPACE_TOKENS =
        ((_WHITESPACE_TOKENS = {}),
        (_WHITESPACE_TOKENS[tokens.space] = true),
        (_WHITESPACE_TOKENS[tokens.cr] = true),
        (_WHITESPACE_TOKENS[tokens.feed] = true),
        (_WHITESPACE_TOKENS[tokens.newline] = true),
        (_WHITESPACE_TOKENS[tokens.tab] = true),
        _WHITESPACE_TOKENS);
    var WHITESPACE_EQUIV_TOKENS = objectAssign(
        {},
        WHITESPACE_TOKENS,
        ((_Object$assign = {}),
        (_Object$assign[tokens.comment] = true),
        _Object$assign)
    );

    function tokenStart(token) {
        return {
            line: token[_tokenize.FIELDS.START_LINE],
            column: token[_tokenize.FIELDS.START_COL]
        };
    }

    function tokenEnd(token) {
        return {
            line: token[_tokenize.FIELDS.END_LINE],
            column: token[_tokenize.FIELDS.END_COL]
        };
    }

    function getSource(startLine, startColumn, endLine, endColumn) {
        return {
            start: {
                line: startLine,
                column: startColumn
            },

            end: {
                line: endLine,
                column: endColumn
            }
        };
    }

    function getTokenSource(token) {
        return getSource(
            token[_tokenize.FIELDS.START_LINE],
            token[_tokenize.FIELDS.START_COL],
            token[_tokenize.FIELDS.END_LINE],
            token[_tokenize.FIELDS.END_COL]
        );
    }

    function getTokenSourceSpan(startToken, endToken) {
        if (!startToken) {
            return undefined;
        }

        return getSource(
            startToken[_tokenize.FIELDS.START_LINE],
            startToken[_tokenize.FIELDS.START_COL],
            endToken[_tokenize.FIELDS.END_LINE],
            endToken[_tokenize.FIELDS.END_COL]
        );
    }

    function unescapeProp(node, prop) {
        var value = node[prop];

        if (typeof value !== 'string') {
            return;
        }

        if (value.indexOf('\\') !== -1) {
            (0, util.ensureObject)(node, 'raws');
            node[prop] = (0, util.unesc)(value);

            if (node.raws[prop] === undefined) {
                node.raws[prop] = value;
            }
        }

        return node;
    }

    var Parser = (function () {
        function Parser(rule, options) {
            if (options === void 0) {
                options = {};
            }

            this.rule = rule;
            this.options = objectAssign(
                {
                    lossy: false,
                    safe: false
                },

                options
            );

            this.position = 0;
            this.css =
                typeof this.rule === 'string' ? this.rule : this.rule.selector;
            this.tokens = (0, _tokenize.default)({
                css: this.css,
                error: this._errorGenerator(),
                safe: this.options.safe
            });

            var rootSource = getTokenSourceSpan(
                this.tokens[0],
                this.tokens[this.tokens.length - 1]
            );

            this.root = new _root.default({
                source: rootSource
            });

            this.root.errorGenerator = this._errorGenerator();
            var selector = new _selector.default({
                source: {
                    start: {
                        line: 1,
                        column: 1
                    }
                }
            });

            this.root.append(selector);
            this.current = selector;
            this.loop();
        }

        var _proto = Parser.prototype;

        _proto._errorGenerator = function _errorGenerator() {
            var _this = this;

            return function (message, errorOptions) {
                if (typeof _this.rule === 'string') {
                    return new Error(message);
                }

                return _this.rule.error(message, errorOptions);
            };
        };

        _proto.attribute = function attribute() {
            var attr = [];
            var startingToken = this.currToken;
            this.position++;

            while (
                this.position < this.tokens.length &&
                this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare
            ) {
                attr.push(this.currToken);
                this.position++;
            }

            if (this.currToken[_tokenize.FIELDS.TYPE] !== tokens.closeSquare) {
                return this.expected(
                    'closing square bracket',
                    this.currToken[_tokenize.FIELDS.START_POS]
                );
            }

            var len = attr.length;
            var node = {
                source: getSource(
                    startingToken[1],
                    startingToken[2],
                    this.currToken[3],
                    this.currToken[4]
                ),

                sourceIndex: startingToken[_tokenize.FIELDS.START_POS]
            };

            if (
                len === 1 &&
                !~[tokens.word].indexOf(attr[0][_tokenize.FIELDS.TYPE])
            ) {
                return this.expected(
                    'attribute',
                    attr[0][_tokenize.FIELDS.START_POS]
                );
            }

            var pos = 0;
            var spaceBefore = '';
            var commentBefore = '';
            var lastAdded = null;
            var spaceAfterMeaningfulToken = false;

            while (pos < len) {
                var token = attr[pos];
                var content = this.content(token);
                var next = attr[pos + 1];

                switch (token[_tokenize.FIELDS.TYPE]) {
                    case tokens.space:
                        spaceAfterMeaningfulToken = true;

                        if (this.options.lossy) {
                            break;
                        }

                        if (lastAdded) {
                            (0, util.ensureObject)(node, 'spaces', lastAdded);

                            var prevContent =
                                node.spaces[lastAdded].after || '';
                            node.spaces[lastAdded].after =
                                prevContent + content;
                            var existingComment =
                                (0, util.getProp)(
                                    node,
                                    'raws',
                                    'spaces',
                                    lastAdded,
                                    'after'
                                ) || null;

                            if (existingComment) {
                                node.raws.spaces[lastAdded].after =
                                    existingComment + content;
                            }
                        } else {
                            spaceBefore = spaceBefore + content;
                            commentBefore = commentBefore + content;
                        }

                        break;

                    case tokens.asterisk:
                        if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                            node.operator = content;
                            lastAdded = 'operator';
                        } else if (
                            (!node.namespace ||
                                (lastAdded === 'namespace' &&
                                    !spaceAfterMeaningfulToken)) &&
                            next
                        ) {
                            if (spaceBefore) {
                                (0, util.ensureObject)(
                                    node,
                                    'spaces',
                                    'attribute'
                                );

                                node.spaces.attribute.before = spaceBefore;
                                spaceBefore = '';
                            }

                            if (commentBefore) {
                                (0, util.ensureObject)(
                                    node,
                                    'raws',
                                    'spaces',
                                    'attribute'
                                );

                                node.raws.spaces.attribute.before = spaceBefore;
                                commentBefore = '';
                            }

                            node.namespace = (node.namespace || '') + content;
                            var rawValue =
                                (0, util.getProp)(node, 'raws', 'namespace') ||
                                null;

                            if (rawValue) {
                                node.raws.namespace += content;
                            }

                            lastAdded = 'namespace';
                        }

                        spaceAfterMeaningfulToken = false;
                        break;

                    case tokens.dollar:
                        if (lastAdded === 'value') {
                            var oldRawValue = (0, util.getProp)(
                                node,
                                'raws',
                                'value'
                            );

                            node.value += '$';

                            if (oldRawValue) {
                                node.raws.value = oldRawValue + '$';
                            }

                            break;
                        }

                    case tokens.caret:
                        if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                            node.operator = content;
                            lastAdded = 'operator';
                        }

                        spaceAfterMeaningfulToken = false;
                        break;

                    case tokens.combinator:
                        if (
                            content === '~' &&
                            next[_tokenize.FIELDS.TYPE] === tokens.equals
                        ) {
                            node.operator = content;
                            lastAdded = 'operator';
                        }

                        if (content !== '|') {
                            spaceAfterMeaningfulToken = false;
                            break;
                        }

                        if (next[_tokenize.FIELDS.TYPE] === tokens.equals) {
                            node.operator = content;
                            lastAdded = 'operator';
                        } else if (!node.namespace && !node.attribute) {
                            node.namespace = true;
                        }

                        spaceAfterMeaningfulToken = false;
                        break;

                    case tokens.word:
                        if (
                            next &&
                            this.content(next) === '|' &&
                            attr[pos + 2] &&
                            attr[pos + 2][_tokenize.FIELDS.TYPE] !==
                                tokens.equals &&
                            !node.operator &&
                            !node.namespace
                        ) {
                            node.namespace = content;
                            lastAdded = 'namespace';
                        } else if (
                            !node.attribute ||
                            (lastAdded === 'attribute' &&
                                !spaceAfterMeaningfulToken)
                        ) {
                            if (spaceBefore) {
                                (0, util.ensureObject)(
                                    node,
                                    'spaces',
                                    'attribute'
                                );

                                node.spaces.attribute.before = spaceBefore;
                                spaceBefore = '';
                            }

                            if (commentBefore) {
                                (0, util.ensureObject)(
                                    node,
                                    'raws',
                                    'spaces',
                                    'attribute'
                                );

                                node.raws.spaces.attribute.before = commentBefore;
                                commentBefore = '';
                            }

                            node.attribute = (node.attribute || '') + content;

                            var _rawValue =
                                (0, util.getProp)(node, 'raws', 'attribute') ||
                                null;

                            if (_rawValue) {
                                node.raws.attribute += content;
                            }

                            lastAdded = 'attribute';
                        } else if (
                            (!node.value && node.value !== '') ||
                            (lastAdded === 'value' &&
                                !spaceAfterMeaningfulToken)
                        ) {
                            var _unescaped = (0, util.unesc)(content);

                            var _oldRawValue =
                                (0, util.getProp)(node, 'raws', 'value') || '';

                            var oldValue = node.value || '';
                            node.value = oldValue + _unescaped;
                            node.quoteMark = null;

                            if (_unescaped !== content || _oldRawValue) {
                                (0, util.ensureObject)(node, 'raws');
                                node.raws.value =
                                    (_oldRawValue || oldValue) + content;
                            }

                            lastAdded = 'value';
                        } else {
                            var insensitive =
                                content === 'i' || content === 'I';

                            if (
                                (node.value || node.value === '') &&
                                (node.quoteMark || spaceAfterMeaningfulToken)
                            ) {
                                node.insensitive = insensitive;

                                if (!insensitive || content === 'I') {
                                    (0, util.ensureObject)(node, 'raws');
                                    node.raws.insensitiveFlag = content;
                                }

                                lastAdded = 'insensitive';

                                if (spaceBefore) {
                                    (0, util.ensureObject)(
                                        node,
                                        'spaces',
                                        'insensitive'
                                    );

                                    node.spaces.insensitive.before = spaceBefore;
                                    spaceBefore = '';
                                }

                                if (commentBefore) {
                                    (0, util.ensureObject)(
                                        node,
                                        'raws',
                                        'spaces',
                                        'insensitive'
                                    );

                                    node.raws.spaces.insensitive.before = commentBefore;
                                    commentBefore = '';
                                }
                            } else if (node.value || node.value === '') {
                                lastAdded = 'value';
                                node.value += content;

                                if (node.raws.value) {
                                    node.raws.value += content;
                                }
                            }
                        }

                        spaceAfterMeaningfulToken = false;
                        break;

                    case tokens.str:
                        if (!node.attribute || !node.operator) {
                            return this.error(
                                'Expected an attribute followed by an operator preceding the string.',
                                {
                                    index: token[_tokenize.FIELDS.START_POS]
                                }
                            );
                        }

                        var _unescapeValue = (0, _attribute.unescapeValue)(
                                content
                            ),
                            unescaped = _unescapeValue.unescaped,
                            quoteMark = _unescapeValue.quoteMark;

                        node.value = unescaped;
                        node.quoteMark = quoteMark;
                        lastAdded = 'value';
                        (0, util.ensureObject)(node, 'raws');
                        node.raws.value = content;
                        spaceAfterMeaningfulToken = false;
                        break;

                    case tokens.equals:
                        if (!node.attribute) {
                            return this.expected(
                                'attribute',
                                token[_tokenize.FIELDS.START_POS],
                                content
                            );
                        }

                        if (node.value) {
                            return this.error(
                                'Unexpected "=" found; an operator was already defined.',
                                {
                                    index: token[_tokenize.FIELDS.START_POS]
                                }
                            );
                        }

                        node.operator = node.operator
                            ? node.operator + content
                            : content;
                        lastAdded = 'operator';
                        spaceAfterMeaningfulToken = false;
                        break;

                    case tokens.comment:
                        if (lastAdded) {
                            if (
                                spaceAfterMeaningfulToken ||
                                (next &&
                                    next[_tokenize.FIELDS.TYPE] ===
                                        tokens.space) ||
                                lastAdded === 'insensitive'
                            ) {
                                var lastComment =
                                    (0, util.getProp)(
                                        node,
                                        'spaces',
                                        lastAdded,
                                        'after'
                                    ) || '';
                                var rawLastComment =
                                    (0, util.getProp)(
                                        node,
                                        'raws',
                                        'spaces',
                                        lastAdded,
                                        'after'
                                    ) || lastComment;
                                (0, util.ensureObject)(
                                    node,
                                    'raws',
                                    'spaces',
                                    lastAdded
                                );

                                node.raws.spaces[lastAdded].after =
                                    rawLastComment + content;
                            } else {
                                var lastValue = node[lastAdded] || '';
                                var rawLastValue =
                                    (0, util.getProp)(
                                        node,
                                        'raws',
                                        lastAdded
                                    ) || lastValue;
                                (0, util.ensureObject)(node, 'raws');
                                node.raws[lastAdded] = rawLastValue + content;
                            }
                        } else {
                            commentBefore = commentBefore + content;
                        }

                        break;

                    default:
                        return this.error(
                            'Unexpected "' + content + '" found.',
                            {
                                index: token[_tokenize.FIELDS.START_POS]
                            }
                        );
                }

                pos++;
            }

            unescapeProp(node, 'attribute');
            unescapeProp(node, 'namespace');
            this.newNode(new _attribute.default(node));
            this.position++;
        };

        _proto.parseWhitespaceEquivalentTokens = function parseWhitespaceEquivalentTokens(
            stopPosition
        ) {
            if (stopPosition < 0) {
                stopPosition = this.tokens.length;
            }

            var startPosition = this.position;
            var nodes = [];
            var space = '';
            var lastComment = undefined;

            do {
                if (WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]) {
                    if (!this.options.lossy) {
                        space += this.content();
                    }
                } else if (
                    this.currToken[_tokenize.FIELDS.TYPE] === tokens.comment
                ) {
                    var spaces = {};

                    if (space) {
                        spaces.before = space;
                        space = '';
                    }

                    lastComment = new _comment.default({
                        value: this.content(),
                        source: getTokenSource(this.currToken),
                        sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],

                        spaces: spaces
                    });

                    nodes.push(lastComment);
                }
            } while (++this.position < stopPosition);

            if (space) {
                if (lastComment) {
                    lastComment.spaces.after = space;
                } else if (!this.options.lossy) {
                    var firstToken = this.tokens[startPosition];
                    var lastToken = this.tokens[this.position - 1];
                    nodes.push(
                        new _string.default({
                            value: '',
                            source: getSource(
                                firstToken[_tokenize.FIELDS.START_LINE],
                                firstToken[_tokenize.FIELDS.START_COL],
                                lastToken[_tokenize.FIELDS.END_LINE],
                                lastToken[_tokenize.FIELDS.END_COL]
                            ),

                            sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
                            spaces: {
                                before: space,
                                after: ''
                            }
                        })
                    );
                }
            }

            return nodes;
        };

        _proto.convertWhitespaceNodesToSpace = function convertWhitespaceNodesToSpace(
            nodes,
            requiredSpace
        ) {
            var _this2 = this;

            if (requiredSpace === void 0) {
                requiredSpace = false;
            }

            var space = '';
            var rawSpace = '';
            nodes.forEach(function (n) {
                var spaceBefore = _this2.lossySpace(
                    n.spaces.before,
                    requiredSpace
                );

                var rawSpaceBefore = _this2.lossySpace(
                    n.rawSpaceBefore,
                    requiredSpace
                );

                space +=
                    spaceBefore +
                    _this2.lossySpace(
                        n.spaces.after,
                        requiredSpace && spaceBefore.length === 0
                    );

                rawSpace +=
                    spaceBefore +
                    n.value +
                    _this2.lossySpace(
                        n.rawSpaceAfter,
                        requiredSpace && rawSpaceBefore.length === 0
                    );
            });

            if (rawSpace === space) {
                rawSpace = undefined;
            }

            var result = {
                space: space,
                rawSpace: rawSpace
            };

            return result;
        };

        _proto.isNamedCombinator = function isNamedCombinator(position) {
            if (position === void 0) {
                position = this.position;
            }

            return (
                this.tokens[position + 0] &&
                this.tokens[position + 0][_tokenize.FIELDS.TYPE] ===
                    tokens.slash &&
                this.tokens[position + 1] &&
                this.tokens[position + 1][_tokenize.FIELDS.TYPE] ===
                    tokens.word &&
                this.tokens[position + 2] &&
                this.tokens[position + 2][_tokenize.FIELDS.TYPE] ===
                    tokens.slash
            );
        };

        _proto.namedCombinator = function namedCombinator() {
            if (this.isNamedCombinator()) {
                var nameRaw = this.content(this.tokens[this.position + 1]);
                var name = (0, util.unesc)(nameRaw).toLowerCase();
                var raws = {};

                if (name !== nameRaw) {
                    raws.value = '/' + nameRaw + '/';
                }

                var node = new _combinator.default({
                    value: '/' + name + '/',
                    source: getSource(
                        this.currToken[_tokenize.FIELDS.START_LINE],
                        this.currToken[_tokenize.FIELDS.START_COL],
                        this.tokens[this.position + 2][
                            _tokenize.FIELDS.END_LINE
                        ],

                        this.tokens[this.position + 2][_tokenize.FIELDS.END_COL]
                    ),

                    sourceIndex: this.currToken[_tokenize.FIELDS.START_POS],
                    raws: raws
                });

                this.position = this.position + 3;
                return node;
            } else {
                this.unexpected();
            }
        };

        _proto.combinator = function combinator() {
            var _this3 = this;

            if (this.content() === '|') {
                return this.namespace();
            }

            var nextSigTokenPos = this.locateNextMeaningfulToken(this.position);

            if (
                nextSigTokenPos < 0 ||
                this.tokens[nextSigTokenPos][_tokenize.FIELDS.TYPE] ===
                    tokens.comma
            ) {
                var nodes = this.parseWhitespaceEquivalentTokens(
                    nextSigTokenPos
                );

                if (nodes.length > 0) {
                    var last = this.current.last;

                    if (last) {
                        var _this$convertWhitespa = this.convertWhitespaceNodesToSpace(
                                nodes
                            ),
                            space = _this$convertWhitespa.space,
                            rawSpace = _this$convertWhitespa.rawSpace;

                        if (rawSpace !== undefined) {
                            last.rawSpaceAfter += rawSpace;
                        }

                        last.spaces.after += space;
                    } else {
                        nodes.forEach(function (n) {
                            return _this3.newNode(n);
                        });
                    }
                }

                return;
            }

            var firstToken = this.currToken;
            var spaceOrDescendantSelectorNodes = undefined;

            if (nextSigTokenPos > this.position) {
                spaceOrDescendantSelectorNodes = this.parseWhitespaceEquivalentTokens(
                    nextSigTokenPos
                );
            }

            var node;

            if (this.isNamedCombinator()) {
                node = this.namedCombinator();
            } else if (
                this.currToken[_tokenize.FIELDS.TYPE] === tokens.combinator
            ) {
                node = new _combinator.default({
                    value: this.content(),
                    source: getTokenSource(this.currToken),
                    sourceIndex: this.currToken[_tokenize.FIELDS.START_POS]
                });

                this.position++;
            } else if (
                WHITESPACE_TOKENS[this.currToken[_tokenize.FIELDS.TYPE]]
            );
            else if (!spaceOrDescendantSelectorNodes) {
                this.unexpected();
            }

            if (node) {
                if (spaceOrDescendantSelectorNodes) {
                    var _this$convertWhitespa2 = this.convertWhitespaceNodesToSpace(
                            spaceOrDescendantSelectorNodes
                        ),
                        _space = _this$convertWhitespa2.space,
                        _rawSpace = _this$convertWhitespa2.rawSpace;

                    node.spaces.before = _space;
                    node.rawSpaceBefore = _rawSpace;
                }
            } else {
                var _this$convertWhitespa3 = this.convertWhitespaceNodesToSpace(
                        spaceOrDescendantSelectorNodes,
                        true
                    ),
                    _space2 = _this$convertWhitespa3.space,
                    _rawSpace2 = _this$convertWhitespa3.rawSpace;

                if (!_rawSpace2) {
                    _rawSpace2 = _space2;
                }

                var spaces = {};
                var raws = {
                    spaces: {}
                };

                if (_space2.endsWith(' ') && _rawSpace2.endsWith(' ')) {
                    spaces.before = _space2.slice(0, _space2.length - 1);
                    raws.spaces.before = _rawSpace2.slice(
                        0,
                        _rawSpace2.length - 1
                    );
                } else if (
                    _space2.startsWith(' ') &&
                    _rawSpace2.startsWith(' ')
                ) {
                    spaces.after = _space2.slice(1);
                    raws.spaces.after = _rawSpace2.slice(1);
                } else {
                    raws.value = _rawSpace2;
                }

                node = new _combinator.default({
                    value: ' ',
                    source: getTokenSourceSpan(
                        firstToken,
                        this.tokens[this.position - 1]
                    ),

                    sourceIndex: firstToken[_tokenize.FIELDS.START_POS],
                    spaces: spaces,
                    raws: raws
                });
            }

            if (
                this.currToken &&
                this.currToken[_tokenize.FIELDS.TYPE] === tokens.space
            ) {
                node.spaces.after = this.optionalSpace(this.content());
                this.position++;
            }

            return this.newNode(node);
        };

        _proto.comma = function comma() {
            if (this.position === this.tokens.length - 1) {
                this.root.trailingComma = true;
                this.position++;
                return;
            }

            this.current._inferEndPosition();

            var selector = new _selector.default({
                source: {
                    start: tokenStart(this.tokens[this.position + 1])
                }
            });

            this.current.parent.append(selector);
            this.current = selector;
            this.position++;
        };

        _proto.comment = function comment() {
            var current = this.currToken;
            this.newNode(
                new _comment.default({
                    value: this.content(),
                    source: getTokenSource(current),
                    sourceIndex: current[_tokenize.FIELDS.START_POS]
                })
            );

            this.position++;
        };

        _proto.error = function error(message, opts) {
            throw this.root.error(message, opts);
        };

        _proto.missingBackslash = function missingBackslash() {
            return this.error('Expected a backslash preceding the semicolon.', {
                index: this.currToken[_tokenize.FIELDS.START_POS]
            });
        };

        _proto.missingParenthesis = function missingParenthesis() {
            return this.expected(
                'opening parenthesis',
                this.currToken[_tokenize.FIELDS.START_POS]
            );
        };

        _proto.missingSquareBracket = function missingSquareBracket() {
            return this.expected(
                'opening square bracket',
                this.currToken[_tokenize.FIELDS.START_POS]
            );
        };

        _proto.unexpected = function unexpected() {
            return this.error(
                "Unexpected '" +
                    this.content() +
                    "'. Escaping special characters with \\ may help.",
                this.currToken[_tokenize.FIELDS.START_POS]
            );
        };

        _proto.namespace = function namespace() {
            var before =
                (this.prevToken && this.content(this.prevToken)) || true;

            if (this.nextToken[_tokenize.FIELDS.TYPE] === tokens.word) {
                this.position++;
                return this.word(before);
            } else if (
                this.nextToken[_tokenize.FIELDS.TYPE] === tokens.asterisk
            ) {
                this.position++;
                return this.universal(before);
            }
        };

        _proto.nesting = function nesting() {
            if (this.nextToken) {
                var nextContent = this.content(this.nextToken);

                if (nextContent === '|') {
                    this.position++;
                    return;
                }
            }

            var current = this.currToken;
            this.newNode(
                new _nesting.default({
                    value: this.content(),
                    source: getTokenSource(current),
                    sourceIndex: current[_tokenize.FIELDS.START_POS]
                })
            );

            this.position++;
        };

        _proto.parentheses = function parentheses() {
            var last = this.current.last;
            var unbalanced = 1;
            this.position++;

            if (last && last.type === types$1.PSEUDO) {
                var selector = new _selector.default({
                    source: {
                        start: tokenStart(this.tokens[this.position - 1])
                    }
                });

                var cache = this.current;
                last.append(selector);
                this.current = selector;

                while (this.position < this.tokens.length && unbalanced) {
                    if (
                        this.currToken[_tokenize.FIELDS.TYPE] ===
                        tokens.openParenthesis
                    ) {
                        unbalanced++;
                    }

                    if (
                        this.currToken[_tokenize.FIELDS.TYPE] ===
                        tokens.closeParenthesis
                    ) {
                        unbalanced--;
                    }

                    if (unbalanced) {
                        this.parse();
                    } else {
                        this.current.source.end = tokenEnd(this.currToken);
                        this.current.parent.source.end = tokenEnd(
                            this.currToken
                        );

                        this.position++;
                    }
                }

                this.current = cache;
            } else {
                var parenStart = this.currToken;
                var parenValue = '(';
                var parenEnd;

                while (this.position < this.tokens.length && unbalanced) {
                    if (
                        this.currToken[_tokenize.FIELDS.TYPE] ===
                        tokens.openParenthesis
                    ) {
                        unbalanced++;
                    }

                    if (
                        this.currToken[_tokenize.FIELDS.TYPE] ===
                        tokens.closeParenthesis
                    ) {
                        unbalanced--;
                    }

                    parenEnd = this.currToken;
                    parenValue += this.parseParenthesisToken(this.currToken);

                    this.position++;
                }

                if (last) {
                    last.appendToPropertyAndEscape(
                        'value',
                        parenValue,
                        parenValue
                    );
                } else {
                    this.newNode(
                        new _string.default({
                            value: parenValue,
                            source: getSource(
                                parenStart[_tokenize.FIELDS.START_LINE],
                                parenStart[_tokenize.FIELDS.START_COL],
                                parenEnd[_tokenize.FIELDS.END_LINE],
                                parenEnd[_tokenize.FIELDS.END_COL]
                            ),

                            sourceIndex: parenStart[_tokenize.FIELDS.START_POS]
                        })
                    );
                }
            }

            if (unbalanced) {
                return this.expected(
                    'closing parenthesis',
                    this.currToken[_tokenize.FIELDS.START_POS]
                );
            }
        };

        _proto.pseudo = function pseudo() {
            var _this4 = this;

            var pseudoStr = '';
            var startingToken = this.currToken;

            while (
                this.currToken &&
                this.currToken[_tokenize.FIELDS.TYPE] === tokens.colon
            ) {
                pseudoStr += this.content();
                this.position++;
            }

            if (!this.currToken) {
                return this.expected(
                    ['pseudo-class', 'pseudo-element'],
                    this.position - 1
                );
            }

            if (this.currToken[_tokenize.FIELDS.TYPE] === tokens.word) {
                this.splitWord(false, function (first, length) {
                    pseudoStr += first;

                    _this4.newNode(
                        new _pseudo.default({
                            value: pseudoStr,
                            source: getTokenSourceSpan(
                                startingToken,
                                _this4.currToken
                            ),

                            sourceIndex:
                                startingToken[_tokenize.FIELDS.START_POS]
                        })
                    );

                    if (
                        length > 1 &&
                        _this4.nextToken &&
                        _this4.nextToken[_tokenize.FIELDS.TYPE] ===
                            tokens.openParenthesis
                    ) {
                        _this4.error('Misplaced parenthesis.', {
                            index: _this4.nextToken[_tokenize.FIELDS.START_POS]
                        });
                    }
                });
            } else {
                return this.expected(
                    ['pseudo-class', 'pseudo-element'],
                    this.currToken[_tokenize.FIELDS.START_POS]
                );
            }
        };

        _proto.space = function space() {
            var content = this.content();

            if (
                this.position === 0 ||
                this.prevToken[_tokenize.FIELDS.TYPE] === tokens.comma ||
                this.prevToken[_tokenize.FIELDS.TYPE] === tokens.openParenthesis
            ) {
                this.spaces = this.optionalSpace(content);
                this.position++;
            } else if (
                this.position === this.tokens.length - 1 ||
                this.nextToken[_tokenize.FIELDS.TYPE] === tokens.comma ||
                this.nextToken[_tokenize.FIELDS.TYPE] ===
                    tokens.closeParenthesis
            ) {
                this.current.last.spaces.after = this.optionalSpace(content);

                this.position++;
            } else {
                this.combinator();
            }
        };

        _proto.string = function string() {
            var current = this.currToken;
            this.newNode(
                new _string.default({
                    value: this.content(),
                    source: getTokenSource(current),
                    sourceIndex: current[_tokenize.FIELDS.START_POS]
                })
            );

            this.position++;
        };

        _proto.universal = function universal(namespace) {
            var nextToken = this.nextToken;

            if (nextToken && this.content(nextToken) === '|') {
                this.position++;
                return this.namespace();
            }

            var current = this.currToken;
            this.newNode(
                new _universal.default({
                    value: this.content(),
                    source: getTokenSource(current),
                    sourceIndex: current[_tokenize.FIELDS.START_POS]
                }),

                namespace
            );

            this.position++;
        };

        _proto.splitWord = function splitWord(namespace, firstCallback) {
            var _this5 = this;

            var nextToken = this.nextToken;
            var word = this.content();

            while (
                nextToken &&
                ~[
                    tokens.dollar,
                    tokens.caret,
                    tokens.equals,
                    tokens.word
                ].indexOf(nextToken[_tokenize.FIELDS.TYPE])
            ) {
                this.position++;
                var current = this.content();
                word += current;

                if (current.lastIndexOf('\\') === current.length - 1) {
                    var next = this.nextToken;

                    if (next && next[_tokenize.FIELDS.TYPE] === tokens.space) {
                        word += this.requiredSpace(this.content(next));
                        this.position++;
                    }
                }

                nextToken = this.nextToken;
            }

            var hasClass = (0, _indexesOf.default)(word, '.').filter(function (
                i
            ) {
                return word[i - 1] !== '\\';
            });

            var hasId = (0, _indexesOf.default)(word, '#').filter(function (i) {
                return word[i - 1] !== '\\';
            });

            var interpolations = (0, _indexesOf.default)(word, '#{');

            if (interpolations.length) {
                hasId = hasId.filter(function (hashIndex) {
                    return !~interpolations.indexOf(hashIndex);
                });
            }

            var indices = (0, _sortAscending.default)(
                (0, _uniq.default)([0].concat(hasClass, hasId))
            );

            indices.forEach(function (ind, i) {
                var index = indices[i + 1] || word.length;
                var value = word.slice(ind, index);

                if (i === 0 && firstCallback) {
                    return firstCallback.call(_this5, value, indices.length);
                }

                var node;
                var current = _this5.currToken;
                var sourceIndex =
                    current[_tokenize.FIELDS.START_POS] + indices[i];
                var source = getSource(
                    current[1],
                    current[2] + ind,
                    current[3],
                    current[2] + (index - 1)
                );

                if (~hasClass.indexOf(ind)) {
                    var classNameOpts = {
                        value: value.slice(1),
                        source: source,
                        sourceIndex: sourceIndex
                    };

                    node = new _className.default(
                        unescapeProp(classNameOpts, 'value')
                    );
                } else if (~hasId.indexOf(ind)) {
                    var idOpts = {
                        value: value.slice(1),
                        source: source,
                        sourceIndex: sourceIndex
                    };

                    node = new _id.default(unescapeProp(idOpts, 'value'));
                } else {
                    var tagOpts = {
                        value: value,
                        source: source,
                        sourceIndex: sourceIndex
                    };

                    unescapeProp(tagOpts, 'value');
                    node = new _tag.default(tagOpts);
                }

                _this5.newNode(node, namespace);

                namespace = null;
            });
            this.position++;
        };

        _proto.word = function word(namespace) {
            var nextToken = this.nextToken;

            if (nextToken && this.content(nextToken) === '|') {
                this.position++;
                return this.namespace();
            }

            return this.splitWord(namespace);
        };

        _proto.loop = function loop() {
            while (this.position < this.tokens.length) {
                this.parse(true);
            }

            this.current._inferEndPosition();

            return this.root;
        };

        _proto.parse = function parse(throwOnParenthesis) {
            switch (this.currToken[_tokenize.FIELDS.TYPE]) {
                case tokens.space:
                    this.space();
                    break;

                case tokens.comment:
                    this.comment();
                    break;

                case tokens.openParenthesis:
                    this.parentheses();
                    break;

                case tokens.closeParenthesis:
                    if (throwOnParenthesis) {
                        this.missingParenthesis();
                    }

                    break;

                case tokens.openSquare:
                    this.attribute();
                    break;

                case tokens.dollar:
                case tokens.caret:
                case tokens.equals:
                case tokens.word:
                    this.word();
                    break;

                case tokens.colon:
                    this.pseudo();
                    break;

                case tokens.comma:
                    this.comma();
                    break;

                case tokens.asterisk:
                    this.universal();
                    break;

                case tokens.ampersand:
                    this.nesting();
                    break;

                case tokens.slash:
                case tokens.combinator:
                    this.combinator();
                    break;

                case tokens.str:
                    this.string();
                    break;

                case tokens.closeSquare:
                    this.missingSquareBracket();

                case tokens.semicolon:
                    this.missingBackslash();

                default:
                    this.unexpected();
            }
        };

        _proto.expected = function expected(description, index, found) {
            if (Array.isArray(description)) {
                var last = description.pop();
                description = description.join(', ') + ' or ' + last;
            }

            var an = /^[aeiou]/.test(description[0]) ? 'an' : 'a';

            if (!found) {
                return this.error('Expected ' + an + ' ' + description + '.', {
                    index: index
                });
            }

            return this.error(
                'Expected ' +
                    an +
                    ' ' +
                    description +
                    ', found "' +
                    found +
                    '" instead.',
                {
                    index: index
                }
            );
        };

        _proto.requiredSpace = function requiredSpace(space) {
            return this.options.lossy ? ' ' : space;
        };

        _proto.optionalSpace = function optionalSpace(space) {
            return this.options.lossy ? '' : space;
        };

        _proto.lossySpace = function lossySpace(space, required) {
            if (this.options.lossy) {
                return required ? ' ' : '';
            } else {
                return space;
            }
        };

        _proto.parseParenthesisToken = function parseParenthesisToken(token) {
            var content = this.content(token);

            if (token[_tokenize.FIELDS.TYPE] === tokens.space) {
                return this.requiredSpace(content);
            } else {
                return content;
            }
        };

        _proto.newNode = function newNode(node, namespace) {
            if (namespace) {
                if (/^ +$/.test(namespace)) {
                    if (!this.options.lossy) {
                        this.spaces = (this.spaces || '') + namespace;
                    }

                    namespace = true;
                }

                node.namespace = namespace;
                unescapeProp(node, 'namespace');
            }

            if (this.spaces) {
                node.spaces.before = this.spaces;
                this.spaces = '';
            }

            return this.current.append(node);
        };

        _proto.content = function content(token) {
            if (token === void 0) {
                token = this.currToken;
            }

            return this.css.slice(
                token[_tokenize.FIELDS.START_POS],
                token[_tokenize.FIELDS.END_POS]
            );
        };

        _proto.locateNextMeaningfulToken = function locateNextMeaningfulToken(
            startPosition
        ) {
            if (startPosition === void 0) {
                startPosition = this.position + 1;
            }

            var searchPosition = startPosition;

            while (searchPosition < this.tokens.length) {
                if (
                    WHITESPACE_EQUIV_TOKENS[
                        this.tokens[searchPosition][_tokenize.FIELDS.TYPE]
                    ]
                ) {
                    searchPosition++;
                    continue;
                } else {
                    return searchPosition;
                }
            }

            return -1;
        };

        _createClass(Parser, [
            {
                key: 'currToken',
                get: function get() {
                    return this.tokens[this.position];
                }
            },

            {
                key: 'nextToken',
                get: function get() {
                    return this.tokens[this.position + 1];
                }
            },

            {
                key: 'prevToken',
                get: function get() {
                    return this.tokens[this.position - 1];
                }
            }
        ]);

        return Parser;
    })();

    exports.default = Parser;
    module.exports = exports.default;
});

unwrapExports(parser);

var processor = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _parser = _interopRequireDefault(parser);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var Processor = (function () {
        function Processor(func, options) {
            this.func = func || function noop() {};

            this.funcRes = null;
            this.options = options;
        }

        var _proto = Processor.prototype;

        _proto._shouldUpdateSelector = function _shouldUpdateSelector(
            rule,
            options
        ) {
            if (options === void 0) {
                options = {};
            }

            var merged = objectAssign({}, this.options, options);

            if (merged.updateSelector === false) {
                return false;
            } else {
                return typeof rule !== 'string';
            }
        };

        _proto._isLossy = function _isLossy(options) {
            if (options === void 0) {
                options = {};
            }

            var merged = objectAssign({}, this.options, options);

            if (merged.lossless === false) {
                return true;
            } else {
                return false;
            }
        };

        _proto._root = function _root(rule, options) {
            if (options === void 0) {
                options = {};
            }

            var parser = new _parser.default(rule, this._parseOptions(options));

            return parser.root;
        };

        _proto._parseOptions = function _parseOptions(options) {
            return {
                lossy: this._isLossy(options)
            };
        };

        _proto._run = function _run(rule, options) {
            var _this = this;

            if (options === void 0) {
                options = {};
            }

            return new Promise(function (resolve, reject) {
                try {
                    var root = _this._root(rule, options);

                    Promise.resolve(_this.func(root))
                        .then(function (transform) {
                            var string = undefined;

                            if (_this._shouldUpdateSelector(rule, options)) {
                                string = root.toString();
                                rule.selector = string;
                            }

                            return {
                                transform: transform,
                                root: root,
                                string: string
                            };
                        })
                        .then(resolve, reject);
                } catch (e) {
                    reject(e);
                    return;
                }
            });
        };

        _proto._runSync = function _runSync(rule, options) {
            if (options === void 0) {
                options = {};
            }

            var root = this._root(rule, options);

            var transform = this.func(root);

            if (transform && typeof transform.then === 'function') {
                throw new Error(
                    'Selector processor returned a promise to a synchronous call.'
                );
            }

            var string = undefined;

            if (options.updateSelector && typeof rule !== 'string') {
                string = root.toString();
                rule.selector = string;
            }

            return {
                transform: transform,
                root: root,
                string: string
            };
        };

        _proto.ast = function ast(rule, options) {
            return this._run(rule, options).then(function (result) {
                return result.root;
            });
        };

        _proto.astSync = function astSync(rule, options) {
            return this._runSync(rule, options).root;
        };

        _proto.transform = function transform(rule, options) {
            return this._run(rule, options).then(function (result) {
                return result.transform;
            });
        };

        _proto.transformSync = function transformSync(rule, options) {
            return this._runSync(rule, options).transform;
        };

        _proto.process = function process(rule, options) {
            return this._run(rule, options).then(function (result) {
                return result.string || result.root.toString();
            });
        };

        _proto.processSync = function processSync(rule, options) {
            var result = this._runSync(rule, options);

            return result.string || result.root.toString();
        };

        return Processor;
    })();

    exports.default = Processor;
    module.exports = exports.default;
});

unwrapExports(processor);

var constructors = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.universal = exports.tag = exports.string = exports.selector = exports.root = exports.pseudo = exports.nesting = exports.id = exports.comment = exports.combinator = exports.className = exports.attribute = void 0;

    var _attribute = _interopRequireDefault(attribute);

    var _className = _interopRequireDefault(className);

    var _combinator = _interopRequireDefault(combinator);

    var _comment = _interopRequireDefault(comment);

    var _id = _interopRequireDefault(id);

    var _nesting = _interopRequireDefault(nesting);

    var _pseudo = _interopRequireDefault(pseudo);

    var _root = _interopRequireDefault(root);

    var _selector = _interopRequireDefault(selector);

    var _string = _interopRequireDefault(string);

    var _tag = _interopRequireDefault(tag);

    var _universal = _interopRequireDefault(universal);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var attribute$1 = function attribute(opts) {
        return new _attribute.default(opts);
    };

    exports.attribute = attribute$1;

    var className$1 = function className(opts) {
        return new _className.default(opts);
    };

    exports.className = className$1;

    var combinator$1 = function combinator(opts) {
        return new _combinator.default(opts);
    };

    exports.combinator = combinator$1;

    var comment$1 = function comment(opts) {
        return new _comment.default(opts);
    };

    exports.comment = comment$1;

    var id$1 = function id(opts) {
        return new _id.default(opts);
    };

    exports.id = id$1;

    var nesting$1 = function nesting(opts) {
        return new _nesting.default(opts);
    };

    exports.nesting = nesting$1;

    var pseudo$1 = function pseudo(opts) {
        return new _pseudo.default(opts);
    };

    exports.pseudo = pseudo$1;

    var root$1 = function root(opts) {
        return new _root.default(opts);
    };

    exports.root = root$1;

    var selector$1 = function selector(opts) {
        return new _selector.default(opts);
    };

    exports.selector = selector$1;

    var string$1 = function string(opts) {
        return new _string.default(opts);
    };

    exports.string = string$1;

    var tag$1 = function tag(opts) {
        return new _tag.default(opts);
    };

    exports.tag = tag$1;

    var universal$1 = function universal(opts) {
        return new _universal.default(opts);
    };

    exports.universal = universal$1;
});

unwrapExports(constructors);
var constructors_1 = constructors.universal;
var constructors_2 = constructors.tag;
var constructors_3 = constructors.string;
var constructors_4 = constructors.selector;
var constructors_5 = constructors.root;
var constructors_6 = constructors.pseudo;
var constructors_7 = constructors.nesting;
var constructors_8 = constructors.id;
var constructors_9 = constructors.comment;
var constructors_10 = constructors.combinator;
var constructors_11 = constructors.className;
var constructors_12 = constructors.attribute;

var guards = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.isNode = isNode;
    exports.isPseudoElement = isPseudoElement;
    exports.isPseudoClass = isPseudoClass;
    exports.isContainer = isContainer;
    exports.isNamespace = isNamespace;
    exports.isUniversal = exports.isTag = exports.isString = exports.isSelector = exports.isRoot = exports.isPseudo = exports.isNesting = exports.isIdentifier = exports.isComment = exports.isCombinator = exports.isClassName = exports.isAttribute = void 0;

    var _IS_TYPE;

    var IS_TYPE =
        ((_IS_TYPE = {}),
        (_IS_TYPE[types.ATTRIBUTE] = true),
        (_IS_TYPE[types.CLASS] = true),
        (_IS_TYPE[types.COMBINATOR] = true),
        (_IS_TYPE[types.COMMENT] = true),
        (_IS_TYPE[types.ID] = true),
        (_IS_TYPE[types.NESTING] = true),
        (_IS_TYPE[types.PSEUDO] = true),
        (_IS_TYPE[types.ROOT] = true),
        (_IS_TYPE[types.SELECTOR] = true),
        (_IS_TYPE[types.STRING] = true),
        (_IS_TYPE[types.TAG] = true),
        (_IS_TYPE[types.UNIVERSAL] = true),
        _IS_TYPE);

    function isNode(node) {
        return typeof node === 'object' && IS_TYPE[node.type];
    }

    function isNodeType(type, node) {
        return isNode(node) && node.type === type;
    }

    var isAttribute = isNodeType.bind(null, types.ATTRIBUTE);
    exports.isAttribute = isAttribute;
    var isClassName = isNodeType.bind(null, types.CLASS);
    exports.isClassName = isClassName;
    var isCombinator = isNodeType.bind(null, types.COMBINATOR);
    exports.isCombinator = isCombinator;
    var isComment = isNodeType.bind(null, types.COMMENT);
    exports.isComment = isComment;
    var isIdentifier = isNodeType.bind(null, types.ID);
    exports.isIdentifier = isIdentifier;
    var isNesting = isNodeType.bind(null, types.NESTING);
    exports.isNesting = isNesting;
    var isPseudo = isNodeType.bind(null, types.PSEUDO);
    exports.isPseudo = isPseudo;
    var isRoot = isNodeType.bind(null, types.ROOT);
    exports.isRoot = isRoot;
    var isSelector = isNodeType.bind(null, types.SELECTOR);
    exports.isSelector = isSelector;
    var isString = isNodeType.bind(null, types.STRING);
    exports.isString = isString;
    var isTag = isNodeType.bind(null, types.TAG);
    exports.isTag = isTag;
    var isUniversal = isNodeType.bind(null, types.UNIVERSAL);
    exports.isUniversal = isUniversal;

    function isPseudoElement(node) {
        return (
            isPseudo(node) &&
            node.value &&
            (node.value.startsWith('::') ||
                node.value === ':before' ||
                node.value === ':after')
        );
    }

    function isPseudoClass(node) {
        return isPseudo(node) && !isPseudoElement(node);
    }

    function isContainer(node) {
        return !!(isNode(node) && node.walk);
    }

    function isNamespace(node) {
        return isAttribute(node) || isTag(node);
    }
});

unwrapExports(guards);
var guards_1 = guards.isNode;
var guards_2 = guards.isPseudoElement;
var guards_3 = guards.isPseudoClass;
var guards_4 = guards.isContainer;
var guards_5 = guards.isNamespace;
var guards_6 = guards.isUniversal;
var guards_7 = guards.isTag;
var guards_8 = guards.isString;
var guards_9 = guards.isSelector;
var guards_10 = guards.isRoot;
var guards_11 = guards.isPseudo;
var guards_12 = guards.isNesting;
var guards_13 = guards.isIdentifier;
var guards_14 = guards.isComment;
var guards_15 = guards.isCombinator;
var guards_16 = guards.isClassName;
var guards_17 = guards.isAttribute;

var selectors = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;

    Object.keys(types).forEach(function (key) {
        if (key === 'default' || key === '__esModule') {
            return;
        }
        exports[key] = types[key];
    });

    Object.keys(constructors).forEach(function (key) {
        if (key === 'default' || key === '__esModule') {
            return;
        }
        exports[key] = constructors[key];
    });

    Object.keys(guards).forEach(function (key) {
        if (key === 'default' || key === '__esModule') {
            return;
        }
        exports[key] = guards[key];
    });
});

unwrapExports(selectors);

var dist = createCommonjsModule(function (module, exports) {
    exports.__esModule = true;
    exports.default = void 0;

    var _processor = _interopRequireDefault(processor);

    var selectors$1 = _interopRequireWildcard(selectors);

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};
            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) {
                        var desc =
                            Object.defineProperty &&
                            Object.getOwnPropertyDescriptor
                                ? Object.getOwnPropertyDescriptor(obj, key)
                                : {};
                        if (desc.get || desc.set) {
                            Object.defineProperty(newObj, key, desc);
                        } else {
                            newObj[key] = obj[key];
                        }
                    }
                }
            }
            newObj.default = obj;
            return newObj;
        }
    }

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    var parser = function parser(processor) {
        return new _processor.default(processor);
    };

    objectAssign(parser, selectors$1);
    delete parser.__esModule;
    var _default = parser;
    exports.default = _default;
    module.exports = exports.default;
});

var postcssSelectorParser = unwrapExports(dist);

function getChildren(node) {
    if (node.documentElement) {
        return node.documentElement.children;
    } else if (node.shadowRoot) {
        return node.shadowRoot.children;
    } else if (
        typeof node.assignedElements === 'function' &&
        !node.assignedSlot
    ) {
        return node.assignedElements();
    } else {
        return node.children;
    }
}

var ElementIterator = function ElementIterator(context) {
    this._queue = [context];
    this.next();
};

ElementIterator.prototype.next = function next() {
    var node = this._queue.pop();
    if (node) {
        var children = getChildren(node);
        if (children) {
            for (var i = children.length - 1; i >= 0; i--) {
                this._queue.push(children[i]);
            }
        }
    }
    return node;
};

function getLastNonCombinatorNodes(nodes) {
    var results = [];
    for (var i = nodes.length - 1; i >= 0; i--) {
        var node = nodes[i];
        if (node.type === 'combinator') {
            break;
        }
        results.push(node);
    }
    return results.reverse();
}

function getParent(element) {
    if (
        element.assignedSlot &&
        typeof element.assignedElements !== 'function'
    ) {
        return element.assignedSlot.parentElement;
    }
    if (element.parentElement) {
        return element.parentElement;
    }

    var rootNode = element.getRootNode();
    if (rootNode !== document) {
        return rootNode.host;
    }
}

function getFirstMatchingAncestor(element, nodes) {
    var ancestor = getParent(element);
    while (ancestor) {
        if (matches(ancestor, { nodes: nodes })) {
            return ancestor;
        }

        ancestor = getParent(ancestor);
    }
}

function getFirstMatchingPreviousSibling(element, nodes) {
    var sibling = element.previousElementSibling;
    while (sibling) {
        if (matches(sibling, { nodes: nodes })) {
            return sibling;
        }
        sibling = sibling.previousElementSibling;
    }
}

function matches(element, ast) {
    var nodes = ast.nodes;
    var matchesFn = Element.prototype.matches
        ? Element.prototype.matches
        : Element.prototype.msMatchesSelector;

    for (var i = nodes.length - 1; i >= 0; i--) {
        var node = nodes[i];
        if (node.type === 'id') {
            if (element.id !== node.value) {
                return false;
            }
        } else if (node.type === 'class') {
            if (!element.classList.contains(node.value)) {
                return false;
            }
        } else if (node.type === 'tag') {
            if (element.tagName.toLowerCase() !== node.value.toLowerCase()) {
                return false;
            }
        } else if (node.type === 'attribute') {
            if (node.value) {
                if (element.getAttribute(node.attribute) !== node.value) {
                    return false;
                }
            } else {
                if (!element.hasAttribute(node.attribute)) {
                    return false;
                }
            }
        } else if (node.type === 'pseudo') {
            if (!matchesFn.call(element, node.sourceCode)) {
                return false;
            }
        } else if (node.type === 'combinator') {
            if (node.value === ' ') {
                var precedingNodes = getLastNonCombinatorNodes(
                    nodes.slice(0, i)
                );

                var ancestor = getFirstMatchingAncestor(
                    element,
                    precedingNodes
                );

                if (!ancestor) {
                    return false;
                } else {
                    element = ancestor;
                    i -= precedingNodes.length;
                }
            } else if (node.value === '>') {
                var precedingNodes$1 = getLastNonCombinatorNodes(
                    nodes.slice(0, i)
                );

                var ancestor$1 = getParent(element);
                if (
                    !ancestor$1 ||
                    !matches(ancestor$1, { nodes: precedingNodes$1 })
                ) {
                    return false;
                } else {
                    element = ancestor$1;
                    i -= 1;
                }
            } else if (node.value === '+') {
                var precedingNodes$2 = getLastNonCombinatorNodes(
                    nodes.slice(0, i)
                );

                var sibling = element.previousElementSibling;
                if (
                    !sibling ||
                    !matches(sibling, { nodes: precedingNodes$2 })
                ) {
                    return false;
                } else {
                    i -= precedingNodes$2.length;
                }
            } else if (node.value === '~') {
                var precedingNodes$3 = getLastNonCombinatorNodes(
                    nodes.slice(0, i)
                );

                var sibling$1 = getFirstMatchingPreviousSibling(
                    element,
                    precedingNodes$3
                );

                if (!sibling$1) {
                    return false;
                } else {
                    i -= precedingNodes$3.length;
                }
            }
        }
    }
    return true;
}

function getMatchingElements(elementIterator, ast, multiple) {
    var results = multiple ? [] : null;
    var element;
    while ((element = elementIterator.next())) {
        for (var i = 0, list = ast.nodes; i < list.length; i += 1) {
            var node = list[i];

            if (matches(element, node)) {
                if (multiple) {
                    results.push(element);
                } else {
                    return element;
                }
            }
        }
    }
    return results;
}

function attachSourceToPseudos(ref, selector) {
    var nodes = ref.nodes;

    for (var i$1 = 0, list = nodes; i$1 < list.length; i$1 += 1) {
        var node = list[i$1];

        if (node.type === 'pseudo') {
            var splitSelector = selector.split('\n');
            var ref$1 = node.source;
            var start = ref$1.start;
            var end = ref$1.end;
            var sourceCode = '';
            for (var i = start.line - 1; i < end.line; i++) {
                var line = splitSelector[i];
                var stringStart = i === start.line - 1 ? start.column : 0;
                var stringEnd = i === end.line - 1 ? end.column : line.length;
                sourceCode += line.substring(stringStart, stringEnd);
            }
            node.sourceCode = ':' + sourceCode;
        }
        if (node.nodes) {
            attachSourceToPseudos(node, selector);
        }
    }
}

function query(selector, context, multiple) {
    var ast = postcssSelectorParser().astSync(selector);
    attachSourceToPseudos(ast, selector);

    var elementIterator = new ElementIterator(context);
    return getMatchingElements(elementIterator, ast, multiple);
}

function querySelector(selector, context) {
    if (context === void 0) context = document;

    return query(selector, context, false);
}

function querySelectorAll(selector, context) {
    if (context === void 0) context = document;

    return query(selector, context, true);
}

export { querySelector, querySelectorAll };
