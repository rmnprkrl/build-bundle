(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('@polkadot/util'), require('@polkadot/util-crypto')) :
	typeof define === 'function' && define.amd ? define(['exports', 'react', '@polkadot/util', '@polkadot/util-crypto'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.polkadotReactQr = {}, global.React, global.polkadotUtil, global.polkadotUtilCrypto));
})(this, (function (exports, r, util, utilCrypto) { 'use strict';

	const global = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : window;

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	const r__default = /*#__PURE__*/_interopDefaultLegacy(r);

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	var reactIs$3 = {exports: {}};

	var reactIs_production_min$2 = {};

	/**
	 * @license React
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var hasRequiredReactIs_production_min$2;
	function requireReactIs_production_min$2 () {
		if (hasRequiredReactIs_production_min$2) return reactIs_production_min$2;
		hasRequiredReactIs_production_min$2 = 1;
	var b=Symbol.for("react.element"),c=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),e=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),h=Symbol.for("react.context"),k=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),n=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),t=Symbol.for("react.offscreen"),u;u=Symbol.for("react.module.reference");
		function v(a){if("object"===typeof a&&null!==a){var r=a.$$typeof;switch(r){case b:switch(a=a.type,a){case d:case f:case e:case m:case n:return a;default:switch(a=a&&a.$$typeof,a){case k:case h:case l:case q:case p:case g:return a;default:return r}}case c:return r}}}reactIs_production_min$2.ContextConsumer=h;reactIs_production_min$2.ContextProvider=g;reactIs_production_min$2.Element=b;reactIs_production_min$2.ForwardRef=l;reactIs_production_min$2.Fragment=d;reactIs_production_min$2.Lazy=q;reactIs_production_min$2.Memo=p;reactIs_production_min$2.Portal=c;reactIs_production_min$2.Profiler=f;reactIs_production_min$2.StrictMode=e;reactIs_production_min$2.Suspense=m;
		reactIs_production_min$2.SuspenseList=n;reactIs_production_min$2.isAsyncMode=function(){return !1};reactIs_production_min$2.isConcurrentMode=function(){return !1};reactIs_production_min$2.isContextConsumer=function(a){return v(a)===h};reactIs_production_min$2.isContextProvider=function(a){return v(a)===g};reactIs_production_min$2.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===b};reactIs_production_min$2.isForwardRef=function(a){return v(a)===l};reactIs_production_min$2.isFragment=function(a){return v(a)===d};reactIs_production_min$2.isLazy=function(a){return v(a)===q};reactIs_production_min$2.isMemo=function(a){return v(a)===p};
		reactIs_production_min$2.isPortal=function(a){return v(a)===c};reactIs_production_min$2.isProfiler=function(a){return v(a)===f};reactIs_production_min$2.isStrictMode=function(a){return v(a)===e};reactIs_production_min$2.isSuspense=function(a){return v(a)===m};reactIs_production_min$2.isSuspenseList=function(a){return v(a)===n};
		reactIs_production_min$2.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===d||a===f||a===e||a===m||a===n||a===t||"object"===typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===g||a.$$typeof===h||a.$$typeof===l||a.$$typeof===u||void 0!==a.getModuleId)?!0:!1};reactIs_production_min$2.typeOf=v;
		return reactIs_production_min$2;
	}

	var reactIs_development$2 = {};

	/**
	 * @license React
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var hasRequiredReactIs_development$2;
	function requireReactIs_development$2 () {
		if (hasRequiredReactIs_development$2) return reactIs_development$2;
		hasRequiredReactIs_development$2 = 1;
		if (process.env.NODE_ENV !== "production") {
		  (function() {
		var REACT_ELEMENT_TYPE = Symbol.for('react.element');
		var REACT_PORTAL_TYPE = Symbol.for('react.portal');
		var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
		var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
		var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
		var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
		var REACT_CONTEXT_TYPE = Symbol.for('react.context');
		var REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
		var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
		var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
		var REACT_MEMO_TYPE = Symbol.for('react.memo');
		var REACT_LAZY_TYPE = Symbol.for('react.lazy');
		var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
		var enableScopeAPI = false;
		var enableCacheElement = false;
		var enableTransitionTracing = false;
		var enableLegacyHidden = false;
		var enableDebugTracing = false;
		var REACT_MODULE_REFERENCE;
		{
		  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		}
		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  }
		  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
		    return true;
		  }
		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
		    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		      return true;
		    }
		  }
		  return false;
		}
		function typeOf(object) {
		  if (typeof object === 'object' && object !== null) {
		    var $$typeof = object.$$typeof;
		    switch ($$typeof) {
		      case REACT_ELEMENT_TYPE:
		        var type = object.type;
		        switch (type) {
		          case REACT_FRAGMENT_TYPE:
		          case REACT_PROFILER_TYPE:
		          case REACT_STRICT_MODE_TYPE:
		          case REACT_SUSPENSE_TYPE:
		          case REACT_SUSPENSE_LIST_TYPE:
		            return type;
		          default:
		            var $$typeofType = type && type.$$typeof;
		            switch ($$typeofType) {
		              case REACT_SERVER_CONTEXT_TYPE:
		              case REACT_CONTEXT_TYPE:
		              case REACT_FORWARD_REF_TYPE:
		              case REACT_LAZY_TYPE:
		              case REACT_MEMO_TYPE:
		              case REACT_PROVIDER_TYPE:
		                return $$typeofType;
		              default:
		                return $$typeof;
		            }
		        }
		      case REACT_PORTAL_TYPE:
		        return $$typeof;
		    }
		  }
		  return undefined;
		}
		var ContextConsumer = REACT_CONTEXT_TYPE;
		var ContextProvider = REACT_PROVIDER_TYPE;
		var Element = REACT_ELEMENT_TYPE;
		var ForwardRef = REACT_FORWARD_REF_TYPE;
		var Fragment = REACT_FRAGMENT_TYPE;
		var Lazy = REACT_LAZY_TYPE;
		var Memo = REACT_MEMO_TYPE;
		var Portal = REACT_PORTAL_TYPE;
		var Profiler = REACT_PROFILER_TYPE;
		var StrictMode = REACT_STRICT_MODE_TYPE;
		var Suspense = REACT_SUSPENSE_TYPE;
		var SuspenseList = REACT_SUSPENSE_LIST_TYPE;
		var hasWarnedAboutDeprecatedIsAsyncMode = false;
		var hasWarnedAboutDeprecatedIsConcurrentMode = false;
		function isAsyncMode(object) {
		  {
		    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
		      hasWarnedAboutDeprecatedIsAsyncMode = true;
		      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
		    }
		  }
		  return false;
		}
		function isConcurrentMode(object) {
		  {
		    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
		      hasWarnedAboutDeprecatedIsConcurrentMode = true;
		      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
		    }
		  }
		  return false;
		}
		function isContextConsumer(object) {
		  return typeOf(object) === REACT_CONTEXT_TYPE;
		}
		function isContextProvider(object) {
		  return typeOf(object) === REACT_PROVIDER_TYPE;
		}
		function isElement(object) {
		  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		function isForwardRef(object) {
		  return typeOf(object) === REACT_FORWARD_REF_TYPE;
		}
		function isFragment(object) {
		  return typeOf(object) === REACT_FRAGMENT_TYPE;
		}
		function isLazy(object) {
		  return typeOf(object) === REACT_LAZY_TYPE;
		}
		function isMemo(object) {
		  return typeOf(object) === REACT_MEMO_TYPE;
		}
		function isPortal(object) {
		  return typeOf(object) === REACT_PORTAL_TYPE;
		}
		function isProfiler(object) {
		  return typeOf(object) === REACT_PROFILER_TYPE;
		}
		function isStrictMode(object) {
		  return typeOf(object) === REACT_STRICT_MODE_TYPE;
		}
		function isSuspense(object) {
		  return typeOf(object) === REACT_SUSPENSE_TYPE;
		}
		function isSuspenseList(object) {
		  return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;
		}
		reactIs_development$2.ContextConsumer = ContextConsumer;
		reactIs_development$2.ContextProvider = ContextProvider;
		reactIs_development$2.Element = Element;
		reactIs_development$2.ForwardRef = ForwardRef;
		reactIs_development$2.Fragment = Fragment;
		reactIs_development$2.Lazy = Lazy;
		reactIs_development$2.Memo = Memo;
		reactIs_development$2.Portal = Portal;
		reactIs_development$2.Profiler = Profiler;
		reactIs_development$2.StrictMode = StrictMode;
		reactIs_development$2.Suspense = Suspense;
		reactIs_development$2.SuspenseList = SuspenseList;
		reactIs_development$2.isAsyncMode = isAsyncMode;
		reactIs_development$2.isConcurrentMode = isConcurrentMode;
		reactIs_development$2.isContextConsumer = isContextConsumer;
		reactIs_development$2.isContextProvider = isContextProvider;
		reactIs_development$2.isElement = isElement;
		reactIs_development$2.isForwardRef = isForwardRef;
		reactIs_development$2.isFragment = isFragment;
		reactIs_development$2.isLazy = isLazy;
		reactIs_development$2.isMemo = isMemo;
		reactIs_development$2.isPortal = isPortal;
		reactIs_development$2.isProfiler = isProfiler;
		reactIs_development$2.isStrictMode = isStrictMode;
		reactIs_development$2.isSuspense = isSuspense;
		reactIs_development$2.isSuspenseList = isSuspenseList;
		reactIs_development$2.isValidElementType = isValidElementType;
		reactIs_development$2.typeOf = typeOf;
		  })();
		}
		return reactIs_development$2;
	}

	(function (module) {
		if (process.env.NODE_ENV === 'production') {
		  module.exports = requireReactIs_production_min$2();
		} else {
		  module.exports = requireReactIs_development$2();
		}
	} (reactIs$3));
	getDefaultExportFromCjs(reactIs$3.exports);

	function stylis_min (W) {
	  function M(d, c, e, h, a) {
	    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
	      g = e.charCodeAt(l);
	      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);
	      if (0 === b + n + v + m) {
	        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
	          switch (g) {
	            case 32:
	            case 9:
	            case 59:
	            case 13:
	            case 10:
	              break;
	            default:
	              f += e.charAt(l);
	          }
	          g = 59;
	        }
	        switch (g) {
	          case 123:
	            f = f.trim();
	            q = f.charCodeAt(0);
	            k = 1;
	            for (t = ++l; l < B;) {
	              switch (g = e.charCodeAt(l)) {
	                case 123:
	                  k++;
	                  break;
	                case 125:
	                  k--;
	                  break;
	                case 47:
	                  switch (g = e.charCodeAt(l + 1)) {
	                    case 42:
	                    case 47:
	                      a: {
	                        for (u = l + 1; u < J; ++u) {
	                          switch (e.charCodeAt(u)) {
	                            case 47:
	                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
	                                l = u + 1;
	                                break a;
	                              }
	                              break;
	                            case 10:
	                              if (47 === g) {
	                                l = u + 1;
	                                break a;
	                              }
	                          }
	                        }
	                        l = u;
	                      }
	                  }
	                  break;
	                case 91:
	                  g++;
	                case 40:
	                  g++;
	                case 34:
	                case 39:
	                  for (; l++ < J && e.charCodeAt(l) !== g;) {
	                  }
	              }
	              if (0 === k) break;
	              l++;
	            }
	            k = e.substring(t, l);
	            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));
	            switch (q) {
	              case 64:
	                0 < r && (f = f.replace(N, ''));
	                g = f.charCodeAt(1);
	                switch (g) {
	                  case 100:
	                  case 109:
	                  case 115:
	                  case 45:
	                    r = c;
	                    break;
	                  default:
	                    r = O;
	                }
	                k = M(c, r, k, g, a + 1);
	                t = k.length;
	                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
	                if (0 < t) switch (g) {
	                  case 115:
	                    f = f.replace(da, ea);
	                  case 100:
	                  case 109:
	                  case 45:
	                    k = f + '{' + k + '}';
	                    break;
	                  case 107:
	                    f = f.replace(fa, '$1 $2');
	                    k = f + '{' + k + '}';
	                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
	                    break;
	                  default:
	                    k = f + k, 112 === h && (k = (p += k, ''));
	                } else k = '';
	                break;
	              default:
	                k = M(c, X(c, f, I), k, h, a + 1);
	            }
	            F += k;
	            k = I = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	            break;
	          case 125:
	          case 59:
	            f = (0 < r ? f.replace(N, '') : f).trim();
	            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
	              case 0:
	                break;
	              case 64:
	                if (105 === g || 99 === g) {
	                  G += f + e.charAt(l);
	                  break;
	                }
	              default:
	                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
	            }
	            I = r = u = q = 0;
	            f = '';
	            g = e.charCodeAt(++l);
	        }
	      }
	      switch (g) {
	        case 13:
	        case 10:
	          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
	          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
	          z = 1;
	          D++;
	          break;
	        case 59:
	        case 125:
	          if (0 === b + n + v + m) {
	            z++;
	            break;
	          }
	        default:
	          z++;
	          y = e.charAt(l);
	          switch (g) {
	            case 9:
	            case 32:
	              if (0 === n + m + b) switch (x) {
	                case 44:
	                case 58:
	                case 9:
	                case 32:
	                  y = '';
	                  break;
	                default:
	                  32 !== g && (y = ' ');
	              }
	              break;
	            case 0:
	              y = '\\0';
	              break;
	            case 12:
	              y = '\\f';
	              break;
	            case 11:
	              y = '\\v';
	              break;
	            case 38:
	              0 === n + b + m && (r = I = 1, y = '\f' + y);
	              break;
	            case 108:
	              if (0 === n + b + m + E && 0 < u) switch (l - u) {
	                case 2:
	                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);
	                case 8:
	                  111 === K && (E = K);
	              }
	              break;
	            case 58:
	              0 === n + b + m && (u = l);
	              break;
	            case 44:
	              0 === b + v + n + m && (r = 1, y += '\r');
	              break;
	            case 34:
	            case 39:
	              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
	              break;
	            case 91:
	              0 === n + b + v && m++;
	              break;
	            case 93:
	              0 === n + b + v && m--;
	              break;
	            case 41:
	              0 === n + b + m && v--;
	              break;
	            case 40:
	              if (0 === n + b + m) {
	                if (0 === q) switch (2 * x + 3 * K) {
	                  case 533:
	                    break;
	                  default:
	                    q = 1;
	                }
	                v++;
	              }
	              break;
	            case 64:
	              0 === b + v + n + m + u + k && (k = 1);
	              break;
	            case 42:
	            case 47:
	              if (!(0 < n + m + v)) switch (b) {
	                case 0:
	                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
	                    case 235:
	                      b = 47;
	                      break;
	                    case 220:
	                      t = l, b = 42;
	                  }
	                  break;
	                case 42:
	                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
	              }
	          }
	          0 === b && (f += y);
	      }
	      K = x;
	      x = g;
	      l++;
	    }
	    t = p.length;
	    if (0 < t) {
	      r = c;
	      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
	      p = r.join(',') + '{' + p + '}';
	      if (0 !== w * E) {
	        2 !== w || L(p, 2) || (E = 0);
	        switch (E) {
	          case 111:
	            p = p.replace(ha, ':-moz-$1') + p;
	            break;
	          case 112:
	            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
	        }
	        E = 0;
	      }
	    }
	    return G + p + F;
	  }
	  function X(d, c, e) {
	    var h = c.trim().split(ia);
	    c = h;
	    var a = h.length,
	        m = d.length;
	    switch (m) {
	      case 0:
	      case 1:
	        var b = 0;
	        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
	          c[b] = Z(d, c[b], e).trim();
	        }
	        break;
	      default:
	        var v = b = 0;
	        for (c = []; b < a; ++b) {
	          for (var n = 0; n < m; ++n) {
	            c[v++] = Z(d[n] + ' ', h[b], e).trim();
	          }
	        }
	    }
	    return c;
	  }
	  function Z(d, c, e) {
	    var h = c.charCodeAt(0);
	    33 > h && (h = (c = c.trim()).charCodeAt(0));
	    switch (h) {
	      case 38:
	        return c.replace(F, '$1' + d.trim());
	      case 58:
	        return d.trim() + c.replace(F, '$1' + d.trim());
	      default:
	        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
	    }
	    return d + c;
	  }
	  function P(d, c, e, h) {
	    var a = d + ';',
	        m = 2 * c + 3 * e + 4 * h;
	    if (944 === m) {
	      d = a.indexOf(':', 9) + 1;
	      var b = a.substring(d, a.length - 1).trim();
	      b = a.substring(0, d).trim() + b + ';';
	      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
	    }
	    if (0 === w || 2 === w && !L(a, 1)) return a;
	    switch (m) {
	      case 1015:
	        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;
	      case 951:
	        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;
	      case 963:
	        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;
	      case 1009:
	        if (100 !== a.charCodeAt(4)) break;
	      case 969:
	      case 942:
	        return '-webkit-' + a + a;
	      case 978:
	        return '-webkit-' + a + '-moz-' + a + a;
	      case 1019:
	      case 983:
	        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;
	      case 883:
	        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
	        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
	        break;
	      case 932:
	        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
	          case 103:
	            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;
	          case 115:
	            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;
	          case 98:
	            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
	        }
	        return '-webkit-' + a + '-ms-' + a + a;
	      case 964:
	        return '-webkit-' + a + '-ms-flex-' + a + a;
	      case 1023:
	        if (99 !== a.charCodeAt(8)) break;
	        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
	        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;
	      case 1005:
	        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;
	      case 1e3:
	        b = a.substring(13).trim();
	        c = b.indexOf('-') + 1;
	        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
	          case 226:
	            b = a.replace(G, 'tb');
	            break;
	          case 232:
	            b = a.replace(G, 'tb-rl');
	            break;
	          case 220:
	            b = a.replace(G, 'lr');
	            break;
	          default:
	            return a;
	        }
	        return '-webkit-' + a + '-ms-' + b + a;
	      case 1017:
	        if (-1 === a.indexOf('sticky', 9)) break;
	      case 975:
	        c = (a = d).length - 10;
	        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();
	        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
	          case 203:
	            if (111 > b.charCodeAt(8)) break;
	          case 115:
	            a = a.replace(b, '-webkit-' + b) + ';' + a;
	            break;
	          case 207:
	          case 102:
	            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
	        }
	        return a + ';';
	      case 938:
	        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
	          case 105:
	            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;
	          case 115:
	            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;
	          default:
	            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
	        }
	        break;
	      case 973:
	      case 989:
	        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
	      case 931:
	      case 953:
	        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
	        break;
	      case 962:
	        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
	    }
	    return a;
	  }
	  function L(d, c) {
	    var e = d.indexOf(1 === c ? ':' : '{'),
	        h = d.substring(0, 3 !== c ? e : 10);
	    e = d.substring(e + 1, d.length - 1);
	    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
	  }
	  function ea(d, c) {
	    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
	    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
	  }
	  function H(d, c, e, h, a, m, b, v, n, q) {
	    for (var g = 0, x = c, w; g < A; ++g) {
	      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
	        case void 0:
	        case !1:
	        case !0:
	        case null:
	          break;
	        default:
	          x = w;
	      }
	    }
	    if (x !== c) return x;
	  }
	  function T(d) {
	    switch (d) {
	      case void 0:
	      case null:
	        A = S.length = 0;
	        break;
	      default:
	        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
	          T(d[c]);
	        } else Y = !!d | 0;
	    }
	    return T;
	  }
	  function U(d) {
	    d = d.prefix;
	    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
	    return U;
	  }
	  function B(d, c) {
	    var e = d;
	    33 > e.charCodeAt(0) && (e = e.trim());
	    V = e;
	    e = [V];
	    if (0 < A) {
	      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
	      void 0 !== h && 'string' === typeof h && (c = h);
	    }
	    var a = M(O, e, c, 0, 0);
	    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
	    V = '';
	    E = 0;
	    z = D = 1;
	    return a;
	  }
	  var ca = /^\0+/g,
	      N = /[\0\r\f]/g,
	      aa = /: */g,
	      ka = /zoo|gra/,
	      ma = /([,: ])(transform)/g,
	      ia = /,\r+?/g,
	      F = /([\t\r\n ])*\f?&/g,
	      fa = /@(k\w+)\s*(\S*)\s*/,
	      Q = /::(place)/g,
	      ha = /:(read-only)/g,
	      G = /[svh]\w+-[tblr]{2}/,
	      da = /\(\s*(.*)\s*\)/g,
	      oa = /([\s\S]*?);/g,
	      ba = /-self|flex-/g,
	      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
	      la = /stretch|:\s*\w+\-(?:conte|avail)/,
	      ja = /([^-])(image-set\()/,
	      z = 1,
	      D = 1,
	      E = 0,
	      w = 1,
	      O = [],
	      S = [],
	      A = 0,
	      R = null,
	      Y = 0,
	      V = '';
	  B.use = T;
	  B.set = U;
	  void 0 !== W && U(W);
	  return B;
	}

	var unitlessKeys = {
	  animationIterationCount: 1,
	  borderImageOutset: 1,
	  borderImageSlice: 1,
	  borderImageWidth: 1,
	  boxFlex: 1,
	  boxFlexGroup: 1,
	  boxOrdinalGroup: 1,
	  columnCount: 1,
	  columns: 1,
	  flex: 1,
	  flexGrow: 1,
	  flexPositive: 1,
	  flexShrink: 1,
	  flexNegative: 1,
	  flexOrder: 1,
	  gridRow: 1,
	  gridRowEnd: 1,
	  gridRowSpan: 1,
	  gridRowStart: 1,
	  gridColumn: 1,
	  gridColumnEnd: 1,
	  gridColumnSpan: 1,
	  gridColumnStart: 1,
	  msGridRow: 1,
	  msGridRowSpan: 1,
	  msGridColumn: 1,
	  msGridColumnSpan: 1,
	  fontWeight: 1,
	  lineHeight: 1,
	  opacity: 1,
	  order: 1,
	  orphans: 1,
	  tabSize: 1,
	  widows: 1,
	  zIndex: 1,
	  zoom: 1,
	  WebkitLineClamp: 1,
	  fillOpacity: 1,
	  floodOpacity: 1,
	  stopOpacity: 1,
	  strokeDasharray: 1,
	  strokeDashoffset: 1,
	  strokeMiterlimit: 1,
	  strokeOpacity: 1,
	  strokeWidth: 1
	};

	function memoize(fn) {
	  var cache = Object.create(null);
	  return function (arg) {
	    if (cache[arg] === undefined) cache[arg] = fn(arg);
	    return cache[arg];
	  };
	}

	var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
	var isPropValid = memoize(function (prop) {
	  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
	  && prop.charCodeAt(1) === 110
	  && prop.charCodeAt(2) < 91;
	}
	);

	var reactIs$2 = {exports: {}};

	var reactIs_production_min$1 = {};

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var hasRequiredReactIs_production_min$1;
	function requireReactIs_production_min$1 () {
		if (hasRequiredReactIs_production_min$1) return reactIs_production_min$1;
		hasRequiredReactIs_production_min$1 = 1;
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
		Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
		function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min$1.AsyncMode=l;reactIs_production_min$1.ConcurrentMode=m;reactIs_production_min$1.ContextConsumer=k;reactIs_production_min$1.ContextProvider=h;reactIs_production_min$1.Element=c;reactIs_production_min$1.ForwardRef=n;reactIs_production_min$1.Fragment=e;reactIs_production_min$1.Lazy=t;reactIs_production_min$1.Memo=r;reactIs_production_min$1.Portal=d;
		reactIs_production_min$1.Profiler=g;reactIs_production_min$1.StrictMode=f;reactIs_production_min$1.Suspense=p;reactIs_production_min$1.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min$1.isConcurrentMode=A;reactIs_production_min$1.isContextConsumer=function(a){return z(a)===k};reactIs_production_min$1.isContextProvider=function(a){return z(a)===h};reactIs_production_min$1.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min$1.isForwardRef=function(a){return z(a)===n};reactIs_production_min$1.isFragment=function(a){return z(a)===e};reactIs_production_min$1.isLazy=function(a){return z(a)===t};
		reactIs_production_min$1.isMemo=function(a){return z(a)===r};reactIs_production_min$1.isPortal=function(a){return z(a)===d};reactIs_production_min$1.isProfiler=function(a){return z(a)===g};reactIs_production_min$1.isStrictMode=function(a){return z(a)===f};reactIs_production_min$1.isSuspense=function(a){return z(a)===p};
		reactIs_production_min$1.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min$1.typeOf=z;
		return reactIs_production_min$1;
	}

	var reactIs_development$1 = {};

	/** @license React v16.13.1
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var hasRequiredReactIs_development$1;
	function requireReactIs_development$1 () {
		if (hasRequiredReactIs_development$1) return reactIs_development$1;
		hasRequiredReactIs_development$1 = 1;
		if (process.env.NODE_ENV !== "production") {
		  (function() {
		var hasSymbol = typeof Symbol === 'function' && Symbol.for;
		var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
		var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
		var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
		var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
		var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
		var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
		var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
		var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
		var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
		var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
		var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
		var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
		var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
		var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
		var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
		var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
		var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
		var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
		function isValidElementType(type) {
		  return typeof type === 'string' || typeof type === 'function' ||
		  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
		}
		function typeOf(object) {
		  if (typeof object === 'object' && object !== null) {
		    var $$typeof = object.$$typeof;
		    switch ($$typeof) {
		      case REACT_ELEMENT_TYPE:
		        var type = object.type;
		        switch (type) {
		          case REACT_ASYNC_MODE_TYPE:
		          case REACT_CONCURRENT_MODE_TYPE:
		          case REACT_FRAGMENT_TYPE:
		          case REACT_PROFILER_TYPE:
		          case REACT_STRICT_MODE_TYPE:
		          case REACT_SUSPENSE_TYPE:
		            return type;
		          default:
		            var $$typeofType = type && type.$$typeof;
		            switch ($$typeofType) {
		              case REACT_CONTEXT_TYPE:
		              case REACT_FORWARD_REF_TYPE:
		              case REACT_LAZY_TYPE:
		              case REACT_MEMO_TYPE:
		              case REACT_PROVIDER_TYPE:
		                return $$typeofType;
		              default:
		                return $$typeof;
		            }
		        }
		      case REACT_PORTAL_TYPE:
		        return $$typeof;
		    }
		  }
		  return undefined;
		}
		var AsyncMode = REACT_ASYNC_MODE_TYPE;
		var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
		var ContextConsumer = REACT_CONTEXT_TYPE;
		var ContextProvider = REACT_PROVIDER_TYPE;
		var Element = REACT_ELEMENT_TYPE;
		var ForwardRef = REACT_FORWARD_REF_TYPE;
		var Fragment = REACT_FRAGMENT_TYPE;
		var Lazy = REACT_LAZY_TYPE;
		var Memo = REACT_MEMO_TYPE;
		var Portal = REACT_PORTAL_TYPE;
		var Profiler = REACT_PROFILER_TYPE;
		var StrictMode = REACT_STRICT_MODE_TYPE;
		var Suspense = REACT_SUSPENSE_TYPE;
		var hasWarnedAboutDeprecatedIsAsyncMode = false;
		function isAsyncMode(object) {
		  {
		    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
		      hasWarnedAboutDeprecatedIsAsyncMode = true;
		      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
		    }
		  }
		  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
		}
		function isConcurrentMode(object) {
		  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
		}
		function isContextConsumer(object) {
		  return typeOf(object) === REACT_CONTEXT_TYPE;
		}
		function isContextProvider(object) {
		  return typeOf(object) === REACT_PROVIDER_TYPE;
		}
		function isElement(object) {
		  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		function isForwardRef(object) {
		  return typeOf(object) === REACT_FORWARD_REF_TYPE;
		}
		function isFragment(object) {
		  return typeOf(object) === REACT_FRAGMENT_TYPE;
		}
		function isLazy(object) {
		  return typeOf(object) === REACT_LAZY_TYPE;
		}
		function isMemo(object) {
		  return typeOf(object) === REACT_MEMO_TYPE;
		}
		function isPortal(object) {
		  return typeOf(object) === REACT_PORTAL_TYPE;
		}
		function isProfiler(object) {
		  return typeOf(object) === REACT_PROFILER_TYPE;
		}
		function isStrictMode(object) {
		  return typeOf(object) === REACT_STRICT_MODE_TYPE;
		}
		function isSuspense(object) {
		  return typeOf(object) === REACT_SUSPENSE_TYPE;
		}
		reactIs_development$1.AsyncMode = AsyncMode;
		reactIs_development$1.ConcurrentMode = ConcurrentMode;
		reactIs_development$1.ContextConsumer = ContextConsumer;
		reactIs_development$1.ContextProvider = ContextProvider;
		reactIs_development$1.Element = Element;
		reactIs_development$1.ForwardRef = ForwardRef;
		reactIs_development$1.Fragment = Fragment;
		reactIs_development$1.Lazy = Lazy;
		reactIs_development$1.Memo = Memo;
		reactIs_development$1.Portal = Portal;
		reactIs_development$1.Profiler = Profiler;
		reactIs_development$1.StrictMode = StrictMode;
		reactIs_development$1.Suspense = Suspense;
		reactIs_development$1.isAsyncMode = isAsyncMode;
		reactIs_development$1.isConcurrentMode = isConcurrentMode;
		reactIs_development$1.isContextConsumer = isContextConsumer;
		reactIs_development$1.isContextProvider = isContextProvider;
		reactIs_development$1.isElement = isElement;
		reactIs_development$1.isForwardRef = isForwardRef;
		reactIs_development$1.isFragment = isFragment;
		reactIs_development$1.isLazy = isLazy;
		reactIs_development$1.isMemo = isMemo;
		reactIs_development$1.isPortal = isPortal;
		reactIs_development$1.isProfiler = isProfiler;
		reactIs_development$1.isStrictMode = isStrictMode;
		reactIs_development$1.isSuspense = isSuspense;
		reactIs_development$1.isValidElementType = isValidElementType;
		reactIs_development$1.typeOf = typeOf;
		  })();
		}
		return reactIs_development$1;
	}

	(function (module) {
		if (process.env.NODE_ENV === 'production') {
		  module.exports = requireReactIs_production_min$1();
		} else {
		  module.exports = requireReactIs_development$1();
		}
	} (reactIs$2));
	getDefaultExportFromCjs(reactIs$2.exports);

	var reactIs$1 = reactIs$2.exports;
	var REACT_STATICS = {
	  childContextTypes: true,
	  contextType: true,
	  contextTypes: true,
	  defaultProps: true,
	  displayName: true,
	  getDefaultProps: true,
	  getDerivedStateFromError: true,
	  getDerivedStateFromProps: true,
	  mixins: true,
	  propTypes: true,
	  type: true
	};
	var KNOWN_STATICS = {
	  name: true,
	  length: true,
	  prototype: true,
	  caller: true,
	  callee: true,
	  arguments: true,
	  arity: true
	};
	var FORWARD_REF_STATICS = {
	  '$$typeof': true,
	  render: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true
	};
	var MEMO_STATICS = {
	  '$$typeof': true,
	  compare: true,
	  defaultProps: true,
	  displayName: true,
	  propTypes: true,
	  type: true
	};
	var TYPE_STATICS = {};
	TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
	TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
	function getStatics(component) {
	  if (reactIs$1.isMemo(component)) {
	    return MEMO_STATICS;
	  }
	  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
	}
	var defineProperty = Object.defineProperty;
	var getOwnPropertyNames = Object.getOwnPropertyNames;
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var getPrototypeOf = Object.getPrototypeOf;
	var objectPrototype = Object.prototype;
	function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
	  if (typeof sourceComponent !== 'string') {
	    if (objectPrototype) {
	      var inheritedComponent = getPrototypeOf(sourceComponent);
	      if (inheritedComponent && inheritedComponent !== objectPrototype) {
	        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
	      }
	    }
	    var keys = getOwnPropertyNames(sourceComponent);
	    if (getOwnPropertySymbols) {
	      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
	    }
	    var targetStatics = getStatics(targetComponent);
	    var sourceStatics = getStatics(sourceComponent);
	    for (var i = 0; i < keys.length; ++i) {
	      var key = keys[i];
	      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
	        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
	        try {
	          defineProperty(targetComponent, key, descriptor);
	        } catch (e) {}
	      }
	    }
	  }
	  return targetComponent;
	}
	var hoistNonReactStatics_cjs = hoistNonReactStatics;

	function v(){return (v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e}).apply(this,arguments)}var g=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!reactIs$3.exports.typeOf(t)},w=Object.freeze([]),E=Object.freeze({});function b(e){return "function"==typeof e}function _(e){return "production"!==process.env.NODE_ENV&&"string"==typeof e&&e||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A="undefined"!=typeof process&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?"false"!==process.env.SC_DISABLE_SPEEDY&&process.env.SC_DISABLE_SPEEDY:"production"!==process.env.NODE_ENV),R="production"!==process.env.NODE_ENV?{1:"Cannot create styled-component for component: %s.\n\n",2:"Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",3:"Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",4:"The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",5:"The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",6:"Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:'ThemeProvider: Please make your "theme" prop an object.\n\n',9:"Missing document `<head>`\n\n",10:"Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",11:"_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:"%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",14:'ThemeProvider: "theme" prop is required.\n\n',15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:"Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",17:"CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"}:{};function D(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t);})),e}function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw "production"===process.env.NODE_ENV?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):new Error(D.apply(void 0,[R[e]].concat(n)).trim())}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++);},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),x=new Map,k=new Map,V=1,B=function(e){if(x.has(e))return x.get(e);for(;k.has(V);)V++;var t=V++;return "production"!==process.env.NODE_ENV&&((0|t)<0||t>1<<30)&&j(16,""+t),x.set(e,t),k.set(t,e),t},z=function(e){return k.get(e)},M=function(e,t){t>=V&&(V=t+1),x.set(e,t),k.set(t,e);},G="style["+A+'][data-styled-version="5.3.5"]',L=new RegExp("^"+A+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r);},Y=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(M(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0;}else r.push(i);}}},q=function(){return "undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A,"active"),r.setAttribute("data-styled-version","5.3.5");var i=q();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17);}(t),this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return !1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--;},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v({},X,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(G),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o));}}(this));}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o;},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n);},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e);},t.clearTag=function(){this.tag=void 0;},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=z(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=A+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",");})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n';}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return (Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b(n)&&!N(n))return !1}return !0}var oe=ne("5.3.5"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic="production"===process.env.NODE_ENV&&(void 0===n||n.isStatic)&&re(e),this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else {var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a);}o.push(i),this.staticRulesId=i;}else {for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h,"production"!==process.env.NODE_ENV&&(u=te(u,h+d));else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f;}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y);}o.push(m);}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w:c,l=new stylis_min(a),d=[],h=function(e){function t(t){if(t)try{e(t+"}");}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t);}}}((function(e){d.push(e);})),f=function(e,r,s){return 0===r&&-1!==ae.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f));},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=r__default["default"].createContext();ue.Consumer;var de=r__default["default"].createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return r.useContext(ue)||he}function me(){return r.useContext(de)||pe}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t;}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return "-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return "";if(N(e))return "."+e.styledComponentId;if(b(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return "production"!==process.env.NODE_ENV&&reactIs$3.exports.isElement(u)&&console.warn(_(e)+" is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."),Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(Array.isArray(t[i])&&t[i].isCss||b(t[i])?s.push(be(i)+":",t[i],";"):S(t[i])?s.push.apply(s,e(t[i],i)):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in unitlessKeys?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ae=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b(e)||S(e)?Ae(Ne(g(w,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ae(Ne(g(e,n)))}var Ie=/invalid hook call/i,Pe=new Set,Oe=function(e,t){if("production"!==process.env.NODE_ENV){var n="The component "+e+(t?' with the id of "'+t+'"':"")+" has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",r$1=console.error;try{var o=!0;console.error=function(e){if(Ie.test(e))o=!1,Pe.delete(n);else {for(var t=arguments.length,s=new Array(t>1?t-1:0),i=1;i<t;i++)s[i-1]=arguments[i];r$1.apply(void 0,[e].concat(s));}},r.useRef(),o&&!Pe.has(n)&&(console.warn(n),Pe.add(n));}catch(e){Ie.test(e.message)&&Pe.delete(n);}finally{console.error=r$1;}}},Re=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,je=/(^-|-$)/g;function Te(e){return e.replace(De,"-").replace(je,"")}var xe=function(e){return ee(ne(e)>>>0)};function ke(e){return "string"==typeof e&&("production"===process.env.NODE_ENV||e.charAt(0)===e.charAt(0).toLowerCase())}var Ve=function(e){return "function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Be=function(e){return "__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function ze(e,t,n){var r=e[n];Ve(t)&&Ve(r)?Me(r,t):e[n]=t;}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ve(i))for(var a in i)Be(a)&&ze(e,i[a],a);}return e}var Ge=r__default["default"].createContext();Ge.Consumer;var Ye={};function qe(e,t,n){var o=N(e),i=!ke(e),a=t.attrs,c=void 0===a?w:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":Te(e);Ye[n]=(Ye[n]||0)+1;var r=n+"-"+xe("5.3.5"+n+Ye[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return ke(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?Te(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r$1){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target;"production"!==process.env.NODE_ENV&&r.useDebugValue(h);var f=function(e,t,n){void 0===e&&(e=E);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t];})),[r,o]}(Re(t,r.useContext(Ge),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r$1){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return "production"!==process.env.NODE_ENV&&r.useDebugValue(i),"production"!==process.env.NODE_ENV&&!t&&r$1&&r$1(i),i}(i,r$1,y,"production"!==process.env.NODE_ENV?e.warnTooManyClasses:void 0),w=n,_=g.$as||t.$as||g.as||t.as||p,N=ke(_),A=g!==t?v({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,isPropValid,_):!N||isPropValid(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,r.createElement(_,C)}(C,e,t,P)};return O.displayName=f,(C=r__default["default"].forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return {};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(ke(e)?e:Te(_(e)));return qe(e,v({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t;}}),"production"!==process.env.NODE_ENV&&(Oe(f,g),C.warnTooManyClasses=function(e,t){var n={},r=!1;return function(o){if(!r&&(n[o]=!0,Object.keys(n).length>=200)){var s=t?' with the id of "'+t+'"':"";console.warn("Over 200 classes were generated for component "+e+s+".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"),r=!0,n={};}}}(f,g)),C.toString=function(){return "."+C.styledComponentId},i&&hoistNonReactStatics_cjs(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var He=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!reactIs$3.exports.isValidElementType(r))return j(1,String(r));var s=function(){return t(r,o,Ce.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(qe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){He[e]=He(e);}));"production"!==process.env.NODE_ENV&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product&&console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"),"production"!==process.env.NODE_ENV&&"test"!==process.env.NODE_ENV&&"undefined"!=typeof window&&(window["__styled-components-init__"]=window["__styled-components-init__"]||0,1===window["__styled-components-init__"]&&console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."),window["__styled-components-init__"]+=1);

	var qrcode$1 = {exports: {}};

	(function (module, exports) {
		var qrcode = function() {
		  var qrcode = function(typeNumber, errorCorrectionLevel) {
		    var PAD0 = 0xEC;
		    var PAD1 = 0x11;
		    var _typeNumber = typeNumber;
		    var _errorCorrectionLevel = QRErrorCorrectionLevel[errorCorrectionLevel];
		    var _modules = null;
		    var _moduleCount = 0;
		    var _dataCache = null;
		    var _dataList = [];
		    var _this = {};
		    var makeImpl = function(test, maskPattern) {
		      _moduleCount = _typeNumber * 4 + 17;
		      _modules = function(moduleCount) {
		        var modules = new Array(moduleCount);
		        for (var row = 0; row < moduleCount; row += 1) {
		          modules[row] = new Array(moduleCount);
		          for (var col = 0; col < moduleCount; col += 1) {
		            modules[row][col] = null;
		          }
		        }
		        return modules;
		      }(_moduleCount);
		      setupPositionProbePattern(0, 0);
		      setupPositionProbePattern(_moduleCount - 7, 0);
		      setupPositionProbePattern(0, _moduleCount - 7);
		      setupPositionAdjustPattern();
		      setupTimingPattern();
		      setupTypeInfo(test, maskPattern);
		      if (_typeNumber >= 7) {
		        setupTypeNumber(test);
		      }
		      if (_dataCache == null) {
		        _dataCache = createData(_typeNumber, _errorCorrectionLevel, _dataList);
		      }
		      mapData(_dataCache, maskPattern);
		    };
		    var setupPositionProbePattern = function(row, col) {
		      for (var r = -1; r <= 7; r += 1) {
		        if (row + r <= -1 || _moduleCount <= row + r) continue;
		        for (var c = -1; c <= 7; c += 1) {
		          if (col + c <= -1 || _moduleCount <= col + c) continue;
		          if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
		              || (0 <= c && c <= 6 && (r == 0 || r == 6) )
		              || (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
		            _modules[row + r][col + c] = true;
		          } else {
		            _modules[row + r][col + c] = false;
		          }
		        }
		      }
		    };
		    var getBestMaskPattern = function() {
		      var minLostPoint = 0;
		      var pattern = 0;
		      for (var i = 0; i < 8; i += 1) {
		        makeImpl(true, i);
		        var lostPoint = QRUtil.getLostPoint(_this);
		        if (i == 0 || minLostPoint > lostPoint) {
		          minLostPoint = lostPoint;
		          pattern = i;
		        }
		      }
		      return pattern;
		    };
		    var setupTimingPattern = function() {
		      for (var r = 8; r < _moduleCount - 8; r += 1) {
		        if (_modules[r][6] != null) {
		          continue;
		        }
		        _modules[r][6] = (r % 2 == 0);
		      }
		      for (var c = 8; c < _moduleCount - 8; c += 1) {
		        if (_modules[6][c] != null) {
		          continue;
		        }
		        _modules[6][c] = (c % 2 == 0);
		      }
		    };
		    var setupPositionAdjustPattern = function() {
		      var pos = QRUtil.getPatternPosition(_typeNumber);
		      for (var i = 0; i < pos.length; i += 1) {
		        for (var j = 0; j < pos.length; j += 1) {
		          var row = pos[i];
		          var col = pos[j];
		          if (_modules[row][col] != null) {
		            continue;
		          }
		          for (var r = -2; r <= 2; r += 1) {
		            for (var c = -2; c <= 2; c += 1) {
		              if (r == -2 || r == 2 || c == -2 || c == 2
		                  || (r == 0 && c == 0) ) {
		                _modules[row + r][col + c] = true;
		              } else {
		                _modules[row + r][col + c] = false;
		              }
		            }
		          }
		        }
		      }
		    };
		    var setupTypeNumber = function(test) {
		      var bits = QRUtil.getBCHTypeNumber(_typeNumber);
		      for (var i = 0; i < 18; i += 1) {
		        var mod = (!test && ( (bits >> i) & 1) == 1);
		        _modules[Math.floor(i / 3)][i % 3 + _moduleCount - 8 - 3] = mod;
		      }
		      for (var i = 0; i < 18; i += 1) {
		        var mod = (!test && ( (bits >> i) & 1) == 1);
		        _modules[i % 3 + _moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
		      }
		    };
		    var setupTypeInfo = function(test, maskPattern) {
		      var data = (_errorCorrectionLevel << 3) | maskPattern;
		      var bits = QRUtil.getBCHTypeInfo(data);
		      for (var i = 0; i < 15; i += 1) {
		        var mod = (!test && ( (bits >> i) & 1) == 1);
		        if (i < 6) {
		          _modules[i][8] = mod;
		        } else if (i < 8) {
		          _modules[i + 1][8] = mod;
		        } else {
		          _modules[_moduleCount - 15 + i][8] = mod;
		        }
		      }
		      for (var i = 0; i < 15; i += 1) {
		        var mod = (!test && ( (bits >> i) & 1) == 1);
		        if (i < 8) {
		          _modules[8][_moduleCount - i - 1] = mod;
		        } else if (i < 9) {
		          _modules[8][15 - i - 1 + 1] = mod;
		        } else {
		          _modules[8][15 - i - 1] = mod;
		        }
		      }
		      _modules[_moduleCount - 8][8] = (!test);
		    };
		    var mapData = function(data, maskPattern) {
		      var inc = -1;
		      var row = _moduleCount - 1;
		      var bitIndex = 7;
		      var byteIndex = 0;
		      var maskFunc = QRUtil.getMaskFunction(maskPattern);
		      for (var col = _moduleCount - 1; col > 0; col -= 2) {
		        if (col == 6) col -= 1;
		        while (true) {
		          for (var c = 0; c < 2; c += 1) {
		            if (_modules[row][col - c] == null) {
		              var dark = false;
		              if (byteIndex < data.length) {
		                dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
		              }
		              var mask = maskFunc(row, col - c);
		              if (mask) {
		                dark = !dark;
		              }
		              _modules[row][col - c] = dark;
		              bitIndex -= 1;
		              if (bitIndex == -1) {
		                byteIndex += 1;
		                bitIndex = 7;
		              }
		            }
		          }
		          row += inc;
		          if (row < 0 || _moduleCount <= row) {
		            row -= inc;
		            inc = -inc;
		            break;
		          }
		        }
		      }
		    };
		    var createBytes = function(buffer, rsBlocks) {
		      var offset = 0;
		      var maxDcCount = 0;
		      var maxEcCount = 0;
		      var dcdata = new Array(rsBlocks.length);
		      var ecdata = new Array(rsBlocks.length);
		      for (var r = 0; r < rsBlocks.length; r += 1) {
		        var dcCount = rsBlocks[r].dataCount;
		        var ecCount = rsBlocks[r].totalCount - dcCount;
		        maxDcCount = Math.max(maxDcCount, dcCount);
		        maxEcCount = Math.max(maxEcCount, ecCount);
		        dcdata[r] = new Array(dcCount);
		        for (var i = 0; i < dcdata[r].length; i += 1) {
		          dcdata[r][i] = 0xff & buffer.getBuffer()[i + offset];
		        }
		        offset += dcCount;
		        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
		        var rawPoly = qrPolynomial(dcdata[r], rsPoly.getLength() - 1);
		        var modPoly = rawPoly.mod(rsPoly);
		        ecdata[r] = new Array(rsPoly.getLength() - 1);
		        for (var i = 0; i < ecdata[r].length; i += 1) {
		          var modIndex = i + modPoly.getLength() - ecdata[r].length;
		          ecdata[r][i] = (modIndex >= 0)? modPoly.getAt(modIndex) : 0;
		        }
		      }
		      var totalCodeCount = 0;
		      for (var i = 0; i < rsBlocks.length; i += 1) {
		        totalCodeCount += rsBlocks[i].totalCount;
		      }
		      var data = new Array(totalCodeCount);
		      var index = 0;
		      for (var i = 0; i < maxDcCount; i += 1) {
		        for (var r = 0; r < rsBlocks.length; r += 1) {
		          if (i < dcdata[r].length) {
		            data[index] = dcdata[r][i];
		            index += 1;
		          }
		        }
		      }
		      for (var i = 0; i < maxEcCount; i += 1) {
		        for (var r = 0; r < rsBlocks.length; r += 1) {
		          if (i < ecdata[r].length) {
		            data[index] = ecdata[r][i];
		            index += 1;
		          }
		        }
		      }
		      return data;
		    };
		    var createData = function(typeNumber, errorCorrectionLevel, dataList) {
		      var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectionLevel);
		      var buffer = qrBitBuffer();
		      for (var i = 0; i < dataList.length; i += 1) {
		        var data = dataList[i];
		        buffer.put(data.getMode(), 4);
		        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
		        data.write(buffer);
		      }
		      var totalDataCount = 0;
		      for (var i = 0; i < rsBlocks.length; i += 1) {
		        totalDataCount += rsBlocks[i].dataCount;
		      }
		      if (buffer.getLengthInBits() > totalDataCount * 8) {
		        throw 'code length overflow. ('
		          + buffer.getLengthInBits()
		          + '>'
		          + totalDataCount * 8
		          + ')';
		      }
		      if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
		        buffer.put(0, 4);
		      }
		      while (buffer.getLengthInBits() % 8 != 0) {
		        buffer.putBit(false);
		      }
		      while (true) {
		        if (buffer.getLengthInBits() >= totalDataCount * 8) {
		          break;
		        }
		        buffer.put(PAD0, 8);
		        if (buffer.getLengthInBits() >= totalDataCount * 8) {
		          break;
		        }
		        buffer.put(PAD1, 8);
		      }
		      return createBytes(buffer, rsBlocks);
		    };
		    _this.addData = function(data, mode) {
		      mode = mode || 'Byte';
		      var newData = null;
		      switch(mode) {
		      case 'Numeric' :
		        newData = qrNumber(data);
		        break;
		      case 'Alphanumeric' :
		        newData = qrAlphaNum(data);
		        break;
		      case 'Byte' :
		        newData = qr8BitByte(data);
		        break;
		      case 'Kanji' :
		        newData = qrKanji(data);
		        break;
		      default :
		        throw 'mode:' + mode;
		      }
		      _dataList.push(newData);
		      _dataCache = null;
		    };
		    _this.isDark = function(row, col) {
		      if (row < 0 || _moduleCount <= row || col < 0 || _moduleCount <= col) {
		        throw row + ',' + col;
		      }
		      return _modules[row][col];
		    };
		    _this.getModuleCount = function() {
		      return _moduleCount;
		    };
		    _this.make = function() {
		      if (_typeNumber < 1) {
		        var typeNumber = 1;
		        for (; typeNumber < 40; typeNumber++) {
		          var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, _errorCorrectionLevel);
		          var buffer = qrBitBuffer();
		          for (var i = 0; i < _dataList.length; i++) {
		            var data = _dataList[i];
		            buffer.put(data.getMode(), 4);
		            buffer.put(data.getLength(), QRUtil.getLengthInBits(data.getMode(), typeNumber) );
		            data.write(buffer);
		          }
		          var totalDataCount = 0;
		          for (var i = 0; i < rsBlocks.length; i++) {
		            totalDataCount += rsBlocks[i].dataCount;
		          }
		          if (buffer.getLengthInBits() <= totalDataCount * 8) {
		            break;
		          }
		        }
		        _typeNumber = typeNumber;
		      }
		      makeImpl(false, getBestMaskPattern() );
		    };
		    _this.createTableTag = function(cellSize, margin) {
		      cellSize = cellSize || 2;
		      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;
		      var qrHtml = '';
		      qrHtml += '<table style="';
		      qrHtml += ' border-width: 0px; border-style: none;';
		      qrHtml += ' border-collapse: collapse;';
		      qrHtml += ' padding: 0px; margin: ' + margin + 'px;';
		      qrHtml += '">';
		      qrHtml += '<tbody>';
		      for (var r = 0; r < _this.getModuleCount(); r += 1) {
		        qrHtml += '<tr>';
		        for (var c = 0; c < _this.getModuleCount(); c += 1) {
		          qrHtml += '<td style="';
		          qrHtml += ' border-width: 0px; border-style: none;';
		          qrHtml += ' border-collapse: collapse;';
		          qrHtml += ' padding: 0px; margin: 0px;';
		          qrHtml += ' width: ' + cellSize + 'px;';
		          qrHtml += ' height: ' + cellSize + 'px;';
		          qrHtml += ' background-color: ';
		          qrHtml += _this.isDark(r, c)? '#000000' : '#ffffff';
		          qrHtml += ';';
		          qrHtml += '"/>';
		        }
		        qrHtml += '</tr>';
		      }
		      qrHtml += '</tbody>';
		      qrHtml += '</table>';
		      return qrHtml;
		    };
		    _this.createSvgTag = function(cellSize, margin, alt, title) {
		      var opts = {};
		      if (typeof arguments[0] == 'object') {
		        opts = arguments[0];
		        cellSize = opts.cellSize;
		        margin = opts.margin;
		        alt = opts.alt;
		        title = opts.title;
		      }
		      cellSize = cellSize || 2;
		      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;
		      alt = (typeof alt === 'string') ? {text: alt} : alt || {};
		      alt.text = alt.text || null;
		      alt.id = (alt.text) ? alt.id || 'qrcode-description' : null;
		      title = (typeof title === 'string') ? {text: title} : title || {};
		      title.text = title.text || null;
		      title.id = (title.text) ? title.id || 'qrcode-title' : null;
		      var size = _this.getModuleCount() * cellSize + margin * 2;
		      var c, mc, r, mr, qrSvg='', rect;
		      rect = 'l' + cellSize + ',0 0,' + cellSize +
		        ' -' + cellSize + ',0 0,-' + cellSize + 'z ';
		      qrSvg += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"';
		      qrSvg += !opts.scalable ? ' width="' + size + 'px" height="' + size + 'px"' : '';
		      qrSvg += ' viewBox="0 0 ' + size + ' ' + size + '" ';
		      qrSvg += ' preserveAspectRatio="xMinYMin meet"';
		      qrSvg += (title.text || alt.text) ? ' role="img" aria-labelledby="' +
		          escapeXml([title.id, alt.id].join(' ').trim() ) + '"' : '';
		      qrSvg += '>';
		      qrSvg += (title.text) ? '<title id="' + escapeXml(title.id) + '">' +
		          escapeXml(title.text) + '</title>' : '';
		      qrSvg += (alt.text) ? '<description id="' + escapeXml(alt.id) + '">' +
		          escapeXml(alt.text) + '</description>' : '';
		      qrSvg += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>';
		      qrSvg += '<path d="';
		      for (r = 0; r < _this.getModuleCount(); r += 1) {
		        mr = r * cellSize + margin;
		        for (c = 0; c < _this.getModuleCount(); c += 1) {
		          if (_this.isDark(r, c) ) {
		            mc = c*cellSize+margin;
		            qrSvg += 'M' + mc + ',' + mr + rect;
		          }
		        }
		      }
		      qrSvg += '" stroke="transparent" fill="black"/>';
		      qrSvg += '</svg>';
		      return qrSvg;
		    };
		    _this.createDataURL = function(cellSize, margin) {
		      cellSize = cellSize || 2;
		      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;
		      var size = _this.getModuleCount() * cellSize + margin * 2;
		      var min = margin;
		      var max = size - margin;
		      return createDataURL(size, size, function(x, y) {
		        if (min <= x && x < max && min <= y && y < max) {
		          var c = Math.floor( (x - min) / cellSize);
		          var r = Math.floor( (y - min) / cellSize);
		          return _this.isDark(r, c)? 0 : 1;
		        } else {
		          return 1;
		        }
		      } );
		    };
		    _this.createImgTag = function(cellSize, margin, alt) {
		      cellSize = cellSize || 2;
		      margin = (typeof margin == 'undefined')? cellSize * 4 : margin;
		      var size = _this.getModuleCount() * cellSize + margin * 2;
		      var img = '';
		      img += '<img';
		      img += '\u0020src="';
		      img += _this.createDataURL(cellSize, margin);
		      img += '"';
		      img += '\u0020width="';
		      img += size;
		      img += '"';
		      img += '\u0020height="';
		      img += size;
		      img += '"';
		      if (alt) {
		        img += '\u0020alt="';
		        img += escapeXml(alt);
		        img += '"';
		      }
		      img += '/>';
		      return img;
		    };
		    var escapeXml = function(s) {
		      var escaped = '';
		      for (var i = 0; i < s.length; i += 1) {
		        var c = s.charAt(i);
		        switch(c) {
		        case '<': escaped += '&lt;'; break;
		        case '>': escaped += '&gt;'; break;
		        case '&': escaped += '&amp;'; break;
		        case '"': escaped += '&quot;'; break;
		        default : escaped += c; break;
		        }
		      }
		      return escaped;
		    };
		    var _createHalfASCII = function(margin) {
		      var cellSize = 1;
		      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;
		      var size = _this.getModuleCount() * cellSize + margin * 2;
		      var min = margin;
		      var max = size - margin;
		      var y, x, r1, r2, p;
		      var blocks = {
		        '██': '█',
		        '█ ': '▀',
		        ' █': '▄',
		        '  ': ' '
		      };
		      var blocksLastLineNoMargin = {
		        '██': '▀',
		        '█ ': '▀',
		        ' █': ' ',
		        '  ': ' '
		      };
		      var ascii = '';
		      for (y = 0; y < size; y += 2) {
		        r1 = Math.floor((y - min) / cellSize);
		        r2 = Math.floor((y + 1 - min) / cellSize);
		        for (x = 0; x < size; x += 1) {
		          p = '█';
		          if (min <= x && x < max && min <= y && y < max && _this.isDark(r1, Math.floor((x - min) / cellSize))) {
		            p = ' ';
		          }
		          if (min <= x && x < max && min <= y+1 && y+1 < max && _this.isDark(r2, Math.floor((x - min) / cellSize))) {
		            p += ' ';
		          }
		          else {
		            p += '█';
		          }
		          ascii += (margin < 1 && y+1 >= max) ? blocksLastLineNoMargin[p] : blocks[p];
		        }
		        ascii += '\n';
		      }
		      if (size % 2 && margin > 0) {
		        return ascii.substring(0, ascii.length - size - 1) + Array(size+1).join('▀');
		      }
		      return ascii.substring(0, ascii.length-1);
		    };
		    _this.createASCII = function(cellSize, margin) {
		      cellSize = cellSize || 1;
		      if (cellSize < 2) {
		        return _createHalfASCII(margin);
		      }
		      cellSize -= 1;
		      margin = (typeof margin == 'undefined')? cellSize * 2 : margin;
		      var size = _this.getModuleCount() * cellSize + margin * 2;
		      var min = margin;
		      var max = size - margin;
		      var y, x, r, p;
		      var white = Array(cellSize+1).join('██');
		      var black = Array(cellSize+1).join('  ');
		      var ascii = '';
		      var line = '';
		      for (y = 0; y < size; y += 1) {
		        r = Math.floor( (y - min) / cellSize);
		        line = '';
		        for (x = 0; x < size; x += 1) {
		          p = 1;
		          if (min <= x && x < max && min <= y && y < max && _this.isDark(r, Math.floor((x - min) / cellSize))) {
		            p = 0;
		          }
		          line += p ? white : black;
		        }
		        for (r = 0; r < cellSize; r += 1) {
		          ascii += line + '\n';
		        }
		      }
		      return ascii.substring(0, ascii.length-1);
		    };
		    _this.renderTo2dContext = function(context, cellSize) {
		      cellSize = cellSize || 2;
		      var length = _this.getModuleCount();
		      for (var row = 0; row < length; row++) {
		        for (var col = 0; col < length; col++) {
		          context.fillStyle = _this.isDark(row, col) ? 'black' : 'white';
		          context.fillRect(row * cellSize, col * cellSize, cellSize, cellSize);
		        }
		      }
		    };
		    return _this;
		  };
		  qrcode.stringToBytesFuncs = {
		    'default' : function(s) {
		      var bytes = [];
		      for (var i = 0; i < s.length; i += 1) {
		        var c = s.charCodeAt(i);
		        bytes.push(c & 0xff);
		      }
		      return bytes;
		    }
		  };
		  qrcode.stringToBytes = qrcode.stringToBytesFuncs['default'];
		  qrcode.createStringToBytes = function(unicodeData, numChars) {
		    var unicodeMap = function() {
		      var bin = base64DecodeInputStream(unicodeData);
		      var read = function() {
		        var b = bin.read();
		        if (b == -1) throw 'eof';
		        return b;
		      };
		      var count = 0;
		      var unicodeMap = {};
		      while (true) {
		        var b0 = bin.read();
		        if (b0 == -1) break;
		        var b1 = read();
		        var b2 = read();
		        var b3 = read();
		        var k = String.fromCharCode( (b0 << 8) | b1);
		        var v = (b2 << 8) | b3;
		        unicodeMap[k] = v;
		        count += 1;
		      }
		      if (count != numChars) {
		        throw count + ' != ' + numChars;
		      }
		      return unicodeMap;
		    }();
		    var unknownChar = '?'.charCodeAt(0);
		    return function(s) {
		      var bytes = [];
		      for (var i = 0; i < s.length; i += 1) {
		        var c = s.charCodeAt(i);
		        if (c < 128) {
		          bytes.push(c);
		        } else {
		          var b = unicodeMap[s.charAt(i)];
		          if (typeof b == 'number') {
		            if ( (b & 0xff) == b) {
		              bytes.push(b);
		            } else {
		              bytes.push(b >>> 8);
		              bytes.push(b & 0xff);
		            }
		          } else {
		            bytes.push(unknownChar);
		          }
		        }
		      }
		      return bytes;
		    };
		  };
		  var QRMode = {
		    MODE_NUMBER :    1 << 0,
		    MODE_ALPHA_NUM : 1 << 1,
		    MODE_8BIT_BYTE : 1 << 2,
		    MODE_KANJI :     1 << 3
		  };
		  var QRErrorCorrectionLevel = {
		    L : 1,
		    M : 0,
		    Q : 3,
		    H : 2
		  };
		  var QRMaskPattern = {
		    PATTERN000 : 0,
		    PATTERN001 : 1,
		    PATTERN010 : 2,
		    PATTERN011 : 3,
		    PATTERN100 : 4,
		    PATTERN101 : 5,
		    PATTERN110 : 6,
		    PATTERN111 : 7
		  };
		  var QRUtil = function() {
		    var PATTERN_POSITION_TABLE = [
		      [],
		      [6, 18],
		      [6, 22],
		      [6, 26],
		      [6, 30],
		      [6, 34],
		      [6, 22, 38],
		      [6, 24, 42],
		      [6, 26, 46],
		      [6, 28, 50],
		      [6, 30, 54],
		      [6, 32, 58],
		      [6, 34, 62],
		      [6, 26, 46, 66],
		      [6, 26, 48, 70],
		      [6, 26, 50, 74],
		      [6, 30, 54, 78],
		      [6, 30, 56, 82],
		      [6, 30, 58, 86],
		      [6, 34, 62, 90],
		      [6, 28, 50, 72, 94],
		      [6, 26, 50, 74, 98],
		      [6, 30, 54, 78, 102],
		      [6, 28, 54, 80, 106],
		      [6, 32, 58, 84, 110],
		      [6, 30, 58, 86, 114],
		      [6, 34, 62, 90, 118],
		      [6, 26, 50, 74, 98, 122],
		      [6, 30, 54, 78, 102, 126],
		      [6, 26, 52, 78, 104, 130],
		      [6, 30, 56, 82, 108, 134],
		      [6, 34, 60, 86, 112, 138],
		      [6, 30, 58, 86, 114, 142],
		      [6, 34, 62, 90, 118, 146],
		      [6, 30, 54, 78, 102, 126, 150],
		      [6, 24, 50, 76, 102, 128, 154],
		      [6, 28, 54, 80, 106, 132, 158],
		      [6, 32, 58, 84, 110, 136, 162],
		      [6, 26, 54, 82, 110, 138, 166],
		      [6, 30, 58, 86, 114, 142, 170]
		    ];
		    var G15 = (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0);
		    var G18 = (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0);
		    var G15_MASK = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1);
		    var _this = {};
		    var getBCHDigit = function(data) {
		      var digit = 0;
		      while (data != 0) {
		        digit += 1;
		        data >>>= 1;
		      }
		      return digit;
		    };
		    _this.getBCHTypeInfo = function(data) {
		      var d = data << 10;
		      while (getBCHDigit(d) - getBCHDigit(G15) >= 0) {
		        d ^= (G15 << (getBCHDigit(d) - getBCHDigit(G15) ) );
		      }
		      return ( (data << 10) | d) ^ G15_MASK;
		    };
		    _this.getBCHTypeNumber = function(data) {
		      var d = data << 12;
		      while (getBCHDigit(d) - getBCHDigit(G18) >= 0) {
		        d ^= (G18 << (getBCHDigit(d) - getBCHDigit(G18) ) );
		      }
		      return (data << 12) | d;
		    };
		    _this.getPatternPosition = function(typeNumber) {
		      return PATTERN_POSITION_TABLE[typeNumber - 1];
		    };
		    _this.getMaskFunction = function(maskPattern) {
		      switch (maskPattern) {
		      case QRMaskPattern.PATTERN000 :
		        return function(i, j) { return (i + j) % 2 == 0; };
		      case QRMaskPattern.PATTERN001 :
		        return function(i, j) { return i % 2 == 0; };
		      case QRMaskPattern.PATTERN010 :
		        return function(i, j) { return j % 3 == 0; };
		      case QRMaskPattern.PATTERN011 :
		        return function(i, j) { return (i + j) % 3 == 0; };
		      case QRMaskPattern.PATTERN100 :
		        return function(i, j) { return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0; };
		      case QRMaskPattern.PATTERN101 :
		        return function(i, j) { return (i * j) % 2 + (i * j) % 3 == 0; };
		      case QRMaskPattern.PATTERN110 :
		        return function(i, j) { return ( (i * j) % 2 + (i * j) % 3) % 2 == 0; };
		      case QRMaskPattern.PATTERN111 :
		        return function(i, j) { return ( (i * j) % 3 + (i + j) % 2) % 2 == 0; };
		      default :
		        throw 'bad maskPattern:' + maskPattern;
		      }
		    };
		    _this.getErrorCorrectPolynomial = function(errorCorrectLength) {
		      var a = qrPolynomial([1], 0);
		      for (var i = 0; i < errorCorrectLength; i += 1) {
		        a = a.multiply(qrPolynomial([1, QRMath.gexp(i)], 0) );
		      }
		      return a;
		    };
		    _this.getLengthInBits = function(mode, type) {
		      if (1 <= type && type < 10) {
		        switch(mode) {
		        case QRMode.MODE_NUMBER    : return 10;
		        case QRMode.MODE_ALPHA_NUM : return 9;
		        case QRMode.MODE_8BIT_BYTE : return 8;
		        case QRMode.MODE_KANJI     : return 8;
		        default :
		          throw 'mode:' + mode;
		        }
		      } else if (type < 27) {
		        switch(mode) {
		        case QRMode.MODE_NUMBER    : return 12;
		        case QRMode.MODE_ALPHA_NUM : return 11;
		        case QRMode.MODE_8BIT_BYTE : return 16;
		        case QRMode.MODE_KANJI     : return 10;
		        default :
		          throw 'mode:' + mode;
		        }
		      } else if (type < 41) {
		        switch(mode) {
		        case QRMode.MODE_NUMBER    : return 14;
		        case QRMode.MODE_ALPHA_NUM : return 13;
		        case QRMode.MODE_8BIT_BYTE : return 16;
		        case QRMode.MODE_KANJI     : return 12;
		        default :
		          throw 'mode:' + mode;
		        }
		      } else {
		        throw 'type:' + type;
		      }
		    };
		    _this.getLostPoint = function(qrcode) {
		      var moduleCount = qrcode.getModuleCount();
		      var lostPoint = 0;
		      for (var row = 0; row < moduleCount; row += 1) {
		        for (var col = 0; col < moduleCount; col += 1) {
		          var sameCount = 0;
		          var dark = qrcode.isDark(row, col);
		          for (var r = -1; r <= 1; r += 1) {
		            if (row + r < 0 || moduleCount <= row + r) {
		              continue;
		            }
		            for (var c = -1; c <= 1; c += 1) {
		              if (col + c < 0 || moduleCount <= col + c) {
		                continue;
		              }
		              if (r == 0 && c == 0) {
		                continue;
		              }
		              if (dark == qrcode.isDark(row + r, col + c) ) {
		                sameCount += 1;
		              }
		            }
		          }
		          if (sameCount > 5) {
		            lostPoint += (3 + sameCount - 5);
		          }
		        }
		      }	      for (var row = 0; row < moduleCount - 1; row += 1) {
		        for (var col = 0; col < moduleCount - 1; col += 1) {
		          var count = 0;
		          if (qrcode.isDark(row, col) ) count += 1;
		          if (qrcode.isDark(row + 1, col) ) count += 1;
		          if (qrcode.isDark(row, col + 1) ) count += 1;
		          if (qrcode.isDark(row + 1, col + 1) ) count += 1;
		          if (count == 0 || count == 4) {
		            lostPoint += 3;
		          }
		        }
		      }
		      for (var row = 0; row < moduleCount; row += 1) {
		        for (var col = 0; col < moduleCount - 6; col += 1) {
		          if (qrcode.isDark(row, col)
		              && !qrcode.isDark(row, col + 1)
		              &&  qrcode.isDark(row, col + 2)
		              &&  qrcode.isDark(row, col + 3)
		              &&  qrcode.isDark(row, col + 4)
		              && !qrcode.isDark(row, col + 5)
		              &&  qrcode.isDark(row, col + 6) ) {
		            lostPoint += 40;
		          }
		        }
		      }
		      for (var col = 0; col < moduleCount; col += 1) {
		        for (var row = 0; row < moduleCount - 6; row += 1) {
		          if (qrcode.isDark(row, col)
		              && !qrcode.isDark(row + 1, col)
		              &&  qrcode.isDark(row + 2, col)
		              &&  qrcode.isDark(row + 3, col)
		              &&  qrcode.isDark(row + 4, col)
		              && !qrcode.isDark(row + 5, col)
		              &&  qrcode.isDark(row + 6, col) ) {
		            lostPoint += 40;
		          }
		        }
		      }
		      var darkCount = 0;
		      for (var col = 0; col < moduleCount; col += 1) {
		        for (var row = 0; row < moduleCount; row += 1) {
		          if (qrcode.isDark(row, col) ) {
		            darkCount += 1;
		          }
		        }
		      }
		      var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
		      lostPoint += ratio * 10;
		      return lostPoint;
		    };
		    return _this;
		  }();
		  var QRMath = function() {
		    var EXP_TABLE = new Array(256);
		    var LOG_TABLE = new Array(256);
		    for (var i = 0; i < 8; i += 1) {
		      EXP_TABLE[i] = 1 << i;
		    }
		    for (var i = 8; i < 256; i += 1) {
		      EXP_TABLE[i] = EXP_TABLE[i - 4]
		        ^ EXP_TABLE[i - 5]
		        ^ EXP_TABLE[i - 6]
		        ^ EXP_TABLE[i - 8];
		    }
		    for (var i = 0; i < 255; i += 1) {
		      LOG_TABLE[EXP_TABLE[i] ] = i;
		    }
		    var _this = {};
		    _this.glog = function(n) {
		      if (n < 1) {
		        throw 'glog(' + n + ')';
		      }
		      return LOG_TABLE[n];
		    };
		    _this.gexp = function(n) {
		      while (n < 0) {
		        n += 255;
		      }
		      while (n >= 256) {
		        n -= 255;
		      }
		      return EXP_TABLE[n];
		    };
		    return _this;
		  }();
		  function qrPolynomial(num, shift) {
		    if (typeof num.length == 'undefined') {
		      throw num.length + '/' + shift;
		    }
		    var _num = function() {
		      var offset = 0;
		      while (offset < num.length && num[offset] == 0) {
		        offset += 1;
		      }
		      var _num = new Array(num.length - offset + shift);
		      for (var i = 0; i < num.length - offset; i += 1) {
		        _num[i] = num[i + offset];
		      }
		      return _num;
		    }();
		    var _this = {};
		    _this.getAt = function(index) {
		      return _num[index];
		    };
		    _this.getLength = function() {
		      return _num.length;
		    };
		    _this.multiply = function(e) {
		      var num = new Array(_this.getLength() + e.getLength() - 1);
		      for (var i = 0; i < _this.getLength(); i += 1) {
		        for (var j = 0; j < e.getLength(); j += 1) {
		          num[i + j] ^= QRMath.gexp(QRMath.glog(_this.getAt(i) ) + QRMath.glog(e.getAt(j) ) );
		        }
		      }
		      return qrPolynomial(num, 0);
		    };
		    _this.mod = function(e) {
		      if (_this.getLength() - e.getLength() < 0) {
		        return _this;
		      }
		      var ratio = QRMath.glog(_this.getAt(0) ) - QRMath.glog(e.getAt(0) );
		      var num = new Array(_this.getLength() );
		      for (var i = 0; i < _this.getLength(); i += 1) {
		        num[i] = _this.getAt(i);
		      }
		      for (var i = 0; i < e.getLength(); i += 1) {
		        num[i] ^= QRMath.gexp(QRMath.glog(e.getAt(i) ) + ratio);
		      }
		      return qrPolynomial(num, 0).mod(e);
		    };
		    return _this;
		  }	  var QRRSBlock = function() {
		    var RS_BLOCK_TABLE = [
		      [1, 26, 19],
		      [1, 26, 16],
		      [1, 26, 13],
		      [1, 26, 9],
		      [1, 44, 34],
		      [1, 44, 28],
		      [1, 44, 22],
		      [1, 44, 16],
		      [1, 70, 55],
		      [1, 70, 44],
		      [2, 35, 17],
		      [2, 35, 13],
		      [1, 100, 80],
		      [2, 50, 32],
		      [2, 50, 24],
		      [4, 25, 9],
		      [1, 134, 108],
		      [2, 67, 43],
		      [2, 33, 15, 2, 34, 16],
		      [2, 33, 11, 2, 34, 12],
		      [2, 86, 68],
		      [4, 43, 27],
		      [4, 43, 19],
		      [4, 43, 15],
		      [2, 98, 78],
		      [4, 49, 31],
		      [2, 32, 14, 4, 33, 15],
		      [4, 39, 13, 1, 40, 14],
		      [2, 121, 97],
		      [2, 60, 38, 2, 61, 39],
		      [4, 40, 18, 2, 41, 19],
		      [4, 40, 14, 2, 41, 15],
		      [2, 146, 116],
		      [3, 58, 36, 2, 59, 37],
		      [4, 36, 16, 4, 37, 17],
		      [4, 36, 12, 4, 37, 13],
		      [2, 86, 68, 2, 87, 69],
		      [4, 69, 43, 1, 70, 44],
		      [6, 43, 19, 2, 44, 20],
		      [6, 43, 15, 2, 44, 16],
		      [4, 101, 81],
		      [1, 80, 50, 4, 81, 51],
		      [4, 50, 22, 4, 51, 23],
		      [3, 36, 12, 8, 37, 13],
		      [2, 116, 92, 2, 117, 93],
		      [6, 58, 36, 2, 59, 37],
		      [4, 46, 20, 6, 47, 21],
		      [7, 42, 14, 4, 43, 15],
		      [4, 133, 107],
		      [8, 59, 37, 1, 60, 38],
		      [8, 44, 20, 4, 45, 21],
		      [12, 33, 11, 4, 34, 12],
		      [3, 145, 115, 1, 146, 116],
		      [4, 64, 40, 5, 65, 41],
		      [11, 36, 16, 5, 37, 17],
		      [11, 36, 12, 5, 37, 13],
		      [5, 109, 87, 1, 110, 88],
		      [5, 65, 41, 5, 66, 42],
		      [5, 54, 24, 7, 55, 25],
		      [11, 36, 12, 7, 37, 13],
		      [5, 122, 98, 1, 123, 99],
		      [7, 73, 45, 3, 74, 46],
		      [15, 43, 19, 2, 44, 20],
		      [3, 45, 15, 13, 46, 16],
		      [1, 135, 107, 5, 136, 108],
		      [10, 74, 46, 1, 75, 47],
		      [1, 50, 22, 15, 51, 23],
		      [2, 42, 14, 17, 43, 15],
		      [5, 150, 120, 1, 151, 121],
		      [9, 69, 43, 4, 70, 44],
		      [17, 50, 22, 1, 51, 23],
		      [2, 42, 14, 19, 43, 15],
		      [3, 141, 113, 4, 142, 114],
		      [3, 70, 44, 11, 71, 45],
		      [17, 47, 21, 4, 48, 22],
		      [9, 39, 13, 16, 40, 14],
		      [3, 135, 107, 5, 136, 108],
		      [3, 67, 41, 13, 68, 42],
		      [15, 54, 24, 5, 55, 25],
		      [15, 43, 15, 10, 44, 16],
		      [4, 144, 116, 4, 145, 117],
		      [17, 68, 42],
		      [17, 50, 22, 6, 51, 23],
		      [19, 46, 16, 6, 47, 17],
		      [2, 139, 111, 7, 140, 112],
		      [17, 74, 46],
		      [7, 54, 24, 16, 55, 25],
		      [34, 37, 13],
		      [4, 151, 121, 5, 152, 122],
		      [4, 75, 47, 14, 76, 48],
		      [11, 54, 24, 14, 55, 25],
		      [16, 45, 15, 14, 46, 16],
		      [6, 147, 117, 4, 148, 118],
		      [6, 73, 45, 14, 74, 46],
		      [11, 54, 24, 16, 55, 25],
		      [30, 46, 16, 2, 47, 17],
		      [8, 132, 106, 4, 133, 107],
		      [8, 75, 47, 13, 76, 48],
		      [7, 54, 24, 22, 55, 25],
		      [22, 45, 15, 13, 46, 16],
		      [10, 142, 114, 2, 143, 115],
		      [19, 74, 46, 4, 75, 47],
		      [28, 50, 22, 6, 51, 23],
		      [33, 46, 16, 4, 47, 17],
		      [8, 152, 122, 4, 153, 123],
		      [22, 73, 45, 3, 74, 46],
		      [8, 53, 23, 26, 54, 24],
		      [12, 45, 15, 28, 46, 16],
		      [3, 147, 117, 10, 148, 118],
		      [3, 73, 45, 23, 74, 46],
		      [4, 54, 24, 31, 55, 25],
		      [11, 45, 15, 31, 46, 16],
		      [7, 146, 116, 7, 147, 117],
		      [21, 73, 45, 7, 74, 46],
		      [1, 53, 23, 37, 54, 24],
		      [19, 45, 15, 26, 46, 16],
		      [5, 145, 115, 10, 146, 116],
		      [19, 75, 47, 10, 76, 48],
		      [15, 54, 24, 25, 55, 25],
		      [23, 45, 15, 25, 46, 16],
		      [13, 145, 115, 3, 146, 116],
		      [2, 74, 46, 29, 75, 47],
		      [42, 54, 24, 1, 55, 25],
		      [23, 45, 15, 28, 46, 16],
		      [17, 145, 115],
		      [10, 74, 46, 23, 75, 47],
		      [10, 54, 24, 35, 55, 25],
		      [19, 45, 15, 35, 46, 16],
		      [17, 145, 115, 1, 146, 116],
		      [14, 74, 46, 21, 75, 47],
		      [29, 54, 24, 19, 55, 25],
		      [11, 45, 15, 46, 46, 16],
		      [13, 145, 115, 6, 146, 116],
		      [14, 74, 46, 23, 75, 47],
		      [44, 54, 24, 7, 55, 25],
		      [59, 46, 16, 1, 47, 17],
		      [12, 151, 121, 7, 152, 122],
		      [12, 75, 47, 26, 76, 48],
		      [39, 54, 24, 14, 55, 25],
		      [22, 45, 15, 41, 46, 16],
		      [6, 151, 121, 14, 152, 122],
		      [6, 75, 47, 34, 76, 48],
		      [46, 54, 24, 10, 55, 25],
		      [2, 45, 15, 64, 46, 16],
		      [17, 152, 122, 4, 153, 123],
		      [29, 74, 46, 14, 75, 47],
		      [49, 54, 24, 10, 55, 25],
		      [24, 45, 15, 46, 46, 16],
		      [4, 152, 122, 18, 153, 123],
		      [13, 74, 46, 32, 75, 47],
		      [48, 54, 24, 14, 55, 25],
		      [42, 45, 15, 32, 46, 16],
		      [20, 147, 117, 4, 148, 118],
		      [40, 75, 47, 7, 76, 48],
		      [43, 54, 24, 22, 55, 25],
		      [10, 45, 15, 67, 46, 16],
		      [19, 148, 118, 6, 149, 119],
		      [18, 75, 47, 31, 76, 48],
		      [34, 54, 24, 34, 55, 25],
		      [20, 45, 15, 61, 46, 16]
		    ];
		    var qrRSBlock = function(totalCount, dataCount) {
		      var _this = {};
		      _this.totalCount = totalCount;
		      _this.dataCount = dataCount;
		      return _this;
		    };
		    var _this = {};
		    var getRsBlockTable = function(typeNumber, errorCorrectionLevel) {
		      switch(errorCorrectionLevel) {
		      case QRErrorCorrectionLevel.L :
		        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
		      case QRErrorCorrectionLevel.M :
		        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
		      case QRErrorCorrectionLevel.Q :
		        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
		      case QRErrorCorrectionLevel.H :
		        return RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
		      default :
		        return undefined;
		      }
		    };
		    _this.getRSBlocks = function(typeNumber, errorCorrectionLevel) {
		      var rsBlock = getRsBlockTable(typeNumber, errorCorrectionLevel);
		      if (typeof rsBlock == 'undefined') {
		        throw 'bad rs block @ typeNumber:' + typeNumber +
		            '/errorCorrectionLevel:' + errorCorrectionLevel;
		      }
		      var length = rsBlock.length / 3;
		      var list = [];
		      for (var i = 0; i < length; i += 1) {
		        var count = rsBlock[i * 3 + 0];
		        var totalCount = rsBlock[i * 3 + 1];
		        var dataCount = rsBlock[i * 3 + 2];
		        for (var j = 0; j < count; j += 1) {
		          list.push(qrRSBlock(totalCount, dataCount) );
		        }
		      }
		      return list;
		    };
		    return _this;
		  }();
		  var qrBitBuffer = function() {
		    var _buffer = [];
		    var _length = 0;
		    var _this = {};
		    _this.getBuffer = function() {
		      return _buffer;
		    };
		    _this.getAt = function(index) {
		      var bufIndex = Math.floor(index / 8);
		      return ( (_buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
		    };
		    _this.put = function(num, length) {
		      for (var i = 0; i < length; i += 1) {
		        _this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
		      }
		    };
		    _this.getLengthInBits = function() {
		      return _length;
		    };
		    _this.putBit = function(bit) {
		      var bufIndex = Math.floor(_length / 8);
		      if (_buffer.length <= bufIndex) {
		        _buffer.push(0);
		      }
		      if (bit) {
		        _buffer[bufIndex] |= (0x80 >>> (_length % 8) );
		      }
		      _length += 1;
		    };
		    return _this;
		  };
		  var qrNumber = function(data) {
		    var _mode = QRMode.MODE_NUMBER;
		    var _data = data;
		    var _this = {};
		    _this.getMode = function() {
		      return _mode;
		    };
		    _this.getLength = function(buffer) {
		      return _data.length;
		    };
		    _this.write = function(buffer) {
		      var data = _data;
		      var i = 0;
		      while (i + 2 < data.length) {
		        buffer.put(strToNum(data.substring(i, i + 3) ), 10);
		        i += 3;
		      }
		      if (i < data.length) {
		        if (data.length - i == 1) {
		          buffer.put(strToNum(data.substring(i, i + 1) ), 4);
		        } else if (data.length - i == 2) {
		          buffer.put(strToNum(data.substring(i, i + 2) ), 7);
		        }
		      }
		    };
		    var strToNum = function(s) {
		      var num = 0;
		      for (var i = 0; i < s.length; i += 1) {
		        num = num * 10 + chatToNum(s.charAt(i) );
		      }
		      return num;
		    };
		    var chatToNum = function(c) {
		      if ('0' <= c && c <= '9') {
		        return c.charCodeAt(0) - '0'.charCodeAt(0);
		      }
		      throw 'illegal char :' + c;
		    };
		    return _this;
		  };
		  var qrAlphaNum = function(data) {
		    var _mode = QRMode.MODE_ALPHA_NUM;
		    var _data = data;
		    var _this = {};
		    _this.getMode = function() {
		      return _mode;
		    };
		    _this.getLength = function(buffer) {
		      return _data.length;
		    };
		    _this.write = function(buffer) {
		      var s = _data;
		      var i = 0;
		      while (i + 1 < s.length) {
		        buffer.put(
		          getCode(s.charAt(i) ) * 45 +
		          getCode(s.charAt(i + 1) ), 11);
		        i += 2;
		      }
		      if (i < s.length) {
		        buffer.put(getCode(s.charAt(i) ), 6);
		      }
		    };
		    var getCode = function(c) {
		      if ('0' <= c && c <= '9') {
		        return c.charCodeAt(0) - '0'.charCodeAt(0);
		      } else if ('A' <= c && c <= 'Z') {
		        return c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
		      } else {
		        switch (c) {
		        case ' ' : return 36;
		        case '$' : return 37;
		        case '%' : return 38;
		        case '*' : return 39;
		        case '+' : return 40;
		        case '-' : return 41;
		        case '.' : return 42;
		        case '/' : return 43;
		        case ':' : return 44;
		        default :
		          throw 'illegal char :' + c;
		        }
		      }
		    };
		    return _this;
		  };
		  var qr8BitByte = function(data) {
		    var _mode = QRMode.MODE_8BIT_BYTE;
		    var _bytes = qrcode.stringToBytes(data);
		    var _this = {};
		    _this.getMode = function() {
		      return _mode;
		    };
		    _this.getLength = function(buffer) {
		      return _bytes.length;
		    };
		    _this.write = function(buffer) {
		      for (var i = 0; i < _bytes.length; i += 1) {
		        buffer.put(_bytes[i], 8);
		      }
		    };
		    return _this;
		  };
		  var qrKanji = function(data) {
		    var _mode = QRMode.MODE_KANJI;
		    var stringToBytes = qrcode.stringToBytesFuncs['SJIS'];
		    if (!stringToBytes) {
		      throw 'sjis not supported.';
		    }
		    !function(c, code) {
		      var test = stringToBytes(c);
		      if (test.length != 2 || ( (test[0] << 8) | test[1]) != code) {
		        throw 'sjis not supported.';
		      }
		    }('\u53cb', 0x9746);
		    var _bytes = stringToBytes(data);
		    var _this = {};
		    _this.getMode = function() {
		      return _mode;
		    };
		    _this.getLength = function(buffer) {
		      return ~~(_bytes.length / 2);
		    };
		    _this.write = function(buffer) {
		      var data = _bytes;
		      var i = 0;
		      while (i + 1 < data.length) {
		        var c = ( (0xff & data[i]) << 8) | (0xff & data[i + 1]);
		        if (0x8140 <= c && c <= 0x9FFC) {
		          c -= 0x8140;
		        } else if (0xE040 <= c && c <= 0xEBBF) {
		          c -= 0xC140;
		        } else {
		          throw 'illegal char at ' + (i + 1) + '/' + c;
		        }
		        c = ( (c >>> 8) & 0xff) * 0xC0 + (c & 0xff);
		        buffer.put(c, 13);
		        i += 2;
		      }
		      if (i < data.length) {
		        throw 'illegal char at ' + (i + 1);
		      }
		    };
		    return _this;
		  };
		  var byteArrayOutputStream = function() {
		    var _bytes = [];
		    var _this = {};
		    _this.writeByte = function(b) {
		      _bytes.push(b & 0xff);
		    };
		    _this.writeShort = function(i) {
		      _this.writeByte(i);
		      _this.writeByte(i >>> 8);
		    };
		    _this.writeBytes = function(b, off, len) {
		      off = off || 0;
		      len = len || b.length;
		      for (var i = 0; i < len; i += 1) {
		        _this.writeByte(b[i + off]);
		      }
		    };
		    _this.writeString = function(s) {
		      for (var i = 0; i < s.length; i += 1) {
		        _this.writeByte(s.charCodeAt(i) );
		      }
		    };
		    _this.toByteArray = function() {
		      return _bytes;
		    };
		    _this.toString = function() {
		      var s = '';
		      s += '[';
		      for (var i = 0; i < _bytes.length; i += 1) {
		        if (i > 0) {
		          s += ',';
		        }
		        s += _bytes[i];
		      }
		      s += ']';
		      return s;
		    };
		    return _this;
		  };
		  var base64EncodeOutputStream = function() {
		    var _buffer = 0;
		    var _buflen = 0;
		    var _length = 0;
		    var _base64 = '';
		    var _this = {};
		    var writeEncoded = function(b) {
		      _base64 += String.fromCharCode(encode(b & 0x3f) );
		    };
		    var encode = function(n) {
		      if (n < 0) ; else if (n < 26) {
		        return 0x41 + n;
		      } else if (n < 52) {
		        return 0x61 + (n - 26);
		      } else if (n < 62) {
		        return 0x30 + (n - 52);
		      } else if (n == 62) {
		        return 0x2b;
		      } else if (n == 63) {
		        return 0x2f;
		      }
		      throw 'n:' + n;
		    };
		    _this.writeByte = function(n) {
		      _buffer = (_buffer << 8) | (n & 0xff);
		      _buflen += 8;
		      _length += 1;
		      while (_buflen >= 6) {
		        writeEncoded(_buffer >>> (_buflen - 6) );
		        _buflen -= 6;
		      }
		    };
		    _this.flush = function() {
		      if (_buflen > 0) {
		        writeEncoded(_buffer << (6 - _buflen) );
		        _buffer = 0;
		        _buflen = 0;
		      }
		      if (_length % 3 != 0) {
		        var padlen = 3 - _length % 3;
		        for (var i = 0; i < padlen; i += 1) {
		          _base64 += '=';
		        }
		      }
		    };
		    _this.toString = function() {
		      return _base64;
		    };
		    return _this;
		  };
		  var base64DecodeInputStream = function(str) {
		    var _str = str;
		    var _pos = 0;
		    var _buffer = 0;
		    var _buflen = 0;
		    var _this = {};
		    _this.read = function() {
		      while (_buflen < 8) {
		        if (_pos >= _str.length) {
		          if (_buflen == 0) {
		            return -1;
		          }
		          throw 'unexpected end of file./' + _buflen;
		        }
		        var c = _str.charAt(_pos);
		        _pos += 1;
		        if (c == '=') {
		          _buflen = 0;
		          return -1;
		        } else if (c.match(/^\s$/) ) {
		          continue;
		        }
		        _buffer = (_buffer << 6) | decode(c.charCodeAt(0) );
		        _buflen += 6;
		      }
		      var n = (_buffer >>> (_buflen - 8) ) & 0xff;
		      _buflen -= 8;
		      return n;
		    };
		    var decode = function(c) {
		      if (0x41 <= c && c <= 0x5a) {
		        return c - 0x41;
		      } else if (0x61 <= c && c <= 0x7a) {
		        return c - 0x61 + 26;
		      } else if (0x30 <= c && c <= 0x39) {
		        return c - 0x30 + 52;
		      } else if (c == 0x2b) {
		        return 62;
		      } else if (c == 0x2f) {
		        return 63;
		      } else {
		        throw 'c:' + c;
		      }
		    };
		    return _this;
		  };
		  var gifImage = function(width, height) {
		    var _width = width;
		    var _height = height;
		    var _data = new Array(width * height);
		    var _this = {};
		    _this.setPixel = function(x, y, pixel) {
		      _data[y * _width + x] = pixel;
		    };
		    _this.write = function(out) {
		      out.writeString('GIF87a');
		      out.writeShort(_width);
		      out.writeShort(_height);
		      out.writeByte(0x80);
		      out.writeByte(0);
		      out.writeByte(0);
		      out.writeByte(0x00);
		      out.writeByte(0x00);
		      out.writeByte(0x00);
		      out.writeByte(0xff);
		      out.writeByte(0xff);
		      out.writeByte(0xff);
		      out.writeString(',');
		      out.writeShort(0);
		      out.writeShort(0);
		      out.writeShort(_width);
		      out.writeShort(_height);
		      out.writeByte(0);
		      var lzwMinCodeSize = 2;
		      var raster = getLZWRaster(lzwMinCodeSize);
		      out.writeByte(lzwMinCodeSize);
		      var offset = 0;
		      while (raster.length - offset > 255) {
		        out.writeByte(255);
		        out.writeBytes(raster, offset, 255);
		        offset += 255;
		      }
		      out.writeByte(raster.length - offset);
		      out.writeBytes(raster, offset, raster.length - offset);
		      out.writeByte(0x00);
		      out.writeString(';');
		    };
		    var bitOutputStream = function(out) {
		      var _out = out;
		      var _bitLength = 0;
		      var _bitBuffer = 0;
		      var _this = {};
		      _this.write = function(data, length) {
		        if ( (data >>> length) != 0) {
		          throw 'length over';
		        }
		        while (_bitLength + length >= 8) {
		          _out.writeByte(0xff & ( (data << _bitLength) | _bitBuffer) );
		          length -= (8 - _bitLength);
		          data >>>= (8 - _bitLength);
		          _bitBuffer = 0;
		          _bitLength = 0;
		        }
		        _bitBuffer = (data << _bitLength) | _bitBuffer;
		        _bitLength = _bitLength + length;
		      };
		      _this.flush = function() {
		        if (_bitLength > 0) {
		          _out.writeByte(_bitBuffer);
		        }
		      };
		      return _this;
		    };
		    var getLZWRaster = function(lzwMinCodeSize) {
		      var clearCode = 1 << lzwMinCodeSize;
		      var endCode = (1 << lzwMinCodeSize) + 1;
		      var bitLength = lzwMinCodeSize + 1;
		      var table = lzwTable();
		      for (var i = 0; i < clearCode; i += 1) {
		        table.add(String.fromCharCode(i) );
		      }
		      table.add(String.fromCharCode(clearCode) );
		      table.add(String.fromCharCode(endCode) );
		      var byteOut = byteArrayOutputStream();
		      var bitOut = bitOutputStream(byteOut);
		      bitOut.write(clearCode, bitLength);
		      var dataIndex = 0;
		      var s = String.fromCharCode(_data[dataIndex]);
		      dataIndex += 1;
		      while (dataIndex < _data.length) {
		        var c = String.fromCharCode(_data[dataIndex]);
		        dataIndex += 1;
		        if (table.contains(s + c) ) {
		          s = s + c;
		        } else {
		          bitOut.write(table.indexOf(s), bitLength);
		          if (table.size() < 0xfff) {
		            if (table.size() == (1 << bitLength) ) {
		              bitLength += 1;
		            }
		            table.add(s + c);
		          }
		          s = c;
		        }
		      }
		      bitOut.write(table.indexOf(s), bitLength);
		      bitOut.write(endCode, bitLength);
		      bitOut.flush();
		      return byteOut.toByteArray();
		    };
		    var lzwTable = function() {
		      var _map = {};
		      var _size = 0;
		      var _this = {};
		      _this.add = function(key) {
		        if (_this.contains(key) ) {
		          throw 'dup key:' + key;
		        }
		        _map[key] = _size;
		        _size += 1;
		      };
		      _this.size = function() {
		        return _size;
		      };
		      _this.indexOf = function(key) {
		        return _map[key];
		      };
		      _this.contains = function(key) {
		        return typeof _map[key] != 'undefined';
		      };
		      return _this;
		    };
		    return _this;
		  };
		  var createDataURL = function(width, height, getPixel) {
		    var gif = gifImage(width, height);
		    for (var y = 0; y < height; y += 1) {
		      for (var x = 0; x < width; x += 1) {
		        gif.setPixel(x, y, getPixel(x, y) );
		      }
		    }
		    var b = byteArrayOutputStream();
		    gif.write(b);
		    var base64 = base64EncodeOutputStream();
		    var bytes = b.toByteArray();
		    for (var i = 0; i < bytes.length; i += 1) {
		      base64.writeByte(bytes[i]);
		    }
		    base64.flush();
		    return 'data:image/gif;base64,' + base64;
		  };
		  return qrcode;
		}();
		!function() {
		  qrcode.stringToBytesFuncs['UTF-8'] = function(s) {
		    function toUTF8Array(str) {
		      var utf8 = [];
		      for (var i=0; i < str.length; i++) {
		        var charcode = str.charCodeAt(i);
		        if (charcode < 0x80) utf8.push(charcode);
		        else if (charcode < 0x800) {
		          utf8.push(0xc0 | (charcode >> 6),
		              0x80 | (charcode & 0x3f));
		        }
		        else if (charcode < 0xd800 || charcode >= 0xe000) {
		          utf8.push(0xe0 | (charcode >> 12),
		              0x80 | ((charcode>>6) & 0x3f),
		              0x80 | (charcode & 0x3f));
		        }
		        else {
		          i++;
		          charcode = 0x10000 + (((charcode & 0x3ff)<<10)
		            | (str.charCodeAt(i) & 0x3ff));
		          utf8.push(0xf0 | (charcode >>18),
		              0x80 | ((charcode>>12) & 0x3f),
		              0x80 | ((charcode>>6) & 0x3f),
		              0x80 | (charcode & 0x3f));
		        }
		      }
		      return utf8;
		    }
		    return toUTF8Array(s);
		  };
		}();
		(function (factory) {
		  {
		      module.exports = factory();
		  }
		}(function () {
		    return qrcode;
		}));
	} (qrcode$1));
	const _qrcode = qrcode$1.exports;

	const qrcode = _qrcode;
	qrcode.stringToBytes = data => data;

	const ADDRESS_PREFIX = 'substrate';
	const SEED_PREFIX = 'secret';
	const FRAME_SIZE = 1024;
	const SUBSTRATE_ID = new Uint8Array([0x53]);
	const CRYPTO_SR25519 = new Uint8Array([0x01]);

	const MULTIPART = new Uint8Array([0]);
	function encodeNumber(value) {
	  return new Uint8Array([value >> 8, value & 0xff]);
	}
	function encodeString(value) {
	  const u8a = new Uint8Array(value.length);
	  for (let i = 0; i < value.length; i++) {
	    u8a[i] = value.charCodeAt(i);
	  }
	  return u8a;
	}
	function createAddressPayload(address, genesisHash) {
	  return encodeString(`${ADDRESS_PREFIX}:${address}:${genesisHash}`);
	}
	function createSignPayload(address, cmd, payload, genesisHash) {
	  return util.u8aConcat(SUBSTRATE_ID, CRYPTO_SR25519, new Uint8Array([cmd]), utilCrypto.decodeAddress(address), util.u8aToU8a(payload), util.u8aToU8a(genesisHash));
	}
	function createFrames(input) {
	  const frames = [];
	  let idx = 0;
	  while (idx < input.length) {
	    frames.push(input.subarray(idx, idx + FRAME_SIZE));
	    idx += FRAME_SIZE;
	  }
	  return frames.map((frame, index) => util.u8aConcat(MULTIPART, encodeNumber(frames.length), encodeNumber(index), frame));
	}
	function createImgSize(size) {
	  if (!size) {
	    return {
	      height: 'auto',
	      width: '100%'
	    };
	  }
	  const height = util.isString(size) ? size : `${size}px`;
	  return {
	    height,
	    width: height
	  };
	}

	var jsxRuntime = {exports: {}};

	var reactJsxRuntime_production_min = {};

	/**
	 * @license React
	 * react-jsx-runtime.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var hasRequiredReactJsxRuntime_production_min;
	function requireReactJsxRuntime_production_min () {
		if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
		hasRequiredReactJsxRuntime_production_min = 1;
	var f=r__default["default"],k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
		function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
		return reactJsxRuntime_production_min;
	}

	var reactJsxRuntime_development = {};

	/**
	 * @license React
	 * react-jsx-runtime.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var hasRequiredReactJsxRuntime_development;
	function requireReactJsxRuntime_development () {
		if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
		hasRequiredReactJsxRuntime_development = 1;
		if (process.env.NODE_ENV !== "production") {
		  (function() {
		var React = r__default["default"];
		var REACT_ELEMENT_TYPE = Symbol.for('react.element');
		var REACT_PORTAL_TYPE = Symbol.for('react.portal');
		var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
		var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
		var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
		var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
		var REACT_CONTEXT_TYPE = Symbol.for('react.context');
		var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
		var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
		var REACT_MEMO_TYPE = Symbol.for('react.memo');
		var REACT_LAZY_TYPE = Symbol.for('react.lazy');
		var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
		var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = '@@iterator';
		function getIteratorFn(maybeIterable) {
		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
		    return null;
		  }
		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
		  if (typeof maybeIterator === 'function') {
		    return maybeIterator;
		  }
		  return null;
		}
		var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
		function error(format) {
		  {
		    {
		      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		      }
		      printWarning('error', format, args);
		    }
		  }
		}
		function printWarning(level, format, args) {
		  {
		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		    var stack = ReactDebugCurrentFrame.getStackAddendum();
		    if (stack !== '') {
		      format += '%s';
		      args = args.concat([stack]);
		    }
		    var argsWithFormat = args.map(function (item) {
		      return String(item);
		    });
		    argsWithFormat.unshift('Warning: ' + format);
		    Function.prototype.apply.call(console[level], console, argsWithFormat);
		  }
		}
		var enableScopeAPI = false;
		var enableCacheElement = false;
		var enableTransitionTracing = false;
		var enableLegacyHidden = false;
		var enableDebugTracing = false;
		var REACT_MODULE_REFERENCE;
		{
		  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		}
		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  }
		  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
		    return true;
		  }
		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE ||
		    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		      return true;
		    }
		  }
		  return false;
		}
		function getWrappedName(outerType, innerType, wrapperName) {
		  var displayName = outerType.displayName;
		  if (displayName) {
		    return displayName;
		  }
		  var functionName = innerType.displayName || innerType.name || '';
		  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		}
		function getContextName(type) {
		  return type.displayName || 'Context';
		}
		function getComponentNameFromType(type) {
		  if (type == null) {
		    return null;
		  }
		  {
		    if (typeof type.tag === 'number') {
		      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		    }
		  }
		  if (typeof type === 'function') {
		    return type.displayName || type.name || null;
		  }
		  if (typeof type === 'string') {
		    return type;
		  }
		  switch (type) {
		    case REACT_FRAGMENT_TYPE:
		      return 'Fragment';
		    case REACT_PORTAL_TYPE:
		      return 'Portal';
		    case REACT_PROFILER_TYPE:
		      return 'Profiler';
		    case REACT_STRICT_MODE_TYPE:
		      return 'StrictMode';
		    case REACT_SUSPENSE_TYPE:
		      return 'Suspense';
		    case REACT_SUSPENSE_LIST_TYPE:
		      return 'SuspenseList';
		  }
		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_CONTEXT_TYPE:
		        var context = type;
		        return getContextName(context) + '.Consumer';
		      case REACT_PROVIDER_TYPE:
		        var provider = type;
		        return getContextName(provider._context) + '.Provider';
		      case REACT_FORWARD_REF_TYPE:
		        return getWrappedName(type, type.render, 'ForwardRef');
		      case REACT_MEMO_TYPE:
		        var outerName = type.displayName || null;
		        if (outerName !== null) {
		          return outerName;
		        }
		        return getComponentNameFromType(type.type) || 'Memo';
		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;
		          try {
		            return getComponentNameFromType(init(payload));
		          } catch (x) {
		            return null;
		          }
		        }
		    }
		  }
		  return null;
		}
		var assign = Object.assign;
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;
		function disabledLog() {}
		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
		  {
		    if (disabledDepth === 0) {
		      prevLog = console.log;
		      prevInfo = console.info;
		      prevWarn = console.warn;
		      prevError = console.error;
		      prevGroup = console.group;
		      prevGroupCollapsed = console.groupCollapsed;
		      prevGroupEnd = console.groupEnd;
		      var props = {
		        configurable: true,
		        enumerable: true,
		        value: disabledLog,
		        writable: true
		      };
		      Object.defineProperties(console, {
		        info: props,
		        log: props,
		        warn: props,
		        error: props,
		        group: props,
		        groupCollapsed: props,
		        groupEnd: props
		      });
		    }
		    disabledDepth++;
		  }
		}
		function reenableLogs() {
		  {
		    disabledDepth--;
		    if (disabledDepth === 0) {
		      var props = {
		        configurable: true,
		        enumerable: true,
		        writable: true
		      };
		      Object.defineProperties(console, {
		        log: assign({}, props, {
		          value: prevLog
		        }),
		        info: assign({}, props, {
		          value: prevInfo
		        }),
		        warn: assign({}, props, {
		          value: prevWarn
		        }),
		        error: assign({}, props, {
		          value: prevError
		        }),
		        group: assign({}, props, {
		          value: prevGroup
		        }),
		        groupCollapsed: assign({}, props, {
		          value: prevGroupCollapsed
		        }),
		        groupEnd: assign({}, props, {
		          value: prevGroupEnd
		        })
		      });
		    }
		    if (disabledDepth < 0) {
		      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		    }
		  }
		}
		var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
		  {
		    if (prefix === undefined) {
		      try {
		        throw Error();
		      } catch (x) {
		        var match = x.stack.trim().match(/\n( *(at )?)/);
		        prefix = match && match[1] || '';
		      }
		    }
		    return '\n' + prefix + name;
		  }
		}
		var reentry = false;
		var componentFrameCache;
		{
		  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		  componentFrameCache = new PossiblyWeakMap();
		}
		function describeNativeComponentFrame(fn, construct) {
		  if ( !fn || reentry) {
		    return '';
		  }
		  {
		    var frame = componentFrameCache.get(fn);
		    if (frame !== undefined) {
		      return frame;
		    }
		  }
		  var control;
		  reentry = true;
		  var previousPrepareStackTrace = Error.prepareStackTrace;
		  Error.prepareStackTrace = undefined;
		  var previousDispatcher;
		  {
		    previousDispatcher = ReactCurrentDispatcher.current;
		    ReactCurrentDispatcher.current = null;
		    disableLogs();
		  }
		  try {
		    if (construct) {
		      var Fake = function () {
		        throw Error();
		      };
		      Object.defineProperty(Fake.prototype, 'props', {
		        set: function () {
		          throw Error();
		        }
		      });
		      if (typeof Reflect === 'object' && Reflect.construct) {
		        try {
		          Reflect.construct(Fake, []);
		        } catch (x) {
		          control = x;
		        }
		        Reflect.construct(fn, [], Fake);
		      } else {
		        try {
		          Fake.call();
		        } catch (x) {
		          control = x;
		        }
		        fn.call(Fake.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (x) {
		        control = x;
		      }
		      fn();
		    }
		  } catch (sample) {
		    if (sample && control && typeof sample.stack === 'string') {
		      var sampleLines = sample.stack.split('\n');
		      var controlLines = control.stack.split('\n');
		      var s = sampleLines.length - 1;
		      var c = controlLines.length - 1;
		      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		        c--;
		      }
		      for (; s >= 1 && c >= 0; s--, c--) {
		        if (sampleLines[s] !== controlLines[c]) {
		          if (s !== 1 || c !== 1) {
		            do {
		              s--;
		              c--;
		              if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
		                if (fn.displayName && _frame.includes('<anonymous>')) {
		                  _frame = _frame.replace('<anonymous>', fn.displayName);
		                }
		                {
		                  if (typeof fn === 'function') {
		                    componentFrameCache.set(fn, _frame);
		                  }
		                }
		                return _frame;
		              }
		            } while (s >= 1 && c >= 0);
		          }
		          break;
		        }
		      }
		    }
		  } finally {
		    reentry = false;
		    {
		      ReactCurrentDispatcher.current = previousDispatcher;
		      reenableLogs();
		    }
		    Error.prepareStackTrace = previousPrepareStackTrace;
		  }
		  var name = fn ? fn.displayName || fn.name : '';
		  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
		  {
		    if (typeof fn === 'function') {
		      componentFrameCache.set(fn, syntheticFrame);
		    }
		  }
		  return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
		  {
		    return describeNativeComponentFrame(fn, false);
		  }
		}
		function shouldConstruct(Component) {
		  var prototype = Component.prototype;
		  return !!(prototype && prototype.isReactComponent);
		}
		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
		  if (type == null) {
		    return '';
		  }
		  if (typeof type === 'function') {
		    {
		      return describeNativeComponentFrame(type, shouldConstruct(type));
		    }
		  }
		  if (typeof type === 'string') {
		    return describeBuiltInComponentFrame(type);
		  }
		  switch (type) {
		    case REACT_SUSPENSE_TYPE:
		      return describeBuiltInComponentFrame('Suspense');
		    case REACT_SUSPENSE_LIST_TYPE:
		      return describeBuiltInComponentFrame('SuspenseList');
		  }
		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_FORWARD_REF_TYPE:
		        return describeFunctionComponentFrame(type.render);
		      case REACT_MEMO_TYPE:
		        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;
		          try {
		            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		          } catch (x) {}
		        }
		    }
		  }
		  return '';
		}
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		function setCurrentlyValidatingElement(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame.setExtraStackFrame(null);
		    }
		  }
		}
		function checkPropTypes(typeSpecs, values, location, componentName, element) {
		  {
		    var has = Function.call.bind(hasOwnProperty);
		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error$1 = void 0;
		        try {
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		            err.name = 'Invariant Violation';
		            throw err;
		          }
		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		        } catch (ex) {
		          error$1 = ex;
		        }
		        if (error$1 && !(error$1 instanceof Error)) {
		          setCurrentlyValidatingElement(element);
		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);
		          setCurrentlyValidatingElement(null);
		        }
		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		          loggedTypeFailures[error$1.message] = true;
		          setCurrentlyValidatingElement(element);
		          error('Failed %s type: %s', location, error$1.message);
		          setCurrentlyValidatingElement(null);
		        }
		      }
		    }
		  }
		}
		var isArrayImpl = Array.isArray;
		function isArray(a) {
		  return isArrayImpl(a);
		}
		function typeName(value) {
		  {
		    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		    return type;
		  }
		}
		function willCoercionThrow(value) {
		  {
		    try {
		      testStringCoercion(value);
		      return false;
		    } catch (e) {
		      return true;
		    }
		  }
		}
		function testStringCoercion(value) {
		  return '' + value;
		}
		function checkKeyStringCoercion(value) {
		  {
		    if (willCoercionThrow(value)) {
		      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));
		      return testStringCoercion(value);
		    }
		  }
		}
		var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
		var RESERVED_PROPS = {
		  key: true,
		  ref: true,
		  __self: true,
		  __source: true
		};
		var specialPropKeyWarningShown;
		var specialPropRefWarningShown;
		var didWarnAboutStringRefs;
		{
		  didWarnAboutStringRefs = {};
		}
		function hasValidRef(config) {
		  {
		    if (hasOwnProperty.call(config, 'ref')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }
		  return config.ref !== undefined;
		}
		function hasValidKey(config) {
		  {
		    if (hasOwnProperty.call(config, 'key')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }
		  return config.key !== undefined;
		}
		function warnIfStringRefCannotBeAutoConverted(config, self) {
		  {
		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
		      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
		      if (!didWarnAboutStringRefs[componentName]) {
		        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
		        didWarnAboutStringRefs[componentName] = true;
		      }
		    }
		  }
		}
		function defineKeyPropWarningGetter(props, displayName) {
		  {
		    var warnAboutAccessingKey = function () {
		      if (!specialPropKeyWarningShown) {
		        specialPropKeyWarningShown = true;
		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    };
		    warnAboutAccessingKey.isReactWarning = true;
		    Object.defineProperty(props, 'key', {
		      get: warnAboutAccessingKey,
		      configurable: true
		    });
		  }
		}
		function defineRefPropWarningGetter(props, displayName) {
		  {
		    var warnAboutAccessingRef = function () {
		      if (!specialPropRefWarningShown) {
		        specialPropRefWarningShown = true;
		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    };
		    warnAboutAccessingRef.isReactWarning = true;
		    Object.defineProperty(props, 'ref', {
		      get: warnAboutAccessingRef,
		      configurable: true
		    });
		  }
		}
		var ReactElement = function (type, key, ref, self, source, owner, props) {
		  var element = {
		    $$typeof: REACT_ELEMENT_TYPE,
		    type: type,
		    key: key,
		    ref: ref,
		    props: props,
		    _owner: owner
		  };
		  {
		    element._store = {};
		    Object.defineProperty(element._store, 'validated', {
		      configurable: false,
		      enumerable: false,
		      writable: true,
		      value: false
		    });
		    Object.defineProperty(element, '_self', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: self
		    });
		    Object.defineProperty(element, '_source', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: source
		    });
		    if (Object.freeze) {
		      Object.freeze(element.props);
		      Object.freeze(element);
		    }
		  }
		  return element;
		};
		function jsxDEV(type, config, maybeKey, source, self) {
		  {
		    var propName;
		    var props = {};
		    var key = null;
		    var ref = null;
		    if (maybeKey !== undefined) {
		      {
		        checkKeyStringCoercion(maybeKey);
		      }
		      key = '' + maybeKey;
		    }
		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }
		      key = '' + config.key;
		    }
		    if (hasValidRef(config)) {
		      ref = config.ref;
		      warnIfStringRefCannotBeAutoConverted(config, self);
		    }
		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        props[propName] = config[propName];
		      }
		    }
		    if (type && type.defaultProps) {
		      var defaultProps = type.defaultProps;
		      for (propName in defaultProps) {
		        if (props[propName] === undefined) {
		          props[propName] = defaultProps[propName];
		        }
		      }
		    }
		    if (key || ref) {
		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
		      if (key) {
		        defineKeyPropWarningGetter(props, displayName);
		      }
		      if (ref) {
		        defineRefPropWarningGetter(props, displayName);
		      }
		    }
		    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		  }
		}
		var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
		function setCurrentlyValidatingElement$1(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		    }
		  }
		}
		var propTypesMisspellWarningShown;
		{
		  propTypesMisspellWarningShown = false;
		}
		function isValidElement(object) {
		  {
		    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		  }
		}
		function getDeclarationErrorAddendum() {
		  {
		    if (ReactCurrentOwner$1.current) {
		      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
		      if (name) {
		        return '\n\nCheck the render method of `' + name + '`.';
		      }
		    }
		    return '';
		  }
		}
		function getSourceInfoErrorAddendum(source) {
		  {
		    if (source !== undefined) {
		      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		      var lineNumber = source.lineNumber;
		      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		    }
		    return '';
		  }
		}
		var ownerHasKeyUseWarning = {};
		function getCurrentComponentErrorInfo(parentType) {
		  {
		    var info = getDeclarationErrorAddendum();
		    if (!info) {
		      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
		      if (parentName) {
		        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		      }
		    }
		    return info;
		  }
		}
		function validateExplicitKey(element, parentType) {
		  {
		    if (!element._store || element._store.validated || element.key != null) {
		      return;
		    }
		    element._store.validated = true;
		    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
		    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		      return;
		    }
		    ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
		    var childOwner = '';
		    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
		      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		    }
		    setCurrentlyValidatingElement$1(element);
		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
		    setCurrentlyValidatingElement$1(null);
		  }
		}
		function validateChildKeys(node, parentType) {
		  {
		    if (typeof node !== 'object') {
		      return;
		    }
		    if (isArray(node)) {
		      for (var i = 0; i < node.length; i++) {
		        var child = node[i];
		        if (isValidElement(child)) {
		          validateExplicitKey(child, parentType);
		        }
		      }
		    } else if (isValidElement(node)) {
		      if (node._store) {
		        node._store.validated = true;
		      }
		    } else if (node) {
		      var iteratorFn = getIteratorFn(node);
		      if (typeof iteratorFn === 'function') {
		        if (iteratorFn !== node.entries) {
		          var iterator = iteratorFn.call(node);
		          var step;
		          while (!(step = iterator.next()).done) {
		            if (isValidElement(step.value)) {
		              validateExplicitKey(step.value, parentType);
		            }
		          }
		        }
		      }
		    }
		  }
		}
		function validatePropTypes(element) {
		  {
		    var type = element.type;
		    if (type === null || type === undefined || typeof type === 'string') {
		      return;
		    }
		    var propTypes;
		    if (typeof type === 'function') {
		      propTypes = type.propTypes;
		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE ||
		    type.$$typeof === REACT_MEMO_TYPE)) {
		      propTypes = type.propTypes;
		    } else {
		      return;
		    }
		    if (propTypes) {
		      var name = getComponentNameFromType(type);
		      checkPropTypes(propTypes, element.props, 'prop', name, element);
		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		      propTypesMisspellWarningShown = true;
		      var _name = getComponentNameFromType(type);
		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		    }
		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		    }
		  }
		}
		function validateFragmentProps(fragment) {
		  {
		    var keys = Object.keys(fragment.props);
		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];
		      if (key !== 'children' && key !== 'key') {
		        setCurrentlyValidatingElement$1(fragment);
		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);
		        setCurrentlyValidatingElement$1(null);
		        break;
		      }
		    }
		    if (fragment.ref !== null) {
		      setCurrentlyValidatingElement$1(fragment);
		      error('Invalid attribute `ref` supplied to `React.Fragment`.');
		      setCurrentlyValidatingElement$1(null);
		    }
		  }
		}
		function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
		  {
		    var validType = isValidElementType(type);
		    if (!validType) {
		      var info = '';
		      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		      }
		      var sourceInfo = getSourceInfoErrorAddendum(source);
		      if (sourceInfo) {
		        info += sourceInfo;
		      } else {
		        info += getDeclarationErrorAddendum();
		      }
		      var typeString;
		      if (type === null) {
		        typeString = 'null';
		      } else if (isArray(type)) {
		        typeString = 'array';
		      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		        info = ' Did you accidentally export a JSX literal instead of a component?';
		      } else {
		        typeString = typeof type;
		      }
		      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		    }
		    var element = jsxDEV(type, props, key, source, self);
		    if (element == null) {
		      return element;
		    }
		    if (validType) {
		      var children = props.children;
		      if (children !== undefined) {
		        if (isStaticChildren) {
		          if (isArray(children)) {
		            for (var i = 0; i < children.length; i++) {
		              validateChildKeys(children[i], type);
		            }
		            if (Object.freeze) {
		              Object.freeze(children);
		            }
		          } else {
		            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
		          }
		        } else {
		          validateChildKeys(children, type);
		        }
		      }
		    }
		    if (type === REACT_FRAGMENT_TYPE) {
		      validateFragmentProps(element);
		    } else {
		      validatePropTypes(element);
		    }
		    return element;
		  }
		}
		function jsxWithValidationStatic(type, props, key) {
		  {
		    return jsxWithValidation(type, props, key, true);
		  }
		}
		function jsxWithValidationDynamic(type, props, key) {
		  {
		    return jsxWithValidation(type, props, key, false);
		  }
		}
		var jsx =  jsxWithValidationDynamic ;
		var jsxs =  jsxWithValidationStatic ;
		reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
		reactJsxRuntime_development.jsx = jsx;
		reactJsxRuntime_development.jsxs = jsxs;
		  })();
		}
		return reactJsxRuntime_development;
	}

	(function (module) {
		if (process.env.NODE_ENV === 'production') {
		  module.exports = requireReactJsxRuntime_production_min();
		} else {
		  module.exports = requireReactJsxRuntime_development();
		}
	} (jsxRuntime));
	getDefaultExportFromCjs(jsxRuntime.exports);

	const DEFAULT_FRAME_DELAY = 2750;
	const TIMER_INC = 500;
	function getDataUrl(value) {
	  const qr = qrcode(0, 'M');
	  qr.addData(value, 'Byte');
	  qr.make();
	  return qr.createDataURL(16, 0);
	}
	function Display({
	  className,
	  size,
	  skipEncoding,
	  style,
	  timerDelay = DEFAULT_FRAME_DELAY,
	  value
	}) {
	  const [{
	    image
	  }, setFrameState] = r.useState({
	    frameIdx: 0,
	    frames: [],
	    image: null,
	    valueHash: null
	  });
	  const timerRef = r.useRef({
	    timerDelay,
	    timerId: null
	  });
	  const containerStyle = r.useMemo(() => createImgSize(size), [size]);
	  r.useEffect(() => {
	    const nextFrame = () => setFrameState(state => {
	      if (state.frames.length <= 1) {
	        return state;
	      }
	      let frameIdx = state.frameIdx + 1;
	      if (frameIdx === state.frames.length) {
	        frameIdx = 0;
	        timerRef.current.timerDelay = timerRef.current.timerDelay + TIMER_INC;
	      }
	      const newState = util.objectSpread({}, state, {
	        frameIdx,
	        image: getDataUrl(state.frames[frameIdx])
	      });
	      timerRef.current.timerId = setTimeout(nextFrame, timerRef.current.timerDelay);
	      return newState;
	    });
	    timerRef.current.timerId = window.setTimeout(nextFrame, timerRef.current.timerDelay);
	    return () => {
	      timerRef.current.timerId && clearTimeout(timerRef.current.timerId);
	    };
	  }, []);
	  r.useEffect(() => {
	    setFrameState(state => {
	      const valueHash = utilCrypto.xxhashAsHex(value);
	      if (valueHash === state.valueHash) {
	        return state;
	      }
	      const frames = skipEncoding ? [value] : createFrames(value);
	      return {
	        frameIdx: 0,
	        frames,
	        image: getDataUrl(frames[0]),
	        valueHash
	      };
	    });
	  }, [skipEncoding, value]);
	  if (!image) {
	    return null;
	  }
	  return jsxRuntime.exports.jsx("div", {
	    className: className,
	    style: containerStyle,
	    children: jsxRuntime.exports.jsx("div", {
	      className: "ui--qr-Display",
	      style: style,
	      children: jsxRuntime.exports.jsx("img", {
	        src: image
	      })
	    })
	  });
	}
	const QrDisplay = r__default["default"].memo(He(Display).withConfig({
	  displayName: "Display__QrDisplay",
	  componentId: "sc-f0xthb-0"
	})([".ui--qr-Display{height:100%;width:100%;img,svg{background:white;height:auto !important;max-height:100%;max-width:100%;width:auto !important;}}"]));

	function DisplayAddress({
	  address,
	  className,
	  genesisHash,
	  size,
	  style,
	  timerDelay
	}) {
	  const data = r.useMemo(() => createAddressPayload(address, genesisHash), [address, genesisHash]);
	  if (!data) {
	    return null;
	  }
	  return jsxRuntime.exports.jsx(QrDisplay, {
	    className: className,
	    size: size,
	    skipEncoding: true,
	    style: style,
	    timerDelay: timerDelay,
	    value: data
	  });
	}
	const QrDisplayAddress = r__default["default"].memo(DisplayAddress);

	function DisplayPayload({
	  address,
	  className,
	  cmd,
	  genesisHash,
	  payload,
	  size,
	  style,
	  timerDelay
	}) {
	  const data = r.useMemo(() => createSignPayload(address, cmd, payload, genesisHash), [address, cmd, payload, genesisHash]);
	  if (!data) {
	    return null;
	  }
	  return jsxRuntime.exports.jsx(QrDisplay, {
	    className: className,
	    size: size,
	    style: style,
	    timerDelay: timerDelay,
	    value: data
	  });
	}
	const QrDisplayPayload = r__default["default"].memo(DisplayPayload);

	var propTypes = {exports: {}};

	var reactIs = {exports: {}};

	var reactIs_production_min = {};

	/** @license React v16.13.1
	 * react-is.production.min.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var hasRequiredReactIs_production_min;
	function requireReactIs_production_min () {
		if (hasRequiredReactIs_production_min) return reactIs_production_min;
		hasRequiredReactIs_production_min = 1;
	var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
		Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
		function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
		reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
		reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
		reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;
		return reactIs_production_min;
	}

	var reactIs_development = {};

	/** @license React v16.13.1
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	var hasRequiredReactIs_development;
	function requireReactIs_development () {
		if (hasRequiredReactIs_development) return reactIs_development;
		hasRequiredReactIs_development = 1;
		if (process.env.NODE_ENV !== "production") {
		  (function() {
		var hasSymbol = typeof Symbol === 'function' && Symbol.for;
		var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
		var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
		var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
		var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
		var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
		var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
		var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
		var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
		var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
		var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
		var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
		var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
		var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
		var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
		var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
		var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
		var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
		var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
		function isValidElementType(type) {
		  return typeof type === 'string' || typeof type === 'function' ||
		  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
		}
		function typeOf(object) {
		  if (typeof object === 'object' && object !== null) {
		    var $$typeof = object.$$typeof;
		    switch ($$typeof) {
		      case REACT_ELEMENT_TYPE:
		        var type = object.type;
		        switch (type) {
		          case REACT_ASYNC_MODE_TYPE:
		          case REACT_CONCURRENT_MODE_TYPE:
		          case REACT_FRAGMENT_TYPE:
		          case REACT_PROFILER_TYPE:
		          case REACT_STRICT_MODE_TYPE:
		          case REACT_SUSPENSE_TYPE:
		            return type;
		          default:
		            var $$typeofType = type && type.$$typeof;
		            switch ($$typeofType) {
		              case REACT_CONTEXT_TYPE:
		              case REACT_FORWARD_REF_TYPE:
		              case REACT_LAZY_TYPE:
		              case REACT_MEMO_TYPE:
		              case REACT_PROVIDER_TYPE:
		                return $$typeofType;
		              default:
		                return $$typeof;
		            }
		        }
		      case REACT_PORTAL_TYPE:
		        return $$typeof;
		    }
		  }
		  return undefined;
		}
		var AsyncMode = REACT_ASYNC_MODE_TYPE;
		var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
		var ContextConsumer = REACT_CONTEXT_TYPE;
		var ContextProvider = REACT_PROVIDER_TYPE;
		var Element = REACT_ELEMENT_TYPE;
		var ForwardRef = REACT_FORWARD_REF_TYPE;
		var Fragment = REACT_FRAGMENT_TYPE;
		var Lazy = REACT_LAZY_TYPE;
		var Memo = REACT_MEMO_TYPE;
		var Portal = REACT_PORTAL_TYPE;
		var Profiler = REACT_PROFILER_TYPE;
		var StrictMode = REACT_STRICT_MODE_TYPE;
		var Suspense = REACT_SUSPENSE_TYPE;
		var hasWarnedAboutDeprecatedIsAsyncMode = false;
		function isAsyncMode(object) {
		  {
		    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
		      hasWarnedAboutDeprecatedIsAsyncMode = true;
		      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
		    }
		  }
		  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
		}
		function isConcurrentMode(object) {
		  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
		}
		function isContextConsumer(object) {
		  return typeOf(object) === REACT_CONTEXT_TYPE;
		}
		function isContextProvider(object) {
		  return typeOf(object) === REACT_PROVIDER_TYPE;
		}
		function isElement(object) {
		  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		function isForwardRef(object) {
		  return typeOf(object) === REACT_FORWARD_REF_TYPE;
		}
		function isFragment(object) {
		  return typeOf(object) === REACT_FRAGMENT_TYPE;
		}
		function isLazy(object) {
		  return typeOf(object) === REACT_LAZY_TYPE;
		}
		function isMemo(object) {
		  return typeOf(object) === REACT_MEMO_TYPE;
		}
		function isPortal(object) {
		  return typeOf(object) === REACT_PORTAL_TYPE;
		}
		function isProfiler(object) {
		  return typeOf(object) === REACT_PROFILER_TYPE;
		}
		function isStrictMode(object) {
		  return typeOf(object) === REACT_STRICT_MODE_TYPE;
		}
		function isSuspense(object) {
		  return typeOf(object) === REACT_SUSPENSE_TYPE;
		}
		reactIs_development.AsyncMode = AsyncMode;
		reactIs_development.ConcurrentMode = ConcurrentMode;
		reactIs_development.ContextConsumer = ContextConsumer;
		reactIs_development.ContextProvider = ContextProvider;
		reactIs_development.Element = Element;
		reactIs_development.ForwardRef = ForwardRef;
		reactIs_development.Fragment = Fragment;
		reactIs_development.Lazy = Lazy;
		reactIs_development.Memo = Memo;
		reactIs_development.Portal = Portal;
		reactIs_development.Profiler = Profiler;
		reactIs_development.StrictMode = StrictMode;
		reactIs_development.Suspense = Suspense;
		reactIs_development.isAsyncMode = isAsyncMode;
		reactIs_development.isConcurrentMode = isConcurrentMode;
		reactIs_development.isContextConsumer = isContextConsumer;
		reactIs_development.isContextProvider = isContextProvider;
		reactIs_development.isElement = isElement;
		reactIs_development.isForwardRef = isForwardRef;
		reactIs_development.isFragment = isFragment;
		reactIs_development.isLazy = isLazy;
		reactIs_development.isMemo = isMemo;
		reactIs_development.isPortal = isPortal;
		reactIs_development.isProfiler = isProfiler;
		reactIs_development.isStrictMode = isStrictMode;
		reactIs_development.isSuspense = isSuspense;
		reactIs_development.isValidElementType = isValidElementType;
		reactIs_development.typeOf = typeOf;
		  })();
		}
		return reactIs_development;
	}

	var hasRequiredReactIs;
	function requireReactIs () {
		if (hasRequiredReactIs) return reactIs.exports;
		hasRequiredReactIs = 1;
		(function (module) {
			if (process.env.NODE_ENV === 'production') {
			  module.exports = requireReactIs_production_min();
			} else {
			  module.exports = requireReactIs_development();
			}
	} (reactIs));
		return reactIs.exports;
	}

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	var objectAssign;
	var hasRequiredObjectAssign;
	function requireObjectAssign () {
		if (hasRequiredObjectAssign) return objectAssign;
		hasRequiredObjectAssign = 1;
		var getOwnPropertySymbols = Object.getOwnPropertySymbols;
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var propIsEnumerable = Object.prototype.propertyIsEnumerable;
		function toObject(val) {
			if (val === null || val === undefined) {
				throw new TypeError('Object.assign cannot be called with null or undefined');
			}
			return Object(val);
		}
		function shouldUseNative() {
			try {
				if (!Object.assign) {
					return false;
				}
				var test1 = new String('abc');
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
				if (Object.keys(Object.assign({}, test3)).join('') !==
						'abcdefghijklmnopqrst') {
					return false;
				}
				return true;
			} catch (err) {
				return false;
			}
		}
		objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
			var from;
			var to = toObject(target);
			var symbols;
			for (var s = 1; s < arguments.length; s++) {
				from = Object(arguments[s]);
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
		return objectAssign;
	}

	var ReactPropTypesSecret_1;
	var hasRequiredReactPropTypesSecret;
	function requireReactPropTypesSecret () {
		if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
		hasRequiredReactPropTypesSecret = 1;
		var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
		ReactPropTypesSecret_1 = ReactPropTypesSecret;
		return ReactPropTypesSecret_1;
	}

	var has;
	var hasRequiredHas;
	function requireHas () {
		if (hasRequiredHas) return has;
		hasRequiredHas = 1;
		has = Function.call.bind(Object.prototype.hasOwnProperty);
		return has;
	}

	var checkPropTypes_1;
	var hasRequiredCheckPropTypes;
	function requireCheckPropTypes () {
		if (hasRequiredCheckPropTypes) return checkPropTypes_1;
		hasRequiredCheckPropTypes = 1;
		var printWarning = function() {};
		if (process.env.NODE_ENV !== 'production') {
		  var ReactPropTypesSecret = requireReactPropTypesSecret();
		  var loggedTypeFailures = {};
		  var has = requireHas();
		  printWarning = function(text) {
		    var message = 'Warning: ' + text;
		    if (typeof console !== 'undefined') {
		      console.error(message);
		    }
		    try {
		      throw new Error(message);
		    } catch (x) {  }
		  };
		}
		function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
		  if (process.env.NODE_ENV !== 'production') {
		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error;
		        try {
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            var err = Error(
		              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
		              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
		              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
		            );
		            err.name = 'Invariant Violation';
		            throw err;
		          }
		          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
		        } catch (ex) {
		          error = ex;
		        }
		        if (error && !(error instanceof Error)) {
		          printWarning(
		            (componentName || 'React class') + ': type specification of ' +
		            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
		            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
		            'You may have forgotten to pass an argument to the type checker ' +
		            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
		            'shape all require an argument).'
		          );
		        }
		        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
		          loggedTypeFailures[error.message] = true;
		          var stack = getStack ? getStack() : '';
		          printWarning(
		            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
		          );
		        }
		      }
		    }
		  }
		}
		checkPropTypes.resetWarningCache = function() {
		  if (process.env.NODE_ENV !== 'production') {
		    loggedTypeFailures = {};
		  }
		};
		checkPropTypes_1 = checkPropTypes;
		return checkPropTypes_1;
	}

	var factoryWithTypeCheckers;
	var hasRequiredFactoryWithTypeCheckers;
	function requireFactoryWithTypeCheckers () {
		if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
		hasRequiredFactoryWithTypeCheckers = 1;
		var ReactIs = requireReactIs();
		var assign = requireObjectAssign();
		var ReactPropTypesSecret = requireReactPropTypesSecret();
		var has = requireHas();
		var checkPropTypes = requireCheckPropTypes();
		var printWarning = function() {};
		if (process.env.NODE_ENV !== 'production') {
		  printWarning = function(text) {
		    var message = 'Warning: ' + text;
		    if (typeof console !== 'undefined') {
		      console.error(message);
		    }
		    try {
		      throw new Error(message);
		    } catch (x) {}
		  };
		}
		function emptyFunctionThatReturnsNull() {
		  return null;
		}
		factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
		  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
		  var FAUX_ITERATOR_SYMBOL = '@@iterator';
		  function getIteratorFn(maybeIterable) {
		    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
		    if (typeof iteratorFn === 'function') {
		      return iteratorFn;
		    }
		  }
		  var ANONYMOUS = '<<anonymous>>';
		  var ReactPropTypes = {
		    array: createPrimitiveTypeChecker('array'),
		    bigint: createPrimitiveTypeChecker('bigint'),
		    bool: createPrimitiveTypeChecker('boolean'),
		    func: createPrimitiveTypeChecker('function'),
		    number: createPrimitiveTypeChecker('number'),
		    object: createPrimitiveTypeChecker('object'),
		    string: createPrimitiveTypeChecker('string'),
		    symbol: createPrimitiveTypeChecker('symbol'),
		    any: createAnyTypeChecker(),
		    arrayOf: createArrayOfTypeChecker,
		    element: createElementTypeChecker(),
		    elementType: createElementTypeTypeChecker(),
		    instanceOf: createInstanceTypeChecker,
		    node: createNodeChecker(),
		    objectOf: createObjectOfTypeChecker,
		    oneOf: createEnumTypeChecker,
		    oneOfType: createUnionTypeChecker,
		    shape: createShapeTypeChecker,
		    exact: createStrictShapeTypeChecker,
		  };
		  function is(x, y) {
		    if (x === y) {
		      return x !== 0 || 1 / x === 1 / y;
		    } else {
		      return x !== x && y !== y;
		    }
		  }
		  function PropTypeError(message, data) {
		    this.message = message;
		    this.data = data && typeof data === 'object' ? data: {};
		    this.stack = '';
		  }
		  PropTypeError.prototype = Error.prototype;
		  function createChainableTypeChecker(validate) {
		    if (process.env.NODE_ENV !== 'production') {
		      var manualPropTypeCallCache = {};
		      var manualPropTypeWarningCount = 0;
		    }
		    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
		      componentName = componentName || ANONYMOUS;
		      propFullName = propFullName || propName;
		      if (secret !== ReactPropTypesSecret) {
		        if (throwOnDirectAccess) {
		          var err = new Error(
		            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
		            'Use `PropTypes.checkPropTypes()` to call them. ' +
		            'Read more at http://fb.me/use-check-prop-types'
		          );
		          err.name = 'Invariant Violation';
		          throw err;
		        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
		          var cacheKey = componentName + ':' + propName;
		          if (
		            !manualPropTypeCallCache[cacheKey] &&
		            manualPropTypeWarningCount < 3
		          ) {
		            printWarning(
		              'You are manually calling a React.PropTypes validation ' +
		              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
		              'and will throw in the standalone `prop-types` package. ' +
		              'You may be seeing this warning due to a third-party PropTypes ' +
		              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
		            );
		            manualPropTypeCallCache[cacheKey] = true;
		            manualPropTypeWarningCount++;
		          }
		        }
		      }
		      if (props[propName] == null) {
		        if (isRequired) {
		          if (props[propName] === null) {
		            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
		          }
		          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
		        }
		        return null;
		      } else {
		        return validate(props, propName, componentName, location, propFullName);
		      }
		    }
		    var chainedCheckType = checkType.bind(null, false);
		    chainedCheckType.isRequired = checkType.bind(null, true);
		    return chainedCheckType;
		  }
		  function createPrimitiveTypeChecker(expectedType) {
		    function validate(props, propName, componentName, location, propFullName, secret) {
		      var propValue = props[propName];
		      var propType = getPropType(propValue);
		      if (propType !== expectedType) {
		        var preciseType = getPreciseType(propValue);
		        return new PropTypeError(
		          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
		          {expectedType: expectedType}
		        );
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }
		  function createAnyTypeChecker() {
		    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
		  }
		  function createArrayOfTypeChecker(typeChecker) {
		    function validate(props, propName, componentName, location, propFullName) {
		      if (typeof typeChecker !== 'function') {
		        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
		      }
		      var propValue = props[propName];
		      if (!Array.isArray(propValue)) {
		        var propType = getPropType(propValue);
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
		      }
		      for (var i = 0; i < propValue.length; i++) {
		        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
		        if (error instanceof Error) {
		          return error;
		        }
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }
		  function createElementTypeChecker() {
		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];
		      if (!isValidElement(propValue)) {
		        var propType = getPropType(propValue);
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }
		  function createElementTypeTypeChecker() {
		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];
		      if (!ReactIs.isValidElementType(propValue)) {
		        var propType = getPropType(propValue);
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }
		  function createInstanceTypeChecker(expectedClass) {
		    function validate(props, propName, componentName, location, propFullName) {
		      if (!(props[propName] instanceof expectedClass)) {
		        var expectedClassName = expectedClass.name || ANONYMOUS;
		        var actualClassName = getClassName(props[propName]);
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }
		  function createEnumTypeChecker(expectedValues) {
		    if (!Array.isArray(expectedValues)) {
		      if (process.env.NODE_ENV !== 'production') {
		        if (arguments.length > 1) {
		          printWarning(
		            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
		            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
		          );
		        } else {
		          printWarning('Invalid argument supplied to oneOf, expected an array.');
		        }
		      }
		      return emptyFunctionThatReturnsNull;
		    }
		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];
		      for (var i = 0; i < expectedValues.length; i++) {
		        if (is(propValue, expectedValues[i])) {
		          return null;
		        }
		      }
		      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
		        var type = getPreciseType(value);
		        if (type === 'symbol') {
		          return String(value);
		        }
		        return value;
		      });
		      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
		    }
		    return createChainableTypeChecker(validate);
		  }
		  function createObjectOfTypeChecker(typeChecker) {
		    function validate(props, propName, componentName, location, propFullName) {
		      if (typeof typeChecker !== 'function') {
		        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
		      }
		      var propValue = props[propName];
		      var propType = getPropType(propValue);
		      if (propType !== 'object') {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
		      }
		      for (var key in propValue) {
		        if (has(propValue, key)) {
		          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
		          if (error instanceof Error) {
		            return error;
		          }
		        }
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }
		  function createUnionTypeChecker(arrayOfTypeCheckers) {
		    if (!Array.isArray(arrayOfTypeCheckers)) {
		      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
		      return emptyFunctionThatReturnsNull;
		    }
		    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
		      var checker = arrayOfTypeCheckers[i];
		      if (typeof checker !== 'function') {
		        printWarning(
		          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
		          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
		        );
		        return emptyFunctionThatReturnsNull;
		      }
		    }
		    function validate(props, propName, componentName, location, propFullName) {
		      var expectedTypes = [];
		      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
		        var checker = arrayOfTypeCheckers[i];
		        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
		        if (checkerResult == null) {
		          return null;
		        }
		        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
		          expectedTypes.push(checkerResult.data.expectedType);
		        }
		      }
		      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
		      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
		    }
		    return createChainableTypeChecker(validate);
		  }
		  function createNodeChecker() {
		    function validate(props, propName, componentName, location, propFullName) {
		      if (!isNode(props[propName])) {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }
		  function invalidValidatorError(componentName, location, propFullName, key, type) {
		    return new PropTypeError(
		      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
		      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
		    );
		  }
		  function createShapeTypeChecker(shapeTypes) {
		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];
		      var propType = getPropType(propValue);
		      if (propType !== 'object') {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
		      }
		      for (var key in shapeTypes) {
		        var checker = shapeTypes[key];
		        if (typeof checker !== 'function') {
		          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
		        }
		        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
		        if (error) {
		          return error;
		        }
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }
		  function createStrictShapeTypeChecker(shapeTypes) {
		    function validate(props, propName, componentName, location, propFullName) {
		      var propValue = props[propName];
		      var propType = getPropType(propValue);
		      if (propType !== 'object') {
		        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
		      }
		      var allKeys = assign({}, props[propName], shapeTypes);
		      for (var key in allKeys) {
		        var checker = shapeTypes[key];
		        if (has(shapeTypes, key) && typeof checker !== 'function') {
		          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
		        }
		        if (!checker) {
		          return new PropTypeError(
		            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
		            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
		            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
		          );
		        }
		        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
		        if (error) {
		          return error;
		        }
		      }
		      return null;
		    }
		    return createChainableTypeChecker(validate);
		  }
		  function isNode(propValue) {
		    switch (typeof propValue) {
		      case 'number':
		      case 'string':
		      case 'undefined':
		        return true;
		      case 'boolean':
		        return !propValue;
		      case 'object':
		        if (Array.isArray(propValue)) {
		          return propValue.every(isNode);
		        }
		        if (propValue === null || isValidElement(propValue)) {
		          return true;
		        }
		        var iteratorFn = getIteratorFn(propValue);
		        if (iteratorFn) {
		          var iterator = iteratorFn.call(propValue);
		          var step;
		          if (iteratorFn !== propValue.entries) {
		            while (!(step = iterator.next()).done) {
		              if (!isNode(step.value)) {
		                return false;
		              }
		            }
		          } else {
		            while (!(step = iterator.next()).done) {
		              var entry = step.value;
		              if (entry) {
		                if (!isNode(entry[1])) {
		                  return false;
		                }
		              }
		            }
		          }
		        } else {
		          return false;
		        }
		        return true;
		      default:
		        return false;
		    }
		  }
		  function isSymbol(propType, propValue) {
		    if (propType === 'symbol') {
		      return true;
		    }
		    if (!propValue) {
		      return false;
		    }
		    if (propValue['@@toStringTag'] === 'Symbol') {
		      return true;
		    }
		    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
		      return true;
		    }
		    return false;
		  }
		  function getPropType(propValue) {
		    var propType = typeof propValue;
		    if (Array.isArray(propValue)) {
		      return 'array';
		    }
		    if (propValue instanceof RegExp) {
		      return 'object';
		    }
		    if (isSymbol(propType, propValue)) {
		      return 'symbol';
		    }
		    return propType;
		  }
		  function getPreciseType(propValue) {
		    if (typeof propValue === 'undefined' || propValue === null) {
		      return '' + propValue;
		    }
		    var propType = getPropType(propValue);
		    if (propType === 'object') {
		      if (propValue instanceof Date) {
		        return 'date';
		      } else if (propValue instanceof RegExp) {
		        return 'regexp';
		      }
		    }
		    return propType;
		  }
		  function getPostfixForTypeWarning(value) {
		    var type = getPreciseType(value);
		    switch (type) {
		      case 'array':
		      case 'object':
		        return 'an ' + type;
		      case 'boolean':
		      case 'date':
		      case 'regexp':
		        return 'a ' + type;
		      default:
		        return type;
		    }
		  }
		  function getClassName(propValue) {
		    if (!propValue.constructor || !propValue.constructor.name) {
		      return ANONYMOUS;
		    }
		    return propValue.constructor.name;
		  }
		  ReactPropTypes.checkPropTypes = checkPropTypes;
		  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
		  ReactPropTypes.PropTypes = ReactPropTypes;
		  return ReactPropTypes;
		};
		return factoryWithTypeCheckers;
	}

	var factoryWithThrowingShims;
	var hasRequiredFactoryWithThrowingShims;
	function requireFactoryWithThrowingShims () {
		if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
		hasRequiredFactoryWithThrowingShims = 1;
		var ReactPropTypesSecret = requireReactPropTypesSecret();
		function emptyFunction() {}
		function emptyFunctionWithReset() {}
		emptyFunctionWithReset.resetWarningCache = emptyFunction;
		factoryWithThrowingShims = function() {
		  function shim(props, propName, componentName, location, propFullName, secret) {
		    if (secret === ReactPropTypesSecret) {
		      return;
		    }
		    var err = new Error(
		      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
		      'Use PropTypes.checkPropTypes() to call them. ' +
		      'Read more at http://fb.me/use-check-prop-types'
		    );
		    err.name = 'Invariant Violation';
		    throw err;
		  }	  shim.isRequired = shim;
		  function getShim() {
		    return shim;
		  }	  var ReactPropTypes = {
		    array: shim,
		    bigint: shim,
		    bool: shim,
		    func: shim,
		    number: shim,
		    object: shim,
		    string: shim,
		    symbol: shim,
		    any: shim,
		    arrayOf: getShim,
		    element: shim,
		    elementType: shim,
		    instanceOf: getShim,
		    node: shim,
		    objectOf: getShim,
		    oneOf: getShim,
		    oneOfType: getShim,
		    shape: getShim,
		    exact: getShim,
		    checkPropTypes: emptyFunctionWithReset,
		    resetWarningCache: emptyFunction
		  };
		  ReactPropTypes.PropTypes = ReactPropTypes;
		  return ReactPropTypes;
		};
		return factoryWithThrowingShims;
	}

	if (process.env.NODE_ENV !== 'production') {
	  var ReactIs = requireReactIs();
	  var throwOnDirectAccess = true;
	  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  propTypes.exports = requireFactoryWithThrowingShims()();
	}

	function NoVideoInputDevicesError$1() {
	  this.name = 'NoVideoInputDevicesError';
	  this.message = 'No video input devices found';
	}
	NoVideoInputDevicesError$1.prototype = new Error();
	var errors = {
	  NoVideoInputDevicesError: NoVideoInputDevicesError$1
	};

	var _require$1 = errors,
	    NoVideoInputDevicesError = _require$1.NoVideoInputDevicesError;
	function defaultDeviceIdChooser(filteredDevices, videoDevices, facingMode) {
	  if (filteredDevices.length > 0) {
	    return filteredDevices[0].deviceId;
	  }
	  if (videoDevices.length == 1 || facingMode == 'user') {
	    return videoDevices[0].deviceId;
	  }
	  return videoDevices[1].deviceId;
	}
	var getFacingModePattern = function getFacingModePattern(facingMode) {
	  return facingMode == 'environment' ? /rear|back|environment/ig : /front|user|face/ig;
	};
	function getDeviceId$1(facingMode) {
	  var chooseDeviceId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultDeviceIdChooser;
	  return new Promise(function (resolve, reject) {
	    var enumerateDevices = void 0;
	    try {
	      enumerateDevices = navigator.mediaDevices.enumerateDevices();
	    } catch (err) {
	      reject(new NoVideoInputDevicesError());
	    }
	    enumerateDevices.then(function (devices) {
	      var videoDevices = devices.filter(function (device) {
	        return device.kind == 'videoinput';
	      });
	      if (videoDevices.length < 1) {
	        reject(new NoVideoInputDevicesError());
	        return;
	      }
	      var pattern = getFacingModePattern(facingMode);
	      var filteredDevices = videoDevices.filter(function (_ref) {
	        var label = _ref.label;
	        return pattern.test(label);
	      });
	      resolve(chooseDeviceId(filteredDevices, videoDevices, facingMode));
	    });
	  });
	}
	var getDeviceId_1 = { getDeviceId: getDeviceId$1, getFacingModePattern: getFacingModePattern };

	var havePropsChanged$1 = function havePropsChanged(prevProps, nextProps, keys) {
	  var changedProps = [];
	  keys.forEach(function (key) {
	    if (prevProps[key] != nextProps[key]) {
	      changedProps.push(key);
	    }
	  });
	  return changedProps;
	};

	var createBlob$1 = function createBlob(parts, properties) {
	  parts = parts || [];
	  properties = properties || {};
	  try {
	    return new Blob(parts, properties);
	  } catch (e) {
	    if (e.name !== "TypeError") {
	      throw e;
	    }
	    var BlobBuilder = window.BlobBuilder || window.MSBlobBuilder || window.MozBlobBuilder || window.WebKitBlobBuilder;
	    var builder = new BlobBuilder();
	    for (var i = 0; i < parts.length; i += 1) {
	      builder.append(parts[i]);
	    }
	    return builder.getBlob(properties.type);
	  }
	};

	let logDisabled_ = true;
	let deprecationWarnings_ = true;
	function extractVersion(uastring, expr, pos) {
	  const match = uastring.match(expr);
	  return match && match.length >= pos && parseInt(match[pos], 10);
	}
	function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
	  if (!window.RTCPeerConnection) {
	    return;
	  }
	  const proto = window.RTCPeerConnection.prototype;
	  const nativeAddEventListener = proto.addEventListener;
	  proto.addEventListener = function(nativeEventName, cb) {
	    if (nativeEventName !== eventNameToWrap) {
	      return nativeAddEventListener.apply(this, arguments);
	    }
	    const wrappedCallback = (e) => {
	      const modifiedEvent = wrapper(e);
	      if (modifiedEvent) {
	        if (cb.handleEvent) {
	          cb.handleEvent(modifiedEvent);
	        } else {
	          cb(modifiedEvent);
	        }
	      }
	    };
	    this._eventMap = this._eventMap || {};
	    if (!this._eventMap[eventNameToWrap]) {
	      this._eventMap[eventNameToWrap] = new Map();
	    }
	    this._eventMap[eventNameToWrap].set(cb, wrappedCallback);
	    return nativeAddEventListener.apply(this, [nativeEventName,
	      wrappedCallback]);
	  };
	  const nativeRemoveEventListener = proto.removeEventListener;
	  proto.removeEventListener = function(nativeEventName, cb) {
	    if (nativeEventName !== eventNameToWrap || !this._eventMap
	        || !this._eventMap[eventNameToWrap]) {
	      return nativeRemoveEventListener.apply(this, arguments);
	    }
	    if (!this._eventMap[eventNameToWrap].has(cb)) {
	      return nativeRemoveEventListener.apply(this, arguments);
	    }
	    const unwrappedCb = this._eventMap[eventNameToWrap].get(cb);
	    this._eventMap[eventNameToWrap].delete(cb);
	    if (this._eventMap[eventNameToWrap].size === 0) {
	      delete this._eventMap[eventNameToWrap];
	    }
	    if (Object.keys(this._eventMap).length === 0) {
	      delete this._eventMap;
	    }
	    return nativeRemoveEventListener.apply(this, [nativeEventName,
	      unwrappedCb]);
	  };
	  Object.defineProperty(proto, 'on' + eventNameToWrap, {
	    get() {
	      return this['_on' + eventNameToWrap];
	    },
	    set(cb) {
	      if (this['_on' + eventNameToWrap]) {
	        this.removeEventListener(eventNameToWrap,
	            this['_on' + eventNameToWrap]);
	        delete this['_on' + eventNameToWrap];
	      }
	      if (cb) {
	        this.addEventListener(eventNameToWrap,
	            this['_on' + eventNameToWrap] = cb);
	      }
	    },
	    enumerable: true,
	    configurable: true
	  });
	}
	function disableLog(bool) {
	  if (typeof bool !== 'boolean') {
	    return new Error('Argument type: ' + typeof bool +
	        '. Please use a boolean.');
	  }
	  logDisabled_ = bool;
	  return (bool) ? 'adapter.js logging disabled' :
	      'adapter.js logging enabled';
	}
	function disableWarnings(bool) {
	  if (typeof bool !== 'boolean') {
	    return new Error('Argument type: ' + typeof bool +
	        '. Please use a boolean.');
	  }
	  deprecationWarnings_ = !bool;
	  return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
	}
	function log() {
	  if (typeof window === 'object') {
	    if (logDisabled_) {
	      return;
	    }
	    if (typeof console !== 'undefined' && typeof console.log === 'function') {
	      console.log.apply(console, arguments);
	    }
	  }
	}
	function deprecated(oldMethod, newMethod) {
	  if (!deprecationWarnings_) {
	    return;
	  }
	  console.warn(oldMethod + ' is deprecated, please use ' + newMethod +
	      ' instead.');
	}
	function detectBrowser(window) {
	  const result = {browser: null, version: null};
	  if (typeof window === 'undefined' || !window.navigator) {
	    result.browser = 'Not a browser.';
	    return result;
	  }
	  const {navigator} = window;
	  if (navigator.mozGetUserMedia) {
	    result.browser = 'firefox';
	    result.version = extractVersion(navigator.userAgent,
	        /Firefox\/(\d+)\./, 1);
	  } else if (navigator.webkitGetUserMedia ||
	      (window.isSecureContext === false && window.webkitRTCPeerConnection &&
	       !window.RTCIceGatherer)) {
	    result.browser = 'chrome';
	    result.version = extractVersion(navigator.userAgent,
	        /Chrom(e|ium)\/(\d+)\./, 2);
	  } else if (navigator.mediaDevices &&
	      navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
	    result.browser = 'edge';
	    result.version = extractVersion(navigator.userAgent,
	        /Edge\/(\d+).(\d+)$/, 2);
	  } else if (window.RTCPeerConnection &&
	      navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
	    result.browser = 'safari';
	    result.version = extractVersion(navigator.userAgent,
	        /AppleWebKit\/(\d+)\./, 1);
	    result.supportsUnifiedPlan = window.RTCRtpTransceiver &&
	        'currentDirection' in window.RTCRtpTransceiver.prototype;
	  } else {
	    result.browser = 'Not a supported browser.';
	    return result;
	  }
	  return result;
	}
	function isObject(val) {
	  return Object.prototype.toString.call(val) === '[object Object]';
	}
	function compactObject(data) {
	  if (!isObject(data)) {
	    return data;
	  }
	  return Object.keys(data).reduce(function(accumulator, key) {
	    const isObj = isObject(data[key]);
	    const value = isObj ? compactObject(data[key]) : data[key];
	    const isEmptyObject = isObj && !Object.keys(value).length;
	    if (value === undefined || isEmptyObject) {
	      return accumulator;
	    }
	    return Object.assign(accumulator, {[key]: value});
	  }, {});
	}
	function walkStats(stats, base, resultSet) {
	  if (!base || resultSet.has(base.id)) {
	    return;
	  }
	  resultSet.set(base.id, base);
	  Object.keys(base).forEach(name => {
	    if (name.endsWith('Id')) {
	      walkStats(stats, stats.get(base[name]), resultSet);
	    } else if (name.endsWith('Ids')) {
	      base[name].forEach(id => {
	        walkStats(stats, stats.get(id), resultSet);
	      });
	    }
	  });
	}
	function filterStats(result, track, outbound) {
	  const streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
	  const filteredResult = new Map();
	  if (track === null) {
	    return filteredResult;
	  }
	  const trackStats = [];
	  result.forEach(value => {
	    if (value.type === 'track' &&
	        value.trackIdentifier === track.id) {
	      trackStats.push(value);
	    }
	  });
	  trackStats.forEach(trackStat => {
	    result.forEach(stats => {
	      if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
	        walkStats(result, stats, filteredResult);
	      }
	    });
	  });
	  return filteredResult;
	}

	const logging = log;
	function shimGetUserMedia$3(window) {
	  const navigator = window && window.navigator;
	  if (!navigator.mediaDevices) {
	    return;
	  }
	  const browserDetails = detectBrowser(window);
	  const constraintsToChrome_ = function(c) {
	    if (typeof c !== 'object' || c.mandatory || c.optional) {
	      return c;
	    }
	    const cc = {};
	    Object.keys(c).forEach(key => {
	      if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
	        return;
	      }
	      const r = (typeof c[key] === 'object') ? c[key] : {ideal: c[key]};
	      if (r.exact !== undefined && typeof r.exact === 'number') {
	        r.min = r.max = r.exact;
	      }
	      const oldname_ = function(prefix, name) {
	        if (prefix) {
	          return prefix + name.charAt(0).toUpperCase() + name.slice(1);
	        }
	        return (name === 'deviceId') ? 'sourceId' : name;
	      };
	      if (r.ideal !== undefined) {
	        cc.optional = cc.optional || [];
	        let oc = {};
	        if (typeof r.ideal === 'number') {
	          oc[oldname_('min', key)] = r.ideal;
	          cc.optional.push(oc);
	          oc = {};
	          oc[oldname_('max', key)] = r.ideal;
	          cc.optional.push(oc);
	        } else {
	          oc[oldname_('', key)] = r.ideal;
	          cc.optional.push(oc);
	        }
	      }
	      if (r.exact !== undefined && typeof r.exact !== 'number') {
	        cc.mandatory = cc.mandatory || {};
	        cc.mandatory[oldname_('', key)] = r.exact;
	      } else {
	        ['min', 'max'].forEach(mix => {
	          if (r[mix] !== undefined) {
	            cc.mandatory = cc.mandatory || {};
	            cc.mandatory[oldname_(mix, key)] = r[mix];
	          }
	        });
	      }
	    });
	    if (c.advanced) {
	      cc.optional = (cc.optional || []).concat(c.advanced);
	    }
	    return cc;
	  };
	  const shimConstraints_ = function(constraints, func) {
	    if (browserDetails.version >= 61) {
	      return func(constraints);
	    }
	    constraints = JSON.parse(JSON.stringify(constraints));
	    if (constraints && typeof constraints.audio === 'object') {
	      const remap = function(obj, a, b) {
	        if (a in obj && !(b in obj)) {
	          obj[b] = obj[a];
	          delete obj[a];
	        }
	      };
	      constraints = JSON.parse(JSON.stringify(constraints));
	      remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
	      remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
	      constraints.audio = constraintsToChrome_(constraints.audio);
	    }
	    if (constraints && typeof constraints.video === 'object') {
	      let face = constraints.video.facingMode;
	      face = face && ((typeof face === 'object') ? face : {ideal: face});
	      const getSupportedFacingModeLies = browserDetails.version < 66;
	      if ((face && (face.exact === 'user' || face.exact === 'environment' ||
	                    face.ideal === 'user' || face.ideal === 'environment')) &&
	          !(navigator.mediaDevices.getSupportedConstraints &&
	            navigator.mediaDevices.getSupportedConstraints().facingMode &&
	            !getSupportedFacingModeLies)) {
	        delete constraints.video.facingMode;
	        let matches;
	        if (face.exact === 'environment' || face.ideal === 'environment') {
	          matches = ['back', 'rear'];
	        } else if (face.exact === 'user' || face.ideal === 'user') {
	          matches = ['front'];
	        }
	        if (matches) {
	          return navigator.mediaDevices.enumerateDevices()
	          .then(devices => {
	            devices = devices.filter(d => d.kind === 'videoinput');
	            let dev = devices.find(d => matches.some(match =>
	              d.label.toLowerCase().includes(match)));
	            if (!dev && devices.length && matches.includes('back')) {
	              dev = devices[devices.length - 1];
	            }
	            if (dev) {
	              constraints.video.deviceId = face.exact ? {exact: dev.deviceId} :
	                                                        {ideal: dev.deviceId};
	            }
	            constraints.video = constraintsToChrome_(constraints.video);
	            logging('chrome: ' + JSON.stringify(constraints));
	            return func(constraints);
	          });
	        }
	      }
	      constraints.video = constraintsToChrome_(constraints.video);
	    }
	    logging('chrome: ' + JSON.stringify(constraints));
	    return func(constraints);
	  };
	  const shimError_ = function(e) {
	    if (browserDetails.version >= 64) {
	      return e;
	    }
	    return {
	      name: {
	        PermissionDeniedError: 'NotAllowedError',
	        PermissionDismissedError: 'NotAllowedError',
	        InvalidStateError: 'NotAllowedError',
	        DevicesNotFoundError: 'NotFoundError',
	        ConstraintNotSatisfiedError: 'OverconstrainedError',
	        TrackStartError: 'NotReadableError',
	        MediaDeviceFailedDueToShutdown: 'NotAllowedError',
	        MediaDeviceKillSwitchOn: 'NotAllowedError',
	        TabCaptureError: 'AbortError',
	        ScreenCaptureError: 'AbortError',
	        DeviceCaptureError: 'AbortError'
	      }[e.name] || e.name,
	      message: e.message,
	      constraint: e.constraint || e.constraintName,
	      toString() {
	        return this.name + (this.message && ': ') + this.message;
	      }
	    };
	  };
	  const getUserMedia_ = function(constraints, onSuccess, onError) {
	    shimConstraints_(constraints, c => {
	      navigator.webkitGetUserMedia(c, onSuccess, e => {
	        if (onError) {
	          onError(shimError_(e));
	        }
	      });
	    });
	  };
	  navigator.getUserMedia = getUserMedia_.bind(navigator);
	  if (navigator.mediaDevices.getUserMedia) {
	    const origGetUserMedia = navigator.mediaDevices.getUserMedia.
	        bind(navigator.mediaDevices);
	    navigator.mediaDevices.getUserMedia = function(cs) {
	      return shimConstraints_(cs, c => origGetUserMedia(c).then(stream => {
	        if (c.audio && !stream.getAudioTracks().length ||
	            c.video && !stream.getVideoTracks().length) {
	          stream.getTracks().forEach(track => {
	            track.stop();
	          });
	          throw new DOMException('', 'NotFoundError');
	        }
	        return stream;
	      }, e => Promise.reject(shimError_(e))));
	    };
	  }
	}

	function shimGetDisplayMedia$2(window, getSourceId) {
	  if (window.navigator.mediaDevices &&
	    'getDisplayMedia' in window.navigator.mediaDevices) {
	    return;
	  }
	  if (!(window.navigator.mediaDevices)) {
	    return;
	  }
	  if (typeof getSourceId !== 'function') {
	    console.error('shimGetDisplayMedia: getSourceId argument is not ' +
	        'a function');
	    return;
	  }
	  window.navigator.mediaDevices.getDisplayMedia =
	    function getDisplayMedia(constraints) {
	      return getSourceId(constraints)
	        .then(sourceId => {
	          const widthSpecified = constraints.video && constraints.video.width;
	          const heightSpecified = constraints.video &&
	            constraints.video.height;
	          const frameRateSpecified = constraints.video &&
	            constraints.video.frameRate;
	          constraints.video = {
	            mandatory: {
	              chromeMediaSource: 'desktop',
	              chromeMediaSourceId: sourceId,
	              maxFrameRate: frameRateSpecified || 3
	            }
	          };
	          if (widthSpecified) {
	            constraints.video.mandatory.maxWidth = widthSpecified;
	          }
	          if (heightSpecified) {
	            constraints.video.mandatory.maxHeight = heightSpecified;
	          }
	          return window.navigator.mediaDevices.getUserMedia(constraints);
	        });
	    };
	}

	function shimMediaStream(window) {
	  window.MediaStream = window.MediaStream || window.webkitMediaStream;
	}
	function shimOnTrack$1(window) {
	  if (typeof window === 'object' && window.RTCPeerConnection && !('ontrack' in
	      window.RTCPeerConnection.prototype)) {
	    Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
	      get() {
	        return this._ontrack;
	      },
	      set(f) {
	        if (this._ontrack) {
	          this.removeEventListener('track', this._ontrack);
	        }
	        this.addEventListener('track', this._ontrack = f);
	      },
	      enumerable: true,
	      configurable: true
	    });
	    const origSetRemoteDescription =
	        window.RTCPeerConnection.prototype.setRemoteDescription;
	    window.RTCPeerConnection.prototype.setRemoteDescription =
	      function setRemoteDescription() {
	        if (!this._ontrackpoly) {
	          this._ontrackpoly = (e) => {
	            e.stream.addEventListener('addtrack', te => {
	              let receiver;
	              if (window.RTCPeerConnection.prototype.getReceivers) {
	                receiver = this.getReceivers()
	                  .find(r => r.track && r.track.id === te.track.id);
	              } else {
	                receiver = {track: te.track};
	              }
	              const event = new Event('track');
	              event.track = te.track;
	              event.receiver = receiver;
	              event.transceiver = {receiver};
	              event.streams = [e.stream];
	              this.dispatchEvent(event);
	            });
	            e.stream.getTracks().forEach(track => {
	              let receiver;
	              if (window.RTCPeerConnection.prototype.getReceivers) {
	                receiver = this.getReceivers()
	                  .find(r => r.track && r.track.id === track.id);
	              } else {
	                receiver = {track};
	              }
	              const event = new Event('track');
	              event.track = track;
	              event.receiver = receiver;
	              event.transceiver = {receiver};
	              event.streams = [e.stream];
	              this.dispatchEvent(event);
	            });
	          };
	          this.addEventListener('addstream', this._ontrackpoly);
	        }
	        return origSetRemoteDescription.apply(this, arguments);
	      };
	  } else {
	    wrapPeerConnectionEvent(window, 'track', e => {
	      if (!e.transceiver) {
	        Object.defineProperty(e, 'transceiver',
	          {value: {receiver: e.receiver}});
	      }
	      return e;
	    });
	  }
	}
	function shimGetSendersWithDtmf(window) {
	  if (typeof window === 'object' && window.RTCPeerConnection &&
	      !('getSenders' in window.RTCPeerConnection.prototype) &&
	      'createDTMFSender' in window.RTCPeerConnection.prototype) {
	    const shimSenderWithDtmf = function(pc, track) {
	      return {
	        track,
	        get dtmf() {
	          if (this._dtmf === undefined) {
	            if (track.kind === 'audio') {
	              this._dtmf = pc.createDTMFSender(track);
	            } else {
	              this._dtmf = null;
	            }
	          }
	          return this._dtmf;
	        },
	        _pc: pc
	      };
	    };
	    if (!window.RTCPeerConnection.prototype.getSenders) {
	      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
	        this._senders = this._senders || [];
	        return this._senders.slice();
	      };
	      const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
	      window.RTCPeerConnection.prototype.addTrack =
	        function addTrack(track, stream) {
	          let sender = origAddTrack.apply(this, arguments);
	          if (!sender) {
	            sender = shimSenderWithDtmf(this, track);
	            this._senders.push(sender);
	          }
	          return sender;
	        };
	      const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
	      window.RTCPeerConnection.prototype.removeTrack =
	        function removeTrack(sender) {
	          origRemoveTrack.apply(this, arguments);
	          const idx = this._senders.indexOf(sender);
	          if (idx !== -1) {
	            this._senders.splice(idx, 1);
	          }
	        };
	    }
	    const origAddStream = window.RTCPeerConnection.prototype.addStream;
	    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
	      this._senders = this._senders || [];
	      origAddStream.apply(this, [stream]);
	      stream.getTracks().forEach(track => {
	        this._senders.push(shimSenderWithDtmf(this, track));
	      });
	    };
	    const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
	    window.RTCPeerConnection.prototype.removeStream =
	      function removeStream(stream) {
	        this._senders = this._senders || [];
	        origRemoveStream.apply(this, [stream]);
	        stream.getTracks().forEach(track => {
	          const sender = this._senders.find(s => s.track === track);
	          if (sender) {
	            this._senders.splice(this._senders.indexOf(sender), 1);
	          }
	        });
	      };
	  } else if (typeof window === 'object' && window.RTCPeerConnection &&
	             'getSenders' in window.RTCPeerConnection.prototype &&
	             'createDTMFSender' in window.RTCPeerConnection.prototype &&
	             window.RTCRtpSender &&
	             !('dtmf' in window.RTCRtpSender.prototype)) {
	    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
	    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
	      const senders = origGetSenders.apply(this, []);
	      senders.forEach(sender => sender._pc = this);
	      return senders;
	    };
	    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
	      get() {
	        if (this._dtmf === undefined) {
	          if (this.track.kind === 'audio') {
	            this._dtmf = this._pc.createDTMFSender(this.track);
	          } else {
	            this._dtmf = null;
	          }
	        }
	        return this._dtmf;
	      }
	    });
	  }
	}
	function shimGetStats(window) {
	  if (!window.RTCPeerConnection) {
	    return;
	  }
	  const origGetStats = window.RTCPeerConnection.prototype.getStats;
	  window.RTCPeerConnection.prototype.getStats = function getStats() {
	    const [selector, onSucc, onErr] = arguments;
	    if (arguments.length > 0 && typeof selector === 'function') {
	      return origGetStats.apply(this, arguments);
	    }
	    if (origGetStats.length === 0 && (arguments.length === 0 ||
	        typeof selector !== 'function')) {
	      return origGetStats.apply(this, []);
	    }
	    const fixChromeStats_ = function(response) {
	      const standardReport = {};
	      const reports = response.result();
	      reports.forEach(report => {
	        const standardStats = {
	          id: report.id,
	          timestamp: report.timestamp,
	          type: {
	            localcandidate: 'local-candidate',
	            remotecandidate: 'remote-candidate'
	          }[report.type] || report.type
	        };
	        report.names().forEach(name => {
	          standardStats[name] = report.stat(name);
	        });
	        standardReport[standardStats.id] = standardStats;
	      });
	      return standardReport;
	    };
	    const makeMapStats = function(stats) {
	      return new Map(Object.keys(stats).map(key => [key, stats[key]]));
	    };
	    if (arguments.length >= 2) {
	      const successCallbackWrapper_ = function(response) {
	        onSucc(makeMapStats(fixChromeStats_(response)));
	      };
	      return origGetStats.apply(this, [successCallbackWrapper_,
	        selector]);
	    }
	    return new Promise((resolve, reject) => {
	      origGetStats.apply(this, [
	        function(response) {
	          resolve(makeMapStats(fixChromeStats_(response)));
	        }, reject]);
	    }).then(onSucc, onErr);
	  };
	}
	function shimSenderReceiverGetStats(window) {
	  if (!(typeof window === 'object' && window.RTCPeerConnection &&
	      window.RTCRtpSender && window.RTCRtpReceiver)) {
	    return;
	  }
	  if (!('getStats' in window.RTCRtpSender.prototype)) {
	    const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
	    if (origGetSenders) {
	      window.RTCPeerConnection.prototype.getSenders = function getSenders() {
	        const senders = origGetSenders.apply(this, []);
	        senders.forEach(sender => sender._pc = this);
	        return senders;
	      };
	    }
	    const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
	    if (origAddTrack) {
	      window.RTCPeerConnection.prototype.addTrack = function addTrack() {
	        const sender = origAddTrack.apply(this, arguments);
	        sender._pc = this;
	        return sender;
	      };
	    }
	    window.RTCRtpSender.prototype.getStats = function getStats() {
	      const sender = this;
	      return this._pc.getStats().then(result =>
	        filterStats(result, sender.track, true));
	    };
	  }
	  if (!('getStats' in window.RTCRtpReceiver.prototype)) {
	    const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
	    if (origGetReceivers) {
	      window.RTCPeerConnection.prototype.getReceivers =
	        function getReceivers() {
	          const receivers = origGetReceivers.apply(this, []);
	          receivers.forEach(receiver => receiver._pc = this);
	          return receivers;
	        };
	    }
	    wrapPeerConnectionEvent(window, 'track', e => {
	      e.receiver._pc = e.srcElement;
	      return e;
	    });
	    window.RTCRtpReceiver.prototype.getStats = function getStats() {
	      const receiver = this;
	      return this._pc.getStats().then(result =>
	        filterStats(result, receiver.track, false));
	    };
	  }
	  if (!('getStats' in window.RTCRtpSender.prototype &&
	      'getStats' in window.RTCRtpReceiver.prototype)) {
	    return;
	  }
	  const origGetStats = window.RTCPeerConnection.prototype.getStats;
	  window.RTCPeerConnection.prototype.getStats = function getStats() {
	    if (arguments.length > 0 &&
	        arguments[0] instanceof window.MediaStreamTrack) {
	      const track = arguments[0];
	      let sender;
	      let receiver;
	      let err;
	      this.getSenders().forEach(s => {
	        if (s.track === track) {
	          if (sender) {
	            err = true;
	          } else {
	            sender = s;
	          }
	        }
	      });
	      this.getReceivers().forEach(r => {
	        if (r.track === track) {
	          if (receiver) {
	            err = true;
	          } else {
	            receiver = r;
	          }
	        }
	        return r.track === track;
	      });
	      if (err || (sender && receiver)) {
	        return Promise.reject(new DOMException(
	          'There are more than one sender or receiver for the track.',
	          'InvalidAccessError'));
	      } else if (sender) {
	        return sender.getStats();
	      } else if (receiver) {
	        return receiver.getStats();
	      }
	      return Promise.reject(new DOMException(
	        'There is no sender or receiver for the track.',
	        'InvalidAccessError'));
	    }
	    return origGetStats.apply(this, arguments);
	  };
	}
	function shimAddTrackRemoveTrackWithNative(window) {
	  window.RTCPeerConnection.prototype.getLocalStreams =
	    function getLocalStreams() {
	      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
	      return Object.keys(this._shimmedLocalStreams)
	        .map(streamId => this._shimmedLocalStreams[streamId][0]);
	    };
	  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
	  window.RTCPeerConnection.prototype.addTrack =
	    function addTrack(track, stream) {
	      if (!stream) {
	        return origAddTrack.apply(this, arguments);
	      }
	      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
	      const sender = origAddTrack.apply(this, arguments);
	      if (!this._shimmedLocalStreams[stream.id]) {
	        this._shimmedLocalStreams[stream.id] = [stream, sender];
	      } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
	        this._shimmedLocalStreams[stream.id].push(sender);
	      }
	      return sender;
	    };
	  const origAddStream = window.RTCPeerConnection.prototype.addStream;
	  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
	    this._shimmedLocalStreams = this._shimmedLocalStreams || {};
	    stream.getTracks().forEach(track => {
	      const alreadyExists = this.getSenders().find(s => s.track === track);
	      if (alreadyExists) {
	        throw new DOMException('Track already exists.',
	            'InvalidAccessError');
	      }
	    });
	    const existingSenders = this.getSenders();
	    origAddStream.apply(this, arguments);
	    const newSenders = this.getSenders()
	      .filter(newSender => existingSenders.indexOf(newSender) === -1);
	    this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
	  };
	  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
	  window.RTCPeerConnection.prototype.removeStream =
	    function removeStream(stream) {
	      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
	      delete this._shimmedLocalStreams[stream.id];
	      return origRemoveStream.apply(this, arguments);
	    };
	  const origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
	  window.RTCPeerConnection.prototype.removeTrack =
	    function removeTrack(sender) {
	      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
	      if (sender) {
	        Object.keys(this._shimmedLocalStreams).forEach(streamId => {
	          const idx = this._shimmedLocalStreams[streamId].indexOf(sender);
	          if (idx !== -1) {
	            this._shimmedLocalStreams[streamId].splice(idx, 1);
	          }
	          if (this._shimmedLocalStreams[streamId].length === 1) {
	            delete this._shimmedLocalStreams[streamId];
	          }
	        });
	      }
	      return origRemoveTrack.apply(this, arguments);
	    };
	}
	function shimAddTrackRemoveTrack(window) {
	  if (!window.RTCPeerConnection) {
	    return;
	  }
	  const browserDetails = detectBrowser(window);
	  if (window.RTCPeerConnection.prototype.addTrack &&
	      browserDetails.version >= 65) {
	    return shimAddTrackRemoveTrackWithNative(window);
	  }
	  const origGetLocalStreams = window.RTCPeerConnection.prototype
	      .getLocalStreams;
	  window.RTCPeerConnection.prototype.getLocalStreams =
	    function getLocalStreams() {
	      const nativeStreams = origGetLocalStreams.apply(this);
	      this._reverseStreams = this._reverseStreams || {};
	      return nativeStreams.map(stream => this._reverseStreams[stream.id]);
	    };
	  const origAddStream = window.RTCPeerConnection.prototype.addStream;
	  window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
	    this._streams = this._streams || {};
	    this._reverseStreams = this._reverseStreams || {};
	    stream.getTracks().forEach(track => {
	      const alreadyExists = this.getSenders().find(s => s.track === track);
	      if (alreadyExists) {
	        throw new DOMException('Track already exists.',
	            'InvalidAccessError');
	      }
	    });
	    if (!this._reverseStreams[stream.id]) {
	      const newStream = new window.MediaStream(stream.getTracks());
	      this._streams[stream.id] = newStream;
	      this._reverseStreams[newStream.id] = stream;
	      stream = newStream;
	    }
	    origAddStream.apply(this, [stream]);
	  };
	  const origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
	  window.RTCPeerConnection.prototype.removeStream =
	    function removeStream(stream) {
	      this._streams = this._streams || {};
	      this._reverseStreams = this._reverseStreams || {};
	      origRemoveStream.apply(this, [(this._streams[stream.id] || stream)]);
	      delete this._reverseStreams[(this._streams[stream.id] ?
	          this._streams[stream.id].id : stream.id)];
	      delete this._streams[stream.id];
	    };
	  window.RTCPeerConnection.prototype.addTrack =
	    function addTrack(track, stream) {
	      if (this.signalingState === 'closed') {
	        throw new DOMException(
	          'The RTCPeerConnection\'s signalingState is \'closed\'.',
	          'InvalidStateError');
	      }
	      const streams = [].slice.call(arguments, 1);
	      if (streams.length !== 1 ||
	          !streams[0].getTracks().find(t => t === track)) {
	        throw new DOMException(
	          'The adapter.js addTrack polyfill only supports a single ' +
	          ' stream which is associated with the specified track.',
	          'NotSupportedError');
	      }
	      const alreadyExists = this.getSenders().find(s => s.track === track);
	      if (alreadyExists) {
	        throw new DOMException('Track already exists.',
	            'InvalidAccessError');
	      }
	      this._streams = this._streams || {};
	      this._reverseStreams = this._reverseStreams || {};
	      const oldStream = this._streams[stream.id];
	      if (oldStream) {
	        oldStream.addTrack(track);
	        Promise.resolve().then(() => {
	          this.dispatchEvent(new Event('negotiationneeded'));
	        });
	      } else {
	        const newStream = new window.MediaStream([track]);
	        this._streams[stream.id] = newStream;
	        this._reverseStreams[newStream.id] = stream;
	        this.addStream(newStream);
	      }
	      return this.getSenders().find(s => s.track === track);
	    };
	  function replaceInternalStreamId(pc, description) {
	    let sdp = description.sdp;
	    Object.keys(pc._reverseStreams || []).forEach(internalId => {
	      const externalStream = pc._reverseStreams[internalId];
	      const internalStream = pc._streams[externalStream.id];
	      sdp = sdp.replace(new RegExp(internalStream.id, 'g'),
	          externalStream.id);
	    });
	    return new RTCSessionDescription({
	      type: description.type,
	      sdp
	    });
	  }
	  function replaceExternalStreamId(pc, description) {
	    let sdp = description.sdp;
	    Object.keys(pc._reverseStreams || []).forEach(internalId => {
	      const externalStream = pc._reverseStreams[internalId];
	      const internalStream = pc._streams[externalStream.id];
	      sdp = sdp.replace(new RegExp(externalStream.id, 'g'),
	          internalStream.id);
	    });
	    return new RTCSessionDescription({
	      type: description.type,
	      sdp
	    });
	  }
	  ['createOffer', 'createAnswer'].forEach(function(method) {
	    const nativeMethod = window.RTCPeerConnection.prototype[method];
	    const methodObj = {[method]() {
	      const args = arguments;
	      const isLegacyCall = arguments.length &&
	          typeof arguments[0] === 'function';
	      if (isLegacyCall) {
	        return nativeMethod.apply(this, [
	          (description) => {
	            const desc = replaceInternalStreamId(this, description);
	            args[0].apply(null, [desc]);
	          },
	          (err) => {
	            if (args[1]) {
	              args[1].apply(null, err);
	            }
	          }, arguments[2]
	        ]);
	      }
	      return nativeMethod.apply(this, arguments)
	      .then(description => replaceInternalStreamId(this, description));
	    }};
	    window.RTCPeerConnection.prototype[method] = methodObj[method];
	  });
	  const origSetLocalDescription =
	      window.RTCPeerConnection.prototype.setLocalDescription;
	  window.RTCPeerConnection.prototype.setLocalDescription =
	    function setLocalDescription() {
	      if (!arguments.length || !arguments[0].type) {
	        return origSetLocalDescription.apply(this, arguments);
	      }
	      arguments[0] = replaceExternalStreamId(this, arguments[0]);
	      return origSetLocalDescription.apply(this, arguments);
	    };
	  const origLocalDescription = Object.getOwnPropertyDescriptor(
	      window.RTCPeerConnection.prototype, 'localDescription');
	  Object.defineProperty(window.RTCPeerConnection.prototype,
	      'localDescription', {
	        get() {
	          const description = origLocalDescription.get.apply(this);
	          if (description.type === '') {
	            return description;
	          }
	          return replaceInternalStreamId(this, description);
	        }
	      });
	  window.RTCPeerConnection.prototype.removeTrack =
	    function removeTrack(sender) {
	      if (this.signalingState === 'closed') {
	        throw new DOMException(
	          'The RTCPeerConnection\'s signalingState is \'closed\'.',
	          'InvalidStateError');
	      }
	      if (!sender._pc) {
	        throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' +
	            'does not implement interface RTCRtpSender.', 'TypeError');
	      }
	      const isLocal = sender._pc === this;
	      if (!isLocal) {
	        throw new DOMException('Sender was not created by this connection.',
	            'InvalidAccessError');
	      }
	      this._streams = this._streams || {};
	      let stream;
	      Object.keys(this._streams).forEach(streamid => {
	        const hasTrack = this._streams[streamid].getTracks()
	          .find(track => sender.track === track);
	        if (hasTrack) {
	          stream = this._streams[streamid];
	        }
	      });
	      if (stream) {
	        if (stream.getTracks().length === 1) {
	          this.removeStream(this._reverseStreams[stream.id]);
	        } else {
	          stream.removeTrack(sender.track);
	        }
	        this.dispatchEvent(new Event('negotiationneeded'));
	      }
	    };
	}
	function shimPeerConnection$2(window) {
	  const browserDetails = detectBrowser(window);
	  if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
	    window.RTCPeerConnection = window.webkitRTCPeerConnection;
	  }
	  if (!window.RTCPeerConnection) {
	    return;
	  }
	  const addIceCandidateNullSupported =
	    window.RTCPeerConnection.prototype.addIceCandidate.length === 0;
	  if (browserDetails.version < 53) {
	    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
	        .forEach(function(method) {
	          const nativeMethod = window.RTCPeerConnection.prototype[method];
	          const methodObj = {[method]() {
	            arguments[0] = new ((method === 'addIceCandidate') ?
	                window.RTCIceCandidate :
	                window.RTCSessionDescription)(arguments[0]);
	            return nativeMethod.apply(this, arguments);
	          }};
	          window.RTCPeerConnection.prototype[method] = methodObj[method];
	        });
	  }
	  const nativeAddIceCandidate =
	      window.RTCPeerConnection.prototype.addIceCandidate;
	  window.RTCPeerConnection.prototype.addIceCandidate =
	    function addIceCandidate() {
	      if (!addIceCandidateNullSupported && !arguments[0]) {
	        if (arguments[1]) {
	          arguments[1].apply(null);
	        }
	        return Promise.resolve();
	      }
	      if (browserDetails.version < 78 &&
	        arguments[0] && arguments[0].candidate === '') {
	        return Promise.resolve();
	      }
	      return nativeAddIceCandidate.apply(this, arguments);
	    };
	}
	function fixNegotiationNeeded(window) {
	  const browserDetails = detectBrowser(window);
	  wrapPeerConnectionEvent(window, 'negotiationneeded', e => {
	    const pc = e.target;
	    if (browserDetails.version < 72 || (pc.getConfiguration &&
	        pc.getConfiguration().sdpSemantics === 'plan-b')) {
	      if (pc.signalingState !== 'stable') {
	        return;
	      }
	    }
	    return e;
	  });
	}

	const chromeShim = /*#__PURE__*/Object.freeze({
		__proto__: null,
		shimMediaStream: shimMediaStream,
		shimOnTrack: shimOnTrack$1,
		shimGetSendersWithDtmf: shimGetSendersWithDtmf,
		shimGetStats: shimGetStats,
		shimSenderReceiverGetStats: shimSenderReceiverGetStats,
		shimAddTrackRemoveTrackWithNative: shimAddTrackRemoveTrackWithNative,
		shimAddTrackRemoveTrack: shimAddTrackRemoveTrack,
		shimPeerConnection: shimPeerConnection$2,
		fixNegotiationNeeded: fixNegotiationNeeded,
		shimGetUserMedia: shimGetUserMedia$3,
		shimGetDisplayMedia: shimGetDisplayMedia$2
	});

	function filterIceServers$1(iceServers, edgeVersion) {
	  let hasTurn = false;
	  iceServers = JSON.parse(JSON.stringify(iceServers));
	  return iceServers.filter(server => {
	    if (server && (server.urls || server.url)) {
	      let urls = server.urls || server.url;
	      if (server.url && !server.urls) {
	        deprecated('RTCIceServer.url', 'RTCIceServer.urls');
	      }
	      const isString = typeof urls === 'string';
	      if (isString) {
	        urls = [urls];
	      }
	      urls = urls.filter(url => {
	        if (url.indexOf('stun:') === 0) {
	          return false;
	        }
	        const validTurn = url.startsWith('turn') &&
	            !url.startsWith('turn:[') &&
	            url.includes('transport=udp');
	        if (validTurn && !hasTurn) {
	          hasTurn = true;
	          return true;
	        }
	        return validTurn && !hasTurn;
	      });
	      delete server.url;
	      server.urls = isString ? urls[0] : urls;
	      return !!urls.length;
	    }
	  });
	}

	var sdp = {exports: {}};

	(function (module) {
		var SDPUtils = {};
		SDPUtils.generateIdentifier = function() {
		  return Math.random().toString(36).substr(2, 10);
		};
		SDPUtils.localCName = SDPUtils.generateIdentifier();
		SDPUtils.splitLines = function(blob) {
		  return blob.trim().split('\n').map(function(line) {
		    return line.trim();
		  });
		};
		SDPUtils.splitSections = function(blob) {
		  var parts = blob.split('\nm=');
		  return parts.map(function(part, index) {
		    return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
		  });
		};
		SDPUtils.getDescription = function(blob) {
		  var sections = SDPUtils.splitSections(blob);
		  return sections && sections[0];
		};
		SDPUtils.getMediaSections = function(blob) {
		  var sections = SDPUtils.splitSections(blob);
		  sections.shift();
		  return sections;
		};
		SDPUtils.matchPrefix = function(blob, prefix) {
		  return SDPUtils.splitLines(blob).filter(function(line) {
		    return line.indexOf(prefix) === 0;
		  });
		};
		SDPUtils.parseCandidate = function(line) {
		  var parts;
		  if (line.indexOf('a=candidate:') === 0) {
		    parts = line.substring(12).split(' ');
		  } else {
		    parts = line.substring(10).split(' ');
		  }
		  var candidate = {
		    foundation: parts[0],
		    component: parseInt(parts[1], 10),
		    protocol: parts[2].toLowerCase(),
		    priority: parseInt(parts[3], 10),
		    ip: parts[4],
		    address: parts[4],
		    port: parseInt(parts[5], 10),
		    type: parts[7]
		  };
		  for (var i = 8; i < parts.length; i += 2) {
		    switch (parts[i]) {
		      case 'raddr':
		        candidate.relatedAddress = parts[i + 1];
		        break;
		      case 'rport':
		        candidate.relatedPort = parseInt(parts[i + 1], 10);
		        break;
		      case 'tcptype':
		        candidate.tcpType = parts[i + 1];
		        break;
		      case 'ufrag':
		        candidate.ufrag = parts[i + 1];
		        candidate.usernameFragment = parts[i + 1];
		        break;
		      default:
		        candidate[parts[i]] = parts[i + 1];
		        break;
		    }
		  }
		  return candidate;
		};
		SDPUtils.writeCandidate = function(candidate) {
		  var sdp = [];
		  sdp.push(candidate.foundation);
		  sdp.push(candidate.component);
		  sdp.push(candidate.protocol.toUpperCase());
		  sdp.push(candidate.priority);
		  sdp.push(candidate.address || candidate.ip);
		  sdp.push(candidate.port);
		  var type = candidate.type;
		  sdp.push('typ');
		  sdp.push(type);
		  if (type !== 'host' && candidate.relatedAddress &&
		      candidate.relatedPort) {
		    sdp.push('raddr');
		    sdp.push(candidate.relatedAddress);
		    sdp.push('rport');
		    sdp.push(candidate.relatedPort);
		  }
		  if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
		    sdp.push('tcptype');
		    sdp.push(candidate.tcpType);
		  }
		  if (candidate.usernameFragment || candidate.ufrag) {
		    sdp.push('ufrag');
		    sdp.push(candidate.usernameFragment || candidate.ufrag);
		  }
		  return 'candidate:' + sdp.join(' ');
		};
		SDPUtils.parseIceOptions = function(line) {
		  return line.substr(14).split(' ');
		};
		SDPUtils.parseRtpMap = function(line) {
		  var parts = line.substr(9).split(' ');
		  var parsed = {
		    payloadType: parseInt(parts.shift(), 10)
		  };
		  parts = parts[0].split('/');
		  parsed.name = parts[0];
		  parsed.clockRate = parseInt(parts[1], 10);
		  parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
		  parsed.numChannels = parsed.channels;
		  return parsed;
		};
		SDPUtils.writeRtpMap = function(codec) {
		  var pt = codec.payloadType;
		  if (codec.preferredPayloadType !== undefined) {
		    pt = codec.preferredPayloadType;
		  }
		  var channels = codec.channels || codec.numChannels || 1;
		  return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
		      (channels !== 1 ? '/' + channels : '') + '\r\n';
		};
		SDPUtils.parseExtmap = function(line) {
		  var parts = line.substr(9).split(' ');
		  return {
		    id: parseInt(parts[0], 10),
		    direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
		    uri: parts[1]
		  };
		};
		SDPUtils.writeExtmap = function(headerExtension) {
		  return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
		      (headerExtension.direction && headerExtension.direction !== 'sendrecv'
		        ? '/' + headerExtension.direction
		        : '') +
		      ' ' + headerExtension.uri + '\r\n';
		};
		SDPUtils.parseFmtp = function(line) {
		  var parsed = {};
		  var kv;
		  var parts = line.substr(line.indexOf(' ') + 1).split(';');
		  for (var j = 0; j < parts.length; j++) {
		    kv = parts[j].trim().split('=');
		    parsed[kv[0].trim()] = kv[1];
		  }
		  return parsed;
		};
		SDPUtils.writeFmtp = function(codec) {
		  var line = '';
		  var pt = codec.payloadType;
		  if (codec.preferredPayloadType !== undefined) {
		    pt = codec.preferredPayloadType;
		  }
		  if (codec.parameters && Object.keys(codec.parameters).length) {
		    var params = [];
		    Object.keys(codec.parameters).forEach(function(param) {
		      if (codec.parameters[param]) {
		        params.push(param + '=' + codec.parameters[param]);
		      } else {
		        params.push(param);
		      }
		    });
		    line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
		  }
		  return line;
		};
		SDPUtils.parseRtcpFb = function(line) {
		  var parts = line.substr(line.indexOf(' ') + 1).split(' ');
		  return {
		    type: parts.shift(),
		    parameter: parts.join(' ')
		  };
		};
		SDPUtils.writeRtcpFb = function(codec) {
		  var lines = '';
		  var pt = codec.payloadType;
		  if (codec.preferredPayloadType !== undefined) {
		    pt = codec.preferredPayloadType;
		  }
		  if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
		    codec.rtcpFeedback.forEach(function(fb) {
		      lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
		      (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
		          '\r\n';
		    });
		  }
		  return lines;
		};
		SDPUtils.parseSsrcMedia = function(line) {
		  var sp = line.indexOf(' ');
		  var parts = {
		    ssrc: parseInt(line.substr(7, sp - 7), 10)
		  };
		  var colon = line.indexOf(':', sp);
		  if (colon > -1) {
		    parts.attribute = line.substr(sp + 1, colon - sp - 1);
		    parts.value = line.substr(colon + 1);
		  } else {
		    parts.attribute = line.substr(sp + 1);
		  }
		  return parts;
		};
		SDPUtils.parseSsrcGroup = function(line) {
		  var parts = line.substr(13).split(' ');
		  return {
		    semantics: parts.shift(),
		    ssrcs: parts.map(function(ssrc) {
		      return parseInt(ssrc, 10);
		    })
		  };
		};
		SDPUtils.getMid = function(mediaSection) {
		  var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
		  if (mid) {
		    return mid.substr(6);
		  }
		};
		SDPUtils.parseFingerprint = function(line) {
		  var parts = line.substr(14).split(' ');
		  return {
		    algorithm: parts[0].toLowerCase(),
		    value: parts[1]
		  };
		};
		SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
		  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
		    'a=fingerprint:');
		  return {
		    role: 'auto',
		    fingerprints: lines.map(SDPUtils.parseFingerprint)
		  };
		};
		SDPUtils.writeDtlsParameters = function(params, setupType) {
		  var sdp = 'a=setup:' + setupType + '\r\n';
		  params.fingerprints.forEach(function(fp) {
		    sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
		  });
		  return sdp;
		};
		SDPUtils.parseCryptoLine = function(line) {
		  var parts = line.substr(9).split(' ');
		  return {
		    tag: parseInt(parts[0], 10),
		    cryptoSuite: parts[1],
		    keyParams: parts[2],
		    sessionParams: parts.slice(3),
		  };
		};
		SDPUtils.writeCryptoLine = function(parameters) {
		  return 'a=crypto:' + parameters.tag + ' ' +
		    parameters.cryptoSuite + ' ' +
		    (typeof parameters.keyParams === 'object'
		      ? SDPUtils.writeCryptoKeyParams(parameters.keyParams)
		      : parameters.keyParams) +
		    (parameters.sessionParams ? ' ' + parameters.sessionParams.join(' ') : '') +
		    '\r\n';
		};
		SDPUtils.parseCryptoKeyParams = function(keyParams) {
		  if (keyParams.indexOf('inline:') !== 0) {
		    return null;
		  }
		  var parts = keyParams.substr(7).split('|');
		  return {
		    keyMethod: 'inline',
		    keySalt: parts[0],
		    lifeTime: parts[1],
		    mkiValue: parts[2] ? parts[2].split(':')[0] : undefined,
		    mkiLength: parts[2] ? parts[2].split(':')[1] : undefined,
		  };
		};
		SDPUtils.writeCryptoKeyParams = function(keyParams) {
		  return keyParams.keyMethod + ':'
		    + keyParams.keySalt +
		    (keyParams.lifeTime ? '|' + keyParams.lifeTime : '') +
		    (keyParams.mkiValue && keyParams.mkiLength
		      ? '|' + keyParams.mkiValue + ':' + keyParams.mkiLength
		      : '');
		};
		SDPUtils.getCryptoParameters = function(mediaSection, sessionpart) {
		  var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
		    'a=crypto:');
		  return lines.map(SDPUtils.parseCryptoLine);
		};
		SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
		  var ufrag = SDPUtils.matchPrefix(mediaSection + sessionpart,
		    'a=ice-ufrag:')[0];
		  var pwd = SDPUtils.matchPrefix(mediaSection + sessionpart,
		    'a=ice-pwd:')[0];
		  if (!(ufrag && pwd)) {
		    return null;
		  }
		  return {
		    usernameFragment: ufrag.substr(12),
		    password: pwd.substr(10),
		  };
		};
		SDPUtils.writeIceParameters = function(params) {
		  return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
		      'a=ice-pwd:' + params.password + '\r\n';
		};
		SDPUtils.parseRtpParameters = function(mediaSection) {
		  var description = {
		    codecs: [],
		    headerExtensions: [],
		    fecMechanisms: [],
		    rtcp: []
		  };
		  var lines = SDPUtils.splitLines(mediaSection);
		  var mline = lines[0].split(' ');
		  for (var i = 3; i < mline.length; i++) {
		    var pt = mline[i];
		    var rtpmapline = SDPUtils.matchPrefix(
		      mediaSection, 'a=rtpmap:' + pt + ' ')[0];
		    if (rtpmapline) {
		      var codec = SDPUtils.parseRtpMap(rtpmapline);
		      var fmtps = SDPUtils.matchPrefix(
		        mediaSection, 'a=fmtp:' + pt + ' ');
		      codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
		      codec.rtcpFeedback = SDPUtils.matchPrefix(
		        mediaSection, 'a=rtcp-fb:' + pt + ' ')
		        .map(SDPUtils.parseRtcpFb);
		      description.codecs.push(codec);
		      switch (codec.name.toUpperCase()) {
		        case 'RED':
		        case 'ULPFEC':
		          description.fecMechanisms.push(codec.name.toUpperCase());
		          break;
		      }
		    }
		  }
		  SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
		    description.headerExtensions.push(SDPUtils.parseExtmap(line));
		  });
		  return description;
		};
		SDPUtils.writeRtpDescription = function(kind, caps) {
		  var sdp = '';
		  sdp += 'm=' + kind + ' ';
		  sdp += caps.codecs.length > 0 ? '9' : '0';
		  sdp += ' UDP/TLS/RTP/SAVPF ';
		  sdp += caps.codecs.map(function(codec) {
		    if (codec.preferredPayloadType !== undefined) {
		      return codec.preferredPayloadType;
		    }
		    return codec.payloadType;
		  }).join(' ') + '\r\n';
		  sdp += 'c=IN IP4 0.0.0.0\r\n';
		  sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';
		  caps.codecs.forEach(function(codec) {
		    sdp += SDPUtils.writeRtpMap(codec);
		    sdp += SDPUtils.writeFmtp(codec);
		    sdp += SDPUtils.writeRtcpFb(codec);
		  });
		  var maxptime = 0;
		  caps.codecs.forEach(function(codec) {
		    if (codec.maxptime > maxptime) {
		      maxptime = codec.maxptime;
		    }
		  });
		  if (maxptime > 0) {
		    sdp += 'a=maxptime:' + maxptime + '\r\n';
		  }
		  sdp += 'a=rtcp-mux\r\n';
		  if (caps.headerExtensions) {
		    caps.headerExtensions.forEach(function(extension) {
		      sdp += SDPUtils.writeExtmap(extension);
		    });
		  }
		  return sdp;
		};
		SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
		  var encodingParameters = [];
		  var description = SDPUtils.parseRtpParameters(mediaSection);
		  var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
		  var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;
		  var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
		    .map(function(line) {
		      return SDPUtils.parseSsrcMedia(line);
		    })
		    .filter(function(parts) {
		      return parts.attribute === 'cname';
		    });
		  var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
		  var secondarySsrc;
		  var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
		    .map(function(line) {
		      var parts = line.substr(17).split(' ');
		      return parts.map(function(part) {
		        return parseInt(part, 10);
		      });
		    });
		  if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
		    secondarySsrc = flows[0][1];
		  }
		  description.codecs.forEach(function(codec) {
		    if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
		      var encParam = {
		        ssrc: primarySsrc,
		        codecPayloadType: parseInt(codec.parameters.apt, 10)
		      };
		      if (primarySsrc && secondarySsrc) {
		        encParam.rtx = {ssrc: secondarySsrc};
		      }
		      encodingParameters.push(encParam);
		      if (hasRed) {
		        encParam = JSON.parse(JSON.stringify(encParam));
		        encParam.fec = {
		          ssrc: primarySsrc,
		          mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
		        };
		        encodingParameters.push(encParam);
		      }
		    }
		  });
		  if (encodingParameters.length === 0 && primarySsrc) {
		    encodingParameters.push({
		      ssrc: primarySsrc
		    });
		  }
		  var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
		  if (bandwidth.length) {
		    if (bandwidth[0].indexOf('b=TIAS:') === 0) {
		      bandwidth = parseInt(bandwidth[0].substr(7), 10);
		    } else if (bandwidth[0].indexOf('b=AS:') === 0) {
		      bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
		          - (50 * 40 * 8);
		    } else {
		      bandwidth = undefined;
		    }
		    encodingParameters.forEach(function(params) {
		      params.maxBitrate = bandwidth;
		    });
		  }
		  return encodingParameters;
		};
		SDPUtils.parseRtcpParameters = function(mediaSection) {
		  var rtcpParameters = {};
		  var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
		    .map(function(line) {
		      return SDPUtils.parseSsrcMedia(line);
		    })
		    .filter(function(obj) {
		      return obj.attribute === 'cname';
		    })[0];
		  if (remoteSsrc) {
		    rtcpParameters.cname = remoteSsrc.value;
		    rtcpParameters.ssrc = remoteSsrc.ssrc;
		  }
		  var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
		  rtcpParameters.reducedSize = rsize.length > 0;
		  rtcpParameters.compound = rsize.length === 0;
		  var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
		  rtcpParameters.mux = mux.length > 0;
		  return rtcpParameters;
		};
		SDPUtils.parseMsid = function(mediaSection) {
		  var parts;
		  var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
		  if (spec.length === 1) {
		    parts = spec[0].substr(7).split(' ');
		    return {stream: parts[0], track: parts[1]};
		  }
		  var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
		    .map(function(line) {
		      return SDPUtils.parseSsrcMedia(line);
		    })
		    .filter(function(msidParts) {
		      return msidParts.attribute === 'msid';
		    });
		  if (planB.length > 0) {
		    parts = planB[0].value.split(' ');
		    return {stream: parts[0], track: parts[1]};
		  }
		};
		SDPUtils.parseSctpDescription = function(mediaSection) {
		  var mline = SDPUtils.parseMLine(mediaSection);
		  var maxSizeLine = SDPUtils.matchPrefix(mediaSection, 'a=max-message-size:');
		  var maxMessageSize;
		  if (maxSizeLine.length > 0) {
		    maxMessageSize = parseInt(maxSizeLine[0].substr(19), 10);
		  }
		  if (isNaN(maxMessageSize)) {
		    maxMessageSize = 65536;
		  }
		  var sctpPort = SDPUtils.matchPrefix(mediaSection, 'a=sctp-port:');
		  if (sctpPort.length > 0) {
		    return {
		      port: parseInt(sctpPort[0].substr(12), 10),
		      protocol: mline.fmt,
		      maxMessageSize: maxMessageSize
		    };
		  }
		  var sctpMapLines = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:');
		  if (sctpMapLines.length > 0) {
		    var parts = SDPUtils.matchPrefix(mediaSection, 'a=sctpmap:')[0]
		      .substr(10)
		      .split(' ');
		    return {
		      port: parseInt(parts[0], 10),
		      protocol: parts[1],
		      maxMessageSize: maxMessageSize
		    };
		  }
		};
		SDPUtils.writeSctpDescription = function(media, sctp) {
		  var output = [];
		  if (media.protocol !== 'DTLS/SCTP') {
		    output = [
		      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.protocol + '\r\n',
		      'c=IN IP4 0.0.0.0\r\n',
		      'a=sctp-port:' + sctp.port + '\r\n'
		    ];
		  } else {
		    output = [
		      'm=' + media.kind + ' 9 ' + media.protocol + ' ' + sctp.port + '\r\n',
		      'c=IN IP4 0.0.0.0\r\n',
		      'a=sctpmap:' + sctp.port + ' ' + sctp.protocol + ' 65535\r\n'
		    ];
		  }
		  if (sctp.maxMessageSize !== undefined) {
		    output.push('a=max-message-size:' + sctp.maxMessageSize + '\r\n');
		  }
		  return output.join('');
		};
		SDPUtils.generateSessionId = function() {
		  return Math.random().toString().substr(2, 21);
		};
		SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
		  var sessionId;
		  var version = sessVer !== undefined ? sessVer : 2;
		  if (sessId) {
		    sessionId = sessId;
		  } else {
		    sessionId = SDPUtils.generateSessionId();
		  }
		  var user = sessUser || 'thisisadapterortc';
		  return 'v=0\r\n' +
		      'o=' + user + ' ' + sessionId + ' ' + version +
		        ' IN IP4 127.0.0.1\r\n' +
		      's=-\r\n' +
		      't=0 0\r\n';
		};
		SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
		  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);
		  sdp += SDPUtils.writeIceParameters(
		    transceiver.iceGatherer.getLocalParameters());
		  sdp += SDPUtils.writeDtlsParameters(
		    transceiver.dtlsTransport.getLocalParameters(),
		    type === 'offer' ? 'actpass' : 'active');
		  sdp += 'a=mid:' + transceiver.mid + '\r\n';
		  if (transceiver.direction) {
		    sdp += 'a=' + transceiver.direction + '\r\n';
		  } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
		    sdp += 'a=sendrecv\r\n';
		  } else if (transceiver.rtpSender) {
		    sdp += 'a=sendonly\r\n';
		  } else if (transceiver.rtpReceiver) {
		    sdp += 'a=recvonly\r\n';
		  } else {
		    sdp += 'a=inactive\r\n';
		  }
		  if (transceiver.rtpSender) {
		    var msid = 'msid:' + stream.id + ' ' +
		        transceiver.rtpSender.track.id + '\r\n';
		    sdp += 'a=' + msid;
		    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
		        ' ' + msid;
		    if (transceiver.sendEncodingParameters[0].rtx) {
		      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
		          ' ' + msid;
		      sdp += 'a=ssrc-group:FID ' +
		          transceiver.sendEncodingParameters[0].ssrc + ' ' +
		          transceiver.sendEncodingParameters[0].rtx.ssrc +
		          '\r\n';
		    }
		  }
		  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
		      ' cname:' + SDPUtils.localCName + '\r\n';
		  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
		    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
		        ' cname:' + SDPUtils.localCName + '\r\n';
		  }
		  return sdp;
		};
		SDPUtils.getDirection = function(mediaSection, sessionpart) {
		  var lines = SDPUtils.splitLines(mediaSection);
		  for (var i = 0; i < lines.length; i++) {
		    switch (lines[i]) {
		      case 'a=sendrecv':
		      case 'a=sendonly':
		      case 'a=recvonly':
		      case 'a=inactive':
		        return lines[i].substr(2);
		    }
		  }
		  if (sessionpart) {
		    return SDPUtils.getDirection(sessionpart);
		  }
		  return 'sendrecv';
		};
		SDPUtils.getKind = function(mediaSection) {
		  var lines = SDPUtils.splitLines(mediaSection);
		  var mline = lines[0].split(' ');
		  return mline[0].substr(2);
		};
		SDPUtils.isRejected = function(mediaSection) {
		  return mediaSection.split(' ', 2)[1] === '0';
		};
		SDPUtils.parseMLine = function(mediaSection) {
		  var lines = SDPUtils.splitLines(mediaSection);
		  var parts = lines[0].substr(2).split(' ');
		  return {
		    kind: parts[0],
		    port: parseInt(parts[1], 10),
		    protocol: parts[2],
		    fmt: parts.slice(3).join(' ')
		  };
		};
		SDPUtils.parseOLine = function(mediaSection) {
		  var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
		  var parts = line.substr(2).split(' ');
		  return {
		    username: parts[0],
		    sessionId: parts[1],
		    sessionVersion: parseInt(parts[2], 10),
		    netType: parts[3],
		    addressType: parts[4],
		    address: parts[5]
		  };
		};
		SDPUtils.isValidSDP = function(blob) {
		  if (typeof blob !== 'string' || blob.length === 0) {
		    return false;
		  }
		  var lines = SDPUtils.splitLines(blob);
		  for (var i = 0; i < lines.length; i++) {
		    if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
		      return false;
		    }
		  }
		  return true;
		};
		{
		  module.exports = SDPUtils;
		}
	} (sdp));
	const SDPUtils$1 = sdp.exports;

	var SDPUtils = sdp.exports;
	function fixStatsType(stat) {
	  return {
	    inboundrtp: 'inbound-rtp',
	    outboundrtp: 'outbound-rtp',
	    candidatepair: 'candidate-pair',
	    localcandidate: 'local-candidate',
	    remotecandidate: 'remote-candidate'
	  }[stat.type] || stat.type;
	}
	function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
	  var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);
	  sdp += SDPUtils.writeIceParameters(
	      transceiver.iceGatherer.getLocalParameters());
	  sdp += SDPUtils.writeDtlsParameters(
	      transceiver.dtlsTransport.getLocalParameters(),
	      type === 'offer' ? 'actpass' : dtlsRole || 'active');
	  sdp += 'a=mid:' + transceiver.mid + '\r\n';
	  if (transceiver.rtpSender && transceiver.rtpReceiver) {
	    sdp += 'a=sendrecv\r\n';
	  } else if (transceiver.rtpSender) {
	    sdp += 'a=sendonly\r\n';
	  } else if (transceiver.rtpReceiver) {
	    sdp += 'a=recvonly\r\n';
	  } else {
	    sdp += 'a=inactive\r\n';
	  }
	  if (transceiver.rtpSender) {
	    var trackId = transceiver.rtpSender._initialTrackId ||
	        transceiver.rtpSender.track.id;
	    transceiver.rtpSender._initialTrackId = trackId;
	    var msid = 'msid:' + (stream ? stream.id : '-') + ' ' +
	        trackId + '\r\n';
	    sdp += 'a=' + msid;
	    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
	        ' ' + msid;
	    if (transceiver.sendEncodingParameters[0].rtx) {
	      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
	          ' ' + msid;
	      sdp += 'a=ssrc-group:FID ' +
	          transceiver.sendEncodingParameters[0].ssrc + ' ' +
	          transceiver.sendEncodingParameters[0].rtx.ssrc +
	          '\r\n';
	    }
	  }
	  sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
	      ' cname:' + SDPUtils.localCName + '\r\n';
	  if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
	    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
	        ' cname:' + SDPUtils.localCName + '\r\n';
	  }
	  return sdp;
	}
	function filterIceServers(iceServers, edgeVersion) {
	  var hasTurn = false;
	  iceServers = JSON.parse(JSON.stringify(iceServers));
	  return iceServers.filter(function(server) {
	    if (server && (server.urls || server.url)) {
	      var urls = server.urls || server.url;
	      if (server.url && !server.urls) {
	        console.warn('RTCIceServer.url is deprecated! Use urls instead.');
	      }
	      var isString = typeof urls === 'string';
	      if (isString) {
	        urls = [urls];
	      }
	      urls = urls.filter(function(url) {
	        var validTurn = url.indexOf('turn:') === 0 &&
	            url.indexOf('transport=udp') !== -1 &&
	            url.indexOf('turn:[') === -1 &&
	            !hasTurn;
	        if (validTurn) {
	          hasTurn = true;
	          return true;
	        }
	        return url.indexOf('stun:') === 0 && edgeVersion >= 14393 &&
	            url.indexOf('?transport=udp') === -1;
	      });
	      delete server.url;
	      server.urls = isString ? urls[0] : urls;
	      return !!urls.length;
	    }
	  });
	}
	function getCommonCapabilities(localCapabilities, remoteCapabilities) {
	  var commonCapabilities = {
	    codecs: [],
	    headerExtensions: [],
	    fecMechanisms: []
	  };
	  var findCodecByPayloadType = function(pt, codecs) {
	    pt = parseInt(pt, 10);
	    for (var i = 0; i < codecs.length; i++) {
	      if (codecs[i].payloadType === pt ||
	          codecs[i].preferredPayloadType === pt) {
	        return codecs[i];
	      }
	    }
	  };
	  var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
	    var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
	    var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
	    return lCodec && rCodec &&
	        lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
	  };
	  localCapabilities.codecs.forEach(function(lCodec) {
	    for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
	      var rCodec = remoteCapabilities.codecs[i];
	      if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
	          lCodec.clockRate === rCodec.clockRate) {
	        if (lCodec.name.toLowerCase() === 'rtx' &&
	            lCodec.parameters && rCodec.parameters.apt) {
	          if (!rtxCapabilityMatches(lCodec, rCodec,
	              localCapabilities.codecs, remoteCapabilities.codecs)) {
	            continue;
	          }
	        }
	        rCodec = JSON.parse(JSON.stringify(rCodec));
	        rCodec.numChannels = Math.min(lCodec.numChannels,
	            rCodec.numChannels);
	        commonCapabilities.codecs.push(rCodec);
	        rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
	          for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
	            if (lCodec.rtcpFeedback[j].type === fb.type &&
	                lCodec.rtcpFeedback[j].parameter === fb.parameter) {
	              return true;
	            }
	          }
	          return false;
	        });
	        break;
	      }
	    }
	  });
	  localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
	    for (var i = 0; i < remoteCapabilities.headerExtensions.length;
	         i++) {
	      var rHeaderExtension = remoteCapabilities.headerExtensions[i];
	      if (lHeaderExtension.uri === rHeaderExtension.uri) {
	        commonCapabilities.headerExtensions.push(rHeaderExtension);
	        break;
	      }
	    }
	  });
	  return commonCapabilities;
	}
	function isActionAllowedInSignalingState(action, type, signalingState) {
	  return {
	    offer: {
	      setLocalDescription: ['stable', 'have-local-offer'],
	      setRemoteDescription: ['stable', 'have-remote-offer']
	    },
	    answer: {
	      setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
	      setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
	    }
	  }[type][action].indexOf(signalingState) !== -1;
	}
	function maybeAddCandidate(iceTransport, candidate) {
	  var alreadyAdded = iceTransport.getRemoteCandidates()
	      .find(function(remoteCandidate) {
	        return candidate.foundation === remoteCandidate.foundation &&
	            candidate.ip === remoteCandidate.ip &&
	            candidate.port === remoteCandidate.port &&
	            candidate.priority === remoteCandidate.priority &&
	            candidate.protocol === remoteCandidate.protocol &&
	            candidate.type === remoteCandidate.type;
	      });
	  if (!alreadyAdded) {
	    iceTransport.addRemoteCandidate(candidate);
	  }
	  return !alreadyAdded;
	}
	function makeError(name, description) {
	  var e = new Error(description);
	  e.name = name;
	  e.code = {
	    NotSupportedError: 9,
	    InvalidStateError: 11,
	    InvalidAccessError: 15,
	    TypeError: undefined,
	    OperationError: undefined
	  }[name];
	  return e;
	}
	var rtcpeerconnection = function(window, edgeVersion) {
	  function addTrackToStreamAndFireEvent(track, stream) {
	    stream.addTrack(track);
	    stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack',
	        {track: track}));
	  }
	  function removeTrackFromStreamAndFireEvent(track, stream) {
	    stream.removeTrack(track);
	    stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack',
	        {track: track}));
	  }
	  function fireAddTrack(pc, track, receiver, streams) {
	    var trackEvent = new Event('track');
	    trackEvent.track = track;
	    trackEvent.receiver = receiver;
	    trackEvent.transceiver = {receiver: receiver};
	    trackEvent.streams = streams;
	    window.setTimeout(function() {
	      pc._dispatchEvent('track', trackEvent);
	    });
	  }
	  var RTCPeerConnection = function(config) {
	    var pc = this;
	    var _eventTarget = document.createDocumentFragment();
	    ['addEventListener', 'removeEventListener', 'dispatchEvent']
	        .forEach(function(method) {
	          pc[method] = _eventTarget[method].bind(_eventTarget);
	        });
	    this.canTrickleIceCandidates = null;
	    this.needNegotiation = false;
	    this.localStreams = [];
	    this.remoteStreams = [];
	    this._localDescription = null;
	    this._remoteDescription = null;
	    this.signalingState = 'stable';
	    this.iceConnectionState = 'new';
	    this.connectionState = 'new';
	    this.iceGatheringState = 'new';
	    config = JSON.parse(JSON.stringify(config || {}));
	    this.usingBundle = config.bundlePolicy === 'max-bundle';
	    if (config.rtcpMuxPolicy === 'negotiate') {
	      throw(makeError('NotSupportedError',
	          'rtcpMuxPolicy \'negotiate\' is not supported'));
	    } else if (!config.rtcpMuxPolicy) {
	      config.rtcpMuxPolicy = 'require';
	    }
	    switch (config.iceTransportPolicy) {
	      case 'all':
	      case 'relay':
	        break;
	      default:
	        config.iceTransportPolicy = 'all';
	        break;
	    }
	    switch (config.bundlePolicy) {
	      case 'balanced':
	      case 'max-compat':
	      case 'max-bundle':
	        break;
	      default:
	        config.bundlePolicy = 'balanced';
	        break;
	    }
	    config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);
	    this._iceGatherers = [];
	    if (config.iceCandidatePoolSize) {
	      for (var i = config.iceCandidatePoolSize; i > 0; i--) {
	        this._iceGatherers.push(new window.RTCIceGatherer({
	          iceServers: config.iceServers,
	          gatherPolicy: config.iceTransportPolicy
	        }));
	      }
	    } else {
	      config.iceCandidatePoolSize = 0;
	    }
	    this._config = config;
	    this.transceivers = [];
	    this._sdpSessionId = SDPUtils.generateSessionId();
	    this._sdpSessionVersion = 0;
	    this._dtlsRole = undefined;
	    this._isClosed = false;
	  };
	  Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
	    configurable: true,
	    get: function() {
	      return this._localDescription;
	    }
	  });
	  Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
	    configurable: true,
	    get: function() {
	      return this._remoteDescription;
	    }
	  });
	  RTCPeerConnection.prototype.onicecandidate = null;
	  RTCPeerConnection.prototype.onaddstream = null;
	  RTCPeerConnection.prototype.ontrack = null;
	  RTCPeerConnection.prototype.onremovestream = null;
	  RTCPeerConnection.prototype.onsignalingstatechange = null;
	  RTCPeerConnection.prototype.oniceconnectionstatechange = null;
	  RTCPeerConnection.prototype.onconnectionstatechange = null;
	  RTCPeerConnection.prototype.onicegatheringstatechange = null;
	  RTCPeerConnection.prototype.onnegotiationneeded = null;
	  RTCPeerConnection.prototype.ondatachannel = null;
	  RTCPeerConnection.prototype._dispatchEvent = function(name, event) {
	    if (this._isClosed) {
	      return;
	    }
	    this.dispatchEvent(event);
	    if (typeof this['on' + name] === 'function') {
	      this['on' + name](event);
	    }
	  };
	  RTCPeerConnection.prototype._emitGatheringStateChange = function() {
	    var event = new Event('icegatheringstatechange');
	    this._dispatchEvent('icegatheringstatechange', event);
	  };
	  RTCPeerConnection.prototype.getConfiguration = function() {
	    return this._config;
	  };
	  RTCPeerConnection.prototype.getLocalStreams = function() {
	    return this.localStreams;
	  };
	  RTCPeerConnection.prototype.getRemoteStreams = function() {
	    return this.remoteStreams;
	  };
	  RTCPeerConnection.prototype._createTransceiver = function(kind, doNotAdd) {
	    var hasBundleTransport = this.transceivers.length > 0;
	    var transceiver = {
	      track: null,
	      iceGatherer: null,
	      iceTransport: null,
	      dtlsTransport: null,
	      localCapabilities: null,
	      remoteCapabilities: null,
	      rtpSender: null,
	      rtpReceiver: null,
	      kind: kind,
	      mid: null,
	      sendEncodingParameters: null,
	      recvEncodingParameters: null,
	      stream: null,
	      associatedRemoteMediaStreams: [],
	      wantReceive: true
	    };
	    if (this.usingBundle && hasBundleTransport) {
	      transceiver.iceTransport = this.transceivers[0].iceTransport;
	      transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
	    } else {
	      var transports = this._createIceAndDtlsTransports();
	      transceiver.iceTransport = transports.iceTransport;
	      transceiver.dtlsTransport = transports.dtlsTransport;
	    }
	    if (!doNotAdd) {
	      this.transceivers.push(transceiver);
	    }
	    return transceiver;
	  };
	  RTCPeerConnection.prototype.addTrack = function(track, stream) {
	    if (this._isClosed) {
	      throw makeError('InvalidStateError',
	          'Attempted to call addTrack on a closed peerconnection.');
	    }
	    var alreadyExists = this.transceivers.find(function(s) {
	      return s.track === track;
	    });
	    if (alreadyExists) {
	      throw makeError('InvalidAccessError', 'Track already exists.');
	    }
	    var transceiver;
	    for (var i = 0; i < this.transceivers.length; i++) {
	      if (!this.transceivers[i].track &&
	          this.transceivers[i].kind === track.kind) {
	        transceiver = this.transceivers[i];
	      }
	    }
	    if (!transceiver) {
	      transceiver = this._createTransceiver(track.kind);
	    }
	    this._maybeFireNegotiationNeeded();
	    if (this.localStreams.indexOf(stream) === -1) {
	      this.localStreams.push(stream);
	    }
	    transceiver.track = track;
	    transceiver.stream = stream;
	    transceiver.rtpSender = new window.RTCRtpSender(track,
	        transceiver.dtlsTransport);
	    return transceiver.rtpSender;
	  };
	  RTCPeerConnection.prototype.addStream = function(stream) {
	    var pc = this;
	    if (edgeVersion >= 15025) {
	      stream.getTracks().forEach(function(track) {
	        pc.addTrack(track, stream);
	      });
	    } else {
	      var clonedStream = stream.clone();
	      stream.getTracks().forEach(function(track, idx) {
	        var clonedTrack = clonedStream.getTracks()[idx];
	        track.addEventListener('enabled', function(event) {
	          clonedTrack.enabled = event.enabled;
	        });
	      });
	      clonedStream.getTracks().forEach(function(track) {
	        pc.addTrack(track, clonedStream);
	      });
	    }
	  };
	  RTCPeerConnection.prototype.removeTrack = function(sender) {
	    if (this._isClosed) {
	      throw makeError('InvalidStateError',
	          'Attempted to call removeTrack on a closed peerconnection.');
	    }
	    if (!(sender instanceof window.RTCRtpSender)) {
	      throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' +
	          'does not implement interface RTCRtpSender.');
	    }
	    var transceiver = this.transceivers.find(function(t) {
	      return t.rtpSender === sender;
	    });
	    if (!transceiver) {
	      throw makeError('InvalidAccessError',
	          'Sender was not created by this connection.');
	    }
	    var stream = transceiver.stream;
	    transceiver.rtpSender.stop();
	    transceiver.rtpSender = null;
	    transceiver.track = null;
	    transceiver.stream = null;
	    var localStreams = this.transceivers.map(function(t) {
	      return t.stream;
	    });
	    if (localStreams.indexOf(stream) === -1 &&
	        this.localStreams.indexOf(stream) > -1) {
	      this.localStreams.splice(this.localStreams.indexOf(stream), 1);
	    }
	    this._maybeFireNegotiationNeeded();
	  };
	  RTCPeerConnection.prototype.removeStream = function(stream) {
	    var pc = this;
	    stream.getTracks().forEach(function(track) {
	      var sender = pc.getSenders().find(function(s) {
	        return s.track === track;
	      });
	      if (sender) {
	        pc.removeTrack(sender);
	      }
	    });
	  };
	  RTCPeerConnection.prototype.getSenders = function() {
	    return this.transceivers.filter(function(transceiver) {
	      return !!transceiver.rtpSender;
	    })
	    .map(function(transceiver) {
	      return transceiver.rtpSender;
	    });
	  };
	  RTCPeerConnection.prototype.getReceivers = function() {
	    return this.transceivers.filter(function(transceiver) {
	      return !!transceiver.rtpReceiver;
	    })
	    .map(function(transceiver) {
	      return transceiver.rtpReceiver;
	    });
	  };
	  RTCPeerConnection.prototype._createIceGatherer = function(sdpMLineIndex,
	      usingBundle) {
	    var pc = this;
	    if (usingBundle && sdpMLineIndex > 0) {
	      return this.transceivers[0].iceGatherer;
	    } else if (this._iceGatherers.length) {
	      return this._iceGatherers.shift();
	    }
	    var iceGatherer = new window.RTCIceGatherer({
	      iceServers: this._config.iceServers,
	      gatherPolicy: this._config.iceTransportPolicy
	    });
	    Object.defineProperty(iceGatherer, 'state',
	        {value: 'new', writable: true}
	    );
	    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
	    this.transceivers[sdpMLineIndex].bufferCandidates = function(event) {
	      var end = !event.candidate || Object.keys(event.candidate).length === 0;
	      iceGatherer.state = end ? 'completed' : 'gathering';
	      if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
	        pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
	      }
	    };
	    iceGatherer.addEventListener('localcandidate',
	      this.transceivers[sdpMLineIndex].bufferCandidates);
	    return iceGatherer;
	  };
	  RTCPeerConnection.prototype._gather = function(mid, sdpMLineIndex) {
	    var pc = this;
	    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
	    if (iceGatherer.onlocalcandidate) {
	      return;
	    }
	    var bufferedCandidateEvents =
	      this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
	    this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
	    iceGatherer.removeEventListener('localcandidate',
	      this.transceivers[sdpMLineIndex].bufferCandidates);
	    iceGatherer.onlocalcandidate = function(evt) {
	      if (pc.usingBundle && sdpMLineIndex > 0) {
	        return;
	      }
	      var event = new Event('icecandidate');
	      event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};
	      var cand = evt.candidate;
	      var end = !cand || Object.keys(cand).length === 0;
	      if (end) {
	        if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
	          iceGatherer.state = 'completed';
	        }
	      } else {
	        if (iceGatherer.state === 'new') {
	          iceGatherer.state = 'gathering';
	        }
	        cand.component = 1;
	        cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;
	        var serializedCandidate = SDPUtils.writeCandidate(cand);
	        event.candidate = Object.assign(event.candidate,
	            SDPUtils.parseCandidate(serializedCandidate));
	        event.candidate.candidate = serializedCandidate;
	        event.candidate.toJSON = function() {
	          return {
	            candidate: event.candidate.candidate,
	            sdpMid: event.candidate.sdpMid,
	            sdpMLineIndex: event.candidate.sdpMLineIndex,
	            usernameFragment: event.candidate.usernameFragment
	          };
	        };
	      }
	      var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);
	      if (!end) {
	        sections[event.candidate.sdpMLineIndex] +=
	            'a=' + event.candidate.candidate + '\r\n';
	      } else {
	        sections[event.candidate.sdpMLineIndex] +=
	            'a=end-of-candidates\r\n';
	      }
	      pc._localDescription.sdp =
	          SDPUtils.getDescription(pc._localDescription.sdp) +
	          sections.join('');
	      var complete = pc.transceivers.every(function(transceiver) {
	        return transceiver.iceGatherer &&
	            transceiver.iceGatherer.state === 'completed';
	      });
	      if (pc.iceGatheringState !== 'gathering') {
	        pc.iceGatheringState = 'gathering';
	        pc._emitGatheringStateChange();
	      }
	      if (!end) {
	        pc._dispatchEvent('icecandidate', event);
	      }
	      if (complete) {
	        pc._dispatchEvent('icecandidate', new Event('icecandidate'));
	        pc.iceGatheringState = 'complete';
	        pc._emitGatheringStateChange();
	      }
	    };
	    window.setTimeout(function() {
	      bufferedCandidateEvents.forEach(function(e) {
	        iceGatherer.onlocalcandidate(e);
	      });
	    }, 0);
	  };
	  RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
	    var pc = this;
	    var iceTransport = new window.RTCIceTransport(null);
	    iceTransport.onicestatechange = function() {
	      pc._updateIceConnectionState();
	      pc._updateConnectionState();
	    };
	    var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
	    dtlsTransport.ondtlsstatechange = function() {
	      pc._updateConnectionState();
	    };
	    dtlsTransport.onerror = function() {
	      Object.defineProperty(dtlsTransport, 'state',
	          {value: 'failed', writable: true});
	      pc._updateConnectionState();
	    };
	    return {
	      iceTransport: iceTransport,
	      dtlsTransport: dtlsTransport
	    };
	  };
	  RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(
	      sdpMLineIndex) {
	    var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
	    if (iceGatherer) {
	      delete iceGatherer.onlocalcandidate;
	      delete this.transceivers[sdpMLineIndex].iceGatherer;
	    }
	    var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
	    if (iceTransport) {
	      delete iceTransport.onicestatechange;
	      delete this.transceivers[sdpMLineIndex].iceTransport;
	    }
	    var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
	    if (dtlsTransport) {
	      delete dtlsTransport.ondtlsstatechange;
	      delete dtlsTransport.onerror;
	      delete this.transceivers[sdpMLineIndex].dtlsTransport;
	    }
	  };
	  RTCPeerConnection.prototype._transceive = function(transceiver,
	      send, recv) {
	    var params = getCommonCapabilities(transceiver.localCapabilities,
	        transceiver.remoteCapabilities);
	    if (send && transceiver.rtpSender) {
	      params.encodings = transceiver.sendEncodingParameters;
	      params.rtcp = {
	        cname: SDPUtils.localCName,
	        compound: transceiver.rtcpParameters.compound
	      };
	      if (transceiver.recvEncodingParameters.length) {
	        params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
	      }
	      transceiver.rtpSender.send(params);
	    }
	    if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
	      if (transceiver.kind === 'video'
	          && transceiver.recvEncodingParameters
	          && edgeVersion < 15019) {
	        transceiver.recvEncodingParameters.forEach(function(p) {
	          delete p.rtx;
	        });
	      }
	      if (transceiver.recvEncodingParameters.length) {
	        params.encodings = transceiver.recvEncodingParameters;
	      } else {
	        params.encodings = [{}];
	      }
	      params.rtcp = {
	        compound: transceiver.rtcpParameters.compound
	      };
	      if (transceiver.rtcpParameters.cname) {
	        params.rtcp.cname = transceiver.rtcpParameters.cname;
	      }
	      if (transceiver.sendEncodingParameters.length) {
	        params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
	      }
	      transceiver.rtpReceiver.receive(params);
	    }
	  };
	  RTCPeerConnection.prototype.setLocalDescription = function(description) {
	    var pc = this;
	    if (['offer', 'answer'].indexOf(description.type) === -1) {
	      return Promise.reject(makeError('TypeError',
	          'Unsupported type "' + description.type + '"'));
	    }
	    if (!isActionAllowedInSignalingState('setLocalDescription',
	        description.type, pc.signalingState) || pc._isClosed) {
	      return Promise.reject(makeError('InvalidStateError',
	          'Can not set local ' + description.type +
	          ' in state ' + pc.signalingState));
	    }
	    var sections;
	    var sessionpart;
	    if (description.type === 'offer') {
	      sections = SDPUtils.splitSections(description.sdp);
	      sessionpart = sections.shift();
	      sections.forEach(function(mediaSection, sdpMLineIndex) {
	        var caps = SDPUtils.parseRtpParameters(mediaSection);
	        pc.transceivers[sdpMLineIndex].localCapabilities = caps;
	      });
	      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
	        pc._gather(transceiver.mid, sdpMLineIndex);
	      });
	    } else if (description.type === 'answer') {
	      sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
	      sessionpart = sections.shift();
	      var isIceLite = SDPUtils.matchPrefix(sessionpart,
	          'a=ice-lite').length > 0;
	      sections.forEach(function(mediaSection, sdpMLineIndex) {
	        var transceiver = pc.transceivers[sdpMLineIndex];
	        var iceGatherer = transceiver.iceGatherer;
	        var iceTransport = transceiver.iceTransport;
	        var dtlsTransport = transceiver.dtlsTransport;
	        var localCapabilities = transceiver.localCapabilities;
	        var remoteCapabilities = transceiver.remoteCapabilities;
	        var rejected = SDPUtils.isRejected(mediaSection) &&
	            SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
	        if (!rejected && !transceiver.rejected) {
	          var remoteIceParameters = SDPUtils.getIceParameters(
	              mediaSection, sessionpart);
	          var remoteDtlsParameters = SDPUtils.getDtlsParameters(
	              mediaSection, sessionpart);
	          if (isIceLite) {
	            remoteDtlsParameters.role = 'server';
	          }
	          if (!pc.usingBundle || sdpMLineIndex === 0) {
	            pc._gather(transceiver.mid, sdpMLineIndex);
	            if (iceTransport.state === 'new') {
	              iceTransport.start(iceGatherer, remoteIceParameters,
	                  isIceLite ? 'controlling' : 'controlled');
	            }
	            if (dtlsTransport.state === 'new') {
	              dtlsTransport.start(remoteDtlsParameters);
	            }
	          }
	          var params = getCommonCapabilities(localCapabilities,
	              remoteCapabilities);
	          pc._transceive(transceiver,
	              params.codecs.length > 0,
	              false);
	        }
	      });
	    }
	    pc._localDescription = {
	      type: description.type,
	      sdp: description.sdp
	    };
	    if (description.type === 'offer') {
	      pc._updateSignalingState('have-local-offer');
	    } else {
	      pc._updateSignalingState('stable');
	    }
	    return Promise.resolve();
	  };
	  RTCPeerConnection.prototype.setRemoteDescription = function(description) {
	    var pc = this;
	    if (['offer', 'answer'].indexOf(description.type) === -1) {
	      return Promise.reject(makeError('TypeError',
	          'Unsupported type "' + description.type + '"'));
	    }
	    if (!isActionAllowedInSignalingState('setRemoteDescription',
	        description.type, pc.signalingState) || pc._isClosed) {
	      return Promise.reject(makeError('InvalidStateError',
	          'Can not set remote ' + description.type +
	          ' in state ' + pc.signalingState));
	    }
	    var streams = {};
	    pc.remoteStreams.forEach(function(stream) {
	      streams[stream.id] = stream;
	    });
	    var receiverList = [];
	    var sections = SDPUtils.splitSections(description.sdp);
	    var sessionpart = sections.shift();
	    var isIceLite = SDPUtils.matchPrefix(sessionpart,
	        'a=ice-lite').length > 0;
	    var usingBundle = SDPUtils.matchPrefix(sessionpart,
	        'a=group:BUNDLE ').length > 0;
	    pc.usingBundle = usingBundle;
	    var iceOptions = SDPUtils.matchPrefix(sessionpart,
	        'a=ice-options:')[0];
	    if (iceOptions) {
	      pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ')
	          .indexOf('trickle') >= 0;
	    } else {
	      pc.canTrickleIceCandidates = false;
	    }
	    sections.forEach(function(mediaSection, sdpMLineIndex) {
	      var lines = SDPUtils.splitLines(mediaSection);
	      var kind = SDPUtils.getKind(mediaSection);
	      var rejected = SDPUtils.isRejected(mediaSection) &&
	          SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
	      var protocol = lines[0].substr(2).split(' ')[2];
	      var direction = SDPUtils.getDirection(mediaSection, sessionpart);
	      var remoteMsid = SDPUtils.parseMsid(mediaSection);
	      var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();
	      if (rejected || (kind === 'application' && (protocol === 'DTLS/SCTP' ||
	          protocol === 'UDP/DTLS/SCTP'))) {
	        pc.transceivers[sdpMLineIndex] = {
	          mid: mid,
	          kind: kind,
	          protocol: protocol,
	          rejected: true
	        };
	        return;
	      }
	      if (!rejected && pc.transceivers[sdpMLineIndex] &&
	          pc.transceivers[sdpMLineIndex].rejected) {
	        pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
	      }
	      var transceiver;
	      var iceGatherer;
	      var iceTransport;
	      var dtlsTransport;
	      var rtpReceiver;
	      var sendEncodingParameters;
	      var recvEncodingParameters;
	      var localCapabilities;
	      var track;
	      var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
	      var remoteIceParameters;
	      var remoteDtlsParameters;
	      if (!rejected) {
	        remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
	            sessionpart);
	        remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
	            sessionpart);
	        remoteDtlsParameters.role = 'client';
	      }
	      recvEncodingParameters =
	          SDPUtils.parseRtpEncodingParameters(mediaSection);
	      var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);
	      var isComplete = SDPUtils.matchPrefix(mediaSection,
	          'a=end-of-candidates', sessionpart).length > 0;
	      var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
	          .map(function(cand) {
	            return SDPUtils.parseCandidate(cand);
	          })
	          .filter(function(cand) {
	            return cand.component === 1;
	          });
	      if ((description.type === 'offer' || description.type === 'answer') &&
	          !rejected && usingBundle && sdpMLineIndex > 0 &&
	          pc.transceivers[sdpMLineIndex]) {
	        pc._disposeIceAndDtlsTransports(sdpMLineIndex);
	        pc.transceivers[sdpMLineIndex].iceGatherer =
	            pc.transceivers[0].iceGatherer;
	        pc.transceivers[sdpMLineIndex].iceTransport =
	            pc.transceivers[0].iceTransport;
	        pc.transceivers[sdpMLineIndex].dtlsTransport =
	            pc.transceivers[0].dtlsTransport;
	        if (pc.transceivers[sdpMLineIndex].rtpSender) {
	          pc.transceivers[sdpMLineIndex].rtpSender.setTransport(
	              pc.transceivers[0].dtlsTransport);
	        }
	        if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
	          pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
	              pc.transceivers[0].dtlsTransport);
	        }
	      }
	      if (description.type === 'offer' && !rejected) {
	        transceiver = pc.transceivers[sdpMLineIndex] ||
	            pc._createTransceiver(kind);
	        transceiver.mid = mid;
	        if (!transceiver.iceGatherer) {
	          transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
	              usingBundle);
	        }
	        if (cands.length && transceiver.iceTransport.state === 'new') {
	          if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
	            transceiver.iceTransport.setRemoteCandidates(cands);
	          } else {
	            cands.forEach(function(candidate) {
	              maybeAddCandidate(transceiver.iceTransport, candidate);
	            });
	          }
	        }
	        localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);
	        if (edgeVersion < 15019) {
	          localCapabilities.codecs = localCapabilities.codecs.filter(
	              function(codec) {
	                return codec.name !== 'rtx';
	              });
	        }
	        sendEncodingParameters = transceiver.sendEncodingParameters || [{
	          ssrc: (2 * sdpMLineIndex + 2) * 1001
	        }];
	        var isNewTrack = false;
	        if (direction === 'sendrecv' || direction === 'sendonly') {
	          isNewTrack = !transceiver.rtpReceiver;
	          rtpReceiver = transceiver.rtpReceiver ||
	              new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);
	          if (isNewTrack) {
	            var stream;
	            track = rtpReceiver.track;
	            if (remoteMsid && remoteMsid.stream === '-') ; else if (remoteMsid) {
	              if (!streams[remoteMsid.stream]) {
	                streams[remoteMsid.stream] = new window.MediaStream();
	                Object.defineProperty(streams[remoteMsid.stream], 'id', {
	                  get: function() {
	                    return remoteMsid.stream;
	                  }
	                });
	              }
	              Object.defineProperty(track, 'id', {
	                get: function() {
	                  return remoteMsid.track;
	                }
	              });
	              stream = streams[remoteMsid.stream];
	            } else {
	              if (!streams.default) {
	                streams.default = new window.MediaStream();
	              }
	              stream = streams.default;
	            }
	            if (stream) {
	              addTrackToStreamAndFireEvent(track, stream);
	              transceiver.associatedRemoteMediaStreams.push(stream);
	            }
	            receiverList.push([track, rtpReceiver, stream]);
	          }
	        } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
	          transceiver.associatedRemoteMediaStreams.forEach(function(s) {
	            var nativeTrack = s.getTracks().find(function(t) {
	              return t.id === transceiver.rtpReceiver.track.id;
	            });
	            if (nativeTrack) {
	              removeTrackFromStreamAndFireEvent(nativeTrack, s);
	            }
	          });
	          transceiver.associatedRemoteMediaStreams = [];
	        }
	        transceiver.localCapabilities = localCapabilities;
	        transceiver.remoteCapabilities = remoteCapabilities;
	        transceiver.rtpReceiver = rtpReceiver;
	        transceiver.rtcpParameters = rtcpParameters;
	        transceiver.sendEncodingParameters = sendEncodingParameters;
	        transceiver.recvEncodingParameters = recvEncodingParameters;
	        pc._transceive(pc.transceivers[sdpMLineIndex],
	            false,
	            isNewTrack);
	      } else if (description.type === 'answer' && !rejected) {
	        transceiver = pc.transceivers[sdpMLineIndex];
	        iceGatherer = transceiver.iceGatherer;
	        iceTransport = transceiver.iceTransport;
	        dtlsTransport = transceiver.dtlsTransport;
	        rtpReceiver = transceiver.rtpReceiver;
	        sendEncodingParameters = transceiver.sendEncodingParameters;
	        localCapabilities = transceiver.localCapabilities;
	        pc.transceivers[sdpMLineIndex].recvEncodingParameters =
	            recvEncodingParameters;
	        pc.transceivers[sdpMLineIndex].remoteCapabilities =
	            remoteCapabilities;
	        pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;
	        if (cands.length && iceTransport.state === 'new') {
	          if ((isIceLite || isComplete) &&
	              (!usingBundle || sdpMLineIndex === 0)) {
	            iceTransport.setRemoteCandidates(cands);
	          } else {
	            cands.forEach(function(candidate) {
	              maybeAddCandidate(transceiver.iceTransport, candidate);
	            });
	          }
	        }
	        if (!usingBundle || sdpMLineIndex === 0) {
	          if (iceTransport.state === 'new') {
	            iceTransport.start(iceGatherer, remoteIceParameters,
	                'controlling');
	          }
	          if (dtlsTransport.state === 'new') {
	            dtlsTransport.start(remoteDtlsParameters);
	          }
	        }
	        var commonCapabilities = getCommonCapabilities(
	          transceiver.localCapabilities,
	          transceiver.remoteCapabilities);
	        var hasRtx = commonCapabilities.codecs.filter(function(c) {
	          return c.name.toLowerCase() === 'rtx';
	        }).length;
	        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
	          delete transceiver.sendEncodingParameters[0].rtx;
	        }
	        pc._transceive(transceiver,
	            direction === 'sendrecv' || direction === 'recvonly',
	            direction === 'sendrecv' || direction === 'sendonly');
	        if (rtpReceiver &&
	            (direction === 'sendrecv' || direction === 'sendonly')) {
	          track = rtpReceiver.track;
	          if (remoteMsid) {
	            if (!streams[remoteMsid.stream]) {
	              streams[remoteMsid.stream] = new window.MediaStream();
	            }
	            addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
	            receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
	          } else {
	            if (!streams.default) {
	              streams.default = new window.MediaStream();
	            }
	            addTrackToStreamAndFireEvent(track, streams.default);
	            receiverList.push([track, rtpReceiver, streams.default]);
	          }
	        } else {
	          delete transceiver.rtpReceiver;
	        }
	      }
	    });
	    if (pc._dtlsRole === undefined) {
	      pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
	    }
	    pc._remoteDescription = {
	      type: description.type,
	      sdp: description.sdp
	    };
	    if (description.type === 'offer') {
	      pc._updateSignalingState('have-remote-offer');
	    } else {
	      pc._updateSignalingState('stable');
	    }
	    Object.keys(streams).forEach(function(sid) {
	      var stream = streams[sid];
	      if (stream.getTracks().length) {
	        if (pc.remoteStreams.indexOf(stream) === -1) {
	          pc.remoteStreams.push(stream);
	          var event = new Event('addstream');
	          event.stream = stream;
	          window.setTimeout(function() {
	            pc._dispatchEvent('addstream', event);
	          });
	        }
	        receiverList.forEach(function(item) {
	          var track = item[0];
	          var receiver = item[1];
	          if (stream.id !== item[2].id) {
	            return;
	          }
	          fireAddTrack(pc, track, receiver, [stream]);
	        });
	      }
	    });
	    receiverList.forEach(function(item) {
	      if (item[2]) {
	        return;
	      }
	      fireAddTrack(pc, item[0], item[1], []);
	    });
	    window.setTimeout(function() {
	      if (!(pc && pc.transceivers)) {
	        return;
	      }
	      pc.transceivers.forEach(function(transceiver) {
	        if (transceiver.iceTransport &&
	            transceiver.iceTransport.state === 'new' &&
	            transceiver.iceTransport.getRemoteCandidates().length > 0) {
	          console.warn('Timeout for addRemoteCandidate. Consider sending ' +
	              'an end-of-candidates notification');
	          transceiver.iceTransport.addRemoteCandidate({});
	        }
	      });
	    }, 4000);
	    return Promise.resolve();
	  };
	  RTCPeerConnection.prototype.close = function() {
	    this.transceivers.forEach(function(transceiver) {
	      if (transceiver.iceTransport) {
	        transceiver.iceTransport.stop();
	      }
	      if (transceiver.dtlsTransport) {
	        transceiver.dtlsTransport.stop();
	      }
	      if (transceiver.rtpSender) {
	        transceiver.rtpSender.stop();
	      }
	      if (transceiver.rtpReceiver) {
	        transceiver.rtpReceiver.stop();
	      }
	    });
	    this._isClosed = true;
	    this._updateSignalingState('closed');
	  };
	  RTCPeerConnection.prototype._updateSignalingState = function(newState) {
	    this.signalingState = newState;
	    var event = new Event('signalingstatechange');
	    this._dispatchEvent('signalingstatechange', event);
	  };
	  RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
	    var pc = this;
	    if (this.signalingState !== 'stable' || this.needNegotiation === true) {
	      return;
	    }
	    this.needNegotiation = true;
	    window.setTimeout(function() {
	      if (pc.needNegotiation) {
	        pc.needNegotiation = false;
	        var event = new Event('negotiationneeded');
	        pc._dispatchEvent('negotiationneeded', event);
	      }
	    }, 0);
	  };
	  RTCPeerConnection.prototype._updateIceConnectionState = function() {
	    var newState;
	    var states = {
	      'new': 0,
	      closed: 0,
	      checking: 0,
	      connected: 0,
	      completed: 0,
	      disconnected: 0,
	      failed: 0
	    };
	    this.transceivers.forEach(function(transceiver) {
	      if (transceiver.iceTransport && !transceiver.rejected) {
	        states[transceiver.iceTransport.state]++;
	      }
	    });
	    newState = 'new';
	    if (states.failed > 0) {
	      newState = 'failed';
	    } else if (states.checking > 0) {
	      newState = 'checking';
	    } else if (states.disconnected > 0) {
	      newState = 'disconnected';
	    } else if (states.new > 0) {
	      newState = 'new';
	    } else if (states.connected > 0) {
	      newState = 'connected';
	    } else if (states.completed > 0) {
	      newState = 'completed';
	    }
	    if (newState !== this.iceConnectionState) {
	      this.iceConnectionState = newState;
	      var event = new Event('iceconnectionstatechange');
	      this._dispatchEvent('iceconnectionstatechange', event);
	    }
	  };
	  RTCPeerConnection.prototype._updateConnectionState = function() {
	    var newState;
	    var states = {
	      'new': 0,
	      closed: 0,
	      connecting: 0,
	      connected: 0,
	      completed: 0,
	      disconnected: 0,
	      failed: 0
	    };
	    this.transceivers.forEach(function(transceiver) {
	      if (transceiver.iceTransport && transceiver.dtlsTransport &&
	          !transceiver.rejected) {
	        states[transceiver.iceTransport.state]++;
	        states[transceiver.dtlsTransport.state]++;
	      }
	    });
	    states.connected += states.completed;
	    newState = 'new';
	    if (states.failed > 0) {
	      newState = 'failed';
	    } else if (states.connecting > 0) {
	      newState = 'connecting';
	    } else if (states.disconnected > 0) {
	      newState = 'disconnected';
	    } else if (states.new > 0) {
	      newState = 'new';
	    } else if (states.connected > 0) {
	      newState = 'connected';
	    }
	    if (newState !== this.connectionState) {
	      this.connectionState = newState;
	      var event = new Event('connectionstatechange');
	      this._dispatchEvent('connectionstatechange', event);
	    }
	  };
	  RTCPeerConnection.prototype.createOffer = function() {
	    var pc = this;
	    if (pc._isClosed) {
	      return Promise.reject(makeError('InvalidStateError',
	          'Can not call createOffer after close'));
	    }
	    var numAudioTracks = pc.transceivers.filter(function(t) {
	      return t.kind === 'audio';
	    }).length;
	    var numVideoTracks = pc.transceivers.filter(function(t) {
	      return t.kind === 'video';
	    }).length;
	    var offerOptions = arguments[0];
	    if (offerOptions) {
	      if (offerOptions.mandatory || offerOptions.optional) {
	        throw new TypeError(
	            'Legacy mandatory/optional constraints not supported.');
	      }
	      if (offerOptions.offerToReceiveAudio !== undefined) {
	        if (offerOptions.offerToReceiveAudio === true) {
	          numAudioTracks = 1;
	        } else if (offerOptions.offerToReceiveAudio === false) {
	          numAudioTracks = 0;
	        } else {
	          numAudioTracks = offerOptions.offerToReceiveAudio;
	        }
	      }
	      if (offerOptions.offerToReceiveVideo !== undefined) {
	        if (offerOptions.offerToReceiveVideo === true) {
	          numVideoTracks = 1;
	        } else if (offerOptions.offerToReceiveVideo === false) {
	          numVideoTracks = 0;
	        } else {
	          numVideoTracks = offerOptions.offerToReceiveVideo;
	        }
	      }
	    }
	    pc.transceivers.forEach(function(transceiver) {
	      if (transceiver.kind === 'audio') {
	        numAudioTracks--;
	        if (numAudioTracks < 0) {
	          transceiver.wantReceive = false;
	        }
	      } else if (transceiver.kind === 'video') {
	        numVideoTracks--;
	        if (numVideoTracks < 0) {
	          transceiver.wantReceive = false;
	        }
	      }
	    });
	    while (numAudioTracks > 0 || numVideoTracks > 0) {
	      if (numAudioTracks > 0) {
	        pc._createTransceiver('audio');
	        numAudioTracks--;
	      }
	      if (numVideoTracks > 0) {
	        pc._createTransceiver('video');
	        numVideoTracks--;
	      }
	    }
	    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
	        pc._sdpSessionVersion++);
	    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
	      var track = transceiver.track;
	      var kind = transceiver.kind;
	      var mid = transceiver.mid || SDPUtils.generateIdentifier();
	      transceiver.mid = mid;
	      if (!transceiver.iceGatherer) {
	        transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
	            pc.usingBundle);
	      }
	      var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
	      if (edgeVersion < 15019) {
	        localCapabilities.codecs = localCapabilities.codecs.filter(
	            function(codec) {
	              return codec.name !== 'rtx';
	            });
	      }
	      localCapabilities.codecs.forEach(function(codec) {
	        if (codec.name === 'H264' &&
	            codec.parameters['level-asymmetry-allowed'] === undefined) {
	          codec.parameters['level-asymmetry-allowed'] = '1';
	        }
	        if (transceiver.remoteCapabilities &&
	            transceiver.remoteCapabilities.codecs) {
	          transceiver.remoteCapabilities.codecs.forEach(function(remoteCodec) {
	            if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() &&
	                codec.clockRate === remoteCodec.clockRate) {
	              codec.preferredPayloadType = remoteCodec.payloadType;
	            }
	          });
	        }
	      });
	      localCapabilities.headerExtensions.forEach(function(hdrExt) {
	        var remoteExtensions = transceiver.remoteCapabilities &&
	            transceiver.remoteCapabilities.headerExtensions || [];
	        remoteExtensions.forEach(function(rHdrExt) {
	          if (hdrExt.uri === rHdrExt.uri) {
	            hdrExt.id = rHdrExt.id;
	          }
	        });
	      });
	      var sendEncodingParameters = transceiver.sendEncodingParameters || [{
	        ssrc: (2 * sdpMLineIndex + 1) * 1001
	      }];
	      if (track) {
	        if (edgeVersion >= 15019 && kind === 'video' &&
	            !sendEncodingParameters[0].rtx) {
	          sendEncodingParameters[0].rtx = {
	            ssrc: sendEncodingParameters[0].ssrc + 1
	          };
	        }
	      }
	      if (transceiver.wantReceive) {
	        transceiver.rtpReceiver = new window.RTCRtpReceiver(
	            transceiver.dtlsTransport, kind);
	      }
	      transceiver.localCapabilities = localCapabilities;
	      transceiver.sendEncodingParameters = sendEncodingParameters;
	    });
	    if (pc._config.bundlePolicy !== 'max-compat') {
	      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
	        return t.mid;
	      }).join(' ') + '\r\n';
	    }
	    sdp += 'a=ice-options:trickle\r\n';
	    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
	      sdp += writeMediaSection(transceiver, transceiver.localCapabilities,
	          'offer', transceiver.stream, pc._dtlsRole);
	      sdp += 'a=rtcp-rsize\r\n';
	      if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' &&
	          (sdpMLineIndex === 0 || !pc.usingBundle)) {
	        transceiver.iceGatherer.getLocalCandidates().forEach(function(cand) {
	          cand.component = 1;
	          sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
	        });
	        if (transceiver.iceGatherer.state === 'completed') {
	          sdp += 'a=end-of-candidates\r\n';
	        }
	      }
	    });
	    var desc = new window.RTCSessionDescription({
	      type: 'offer',
	      sdp: sdp
	    });
	    return Promise.resolve(desc);
	  };
	  RTCPeerConnection.prototype.createAnswer = function() {
	    var pc = this;
	    if (pc._isClosed) {
	      return Promise.reject(makeError('InvalidStateError',
	          'Can not call createAnswer after close'));
	    }
	    if (!(pc.signalingState === 'have-remote-offer' ||
	        pc.signalingState === 'have-local-pranswer')) {
	      return Promise.reject(makeError('InvalidStateError',
	          'Can not call createAnswer in signalingState ' + pc.signalingState));
	    }
	    var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
	        pc._sdpSessionVersion++);
	    if (pc.usingBundle) {
	      sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
	        return t.mid;
	      }).join(' ') + '\r\n';
	    }
	    sdp += 'a=ice-options:trickle\r\n';
	    var mediaSectionsInOffer = SDPUtils.getMediaSections(
	        pc._remoteDescription.sdp).length;
	    pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
	      if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
	        return;
	      }
	      if (transceiver.rejected) {
	        if (transceiver.kind === 'application') {
	          if (transceiver.protocol === 'DTLS/SCTP') {
	            sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
	          } else {
	            sdp += 'm=application 0 ' + transceiver.protocol +
	                ' webrtc-datachannel\r\n';
	          }
	        } else if (transceiver.kind === 'audio') {
	          sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' +
	              'a=rtpmap:0 PCMU/8000\r\n';
	        } else if (transceiver.kind === 'video') {
	          sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' +
	              'a=rtpmap:120 VP8/90000\r\n';
	        }
	        sdp += 'c=IN IP4 0.0.0.0\r\n' +
	            'a=inactive\r\n' +
	            'a=mid:' + transceiver.mid + '\r\n';
	        return;
	      }
	      if (transceiver.stream) {
	        var localTrack;
	        if (transceiver.kind === 'audio') {
	          localTrack = transceiver.stream.getAudioTracks()[0];
	        } else if (transceiver.kind === 'video') {
	          localTrack = transceiver.stream.getVideoTracks()[0];
	        }
	        if (localTrack) {
	          if (edgeVersion >= 15019 && transceiver.kind === 'video' &&
	              !transceiver.sendEncodingParameters[0].rtx) {
	            transceiver.sendEncodingParameters[0].rtx = {
	              ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
	            };
	          }
	        }
	      }
	      var commonCapabilities = getCommonCapabilities(
	          transceiver.localCapabilities,
	          transceiver.remoteCapabilities);
	      var hasRtx = commonCapabilities.codecs.filter(function(c) {
	        return c.name.toLowerCase() === 'rtx';
	      }).length;
	      if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
	        delete transceiver.sendEncodingParameters[0].rtx;
	      }
	      sdp += writeMediaSection(transceiver, commonCapabilities,
	          'answer', transceiver.stream, pc._dtlsRole);
	      if (transceiver.rtcpParameters &&
	          transceiver.rtcpParameters.reducedSize) {
	        sdp += 'a=rtcp-rsize\r\n';
	      }
	    });
	    var desc = new window.RTCSessionDescription({
	      type: 'answer',
	      sdp: sdp
	    });
	    return Promise.resolve(desc);
	  };
	  RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
	    var pc = this;
	    var sections;
	    if (candidate && !(candidate.sdpMLineIndex !== undefined ||
	        candidate.sdpMid)) {
	      return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
	    }
	    return new Promise(function(resolve, reject) {
	      if (!pc._remoteDescription) {
	        return reject(makeError('InvalidStateError',
	            'Can not add ICE candidate without a remote description'));
	      } else if (!candidate || candidate.candidate === '') {
	        for (var j = 0; j < pc.transceivers.length; j++) {
	          if (pc.transceivers[j].rejected) {
	            continue;
	          }
	          pc.transceivers[j].iceTransport.addRemoteCandidate({});
	          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
	          sections[j] += 'a=end-of-candidates\r\n';
	          pc._remoteDescription.sdp =
	              SDPUtils.getDescription(pc._remoteDescription.sdp) +
	              sections.join('');
	          if (pc.usingBundle) {
	            break;
	          }
	        }
	      } else {
	        var sdpMLineIndex = candidate.sdpMLineIndex;
	        if (candidate.sdpMid) {
	          for (var i = 0; i < pc.transceivers.length; i++) {
	            if (pc.transceivers[i].mid === candidate.sdpMid) {
	              sdpMLineIndex = i;
	              break;
	            }
	          }
	        }
	        var transceiver = pc.transceivers[sdpMLineIndex];
	        if (transceiver) {
	          if (transceiver.rejected) {
	            return resolve();
	          }
	          var cand = Object.keys(candidate.candidate).length > 0 ?
	              SDPUtils.parseCandidate(candidate.candidate) : {};
	          if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
	            return resolve();
	          }
	          if (cand.component && cand.component !== 1) {
	            return resolve();
	          }
	          if (sdpMLineIndex === 0 || (sdpMLineIndex > 0 &&
	              transceiver.iceTransport !== pc.transceivers[0].iceTransport)) {
	            if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
	              return reject(makeError('OperationError',
	                  'Can not add ICE candidate'));
	            }
	          }
	          var candidateString = candidate.candidate.trim();
	          if (candidateString.indexOf('a=') === 0) {
	            candidateString = candidateString.substr(2);
	          }
	          sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
	          sections[sdpMLineIndex] += 'a=' +
	              (cand.type ? candidateString : 'end-of-candidates')
	              + '\r\n';
	          pc._remoteDescription.sdp =
	              SDPUtils.getDescription(pc._remoteDescription.sdp) +
	              sections.join('');
	        } else {
	          return reject(makeError('OperationError',
	              'Can not add ICE candidate'));
	        }
	      }
	      resolve();
	    });
	  };
	  RTCPeerConnection.prototype.getStats = function(selector) {
	    if (selector && selector instanceof window.MediaStreamTrack) {
	      var senderOrReceiver = null;
	      this.transceivers.forEach(function(transceiver) {
	        if (transceiver.rtpSender &&
	            transceiver.rtpSender.track === selector) {
	          senderOrReceiver = transceiver.rtpSender;
	        } else if (transceiver.rtpReceiver &&
	            transceiver.rtpReceiver.track === selector) {
	          senderOrReceiver = transceiver.rtpReceiver;
	        }
	      });
	      if (!senderOrReceiver) {
	        throw makeError('InvalidAccessError', 'Invalid selector.');
	      }
	      return senderOrReceiver.getStats();
	    }
	    var promises = [];
	    this.transceivers.forEach(function(transceiver) {
	      ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
	          'dtlsTransport'].forEach(function(method) {
	            if (transceiver[method]) {
	              promises.push(transceiver[method].getStats());
	            }
	          });
	    });
	    return Promise.all(promises).then(function(allStats) {
	      var results = new Map();
	      allStats.forEach(function(stats) {
	        stats.forEach(function(stat) {
	          results.set(stat.id, stat);
	        });
	      });
	      return results;
	    });
	  };
	  var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer',
	    'RTCIceTransport', 'RTCDtlsTransport'];
	  ortcObjects.forEach(function(ortcObjectName) {
	    var obj = window[ortcObjectName];
	    if (obj && obj.prototype && obj.prototype.getStats) {
	      var nativeGetstats = obj.prototype.getStats;
	      obj.prototype.getStats = function() {
	        return nativeGetstats.apply(this)
	        .then(function(nativeStats) {
	          var mapStats = new Map();
	          Object.keys(nativeStats).forEach(function(id) {
	            nativeStats[id].type = fixStatsType(nativeStats[id]);
	            mapStats.set(id, nativeStats[id]);
	          });
	          return mapStats;
	        });
	      };
	    }
	  });
	  var methods = ['createOffer', 'createAnswer'];
	  methods.forEach(function(method) {
	    var nativeMethod = RTCPeerConnection.prototype[method];
	    RTCPeerConnection.prototype[method] = function() {
	      var args = arguments;
	      if (typeof args[0] === 'function' ||
	          typeof args[1] === 'function') {
	        return nativeMethod.apply(this, [arguments[2]])
	        .then(function(description) {
	          if (typeof args[0] === 'function') {
	            args[0].apply(null, [description]);
	          }
	        }, function(error) {
	          if (typeof args[1] === 'function') {
	            args[1].apply(null, [error]);
	          }
	        });
	      }
	      return nativeMethod.apply(this, arguments);
	    };
	  });
	  methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
	  methods.forEach(function(method) {
	    var nativeMethod = RTCPeerConnection.prototype[method];
	    RTCPeerConnection.prototype[method] = function() {
	      var args = arguments;
	      if (typeof args[1] === 'function' ||
	          typeof args[2] === 'function') {
	        return nativeMethod.apply(this, arguments)
	        .then(function() {
	          if (typeof args[1] === 'function') {
	            args[1].apply(null);
	          }
	        }, function(error) {
	          if (typeof args[2] === 'function') {
	            args[2].apply(null, [error]);
	          }
	        });
	      }
	      return nativeMethod.apply(this, arguments);
	    };
	  });
	  ['getStats'].forEach(function(method) {
	    var nativeMethod = RTCPeerConnection.prototype[method];
	    RTCPeerConnection.prototype[method] = function() {
	      var args = arguments;
	      if (typeof args[1] === 'function') {
	        return nativeMethod.apply(this, arguments)
	        .then(function() {
	          if (typeof args[1] === 'function') {
	            args[1].apply(null);
	          }
	        });
	      }
	      return nativeMethod.apply(this, arguments);
	    };
	  });
	  return RTCPeerConnection;
	};

	function shimGetUserMedia$2(window) {
	  const navigator = window && window.navigator;
	  const shimError_ = function(e) {
	    return {
	      name: {PermissionDeniedError: 'NotAllowedError'}[e.name] || e.name,
	      message: e.message,
	      constraint: e.constraint,
	      toString() {
	        return this.name;
	      }
	    };
	  };
	  const origGetUserMedia = navigator.mediaDevices.getUserMedia.
	      bind(navigator.mediaDevices);
	  navigator.mediaDevices.getUserMedia = function(c) {
	    return origGetUserMedia(c).catch(e => Promise.reject(shimError_(e)));
	  };
	}

	function shimGetDisplayMedia$1(window) {
	  if (!('getDisplayMedia' in window.navigator)) {
	    return;
	  }
	  if (!(window.navigator.mediaDevices)) {
	    return;
	  }
	  if (window.navigator.mediaDevices &&
	    'getDisplayMedia' in window.navigator.mediaDevices) {
	    return;
	  }
	  window.navigator.mediaDevices.getDisplayMedia =
	    window.navigator.getDisplayMedia.bind(window.navigator);
	}

	function shimPeerConnection$1(window) {
	  const browserDetails = detectBrowser(window);
	  if (window.RTCIceGatherer) {
	    if (!window.RTCIceCandidate) {
	      window.RTCIceCandidate = function RTCIceCandidate(args) {
	        return args;
	      };
	    }
	    if (!window.RTCSessionDescription) {
	      window.RTCSessionDescription = function RTCSessionDescription(args) {
	        return args;
	      };
	    }
	    if (browserDetails.version < 15025) {
	      const origMSTEnabled = Object.getOwnPropertyDescriptor(
	          window.MediaStreamTrack.prototype, 'enabled');
	      Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
	        set(value) {
	          origMSTEnabled.set.call(this, value);
	          const ev = new Event('enabled');
	          ev.enabled = value;
	          this.dispatchEvent(ev);
	        }
	      });
	    }
	  }
	  if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
	    Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
	      get() {
	        if (this._dtmf === undefined) {
	          if (this.track.kind === 'audio') {
	            this._dtmf = new window.RTCDtmfSender(this);
	          } else if (this.track.kind === 'video') {
	            this._dtmf = null;
	          }
	        }
	        return this._dtmf;
	      }
	    });
	  }
	  if (window.RTCDtmfSender && !window.RTCDTMFSender) {
	    window.RTCDTMFSender = window.RTCDtmfSender;
	  }
	  const RTCPeerConnectionShim = rtcpeerconnection(window,
	      browserDetails.version);
	  window.RTCPeerConnection = function RTCPeerConnection(config) {
	    if (config && config.iceServers) {
	      config.iceServers = filterIceServers$1(config.iceServers,
	        browserDetails.version);
	      log('ICE servers after filtering:', config.iceServers);
	    }
	    return new RTCPeerConnectionShim(config);
	  };
	  window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
	}
	function shimReplaceTrack(window) {
	  if (window.RTCRtpSender &&
	      !('replaceTrack' in window.RTCRtpSender.prototype)) {
	    window.RTCRtpSender.prototype.replaceTrack =
	        window.RTCRtpSender.prototype.setTrack;
	  }
	}

	const edgeShim = /*#__PURE__*/Object.freeze({
		__proto__: null,
		shimPeerConnection: shimPeerConnection$1,
		shimReplaceTrack: shimReplaceTrack,
		shimGetUserMedia: shimGetUserMedia$2,
		shimGetDisplayMedia: shimGetDisplayMedia$1
	});

	function shimGetUserMedia$1(window) {
	  const browserDetails = detectBrowser(window);
	  const navigator = window && window.navigator;
	  const MediaStreamTrack = window && window.MediaStreamTrack;
	  navigator.getUserMedia = function(constraints, onSuccess, onError) {
	    deprecated('navigator.getUserMedia',
	        'navigator.mediaDevices.getUserMedia');
	    navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
	  };
	  if (!(browserDetails.version > 55 &&
	      'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
	    const remap = function(obj, a, b) {
	      if (a in obj && !(b in obj)) {
	        obj[b] = obj[a];
	        delete obj[a];
	      }
	    };
	    const nativeGetUserMedia = navigator.mediaDevices.getUserMedia.
	        bind(navigator.mediaDevices);
	    navigator.mediaDevices.getUserMedia = function(c) {
	      if (typeof c === 'object' && typeof c.audio === 'object') {
	        c = JSON.parse(JSON.stringify(c));
	        remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
	        remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
	      }
	      return nativeGetUserMedia(c);
	    };
	    if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
	      const nativeGetSettings = MediaStreamTrack.prototype.getSettings;
	      MediaStreamTrack.prototype.getSettings = function() {
	        const obj = nativeGetSettings.apply(this, arguments);
	        remap(obj, 'mozAutoGainControl', 'autoGainControl');
	        remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
	        return obj;
	      };
	    }
	    if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
	      const nativeApplyConstraints =
	        MediaStreamTrack.prototype.applyConstraints;
	      MediaStreamTrack.prototype.applyConstraints = function(c) {
	        if (this.kind === 'audio' && typeof c === 'object') {
	          c = JSON.parse(JSON.stringify(c));
	          remap(c, 'autoGainControl', 'mozAutoGainControl');
	          remap(c, 'noiseSuppression', 'mozNoiseSuppression');
	        }
	        return nativeApplyConstraints.apply(this, [c]);
	      };
	    }
	  }
	}

	function shimGetDisplayMedia(window, preferredMediaSource) {
	  if (window.navigator.mediaDevices &&
	    'getDisplayMedia' in window.navigator.mediaDevices) {
	    return;
	  }
	  if (!(window.navigator.mediaDevices)) {
	    return;
	  }
	  window.navigator.mediaDevices.getDisplayMedia =
	    function getDisplayMedia(constraints) {
	      if (!(constraints && constraints.video)) {
	        const err = new DOMException('getDisplayMedia without video ' +
	            'constraints is undefined');
	        err.name = 'NotFoundError';
	        err.code = 8;
	        return Promise.reject(err);
	      }
	      if (constraints.video === true) {
	        constraints.video = {mediaSource: preferredMediaSource};
	      } else {
	        constraints.video.mediaSource = preferredMediaSource;
	      }
	      return window.navigator.mediaDevices.getUserMedia(constraints);
	    };
	}

	function shimOnTrack(window) {
	  if (typeof window === 'object' && window.RTCTrackEvent &&
	      ('receiver' in window.RTCTrackEvent.prototype) &&
	      !('transceiver' in window.RTCTrackEvent.prototype)) {
	    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
	      get() {
	        return {receiver: this.receiver};
	      }
	    });
	  }
	}
	function shimPeerConnection(window) {
	  const browserDetails = detectBrowser(window);
	  if (typeof window !== 'object' ||
	      !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
	    return;
	  }
	  if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
	    window.RTCPeerConnection = window.mozRTCPeerConnection;
	  }
	  if (browserDetails.version < 53) {
	    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']
	        .forEach(function(method) {
	          const nativeMethod = window.RTCPeerConnection.prototype[method];
	          const methodObj = {[method]() {
	            arguments[0] = new ((method === 'addIceCandidate') ?
	                window.RTCIceCandidate :
	                window.RTCSessionDescription)(arguments[0]);
	            return nativeMethod.apply(this, arguments);
	          }};
	          window.RTCPeerConnection.prototype[method] = methodObj[method];
	        });
	  }
	  if (browserDetails.version < 68) {
	    const nativeAddIceCandidate =
	        window.RTCPeerConnection.prototype.addIceCandidate;
	    window.RTCPeerConnection.prototype.addIceCandidate =
	    function addIceCandidate() {
	      if (!arguments[0]) {
	        if (arguments[1]) {
	          arguments[1].apply(null);
	        }
	        return Promise.resolve();
	      }
	      if (arguments[0] && arguments[0].candidate === '') {
	        return Promise.resolve();
	      }
	      return nativeAddIceCandidate.apply(this, arguments);
	    };
	  }
	  const modernStatsTypes = {
	    inboundrtp: 'inbound-rtp',
	    outboundrtp: 'outbound-rtp',
	    candidatepair: 'candidate-pair',
	    localcandidate: 'local-candidate',
	    remotecandidate: 'remote-candidate'
	  };
	  const nativeGetStats = window.RTCPeerConnection.prototype.getStats;
	  window.RTCPeerConnection.prototype.getStats = function getStats() {
	    const [selector, onSucc, onErr] = arguments;
	    return nativeGetStats.apply(this, [selector || null])
	      .then(stats => {
	        if (browserDetails.version < 53 && !onSucc) {
	          try {
	            stats.forEach(stat => {
	              stat.type = modernStatsTypes[stat.type] || stat.type;
	            });
	          } catch (e) {
	            if (e.name !== 'TypeError') {
	              throw e;
	            }
	            stats.forEach((stat, i) => {
	              stats.set(i, Object.assign({}, stat, {
	                type: modernStatsTypes[stat.type] || stat.type
	              }));
	            });
	          }
	        }
	        return stats;
	      })
	      .then(onSucc, onErr);
	  };
	}
	function shimSenderGetStats(window) {
	  if (!(typeof window === 'object' && window.RTCPeerConnection &&
	      window.RTCRtpSender)) {
	    return;
	  }
	  if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
	    return;
	  }
	  const origGetSenders = window.RTCPeerConnection.prototype.getSenders;
	  if (origGetSenders) {
	    window.RTCPeerConnection.prototype.getSenders = function getSenders() {
	      const senders = origGetSenders.apply(this, []);
	      senders.forEach(sender => sender._pc = this);
	      return senders;
	    };
	  }
	  const origAddTrack = window.RTCPeerConnection.prototype.addTrack;
	  if (origAddTrack) {
	    window.RTCPeerConnection.prototype.addTrack = function addTrack() {
	      const sender = origAddTrack.apply(this, arguments);
	      sender._pc = this;
	      return sender;
	    };
	  }
	  window.RTCRtpSender.prototype.getStats = function getStats() {
	    return this.track ? this._pc.getStats(this.track) :
	        Promise.resolve(new Map());
	  };
	}
	function shimReceiverGetStats(window) {
	  if (!(typeof window === 'object' && window.RTCPeerConnection &&
	      window.RTCRtpSender)) {
	    return;
	  }
	  if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
	    return;
	  }
	  const origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
	  if (origGetReceivers) {
	    window.RTCPeerConnection.prototype.getReceivers = function getReceivers() {
	      const receivers = origGetReceivers.apply(this, []);
	      receivers.forEach(receiver => receiver._pc = this);
	      return receivers;
	    };
	  }
	  wrapPeerConnectionEvent(window, 'track', e => {
	    e.receiver._pc = e.srcElement;
	    return e;
	  });
	  window.RTCRtpReceiver.prototype.getStats = function getStats() {
	    return this._pc.getStats(this.track);
	  };
	}
	function shimRemoveStream(window) {
	  if (!window.RTCPeerConnection ||
	      'removeStream' in window.RTCPeerConnection.prototype) {
	    return;
	  }
	  window.RTCPeerConnection.prototype.removeStream =
	    function removeStream(stream) {
	      deprecated('removeStream', 'removeTrack');
	      this.getSenders().forEach(sender => {
	        if (sender.track && stream.getTracks().includes(sender.track)) {
	          this.removeTrack(sender);
	        }
	      });
	    };
	}
	function shimRTCDataChannel(window) {
	  if (window.DataChannel && !window.RTCDataChannel) {
	    window.RTCDataChannel = window.DataChannel;
	  }
	}
	function shimAddTransceiver(window) {
	  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
	    return;
	  }
	  const origAddTransceiver = window.RTCPeerConnection.prototype.addTransceiver;
	  if (origAddTransceiver) {
	    window.RTCPeerConnection.prototype.addTransceiver =
	      function addTransceiver() {
	        this.setParametersPromises = [];
	        const initParameters = arguments[1];
	        const shouldPerformCheck = initParameters &&
	                                  'sendEncodings' in initParameters;
	        if (shouldPerformCheck) {
	          initParameters.sendEncodings.forEach((encodingParam) => {
	            if ('rid' in encodingParam) {
	              const ridRegex = /^[a-z0-9]{0,16}$/i;
	              if (!ridRegex.test(encodingParam.rid)) {
	                throw new TypeError('Invalid RID value provided.');
	              }
	            }
	            if ('scaleResolutionDownBy' in encodingParam) {
	              if (!(parseFloat(encodingParam.scaleResolutionDownBy) >= 1.0)) {
	                throw new RangeError('scale_resolution_down_by must be >= 1.0');
	              }
	            }
	            if ('maxFramerate' in encodingParam) {
	              if (!(parseFloat(encodingParam.maxFramerate) >= 0)) {
	                throw new RangeError('max_framerate must be >= 0.0');
	              }
	            }
	          });
	        }
	        const transceiver = origAddTransceiver.apply(this, arguments);
	        if (shouldPerformCheck) {
	          const {sender} = transceiver;
	          const params = sender.getParameters();
	          if (!('encodings' in params) ||
	              (params.encodings.length === 1 &&
	               Object.keys(params.encodings[0]).length === 0)) {
	            params.encodings = initParameters.sendEncodings;
	            sender.sendEncodings = initParameters.sendEncodings;
	            this.setParametersPromises.push(sender.setParameters(params)
	              .then(() => {
	                delete sender.sendEncodings;
	              }).catch(() => {
	                delete sender.sendEncodings;
	              })
	            );
	          }
	        }
	        return transceiver;
	      };
	  }
	}
	function shimGetParameters(window) {
	  if (!(typeof window === 'object' && window.RTCRtpSender)) {
	    return;
	  }
	  const origGetParameters = window.RTCRtpSender.prototype.getParameters;
	  if (origGetParameters) {
	    window.RTCRtpSender.prototype.getParameters =
	      function getParameters() {
	        const params = origGetParameters.apply(this, arguments);
	        if (!('encodings' in params)) {
	          params.encodings = [].concat(this.sendEncodings || [{}]);
	        }
	        return params;
	      };
	  }
	}
	function shimCreateOffer(window) {
	  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
	    return;
	  }
	  const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
	  window.RTCPeerConnection.prototype.createOffer = function createOffer() {
	    if (this.setParametersPromises && this.setParametersPromises.length) {
	      return Promise.all(this.setParametersPromises)
	      .then(() => {
	        return origCreateOffer.apply(this, arguments);
	      })
	      .finally(() => {
	        this.setParametersPromises = [];
	      });
	    }
	    return origCreateOffer.apply(this, arguments);
	  };
	}
	function shimCreateAnswer(window) {
	  if (!(typeof window === 'object' && window.RTCPeerConnection)) {
	    return;
	  }
	  const origCreateAnswer = window.RTCPeerConnection.prototype.createAnswer;
	  window.RTCPeerConnection.prototype.createAnswer = function createAnswer() {
	    if (this.setParametersPromises && this.setParametersPromises.length) {
	      return Promise.all(this.setParametersPromises)
	      .then(() => {
	        return origCreateAnswer.apply(this, arguments);
	      })
	      .finally(() => {
	        this.setParametersPromises = [];
	      });
	    }
	    return origCreateAnswer.apply(this, arguments);
	  };
	}

	const firefoxShim = /*#__PURE__*/Object.freeze({
		__proto__: null,
		shimOnTrack: shimOnTrack,
		shimPeerConnection: shimPeerConnection,
		shimSenderGetStats: shimSenderGetStats,
		shimReceiverGetStats: shimReceiverGetStats,
		shimRemoveStream: shimRemoveStream,
		shimRTCDataChannel: shimRTCDataChannel,
		shimAddTransceiver: shimAddTransceiver,
		shimGetParameters: shimGetParameters,
		shimCreateOffer: shimCreateOffer,
		shimCreateAnswer: shimCreateAnswer,
		shimGetUserMedia: shimGetUserMedia$1,
		shimGetDisplayMedia: shimGetDisplayMedia
	});

	function shimLocalStreamsAPI(window) {
	  if (typeof window !== 'object' || !window.RTCPeerConnection) {
	    return;
	  }
	  if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
	    window.RTCPeerConnection.prototype.getLocalStreams =
	      function getLocalStreams() {
	        if (!this._localStreams) {
	          this._localStreams = [];
	        }
	        return this._localStreams;
	      };
	  }
	  if (!('addStream' in window.RTCPeerConnection.prototype)) {
	    const _addTrack = window.RTCPeerConnection.prototype.addTrack;
	    window.RTCPeerConnection.prototype.addStream = function addStream(stream) {
	      if (!this._localStreams) {
	        this._localStreams = [];
	      }
	      if (!this._localStreams.includes(stream)) {
	        this._localStreams.push(stream);
	      }
	      stream.getAudioTracks().forEach(track => _addTrack.call(this, track,
	        stream));
	      stream.getVideoTracks().forEach(track => _addTrack.call(this, track,
	        stream));
	    };
	    window.RTCPeerConnection.prototype.addTrack =
	      function addTrack(track, ...streams) {
	        if (streams) {
	          streams.forEach((stream) => {
	            if (!this._localStreams) {
	              this._localStreams = [stream];
	            } else if (!this._localStreams.includes(stream)) {
	              this._localStreams.push(stream);
	            }
	          });
	        }
	        return _addTrack.apply(this, arguments);
	      };
	  }
	  if (!('removeStream' in window.RTCPeerConnection.prototype)) {
	    window.RTCPeerConnection.prototype.removeStream =
	      function removeStream(stream) {
	        if (!this._localStreams) {
	          this._localStreams = [];
	        }
	        const index = this._localStreams.indexOf(stream);
	        if (index === -1) {
	          return;
	        }
	        this._localStreams.splice(index, 1);
	        const tracks = stream.getTracks();
	        this.getSenders().forEach(sender => {
	          if (tracks.includes(sender.track)) {
	            this.removeTrack(sender);
	          }
	        });
	      };
	  }
	}
	function shimRemoteStreamsAPI(window) {
	  if (typeof window !== 'object' || !window.RTCPeerConnection) {
	    return;
	  }
	  if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
	    window.RTCPeerConnection.prototype.getRemoteStreams =
	      function getRemoteStreams() {
	        return this._remoteStreams ? this._remoteStreams : [];
	      };
	  }
	  if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
	    Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
	      get() {
	        return this._onaddstream;
	      },
	      set(f) {
	        if (this._onaddstream) {
	          this.removeEventListener('addstream', this._onaddstream);
	          this.removeEventListener('track', this._onaddstreampoly);
	        }
	        this.addEventListener('addstream', this._onaddstream = f);
	        this.addEventListener('track', this._onaddstreampoly = (e) => {
	          e.streams.forEach(stream => {
	            if (!this._remoteStreams) {
	              this._remoteStreams = [];
	            }
	            if (this._remoteStreams.includes(stream)) {
	              return;
	            }
	            this._remoteStreams.push(stream);
	            const event = new Event('addstream');
	            event.stream = stream;
	            this.dispatchEvent(event);
	          });
	        });
	      }
	    });
	    const origSetRemoteDescription =
	      window.RTCPeerConnection.prototype.setRemoteDescription;
	    window.RTCPeerConnection.prototype.setRemoteDescription =
	      function setRemoteDescription() {
	        const pc = this;
	        if (!this._onaddstreampoly) {
	          this.addEventListener('track', this._onaddstreampoly = function(e) {
	            e.streams.forEach(stream => {
	              if (!pc._remoteStreams) {
	                pc._remoteStreams = [];
	              }
	              if (pc._remoteStreams.indexOf(stream) >= 0) {
	                return;
	              }
	              pc._remoteStreams.push(stream);
	              const event = new Event('addstream');
	              event.stream = stream;
	              pc.dispatchEvent(event);
	            });
	          });
	        }
	        return origSetRemoteDescription.apply(pc, arguments);
	      };
	  }
	}
	function shimCallbacksAPI(window) {
	  if (typeof window !== 'object' || !window.RTCPeerConnection) {
	    return;
	  }
	  const prototype = window.RTCPeerConnection.prototype;
	  const origCreateOffer = prototype.createOffer;
	  const origCreateAnswer = prototype.createAnswer;
	  const setLocalDescription = prototype.setLocalDescription;
	  const setRemoteDescription = prototype.setRemoteDescription;
	  const addIceCandidate = prototype.addIceCandidate;
	  prototype.createOffer =
	    function createOffer(successCallback, failureCallback) {
	      const options = (arguments.length >= 2) ? arguments[2] : arguments[0];
	      const promise = origCreateOffer.apply(this, [options]);
	      if (!failureCallback) {
	        return promise;
	      }
	      promise.then(successCallback, failureCallback);
	      return Promise.resolve();
	    };
	  prototype.createAnswer =
	    function createAnswer(successCallback, failureCallback) {
	      const options = (arguments.length >= 2) ? arguments[2] : arguments[0];
	      const promise = origCreateAnswer.apply(this, [options]);
	      if (!failureCallback) {
	        return promise;
	      }
	      promise.then(successCallback, failureCallback);
	      return Promise.resolve();
	    };
	  let withCallback = function(description, successCallback, failureCallback) {
	    const promise = setLocalDescription.apply(this, [description]);
	    if (!failureCallback) {
	      return promise;
	    }
	    promise.then(successCallback, failureCallback);
	    return Promise.resolve();
	  };
	  prototype.setLocalDescription = withCallback;
	  withCallback = function(description, successCallback, failureCallback) {
	    const promise = setRemoteDescription.apply(this, [description]);
	    if (!failureCallback) {
	      return promise;
	    }
	    promise.then(successCallback, failureCallback);
	    return Promise.resolve();
	  };
	  prototype.setRemoteDescription = withCallback;
	  withCallback = function(candidate, successCallback, failureCallback) {
	    const promise = addIceCandidate.apply(this, [candidate]);
	    if (!failureCallback) {
	      return promise;
	    }
	    promise.then(successCallback, failureCallback);
	    return Promise.resolve();
	  };
	  prototype.addIceCandidate = withCallback;
	}
	function shimGetUserMedia(window) {
	  const navigator = window && window.navigator;
	  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
	    const mediaDevices = navigator.mediaDevices;
	    const _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
	    navigator.mediaDevices.getUserMedia = (constraints) => {
	      return _getUserMedia(shimConstraints(constraints));
	    };
	  }
	  if (!navigator.getUserMedia && navigator.mediaDevices &&
	    navigator.mediaDevices.getUserMedia) {
	    navigator.getUserMedia = function getUserMedia(constraints, cb, errcb) {
	      navigator.mediaDevices.getUserMedia(constraints)
	      .then(cb, errcb);
	    }.bind(navigator);
	  }
	}
	function shimConstraints(constraints) {
	  if (constraints && constraints.video !== undefined) {
	    return Object.assign({},
	      constraints,
	      {video: compactObject(constraints.video)}
	    );
	  }
	  return constraints;
	}
	function shimRTCIceServerUrls(window) {
	  if (!window.RTCPeerConnection) {
	    return;
	  }
	  const OrigPeerConnection = window.RTCPeerConnection;
	  window.RTCPeerConnection =
	    function RTCPeerConnection(pcConfig, pcConstraints) {
	      if (pcConfig && pcConfig.iceServers) {
	        const newIceServers = [];
	        for (let i = 0; i < pcConfig.iceServers.length; i++) {
	          let server = pcConfig.iceServers[i];
	          if (!server.hasOwnProperty('urls') &&
	              server.hasOwnProperty('url')) {
	            deprecated('RTCIceServer.url', 'RTCIceServer.urls');
	            server = JSON.parse(JSON.stringify(server));
	            server.urls = server.url;
	            delete server.url;
	            newIceServers.push(server);
	          } else {
	            newIceServers.push(pcConfig.iceServers[i]);
	          }
	        }
	        pcConfig.iceServers = newIceServers;
	      }
	      return new OrigPeerConnection(pcConfig, pcConstraints);
	    };
	  window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
	  if ('generateCertificate' in OrigPeerConnection) {
	    Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
	      get() {
	        return OrigPeerConnection.generateCertificate;
	      }
	    });
	  }
	}
	function shimTrackEventTransceiver(window) {
	  if (typeof window === 'object' && window.RTCTrackEvent &&
	      'receiver' in window.RTCTrackEvent.prototype &&
	      !('transceiver' in window.RTCTrackEvent.prototype)) {
	    Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
	      get() {
	        return {receiver: this.receiver};
	      }
	    });
	  }
	}
	function shimCreateOfferLegacy(window) {
	  const origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
	  window.RTCPeerConnection.prototype.createOffer =
	    function createOffer(offerOptions) {
	      if (offerOptions) {
	        if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
	          offerOptions.offerToReceiveAudio =
	            !!offerOptions.offerToReceiveAudio;
	        }
	        const audioTransceiver = this.getTransceivers().find(transceiver =>
	          transceiver.receiver.track.kind === 'audio');
	        if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
	          if (audioTransceiver.direction === 'sendrecv') {
	            if (audioTransceiver.setDirection) {
	              audioTransceiver.setDirection('sendonly');
	            } else {
	              audioTransceiver.direction = 'sendonly';
	            }
	          } else if (audioTransceiver.direction === 'recvonly') {
	            if (audioTransceiver.setDirection) {
	              audioTransceiver.setDirection('inactive');
	            } else {
	              audioTransceiver.direction = 'inactive';
	            }
	          }
	        } else if (offerOptions.offerToReceiveAudio === true &&
	            !audioTransceiver) {
	          this.addTransceiver('audio');
	        }
	        if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
	          offerOptions.offerToReceiveVideo =
	            !!offerOptions.offerToReceiveVideo;
	        }
	        const videoTransceiver = this.getTransceivers().find(transceiver =>
	          transceiver.receiver.track.kind === 'video');
	        if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
	          if (videoTransceiver.direction === 'sendrecv') {
	            if (videoTransceiver.setDirection) {
	              videoTransceiver.setDirection('sendonly');
	            } else {
	              videoTransceiver.direction = 'sendonly';
	            }
	          } else if (videoTransceiver.direction === 'recvonly') {
	            if (videoTransceiver.setDirection) {
	              videoTransceiver.setDirection('inactive');
	            } else {
	              videoTransceiver.direction = 'inactive';
	            }
	          }
	        } else if (offerOptions.offerToReceiveVideo === true &&
	            !videoTransceiver) {
	          this.addTransceiver('video');
	        }
	      }
	      return origCreateOffer.apply(this, arguments);
	    };
	}
	function shimAudioContext(window) {
	  if (typeof window !== 'object' || window.AudioContext) {
	    return;
	  }
	  window.AudioContext = window.webkitAudioContext;
	}

	const safariShim = /*#__PURE__*/Object.freeze({
		__proto__: null,
		shimLocalStreamsAPI: shimLocalStreamsAPI,
		shimRemoteStreamsAPI: shimRemoteStreamsAPI,
		shimCallbacksAPI: shimCallbacksAPI,
		shimGetUserMedia: shimGetUserMedia,
		shimConstraints: shimConstraints,
		shimRTCIceServerUrls: shimRTCIceServerUrls,
		shimTrackEventTransceiver: shimTrackEventTransceiver,
		shimCreateOfferLegacy: shimCreateOfferLegacy,
		shimAudioContext: shimAudioContext
	});

	function shimRTCIceCandidate(window) {
	  if (!window.RTCIceCandidate || (window.RTCIceCandidate && 'foundation' in
	      window.RTCIceCandidate.prototype)) {
	    return;
	  }
	  const NativeRTCIceCandidate = window.RTCIceCandidate;
	  window.RTCIceCandidate = function RTCIceCandidate(args) {
	    if (typeof args === 'object' && args.candidate &&
	        args.candidate.indexOf('a=') === 0) {
	      args = JSON.parse(JSON.stringify(args));
	      args.candidate = args.candidate.substr(2);
	    }
	    if (args.candidate && args.candidate.length) {
	      const nativeCandidate = new NativeRTCIceCandidate(args);
	      const parsedCandidate = SDPUtils$1.parseCandidate(args.candidate);
	      const augmentedCandidate = Object.assign(nativeCandidate,
	          parsedCandidate);
	      augmentedCandidate.toJSON = function toJSON() {
	        return {
	          candidate: augmentedCandidate.candidate,
	          sdpMid: augmentedCandidate.sdpMid,
	          sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
	          usernameFragment: augmentedCandidate.usernameFragment,
	        };
	      };
	      return augmentedCandidate;
	    }
	    return new NativeRTCIceCandidate(args);
	  };
	  window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;
	  wrapPeerConnectionEvent(window, 'icecandidate', e => {
	    if (e.candidate) {
	      Object.defineProperty(e, 'candidate', {
	        value: new window.RTCIceCandidate(e.candidate),
	        writable: 'false'
	      });
	    }
	    return e;
	  });
	}
	function shimMaxMessageSize(window) {
	  if (!window.RTCPeerConnection) {
	    return;
	  }
	  const browserDetails = detectBrowser(window);
	  if (!('sctp' in window.RTCPeerConnection.prototype)) {
	    Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
	      get() {
	        return typeof this._sctp === 'undefined' ? null : this._sctp;
	      }
	    });
	  }
	  const sctpInDescription = function(description) {
	    if (!description || !description.sdp) {
	      return false;
	    }
	    const sections = SDPUtils$1.splitSections(description.sdp);
	    sections.shift();
	    return sections.some(mediaSection => {
	      const mLine = SDPUtils$1.parseMLine(mediaSection);
	      return mLine && mLine.kind === 'application'
	          && mLine.protocol.indexOf('SCTP') !== -1;
	    });
	  };
	  const getRemoteFirefoxVersion = function(description) {
	    const match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
	    if (match === null || match.length < 2) {
	      return -1;
	    }
	    const version = parseInt(match[1], 10);
	    return version !== version ? -1 : version;
	  };
	  const getCanSendMaxMessageSize = function(remoteIsFirefox) {
	    let canSendMaxMessageSize = 65536;
	    if (browserDetails.browser === 'firefox') {
	      if (browserDetails.version < 57) {
	        if (remoteIsFirefox === -1) {
	          canSendMaxMessageSize = 16384;
	        } else {
	          canSendMaxMessageSize = 2147483637;
	        }
	      } else if (browserDetails.version < 60) {
	        canSendMaxMessageSize =
	          browserDetails.version === 57 ? 65535 : 65536;
	      } else {
	        canSendMaxMessageSize = 2147483637;
	      }
	    }
	    return canSendMaxMessageSize;
	  };
	  const getMaxMessageSize = function(description, remoteIsFirefox) {
	    let maxMessageSize = 65536;
	    if (browserDetails.browser === 'firefox'
	         && browserDetails.version === 57) {
	      maxMessageSize = 65535;
	    }
	    const match = SDPUtils$1.matchPrefix(description.sdp,
	      'a=max-message-size:');
	    if (match.length > 0) {
	      maxMessageSize = parseInt(match[0].substr(19), 10);
	    } else if (browserDetails.browser === 'firefox' &&
	                remoteIsFirefox !== -1) {
	      maxMessageSize = 2147483637;
	    }
	    return maxMessageSize;
	  };
	  const origSetRemoteDescription =
	      window.RTCPeerConnection.prototype.setRemoteDescription;
	  window.RTCPeerConnection.prototype.setRemoteDescription =
	    function setRemoteDescription() {
	      this._sctp = null;
	      if (browserDetails.browser === 'chrome' && browserDetails.version >= 76) {
	        const {sdpSemantics} = this.getConfiguration();
	        if (sdpSemantics === 'plan-b') {
	          Object.defineProperty(this, 'sctp', {
	            get() {
	              return typeof this._sctp === 'undefined' ? null : this._sctp;
	            },
	            enumerable: true,
	            configurable: true,
	          });
	        }
	      }
	      if (sctpInDescription(arguments[0])) {
	        const isFirefox = getRemoteFirefoxVersion(arguments[0]);
	        const canSendMMS = getCanSendMaxMessageSize(isFirefox);
	        const remoteMMS = getMaxMessageSize(arguments[0], isFirefox);
	        let maxMessageSize;
	        if (canSendMMS === 0 && remoteMMS === 0) {
	          maxMessageSize = Number.POSITIVE_INFINITY;
	        } else if (canSendMMS === 0 || remoteMMS === 0) {
	          maxMessageSize = Math.max(canSendMMS, remoteMMS);
	        } else {
	          maxMessageSize = Math.min(canSendMMS, remoteMMS);
	        }
	        const sctp = {};
	        Object.defineProperty(sctp, 'maxMessageSize', {
	          get() {
	            return maxMessageSize;
	          }
	        });
	        this._sctp = sctp;
	      }
	      return origSetRemoteDescription.apply(this, arguments);
	    };
	}
	function shimSendThrowTypeError(window) {
	  if (!(window.RTCPeerConnection &&
	      'createDataChannel' in window.RTCPeerConnection.prototype)) {
	    return;
	  }
	  function wrapDcSend(dc, pc) {
	    const origDataChannelSend = dc.send;
	    dc.send = function send() {
	      const data = arguments[0];
	      const length = data.length || data.size || data.byteLength;
	      if (dc.readyState === 'open' &&
	          pc.sctp && length > pc.sctp.maxMessageSize) {
	        throw new TypeError('Message too large (can send a maximum of ' +
	          pc.sctp.maxMessageSize + ' bytes)');
	      }
	      return origDataChannelSend.apply(dc, arguments);
	    };
	  }
	  const origCreateDataChannel =
	    window.RTCPeerConnection.prototype.createDataChannel;
	  window.RTCPeerConnection.prototype.createDataChannel =
	    function createDataChannel() {
	      const dataChannel = origCreateDataChannel.apply(this, arguments);
	      wrapDcSend(dataChannel, this);
	      return dataChannel;
	    };
	  wrapPeerConnectionEvent(window, 'datachannel', e => {
	    wrapDcSend(e.channel, e.target);
	    return e;
	  });
	}
	function shimConnectionState(window) {
	  if (!window.RTCPeerConnection ||
	      'connectionState' in window.RTCPeerConnection.prototype) {
	    return;
	  }
	  const proto = window.RTCPeerConnection.prototype;
	  Object.defineProperty(proto, 'connectionState', {
	    get() {
	      return {
	        completed: 'connected',
	        checking: 'connecting'
	      }[this.iceConnectionState] || this.iceConnectionState;
	    },
	    enumerable: true,
	    configurable: true
	  });
	  Object.defineProperty(proto, 'onconnectionstatechange', {
	    get() {
	      return this._onconnectionstatechange || null;
	    },
	    set(cb) {
	      if (this._onconnectionstatechange) {
	        this.removeEventListener('connectionstatechange',
	            this._onconnectionstatechange);
	        delete this._onconnectionstatechange;
	      }
	      if (cb) {
	        this.addEventListener('connectionstatechange',
	            this._onconnectionstatechange = cb);
	      }
	    },
	    enumerable: true,
	    configurable: true
	  });
	  ['setLocalDescription', 'setRemoteDescription'].forEach((method) => {
	    const origMethod = proto[method];
	    proto[method] = function() {
	      if (!this._connectionstatechangepoly) {
	        this._connectionstatechangepoly = e => {
	          const pc = e.target;
	          if (pc._lastConnectionState !== pc.connectionState) {
	            pc._lastConnectionState = pc.connectionState;
	            const newEvent = new Event('connectionstatechange', e);
	            pc.dispatchEvent(newEvent);
	          }
	          return e;
	        };
	        this.addEventListener('iceconnectionstatechange',
	          this._connectionstatechangepoly);
	      }
	      return origMethod.apply(this, arguments);
	    };
	  });
	}
	function removeAllowExtmapMixed(window) {
	  if (!window.RTCPeerConnection) {
	    return;
	  }
	  const browserDetails = detectBrowser(window);
	  if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
	    return;
	  }
	  if (browserDetails.browser === 'safari' && browserDetails.version >= 605) {
	    return;
	  }
	  const nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
	  window.RTCPeerConnection.prototype.setRemoteDescription =
	  function setRemoteDescription(desc) {
	    if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
	      desc.sdp = desc.sdp.split('\n').filter((line) => {
	        return line.trim() !== 'a=extmap-allow-mixed';
	      }).join('\n');
	    }
	    return nativeSRD.apply(this, arguments);
	  };
	}

	const commonShim = /*#__PURE__*/Object.freeze({
		__proto__: null,
		shimRTCIceCandidate: shimRTCIceCandidate,
		shimMaxMessageSize: shimMaxMessageSize,
		shimSendThrowTypeError: shimSendThrowTypeError,
		shimConnectionState: shimConnectionState,
		removeAllowExtmapMixed: removeAllowExtmapMixed
	});

	function adapterFactory({window} = {}, options = {
	  shimChrome: true,
	  shimFirefox: true,
	  shimEdge: true,
	  shimSafari: true,
	}) {
	  const logging = log;
	  const browserDetails = detectBrowser(window);
	  const adapter = {
	    browserDetails,
	    commonShim,
	    extractVersion: extractVersion,
	    disableLog: disableLog,
	    disableWarnings: disableWarnings
	  };
	  switch (browserDetails.browser) {
	    case 'chrome':
	      if (!chromeShim || !shimPeerConnection$2 ||
	          !options.shimChrome) {
	        logging('Chrome shim is not included in this adapter release.');
	        return adapter;
	      }
	      if (browserDetails.version === null) {
	        logging('Chrome shim can not determine version, not shimming.');
	        return adapter;
	      }
	      logging('adapter.js shimming chrome.');
	      adapter.browserShim = chromeShim;
	      shimGetUserMedia$3(window);
	      shimMediaStream(window);
	      shimPeerConnection$2(window);
	      shimOnTrack$1(window);
	      shimAddTrackRemoveTrack(window);
	      shimGetSendersWithDtmf(window);
	      shimGetStats(window);
	      shimSenderReceiverGetStats(window);
	      fixNegotiationNeeded(window);
	      shimRTCIceCandidate(window);
	      shimConnectionState(window);
	      shimMaxMessageSize(window);
	      shimSendThrowTypeError(window);
	      removeAllowExtmapMixed(window);
	      break;
	    case 'firefox':
	      if (!firefoxShim || !shimPeerConnection ||
	          !options.shimFirefox) {
	        logging('Firefox shim is not included in this adapter release.');
	        return adapter;
	      }
	      logging('adapter.js shimming firefox.');
	      adapter.browserShim = firefoxShim;
	      shimGetUserMedia$1(window);
	      shimPeerConnection(window);
	      shimOnTrack(window);
	      shimRemoveStream(window);
	      shimSenderGetStats(window);
	      shimReceiverGetStats(window);
	      shimRTCDataChannel(window);
	      shimAddTransceiver(window);
	      shimGetParameters(window);
	      shimCreateOffer(window);
	      shimCreateAnswer(window);
	      shimRTCIceCandidate(window);
	      shimConnectionState(window);
	      shimMaxMessageSize(window);
	      shimSendThrowTypeError(window);
	      break;
	    case 'edge':
	      if (!edgeShim || !shimPeerConnection$1 || !options.shimEdge) {
	        logging('MS edge shim is not included in this adapter release.');
	        return adapter;
	      }
	      logging('adapter.js shimming edge.');
	      adapter.browserShim = edgeShim;
	      shimGetUserMedia$2(window);
	      shimGetDisplayMedia$1(window);
	      shimPeerConnection$1(window);
	      shimReplaceTrack(window);
	      shimMaxMessageSize(window);
	      shimSendThrowTypeError(window);
	      break;
	    case 'safari':
	      if (!safariShim || !options.shimSafari) {
	        logging('Safari shim is not included in this adapter release.');
	        return adapter;
	      }
	      logging('adapter.js shimming safari.');
	      adapter.browserShim = safariShim;
	      shimRTCIceServerUrls(window);
	      shimCreateOfferLegacy(window);
	      shimCallbacksAPI(window);
	      shimLocalStreamsAPI(window);
	      shimRemoteStreamsAPI(window);
	      shimTrackEventTransceiver(window);
	      shimGetUserMedia(window);
	      shimAudioContext(window);
	      shimRTCIceCandidate(window);
	      shimMaxMessageSize(window);
	      shimSendThrowTypeError(window);
	      removeAllowExtmapMixed(window);
	      break;
	    default:
	      logging('Unsupported browser!');
	      break;
	  }
	  return adapter;
	}

	adapterFactory({window: typeof window === 'undefined' ? undefined : window});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	var _class, _temp;
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	var React = r__default["default"];
	var Component = React.Component;
	var PropTypes = propTypes.exports;
	var _require = getDeviceId_1,
	    getDeviceId = _require.getDeviceId;
	var havePropsChanged = havePropsChanged$1;
	var createBlob = createBlob$1;
	var workerBlob = createBlob(["!function(o,e){\"object\"==typeof exports&&\"object\"==typeof module?module.exports=e():\"function\"==typeof define&&define.amd?define([],e):\"object\"==typeof exports?exports.jsQR=e():o.jsQR=e()}(\"undefined\"!=typeof self?self:this,function(){return function(o){function e(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return o[t].call(c.exports,c,c.exports,e),c.l=!0,c.exports}var r={};return e.m=o,e.c=r,e.d=function(o,r,t){e.o(o,r)||Object.defineProperty(o,r,{configurable:!1,enumerable:!0,get:t})},e.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(r,\"a\",r),r},e.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},e.p=\"\",e(e.s=3)}([function(o,e,r){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var t=function(){function o(o,e){this.width=e,this.height=o.length/e,this.data=o}return o.createEmpty=function(e,r){return new o(new Uint8ClampedArray(e*r),e)},o.prototype.get=function(o,e){return!(o<0||o>=this.width||e<0||e>=this.height)&&!!this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r?1:0},o.prototype.setRegion=function(o,e,r,t,c){for(var s=e;s<e+t;s++)for(var a=o;a<o+r;a++)this.set(a,s,!!c)},o}();e.BitMatrix=t},function(o,e,r){\"use strict\";function t(o,e){return o^e}Object.defineProperty(e,\"__esModule\",{value:!0});var c=r(2);e.addOrSubtractGF=t;var s=function(){function o(o,e,r){this.primitive=o,this.size=e,this.generatorBase=r,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var t=1,s=0;s<this.size;s++)this.expTable[s]=t,(t*=2)>=this.size&&(t=(t^this.primitive)&this.size-1);for(var s=0;s<this.size-1;s++)this.logTable[this.expTable[s]]=s;this.zero=new c.default(this,Uint8ClampedArray.from([0])),this.one=new c.default(this,Uint8ClampedArray.from([1]))}return o.prototype.multiply=function(o,e){return 0===o||0===e?0:this.expTable[(this.logTable[o]+this.logTable[e])%(this.size-1)]},o.prototype.inverse=function(o){if(0===o)throw new Error(\"Can't invert 0\");return this.expTable[this.size-this.logTable[o]-1]},o.prototype.buildMonomial=function(o,e){if(o<0)throw new Error(\"Invalid monomial degree less than 0\");if(0===e)return this.zero;var r=new Uint8ClampedArray(o+1);return r[0]=e,new c.default(this,r)},o.prototype.log=function(o){if(0===o)throw new Error(\"Can't take log(0)\");return this.logTable[o]},o.prototype.exp=function(o){return this.expTable[o]},o}();e.default=s},function(o,e,r){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var t=r(1),c=function(){function o(o,e){if(0===e.length)throw new Error(\"No coefficients.\");this.field=o;var r=e.length;if(r>1&&0===e[0]){for(var t=1;t<r&&0===e[t];)t++;if(t===r)this.coefficients=o.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(r-t);for(var c=0;c<this.coefficients.length;c++)this.coefficients[c]=e[t+c]}}else this.coefficients=e}return o.prototype.degree=function(){return this.coefficients.length-1},o.prototype.isZero=function(){return 0===this.coefficients[0]},o.prototype.getCoefficient=function(o){return this.coefficients[this.coefficients.length-1-o]},o.prototype.addOrSubtract=function(e){if(this.isZero())return e;if(e.isZero())return this;var r=this.coefficients,c=e.coefficients;r.length>c.length&&(n=[c,r],r=n[0],c=n[1]);for(var s=new Uint8ClampedArray(c.length),a=c.length-r.length,d=0;d<a;d++)s[d]=c[d];for(var d=a;d<c.length;d++)s[d]=t.addOrSubtractGF(r[d-a],c[d]);return new o(this.field,s);var n},o.prototype.multiply=function(e){if(0===e)return this.field.zero;if(1===e)return this;for(var r=this.coefficients.length,t=new Uint8ClampedArray(r),c=0;c<r;c++)t[c]=this.field.multiply(this.coefficients[c],e);return new o(this.field,t)},o.prototype.multiplyPoly=function(e){if(this.isZero()||e.isZero())return this.field.zero;for(var r=this.coefficients,c=r.length,s=e.coefficients,a=s.length,d=new Uint8ClampedArray(c+a-1),n=0;n<c;n++)for(var l=r[n],i=0;i<a;i++)d[n+i]=t.addOrSubtractGF(d[n+i],this.field.multiply(l,s[i]));return new o(this.field,d)},o.prototype.multiplyByMonomial=function(e,r){if(e<0)throw new Error(\"Invalid degree less than 0\");if(0===r)return this.field.zero;for(var t=this.coefficients.length,c=new Uint8ClampedArray(t+e),s=0;s<t;s++)c[s]=this.field.multiply(this.coefficients[s],r);return new o(this.field,c)},o.prototype.evaluateAt=function(o){var e=0;if(0===o)return this.getCoefficient(0);var r=this.coefficients.length;if(1===o)return this.coefficients.forEach(function(o){e=t.addOrSubtractGF(e,o)}),e;e=this.coefficients[0];for(var c=1;c<r;c++)e=t.addOrSubtractGF(this.field.multiply(o,e),this.coefficients[c]);return e},o}();e.default=c},function(o,e,r){\"use strict\";function t(o){var e=n.locate(o);if(!e)return null;var r=d.extract(o,e),t=a.decode(r.matrix);return t?{binaryData:t.bytes,data:t.text,chunks:t.chunks,location:{topRightCorner:r.mappingFunction(e.dimension,0),topLeftCorner:r.mappingFunction(0,0),bottomRightCorner:r.mappingFunction(e.dimension,e.dimension),bottomLeftCorner:r.mappingFunction(0,e.dimension),topRightFinderPattern:e.topRight,topLeftFinderPattern:e.topLeft,bottomLeftFinderPattern:e.bottomLeft,bottomRightAlignmentPattern:e.alignmentPattern}}:null}function c(o,e,r,c){void 0===c&&(c={});var a=l;Object.keys(a||{}).forEach(function(o){a[o]=c[o]||a[o]});var d=\"attemptBoth\"===a.inversionAttempts||\"invertFirst\"===a.inversionAttempts,n=\"onlyInvert\"===a.inversionAttempts||\"invertFirst\"===a.inversionAttempts,i=s.binarize(o,e,r,d),B=i.binarized,k=i.inverted,u=t(n?k:B);return u||\"attemptBoth\"!==a.inversionAttempts&&\"invertFirst\"!==a.inversionAttempts||(u=t(n?B:k)),u}Object.defineProperty(e,\"__esModule\",{value:!0});var s=r(4),a=r(5),d=r(11),n=r(12),l={inversionAttempts:\"attemptBoth\"};c.default=c,e.default=c},function(o,e,r){\"use strict\";function t(o,e,r){return o<e?e:o>r?r:o}function c(o,e,r,c){if(o.length!==e*r*4)throw new Error(\"Malformed data passed to binarizer.\");for(var l=new n(e,r),i=0;i<e;i++)for(var B=0;B<r;B++){var k=o[4*(B*e+i)+0],u=o[4*(B*e+i)+1],C=o[4*(B*e+i)+2];l.set(i,B,.2126*k+.7152*u+.0722*C)}for(var m=Math.ceil(e/a),f=Math.ceil(r/a),w=new n(m,f),P=0;P<f;P++)for(var v=0;v<m;v++){for(var h=0,p=1/0,y=0,B=0;B<a;B++)for(var i=0;i<a;i++){var b=l.get(v*a+i,P*a+B);h+=b,p=Math.min(p,b),y=Math.max(y,b)}var g=h/Math.pow(a,2);if(y-p<=d&&(g=p/2,P>0&&v>0)){var x=(w.get(v,P-1)+2*w.get(v-1,P)+w.get(v-1,P-1))/4;p<x&&(g=x)}w.set(v,P,g)}var M=s.BitMatrix.createEmpty(e,r),L=null;c&&(L=s.BitMatrix.createEmpty(e,r));for(var P=0;P<f;P++)for(var v=0;v<m;v++){for(var N=t(v,2,m-3),I=t(P,2,f-3),h=0,O=-2;O<=2;O++)for(var z=-2;z<=2;z++)h+=w.get(N+O,I+z);for(var S=h/25,O=0;O<a;O++)for(var z=0;z<a;z++){var i=v*a+O,B=P*a+z,X=l.get(i,B);M.set(i,B,X<=S),c&&L.set(i,B,!(X<=S))}}return c?{binarized:M,inverted:L}:{binarized:M}}Object.defineProperty(e,\"__esModule\",{value:!0});var s=r(0),a=8,d=24,n=function(){function o(o,e){this.width=o,this.data=new Uint8ClampedArray(o*e)}return o.prototype.get=function(o,e){return this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r},o}();e.binarize=c},function(o,e,r){\"use strict\";function t(o,e){for(var r=o^e,t=0;r;)t++,r&=r-1;return t}function c(o,e){return e<<1|o}function s(o){var e=17+4*o.versionNumber,r=k.BitMatrix.createEmpty(e,e);r.setRegion(0,0,9,9,!0),r.setRegion(e-8,0,8,9,!0),r.setRegion(0,e-8,9,8,!0);for(var t=0,c=o.alignmentPatternCenters;t<c.length;t++)for(var s=c[t],a=0,d=o.alignmentPatternCenters;a<d.length;a++){var n=d[a];6===s&&6===n||6===s&&n===e-7||s===e-7&&6===n||r.setRegion(s-2,n-2,5,5,!0)}return r.setRegion(6,9,1,e-17,!0),r.setRegion(9,6,e-17,1,!0),o.versionNumber>6&&(r.setRegion(e-11,0,3,6,!0),r.setRegion(0,e-11,6,3,!0)),r}function a(o,e,r){for(var t=w[r.dataMask],a=o.height,d=s(e),n=[],l=0,i=0,B=!0,k=a-1;k>0;k-=2){6===k&&k--;for(var u=0;u<a;u++)for(var C=B?a-1-u:u,m=0;m<2;m++){var f=k-m;if(!d.get(f,C)){i++;var P=o.get(f,C);t({y:C,x:f})&&(P=!P),l=c(P,l),8===i&&(n.push(l),i=0,l=0)}}B=!B}return n}function d(o){var e=o.height,r=Math.floor((e-17)/4);if(r<=6)return m.VERSIONS[r-1];for(var s=0,a=5;a>=0;a--)for(var d=e-9;d>=e-11;d--)s=c(o.get(d,a),s);for(var n=0,d=5;d>=0;d--)for(var a=e-9;a>=e-11;a--)n=c(o.get(d,a),n);for(var l,i=1/0,B=0,k=m.VERSIONS;B<k.length;B++){var u=k[B];if(u.infoBits===s||u.infoBits===n)return u;var C=t(s,u.infoBits);C<i&&(l=u,i=C),C=t(n,u.infoBits),C<i&&(l=u,i=C)}return i<=3?l:void 0}function n(o){for(var e=0,r=0;r<=8;r++)6!==r&&(e=c(o.get(r,8),e));for(var s=7;s>=0;s--)6!==s&&(e=c(o.get(8,s),e));for(var a=o.height,d=0,s=a-1;s>=a-7;s--)d=c(o.get(8,s),d);for(var r=a-8;r<a;r++)d=c(o.get(r,8),d);for(var n=1/0,l=null,i=0,B=f;i<B.length;i++){var k=B[i],u=k.bits,C=k.formatInfo;if(u===e||u===d)return C;var m=t(e,u);m<n&&(l=C,n=m),e!==d&&(m=t(d,u))<n&&(l=C,n=m)}return n<=3?l:null}function l(o,e,r){var t=e.errorCorrectionLevels[r],c=[],s=0;if(t.ecBlocks.forEach(function(o){for(var e=0;e<o.numBlocks;e++)c.push({numDataCodewords:o.dataCodewordsPerBlock,codewords:[]}),s+=o.dataCodewordsPerBlock+t.ecCodewordsPerBlock}),o.length<s)return null;o=o.slice(0,s);for(var a=t.ecBlocks[0].dataCodewordsPerBlock,d=0;d<a;d++)for(var n=0,l=c;n<l.length;n++){var i=l[n];i.codewords.push(o.shift())}if(t.ecBlocks.length>1)for(var B=t.ecBlocks[0].numBlocks,k=t.ecBlocks[1].numBlocks,d=0;d<k;d++)c[B+d].codewords.push(o.shift());for(;o.length>0;)for(var u=0,C=c;u<C.length;u++){var i=C[u];i.codewords.push(o.shift())}return c}function i(o){var e=d(o);if(!e)return null;var r=n(o);if(!r)return null;var t=a(o,e,r),c=l(t,e,r.errorCorrectionLevel);if(!c)return null;for(var s=c.reduce(function(o,e){return o+e.numDataCodewords},0),i=new Uint8ClampedArray(s),B=0,k=0,m=c;k<m.length;k++){var f=m[k],w=C.decode(f.codewords,f.codewords.length-f.numDataCodewords);if(!w)return null;for(var P=0;P<f.numDataCodewords;P++)i[B++]=w[P]}try{return u.decode(i,e.versionNumber)}catch(o){return null}}function B(o){if(null==o)return null;var e=i(o);if(e)return e;for(var r=0;r<o.width;r++)for(var t=r+1;t<o.height;t++)o.get(r,t)!==o.get(t,r)&&(o.set(r,t,!o.get(r,t)),o.set(t,r,!o.get(t,r)));return i(o)}Object.defineProperty(e,\"__esModule\",{value:!0});var k=r(0),u=r(6),C=r(9),m=r(10),f=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],w=[function(o){return(o.y+o.x)%2==0},function(o){return o.y%2==0},function(o){return o.x%3==0},function(o){return(o.y+o.x)%3==0},function(o){return(Math.floor(o.y/2)+Math.floor(o.x/3))%2==0},function(o){return o.x*o.y%2+o.x*o.y%3==0},function(o){return(o.y*o.x%2+o.y*o.x%3)%2==0},function(o){return((o.y+o.x)%2+o.y*o.x%3)%2==0}];e.decode=B},function(o,e,r){\"use strict\";function t(o,e){for(var r=[],t=\"\",c=[10,12,14][e],s=o.readBits(c);s>=3;){var a=o.readBits(10);if(a>=1e3)throw new Error(\"Invalid numeric value above 999\");var d=Math.floor(a/100),n=Math.floor(a/10)%10,l=a%10;r.push(48+d,48+n,48+l),t+=d.toString()+n.toString()+l.toString(),s-=3}if(2===s){var a=o.readBits(7);if(a>=100)throw new Error(\"Invalid numeric value above 99\");var d=Math.floor(a/10),n=a%10;r.push(48+d,48+n),t+=d.toString()+n.toString()}else if(1===s){var a=o.readBits(4);if(a>=10)throw new Error(\"Invalid numeric value above 9\");r.push(48+a),t+=a.toString()}return{bytes:r,text:t}}function c(o,e){for(var r=[],t=\"\",c=[9,11,13][e],s=o.readBits(c);s>=2;){var a=o.readBits(11),d=Math.floor(a/45),n=a%45;r.push(k[d].charCodeAt(0),k[n].charCodeAt(0)),t+=k[d]+k[n],s-=2}if(1===s){var d=o.readBits(6);r.push(k[d].charCodeAt(0)),t+=k[d]}return{bytes:r,text:t}}function s(o,e){for(var r=[],t=\"\",c=[8,16,16][e],s=o.readBits(c),a=0;a<s;a++){var d=o.readBits(8);r.push(d)}try{t+=decodeURIComponent(r.map(function(o){return\"%\"+(\"0\"+o.toString(16)).substr(-2)}).join(\"\"))}catch(o){}return{bytes:r,text:t}}function a(o,e){for(var r=[],t=\"\",c=[8,10,12][e],s=o.readBits(c),a=0;a<s;a++){var d=o.readBits(13),n=Math.floor(d/192)<<8|d%192;n+=n<7936?33088:49472,r.push(n>>8,255&n),t+=String.fromCharCode(i.shiftJISTable[n])}return{bytes:r,text:t}}function d(o,e){for(var r=new l.BitStream(o),d=e<=9?0:e<=26?1:2,i={text:\"\",bytes:[],chunks:[]};r.available()>=4;){var k=r.readBits(4);if(k===B.Terminator)return i;if(k===B.ECI)0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(7)}):0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(14)}):0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(21)}):i.chunks.push({type:n.ECI,assignmentNumber:-1});else if(k===B.Numeric){var u=t(r,d);i.text+=u.text,(w=i.bytes).push.apply(w,u.bytes),i.chunks.push({type:n.Numeric,text:u.text})}else if(k===B.Alphanumeric){var C=c(r,d);i.text+=C.text,(P=i.bytes).push.apply(P,C.bytes),i.chunks.push({type:n.Alphanumeric,text:C.text})}else if(k===B.Byte){var m=s(r,d);i.text+=m.text,(v=i.bytes).push.apply(v,m.bytes),i.chunks.push({type:n.Byte,bytes:m.bytes,text:m.text})}else if(k===B.Kanji){var f=a(r,d);i.text+=f.text,(h=i.bytes).push.apply(h,f.bytes),i.chunks.push({type:n.Kanji,bytes:f.bytes,text:f.text})}}var w,P,v,h}Object.defineProperty(e,\"__esModule\",{value:!0});var n,l=r(7),i=r(8);!function(o){o.Numeric=\"numeric\",o.Alphanumeric=\"alphanumeric\",o.Byte=\"byte\",o.Kanji=\"kanji\",o.ECI=\"eci\"}(n=e.Mode||(e.Mode={}));var B;!function(o){o[o.Terminator=0]=\"Terminator\",o[o.Numeric=1]=\"Numeric\",o[o.Alphanumeric=2]=\"Alphanumeric\",o[o.Byte=4]=\"Byte\",o[o.Kanji=8]=\"Kanji\",o[o.ECI=7]=\"ECI\"}(B||(B={}));var k=[\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"A\",\"B\",\"C\",\"D\",\"E\",\"F\",\"G\",\"H\",\"I\",\"J\",\"K\",\"L\",\"M\",\"N\",\"O\",\"P\",\"Q\",\"R\",\"S\",\"T\",\"U\",\"V\",\"W\",\"X\",\"Y\",\"Z\",\" \",\"$\",\"%\",\"*\",\"+\",\"-\",\".\",\"/\",\":\"];e.decode=d},function(o,e,r){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0});var t=function(){function o(o){this.byteOffset=0,this.bitOffset=0,this.bytes=o}return o.prototype.readBits=function(o){if(o<1||o>32||o>this.available())throw new Error(\"Cannot read \"+o.toString()+\" bits\");var e=0;if(this.bitOffset>0){var r=8-this.bitOffset,t=o<r?o:r,c=r-t,s=255>>8-t<<c;e=(this.bytes[this.byteOffset]&s)>>c,o-=t,this.bitOffset+=t,8===this.bitOffset&&(this.bitOffset=0,this.byteOffset++)}if(o>0){for(;o>=8;)e=e<<8|255&this.bytes[this.byteOffset],this.byteOffset++,o-=8;if(o>0){var c=8-o,s=255>>c<<c;e=e<<o|(this.bytes[this.byteOffset]&s)>>c,this.bitOffset+=o}}return e},o.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},o}();e.BitStream=t},function(o,e,r){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0}),e.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,\n36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,\n39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,\n59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}},function(o,e,r){\"use strict\";function t(o,e,r,t){e.degree()<r.degree()&&(w=[r,e],e=w[0],r=w[1]);for(var c=e,s=r,a=o.zero,d=o.one;s.degree()>=t/2;){var n=c,l=a;if(c=s,a=d,c.isZero())return null;s=n;for(var i=o.zero,B=c.getCoefficient(c.degree()),k=o.inverse(B);s.degree()>=c.degree()&&!s.isZero();){var u=s.degree()-c.degree(),C=o.multiply(s.getCoefficient(s.degree()),k);i=i.addOrSubtract(o.buildMonomial(u,C)),s=s.addOrSubtract(c.multiplyByMonomial(u,C))}if(d=i.multiplyPoly(a).addOrSubtract(l),s.degree()>=c.degree())return null}var m=d.getCoefficient(0);if(0===m)return null;var f=o.inverse(m);return[d.multiply(f),s.multiply(f)];var w}function c(o,e){var r=e.degree();if(1===r)return[e.getCoefficient(1)];for(var t=new Array(r),c=0,s=1;s<o.size&&c<r;s++)0===e.evaluateAt(s)&&(t[c]=o.inverse(s),c++);return c!==r?null:t}function s(o,e,r){for(var t=r.length,c=new Array(t),s=0;s<t;s++){for(var a=o.inverse(r[s]),n=1,l=0;l<t;l++)s!==l&&(n=o.multiply(n,d.addOrSubtractGF(1,o.multiply(r[l],a))));c[s]=o.multiply(e.evaluateAt(a),o.inverse(n)),0!==o.generatorBase&&(c[s]=o.multiply(c[s],a))}return c}function a(o,e){var r=new Uint8ClampedArray(o.length);r.set(o);for(var a=new d.default(285,256,0),l=new n.default(a,r),i=new Uint8ClampedArray(e),B=!1,k=0;k<e;k++){var u=l.evaluateAt(a.exp(k+a.generatorBase));i[i.length-1-k]=u,0!==u&&(B=!0)}if(!B)return r;var C=new n.default(a,i),m=t(a,a.buildMonomial(e,1),C,e);if(null===m)return null;var f=c(a,m[0]);if(null==f)return null;for(var w=s(a,m[1],f),P=0;P<f.length;P++){var v=r.length-1-a.log(f[P]);if(v<0)return null;r[v]=d.addOrSubtractGF(r[v],w[P])}return r}Object.defineProperty(e,\"__esModule\",{value:!0});var d=r(1),n=r(2);e.decode=a},function(o,e,r){\"use strict\";Object.defineProperty(e,\"__esModule\",{value:!0}),e.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]},function(o,e,r){\"use strict\";function t(o,e,r,t){var c=o.x-e.x+r.x-t.x,s=o.y-e.y+r.y-t.y;if(0===c&&0===s)return{a11:e.x-o.x,a12:e.y-o.y,a13:0,a21:r.x-e.x,a22:r.y-e.y,a23:0,a31:o.x,a32:o.y,a33:1};var a=e.x-r.x,d=t.x-r.x,n=e.y-r.y,l=t.y-r.y,i=a*l-d*n,B=(c*l-d*s)/i,k=(a*s-c*n)/i;return{a11:e.x-o.x+B*e.x,a12:e.y-o.y+B*e.y,a13:B,a21:t.x-o.x+k*t.x,a22:t.y-o.y+k*t.y,a23:k,a31:o.x,a32:o.y,a33:1}}function c(o,e,r,c){var s=t(o,e,r,c);return{a11:s.a22*s.a33-s.a23*s.a32,a12:s.a13*s.a32-s.a12*s.a33,a13:s.a12*s.a23-s.a13*s.a22,a21:s.a23*s.a31-s.a21*s.a33,a22:s.a11*s.a33-s.a13*s.a31,a23:s.a13*s.a21-s.a11*s.a23,a31:s.a21*s.a32-s.a22*s.a31,a32:s.a12*s.a31-s.a11*s.a32,a33:s.a11*s.a22-s.a12*s.a21}}function s(o,e){return{a11:o.a11*e.a11+o.a21*e.a12+o.a31*e.a13,a12:o.a12*e.a11+o.a22*e.a12+o.a32*e.a13,a13:o.a13*e.a11+o.a23*e.a12+o.a33*e.a13,a21:o.a11*e.a21+o.a21*e.a22+o.a31*e.a23,a22:o.a12*e.a21+o.a22*e.a22+o.a32*e.a23,a23:o.a13*e.a21+o.a23*e.a22+o.a33*e.a23,a31:o.a11*e.a31+o.a21*e.a32+o.a31*e.a33,a32:o.a12*e.a31+o.a22*e.a32+o.a32*e.a33,a33:o.a13*e.a31+o.a23*e.a32+o.a33*e.a33}}function a(o,e){for(var r=c({x:3.5,y:3.5},{x:e.dimension-3.5,y:3.5},{x:e.dimension-6.5,y:e.dimension-6.5},{x:3.5,y:e.dimension-3.5}),a=t(e.topLeft,e.topRight,e.alignmentPattern,e.bottomLeft),n=s(a,r),l=d.BitMatrix.createEmpty(e.dimension,e.dimension),i=function(o,e){var r=n.a13*o+n.a23*e+n.a33;return{x:(n.a11*o+n.a21*e+n.a31)/r,y:(n.a12*o+n.a22*e+n.a32)/r}},B=0;B<e.dimension;B++)for(var k=0;k<e.dimension;k++){var u=k+.5,C=B+.5,m=i(u,C);l.set(k,B,o.get(Math.floor(m.x),Math.floor(m.y)))}return{matrix:l,mappingFunction:i}}Object.defineProperty(e,\"__esModule\",{value:!0});var d=r(0);e.extract=a},function(o,e,r){\"use strict\";function t(o){return o.reduce(function(o,e){return o+e})}function c(o,e,r){var t,c,s,a=C(o,e),d=C(e,r),n=C(o,r);return d>=a&&d>=n?(l=[e,o,r],t=l[0],c=l[1],s=l[2]):n>=d&&n>=a?(i=[o,e,r],t=i[0],c=i[1],s=i[2]):(B=[o,r,e],t=B[0],c=B[1],s=B[2]),(s.x-c.x)*(t.y-c.y)-(s.y-c.y)*(t.x-c.x)<0&&(k=[s,t],t=k[0],s=k[1]),{bottomLeft:t,topLeft:c,topRight:s};var l,i,B,k}function s(o,e,r,c){var s=(t(d(o,r,c,5))/7+t(d(o,e,c,5))/7+t(d(r,o,c,5))/7+t(d(e,o,c,5))/7)/4;if(s<1)throw new Error(\"Invalid module size\");var a=Math.round(C(o,e)/s),n=Math.round(C(o,r)/s),l=Math.floor((a+n)/2)+7;switch(l%4){case 0:l++;break;case 2:l--}return{dimension:l,moduleSize:s}}function a(o,e,r,t){var c,s,a,d,n=[{x:Math.floor(o.x),y:Math.floor(o.y)}],l=Math.abs(e.y-o.y)>Math.abs(e.x-o.x);l?(c=Math.floor(o.y),s=Math.floor(o.x),a=Math.floor(e.y),d=Math.floor(e.x)):(c=Math.floor(o.x),s=Math.floor(o.y),a=Math.floor(e.x),d=Math.floor(e.y));for(var i=Math.abs(a-c),B=Math.abs(d-s),k=Math.floor(-i/2),u=c<a?1:-1,m=s<d?1:-1,f=!0,w=c,P=s;w!==a+u;w+=u){var v=l?P:w,h=l?w:P;if(r.get(v,h)!==f&&(f=!f,n.push({x:v,y:h}),n.length===t+1))break;if((k+=B)>0){if(P===d)break;P+=m,k-=i}}for(var p=[],y=0;y<t;y++)n[y]&&n[y+1]?p.push(C(n[y],n[y+1])):p.push(0);return p}function d(o,e,r,t){var c=e.y-o.y,s=e.x-o.x,d=a(o,e,r,Math.ceil(t/2)),n=a(o,{x:o.x-s,y:o.y-c},r,Math.ceil(t/2)),l=d.shift()+n.shift()-1;return(i=n.concat(l)).concat.apply(i,d);var i}function n(o,e){var r=t(o)/t(e),c=0;return e.forEach(function(e,t){c+=Math.pow(o[t]-e*r,2)}),{averageSize:r,error:c}}function l(o,e,r){try{var t=d(o,{x:-1,y:o.y},r,e.length),c=d(o,{x:o.x,y:-1},r,e.length),s={x:Math.max(0,o.x-o.y)-1,y:Math.max(0,o.y-o.x)-1},a=d(o,s,r,e.length),l={x:Math.min(r.width,o.x+o.y)+1,y:Math.min(r.height,o.y+o.x)+1},i=d(o,l,r,e.length),B=n(t,e),k=n(c,e),u=n(a,e),C=n(i,e),m=Math.sqrt(B.error*B.error+k.error*k.error+u.error*u.error+C.error*C.error),f=(B.averageSize+k.averageSize+u.averageSize+C.averageSize)/4;return m+(Math.pow(B.averageSize-f,2)+Math.pow(k.averageSize-f,2)+Math.pow(u.averageSize-f,2)+Math.pow(C.averageSize-f,2))/f}catch(o){return 1/0}}function i(o){for(var e=[],r=[],a=[],d=[],n=0;n<=o.height;n++)!function(c){for(var s=0,n=!1,l=[0,0,0,0,0],i=-1;i<=o.width;i++)!function(e){var a=o.get(e,c);if(a===n)s++;else{l=[l[1],l[2],l[3],l[4],s],s=1,n=a;var i=t(l)/7,B=Math.abs(l[0]-i)<i&&Math.abs(l[1]-i)<i&&Math.abs(l[2]-3*i)<3*i&&Math.abs(l[3]-i)<i&&Math.abs(l[4]-i)<i&&!a,C=t(l.slice(-3))/3,m=Math.abs(l[2]-C)<C&&Math.abs(l[3]-C)<C&&Math.abs(l[4]-C)<C&&a;if(B){var f=e-l[3]-l[4],w=f-l[2],P={startX:w,endX:f,y:c},v=r.filter(function(o){return w>=o.bottom.startX&&w<=o.bottom.endX||f>=o.bottom.startX&&w<=o.bottom.endX||w<=o.bottom.startX&&f>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<u&&l[2]/(o.bottom.endX-o.bottom.startX)>k});v.length>0?v[0].bottom=P:r.push({top:P,bottom:P})}if(m){var h=e-l[4],p=h-l[3],P={startX:p,y:c,endX:h},v=d.filter(function(o){return p>=o.bottom.startX&&p<=o.bottom.endX||h>=o.bottom.startX&&p<=o.bottom.endX||p<=o.bottom.startX&&h>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<u&&l[2]/(o.bottom.endX-o.bottom.startX)>k});v.length>0?v[0].bottom=P:d.push({top:P,bottom:P})}}}(i);e.push.apply(e,r.filter(function(o){return o.bottom.y!==c&&o.bottom.y-o.top.y>=2})),r=r.filter(function(o){return o.bottom.y===c}),a.push.apply(a,d.filter(function(o){return o.bottom.y!==c})),d=d.filter(function(o){return o.bottom.y===c})}(n);e.push.apply(e,r.filter(function(o){return o.bottom.y-o.top.y>=2})),a.push.apply(a,d);var i=e.filter(function(o){return o.bottom.y-o.top.y>=2}).map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,c=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.round(r),Math.round(c))){\nvar s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1],a=t(s)/s.length;return{score:l({x:Math.round(r),y:Math.round(c)},[1,1,3,1,1],o),x:r,y:c,size:a}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}).map(function(o,e,r){if(e>B)return null;var t=r.filter(function(o,r){return e!==r}).map(function(e){return{x:e.x,y:e.y,score:e.score+Math.pow(e.size-o.size,2)/o.size,size:e.size}}).sort(function(o,e){return o.score-e.score});if(t.length<2)return null;var c=o.score+t[0].score+t[1].score;return{points:[o].concat(t.slice(0,2)),score:c}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score});if(0===i.length)return null;var m,f,w=c(i[0].points[0],i[0].points[1],i[0].points[2]),P=w.topRight,v=w.topLeft,h=w.bottomLeft;try{L=s(v,P,h,o),m=L.dimension,f=L.moduleSize}catch(o){return null}var p={x:P.x-v.x+h.x,y:P.y-v.y+h.y},y=(C(v,h)+C(v,P))/2/f,b=1-3/y,g={x:v.x+b*(p.x-v.x),y:v.y+b*(p.y-v.y)},x=a.map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,c=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.floor(r),Math.floor(c))){var s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1];t(s);return{x:r,y:c,score:l({x:Math.floor(r),y:Math.floor(c)},[1,1,1],o)+C({x:r,y:c},g)}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}),M=y>=15&&x.length?x[0]:g;return{alignmentPattern:{x:M.x,y:M.y},bottomLeft:{x:h.x,y:h.y},dimension:m,topLeft:{x:v.x,y:v.y},topRight:{x:P.x,y:P.y}};var L}Object.defineProperty(e,\"__esModule\",{value:!0});var B=4,k=.5,u=1.5,C=function(o,e){return Math.sqrt(Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2))};e.locate=i}]).default}),self.addEventListener(\"message\",function(o){var e=jsQR(o.data.data,o.data.width,o.data.height);e?postMessage(e.data):postMessage(null)});"], {
	  type: 'application/javascript'
	});
	var propsKeys = ['delay', 'legacyMode', 'facingMode'];
	var lib = (_temp = _class = function (_Component) {
	  _inherits(Reader, _Component);
	  function Reader(props) {
	    _classCallCheck(this, Reader);
	    var _this = _possibleConstructorReturn(this, (Reader.__proto__ || Object.getPrototypeOf(Reader)).call(this, props));
	    _this.els = {};
	    _this.state = {
	      mirrorVideo: false
	    };_this.initiate = _this.initiate.bind(_this);
	    _this.initiateLegacyMode = _this.initiateLegacyMode.bind(_this);
	    _this.check = _this.check.bind(_this);
	    _this.handleVideo = _this.handleVideo.bind(_this);
	    _this.handleLoadStart = _this.handleLoadStart.bind(_this);
	    _this.handleInputChange = _this.handleInputChange.bind(_this);
	    _this.clearComponent = _this.clearComponent.bind(_this);
	    _this.handleReaderLoad = _this.handleReaderLoad.bind(_this);
	    _this.openImageDialog = _this.openImageDialog.bind(_this);
	    _this.handleWorkerMessage = _this.handleWorkerMessage.bind(_this);
	    _this.setRefFactory = _this.setRefFactory.bind(_this);
	    return _this;
	  }
	  _createClass(Reader, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.worker = new Worker(URL.createObjectURL(workerBlob));
	      this.worker.onmessage = this.handleWorkerMessage;
	      if (!this.props.legacyMode) {
	        this.initiate();
	      } else {
	        this.initiateLegacyMode();
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var changedProps = havePropsChanged(this.props, nextProps, propsKeys);
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	      try {
	        for (var _iterator = changedProps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var prop = _step.value;
	          if (prop == 'facingMode') {
	            this.clearComponent();
	            this.initiate(nextProps);
	            break;
	          } else if (prop == 'delay') {
	            if (this.props.delay == false && !nextProps.legacyMode) {
	              this.timeout = setTimeout(this.check, nextProps.delay);
	            }
	            if (nextProps.delay == false) {
	              clearTimeout(this.timeout);
	            }
	          } else if (prop == 'legacyMode') {
	            if (this.props.legacyMode && !nextProps.legacyMode) {
	              this.clearComponent();
	              this.initiate(nextProps);
	            } else {
	              this.clearComponent();
	              this.componentDidUpdate = this.initiateLegacyMode;
	            }
	            break;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      if (nextState !== this.state) {
	        return true;
	      }
	      var changedProps = havePropsChanged(this.props, nextProps, propsKeys);
	      return changedProps.length > 0;
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.worker) {
	        this.worker.terminate();
	        this.worker = undefined;
	      }
	      this.clearComponent();
	    }
	  }, {
	    key: 'clearComponent',
	    value: function clearComponent() {
	      if (this.timeout) {
	        clearTimeout(this.timeout);
	        this.timeout = undefined;
	      }
	      if (this.stopCamera) {
	        this.stopCamera();
	      }
	      if (this.reader) {
	        this.reader.removeEventListener('load', this.handleReaderLoad);
	      }
	      if (this.els.img) {
	        this.els.img.removeEventListener('load', this.check);
	      }
	    }
	  }, {
	    key: 'initiate',
	    value: function initiate() {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	      var onError = props.onError,
	          facingMode = props.facingMode;
	      var isFirefox = /firefox/i.test(navigator.userAgent);
	      var supported = {};
	      if (navigator.mediaDevices && typeof navigator.mediaDevices.getSupportedConstraints === 'function') {
	        supported = navigator.mediaDevices.getSupportedConstraints();
	      }
	      var constraints = {};
	      if (supported.facingMode) {
	        constraints.facingMode = { ideal: facingMode };
	      }
	      if (supported.frameRate) {
	        constraints.frameRate = { ideal: 25, min: 10 };
	      }
	      var vConstraintsPromise = supported.facingMode || isFirefox ? Promise.resolve(props.constraints || constraints) : getDeviceId(facingMode).then(function (deviceId) {
	        return Object.assign({}, { deviceId: deviceId }, props.constraints);
	      });
	      vConstraintsPromise.then(function (video) {
	        return navigator.mediaDevices.getUserMedia({ video: video });
	      }).then(this.handleVideo).catch(onError);
	    }
	  }, {
	    key: 'handleVideo',
	    value: function handleVideo(stream) {
	      var preview = this.els.preview;
	      var facingMode = this.props.facingMode;
	      if (!preview) {
	        return setTimeout(this.handleVideo, 200, stream);
	      }
	      if ((preview || {}).srcObject !== undefined) {
	        preview.srcObject = stream;
	      } else if (preview.mozSrcObject !== undefined) {
	        preview.mozSrcObject = stream;
	      } else if (window.URL.createObjectURL) {
	        preview.src = window.URL.createObjectURL(stream);
	      } else if (window.webkitURL) {
	        preview.src = window.webkitURL.createObjectURL(stream);
	      } else {
	        preview.src = stream;
	      }
	      preview.playsInline = true;
	      var streamTrack = stream.getTracks()[0];
	      this.stopCamera = streamTrack.stop.bind(streamTrack);
	      preview.addEventListener('loadstart', this.handleLoadStart);
	      this.setState({ mirrorVideo: facingMode == 'user', streamLabel: streamTrack.label });
	    }
	  }, {
	    key: 'handleLoadStart',
	    value: function handleLoadStart() {
	      var _props = this.props,
	          delay = _props.delay,
	          onLoad = _props.onLoad;
	      var _state = this.state,
	          mirrorVideo = _state.mirrorVideo,
	          streamLabel = _state.streamLabel;
	      var preview = this.els.preview;
	      preview.play();
	      if (typeof onLoad == 'function') {
	        onLoad({ mirrorVideo: mirrorVideo, streamLabel: streamLabel });
	      }
	      if (typeof delay == 'number') {
	        this.timeout = setTimeout(this.check, delay);
	      }
	      preview.removeEventListener('loadstart', this.handleLoadStart);
	    }
	  }, {
	    key: 'check',
	    value: function check() {
	      var _props2 = this.props,
	          legacyMode = _props2.legacyMode,
	          resolution = _props2.resolution,
	          delay = _props2.delay;
	      var _els = this.els,
	          preview = _els.preview,
	          canvas = _els.canvas,
	          img = _els.img;
	      var width = Math.floor(legacyMode ? img.naturalWidth : preview.videoWidth);
	      var height = Math.floor(legacyMode ? img.naturalHeight : preview.videoHeight);
	      var hozOffset = 0;
	      var vertOffset = 0;
	      if (legacyMode) {
	        var greatestSize = width > height ? width : height;
	        var ratio = resolution / greatestSize;
	        height = ratio * height;
	        width = ratio * width;
	        canvas.width = width;
	        canvas.height = height;
	      } else {
	        var smallestSize = width < height ? width : height;
	        var _ratio = resolution / smallestSize;
	        height = _ratio * height;
	        width = _ratio * width;
	        vertOffset = (height - resolution) / 2 * -1;
	        hozOffset = (width - resolution) / 2 * -1;
	        canvas.width = resolution;
	        canvas.height = resolution;
	      }
	      var previewIsPlaying = preview && preview.readyState === preview.HAVE_ENOUGH_DATA;
	      if (legacyMode || previewIsPlaying) {
	        var ctx = canvas.getContext('2d');
	        ctx.drawImage(legacyMode ? img : preview, hozOffset, vertOffset, width, height);
	        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	        this.worker.postMessage(imageData);
	      } else {
	        this.timeout = setTimeout(this.check, delay);
	      }
	    }
	  }, {
	    key: 'handleWorkerMessage',
	    value: function handleWorkerMessage(e) {
	      var _props3 = this.props,
	          onScan = _props3.onScan,
	          legacyMode = _props3.legacyMode,
	          delay = _props3.delay;
	      var decoded = e.data;
	      onScan(decoded || null);
	      if (!legacyMode && typeof delay == 'number' && this.worker) {
	        this.timeout = setTimeout(this.check, delay);
	      }
	    }
	  }, {
	    key: 'initiateLegacyMode',
	    value: function initiateLegacyMode() {
	      this.reader = new FileReader();
	      this.reader.addEventListener('load', this.handleReaderLoad);
	      this.els.img.addEventListener('load', this.check, false);
	      this.componentDidUpdate = undefined;
	      if (typeof this.props.onLoad == 'function') {
	        this.props.onLoad();
	      }
	    }
	  }, {
	    key: 'handleInputChange',
	    value: function handleInputChange(e) {
	      var selectedImg = e.target.files[0];
	      this.reader.readAsDataURL(selectedImg);
	    }
	  }, {
	    key: 'handleReaderLoad',
	    value: function handleReaderLoad(e) {
	      this.els.img.src = e.target.result;
	    }
	  }, {
	    key: 'openImageDialog',
	    value: function openImageDialog() {
	      this.els.input.click();
	    }
	  }, {
	    key: 'setRefFactory',
	    value: function setRefFactory(key) {
	      var _this2 = this;
	      return function (element) {
	        _this2.els[key] = element;
	      };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props4 = this.props,
	          style = _props4.style,
	          className = _props4.className,
	          onImageLoad = _props4.onImageLoad,
	          legacyMode = _props4.legacyMode,
	          showViewFinder = _props4.showViewFinder;
	          _props4.facingMode;
	      var containerStyle = {
	        overflow: 'hidden',
	        position: 'relative',
	        width: '100%',
	        paddingTop: '100%'
	      };
	      var hiddenStyle = { display: 'none' };
	      var previewStyle = {
	        top: 0,
	        left: 0,
	        display: 'block',
	        position: 'absolute',
	        overflow: 'hidden',
	        width: '100%',
	        height: '100%'
	      };
	      var videoPreviewStyle = _extends({}, previewStyle, {
	        objectFit: 'cover',
	        transform: this.state.mirrorVideo ? 'scaleX(-1)' : undefined
	      });
	      var imgPreviewStyle = _extends({}, previewStyle, {
	        objectFit: 'scale-down'
	      });
	      var viewFinderStyle = {
	        top: 0,
	        left: 0,
	        zIndex: 1,
	        boxSizing: 'border-box',
	        border: '50px solid rgba(0, 0, 0, 0.3)',
	        boxShadow: 'inset 0 0 0 5px rgba(255, 0, 0, 0.5)',
	        position: 'absolute',
	        width: '100%',
	        height: '100%'
	      };
	      return React.createElement(
	        'section',
	        { className: className, style: style },
	        React.createElement(
	          'section',
	          { style: containerStyle },
	          !legacyMode && showViewFinder ? React.createElement('div', { style: viewFinderStyle }) : null,
	          legacyMode ? React.createElement('input', {
	            style: hiddenStyle,
	            type: 'file',
	            accept: 'image/*',
	            ref: this.setRefFactory('input'),
	            onChange: this.handleInputChange
	          }) : null,
	          legacyMode ? React.createElement('img', { style: imgPreviewStyle, ref: this.setRefFactory('img'), onLoad: onImageLoad }) : React.createElement('video', { style: videoPreviewStyle, ref: this.setRefFactory('preview') }),
	          React.createElement('canvas', { style: hiddenStyle, ref: this.setRefFactory('canvas') })
	        )
	      );
	    }
	  }]);
	  return Reader;
	}(Component), _class.propTypes = {
	  onScan: PropTypes.func.isRequired,
	  onError: PropTypes.func.isRequired,
	  onLoad: PropTypes.func,
	  onImageLoad: PropTypes.func,
	  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	  facingMode: PropTypes.oneOf(['user', 'environment']),
	  legacyMode: PropTypes.bool,
	  resolution: PropTypes.number,
	  showViewFinder: PropTypes.bool,
	  style: PropTypes.any,
	  className: PropTypes.string,
	  constraints: PropTypes.object
	}, _class.defaultProps = {
	  delay: 500,
	  resolution: 600,
	  facingMode: 'environment',
	  showViewFinder: true,
	  constraints: null
	}, _temp);

	const DEFAULT_DELAY = 150;
	const DEFAULT_ERROR = error => {
	  console.error('@polkadot/react-qr:Scan', error.message);
	};
	function Scan({
	  className,
	  delay = DEFAULT_DELAY,
	  onError = DEFAULT_ERROR,
	  onScan,
	  size,
	  style
	}) {
	  const containerStyle = r.useMemo(() => createImgSize(size), [size]);
	  const _onError = r.useCallback(error => onError(error), [onError]);
	  const _onScan = r.useCallback(data => data && onScan(data), [onScan]);
	  return jsxRuntime.exports.jsx("div", {
	    className: className,
	    style: containerStyle,
	    children: jsxRuntime.exports.jsx(lib, {
	      className: "ui--qr-Scan",
	      delay: delay,
	      onError: _onError,
	      onScan: _onScan,
	      style: style
	    })
	  });
	}
	const QrScan = r__default["default"].memo(He(Scan).withConfig({
	  displayName: "Scan__QrScan",
	  componentId: "sc-zwjyub-0"
	})([".ui--qr-Scan{display:inline-block;height:100%;transform:matrix(-1,0,0,1,0,0);width:100%;video{margin:0;}}"]));

	function ScanAddress({
	  className,
	  isEthereum,
	  onError,
	  onScan,
	  size,
	  style
	}) {
	  const _onScan = r.useCallback(data => {
	    if (data) {
	      try {
	        var _name;
	        let prefix, content, genesisHash, name;
	        if (!isEthereum) {
	          [prefix, content, genesisHash, ...name] = data.split(':');
	        } else {
	          [prefix, content, ...name] = data.split(':');
	          genesisHash = '';
	          content = content.substring(0, 42);
	        }
	        const expectedPrefix = isEthereum ? 'ethereum' : ADDRESS_PREFIX;
	        const isValidPrefix = prefix === expectedPrefix || prefix === SEED_PREFIX;
	        util.assert(isValidPrefix, `Invalid prefix received, expected '${expectedPrefix} or ${SEED_PREFIX}' , found '${prefix}'`);
	        const isAddress = prefix === expectedPrefix;
	        if (isAddress && !isEthereum) {
	          utilCrypto.decodeAddress(content);
	        }
	        onScan({
	          content,
	          genesisHash,
	          isAddress,
	          name: (_name = name) !== null && _name !== void 0 && _name.length ? name.join(':') : undefined
	        });
	      } catch (error) {
	        onError && onError(error);
	        console.error('@polkadot/react-qr:QrScanAddress', error.message, data);
	      }
	    }
	  }, [onScan, onError, isEthereum]);
	  return jsxRuntime.exports.jsx(QrScan, {
	    className: className,
	    onError: onError,
	    onScan: _onScan,
	    size: size,
	    style: style
	  });
	}
	const QrScanAddress = r__default["default"].memo(ScanAddress);

	function ScanSignature({
	  className,
	  onError,
	  onScan,
	  size,
	  style
	}) {
	  const _onScan = r.useCallback(signature => signature && onScan({
	    signature: `0x${signature}`
	  }), [onScan]);
	  return jsxRuntime.exports.jsx(QrScan, {
	    className: className,
	    onError: onError,
	    onScan: _onScan,
	    size: size,
	    style: style
	  });
	}
	const QrScanSignature = r__default["default"].memo(ScanSignature);

	function DisplayNetworkSpecs({
	  className,
	  networkSpecs,
	  size,
	  style
	}) {
	  const data = r.useMemo(() => encodeString(JSON.stringify(networkSpecs)), [networkSpecs]);
	  if (!data) {
	    return null;
	  }
	  return jsxRuntime.exports.jsx(QrDisplay, {
	    className: className,
	    size: size,
	    skipEncoding: true,
	    style: style,
	    value: data
	  });
	}
	const QrNetworkSpecs = r__default["default"].memo(DisplayNetworkSpecs);

	const packageInfo = {
	  name: '@polkadot/react-qr',
	  path: (({ url: (typeof document === 'undefined' && typeof location === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : typeof document === 'undefined' ? location.href : (document.currentScript && document.currentScript.src || new URL('bundle-polkadot-react-qr.js', document.baseURI).href)) }) && (typeof document === 'undefined' && typeof location === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : typeof document === 'undefined' ? location.href : (document.currentScript && document.currentScript.src || new URL('bundle-polkadot-react-qr.js', document.baseURI).href))) ? new URL((typeof document === 'undefined' && typeof location === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : typeof document === 'undefined' ? location.href : (document.currentScript && document.currentScript.src || new URL('bundle-polkadot-react-qr.js', document.baseURI).href))).pathname.substring(0, new URL((typeof document === 'undefined' && typeof location === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : typeof document === 'undefined' ? location.href : (document.currentScript && document.currentScript.src || new URL('bundle-polkadot-react-qr.js', document.baseURI).href))).pathname.lastIndexOf('/') + 1) : 'auto',
	  type: 'esm',
	  version: '2.9.8'
	};

	exports.QrDisplayAddress = QrDisplayAddress;
	exports.QrDisplayPayload = QrDisplayPayload;
	exports.QrNetworkSpecs = QrNetworkSpecs;
	exports.QrScanAddress = QrScanAddress;
	exports.QrScanSignature = QrScanSignature;
	exports.packageInfo = packageInfo;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
