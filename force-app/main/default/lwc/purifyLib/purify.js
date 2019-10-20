var freeze$1 =
    Object.freeze ||
    function(x) {
        return x;
    };

var html = freeze$1([
    'a',
    'abbr',
    'acronym',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'bdi',
    'bdo',
    'big',
    'blink',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'center',
    'cite',
    'code',
    'col',
    'colgroup',
    'content',
    'data',
    'datalist',
    'dd',
    'decorator',
    'del',
    'details',
    'dfn',
    'dir',
    'div',
    'dl',
    'dt',
    'element',
    'em',
    'fieldset',
    'figcaption',
    'figure',
    'font',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meter',
    'nav',
    'nobr',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'section',
    'select',
    'shadow',
    'small',
    'source',
    'spacer',
    'span',
    'strike',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'track',
    'tt',
    'u',
    'ul',
    'var',
    'video',
    'wbr'
]);

var svg = freeze$1([
    'svg',
    'a',
    'altglyph',
    'altglyphdef',
    'altglyphitem',
    'animatecolor',
    'animatemotion',
    'animatetransform',
    'audio',
    'canvas',
    'circle',
    'clippath',
    'defs',
    'desc',
    'ellipse',
    'filter',
    'font',
    'g',
    'glyph',
    'glyphref',
    'hkern',
    'image',
    'line',
    'lineargradient',
    'marker',
    'mask',
    'metadata',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialgradient',
    'rect',
    'stop',
    'style',
    'switch',
    'symbol',
    'text',
    'textpath',
    'title',
    'tref',
    'tspan',
    'video',
    'view',
    'vkern'
]);

var svgFilters = freeze$1([
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence'
]);

var mathMl = freeze$1([
    'math',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mglyph',
    'mi',
    'mlabeledtr',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mspace',
    'msqrt',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover'
]);

var text = freeze$1(['#text']);

var freeze$2 =
    Object.freeze ||
    function(x) {
        return x;
    };

var html$1 = freeze$2([
    'accept',
    'action',
    'align',
    'alt',
    'autocomplete',
    'background',
    'bgcolor',
    'border',
    'cellpadding',
    'cellspacing',
    'checked',
    'cite',
    'class',
    'clear',
    'color',
    'cols',
    'colspan',
    'coords',
    'crossorigin',
    'datetime',
    'default',
    'dir',
    'disabled',
    'download',
    'enctype',
    'face',
    'for',
    'headers',
    'height',
    'hidden',
    'high',
    'href',
    'hreflang',
    'id',
    'integrity',
    'ismap',
    'label',
    'lang',
    'list',
    'loop',
    'low',
    'max',
    'maxlength',
    'media',
    'method',
    'min',
    'multiple',
    'name',
    'noshade',
    'novalidate',
    'nowrap',
    'open',
    'optimum',
    'pattern',
    'placeholder',
    'poster',
    'preload',
    'pubdate',
    'radiogroup',
    'readonly',
    'rel',
    'required',
    'rev',
    'reversed',
    'role',
    'rows',
    'rowspan',
    'spellcheck',
    'scope',
    'selected',
    'shape',
    'size',
    'sizes',
    'span',
    'srclang',
    'start',
    'src',
    'srcset',
    'step',
    'style',
    'summary',
    'tabindex',
    'title',
    'type',
    'usemap',
    'valign',
    'value',
    'width',
    'xmlns'
]);

var svg$1 = freeze$2([
    'accent-height',
    'accumulate',
    'additive',
    'alignment-baseline',
    'ascent',
    'attributename',
    'attributetype',
    'azimuth',
    'basefrequency',
    'baseline-shift',
    'begin',
    'bias',
    'by',
    'class',
    'clip',
    'clip-path',
    'clip-rule',
    'color',
    'color-interpolation',
    'color-interpolation-filters',
    'color-profile',
    'color-rendering',
    'cx',
    'cy',
    'd',
    'dx',
    'dy',
    'diffuseconstant',
    'direction',
    'display',
    'divisor',
    'dur',
    'edgemode',
    'elevation',
    'end',
    'fill',
    'fill-opacity',
    'fill-rule',
    'filter',
    'flood-color',
    'flood-opacity',
    'font-family',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-variant',
    'font-weight',
    'fx',
    'fy',
    'g1',
    'g2',
    'glyph-name',
    'glyphref',
    'gradientunits',
    'gradienttransform',
    'height',
    'href',
    'id',
    'image-rendering',
    'in',
    'in2',
    'k',
    'k1',
    'k2',
    'k3',
    'k4',
    'kerning',
    'keypoints',
    'keysplines',
    'keytimes',
    'lang',
    'lengthadjust',
    'letter-spacing',
    'kernelmatrix',
    'kernelunitlength',
    'lighting-color',
    'local',
    'marker-end',
    'marker-mid',
    'marker-start',
    'markerheight',
    'markerunits',
    'markerwidth',
    'maskcontentunits',
    'maskunits',
    'max',
    'mask',
    'media',
    'method',
    'mode',
    'min',
    'name',
    'numoctaves',
    'offset',
    'operator',
    'opacity',
    'order',
    'orient',
    'orientation',
    'origin',
    'overflow',
    'paint-order',
    'path',
    'pathlength',
    'patterncontentunits',
    'patterntransform',
    'patternunits',
    'points',
    'preservealpha',
    'preserveaspectratio',
    'r',
    'rx',
    'ry',
    'radius',
    'refx',
    'refy',
    'repeatcount',
    'repeatdur',
    'restart',
    'result',
    'rotate',
    'scale',
    'seed',
    'shape-rendering',
    'specularconstant',
    'specularexponent',
    'spreadmethod',
    'stddeviation',
    'stitchtiles',
    'stop-color',
    'stop-opacity',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke',
    'stroke-width',
    'style',
    'surfacescale',
    'tabindex',
    'targetx',
    'targety',
    'transform',
    'text-anchor',
    'text-decoration',
    'text-rendering',
    'textlength',
    'type',
    'u1',
    'u2',
    'unicode',
    'values',
    'viewbox',
    'visibility',
    'version',
    'vert-adv-y',
    'vert-origin-x',
    'vert-origin-y',
    'width',
    'word-spacing',
    'wrap',
    'writing-mode',
    'xchannelselector',
    'ychannelselector',
    'x',
    'x1',
    'x2',
    'xmlns',
    'y',
    'y1',
    'y2',
    'z',
    'zoomandpan'
]);

var mathMl$1 = freeze$2([
    'accent',
    'accentunder',
    'align',
    'bevelled',
    'close',
    'columnsalign',
    'columnlines',
    'columnspan',
    'denomalign',
    'depth',
    'dir',
    'display',
    'displaystyle',
    'fence',
    'frame',
    'height',
    'href',
    'id',
    'largeop',
    'length',
    'linethickness',
    'lspace',
    'lquote',
    'mathbackground',
    'mathcolor',
    'mathsize',
    'mathvariant',
    'maxsize',
    'minsize',
    'movablelimits',
    'notation',
    'numalign',
    'open',
    'rowalign',
    'rowlines',
    'rowspacing',
    'rowspan',
    'rspace',
    'rquote',
    'scriptlevel',
    'scriptminsize',
    'scriptsizemultiplier',
    'selection',
    'separator',
    'separators',
    'stretchy',
    'subscriptshift',
    'supscriptshift',
    'symmetric',
    'voffset',
    'width',
    'xmlns'
]);

var xml = freeze$2([
    'xlink:href',
    'xml:id',
    'xlink:title',
    'xml:space',
    'xmlns:xlink'
]);

var hasOwnProperty = Object.hasOwnProperty;
var setPrototypeOf = Object.setPrototypeOf;

var _ref$1 = typeof Reflect !== 'undefined' && Reflect;
var apply$1 = _ref$1.apply;

if (!apply$1) {
    apply$1 = function apply(fun, thisValue, args) {
        return fun.apply(thisValue, args);
    };
}

function addToSet(set, array) {
    if (setPrototypeOf) {
        setPrototypeOf(set, null);
    }

    var l = array.length;
    while (l--) {
        var element = array[l];
        if (typeof element === 'string') {
            var lcElement = element.toLowerCase();
            if (lcElement !== element) {
                if (!Object.isFrozen(array)) {
                    array[l] = lcElement;
                }

                element = lcElement;
            }
        }

        set[element] = true;
    }

    return set;
}

function clone(object) {
    var newObject = {};

    var property = void 0;
    for (property in object) {
        if (apply$1(hasOwnProperty, object, [property])) {
            newObject[property] = object[property];
        }
    }

    return newObject;
}

var seal =
    Object.seal ||
    function(x) {
        return x;
    };

var MUSTACHE_EXPR = seal(/\{\{[\s\S]*|[\s\S]*\}\}/gm);
var ERB_EXPR = seal(/<%[\s\S]*|[\s\S]*%>/gm);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(
    /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
);

var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(
    /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g
);

var _typeof =
    typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
        ? function(obj) {
              return typeof obj;
          }
        : function(obj) {
              return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
          };

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}

var _ref = typeof Reflect !== 'undefined' && Reflect;
var apply = _ref.apply;

var arraySlice = Array.prototype.slice;
var freeze = Object.freeze;

var getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
};

if (!apply) {
    apply = function apply(fun, thisValue, args) {
        return fun.apply(thisValue, args);
    };
}

var _createTrustedTypesPolicy = function _createTrustedTypesPolicy(
    trustedTypes,
    document
) {
    if (
        (typeof trustedTypes === 'undefined'
            ? 'undefined'
            : _typeof(trustedTypes)) !== 'object' ||
        typeof trustedTypes.createPolicy !== 'function'
    ) {
        return null;
    }

    var suffix = null;
    var ATTR_NAME = 'data-tt-policy-suffix';
    if (
        document.currentScript &&
        document.currentScript.hasAttribute(ATTR_NAME)
    ) {
        suffix = document.currentScript.getAttribute(ATTR_NAME);
    }

    var policyName = 'dompurify' + (suffix ? '#' + suffix : '');

    try {
        return trustedTypes.createPolicy(policyName, {
            createHTML: function createHTML(html$$1) {
                return html$$1;
            }
        });
    } catch (error) {
        console.warn(
            'TrustedTypes policy ' + policyName + ' could not be created.'
        );

        return null;
    }
};

function createDOMPurify() {
    var window =
        arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : getGlobal();

    var DOMPurify = function DOMPurify(root) {
        return createDOMPurify(root);
    };

    DOMPurify.version = '1.0.10';

    DOMPurify.removed = [];

    if (!window || !window.document || window.document.nodeType !== 9) {
        DOMPurify.isSupported = false;

        return DOMPurify;
    }

    var originalDocument = window.document;
    var useDOMParser = false;
    var removeTitle = false;

    var document = window.document;
    var DocumentFragment = window.DocumentFragment,
        HTMLTemplateElement = window.HTMLTemplateElement,
        Node = window.Node,
        NodeFilter = window.NodeFilter,
        _window$NamedNodeMap = window.NamedNodeMap,
        NamedNodeMap =
            _window$NamedNodeMap === undefined
                ? window.NamedNodeMap || window.MozNamedAttrMap
                : _window$NamedNodeMap,
        Text = window.Text,
        Comment = window.Comment,
        DOMParser = window.DOMParser,
        TrustedTypes = window.TrustedTypes;

    if (typeof HTMLTemplateElement === 'function') {
        var template = document.createElement('template');
        if (template.content && template.content.ownerDocument) {
            document = template.content.ownerDocument;
        }
    }

    var trustedTypesPolicy = _createTrustedTypesPolicy(
        TrustedTypes,
        originalDocument
    );

    var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML('') : '';

    var _document = document,
        implementation = _document.implementation,
        createNodeIterator = _document.createNodeIterator,
        getElementsByTagName = _document.getElementsByTagName,
        createDocumentFragment = _document.createDocumentFragment;
    var importNode = originalDocument.importNode;

    var hooks = {};

    DOMPurify.isSupported =
        implementation &&
        typeof implementation.createHTMLDocument !== 'undefined' &&
        document.documentMode !== 9;

    var MUSTACHE_EXPR$$1 = MUSTACHE_EXPR,
        ERB_EXPR$$1 = ERB_EXPR,
        DATA_ATTR$$1 = DATA_ATTR,
        ARIA_ATTR$$1 = ARIA_ATTR,
        IS_SCRIPT_OR_DATA$$1 = IS_SCRIPT_OR_DATA,
        ATTR_WHITESPACE$$1 = ATTR_WHITESPACE;
    var IS_ALLOWED_URI$$1 = IS_ALLOWED_URI;

    var ALLOWED_TAGS = null;
    var DEFAULT_ALLOWED_TAGS = addToSet(
        {},
        [].concat(
            _toConsumableArray(html),
            _toConsumableArray(svg),
            _toConsumableArray(svgFilters),
            _toConsumableArray(mathMl),
            _toConsumableArray(text)
        )
    );

    var ALLOWED_ATTR = null;
    var DEFAULT_ALLOWED_ATTR = addToSet(
        {},
        [].concat(
            _toConsumableArray(html$1),
            _toConsumableArray(svg$1),
            _toConsumableArray(mathMl$1),
            _toConsumableArray(xml)
        )
    );

    var FORBID_TAGS = null;

    var FORBID_ATTR = null;

    var ALLOW_ARIA_ATTR = true;

    var ALLOW_DATA_ATTR = true;

    var ALLOW_UNKNOWN_PROTOCOLS = false;

    var SAFE_FOR_JQUERY = false;

    var SAFE_FOR_TEMPLATES = false;

    var WHOLE_DOCUMENT = false;

    var SET_CONFIG = false;

    var FORCE_BODY = false;

    var RETURN_DOM = false;

    var RETURN_DOM_FRAGMENT = false;

    var RETURN_DOM_IMPORT = false;

    var SANITIZE_DOM = true;

    var KEEP_CONTENT = true;

    var IN_PLACE = false;

    var USE_PROFILES = {};

    var FORBID_CONTENTS = addToSet({}, [
        'audio',
        'head',
        'math',
        'script',
        'style',
        'template',
        'svg',
        'video'
    ]);

    var DATA_URI_TAGS = addToSet({}, [
        'audio',
        'video',
        'img',
        'source',
        'image'
    ]);

    var URI_SAFE_ATTRIBUTES = addToSet({}, [
        'alt',
        'class',
        'for',
        'id',
        'label',
        'name',
        'pattern',
        'placeholder',
        'summary',
        'title',
        'value',
        'style',
        'xmlns'
    ]);

    var CONFIG = null;

    var formElement = document.createElement('form');

    var _parseConfig = function _parseConfig(cfg) {
        if (CONFIG && CONFIG === cfg) {
            return;
        }

        if (
            !cfg ||
            (typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) !==
                'object'
        ) {
            cfg = {};
        }

        ALLOWED_TAGS =
            'ALLOWED_TAGS' in cfg
                ? addToSet({}, cfg.ALLOWED_TAGS)
                : DEFAULT_ALLOWED_TAGS;
        ALLOWED_ATTR =
            'ALLOWED_ATTR' in cfg
                ? addToSet({}, cfg.ALLOWED_ATTR)
                : DEFAULT_ALLOWED_ATTR;
        FORBID_TAGS = 'FORBID_TAGS' in cfg ? addToSet({}, cfg.FORBID_TAGS) : {};
        FORBID_ATTR = 'FORBID_ATTR' in cfg ? addToSet({}, cfg.FORBID_ATTR) : {};
        USE_PROFILES = 'USE_PROFILES' in cfg ? cfg.USE_PROFILES : false;
        ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
        ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
        ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
        SAFE_FOR_JQUERY = cfg.SAFE_FOR_JQUERY || false;
        SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
        WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
        RETURN_DOM = cfg.RETURN_DOM || false;
        RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
        RETURN_DOM_IMPORT = cfg.RETURN_DOM_IMPORT || false;
        FORCE_BODY = cfg.FORCE_BODY || false;
        SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
        KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
        IN_PLACE = cfg.IN_PLACE || false;

        IS_ALLOWED_URI$$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$$1;

        if (SAFE_FOR_TEMPLATES) {
            ALLOW_DATA_ATTR = false;
        }

        if (RETURN_DOM_FRAGMENT) {
            RETURN_DOM = true;
        }

        if (USE_PROFILES) {
            ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(text)));
            ALLOWED_ATTR = [];
            if (USE_PROFILES.html === true) {
                addToSet(ALLOWED_TAGS, html);
                addToSet(ALLOWED_ATTR, html$1);
            }

            if (USE_PROFILES.svg === true) {
                addToSet(ALLOWED_TAGS, svg);
                addToSet(ALLOWED_ATTR, svg$1);
                addToSet(ALLOWED_ATTR, xml);
            }

            if (USE_PROFILES.svgFilters === true) {
                addToSet(ALLOWED_TAGS, svgFilters);
                addToSet(ALLOWED_ATTR, svg$1);
                addToSet(ALLOWED_ATTR, xml);
            }

            if (USE_PROFILES.mathMl === true) {
                addToSet(ALLOWED_TAGS, mathMl);
                addToSet(ALLOWED_ATTR, mathMl$1);
                addToSet(ALLOWED_ATTR, xml);
            }
        }

        if (cfg.ADD_TAGS) {
            if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
                ALLOWED_TAGS = clone(ALLOWED_TAGS);
            }

            addToSet(ALLOWED_TAGS, cfg.ADD_TAGS);
        }

        if (cfg.ADD_ATTR) {
            if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
                ALLOWED_ATTR = clone(ALLOWED_ATTR);
            }

            addToSet(ALLOWED_ATTR, cfg.ADD_ATTR);
        }

        if (cfg.ADD_URI_SAFE_ATTR) {
            addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR);
        }

        if (KEEP_CONTENT) {
            ALLOWED_TAGS['#text'] = true;
        }

        if (WHOLE_DOCUMENT) {
            addToSet(ALLOWED_TAGS, ['html', 'head', 'body']);
        }

        if (ALLOWED_TAGS.table) {
            addToSet(ALLOWED_TAGS, ['tbody']);
        }

        if (freeze) {
            freeze(cfg);
        }

        CONFIG = cfg;
    };

    var _forceRemove = function _forceRemove(node) {
        DOMPurify.removed.push({ element: node });
        try {
            node.parentNode.removeChild(node);
        } catch (error) {
            node.outerHTML = emptyHTML;
        }
    };

    var _removeAttribute = function _removeAttribute(name, node) {
        try {
            DOMPurify.removed.push({
                attribute: node.getAttributeNode(name),
                from: node
            });
        } catch (error) {
            DOMPurify.removed.push({
                attribute: null,
                from: node
            });
        }

        node.removeAttribute(name);
    };

    var _initDocument = function _initDocument(dirty) {
        var doc = void 0;
        var leadingWhitespace = void 0;

        if (FORCE_BODY) {
            dirty = '<remove></remove>' + dirty;
        } else {
            var matches = dirty.match(/^[\s]+/);
            leadingWhitespace = matches && matches[0];
            if (leadingWhitespace) {
                dirty = dirty.slice(leadingWhitespace.length);
            }
        }

        if (useDOMParser) {
            try {
                doc = new DOMParser().parseFromString(dirty, 'text/html');
            } catch (error) {}
        }

        if (removeTitle) {
            addToSet(FORBID_TAGS, ['title']);
        }

        if (!doc || !doc.documentElement) {
            doc = implementation.createHTMLDocument('');
            var _doc = doc,
                body = _doc.body;

            body.parentNode.removeChild(body.parentNode.firstElementChild);
            body.outerHTML = trustedTypesPolicy
                ? trustedTypesPolicy.createHTML(dirty)
                : dirty;
        }

        if (leadingWhitespace) {
            doc.body.insertBefore(
                document.createTextNode(leadingWhitespace),
                doc.body.childNodes[0] || null
            );
        }

        return getElementsByTagName.call(
            doc,
            WHOLE_DOCUMENT ? 'html' : 'body'
        )[0];
    };

    if (DOMPurify.isSupported) {
        (function() {
            try {
                var doc = _initDocument(
                    '<svg><p><style><img src="</style><img src=x onerror=1//">'
                );

                if (doc.querySelector('svg img')) {
                    useDOMParser = true;
                }
            } catch (error) {}
        })();

        (function() {
            try {
                var doc = _initDocument('<x/><title>&lt;/title&gt;&lt;img&gt;');
                if (doc.querySelector('title').innerHTML.match(/<\/title/)) {
                    removeTitle = true;
                }
            } catch (error) {}
        })();
    }

    var _createIterator = function _createIterator(root) {
        return createNodeIterator.call(
            root.ownerDocument || root,
            root,
            NodeFilter.SHOW_ELEMENT |
                NodeFilter.SHOW_COMMENT |
                NodeFilter.SHOW_TEXT,
            function() {
                return NodeFilter.FILTER_ACCEPT;
            },
            false
        );
    };

    var _isClobbered = function _isClobbered(elm) {
        if (elm instanceof Text || elm instanceof Comment) {
            return false;
        }

        if (
            typeof elm.nodeName !== 'string' ||
            typeof elm.textContent !== 'string' ||
            typeof elm.removeChild !== 'function' ||
            !(elm.attributes instanceof NamedNodeMap) ||
            typeof elm.removeAttribute !== 'function' ||
            typeof elm.setAttribute !== 'function'
        ) {
            return true;
        }

        return false;
    };

    var _isNode = function _isNode(obj) {
        return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) ===
            'object'
            ? obj instanceof Node
            : obj &&
                  (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) ===
                      'object' &&
                  typeof obj.nodeType === 'number' &&
                  typeof obj.nodeName === 'string';
    };

    var _executeHook = function _executeHook(entryPoint, currentNode, data) {
        if (!hooks[entryPoint]) {
            return;
        }

        hooks[entryPoint].forEach(function(hook) {
            hook.call(DOMPurify, currentNode, data, CONFIG);
        });
    };

    var _sanitizeElements = function _sanitizeElements(currentNode) {
        var content = void 0;

        _executeHook('beforeSanitizeElements', currentNode, null);

        if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
            return true;
        }

        var tagName = currentNode.nodeName.toLowerCase();

        _executeHook('uponSanitizeElement', currentNode, {
            tagName: tagName,
            allowedTags: ALLOWED_TAGS
        });

        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
            if (
                KEEP_CONTENT &&
                !FORBID_CONTENTS[tagName] &&
                typeof currentNode.insertAdjacentHTML === 'function'
            ) {
                try {
                    var htmlToInsert = currentNode.innerHTML;
                    currentNode.insertAdjacentHTML(
                        'AfterEnd',
                        trustedTypesPolicy
                            ? trustedTypesPolicy.createHTML(htmlToInsert)
                            : htmlToInsert
                    );
                } catch (error) {}
            }

            _forceRemove(currentNode);
            return true;
        }

        if (
            tagName === 'noscript' &&
            currentNode.innerHTML.match(/<\/noscript/i)
        ) {
            _forceRemove(currentNode);
            return true;
        }

        if (
            tagName === 'noembed' &&
            currentNode.innerHTML.match(/<\/noembed/i)
        ) {
            _forceRemove(currentNode);
            return true;
        }

        if (
            SAFE_FOR_JQUERY &&
            !currentNode.firstElementChild &&
            (!currentNode.content || !currentNode.content.firstElementChild) &&
            /</g.test(currentNode.textContent)
        ) {
            DOMPurify.removed.push({ element: currentNode.cloneNode() });
            if (currentNode.innerHTML) {
                currentNode.innerHTML = currentNode.innerHTML.replace(
                    /</g,
                    '&lt;'
                );
            } else {
                currentNode.innerHTML = currentNode.textContent.replace(
                    /</g,
                    '&lt;'
                );
            }
        }

        if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
            content = currentNode.textContent;
            content = content.replace(MUSTACHE_EXPR$$1, ' ');
            content = content.replace(ERB_EXPR$$1, ' ');
            if (currentNode.textContent !== content) {
                DOMPurify.removed.push({ element: currentNode.cloneNode() });
                currentNode.textContent = content;
            }
        }

        _executeHook('afterSanitizeElements', currentNode, null);

        return false;
    };

    var _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
        if (
            SANITIZE_DOM &&
            (lcName === 'id' || lcName === 'name') &&
            (value in document || value in formElement)
        ) {
            return false;
        }

        if (ALLOW_DATA_ATTR && DATA_ATTR$$1.test(lcName)) {
        } else if (ALLOW_ARIA_ATTR && ARIA_ATTR$$1.test(lcName)) {
        } else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
            return false;
        } else if (URI_SAFE_ATTRIBUTES[lcName]) {
        } else if (
            IS_ALLOWED_URI$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))
        ) {
        } else if (
            (lcName === 'src' || lcName === 'xlink:href') &&
            lcTag !== 'script' &&
            value.indexOf('data:') === 0 &&
            DATA_URI_TAGS[lcTag]
        ) {
        } else if (
            ALLOW_UNKNOWN_PROTOCOLS &&
            !IS_SCRIPT_OR_DATA$$1.test(value.replace(ATTR_WHITESPACE$$1, ''))
        ) {
        } else if (!value) {
        } else {
            return false;
        }

        return true;
    };

    var _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
        var attr = void 0;
        var value = void 0;
        var lcName = void 0;
        var idAttr = void 0;
        var l = void 0;

        _executeHook('beforeSanitizeAttributes', currentNode, null);

        var attributes = currentNode.attributes;

        if (!attributes) {
            return;
        }

        var hookEvent = {
            attrName: '',
            attrValue: '',
            keepAttr: true,
            allowedAttributes: ALLOWED_ATTR
        };

        l = attributes.length;

        while (l--) {
            attr = attributes[l];
            var _attr = attr,
                name = _attr.name,
                namespaceURI = _attr.namespaceURI;

            value = attr.value.trim();
            lcName = name.toLowerCase();

            hookEvent.attrName = lcName;
            hookEvent.attrValue = value;
            hookEvent.keepAttr = true;
            _executeHook('uponSanitizeAttribute', currentNode, hookEvent);
            value = hookEvent.attrValue;

            if (
                lcName === 'name' &&
                currentNode.nodeName === 'IMG' &&
                attributes.id
            ) {
                idAttr = attributes.id;
                attributes = apply(arraySlice, attributes, []);
                _removeAttribute('id', currentNode);
                _removeAttribute(name, currentNode);
                if (attributes.indexOf(idAttr) > l) {
                    currentNode.setAttribute('id', idAttr.value);
                }
            } else if (
                currentNode.nodeName === 'INPUT' &&
                lcName === 'type' &&
                value === 'file' &&
                (ALLOWED_ATTR[lcName] || !FORBID_ATTR[lcName])
            ) {
                continue;
            } else {
                if (name === 'id') {
                    currentNode.setAttribute(name, '');
                }

                _removeAttribute(name, currentNode);
            }

            if (!hookEvent.keepAttr) {
                continue;
            }

            if (SAFE_FOR_TEMPLATES) {
                value = value.replace(MUSTACHE_EXPR$$1, ' ');
                value = value.replace(ERB_EXPR$$1, ' ');
            }

            var lcTag = currentNode.nodeName.toLowerCase();
            if (!_isValidAttribute(lcTag, lcName, value)) {
                continue;
            }

            try {
                if (namespaceURI) {
                    currentNode.setAttributeNS(namespaceURI, name, value);
                } else {
                    currentNode.setAttribute(name, value);
                }

                DOMPurify.removed.pop();
            } catch (error) {}
        }

        _executeHook('afterSanitizeAttributes', currentNode, null);
    };

    var _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
        var shadowNode = void 0;
        var shadowIterator = _createIterator(fragment);

        _executeHook('beforeSanitizeShadowDOM', fragment, null);

        while ((shadowNode = shadowIterator.nextNode())) {
            _executeHook('uponSanitizeShadowNode', shadowNode, null);

            if (_sanitizeElements(shadowNode)) {
                continue;
            }

            if (shadowNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(shadowNode.content);
            }

            _sanitizeAttributes(shadowNode);
        }

        _executeHook('afterSanitizeShadowDOM', fragment, null);
    };

    DOMPurify.sanitize = function(dirty, cfg) {
        var body = void 0;
        var importedNode = void 0;
        var currentNode = void 0;
        var oldNode = void 0;
        var returnNode = void 0;

        if (!dirty) {
            dirty = '<!-->';
        }

        if (typeof dirty !== 'string' && !_isNode(dirty)) {
            if (typeof dirty.toString !== 'function') {
                throw new TypeError('toString is not a function');
            } else {
                dirty = dirty.toString();
                if (typeof dirty !== 'string') {
                    throw new TypeError('dirty is not a string, aborting');
                }
            }
        }

        if (!DOMPurify.isSupported) {
            if (
                _typeof(window.toStaticHTML) === 'object' ||
                typeof window.toStaticHTML === 'function'
            ) {
                if (typeof dirty === 'string') {
                    return window.toStaticHTML(dirty);
                }

                if (_isNode(dirty)) {
                    return window.toStaticHTML(dirty.outerHTML);
                }
            }

            return dirty;
        }

        if (!SET_CONFIG) {
            _parseConfig(cfg);
        }

        DOMPurify.removed = [];

        if (IN_PLACE) {
        } else if (dirty instanceof Node) {
            body = _initDocument('<!-->');
            importedNode = body.ownerDocument.importNode(dirty, true);
            if (
                importedNode.nodeType === 1 &&
                importedNode.nodeName === 'BODY'
            ) {
                body = importedNode;
            } else {
                body.appendChild(importedNode);
            }
        } else {
            if (
                !RETURN_DOM &&
                !SAFE_FOR_TEMPLATES &&
                !WHOLE_DOCUMENT &&
                dirty.indexOf('<') === -1
            ) {
                return trustedTypesPolicy
                    ? trustedTypesPolicy.createHTML(dirty)
                    : dirty;
            }

            body = _initDocument(dirty);

            if (!body) {
                return RETURN_DOM ? null : emptyHTML;
            }
        }

        if (body && FORCE_BODY) {
            _forceRemove(body.firstChild);
        }

        var nodeIterator = _createIterator(IN_PLACE ? dirty : body);

        while ((currentNode = nodeIterator.nextNode())) {
            if (currentNode.nodeType === 3 && currentNode === oldNode) {
                continue;
            }

            if (_sanitizeElements(currentNode)) {
                continue;
            }

            if (currentNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(currentNode.content);
            }

            _sanitizeAttributes(currentNode);

            oldNode = currentNode;
        }

        oldNode = null;

        if (IN_PLACE) {
            return dirty;
        }

        if (RETURN_DOM) {
            if (RETURN_DOM_FRAGMENT) {
                returnNode = createDocumentFragment.call(body.ownerDocument);

                while (body.firstChild) {
                    returnNode.appendChild(body.firstChild);
                }
            } else {
                returnNode = body;
            }

            if (RETURN_DOM_IMPORT) {
                returnNode = importNode.call(
                    originalDocument,
                    returnNode,
                    true
                );
            }

            return returnNode;
        }

        var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;

        if (SAFE_FOR_TEMPLATES) {
            serializedHTML = serializedHTML.replace(MUSTACHE_EXPR$$1, ' ');
            serializedHTML = serializedHTML.replace(ERB_EXPR$$1, ' ');
        }

        return trustedTypesPolicy
            ? trustedTypesPolicy.createHTML(serializedHTML)
            : serializedHTML;
    };

    DOMPurify.setConfig = function(cfg) {
        _parseConfig(cfg);
        SET_CONFIG = true;
    };

    DOMPurify.clearConfig = function() {
        CONFIG = null;
        SET_CONFIG = false;
    };

    DOMPurify.isValidAttribute = function(tag, attr, value) {
        if (!CONFIG) {
            _parseConfig({});
        }

        var lcTag = tag.toLowerCase();
        var lcName = attr.toLowerCase();
        return _isValidAttribute(lcTag, lcName, value);
    };

    DOMPurify.addHook = function(entryPoint, hookFunction) {
        if (typeof hookFunction !== 'function') {
            return;
        }

        hooks[entryPoint] = hooks[entryPoint] || [];
        hooks[entryPoint].push(hookFunction);
    };

    DOMPurify.removeHook = function(entryPoint) {
        if (hooks[entryPoint]) {
            hooks[entryPoint].pop();
        }
    };

    DOMPurify.removeHooks = function(entryPoint) {
        if (hooks[entryPoint]) {
            hooks[entryPoint] = [];
        }
    };

    DOMPurify.removeAllHooks = function() {
        hooks = {};
    };

    return DOMPurify;
}

var purify = createDOMPurify();

export default purify;
