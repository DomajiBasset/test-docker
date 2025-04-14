var Hm = { exports: {} }, Xp = {}, Vm = { exports: {} }, gt = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function nD() {
  if (J1) return gt;
  J1 = 1;
  var X = Symbol.for("react.element"), Z = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), et = Symbol.for("react.strict_mode"), ot = Symbol.for("react.profiler"), zt = Symbol.for("react.provider"), Qe = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), st = Symbol.for("react.suspense"), ke = Symbol.for("react.memo"), ve = Symbol.for("react.lazy"), We = Symbol.iterator;
  function te(b) {
    return b === null || typeof b != "object" ? null : (b = We && b[We] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var Ue = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ue = Object.assign, Ee = {};
  function pt(b, B, De) {
    this.props = b, this.context = B, this.refs = Ee, this.updater = De || Ue;
  }
  pt.prototype.isReactComponent = {}, pt.prototype.setState = function(b, B) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, B, "setState");
  }, pt.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function Fn() {
  }
  Fn.prototype = pt.prototype;
  function on(b, B, De) {
    this.props = b, this.context = B, this.refs = Ee, this.updater = De || Ue;
  }
  var rt = on.prototype = new Fn();
  rt.constructor = on, ue(rt, pt.prototype), rt.isPureReactComponent = !0;
  var je = Array.isArray, kt = Object.prototype.hasOwnProperty, Ce = { current: null }, ft = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $e(b, B, De) {
    var Ve, Ke = {}, at = null, ht = null;
    if (B != null) for (Ve in B.ref !== void 0 && (ht = B.ref), B.key !== void 0 && (at = "" + B.key), B) kt.call(B, Ve) && !ft.hasOwnProperty(Ve) && (Ke[Ve] = B[Ve]);
    var ct = arguments.length - 2;
    if (ct === 1) Ke.children = De;
    else if (1 < ct) {
      for (var Et = Array(ct), Vt = 0; Vt < ct; Vt++) Et[Vt] = arguments[Vt + 2];
      Ke.children = Et;
    }
    if (b && b.defaultProps) for (Ve in ct = b.defaultProps, ct) Ke[Ve] === void 0 && (Ke[Ve] = ct[Ve]);
    return { $$typeof: X, type: b, key: at, ref: ht, props: Ke, _owner: Ce.current };
  }
  function wn(b, B) {
    return { $$typeof: X, type: b.type, key: B, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function yn(b) {
    return typeof b == "object" && b !== null && b.$$typeof === X;
  }
  function Kt(b) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(De) {
      return B[De];
    });
  }
  var St = /\/+/g;
  function tn(b, B) {
    return typeof b == "object" && b !== null && b.key != null ? Kt("" + b.key) : B.toString(36);
  }
  function He(b, B, De, Ve, Ke) {
    var at = typeof b;
    (at === "undefined" || at === "boolean") && (b = null);
    var ht = !1;
    if (b === null) ht = !0;
    else switch (at) {
      case "string":
      case "number":
        ht = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case X:
          case Z:
            ht = !0;
        }
    }
    if (ht) return ht = b, Ke = Ke(ht), b = Ve === "" ? "." + tn(ht, 0) : Ve, je(Ke) ? (De = "", b != null && (De = b.replace(St, "$&/") + "/"), He(Ke, B, De, "", function(Vt) {
      return Vt;
    })) : Ke != null && (yn(Ke) && (Ke = wn(Ke, De + (!Ke.key || ht && ht.key === Ke.key ? "" : ("" + Ke.key).replace(St, "$&/") + "/") + b)), B.push(Ke)), 1;
    if (ht = 0, Ve = Ve === "" ? "." : Ve + ":", je(b)) for (var ct = 0; ct < b.length; ct++) {
      at = b[ct];
      var Et = Ve + tn(at, ct);
      ht += He(at, B, De, Et, Ke);
    }
    else if (Et = te(b), typeof Et == "function") for (b = Et.call(b), ct = 0; !(at = b.next()).done; ) at = at.value, Et = Ve + tn(at, ct++), ht += He(at, B, De, Et, Ke);
    else if (at === "object") throw B = String(b), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return ht;
  }
  function tt(b, B, De) {
    if (b == null) return b;
    var Ve = [], Ke = 0;
    return He(b, Ve, "", "", function(at) {
      return B.call(De, at, Ke++);
    }), Ve;
  }
  function wt(b) {
    if (b._status === -1) {
      var B = b._result;
      B = B(), B.then(function(De) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = De);
      }, function(De) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = De);
      }), b._status === -1 && (b._status = 0, b._result = B);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var nt = { current: null }, P = { transition: null }, he = { ReactCurrentDispatcher: nt, ReactCurrentBatchConfig: P, ReactCurrentOwner: Ce };
  function ie() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return gt.Children = { map: tt, forEach: function(b, B, De) {
    tt(b, function() {
      B.apply(this, arguments);
    }, De);
  }, count: function(b) {
    var B = 0;
    return tt(b, function() {
      B++;
    }), B;
  }, toArray: function(b) {
    return tt(b, function(B) {
      return B;
    }) || [];
  }, only: function(b) {
    if (!yn(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, gt.Component = pt, gt.Fragment = A, gt.Profiler = ot, gt.PureComponent = on, gt.StrictMode = et, gt.Suspense = st, gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, gt.act = ie, gt.cloneElement = function(b, B, De) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var Ve = ue({}, b.props), Ke = b.key, at = b.ref, ht = b._owner;
    if (B != null) {
      if (B.ref !== void 0 && (at = B.ref, ht = Ce.current), B.key !== void 0 && (Ke = "" + B.key), b.type && b.type.defaultProps) var ct = b.type.defaultProps;
      for (Et in B) kt.call(B, Et) && !ft.hasOwnProperty(Et) && (Ve[Et] = B[Et] === void 0 && ct !== void 0 ? ct[Et] : B[Et]);
    }
    var Et = arguments.length - 2;
    if (Et === 1) Ve.children = De;
    else if (1 < Et) {
      ct = Array(Et);
      for (var Vt = 0; Vt < Et; Vt++) ct[Vt] = arguments[Vt + 2];
      Ve.children = ct;
    }
    return { $$typeof: X, type: b.type, key: Ke, ref: at, props: Ve, _owner: ht };
  }, gt.createContext = function(b) {
    return b = { $$typeof: Qe, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: zt, _context: b }, b.Consumer = b;
  }, gt.createElement = $e, gt.createFactory = function(b) {
    var B = $e.bind(null, b);
    return B.type = b, B;
  }, gt.createRef = function() {
    return { current: null };
  }, gt.forwardRef = function(b) {
    return { $$typeof: S, render: b };
  }, gt.isValidElement = yn, gt.lazy = function(b) {
    return { $$typeof: ve, _payload: { _status: -1, _result: b }, _init: wt };
  }, gt.memo = function(b, B) {
    return { $$typeof: ke, type: b, compare: B === void 0 ? null : B };
  }, gt.startTransition = function(b) {
    var B = P.transition;
    P.transition = {};
    try {
      b();
    } finally {
      P.transition = B;
    }
  }, gt.unstable_act = ie, gt.useCallback = function(b, B) {
    return nt.current.useCallback(b, B);
  }, gt.useContext = function(b) {
    return nt.current.useContext(b);
  }, gt.useDebugValue = function() {
  }, gt.useDeferredValue = function(b) {
    return nt.current.useDeferredValue(b);
  }, gt.useEffect = function(b, B) {
    return nt.current.useEffect(b, B);
  }, gt.useId = function() {
    return nt.current.useId();
  }, gt.useImperativeHandle = function(b, B, De) {
    return nt.current.useImperativeHandle(b, B, De);
  }, gt.useInsertionEffect = function(b, B) {
    return nt.current.useInsertionEffect(b, B);
  }, gt.useLayoutEffect = function(b, B) {
    return nt.current.useLayoutEffect(b, B);
  }, gt.useMemo = function(b, B) {
    return nt.current.useMemo(b, B);
  }, gt.useReducer = function(b, B, De) {
    return nt.current.useReducer(b, B, De);
  }, gt.useRef = function(b) {
    return nt.current.useRef(b);
  }, gt.useState = function(b) {
    return nt.current.useState(b);
  }, gt.useSyncExternalStore = function(b, B, De) {
    return nt.current.useSyncExternalStore(b, B, De);
  }, gt.useTransition = function() {
    return nt.current.useTransition();
  }, gt.version = "18.3.1", gt;
}
var Jp = { exports: {} };
Jp.exports;
var Z1;
function rD() {
  return Z1 || (Z1 = 1, function(X, Z) {
    var A = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    A.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var et = "18.3.1", ot = Symbol.for("react.element"), zt = Symbol.for("react.portal"), Qe = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), st = Symbol.for("react.profiler"), ke = Symbol.for("react.provider"), ve = Symbol.for("react.context"), We = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), Ue = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), Ee = Symbol.for("react.lazy"), pt = Symbol.for("react.offscreen"), Fn = Symbol.iterator, on = "@@iterator";
      function rt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = Fn && h[Fn] || h[on];
        return typeof C == "function" ? C : null;
      }
      var je = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, kt = {
        transition: null
      }, Ce = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ft = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, $e = {}, wn = null;
      function yn(h) {
        wn = h;
      }
      $e.setExtraStackFrame = function(h) {
        wn = h;
      }, $e.getCurrentStack = null, $e.getStackAddendum = function() {
        var h = "";
        wn && (h += wn);
        var C = $e.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Kt = !1, St = !1, tn = !1, He = !1, tt = !1, wt = {
        ReactCurrentDispatcher: je,
        ReactCurrentBatchConfig: kt,
        ReactCurrentOwner: ft
      };
      wt.ReactDebugCurrentFrame = $e, wt.ReactCurrentActQueue = Ce;
      function nt(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          he("warn", h, M);
        }
      }
      function P(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          he("error", h, M);
        }
      }
      function he(h, C, M) {
        {
          var F = wt.ReactDebugCurrentFrame, K = F.getStackAddendum();
          K !== "" && (C += "%s", M = M.concat([K]));
          var ge = M.map(function(fe) {
            return String(fe);
          });
          ge.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, ge);
        }
      }
      var ie = {};
      function b(h, C) {
        {
          var M = h.constructor, F = M && (M.displayName || M.name) || "ReactClass", K = F + "." + C;
          if (ie[K])
            return;
          P("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), ie[K] = !0;
        }
      }
      var B = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, M) {
          b(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, M, F) {
          b(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, M, F) {
          b(h, "setState");
        }
      }, De = Object.assign, Ve = {};
      Object.freeze(Ve);
      function Ke(h, C, M) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = M || B;
      }
      Ke.prototype.isReactComponent = {}, Ke.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Ke.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var at = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, ht = function(h, C) {
          Object.defineProperty(Ke.prototype, h, {
            get: function() {
              nt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ct in at)
          at.hasOwnProperty(ct) && ht(ct, at[ct]);
      }
      function Et() {
      }
      Et.prototype = Ke.prototype;
      function Vt(h, C, M) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = M || B;
      }
      var qn = Vt.prototype = new Et();
      qn.constructor = Vt, De(qn, Ke.prototype), qn.isPureReactComponent = !0;
      function Fr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var cr = Array.isArray;
      function gn(h) {
        return cr(h);
      }
      function Xn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function jn(h) {
        try {
          return xn(h), !1;
        } catch {
          return !0;
        }
      }
      function xn(h) {
        return "" + h;
      }
      function On(h) {
        if (jn(h))
          return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xn(h)), xn(h);
      }
      function yr(h, C, M) {
        var F = h.displayName;
        if (F)
          return F;
        var K = C.displayName || C.name || "";
        return K !== "" ? M + "(" + K + ")" : M;
      }
      function fr(h) {
        return h.displayName || "Context";
      }
      function Hn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Qe:
            return "Fragment";
          case zt:
            return "Portal";
          case st:
            return "Profiler";
          case S:
            return "StrictMode";
          case te:
            return "Suspense";
          case Ue:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ve:
              var C = h;
              return fr(C) + ".Consumer";
            case ke:
              var M = h;
              return fr(M._context) + ".Provider";
            case We:
              return yr(h, h.render, "ForwardRef");
            case ue:
              var F = h.displayName || null;
              return F !== null ? F : Hn(h.type) || "Memo";
            case Ee: {
              var K = h, ge = K._payload, fe = K._init;
              try {
                return Hn(fe(ge));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var na = Object.prototype.hasOwnProperty, ra = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, dr, aa, Kn;
      Kn = {};
      function gr(h) {
        if (na.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function sn(h) {
        if (na.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function ia(h, C) {
        var M = function() {
          dr || (dr = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function la(h, C) {
        var M = function() {
          aa || (aa = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function ua(h) {
        if (typeof h.ref == "string" && ft.current && h.__self && ft.current.stateNode !== h.__self) {
          var C = Hn(ft.current.type);
          Kn[C] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), Kn[C] = !0);
        }
      }
      var ne = function(h, C, M, F, K, ge, fe) {
        var Pe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: ot,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
          props: fe,
          // Record the component responsible for creating this element.
          _owner: ge
        };
        return Pe._store = {}, Object.defineProperty(Pe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Pe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Pe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: K
        }), Object.freeze && (Object.freeze(Pe.props), Object.freeze(Pe)), Pe;
      };
      function be(h, C, M) {
        var F, K = {}, ge = null, fe = null, Pe = null, ut = null;
        if (C != null) {
          gr(C) && (fe = C.ref, ua(C)), sn(C) && (On(C.key), ge = "" + C.key), Pe = C.__self === void 0 ? null : C.__self, ut = C.__source === void 0 ? null : C.__source;
          for (F in C)
            na.call(C, F) && !ra.hasOwnProperty(F) && (K[F] = C[F]);
        }
        var jt = arguments.length - 2;
        if (jt === 1)
          K.children = M;
        else if (jt > 1) {
          for (var Bt = Array(jt), $t = 0; $t < jt; $t++)
            Bt[$t] = arguments[$t + 2];
          Object.freeze && Object.freeze(Bt), K.children = Bt;
        }
        if (h && h.defaultProps) {
          var Yt = h.defaultProps;
          for (F in Yt)
            K[F] === void 0 && (K[F] = Yt[F]);
        }
        if (ge || fe) {
          var rn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          ge && ia(K, rn), fe && la(K, rn);
        }
        return ne(h, ge, fe, Pe, ut, ft.current, K);
      }
      function it(h, C) {
        var M = ne(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function Ut(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, K = De({}, h.props), ge = h.key, fe = h.ref, Pe = h._self, ut = h._source, jt = h._owner;
        if (C != null) {
          gr(C) && (fe = C.ref, jt = ft.current), sn(C) && (On(C.key), ge = "" + C.key);
          var Bt;
          h.type && h.type.defaultProps && (Bt = h.type.defaultProps);
          for (F in C)
            na.call(C, F) && !ra.hasOwnProperty(F) && (C[F] === void 0 && Bt !== void 0 ? K[F] = Bt[F] : K[F] = C[F]);
        }
        var $t = arguments.length - 2;
        if ($t === 1)
          K.children = M;
        else if ($t > 1) {
          for (var Yt = Array($t), rn = 0; rn < $t; rn++)
            Yt[rn] = arguments[rn + 2];
          K.children = Yt;
        }
        return ne(h.type, ge, fe, Pe, ut, jt, K);
      }
      function Ot(h) {
        return typeof h == "object" && h !== null && h.$$typeof === ot;
      }
      var _n = ".", dn = ":";
      function pr(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(K) {
          return M[K];
        });
        return "$" + F;
      }
      var Pt = !1, $n = /\/+/g;
      function At(h) {
        return h.replace($n, "$&/");
      }
      function Jt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (On(h.key), pr("" + h.key)) : C.toString(36);
      }
      function Wa(h, C, M, F, K) {
        var ge = typeof h;
        (ge === "undefined" || ge === "boolean") && (h = null);
        var fe = !1;
        if (h === null)
          fe = !0;
        else
          switch (ge) {
            case "string":
            case "number":
              fe = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case ot:
                case zt:
                  fe = !0;
              }
          }
        if (fe) {
          var Pe = h, ut = K(Pe), jt = F === "" ? _n + Jt(Pe, 0) : F;
          if (gn(ut)) {
            var Bt = "";
            jt != null && (Bt = At(jt) + "/"), Wa(ut, C, Bt, "", function(Pf) {
              return Pf;
            });
          } else ut != null && (Ot(ut) && (ut.key && (!Pe || Pe.key !== ut.key) && On(ut.key), ut = it(
            ut,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ut.key && (!Pe || Pe.key !== ut.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              At("" + ut.key) + "/"
            ) : "") + jt
          )), C.push(ut));
          return 1;
        }
        var $t, Yt, rn = 0, xt = F === "" ? _n : F + dn;
        if (gn(h))
          for (var Tl = 0; Tl < h.length; Tl++)
            $t = h[Tl], Yt = xt + Jt($t, Tl), rn += Wa($t, C, M, Yt, K);
        else {
          var Ju = rt(h);
          if (typeof Ju == "function") {
            var is = h;
            Ju === is.entries && (Pt || nt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Pt = !0);
            for (var ls = Ju.call(is), Vi, us = 0; !(Vi = ls.next()).done; )
              $t = Vi.value, Yt = xt + Jt($t, us++), rn += Wa($t, C, M, Yt, K);
          } else if (ge === "object") {
            var os = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (os === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : os) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return rn;
      }
      function _a(h, C, M) {
        if (h == null)
          return h;
        var F = [], K = 0;
        return Wa(h, F, "", "", function(ge) {
          return C.call(M, ge, K++);
        }), F;
      }
      function vl(h) {
        var C = 0;
        return _a(h, function() {
          C++;
        }), C;
      }
      function tu(h, C, M) {
        _a(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function nu(h) {
        return _a(h, function(C) {
          return C;
        }) || [];
      }
      function hl(h) {
        if (!Ot(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function Ga(h) {
        var C = {
          $$typeof: ve,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ke,
          _context: C
        };
        var M = !1, F = !1, K = !1;
        {
          var ge = {
            $$typeof: ve,
            _context: C
          };
          Object.defineProperties(ge, {
            Provider: {
              get: function() {
                return F || (F = !0, P("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(fe) {
                C.Provider = fe;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(fe) {
                C._currentValue = fe;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(fe) {
                C._currentValue2 = fe;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(fe) {
                C._threadCount = fe;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, P("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(fe) {
                K || (nt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", fe), K = !0);
              }
            }
          }), C.Consumer = ge;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var qa = -1, ba = 0, Mi = 1, Sr = 2;
      function jr(h) {
        if (h._status === qa) {
          var C = h._result, M = C();
          if (M.then(function(ge) {
            if (h._status === ba || h._status === qa) {
              var fe = h;
              fe._status = Mi, fe._result = ge;
            }
          }, function(ge) {
            if (h._status === ba || h._status === qa) {
              var fe = h;
              fe._status = Sr, fe._result = ge;
            }
          }), h._status === qa) {
            var F = h;
            F._status = ba, F._result = M;
          }
        }
        if (h._status === Mi) {
          var K = h._result;
          return K === void 0 && P(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, K), "default" in K || P(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, K), K.default;
        } else
          throw h._result;
      }
      function oa(h) {
        var C = {
          // We use these fields to store the result.
          _status: qa,
          _result: h
        }, M = {
          $$typeof: Ee,
          _payload: C,
          _init: jr
        };
        {
          var F, K;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(ge) {
                P("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = ge, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return K;
              },
              set: function(ge) {
                P("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), K = ge, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function Ni(h) {
        h != null && h.$$typeof === ue ? P("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? P("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && P("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && P("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: We,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(F) {
              M = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var ml;
      ml = Symbol.for("react.module.reference");
      function R(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Qe || h === st || tt || h === S || h === te || h === Ue || He || h === pt || Kt || St || tn || typeof h == "object" && h !== null && (h.$$typeof === Ee || h.$$typeof === ue || h.$$typeof === ke || h.$$typeof === ve || h.$$typeof === We || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === ml || h.getModuleId !== void 0));
      }
      function I(h, C) {
        R(h) || P("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: ue,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(K) {
              F = K, !h.name && !h.displayName && (h.displayName = K);
            }
          });
        }
        return M;
      }
      function W() {
        var h = je.current;
        return h === null && P(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function Le(h) {
        var C = W();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? P("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && P("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function dt(h) {
        var C = W();
        return C.useState(h);
      }
      function Ct(h, C, M) {
        var F = W();
        return F.useReducer(h, C, M);
      }
      function ze(h) {
        var C = W();
        return C.useRef(h);
      }
      function lt(h, C) {
        var M = W();
        return M.useEffect(h, C);
      }
      function Ln(h, C) {
        var M = W();
        return M.useInsertionEffect(h, C);
      }
      function Wt(h, C) {
        var M = W();
        return M.useLayoutEffect(h, C);
      }
      function cn(h, C) {
        var M = W();
        return M.useCallback(h, C);
      }
      function vr(h, C) {
        var M = W();
        return M.useMemo(h, C);
      }
      function Ft(h, C, M) {
        var F = W();
        return F.useImperativeHandle(h, C, M);
      }
      function Da(h, C) {
        {
          var M = W();
          return M.useDebugValue(h, C);
        }
      }
      function Mn() {
        var h = W();
        return h.useTransition();
      }
      function Hr(h) {
        var C = W();
        return C.useDeferredValue(h);
      }
      function Je() {
        var h = W();
        return h.useId();
      }
      function zi(h, C, M) {
        var F = W();
        return F.useSyncExternalStore(h, C, M);
      }
      var Ui = 0, yl, Vr, qo, Er, Xo, Ko, Jo;
      function ru() {
      }
      ru.__reactDisabledLog = !0;
      function Iu() {
        {
          if (Ui === 0) {
            yl = console.log, Vr = console.info, qo = console.warn, Er = console.error, Xo = console.group, Ko = console.groupCollapsed, Jo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: ru,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Ui++;
        }
      }
      function Ai() {
        {
          if (Ui--, Ui === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: De({}, h, {
                value: yl
              }),
              info: De({}, h, {
                value: Vr
              }),
              warn: De({}, h, {
                value: qo
              }),
              error: De({}, h, {
                value: Er
              }),
              group: De({}, h, {
                value: Xo
              }),
              groupCollapsed: De({}, h, {
                value: Ko
              }),
              groupEnd: De({}, h, {
                value: Jo
              })
            });
          }
          Ui < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ci = wt.ReactCurrentDispatcher, ka;
      function gl(h, C, M) {
        {
          if (ka === void 0)
            try {
              throw Error();
            } catch (K) {
              var F = K.stack.trim().match(/\n( *(at )?)/);
              ka = F && F[1] || "";
            }
          return `
` + ka + h;
        }
      }
      var fi = !1, au;
      {
        var iu = typeof WeakMap == "function" ? WeakMap : Map;
        au = new iu();
      }
      function Sl(h, C) {
        if (!h || fi)
          return "";
        {
          var M = au.get(h);
          if (M !== void 0)
            return M;
        }
        var F;
        fi = !0;
        var K = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var ge;
        ge = ci.current, ci.current = null, Iu();
        try {
          if (C) {
            var fe = function() {
              throw Error();
            };
            if (Object.defineProperty(fe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(fe, []);
              } catch (xt) {
                F = xt;
              }
              Reflect.construct(h, [], fe);
            } else {
              try {
                fe.call();
              } catch (xt) {
                F = xt;
              }
              h.call(fe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (xt) {
              F = xt;
            }
            h();
          }
        } catch (xt) {
          if (xt && F && typeof xt.stack == "string") {
            for (var Pe = xt.stack.split(`
`), ut = F.stack.split(`
`), jt = Pe.length - 1, Bt = ut.length - 1; jt >= 1 && Bt >= 0 && Pe[jt] !== ut[Bt]; )
              Bt--;
            for (; jt >= 1 && Bt >= 0; jt--, Bt--)
              if (Pe[jt] !== ut[Bt]) {
                if (jt !== 1 || Bt !== 1)
                  do
                    if (jt--, Bt--, Bt < 0 || Pe[jt] !== ut[Bt]) {
                      var $t = `
` + Pe[jt].replace(" at new ", " at ");
                      return h.displayName && $t.includes("<anonymous>") && ($t = $t.replace("<anonymous>", h.displayName)), typeof h == "function" && au.set(h, $t), $t;
                    }
                  while (jt >= 1 && Bt >= 0);
                break;
              }
          }
        } finally {
          fi = !1, ci.current = ge, Ai(), Error.prepareStackTrace = K;
        }
        var Yt = h ? h.displayName || h.name : "", rn = Yt ? gl(Yt) : "";
        return typeof h == "function" && au.set(h, rn), rn;
      }
      function Zo(h, C, M) {
        return Sl(h, !1);
      }
      function es(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function mt(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return Sl(h, es(h));
        if (typeof h == "string")
          return gl(h);
        switch (h) {
          case te:
            return gl("Suspense");
          case Ue:
            return gl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case We:
              return Zo(h.render);
            case ue:
              return mt(h.type, C, M);
            case Ee: {
              var F = h, K = F._payload, ge = F._init;
              try {
                return mt(ge(K), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var ts = {}, Qu = wt.ReactDebugCurrentFrame;
      function El(h) {
        if (h) {
          var C = h._owner, M = mt(h.type, h._source, C ? C.type : null);
          Qu.setExtraStackFrame(M);
        } else
          Qu.setExtraStackFrame(null);
      }
      function ns(h, C, M, F, K) {
        {
          var ge = Function.call.bind(na);
          for (var fe in h)
            if (ge(h, fe)) {
              var Pe = void 0;
              try {
                if (typeof h[fe] != "function") {
                  var ut = Error((F || "React class") + ": " + M + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ut.name = "Invariant Violation", ut;
                }
                Pe = h[fe](C, fe, F, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (jt) {
                Pe = jt;
              }
              Pe && !(Pe instanceof Error) && (El(K), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", M, fe, typeof Pe), El(null)), Pe instanceof Error && !(Pe.message in ts) && (ts[Pe.message] = !0, El(K), P("Failed %s type: %s", M, Pe.message), El(null));
            }
        }
      }
      function yt(h) {
        if (h) {
          var C = h._owner, M = mt(h.type, h._source, C ? C.type : null);
          yn(M);
        } else
          yn(null);
      }
      var Wu;
      Wu = !1;
      function lu() {
        if (ft.current) {
          var h = Hn(ft.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ye(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function Xa(h) {
        return h != null ? Ye(h.__source) : "";
      }
      var pn = {};
      function Pr(h) {
        var C = lu();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function Oa(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = Pr(C);
          if (!pn[M]) {
            pn[M] = !0;
            var F = "";
            h && h._owner && h._owner !== ft.current && (F = " It was passed a child from " + Hn(h._owner.type) + "."), yt(h), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, F), yt(null);
          }
        }
      }
      function Cl(h, C) {
        if (typeof h == "object") {
          if (gn(h))
            for (var M = 0; M < h.length; M++) {
              var F = h[M];
              Ot(F) && Oa(F, C);
            }
          else if (Ot(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var K = rt(h);
            if (typeof K == "function" && K !== h.entries)
              for (var ge = K.call(h), fe; !(fe = ge.next()).done; )
                Ot(fe.value) && Oa(fe.value, C);
          }
        }
      }
      function nn(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === We || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === ue))
            M = C.propTypes;
          else
            return;
          if (M) {
            var F = Hn(C);
            ns(M, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Wu) {
            Wu = !0;
            var K = Hn(C);
            P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function vn(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var F = C[M];
            if (F !== "children" && F !== "key") {
              yt(h), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), yt(null);
              break;
            }
          }
          h.ref !== null && (yt(h), P("Invalid attribute `ref` supplied to `React.Fragment`."), yt(null));
        }
      }
      function rs(h, C, M) {
        var F = R(h);
        if (!F) {
          var K = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (K += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ge = Xa(C);
          ge ? K += ge : K += lu();
          var fe;
          h === null ? fe = "null" : gn(h) ? fe = "array" : h !== void 0 && h.$$typeof === ot ? (fe = "<" + (Hn(h.type) || "Unknown") + " />", K = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof h, P("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fe, K);
        }
        var Pe = be.apply(this, arguments);
        if (Pe == null)
          return Pe;
        if (F)
          for (var ut = 2; ut < arguments.length; ut++)
            Cl(arguments[ut], h);
        return h === Qe ? vn(Pe) : nn(Pe), Pe;
      }
      var Jn = !1;
      function Br(h) {
        var C = rs.bind(null, h);
        return C.type = h, Jn || (Jn = !0, nt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return nt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Ka(h, C, M) {
        for (var F = Ut.apply(this, arguments), K = 2; K < arguments.length; K++)
          Cl(arguments[K], F.type);
        return nn(F), F;
      }
      function Gu(h, C) {
        var M = kt.transition;
        kt.transition = {};
        var F = kt.transition;
        kt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (kt.transition = M, M === null && F._updatedFibers) {
            var K = F._updatedFibers.size;
            K > 10 && nt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var uu = !1, ou = null;
      function Rl(h) {
        if (ou === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = X && X[C];
            ou = M.call(X, "timers").setImmediate;
          } catch {
            ou = function(K) {
              uu === !1 && (uu = !0, typeof MessageChannel > "u" && P("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var ge = new MessageChannel();
              ge.port1.onmessage = K, ge.port2.postMessage(void 0);
            };
          }
        return ou(h);
      }
      var La = 0, Fi = !1;
      function su(h) {
        {
          var C = La;
          La++, Ce.current === null && (Ce.current = []);
          var M = Ce.isBatchingLegacy, F;
          try {
            if (Ce.isBatchingLegacy = !0, F = h(), !M && Ce.didScheduleLegacyUpdate) {
              var K = Ce.current;
              K !== null && (Ce.didScheduleLegacyUpdate = !1, Hi(K));
            }
          } catch (Yt) {
            throw ji(C), Yt;
          } finally {
            Ce.isBatchingLegacy = M;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var ge = F, fe = !1, Pe = {
              then: function(Yt, rn) {
                fe = !0, ge.then(function(xt) {
                  ji(C), La === 0 ? qu(xt, Yt, rn) : Yt(xt);
                }, function(xt) {
                  ji(C), rn(xt);
                });
              }
            };
            return !Fi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              fe || (Fi = !0, P("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Pe;
          } else {
            var ut = F;
            if (ji(C), La === 0) {
              var jt = Ce.current;
              jt !== null && (Hi(jt), Ce.current = null);
              var Bt = {
                then: function(Yt, rn) {
                  Ce.current === null ? (Ce.current = [], qu(ut, Yt, rn)) : Yt(ut);
                }
              };
              return Bt;
            } else {
              var $t = {
                then: function(Yt, rn) {
                  Yt(ut);
                }
              };
              return $t;
            }
          }
        }
      }
      function ji(h) {
        h !== La - 1 && P("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), La = h;
      }
      function qu(h, C, M) {
        {
          var F = Ce.current;
          if (F !== null)
            try {
              Hi(F), Rl(function() {
                F.length === 0 ? (Ce.current = null, C(h)) : qu(h, C, M);
              });
            } catch (K) {
              M(K);
            }
          else
            C(h);
        }
      }
      var di = !1;
      function Hi(h) {
        if (!di) {
          di = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            di = !1;
          }
        }
      }
      var Xu = rs, as = Ka, Ja = Br, Ku = {
        map: _a,
        forEach: tu,
        count: vl,
        toArray: nu,
        only: hl
      };
      Z.Children = Ku, Z.Component = Ke, Z.Fragment = Qe, Z.Profiler = st, Z.PureComponent = Vt, Z.StrictMode = S, Z.Suspense = te, Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wt, Z.act = su, Z.cloneElement = as, Z.createContext = Ga, Z.createElement = Xu, Z.createFactory = Ja, Z.createRef = Fr, Z.forwardRef = Ni, Z.isValidElement = Ot, Z.lazy = oa, Z.memo = I, Z.startTransition = Gu, Z.unstable_act = su, Z.useCallback = cn, Z.useContext = Le, Z.useDebugValue = Da, Z.useDeferredValue = Hr, Z.useEffect = lt, Z.useId = Je, Z.useImperativeHandle = Ft, Z.useInsertionEffect = Ln, Z.useLayoutEffect = Wt, Z.useMemo = vr, Z.useReducer = Ct, Z.useRef = ze, Z.useState = dt, Z.useSyncExternalStore = zi, Z.useTransition = Mn, Z.version = et, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Jp, Jp.exports)), Jp.exports;
}
var eR;
function ev() {
  if (eR) return Vm.exports;
  eR = 1;
  var X = {};
  return X.NODE_ENV === "production" ? Vm.exports = nD() : Vm.exports = rD(), Vm.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function aD() {
  if (tR) return Xp;
  tR = 1;
  var X = ev(), Z = Symbol.for("react.element"), A = Symbol.for("react.fragment"), et = Object.prototype.hasOwnProperty, ot = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, zt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(S, st, ke) {
    var ve, We = {}, te = null, Ue = null;
    ke !== void 0 && (te = "" + ke), st.key !== void 0 && (te = "" + st.key), st.ref !== void 0 && (Ue = st.ref);
    for (ve in st) et.call(st, ve) && !zt.hasOwnProperty(ve) && (We[ve] = st[ve]);
    if (S && S.defaultProps) for (ve in st = S.defaultProps, st) We[ve] === void 0 && (We[ve] = st[ve]);
    return { $$typeof: Z, type: S, key: te, ref: Ue, props: We, _owner: ot.current };
  }
  return Xp.Fragment = A, Xp.jsx = Qe, Xp.jsxs = Qe, Xp;
}
var Kp = {}, nR;
function iD() {
  if (nR) return Kp;
  nR = 1;
  var X = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return X.NODE_ENV !== "production" && function() {
    var Z = ev(), A = Symbol.for("react.element"), et = Symbol.for("react.portal"), ot = Symbol.for("react.fragment"), zt = Symbol.for("react.strict_mode"), Qe = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), st = Symbol.for("react.context"), ke = Symbol.for("react.forward_ref"), ve = Symbol.for("react.suspense"), We = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), Ee = Symbol.iterator, pt = "@@iterator";
    function Fn(R) {
      if (R === null || typeof R != "object")
        return null;
      var I = Ee && R[Ee] || R[pt];
      return typeof I == "function" ? I : null;
    }
    var on = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function rt(R) {
      {
        for (var I = arguments.length, W = new Array(I > 1 ? I - 1 : 0), Le = 1; Le < I; Le++)
          W[Le - 1] = arguments[Le];
        je("error", R, W);
      }
    }
    function je(R, I, W) {
      {
        var Le = on.ReactDebugCurrentFrame, dt = Le.getStackAddendum();
        dt !== "" && (I += "%s", W = W.concat([dt]));
        var Ct = W.map(function(ze) {
          return String(ze);
        });
        Ct.unshift("Warning: " + I), Function.prototype.apply.call(console[R], console, Ct);
      }
    }
    var kt = !1, Ce = !1, ft = !1, $e = !1, wn = !1, yn;
    yn = Symbol.for("react.module.reference");
    function Kt(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === ot || R === Qe || wn || R === zt || R === ve || R === We || $e || R === ue || kt || Ce || ft || typeof R == "object" && R !== null && (R.$$typeof === Ue || R.$$typeof === te || R.$$typeof === S || R.$$typeof === st || R.$$typeof === ke || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === yn || R.getModuleId !== void 0));
    }
    function St(R, I, W) {
      var Le = R.displayName;
      if (Le)
        return Le;
      var dt = I.displayName || I.name || "";
      return dt !== "" ? W + "(" + dt + ")" : W;
    }
    function tn(R) {
      return R.displayName || "Context";
    }
    function He(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && rt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case ot:
          return "Fragment";
        case et:
          return "Portal";
        case Qe:
          return "Profiler";
        case zt:
          return "StrictMode";
        case ve:
          return "Suspense";
        case We:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case st:
            var I = R;
            return tn(I) + ".Consumer";
          case S:
            var W = R;
            return tn(W._context) + ".Provider";
          case ke:
            return St(R, R.render, "ForwardRef");
          case te:
            var Le = R.displayName || null;
            return Le !== null ? Le : He(R.type) || "Memo";
          case Ue: {
            var dt = R, Ct = dt._payload, ze = dt._init;
            try {
              return He(ze(Ct));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var tt = Object.assign, wt = 0, nt, P, he, ie, b, B, De;
    function Ve() {
    }
    Ve.__reactDisabledLog = !0;
    function Ke() {
      {
        if (wt === 0) {
          nt = console.log, P = console.info, he = console.warn, ie = console.error, b = console.group, B = console.groupCollapsed, De = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: Ve,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        wt++;
      }
    }
    function at() {
      {
        if (wt--, wt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: tt({}, R, {
              value: nt
            }),
            info: tt({}, R, {
              value: P
            }),
            warn: tt({}, R, {
              value: he
            }),
            error: tt({}, R, {
              value: ie
            }),
            group: tt({}, R, {
              value: b
            }),
            groupCollapsed: tt({}, R, {
              value: B
            }),
            groupEnd: tt({}, R, {
              value: De
            })
          });
        }
        wt < 0 && rt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ht = on.ReactCurrentDispatcher, ct;
    function Et(R, I, W) {
      {
        if (ct === void 0)
          try {
            throw Error();
          } catch (dt) {
            var Le = dt.stack.trim().match(/\n( *(at )?)/);
            ct = Le && Le[1] || "";
          }
        return `
` + ct + R;
      }
    }
    var Vt = !1, qn;
    {
      var Fr = typeof WeakMap == "function" ? WeakMap : Map;
      qn = new Fr();
    }
    function cr(R, I) {
      if (!R || Vt)
        return "";
      {
        var W = qn.get(R);
        if (W !== void 0)
          return W;
      }
      var Le;
      Vt = !0;
      var dt = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ct;
      Ct = ht.current, ht.current = null, Ke();
      try {
        if (I) {
          var ze = function() {
            throw Error();
          };
          if (Object.defineProperty(ze.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ze, []);
            } catch (Mn) {
              Le = Mn;
            }
            Reflect.construct(R, [], ze);
          } else {
            try {
              ze.call();
            } catch (Mn) {
              Le = Mn;
            }
            R.call(ze.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Mn) {
            Le = Mn;
          }
          R();
        }
      } catch (Mn) {
        if (Mn && Le && typeof Mn.stack == "string") {
          for (var lt = Mn.stack.split(`
`), Ln = Le.stack.split(`
`), Wt = lt.length - 1, cn = Ln.length - 1; Wt >= 1 && cn >= 0 && lt[Wt] !== Ln[cn]; )
            cn--;
          for (; Wt >= 1 && cn >= 0; Wt--, cn--)
            if (lt[Wt] !== Ln[cn]) {
              if (Wt !== 1 || cn !== 1)
                do
                  if (Wt--, cn--, cn < 0 || lt[Wt] !== Ln[cn]) {
                    var vr = `
` + lt[Wt].replace(" at new ", " at ");
                    return R.displayName && vr.includes("<anonymous>") && (vr = vr.replace("<anonymous>", R.displayName)), typeof R == "function" && qn.set(R, vr), vr;
                  }
                while (Wt >= 1 && cn >= 0);
              break;
            }
        }
      } finally {
        Vt = !1, ht.current = Ct, at(), Error.prepareStackTrace = dt;
      }
      var Ft = R ? R.displayName || R.name : "", Da = Ft ? Et(Ft) : "";
      return typeof R == "function" && qn.set(R, Da), Da;
    }
    function gn(R, I, W) {
      return cr(R, !1);
    }
    function Xn(R) {
      var I = R.prototype;
      return !!(I && I.isReactComponent);
    }
    function jn(R, I, W) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return cr(R, Xn(R));
      if (typeof R == "string")
        return Et(R);
      switch (R) {
        case ve:
          return Et("Suspense");
        case We:
          return Et("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ke:
            return gn(R.render);
          case te:
            return jn(R.type, I, W);
          case Ue: {
            var Le = R, dt = Le._payload, Ct = Le._init;
            try {
              return jn(Ct(dt), I, W);
            } catch {
            }
          }
        }
      return "";
    }
    var xn = Object.prototype.hasOwnProperty, On = {}, yr = on.ReactDebugCurrentFrame;
    function fr(R) {
      if (R) {
        var I = R._owner, W = jn(R.type, R._source, I ? I.type : null);
        yr.setExtraStackFrame(W);
      } else
        yr.setExtraStackFrame(null);
    }
    function Hn(R, I, W, Le, dt) {
      {
        var Ct = Function.call.bind(xn);
        for (var ze in R)
          if (Ct(R, ze)) {
            var lt = void 0;
            try {
              if (typeof R[ze] != "function") {
                var Ln = Error((Le || "React class") + ": " + W + " type `" + ze + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[ze] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ln.name = "Invariant Violation", Ln;
              }
              lt = R[ze](I, ze, Le, W, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Wt) {
              lt = Wt;
            }
            lt && !(lt instanceof Error) && (fr(dt), rt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Le || "React class", W, ze, typeof lt), fr(null)), lt instanceof Error && !(lt.message in On) && (On[lt.message] = !0, fr(dt), rt("Failed %s type: %s", W, lt.message), fr(null));
          }
      }
    }
    var na = Array.isArray;
    function ra(R) {
      return na(R);
    }
    function dr(R) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, W = I && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return W;
      }
    }
    function aa(R) {
      try {
        return Kn(R), !1;
      } catch {
        return !0;
      }
    }
    function Kn(R) {
      return "" + R;
    }
    function gr(R) {
      if (aa(R))
        return rt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dr(R)), Kn(R);
    }
    var sn = on.ReactCurrentOwner, ia = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, la, ua, ne;
    ne = {};
    function be(R) {
      if (xn.call(R, "ref")) {
        var I = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function it(R) {
      if (xn.call(R, "key")) {
        var I = Object.getOwnPropertyDescriptor(R, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Ut(R, I) {
      if (typeof R.ref == "string" && sn.current && I && sn.current.stateNode !== I) {
        var W = He(sn.current.type);
        ne[W] || (rt('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', He(sn.current.type), R.ref), ne[W] = !0);
      }
    }
    function Ot(R, I) {
      {
        var W = function() {
          la || (la = !0, rt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        W.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: W,
          configurable: !0
        });
      }
    }
    function _n(R, I) {
      {
        var W = function() {
          ua || (ua = !0, rt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        W.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: W,
          configurable: !0
        });
      }
    }
    var dn = function(R, I, W, Le, dt, Ct, ze) {
      var lt = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: A,
        // Built-in properties that belong on the element
        type: R,
        key: I,
        ref: W,
        props: ze,
        // Record the component responsible for creating this element.
        _owner: Ct
      };
      return lt._store = {}, Object.defineProperty(lt._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(lt, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Le
      }), Object.defineProperty(lt, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: dt
      }), Object.freeze && (Object.freeze(lt.props), Object.freeze(lt)), lt;
    };
    function pr(R, I, W, Le, dt) {
      {
        var Ct, ze = {}, lt = null, Ln = null;
        W !== void 0 && (gr(W), lt = "" + W), it(I) && (gr(I.key), lt = "" + I.key), be(I) && (Ln = I.ref, Ut(I, dt));
        for (Ct in I)
          xn.call(I, Ct) && !ia.hasOwnProperty(Ct) && (ze[Ct] = I[Ct]);
        if (R && R.defaultProps) {
          var Wt = R.defaultProps;
          for (Ct in Wt)
            ze[Ct] === void 0 && (ze[Ct] = Wt[Ct]);
        }
        if (lt || Ln) {
          var cn = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          lt && Ot(ze, cn), Ln && _n(ze, cn);
        }
        return dn(R, lt, Ln, dt, Le, sn.current, ze);
      }
    }
    var Pt = on.ReactCurrentOwner, $n = on.ReactDebugCurrentFrame;
    function At(R) {
      if (R) {
        var I = R._owner, W = jn(R.type, R._source, I ? I.type : null);
        $n.setExtraStackFrame(W);
      } else
        $n.setExtraStackFrame(null);
    }
    var Jt;
    Jt = !1;
    function Wa(R) {
      return typeof R == "object" && R !== null && R.$$typeof === A;
    }
    function _a() {
      {
        if (Pt.current) {
          var R = He(Pt.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function vl(R) {
      return "";
    }
    var tu = {};
    function nu(R) {
      {
        var I = _a();
        if (!I) {
          var W = typeof R == "string" ? R : R.displayName || R.name;
          W && (I = `

Check the top-level render call using <` + W + ">.");
        }
        return I;
      }
    }
    function hl(R, I) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var W = nu(I);
        if (tu[W])
          return;
        tu[W] = !0;
        var Le = "";
        R && R._owner && R._owner !== Pt.current && (Le = " It was passed a child from " + He(R._owner.type) + "."), At(R), rt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', W, Le), At(null);
      }
    }
    function Ga(R, I) {
      {
        if (typeof R != "object")
          return;
        if (ra(R))
          for (var W = 0; W < R.length; W++) {
            var Le = R[W];
            Wa(Le) && hl(Le, I);
          }
        else if (Wa(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var dt = Fn(R);
          if (typeof dt == "function" && dt !== R.entries)
            for (var Ct = dt.call(R), ze; !(ze = Ct.next()).done; )
              Wa(ze.value) && hl(ze.value, I);
        }
      }
    }
    function qa(R) {
      {
        var I = R.type;
        if (I == null || typeof I == "string")
          return;
        var W;
        if (typeof I == "function")
          W = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === ke || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === te))
          W = I.propTypes;
        else
          return;
        if (W) {
          var Le = He(I);
          Hn(W, R.props, "prop", Le, R);
        } else if (I.PropTypes !== void 0 && !Jt) {
          Jt = !0;
          var dt = He(I);
          rt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", dt || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && rt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ba(R) {
      {
        for (var I = Object.keys(R.props), W = 0; W < I.length; W++) {
          var Le = I[W];
          if (Le !== "children" && Le !== "key") {
            At(R), rt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Le), At(null);
            break;
          }
        }
        R.ref !== null && (At(R), rt("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    var Mi = {};
    function Sr(R, I, W, Le, dt, Ct) {
      {
        var ze = Kt(R);
        if (!ze) {
          var lt = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (lt += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ln = vl();
          Ln ? lt += Ln : lt += _a();
          var Wt;
          R === null ? Wt = "null" : ra(R) ? Wt = "array" : R !== void 0 && R.$$typeof === A ? (Wt = "<" + (He(R.type) || "Unknown") + " />", lt = " Did you accidentally export a JSX literal instead of a component?") : Wt = typeof R, rt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Wt, lt);
        }
        var cn = pr(R, I, W, dt, Ct);
        if (cn == null)
          return cn;
        if (ze) {
          var vr = I.children;
          if (vr !== void 0)
            if (Le)
              if (ra(vr)) {
                for (var Ft = 0; Ft < vr.length; Ft++)
                  Ga(vr[Ft], R);
                Object.freeze && Object.freeze(vr);
              } else
                rt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ga(vr, R);
        }
        if (xn.call(I, "key")) {
          var Da = He(R), Mn = Object.keys(I).filter(function(zi) {
            return zi !== "key";
          }), Hr = Mn.length > 0 ? "{key: someKey, " + Mn.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Mi[Da + Hr]) {
            var Je = Mn.length > 0 ? "{" + Mn.join(": ..., ") + ": ...}" : "{}";
            rt(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Hr, Da, Je, Da), Mi[Da + Hr] = !0;
          }
        }
        return R === ot ? ba(cn) : qa(cn), cn;
      }
    }
    function jr(R, I, W) {
      return Sr(R, I, W, !0);
    }
    function oa(R, I, W) {
      return Sr(R, I, W, !1);
    }
    var Ni = oa, ml = jr;
    Kp.Fragment = ot, Kp.jsx = Ni, Kp.jsxs = ml;
  }(), Kp;
}
var rR;
function lD() {
  if (rR) return Hm.exports;
  rR = 1;
  var X = {};
  return X.NODE_ENV === "production" ? Hm.exports = aD() : Hm.exports = iD(), Hm.exports;
}
var Go = lD(), Zp = ev(), Vf = {}, Pm = { exports: {} }, Ia = {}, Bm = { exports: {} }, v0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aR;
function uD() {
  return aR || (aR = 1, function(X) {
    function Z(P, he) {
      var ie = P.length;
      P.push(he);
      e: for (; 0 < ie; ) {
        var b = ie - 1 >>> 1, B = P[b];
        if (0 < ot(B, he)) P[b] = he, P[ie] = B, ie = b;
        else break e;
      }
    }
    function A(P) {
      return P.length === 0 ? null : P[0];
    }
    function et(P) {
      if (P.length === 0) return null;
      var he = P[0], ie = P.pop();
      if (ie !== he) {
        P[0] = ie;
        e: for (var b = 0, B = P.length, De = B >>> 1; b < De; ) {
          var Ve = 2 * (b + 1) - 1, Ke = P[Ve], at = Ve + 1, ht = P[at];
          if (0 > ot(Ke, ie)) at < B && 0 > ot(ht, Ke) ? (P[b] = ht, P[at] = ie, b = at) : (P[b] = Ke, P[Ve] = ie, b = Ve);
          else if (at < B && 0 > ot(ht, ie)) P[b] = ht, P[at] = ie, b = at;
          else break e;
        }
      }
      return he;
    }
    function ot(P, he) {
      var ie = P.sortIndex - he.sortIndex;
      return ie !== 0 ? ie : P.id - he.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var zt = performance;
      X.unstable_now = function() {
        return zt.now();
      };
    } else {
      var Qe = Date, S = Qe.now();
      X.unstable_now = function() {
        return Qe.now() - S;
      };
    }
    var st = [], ke = [], ve = 1, We = null, te = 3, Ue = !1, ue = !1, Ee = !1, pt = typeof setTimeout == "function" ? setTimeout : null, Fn = typeof clearTimeout == "function" ? clearTimeout : null, on = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function rt(P) {
      for (var he = A(ke); he !== null; ) {
        if (he.callback === null) et(ke);
        else if (he.startTime <= P) et(ke), he.sortIndex = he.expirationTime, Z(st, he);
        else break;
        he = A(ke);
      }
    }
    function je(P) {
      if (Ee = !1, rt(P), !ue) if (A(st) !== null) ue = !0, wt(kt);
      else {
        var he = A(ke);
        he !== null && nt(je, he.startTime - P);
      }
    }
    function kt(P, he) {
      ue = !1, Ee && (Ee = !1, Fn($e), $e = -1), Ue = !0;
      var ie = te;
      try {
        for (rt(he), We = A(st); We !== null && (!(We.expirationTime > he) || P && !Kt()); ) {
          var b = We.callback;
          if (typeof b == "function") {
            We.callback = null, te = We.priorityLevel;
            var B = b(We.expirationTime <= he);
            he = X.unstable_now(), typeof B == "function" ? We.callback = B : We === A(st) && et(st), rt(he);
          } else et(st);
          We = A(st);
        }
        if (We !== null) var De = !0;
        else {
          var Ve = A(ke);
          Ve !== null && nt(je, Ve.startTime - he), De = !1;
        }
        return De;
      } finally {
        We = null, te = ie, Ue = !1;
      }
    }
    var Ce = !1, ft = null, $e = -1, wn = 5, yn = -1;
    function Kt() {
      return !(X.unstable_now() - yn < wn);
    }
    function St() {
      if (ft !== null) {
        var P = X.unstable_now();
        yn = P;
        var he = !0;
        try {
          he = ft(!0, P);
        } finally {
          he ? tn() : (Ce = !1, ft = null);
        }
      } else Ce = !1;
    }
    var tn;
    if (typeof on == "function") tn = function() {
      on(St);
    };
    else if (typeof MessageChannel < "u") {
      var He = new MessageChannel(), tt = He.port2;
      He.port1.onmessage = St, tn = function() {
        tt.postMessage(null);
      };
    } else tn = function() {
      pt(St, 0);
    };
    function wt(P) {
      ft = P, Ce || (Ce = !0, tn());
    }
    function nt(P, he) {
      $e = pt(function() {
        P(X.unstable_now());
      }, he);
    }
    X.unstable_IdlePriority = 5, X.unstable_ImmediatePriority = 1, X.unstable_LowPriority = 4, X.unstable_NormalPriority = 3, X.unstable_Profiling = null, X.unstable_UserBlockingPriority = 2, X.unstable_cancelCallback = function(P) {
      P.callback = null;
    }, X.unstable_continueExecution = function() {
      ue || Ue || (ue = !0, wt(kt));
    }, X.unstable_forceFrameRate = function(P) {
      0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : wn = 0 < P ? Math.floor(1e3 / P) : 5;
    }, X.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, X.unstable_getFirstCallbackNode = function() {
      return A(st);
    }, X.unstable_next = function(P) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var he = 3;
          break;
        default:
          he = te;
      }
      var ie = te;
      te = he;
      try {
        return P();
      } finally {
        te = ie;
      }
    }, X.unstable_pauseExecution = function() {
    }, X.unstable_requestPaint = function() {
    }, X.unstable_runWithPriority = function(P, he) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var ie = te;
      te = P;
      try {
        return he();
      } finally {
        te = ie;
      }
    }, X.unstable_scheduleCallback = function(P, he, ie) {
      var b = X.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? b + ie : b) : ie = b, P) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = ie + B, P = { id: ve++, callback: he, priorityLevel: P, startTime: ie, expirationTime: B, sortIndex: -1 }, ie > b ? (P.sortIndex = ie, Z(ke, P), A(st) === null && P === A(ke) && (Ee ? (Fn($e), $e = -1) : Ee = !0, nt(je, ie - b))) : (P.sortIndex = B, Z(st, P), ue || Ue || (ue = !0, wt(kt))), P;
    }, X.unstable_shouldYield = Kt, X.unstable_wrapCallback = function(P) {
      var he = te;
      return function() {
        var ie = te;
        te = he;
        try {
          return P.apply(this, arguments);
        } finally {
          te = ie;
        }
      };
    };
  }(v0)), v0;
}
var h0 = {}, iR;
function oD() {
  return iR || (iR = 1, function(X) {
    var Z = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    Z.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var A = !1, et = !1, ot = 5;
      function zt(ne, be) {
        var it = ne.length;
        ne.push(be), st(ne, be, it);
      }
      function Qe(ne) {
        return ne.length === 0 ? null : ne[0];
      }
      function S(ne) {
        if (ne.length === 0)
          return null;
        var be = ne[0], it = ne.pop();
        return it !== be && (ne[0] = it, ke(ne, it, 0)), be;
      }
      function st(ne, be, it) {
        for (var Ut = it; Ut > 0; ) {
          var Ot = Ut - 1 >>> 1, _n = ne[Ot];
          if (ve(_n, be) > 0)
            ne[Ot] = be, ne[Ut] = _n, Ut = Ot;
          else
            return;
        }
      }
      function ke(ne, be, it) {
        for (var Ut = it, Ot = ne.length, _n = Ot >>> 1; Ut < _n; ) {
          var dn = (Ut + 1) * 2 - 1, pr = ne[dn], Pt = dn + 1, $n = ne[Pt];
          if (ve(pr, be) < 0)
            Pt < Ot && ve($n, pr) < 0 ? (ne[Ut] = $n, ne[Pt] = be, Ut = Pt) : (ne[Ut] = pr, ne[dn] = be, Ut = dn);
          else if (Pt < Ot && ve($n, be) < 0)
            ne[Ut] = $n, ne[Pt] = be, Ut = Pt;
          else
            return;
        }
      }
      function ve(ne, be) {
        var it = ne.sortIndex - be.sortIndex;
        return it !== 0 ? it : ne.id - be.id;
      }
      var We = 1, te = 2, Ue = 3, ue = 4, Ee = 5;
      function pt(ne, be) {
      }
      var Fn = typeof performance == "object" && typeof performance.now == "function";
      if (Fn) {
        var on = performance;
        X.unstable_now = function() {
          return on.now();
        };
      } else {
        var rt = Date, je = rt.now();
        X.unstable_now = function() {
          return rt.now() - je;
        };
      }
      var kt = 1073741823, Ce = -1, ft = 250, $e = 5e3, wn = 1e4, yn = kt, Kt = [], St = [], tn = 1, He = null, tt = Ue, wt = !1, nt = !1, P = !1, he = typeof setTimeout == "function" ? setTimeout : null, ie = typeof clearTimeout == "function" ? clearTimeout : null, b = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function B(ne) {
        for (var be = Qe(St); be !== null; ) {
          if (be.callback === null)
            S(St);
          else if (be.startTime <= ne)
            S(St), be.sortIndex = be.expirationTime, zt(Kt, be);
          else
            return;
          be = Qe(St);
        }
      }
      function De(ne) {
        if (P = !1, B(ne), !nt)
          if (Qe(Kt) !== null)
            nt = !0, gr(Ve);
          else {
            var be = Qe(St);
            be !== null && sn(De, be.startTime - ne);
          }
      }
      function Ve(ne, be) {
        nt = !1, P && (P = !1, ia()), wt = !0;
        var it = tt;
        try {
          var Ut;
          if (!et) return Ke(ne, be);
        } finally {
          He = null, tt = it, wt = !1;
        }
      }
      function Ke(ne, be) {
        var it = be;
        for (B(it), He = Qe(Kt); He !== null && !A && !(He.expirationTime > it && (!ne || fr())); ) {
          var Ut = He.callback;
          if (typeof Ut == "function") {
            He.callback = null, tt = He.priorityLevel;
            var Ot = He.expirationTime <= it, _n = Ut(Ot);
            it = X.unstable_now(), typeof _n == "function" ? He.callback = _n : He === Qe(Kt) && S(Kt), B(it);
          } else
            S(Kt);
          He = Qe(Kt);
        }
        if (He !== null)
          return !0;
        var dn = Qe(St);
        return dn !== null && sn(De, dn.startTime - it), !1;
      }
      function at(ne, be) {
        switch (ne) {
          case We:
          case te:
          case Ue:
          case ue:
          case Ee:
            break;
          default:
            ne = Ue;
        }
        var it = tt;
        tt = ne;
        try {
          return be();
        } finally {
          tt = it;
        }
      }
      function ht(ne) {
        var be;
        switch (tt) {
          case We:
          case te:
          case Ue:
            be = Ue;
            break;
          default:
            be = tt;
            break;
        }
        var it = tt;
        tt = be;
        try {
          return ne();
        } finally {
          tt = it;
        }
      }
      function ct(ne) {
        var be = tt;
        return function() {
          var it = tt;
          tt = be;
          try {
            return ne.apply(this, arguments);
          } finally {
            tt = it;
          }
        };
      }
      function Et(ne, be, it) {
        var Ut = X.unstable_now(), Ot;
        if (typeof it == "object" && it !== null) {
          var _n = it.delay;
          typeof _n == "number" && _n > 0 ? Ot = Ut + _n : Ot = Ut;
        } else
          Ot = Ut;
        var dn;
        switch (ne) {
          case We:
            dn = Ce;
            break;
          case te:
            dn = ft;
            break;
          case Ee:
            dn = yn;
            break;
          case ue:
            dn = wn;
            break;
          case Ue:
          default:
            dn = $e;
            break;
        }
        var pr = Ot + dn, Pt = {
          id: tn++,
          callback: be,
          priorityLevel: ne,
          startTime: Ot,
          expirationTime: pr,
          sortIndex: -1
        };
        return Ot > Ut ? (Pt.sortIndex = Ot, zt(St, Pt), Qe(Kt) === null && Pt === Qe(St) && (P ? ia() : P = !0, sn(De, Ot - Ut))) : (Pt.sortIndex = pr, zt(Kt, Pt), !nt && !wt && (nt = !0, gr(Ve))), Pt;
      }
      function Vt() {
      }
      function qn() {
        !nt && !wt && (nt = !0, gr(Ve));
      }
      function Fr() {
        return Qe(Kt);
      }
      function cr(ne) {
        ne.callback = null;
      }
      function gn() {
        return tt;
      }
      var Xn = !1, jn = null, xn = -1, On = ot, yr = -1;
      function fr() {
        var ne = X.unstable_now() - yr;
        return !(ne < On);
      }
      function Hn() {
      }
      function na(ne) {
        if (ne < 0 || ne > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ne > 0 ? On = Math.floor(1e3 / ne) : On = ot;
      }
      var ra = function() {
        if (jn !== null) {
          var ne = X.unstable_now();
          yr = ne;
          var be = !0, it = !0;
          try {
            it = jn(be, ne);
          } finally {
            it ? dr() : (Xn = !1, jn = null);
          }
        } else
          Xn = !1;
      }, dr;
      if (typeof b == "function")
        dr = function() {
          b(ra);
        };
      else if (typeof MessageChannel < "u") {
        var aa = new MessageChannel(), Kn = aa.port2;
        aa.port1.onmessage = ra, dr = function() {
          Kn.postMessage(null);
        };
      } else
        dr = function() {
          he(ra, 0);
        };
      function gr(ne) {
        jn = ne, Xn || (Xn = !0, dr());
      }
      function sn(ne, be) {
        xn = he(function() {
          ne(X.unstable_now());
        }, be);
      }
      function ia() {
        ie(xn), xn = -1;
      }
      var la = Hn, ua = null;
      X.unstable_IdlePriority = Ee, X.unstable_ImmediatePriority = We, X.unstable_LowPriority = ue, X.unstable_NormalPriority = Ue, X.unstable_Profiling = ua, X.unstable_UserBlockingPriority = te, X.unstable_cancelCallback = cr, X.unstable_continueExecution = qn, X.unstable_forceFrameRate = na, X.unstable_getCurrentPriorityLevel = gn, X.unstable_getFirstCallbackNode = Fr, X.unstable_next = ht, X.unstable_pauseExecution = Vt, X.unstable_requestPaint = la, X.unstable_runWithPriority = at, X.unstable_scheduleCallback = Et, X.unstable_shouldYield = fr, X.unstable_wrapCallback = ct, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(h0)), h0;
}
var lR;
function fR() {
  if (lR) return Bm.exports;
  lR = 1;
  var X = {};
  return X.NODE_ENV === "production" ? Bm.exports = uD() : Bm.exports = oD(), Bm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uR;
function sD() {
  if (uR) return Ia;
  uR = 1;
  var X = ev(), Z = fR();
  function A(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++) r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var et = /* @__PURE__ */ new Set(), ot = {};
  function zt(n, r) {
    Qe(n, r), Qe(n + "Capture", r);
  }
  function Qe(n, r) {
    for (ot[n] = r, n = 0; n < r.length; n++) et.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), st = Object.prototype.hasOwnProperty, ke = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ve = {}, We = {};
  function te(n) {
    return st.call(We, n) ? !0 : st.call(ve, n) ? !1 : ke.test(n) ? We[n] = !0 : (ve[n] = !0, !1);
  }
  function Ue(n, r, l, o) {
    if (l !== null && l.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ue(n, r, l, o) {
    if (r === null || typeof r > "u" || Ue(n, r, l, o)) return !0;
    if (o) return !1;
    if (l !== null) switch (l.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function Ee(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var pt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    pt[n] = new Ee(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    pt[r] = new Ee(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    pt[n] = new Ee(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    pt[n] = new Ee(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    pt[n] = new Ee(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    pt[n] = new Ee(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    pt[n] = new Ee(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    pt[n] = new Ee(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    pt[n] = new Ee(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Fn = /[\-:]([a-z])/g;
  function on(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Fn,
      on
    );
    pt[r] = new Ee(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Fn, on);
    pt[r] = new Ee(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Fn, on);
    pt[r] = new Ee(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    pt[n] = new Ee(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), pt.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    pt[n] = new Ee(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function rt(n, r, l, o) {
    var c = pt.hasOwnProperty(r) ? pt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ue(r, l, c, o) && (l = null), o || c === null ? te(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var je = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, kt = Symbol.for("react.element"), Ce = Symbol.for("react.portal"), ft = Symbol.for("react.fragment"), $e = Symbol.for("react.strict_mode"), wn = Symbol.for("react.profiler"), yn = Symbol.for("react.provider"), Kt = Symbol.for("react.context"), St = Symbol.for("react.forward_ref"), tn = Symbol.for("react.suspense"), He = Symbol.for("react.suspense_list"), tt = Symbol.for("react.memo"), wt = Symbol.for("react.lazy"), nt = Symbol.for("react.offscreen"), P = Symbol.iterator;
  function he(n) {
    return n === null || typeof n != "object" ? null : (n = P && n[P] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ie = Object.assign, b;
  function B(n) {
    if (b === void 0) try {
      throw Error();
    } catch (l) {
      var r = l.stack.trim().match(/\n( *(at )?)/);
      b = r && r[1] || "";
    }
    return `
` + b + n;
  }
  var De = !1;
  function Ve(n, r) {
    if (!n || De) return "";
    De = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (z) {
          var o = z;
        }
        Reflect.construct(n, [], r);
      } else {
        try {
          r.call();
        } catch (z) {
          o = z;
        }
        n.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; ) E--;
        for (; 1 <= m && 0 <= E; m--, E--) if (c[m] !== d[E]) {
          if (m !== 1 || E !== 1)
            do
              if (m--, E--, 0 > E || c[m] !== d[E]) {
                var T = `
` + c[m].replace(" at new ", " at ");
                return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
              }
            while (1 <= m && 0 <= E);
          break;
        }
      }
    } finally {
      De = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? B(n) : "";
  }
  function Ke(n) {
    switch (n.tag) {
      case 5:
        return B(n.type);
      case 16:
        return B("Lazy");
      case 13:
        return B("Suspense");
      case 19:
        return B("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Ve(n.type, !1), n;
      case 11:
        return n = Ve(n.type.render, !1), n;
      case 1:
        return n = Ve(n.type, !0), n;
      default:
        return "";
    }
  }
  function at(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case ft:
        return "Fragment";
      case Ce:
        return "Portal";
      case wn:
        return "Profiler";
      case $e:
        return "StrictMode";
      case tn:
        return "Suspense";
      case He:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case Kt:
        return (n.displayName || "Context") + ".Consumer";
      case yn:
        return (n._context.displayName || "Context") + ".Provider";
      case St:
        var r = n.render;
        return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case tt:
        return r = n.displayName || null, r !== null ? r : at(n.type) || "Memo";
      case wt:
        r = n._payload, n = n._init;
        try {
          return at(n(r));
        } catch {
        }
    }
    return null;
  }
  function ht(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return at(r);
      case 8:
        return r === $e ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function ct(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Et(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Vt(n) {
    var r = Et(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function qn(n) {
    n._valueTracker || (n._valueTracker = Vt(n));
  }
  function Fr(n) {
    if (!n) return !1;
    var r = n._valueTracker;
    if (!r) return !0;
    var l = r.getValue(), o = "";
    return n && (o = Et(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function cr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function gn(n, r) {
    var l = r.checked;
    return ie({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function Xn(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ct(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function jn(n, r) {
    r = r.checked, r != null && rt(n, "checked", r, !1);
  }
  function xn(n, r) {
    jn(n, r);
    var l = ct(r.value), o = r.type;
    if (l != null) o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? yr(n, r.type, l) : r.hasOwnProperty("defaultValue") && yr(n, r.type, ct(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function On(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function yr(n, r, l) {
    (r !== "number" || cr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var fr = Array.isArray;
  function Hn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++) r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++) c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ct(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function na(n, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(A(91));
    return ie({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ra(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null) throw Error(A(92));
        if (fr(l)) {
          if (1 < l.length) throw Error(A(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ct(l) };
  }
  function dr(n, r) {
    var l = ct(r.value), o = ct(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function aa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Kn(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function gr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Kn(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var sn, ia = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = r;
    else {
      for (sn = sn || document.createElement("div"), sn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = sn.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; r.firstChild; ) n.appendChild(r.firstChild);
    }
  });
  function la(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var ua = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ne = ["Webkit", "ms", "Moz", "O"];
  Object.keys(ua).forEach(function(n) {
    ne.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), ua[r] = ua[n];
    });
  });
  function be(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || ua.hasOwnProperty(n) && ua[n] ? ("" + r).trim() : r + "px";
  }
  function it(n, r) {
    n = n.style;
    for (var l in r) if (r.hasOwnProperty(l)) {
      var o = l.indexOf("--") === 0, c = be(l, r[l], o);
      l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
    }
  }
  var Ut = ie({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ot(n, r) {
    if (r) {
      if (Ut[n] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(A(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(A(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(A(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(A(62));
    }
  }
  function _n(n, r) {
    if (n.indexOf("-") === -1) return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var dn = null;
  function pr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Pt = null, $n = null, At = null;
  function Jt(n) {
    if (n = vi(n)) {
      if (typeof Pt != "function") throw Error(A(280));
      var r = n.stateNode;
      r && (r = _c(r), Pt(n.stateNode, n.type, r));
    }
  }
  function Wa(n) {
    $n ? At ? At.push(n) : At = [n] : $n = n;
  }
  function _a() {
    if ($n) {
      var n = $n, r = At;
      if (At = $n = null, Jt(n), r) for (n = 0; n < r.length; n++) Jt(r[n]);
    }
  }
  function vl(n, r) {
    return n(r);
  }
  function tu() {
  }
  var nu = !1;
  function hl(n, r, l) {
    if (nu) return n(r, l);
    nu = !0;
    try {
      return vl(n, r, l);
    } finally {
      nu = !1, ($n !== null || At !== null) && (tu(), _a());
    }
  }
  function Ga(n, r) {
    var l = n.stateNode;
    if (l === null) return null;
    var o = _c(l);
    if (o === null) return null;
    l = o[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (l && typeof l != "function") throw Error(A(231, r, typeof l));
    return l;
  }
  var qa = !1;
  if (S) try {
    var ba = {};
    Object.defineProperty(ba, "passive", { get: function() {
      qa = !0;
    } }), window.addEventListener("test", ba, ba), window.removeEventListener("test", ba, ba);
  } catch {
    qa = !1;
  }
  function Mi(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch (Q) {
      this.onError(Q);
    }
  }
  var Sr = !1, jr = null, oa = !1, Ni = null, ml = { onError: function(n) {
    Sr = !0, jr = n;
  } };
  function R(n, r, l, o, c, d, m, E, T) {
    Sr = !1, jr = null, Mi.apply(ml, arguments);
  }
  function I(n, r, l, o, c, d, m, E, T) {
    if (R.apply(this, arguments), Sr) {
      if (Sr) {
        var z = jr;
        Sr = !1, jr = null;
      } else throw Error(A(198));
      oa || (oa = !0, Ni = z);
    }
  }
  function W(n) {
    var r = n, l = n;
    if (n.alternate) for (; r.return; ) r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Le(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function dt(n) {
    if (W(n) !== n) throw Error(A(188));
  }
  function Ct(n) {
    var r = n.alternate;
    if (!r) {
      if (r = W(n), r === null) throw Error(A(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l) return dt(c), n;
          if (d === o) return dt(c), r;
          d = d.sibling;
        }
        throw Error(A(188));
      }
      if (l.return !== o.return) l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m) throw Error(A(189));
        }
      }
      if (l.alternate !== o) throw Error(A(190));
    }
    if (l.tag !== 3) throw Error(A(188));
    return l.stateNode.current === l ? n : r;
  }
  function ze(n) {
    return n = Ct(n), n !== null ? lt(n) : null;
  }
  function lt(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var r = lt(n);
      if (r !== null) return r;
      n = n.sibling;
    }
    return null;
  }
  var Ln = Z.unstable_scheduleCallback, Wt = Z.unstable_cancelCallback, cn = Z.unstable_shouldYield, vr = Z.unstable_requestPaint, Ft = Z.unstable_now, Da = Z.unstable_getCurrentPriorityLevel, Mn = Z.unstable_ImmediatePriority, Hr = Z.unstable_UserBlockingPriority, Je = Z.unstable_NormalPriority, zi = Z.unstable_LowPriority, Ui = Z.unstable_IdlePriority, yl = null, Vr = null;
  function qo(n) {
    if (Vr && typeof Vr.onCommitFiberRoot == "function") try {
      Vr.onCommitFiberRoot(yl, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var Er = Math.clz32 ? Math.clz32 : Jo, Xo = Math.log, Ko = Math.LN2;
  function Jo(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Xo(n) / Ko | 0) | 0;
  }
  var ru = 64, Iu = 4194304;
  function Ai(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ci(n, r) {
    var l = n.pendingLanes;
    if (l === 0) return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = Ai(E) : (d &= m, d !== 0 && (o = Ai(d)));
    } else m = l & ~c, m !== 0 ? o = Ai(m) : d !== 0 && (o = Ai(d));
    if (o === 0) return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0)) return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0) for (n = n.entanglements, r &= o; 0 < r; ) l = 31 - Er(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function ka(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function gl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - Er(d), E = 1 << m, T = c[m];
      T === -1 ? (!(E & l) || E & o) && (c[m] = ka(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function fi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function au() {
    var n = ru;
    return ru <<= 1, !(ru & 4194240) && (ru = 64), n;
  }
  function iu(n) {
    for (var r = [], l = 0; 31 > l; l++) r.push(n);
    return r;
  }
  function Sl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Er(r), n[r] = l;
  }
  function Zo(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - Er(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function es(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - Er(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var mt = 0;
  function ts(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Qu, El, ns, yt, Wu, lu = !1, Ye = [], Xa = null, pn = null, Pr = null, Oa = /* @__PURE__ */ new Map(), Cl = /* @__PURE__ */ new Map(), nn = [], vn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function rs(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Xa = null;
        break;
      case "dragenter":
      case "dragleave":
        pn = null;
        break;
      case "mouseover":
      case "mouseout":
        Pr = null;
        break;
      case "pointerover":
      case "pointerout":
        Oa.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cl.delete(r.pointerId);
    }
  }
  function Jn(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = vi(r), r !== null && El(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Br(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Xa = Jn(Xa, n, r, l, o, c), !0;
      case "dragenter":
        return pn = Jn(pn, n, r, l, o, c), !0;
      case "mouseover":
        return Pr = Jn(Pr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Oa.set(d, Jn(Oa.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Cl.set(d, Jn(Cl.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Ka(n) {
    var r = Wi(n.target);
    if (r !== null) {
      var l = W(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Le(l), r !== null) {
            n.blockedOn = r, Wu(n.priority, function() {
              ns(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Gu(n) {
    if (n.blockedOn !== null) return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Xu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        dn = o, l.target.dispatchEvent(o), dn = null;
      } else return r = vi(l), r !== null && El(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function uu(n, r, l) {
    Gu(n) && l.delete(r);
  }
  function ou() {
    lu = !1, Xa !== null && Gu(Xa) && (Xa = null), pn !== null && Gu(pn) && (pn = null), Pr !== null && Gu(Pr) && (Pr = null), Oa.forEach(uu), Cl.forEach(uu);
  }
  function Rl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, lu || (lu = !0, Z.unstable_scheduleCallback(Z.unstable_NormalPriority, ou)));
  }
  function La(n) {
    function r(c) {
      return Rl(c, n);
    }
    if (0 < Ye.length) {
      Rl(Ye[0], n);
      for (var l = 1; l < Ye.length; l++) {
        var o = Ye[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Xa !== null && Rl(Xa, n), pn !== null && Rl(pn, n), Pr !== null && Rl(Pr, n), Oa.forEach(r), Cl.forEach(r), l = 0; l < nn.length; l++) o = nn[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < nn.length && (l = nn[0], l.blockedOn === null); ) Ka(l), l.blockedOn === null && nn.shift();
  }
  var Fi = je.ReactCurrentBatchConfig, su = !0;
  function ji(n, r, l, o) {
    var c = mt, d = Fi.transition;
    Fi.transition = null;
    try {
      mt = 1, di(n, r, l, o);
    } finally {
      mt = c, Fi.transition = d;
    }
  }
  function qu(n, r, l, o) {
    var c = mt, d = Fi.transition;
    Fi.transition = null;
    try {
      mt = 4, di(n, r, l, o);
    } finally {
      mt = c, Fi.transition = d;
    }
  }
  function di(n, r, l, o) {
    if (su) {
      var c = Xu(n, r, l, o);
      if (c === null) Zf(n, r, o, Hi, l), rs(n, o);
      else if (Br(c, n, r, l, o)) o.stopPropagation();
      else if (rs(n, o), r & 4 && -1 < vn.indexOf(n)) {
        for (; c !== null; ) {
          var d = vi(c);
          if (d !== null && Qu(d), d = Xu(n, r, l, o), d === null && Zf(n, r, o, Hi, l), d === c) break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else Zf(n, r, o, null, l);
    }
  }
  var Hi = null;
  function Xu(n, r, l, o) {
    if (Hi = null, n = pr(o), n = Wi(n), n !== null) if (r = W(n), r === null) n = null;
    else if (l = r.tag, l === 13) {
      if (n = Le(r), n !== null) return n;
      n = null;
    } else if (l === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      n = null;
    } else r !== n && (n = null);
    return Hi = n, null;
  }
  function as(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Da()) {
          case Mn:
            return 1;
          case Hr:
            return 4;
          case Je:
          case zi:
            return 16;
          case Ui:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ja = null, Ku = null, h = null;
  function C() {
    if (h) return h;
    var n, r = Ku, l = r.length, o, c = "value" in Ja ? Ja.value : Ja.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++) ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++) ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function M(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function F() {
    return !0;
  }
  function K() {
    return !1;
  }
  function ge(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n) n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? F : K, this.isPropagationStopped = K, this;
    }
    return ie(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = F);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = F);
    }, persist: function() {
    }, isPersistent: F }), r;
  }
  var fe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Pe = ge(fe), ut = ie({}, fe, { view: 0, detail: 0 }), jt = ge(ut), Bt, $t, Yt, rn = ie({}, ut, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: mc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Yt && (Yt && n.type === "mousemove" ? (Bt = n.screenX - Yt.screenX, $t = n.screenY - Yt.screenY) : $t = Bt = 0, Yt = n), Bt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : $t;
  } }), xt = ge(rn), Tl = ie({}, rn, { dataTransfer: 0 }), Ju = ge(Tl), is = ie({}, ut, { relatedTarget: 0 }), ls = ge(is), Vi = ie({}, fe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), us = ge(Vi), os = ie({}, fe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Pf = ge(os), $m = ie({}, fe, { data: 0 }), tv = ge($m), nv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Bf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, rv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function av(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = rv[n]) ? !!r[n] : !1;
  }
  function mc() {
    return av;
  }
  var Ym = ie({}, ut, { key: function(n) {
    if (n.key) {
      var r = nv[n.key] || n.key;
      if (r !== "Unidentified") return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Bf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: mc, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Pi = ge(Ym), Im = ie({}, rn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), yc = ge(Im), $f = ie({}, ut, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: mc }), Yf = ge($f), Qm = ie({}, fe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), gc = ge(Qm), iv = ie({}, rn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), $r = ge(iv), Bi = [9, 13, 27, 32], Sn = S && "CompositionEvent" in window, sa = null;
  S && "documentMode" in document && (sa = document.documentMode);
  var If = S && "TextEvent" in window && !sa, ss = S && (!Sn || sa && 8 < sa && 11 >= sa), lv = " ", Zu = !1;
  function uv(n, r) {
    switch (n) {
      case "keyup":
        return Bi.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ov(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var wl = !1;
  function Wm(n, r) {
    switch (n) {
      case "compositionend":
        return ov(r);
      case "keypress":
        return r.which !== 32 ? null : (Zu = !0, lv);
      case "textInput":
        return n = r.data, n === lv && Zu ? null : n;
      default:
        return null;
    }
  }
  function Gm(n, r) {
    if (wl) return n === "compositionend" || !Sn && uv(n, r) ? (n = C(), h = Ku = Ja = null, wl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return ss && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var qm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Qf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!qm[n.type] : r === "textarea";
  }
  function sv(n, r, l, o) {
    Wa(o), r = wc(r, "onChange"), 0 < r.length && (l = new Pe("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var cs = null, fs = null;
  function cv(n) {
    _v(n, 0);
  }
  function $i(n) {
    var r = ro(n);
    if (Fr(r)) return n;
  }
  function Wf(n, r) {
    if (n === "change") return r;
  }
  var Gf = !1;
  if (S) {
    var Sc;
    if (S) {
      var qf = "oninput" in document;
      if (!qf) {
        var fv = document.createElement("div");
        fv.setAttribute("oninput", "return;"), qf = typeof fv.oninput == "function";
      }
      Sc = qf;
    } else Sc = !1;
    Gf = Sc && (!document.documentMode || 9 < document.documentMode);
  }
  function dv() {
    cs && (cs.detachEvent("onpropertychange", pv), fs = cs = null);
  }
  function pv(n) {
    if (n.propertyName === "value" && $i(fs)) {
      var r = [];
      sv(r, fs, n, pr(n)), hl(cv, r);
    }
  }
  function Xm(n, r, l) {
    n === "focusin" ? (dv(), cs = r, fs = l, cs.attachEvent("onpropertychange", pv)) : n === "focusout" && dv();
  }
  function Km(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return $i(fs);
  }
  function Jm(n, r) {
    if (n === "click") return $i(r);
  }
  function Zm(n, r) {
    if (n === "input" || n === "change") return $i(r);
  }
  function vv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var Za = typeof Object.is == "function" ? Object.is : vv;
  function eo(n, r) {
    if (Za(n, r)) return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null) return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length) return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!st.call(r, c) || !Za(n[c], r[c])) return !1;
    }
    return !0;
  }
  function hv(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function mv(n, r) {
    var l = hv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r) return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = hv(l);
    }
  }
  function yv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? yv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function gv() {
    for (var n = window, r = cr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) n = r.contentWindow;
      else break;
      r = cr(n.document);
    }
    return r;
  }
  function ds(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function cu(n) {
    var r = gv(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && yv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ds(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l) l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = mv(l, d);
          var m = mv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; ) n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++) n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Ec = S && "documentMode" in document && 11 >= document.documentMode, fu = null, xl = null, ps = null, Xf = !1;
  function Sv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Xf || fu == null || fu !== cr(o) || (o = fu, "selectionStart" in o && ds(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), ps && eo(ps, o) || (ps = o, o = wc(xl, "onSelect"), 0 < o.length && (r = new Pe("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = fu)));
  }
  function Cc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var to = { animationend: Cc("Animation", "AnimationEnd"), animationiteration: Cc("Animation", "AnimationIteration"), animationstart: Cc("Animation", "AnimationStart"), transitionend: Cc("Transition", "TransitionEnd") }, Rc = {}, Ev = {};
  S && (Ev = document.createElement("div").style, "AnimationEvent" in window || (delete to.animationend.animation, delete to.animationiteration.animation, delete to.animationstart.animation), "TransitionEvent" in window || delete to.transitionend.transition);
  function vs(n) {
    if (Rc[n]) return Rc[n];
    if (!to[n]) return n;
    var r = to[n], l;
    for (l in r) if (r.hasOwnProperty(l) && l in Ev) return Rc[n] = r[l];
    return n;
  }
  var hr = vs("animationend"), Kf = vs("animationiteration"), Cv = vs("animationstart"), Rv = vs("transitionend"), Tv = /* @__PURE__ */ new Map(), wv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function _l(n, r) {
    Tv.set(n, r), zt(r, [n]);
  }
  for (var Tc = 0; Tc < wv.length; Tc++) {
    var hs = wv[Tc], ms = hs.toLowerCase(), ey = hs[0].toUpperCase() + hs.slice(1);
    _l(ms, "on" + ey);
  }
  _l(hr, "onAnimationEnd"), _l(Kf, "onAnimationIteration"), _l(Cv, "onAnimationStart"), _l("dblclick", "onDoubleClick"), _l("focusin", "onFocus"), _l("focusout", "onBlur"), _l(Rv, "onTransitionEnd"), Qe("onMouseEnter", ["mouseout", "mouseover"]), Qe("onMouseLeave", ["mouseout", "mouseover"]), Qe("onPointerEnter", ["pointerout", "pointerover"]), Qe("onPointerLeave", ["pointerout", "pointerover"]), zt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), zt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), zt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), zt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), zt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), zt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Yi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ty = new Set("cancel close invalid load scroll toggle".split(" ").concat(Yi));
  function xv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, I(o, r, void 0, n), n.currentTarget = null;
  }
  function _v(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r) for (var m = o.length - 1; 0 <= m; m--) {
          var E = o[m], T = E.instance, z = E.currentTarget;
          if (E = E.listener, T !== d && c.isPropagationStopped()) break e;
          xv(c, E, z), d = T;
        }
        else for (m = 0; m < o.length; m++) {
          if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped()) break e;
          xv(c, E, z), d = T;
        }
      }
    }
    if (oa) throw n = Ni, oa = !1, Ni = null, n;
  }
  function Gt(n, r) {
    var l = r[ud];
    l === void 0 && (l = r[ud] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Jf(r, n, 2, !1), l.add(o));
  }
  function ys(n, r, l) {
    var o = 0;
    r && (o |= 4), Jf(l, n, o, r);
  }
  var Ii = "_reactListening" + Math.random().toString(36).slice(2);
  function pi(n) {
    if (!n[Ii]) {
      n[Ii] = !0, et.forEach(function(l) {
        l !== "selectionchange" && (ty.has(l) || ys(l, !1, n), ys(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ii] || (r[Ii] = !0, ys("selectionchange", !1, r));
    }
  }
  function Jf(n, r, l, o) {
    switch (as(r)) {
      case 1:
        var c = ji;
        break;
      case 4:
        c = qu;
        break;
      default:
        c = di;
    }
    l = c.bind(null, r, l, n), c = void 0, !qa || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function Zf(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null) e: for (; ; ) {
      if (o === null) return;
      var m = o.tag;
      if (m === 3 || m === 4) {
        var E = o.stateNode.containerInfo;
        if (E === c || E.nodeType === 8 && E.parentNode === c) break;
        if (m === 4) for (m = o.return; m !== null; ) {
          var T = m.tag;
          if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c)) return;
          m = m.return;
        }
        for (; E !== null; ) {
          if (m = Wi(E), m === null) return;
          if (T = m.tag, T === 5 || T === 6) {
            o = d = m;
            continue e;
          }
          E = E.parentNode;
        }
      }
      o = o.return;
    }
    hl(function() {
      var z = d, Q = pr(l), G = [];
      e: {
        var Y = Tv.get(n);
        if (Y !== void 0) {
          var se = Pe, me = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0) break e;
            case "keydown":
            case "keyup":
              se = Pi;
              break;
            case "focusin":
              me = "focus", se = ls;
              break;
            case "focusout":
              me = "blur", se = ls;
              break;
            case "beforeblur":
            case "afterblur":
              se = ls;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              se = xt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              se = Ju;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              se = Yf;
              break;
            case hr:
            case Kf:
            case Cv:
              se = us;
              break;
            case Rv:
              se = gc;
              break;
            case "scroll":
              se = jt;
              break;
            case "wheel":
              se = $r;
              break;
            case "copy":
            case "cut":
            case "paste":
              se = Pf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              se = yc;
          }
          var Se = (r & 4) !== 0, Dn = !Se && n === "scroll", D = Se ? Y !== null ? Y + "Capture" : null : Y;
          Se = [];
          for (var x = z, L; x !== null; ) {
            L = x;
            var J = L.stateNode;
            if (L.tag === 5 && J !== null && (L = J, D !== null && (J = Ga(x, D), J != null && Se.push(no(x, J, L)))), Dn) break;
            x = x.return;
          }
          0 < Se.length && (Y = new se(Y, me, null, l, Q), G.push({ event: Y, listeners: Se }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (Y = n === "mouseover" || n === "pointerover", se = n === "mouseout" || n === "pointerout", Y && l !== dn && (me = l.relatedTarget || l.fromElement) && (Wi(me) || me[ei])) break e;
          if ((se || Y) && (Y = Q.window === Q ? Q : (Y = Q.ownerDocument) ? Y.defaultView || Y.parentWindow : window, se ? (me = l.relatedTarget || l.toElement, se = z, me = me ? Wi(me) : null, me !== null && (Dn = W(me), me !== Dn || me.tag !== 5 && me.tag !== 6) && (me = null)) : (se = null, me = z), se !== me)) {
            if (Se = xt, J = "onMouseLeave", D = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (Se = yc, J = "onPointerLeave", D = "onPointerEnter", x = "pointer"), Dn = se == null ? Y : ro(se), L = me == null ? Y : ro(me), Y = new Se(J, x + "leave", se, l, Q), Y.target = Dn, Y.relatedTarget = L, J = null, Wi(Q) === z && (Se = new Se(D, x + "enter", me, l, Q), Se.target = L, Se.relatedTarget = Dn, J = Se), Dn = J, se && me) t: {
              for (Se = se, D = me, x = 0, L = Se; L; L = du(L)) x++;
              for (L = 0, J = D; J; J = du(J)) L++;
              for (; 0 < x - L; ) Se = du(Se), x--;
              for (; 0 < L - x; ) D = du(D), L--;
              for (; x--; ) {
                if (Se === D || D !== null && Se === D.alternate) break t;
                Se = du(Se), D = du(D);
              }
              Se = null;
            }
            else Se = null;
            se !== null && ed(G, Y, se, Se, !1), me !== null && Dn !== null && ed(G, Dn, me, Se, !0);
          }
        }
        e: {
          if (Y = z ? ro(z) : window, se = Y.nodeName && Y.nodeName.toLowerCase(), se === "select" || se === "input" && Y.type === "file") var Te = Wf;
          else if (Qf(Y)) if (Gf) Te = Zm;
          else {
            Te = Km;
            var Ae = Xm;
          }
          else (se = Y.nodeName) && se.toLowerCase() === "input" && (Y.type === "checkbox" || Y.type === "radio") && (Te = Jm);
          if (Te && (Te = Te(n, z))) {
            sv(G, Te, l, Q);
            break e;
          }
          Ae && Ae(n, Y, z), n === "focusout" && (Ae = Y._wrapperState) && Ae.controlled && Y.type === "number" && yr(Y, "number", Y.value);
        }
        switch (Ae = z ? ro(z) : window, n) {
          case "focusin":
            (Qf(Ae) || Ae.contentEditable === "true") && (fu = Ae, xl = z, ps = null);
            break;
          case "focusout":
            ps = xl = fu = null;
            break;
          case "mousedown":
            Xf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xf = !1, Sv(G, l, Q);
            break;
          case "selectionchange":
            if (Ec) break;
          case "keydown":
          case "keyup":
            Sv(G, l, Q);
        }
        var Fe;
        if (Sn) e: {
          switch (n) {
            case "compositionstart":
              var xe = "onCompositionStart";
              break e;
            case "compositionend":
              xe = "onCompositionEnd";
              break e;
            case "compositionupdate":
              xe = "onCompositionUpdate";
              break e;
          }
          xe = void 0;
        }
        else wl ? uv(n, l) && (xe = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (xe = "onCompositionStart");
        xe && (ss && l.locale !== "ko" && (wl || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && wl && (Fe = C()) : (Ja = Q, Ku = "value" in Ja ? Ja.value : Ja.textContent, wl = !0)), Ae = wc(z, xe), 0 < Ae.length && (xe = new tv(xe, n, null, l, Q), G.push({ event: xe, listeners: Ae }), Fe ? xe.data = Fe : (Fe = ov(l), Fe !== null && (xe.data = Fe)))), (Fe = If ? Wm(n, l) : Gm(n, l)) && (z = wc(z, "onBeforeInput"), 0 < z.length && (Q = new tv("onBeforeInput", "beforeinput", null, l, Q), G.push({ event: Q, listeners: z }), Q.data = Fe));
      }
      _v(G, r);
    });
  }
  function no(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function wc(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Ga(n, l), d != null && o.unshift(no(n, d, c)), d = Ga(n, r), d != null && o.push(no(n, d, c))), n = n.return;
    }
    return o;
  }
  function du(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ed(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o) break;
      E.tag === 5 && z !== null && (E = z, c ? (T = Ga(l, d), T != null && m.unshift(no(l, T, E))) : c || (T = Ga(l, d), T != null && m.push(no(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var bv = /\r\n?/g, td = /\u0000|\uFFFD/g;
  function Dv(n) {
    return (typeof n == "string" ? n : "" + n).replace(bv, `
`).replace(td, "");
  }
  function gs(n, r, l) {
    if (r = Dv(r), Dv(n) !== r && l) throw Error(A(425));
  }
  function xc() {
  }
  var nd = null, rd = null;
  function pu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ss = typeof setTimeout == "function" ? setTimeout : void 0, Es = typeof clearTimeout == "function" ? clearTimeout : void 0, ad = typeof Promise == "function" ? Promise : void 0, kv = typeof queueMicrotask == "function" ? queueMicrotask : typeof ad < "u" ? function(n) {
    return ad.resolve(null).then(n).catch(id);
  } : Ss;
  function id(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ld(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8) if (l = c.data, l === "/$") {
        if (o === 0) {
          n.removeChild(c), La(r);
          return;
        }
        o--;
      } else l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    La(r);
  }
  function ca(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return n;
  }
  function Cs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0) return n;
          r--;
        } else l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Qi = Math.random().toString(36).slice(2), Ma = "__reactFiber$" + Qi, Rs = "__reactProps$" + Qi, ei = "__reactContainer$" + Qi, ud = "__reactEvents$" + Qi, ny = "__reactListeners$" + Qi, ry = "__reactHandles$" + Qi;
  function Wi(n) {
    var r = n[Ma];
    if (r) return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ei] || l[Ma]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null) for (n = Cs(n); n !== null; ) {
          if (l = n[Ma]) return l;
          n = Cs(n);
        }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function vi(n) {
    return n = n[Ma] || n[ei], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function ro(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(A(33));
  }
  function _c(n) {
    return n[Rs] || null;
  }
  var Me = [], ti = -1;
  function qt(n) {
    return { current: n };
  }
  function Re(n) {
    0 > ti || (n.current = Me[ti], Me[ti] = null, ti--);
  }
  function Lt(n, r) {
    ti++, Me[ti] = n.current, n.current = r;
  }
  var Na = {}, Yn = qt(Na), Ge = qt(!1), Cr = Na;
  function fa(n, r) {
    var l = n.type.contextTypes;
    if (!l) return Na;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r) return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l) c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Nn(n) {
    return n = n.childContextTypes, n != null;
  }
  function Yr() {
    Re(Ge), Re(Yn);
  }
  function hi(n, r, l) {
    if (Yn.current !== Na) throw Error(A(168));
    Lt(Yn, r), Lt(Ge, l);
  }
  function bl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function") return l;
    o = o.getChildContext();
    for (var c in o) if (!(c in r)) throw Error(A(108, ht(n) || "Unknown", c));
    return ie({}, l, o);
  }
  function vu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Na, Cr = Yn.current, Lt(Yn, n), Lt(Ge, Ge.current), !0;
  }
  function Ov(n, r, l) {
    var o = n.stateNode;
    if (!o) throw Error(A(169));
    l ? (n = bl(n, r, Cr), o.__reactInternalMemoizedMergedChildContext = n, Re(Ge), Re(Yn), Lt(Yn, n)) : Re(Ge), Lt(Ge, l);
  }
  var Gi = null, Dl = !1, Zn = !1;
  function bc(n) {
    Gi === null ? Gi = [n] : Gi.push(n);
  }
  function Lv(n) {
    Dl = !0, bc(n);
  }
  function mi() {
    if (!Zn && Gi !== null) {
      Zn = !0;
      var n = 0, r = mt;
      try {
        var l = Gi;
        for (mt = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Gi = null, Dl = !1;
      } catch (c) {
        throw Gi !== null && (Gi = Gi.slice(n + 1)), Ln(Mn, mi), c;
      } finally {
        mt = r, Zn = !1;
      }
    }
    return null;
  }
  var za = [], kl = 0, Ua = null, hu = 0, Ir = [], Qr = 0, ni = null, Wr = 1, er = "";
  function mu(n, r) {
    za[kl++] = hu, za[kl++] = Ua, Ua = n, hu = r;
  }
  function Ol(n, r, l) {
    Ir[Qr++] = Wr, Ir[Qr++] = er, Ir[Qr++] = ni, ni = n;
    var o = Wr;
    n = er;
    var c = 32 - Er(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - Er(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Wr = 1 << 32 - Er(r) + c | l << c | o, er = d + n;
    } else Wr = 1 << d | l << c | o, er = n;
  }
  function Dc(n) {
    n.return !== null && (mu(n, 1), Ol(n, 1, 0));
  }
  function kc(n) {
    for (; n === Ua; ) Ua = za[--kl], za[kl] = null, hu = za[--kl], za[kl] = null;
    for (; n === ni; ) ni = Ir[--Qr], Ir[Qr] = null, er = Ir[--Qr], Ir[Qr] = null, Wr = Ir[--Qr], Ir[Qr] = null;
  }
  var da = null, pa = null, an = !1, Aa = null;
  function od(n, r) {
    var l = Ea(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function sd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, da = n, pa = ca(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, da = n, pa = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ni !== null ? { id: Wr, overflow: er } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Ea(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, da = n, pa = null, !0) : !1;
      default:
        return !1;
    }
  }
  function cd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Oc(n) {
    if (an) {
      var r = pa;
      if (r) {
        var l = r;
        if (!sd(n, r)) {
          if (cd(n)) throw Error(A(418));
          r = ca(l.nextSibling);
          var o = da;
          r && sd(n, r) ? od(o, l) : (n.flags = n.flags & -4097 | 2, an = !1, da = n);
        }
      } else {
        if (cd(n)) throw Error(A(418));
        n.flags = n.flags & -4097 | 2, an = !1, da = n;
      }
    }
  }
  function fd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    da = n;
  }
  function Lc(n) {
    if (n !== da) return !1;
    if (!an) return fd(n), an = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !pu(n.type, n.memoizedProps)), r && (r = pa)) {
      if (cd(n)) throw Mv(), Error(A(418));
      for (; r; ) od(n, r), r = ca(r.nextSibling);
    }
    if (fd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(A(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                pa = ca(n.nextSibling);
                break e;
              }
              r--;
            } else l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        pa = null;
      }
    } else pa = da ? ca(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Mv() {
    for (var n = pa; n; ) n = ca(n.nextSibling);
  }
  function ao() {
    pa = da = null, an = !1;
  }
  function zn(n) {
    Aa === null ? Aa = [n] : Aa.push(n);
  }
  var ay = je.ReactCurrentBatchConfig;
  function Ll(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1) throw Error(A(309));
          var o = l.stateNode;
        }
        if (!o) throw Error(A(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string") throw Error(A(284));
      if (!l._owner) throw Error(A(290, n));
    }
    return n;
  }
  function io(n, r) {
    throw n = Object.prototype.toString.call(r), Error(A(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Ml(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Nv(n) {
    function r(D, x) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [x], D.flags |= 16) : L.push(x);
      }
    }
    function l(D, x) {
      if (!n) return null;
      for (; x !== null; ) r(D, x), x = x.sibling;
      return null;
    }
    function o(D, x) {
      for (D = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? D.set(x.key, x) : D.set(x.index, x), x = x.sibling;
      return D;
    }
    function c(D, x) {
      return D = $l(D, x), D.index = 0, D.sibling = null, D;
    }
    function d(D, x, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < x ? (D.flags |= 2, x) : L) : (D.flags |= 2, x)) : (D.flags |= 1048576, x);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, x, L, J) {
      return x === null || x.tag !== 6 ? (x = Id(L, D.mode, J), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function T(D, x, L, J) {
      var Te = L.type;
      return Te === ft ? Q(D, x, L.props.children, J, L.key) : x !== null && (x.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === wt && Ml(Te) === x.type) ? (J = c(x, L.props), J.ref = Ll(D, x, L), J.return = D, J) : (J = nf(L.type, L.key, L.props, null, D.mode, J), J.ref = Ll(D, x, L), J.return = D, J);
    }
    function z(D, x, L, J) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = af(L, D.mode, J), x.return = D, x) : (x = c(x, L.children || []), x.return = D, x);
    }
    function Q(D, x, L, J, Te) {
      return x === null || x.tag !== 7 ? (x = Lu(L, D.mode, J, Te), x.return = D, x) : (x = c(x, L), x.return = D, x);
    }
    function G(D, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Id("" + x, D.mode, L), x.return = D, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case kt:
            return L = nf(x.type, x.key, x.props, null, D.mode, L), L.ref = Ll(D, null, x), L.return = D, L;
          case Ce:
            return x = af(x, D.mode, L), x.return = D, x;
          case wt:
            var J = x._init;
            return G(D, J(x._payload), L);
        }
        if (fr(x) || he(x)) return x = Lu(x, D.mode, L, null), x.return = D, x;
        io(D, x);
      }
      return null;
    }
    function Y(D, x, L, J) {
      var Te = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return Te !== null ? null : E(D, x, "" + L, J);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case kt:
            return L.key === Te ? T(D, x, L, J) : null;
          case Ce:
            return L.key === Te ? z(D, x, L, J) : null;
          case wt:
            return Te = L._init, Y(
              D,
              x,
              Te(L._payload),
              J
            );
        }
        if (fr(L) || he(L)) return Te !== null ? null : Q(D, x, L, J, null);
        io(D, L);
      }
      return null;
    }
    function se(D, x, L, J, Te) {
      if (typeof J == "string" && J !== "" || typeof J == "number") return D = D.get(L) || null, E(x, D, "" + J, Te);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case kt:
            return D = D.get(J.key === null ? L : J.key) || null, T(x, D, J, Te);
          case Ce:
            return D = D.get(J.key === null ? L : J.key) || null, z(x, D, J, Te);
          case wt:
            var Ae = J._init;
            return se(D, x, L, Ae(J._payload), Te);
        }
        if (fr(J) || he(J)) return D = D.get(L) || null, Q(x, D, J, Te, null);
        io(x, J);
      }
      return null;
    }
    function me(D, x, L, J) {
      for (var Te = null, Ae = null, Fe = x, xe = x = 0, Tn = null; Fe !== null && xe < L.length; xe++) {
        Fe.index > xe ? (Tn = Fe, Fe = null) : Tn = Fe.sibling;
        var Dt = Y(D, Fe, L[xe], J);
        if (Dt === null) {
          Fe === null && (Fe = Tn);
          break;
        }
        n && Fe && Dt.alternate === null && r(D, Fe), x = d(Dt, x, xe), Ae === null ? Te = Dt : Ae.sibling = Dt, Ae = Dt, Fe = Tn;
      }
      if (xe === L.length) return l(D, Fe), an && mu(D, xe), Te;
      if (Fe === null) {
        for (; xe < L.length; xe++) Fe = G(D, L[xe], J), Fe !== null && (x = d(Fe, x, xe), Ae === null ? Te = Fe : Ae.sibling = Fe, Ae = Fe);
        return an && mu(D, xe), Te;
      }
      for (Fe = o(D, Fe); xe < L.length; xe++) Tn = se(Fe, D, xe, L[xe], J), Tn !== null && (n && Tn.alternate !== null && Fe.delete(Tn.key === null ? xe : Tn.key), x = d(Tn, x, xe), Ae === null ? Te = Tn : Ae.sibling = Tn, Ae = Tn);
      return n && Fe.forEach(function(Yl) {
        return r(D, Yl);
      }), an && mu(D, xe), Te;
    }
    function Se(D, x, L, J) {
      var Te = he(L);
      if (typeof Te != "function") throw Error(A(150));
      if (L = Te.call(L), L == null) throw Error(A(151));
      for (var Ae = Te = null, Fe = x, xe = x = 0, Tn = null, Dt = L.next(); Fe !== null && !Dt.done; xe++, Dt = L.next()) {
        Fe.index > xe ? (Tn = Fe, Fe = null) : Tn = Fe.sibling;
        var Yl = Y(D, Fe, Dt.value, J);
        if (Yl === null) {
          Fe === null && (Fe = Tn);
          break;
        }
        n && Fe && Yl.alternate === null && r(D, Fe), x = d(Yl, x, xe), Ae === null ? Te = Yl : Ae.sibling = Yl, Ae = Yl, Fe = Tn;
      }
      if (Dt.done) return l(
        D,
        Fe
      ), an && mu(D, xe), Te;
      if (Fe === null) {
        for (; !Dt.done; xe++, Dt = L.next()) Dt = G(D, Dt.value, J), Dt !== null && (x = d(Dt, x, xe), Ae === null ? Te = Dt : Ae.sibling = Dt, Ae = Dt);
        return an && mu(D, xe), Te;
      }
      for (Fe = o(D, Fe); !Dt.done; xe++, Dt = L.next()) Dt = se(Fe, D, xe, Dt.value, J), Dt !== null && (n && Dt.alternate !== null && Fe.delete(Dt.key === null ? xe : Dt.key), x = d(Dt, x, xe), Ae === null ? Te = Dt : Ae.sibling = Dt, Ae = Dt);
      return n && Fe.forEach(function(oh) {
        return r(D, oh);
      }), an && mu(D, xe), Te;
    }
    function Dn(D, x, L, J) {
      if (typeof L == "object" && L !== null && L.type === ft && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case kt:
            e: {
              for (var Te = L.key, Ae = x; Ae !== null; ) {
                if (Ae.key === Te) {
                  if (Te = L.type, Te === ft) {
                    if (Ae.tag === 7) {
                      l(D, Ae.sibling), x = c(Ae, L.props.children), x.return = D, D = x;
                      break e;
                    }
                  } else if (Ae.elementType === Te || typeof Te == "object" && Te !== null && Te.$$typeof === wt && Ml(Te) === Ae.type) {
                    l(D, Ae.sibling), x = c(Ae, L.props), x.ref = Ll(D, Ae, L), x.return = D, D = x;
                    break e;
                  }
                  l(D, Ae);
                  break;
                } else r(D, Ae);
                Ae = Ae.sibling;
              }
              L.type === ft ? (x = Lu(L.props.children, D.mode, J, L.key), x.return = D, D = x) : (J = nf(L.type, L.key, L.props, null, D.mode, J), J.ref = Ll(D, x, L), J.return = D, D = J);
            }
            return m(D);
          case Ce:
            e: {
              for (Ae = L.key; x !== null; ) {
                if (x.key === Ae) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  l(D, x.sibling), x = c(x, L.children || []), x.return = D, D = x;
                  break e;
                } else {
                  l(D, x);
                  break;
                }
                else r(D, x);
                x = x.sibling;
              }
              x = af(L, D.mode, J), x.return = D, D = x;
            }
            return m(D);
          case wt:
            return Ae = L._init, Dn(D, x, Ae(L._payload), J);
        }
        if (fr(L)) return me(D, x, L, J);
        if (he(L)) return Se(D, x, L, J);
        io(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (l(D, x.sibling), x = c(x, L), x.return = D, D = x) : (l(D, x), x = Id(L, D.mode, J), x.return = D, D = x), m(D)) : l(D, x);
    }
    return Dn;
  }
  var Nl = Nv(!0), zv = Nv(!1), Mc = qt(null), qi = null, bn = null, ae = null;
  function Fa() {
    ae = bn = qi = null;
  }
  function va(n) {
    var r = Mc.current;
    Re(Mc), n._currentValue = r;
  }
  function dd(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l) break;
      n = n.return;
    }
  }
  function lo(n, r) {
    qi = n, ae = bn = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Rr = !0), n.firstContext = null);
  }
  function ja(n) {
    var r = n._currentValue;
    if (ae !== n) if (n = { context: n, memoizedValue: r, next: null }, bn === null) {
      if (qi === null) throw Error(A(308));
      bn = n, qi.dependencies = { lanes: 0, firstContext: n };
    } else bn = bn.next = n;
    return r;
  }
  var yu = null;
  function pd(n) {
    yu === null ? yu = [n] : yu.push(n);
  }
  function Vn(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, pd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Xi(n, o);
  }
  function Xi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; ) n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var zl = !1;
  function vd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function hd(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ha(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function ma(n, r, l) {
    var o = n.updateQueue;
    if (o === null) return null;
    if (o = o.shared, bt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Xi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, pd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Xi(n, l);
  }
  function Nc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, es(n, l);
    }
  }
  function Uv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function zc(n, r, l, o) {
    var c = n.updateQueue;
    zl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var Q = n.alternate;
      Q !== null && (Q = Q.updateQueue, E = Q.lastBaseUpdate, E !== m && (E === null ? Q.firstBaseUpdate = z : E.next = z, Q.lastBaseUpdate = T));
    }
    if (d !== null) {
      var G = c.baseState;
      m = 0, Q = z = T = null, E = d;
      do {
        var Y = E.lane, se = E.eventTime;
        if ((o & Y) === Y) {
          Q !== null && (Q = Q.next = {
            eventTime: se,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var me = n, Se = E;
            switch (Y = r, se = l, Se.tag) {
              case 1:
                if (me = Se.payload, typeof me == "function") {
                  G = me.call(se, G, Y);
                  break e;
                }
                G = me;
                break e;
              case 3:
                me.flags = me.flags & -65537 | 128;
              case 0:
                if (me = Se.payload, Y = typeof me == "function" ? me.call(se, G, Y) : me, Y == null) break e;
                G = ie({}, G, Y);
                break e;
              case 2:
                zl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, Y = c.effects, Y === null ? c.effects = [E] : Y.push(E));
        } else se = { eventTime: se, lane: Y, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, Q === null ? (z = Q = se, T = G) : Q = Q.next = se, m |= Y;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null) break;
          Y = E, E = Y.next, Y.next = null, c.lastBaseUpdate = Y, c.shared.pending = null;
        }
      } while (!0);
      if (Q === null && (T = G), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = Q, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else d === null && (c.shared.lanes = 0);
      wu |= m, n.lanes = m, n.memoizedState = G;
    }
  }
  function Av(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null) for (r = 0; r < n.length; r++) {
      var o = n[r], c = o.callback;
      if (c !== null) {
        if (o.callback = null, o = l, typeof c != "function") throw Error(A(191, c));
        c.call(o);
      }
    }
  }
  var Ts = {}, yi = qt(Ts), uo = qt(Ts), oo = qt(Ts);
  function gu(n) {
    if (n === Ts) throw Error(A(174));
    return n;
  }
  function md(n, r) {
    switch (Lt(oo, r), Lt(uo, n), Lt(yi, Ts), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : gr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = gr(r, n);
    }
    Re(yi), Lt(yi, r);
  }
  function so() {
    Re(yi), Re(uo), Re(oo);
  }
  function Fv(n) {
    gu(oo.current);
    var r = gu(yi.current), l = gr(r, n.type);
    r !== l && (Lt(uo, n), Lt(yi, l));
  }
  function yd(n) {
    uo.current === n && (Re(yi), Re(uo));
  }
  var hn = qt(0);
  function ws(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var gd = [];
  function Uc() {
    for (var n = 0; n < gd.length; n++) gd[n]._workInProgressVersionPrimary = null;
    gd.length = 0;
  }
  var Ac = je.ReactCurrentDispatcher, Sd = je.ReactCurrentBatchConfig, Ki = 0, re = null, Oe = null, Ie = null, ln = !1, Gr = !1, co = 0, iy = 0;
  function mr() {
    throw Error(A(321));
  }
  function Ed(n, r) {
    if (r === null) return !1;
    for (var l = 0; l < r.length && l < n.length; l++) if (!Za(n[l], r[l])) return !1;
    return !0;
  }
  function xs(n, r, l, o, c, d) {
    if (Ki = d, re = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Ac.current = n === null || n.memoizedState === null ? ya : ly, n = l(o, c), Gr) {
      d = 0;
      do {
        if (Gr = !1, co = 0, 25 <= d) throw Error(A(301));
        d += 1, Ie = Oe = null, r.updateQueue = null, Ac.current = Zt, n = l(o, c);
      } while (Gr);
    }
    if (Ac.current = Si, r = Oe !== null && Oe.next !== null, Ki = 0, Ie = Oe = re = null, ln = !1, r) throw Error(A(300));
    return n;
  }
  function $() {
    var n = co !== 0;
    return co = 0, n;
  }
  function Xt() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ie === null ? re.memoizedState = Ie = n : Ie = Ie.next = n, Ie;
  }
  function we() {
    if (Oe === null) {
      var n = re.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = Oe.next;
    var r = Ie === null ? re.memoizedState : Ie.next;
    if (r !== null) Ie = r, Oe = n;
    else {
      if (n === null) throw Error(A(310));
      Oe = n, n = { memoizedState: Oe.memoizedState, baseState: Oe.baseState, baseQueue: Oe.baseQueue, queue: Oe.queue, next: null }, Ie === null ? re.memoizedState = Ie = n : Ie = Ie.next = n;
    }
    return Ie;
  }
  function gi(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function ri(n) {
    var r = we(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = Oe, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var Q = z.lane;
        if ((Ki & Q) === Q) T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var G = {
            lane: Q,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = G, m = o) : T = T.next = G, re.lanes |= Q, wu |= Q;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, Za(o, r.memoizedState) || (Rr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, re.lanes |= d, wu |= d, c = c.next;
      while (c !== n);
    } else c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function Ji(n) {
    var r = we(), l = r.queue;
    if (l === null) throw Error(A(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      Za(d, r.memoizedState) || (Rr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function ai() {
  }
  function fo(n, r) {
    var l = re, o = we(), c = r(), d = !Za(o.memoizedState, c);
    if (d && (o.memoizedState = c, Rr = !0), o = o.queue, _s(Fc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || Ie !== null && Ie.memoizedState.tag & 1) {
      if (l.flags |= 2048, Eu(9, po.bind(null, l, o, c, r), void 0, null), En === null) throw Error(A(349));
      Ki & 30 || Su(l, r, c);
    }
    return c;
  }
  function Su(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = re.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, re.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function po(n, r, l, o) {
    r.value = l, r.getSnapshot = o, jc(r) && Hc(n);
  }
  function Fc(n, r, l) {
    return l(function() {
      jc(r) && Hc(n);
    });
  }
  function jc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !Za(n, l);
    } catch {
      return !0;
    }
  }
  function Hc(n) {
    var r = Xi(n, 1);
    r !== null && Ha(r, n, 1, -1);
  }
  function Vc(n) {
    var r = Xt();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: gi, lastRenderedState: n }, r.queue = n, n = n.dispatch = jv.bind(null, re, n), [r.memoizedState, n];
  }
  function Eu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = re.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, re.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Pc() {
    return we().memoizedState;
  }
  function vo(n, r, l, o) {
    var c = Xt();
    re.flags |= n, c.memoizedState = Eu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function ho(n, r, l, o) {
    var c = we();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (Oe !== null) {
      var m = Oe.memoizedState;
      if (d = m.destroy, o !== null && Ed(o, m.deps)) {
        c.memoizedState = Eu(r, l, d, o);
        return;
      }
    }
    re.flags |= n, c.memoizedState = Eu(1 | r, l, d, o);
  }
  function Bc(n, r) {
    return vo(8390656, 8, n, r);
  }
  function _s(n, r) {
    return ho(2048, 8, n, r);
  }
  function $c(n, r) {
    return ho(4, 2, n, r);
  }
  function Yc(n, r) {
    return ho(4, 4, n, r);
  }
  function Ic(n, r) {
    if (typeof r == "function") return n = n(), r(n), function() {
      r(null);
    };
    if (r != null) return n = n(), r.current = n, function() {
      r.current = null;
    };
  }
  function Qc(n, r, l) {
    return l = l != null ? l.concat([n]) : null, ho(4, 4, Ic.bind(null, r, n), l);
  }
  function bs() {
  }
  function Ds(n, r) {
    var l = we();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ed(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Cu(n, r) {
    var l = we();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Ed(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Wc(n, r, l) {
    return Ki & 21 ? (Za(l, r) || (l = au(), re.lanes |= l, wu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Rr = !0), n.memoizedState = l);
  }
  function Cd(n, r) {
    var l = mt;
    mt = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Sd.transition;
    Sd.transition = {};
    try {
      n(!1), r();
    } finally {
      mt = l, Sd.transition = o;
    }
  }
  function Gc() {
    return we().memoizedState;
  }
  function Rd(n, r, l) {
    var o = li(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, mo(n)) Td(r, l);
    else if (l = Vn(n, r, l, o), l !== null) {
      var c = Wn();
      Ha(l, n, o, c), yo(l, r, o);
    }
  }
  function jv(n, r, l) {
    var o = li(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (mo(n)) Td(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null)) try {
        var m = r.lastRenderedState, E = d(m, l);
        if (c.hasEagerState = !0, c.eagerState = E, Za(E, m)) {
          var T = r.interleaved;
          T === null ? (c.next = c, pd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      l = Vn(n, r, c, o), l !== null && (c = Wn(), Ha(l, n, o, c), yo(l, r, o));
    }
  }
  function mo(n) {
    var r = n.alternate;
    return n === re || r !== null && r === re;
  }
  function Td(n, r) {
    Gr = ln = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function yo(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, es(n, l);
    }
  }
  var Si = { readContext: ja, useCallback: mr, useContext: mr, useEffect: mr, useImperativeHandle: mr, useInsertionEffect: mr, useLayoutEffect: mr, useMemo: mr, useReducer: mr, useRef: mr, useState: mr, useDebugValue: mr, useDeferredValue: mr, useTransition: mr, useMutableSource: mr, useSyncExternalStore: mr, useId: mr, unstable_isNewReconciler: !1 }, ya = { readContext: ja, useCallback: function(n, r) {
    return Xt().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ja, useEffect: Bc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, vo(
      4194308,
      4,
      Ic.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return vo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return vo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Xt();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Xt();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Rd.bind(null, re, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Xt();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Vc, useDebugValue: bs, useDeferredValue: function(n) {
    return Xt().memoizedState = n;
  }, useTransition: function() {
    var n = Vc(!1), r = n[0];
    return n = Cd.bind(null, n[1]), Xt().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = re, c = Xt();
    if (an) {
      if (l === void 0) throw Error(A(407));
      l = l();
    } else {
      if (l = r(), En === null) throw Error(A(349));
      Ki & 30 || Su(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Bc(Fc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, Eu(9, po.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Xt(), r = En.identifierPrefix;
    if (an) {
      var l = er, o = Wr;
      l = (o & ~(1 << 32 - Er(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = co++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else l = iy++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ly = {
    readContext: ja,
    useCallback: Ds,
    useContext: ja,
    useEffect: _s,
    useImperativeHandle: Qc,
    useInsertionEffect: $c,
    useLayoutEffect: Yc,
    useMemo: Cu,
    useReducer: ri,
    useRef: Pc,
    useState: function() {
      return ri(gi);
    },
    useDebugValue: bs,
    useDeferredValue: function(n) {
      var r = we();
      return Wc(r, Oe.memoizedState, n);
    },
    useTransition: function() {
      var n = ri(gi)[0], r = we().memoizedState;
      return [n, r];
    },
    useMutableSource: ai,
    useSyncExternalStore: fo,
    useId: Gc,
    unstable_isNewReconciler: !1
  }, Zt = { readContext: ja, useCallback: Ds, useContext: ja, useEffect: _s, useImperativeHandle: Qc, useInsertionEffect: $c, useLayoutEffect: Yc, useMemo: Cu, useReducer: Ji, useRef: Pc, useState: function() {
    return Ji(gi);
  }, useDebugValue: bs, useDeferredValue: function(n) {
    var r = we();
    return Oe === null ? r.memoizedState = n : Wc(r, Oe.memoizedState, n);
  }, useTransition: function() {
    var n = Ji(gi)[0], r = we().memoizedState;
    return [n, r];
  }, useMutableSource: ai, useSyncExternalStore: fo, useId: Gc, unstable_isNewReconciler: !1 };
  function qr(n, r) {
    if (n && n.defaultProps) {
      r = ie({}, r), n = n.defaultProps;
      for (var l in n) r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  function go(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : ie({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Ul = { isMounted: function(n) {
    return (n = n._reactInternals) ? W(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Wn(), c = li(n), d = ha(o, c);
    d.payload = r, l != null && (d.callback = l), r = ma(n, d, c), r !== null && (Ha(r, n, c, o), Nc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Wn(), c = li(n), d = ha(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = ma(n, d, c), r !== null && (Ha(r, n, c, o), Nc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Wn(), o = li(n), c = ha(l, o);
    c.tag = 2, r != null && (c.callback = r), r = ma(n, c, o), r !== null && (Ha(r, n, o, l), Nc(r, n, o));
  } };
  function ks(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !eo(l, o) || !eo(c, d) : !0;
  }
  function Hv(n, r, l) {
    var o = !1, c = Na, d = r.contextType;
    return typeof d == "object" && d !== null ? d = ja(d) : (c = Nn(r) ? Cr : Yn.current, o = r.contextTypes, d = (o = o != null) ? fa(n, c) : Na), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Ul, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Vv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Ul.enqueueReplaceState(r, r.state, null);
  }
  function wd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = {}, vd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = ja(d) : (d = Nn(r) ? Cr : Yn.current, c.context = fa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (go(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Ul.enqueueReplaceState(c, c.state, null), zc(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function So(n, r) {
    try {
      var l = "", o = r;
      do
        l += Ke(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function Os(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function xd(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var _d = typeof WeakMap == "function" ? WeakMap : Map;
  function bd(n, r, l) {
    l = ha(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      ef || (ef = !0, Vd = o), xd(n, r);
    }, l;
  }
  function Pv(n, r, l) {
    l = ha(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        xd(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      xd(n, r), typeof o != "function" && (Hl === null ? Hl = /* @__PURE__ */ new Set([this]) : Hl.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Bv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new _d();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = hy.bind(null, n, r, l), r.then(n, n));
  }
  function Ls(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function $v(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = ha(-1, 1), r.tag = 2, ma(l, r, 1))), l.lanes |= 1), n);
  }
  var Yv = je.ReactCurrentOwner, Rr = !1;
  function Tr(n, r, l, o) {
    r.child = n === null ? zv(r, null, l, o) : Nl(r, n.child, l, o);
  }
  function Al(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return lo(r, c), o = xs(n, r, l, o, d, c), l = $(), n !== null && !Rr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ei(n, r, c)) : (an && l && Dc(r), r.flags |= 1, Tr(n, r, o, c), r.child);
  }
  function Eo(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Yd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Fl(n, r, d, o, c)) : (n = nf(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : eo, l(m, o) && n.ref === r.ref) return Ei(n, r, c);
    }
    return r.flags |= 1, n = $l(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Fl(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (eo(d, o) && n.ref === r.ref) if (Rr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0) n.flags & 131072 && (Rr = !0);
      else return r.lanes = n.lanes, Ei(n, r, c);
    }
    return jl(n, r, l, o, c);
  }
  function qc(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden") if (!(r.mode & 1)) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Lt(Tu, br), br |= l;
    else {
      if (!(l & 1073741824)) return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Lt(Tu, br), br |= n, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Lt(Tu, br), br |= o;
    }
    else d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Lt(Tu, br), br |= o;
    return Tr(n, r, c, l), r.child;
  }
  function Xr(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function jl(n, r, l, o, c) {
    var d = Nn(l) ? Cr : Yn.current;
    return d = fa(r, d), lo(r, c), l = xs(n, r, l, o, d, c), o = $(), n !== null && !Rr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Ei(n, r, c)) : (an && o && Dc(r), r.flags |= 1, Tr(n, r, l, c), r.child);
  }
  function Ze(n, r, l, o, c) {
    if (Nn(l)) {
      var d = !0;
      vu(r);
    } else d = !1;
    if (lo(r, c), r.stateNode === null) zs(n, r), Hv(r, l, o), wd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = ja(z) : (z = Nn(l) ? Cr : Yn.current, z = fa(r, z));
      var Q = l.getDerivedStateFromProps, G = typeof Q == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      G || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Vv(r, m, o, z), zl = !1;
      var Y = r.memoizedState;
      m.state = Y, zc(r, o, m, c), T = r.memoizedState, E !== o || Y !== T || Ge.current || zl ? (typeof Q == "function" && (go(r, l, Q, o), T = r.memoizedState), (E = zl || ks(r, l, E, o, Y, T, z)) ? (G || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, hd(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : qr(r.type, E), m.props = z, G = r.pendingProps, Y = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = ja(T) : (T = Nn(l) ? Cr : Yn.current, T = fa(r, T));
      var se = l.getDerivedStateFromProps;
      (Q = typeof se == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== G || Y !== T) && Vv(r, m, o, T), zl = !1, Y = r.memoizedState, m.state = Y, zc(r, o, m, c);
      var me = r.memoizedState;
      E !== G || Y !== me || Ge.current || zl ? (typeof se == "function" && (go(r, l, se, o), me = r.memoizedState), (z = zl || ks(r, l, z, o, Y, me, T) || !1) ? (Q || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, me, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, me, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = me), m.props = o, m.state = me, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && Y === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Co(n, r, l, o, d, c);
  }
  function Co(n, r, l, o, c, d) {
    Xr(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m) return c && Ov(r, l, !1), Ei(n, r, d);
    o = r.stateNode, Yv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Nl(r, n.child, null, d), r.child = Nl(r, null, E, d)) : Tr(n, r, E, d), r.memoizedState = o.state, c && Ov(r, l, !0), r.child;
  }
  function Dd(n) {
    var r = n.stateNode;
    r.pendingContext ? hi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && hi(n, r.context, !1), md(n, r.containerInfo);
  }
  function uy(n, r, l, o, c) {
    return ao(), zn(c), r.flags |= 256, Tr(n, r, l, o), r.child;
  }
  var kd = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ms(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Ro(n, r, l) {
    var o = r.pendingProps, c = hn.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Lt(hn, c & 1), n === null)
      return Oc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = rf(m, o, 0, null), n = Lu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Ms(l), r.memoizedState = kd, n) : Od(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null)) return oy(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = $l(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = $l(E, d) : (d = Lu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Ms(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = kd, o;
    }
    return d = n.child, n = d.sibling, o = $l(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Od(n, r) {
    return r = rf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Ns(n, r, l, o) {
    return o !== null && zn(o), Nl(r, n.child, null, l), n = Od(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function oy(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = Os(Error(A(422))), Ns(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = rf({ mode: "visible", children: o.children }, c, 0, null), d = Lu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && Nl(r, n.child, null, m), r.child.memoizedState = Ms(m), r.memoizedState = kd, d);
    if (!(r.mode & 1)) return Ns(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o) var E = o.dgst;
      return o = E, d = Error(A(419)), o = Os(d, o, void 0), Ns(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Rr || E) {
      if (o = En, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Xi(n, c), Ha(o, n, c, -1));
      }
      return Bd(), o = Os(Error(A(421))), Ns(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = my.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, pa = ca(c.nextSibling), da = r, an = !0, Aa = null, n !== null && (Ir[Qr++] = Wr, Ir[Qr++] = er, Ir[Qr++] = ni, Wr = n.id, er = n.overflow, ni = r), r = Od(r, o.children), r.flags |= 4096, r);
  }
  function Xc(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), dd(n.return, r, l);
  }
  function Ld(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Md(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Tr(n, r, o.children, l), o = hn.current, o & 2) o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128) e: for (n = r.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Xc(n, l, r);
        else if (n.tag === 19) Xc(n, l, r);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === r) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === r) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      o &= 1;
    }
    if (Lt(hn, o), !(r.mode & 1)) r.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (l = r.child, c = null; l !== null; ) n = l.alternate, n !== null && ws(n) === null && (c = l), l = l.sibling;
        l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Ld(r, !1, c, l, d);
        break;
      case "backwards":
        for (l = null, c = r.child, r.child = null; c !== null; ) {
          if (n = c.alternate, n !== null && ws(n) === null) {
            r.child = c;
            break;
          }
          n = c.sibling, c.sibling = l, l = c, c = n;
        }
        Ld(r, !0, l, null, d);
        break;
      case "together":
        Ld(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function zs(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Ei(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), wu |= r.lanes, !(l & r.childLanes)) return null;
    if (n !== null && r.child !== n.child) throw Error(A(153));
    if (r.child !== null) {
      for (n = r.child, l = $l(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; ) n = n.sibling, l = l.sibling = $l(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function ga(n, r, l) {
    switch (r.tag) {
      case 3:
        Dd(r), ao();
        break;
      case 5:
        Fv(r);
        break;
      case 1:
        Nn(r.type) && vu(r);
        break;
      case 4:
        md(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Lt(Mc, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Lt(hn, hn.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Ro(n, r, l) : (Lt(hn, hn.current & 1), n = Ei(n, r, l), n !== null ? n.sibling : null);
        Lt(hn, hn.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o) return Md(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Lt(hn, hn.current), o) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, qc(n, r, l);
    }
    return Ei(n, r, l);
  }
  var Ci, ii, Us, To;
  Ci = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6) n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r) return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, ii = function() {
  }, Us = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, gu(yi.current);
      var d = null;
      switch (l) {
        case "input":
          c = gn(n, c), o = gn(n, o), d = [];
          break;
        case "select":
          c = ie({}, c, { value: void 0 }), o = ie({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = na(n, c), o = na(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = xc);
      }
      Ot(l, o);
      var m;
      l = null;
      for (z in c) if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null) if (z === "style") {
        var E = c[z];
        for (m in E) E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (ot.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null)) if (z === "style") if (E) {
          for (m in E) !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
          for (m in T) T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
        } else l || (d || (d = []), d.push(
          z,
          l
        )), l = T;
        else z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (ot.hasOwnProperty(z) ? (T != null && z === "onScroll" && Gt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, To = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function wr(n, r) {
    if (!an) switch (n.tailMode) {
      case "hidden":
        r = n.tail;
        for (var l = null; r !== null; ) r.alternate !== null && (l = r), r = r.sibling;
        l === null ? n.tail = null : l.sibling = null;
        break;
      case "collapsed":
        l = n.tail;
        for (var o = null; l !== null; ) l.alternate !== null && (o = l), l = l.sibling;
        o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
    }
  }
  function _t(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r) for (var c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else for (c = n.child; c !== null; ) l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function sy(n, r, l) {
    var o = r.pendingProps;
    switch (kc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _t(r), null;
      case 1:
        return Nn(r.type) && Yr(), _t(r), null;
      case 3:
        return o = r.stateNode, so(), Re(Ge), Re(Yn), Uc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (Lc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, Aa !== null && (bu(Aa), Aa = null))), ii(n, r), _t(r), null;
      case 5:
        yd(r);
        var c = gu(oo.current);
        if (l = r.type, n !== null && r.stateNode != null) Us(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null) throw Error(A(166));
            return _t(r), null;
          }
          if (n = gu(yi.current), Lc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ma] = r, o[Rs] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Gt("cancel", o), Gt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Gt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Yi.length; c++) Gt(Yi[c], o);
                break;
              case "source":
                Gt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Gt(
                  "error",
                  o
                ), Gt("load", o);
                break;
              case "details":
                Gt("toggle", o);
                break;
              case "input":
                Xn(o, d), Gt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Gt("invalid", o);
                break;
              case "textarea":
                ra(o, d), Gt("invalid", o);
            }
            Ot(l, d), c = null;
            for (var m in d) if (d.hasOwnProperty(m)) {
              var E = d[m];
              m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && gs(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && gs(
                o.textContent,
                E,
                n
              ), c = ["children", "" + E]) : ot.hasOwnProperty(m) && E != null && m === "onScroll" && Gt("scroll", o);
            }
            switch (l) {
              case "input":
                qn(o), On(o, d, !0);
                break;
              case "textarea":
                qn(o), aa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = xc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Kn(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ma] = r, n[Rs] = o, Ci(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = _n(l, o), l) {
                case "dialog":
                  Gt("cancel", n), Gt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Gt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Yi.length; c++) Gt(Yi[c], n);
                  c = o;
                  break;
                case "source":
                  Gt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Gt(
                    "error",
                    n
                  ), Gt("load", n), c = o;
                  break;
                case "details":
                  Gt("toggle", n), c = o;
                  break;
                case "input":
                  Xn(n, o), c = gn(n, o), Gt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = ie({}, o, { value: void 0 }), Gt("invalid", n);
                  break;
                case "textarea":
                  ra(n, o), c = na(n, o), Gt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Ot(l, c), E = c;
              for (d in E) if (E.hasOwnProperty(d)) {
                var T = E[d];
                d === "style" ? it(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && ia(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && la(n, T) : typeof T == "number" && la(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (ot.hasOwnProperty(d) ? T != null && d === "onScroll" && Gt("scroll", n) : T != null && rt(n, d, T, m));
              }
              switch (l) {
                case "input":
                  qn(n), On(n, o, !1);
                  break;
                case "textarea":
                  qn(n), aa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ct(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Hn(n, !!o.multiple, d, !1) : o.defaultValue != null && Hn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = xc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return _t(r), null;
      case 6:
        if (n && r.stateNode != null) To(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null) throw Error(A(166));
          if (l = gu(oo.current), gu(yi.current), Lc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ma] = r, (d = o.nodeValue !== l) && (n = da, n !== null)) switch (n.tag) {
              case 3:
                gs(o.nodeValue, l, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && gs(o.nodeValue, l, (n.mode & 1) !== 0);
            }
            d && (r.flags |= 4);
          } else o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ma] = r, r.stateNode = o;
        }
        return _t(r), null;
      case 13:
        if (Re(hn), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (an && pa !== null && r.mode & 1 && !(r.flags & 128)) Mv(), ao(), r.flags |= 98560, d = !1;
          else if (d = Lc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d) throw Error(A(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(A(317));
              d[Ma] = r;
            } else ao(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            _t(r), d = !1;
          } else Aa !== null && (bu(Aa), Aa = null), d = !0;
          if (!d) return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || hn.current & 1 ? Pn === 0 && (Pn = 3) : Bd())), r.updateQueue !== null && (r.flags |= 4), _t(r), null);
      case 4:
        return so(), ii(n, r), n === null && pi(r.stateNode.containerInfo), _t(r), null;
      case 10:
        return va(r.type._context), _t(r), null;
      case 17:
        return Nn(r.type) && Yr(), _t(r), null;
      case 19:
        if (Re(hn), d = r.memoizedState, d === null) return _t(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null) if (o) wr(d, !1);
        else {
          if (Pn !== 0 || n !== null && n.flags & 128) for (n = r.child; n !== null; ) {
            if (m = ws(n), m !== null) {
              for (r.flags |= 128, wr(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; ) d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
              return Lt(hn, hn.current & 1 | 2), r.child;
            }
            n = n.sibling;
          }
          d.tail !== null && Ft() > xu && (r.flags |= 128, o = !0, wr(d, !1), r.lanes = 4194304);
        }
        else {
          if (!o) if (n = ws(m), n !== null) {
            if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), wr(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !an) return _t(r), null;
          } else 2 * Ft() - d.renderingStartTime > xu && l !== 1073741824 && (r.flags |= 128, o = !0, wr(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = Ft(), r.sibling = null, l = hn.current, Lt(hn, o ? l & 1 | 2 : l & 1), r) : (_t(r), null);
      case 22:
      case 23:
        return bo(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? br & 1073741824 && (_t(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : _t(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(A(156, r.tag));
  }
  function cy(n, r) {
    switch (kc(r), r.tag) {
      case 1:
        return Nn(r.type) && Yr(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return so(), Re(Ge), Re(Yn), Uc(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return yd(r), null;
      case 13:
        if (Re(hn), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null) throw Error(A(340));
          ao();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Re(hn), null;
      case 4:
        return so(), null;
      case 10:
        return va(r.type._context), null;
      case 22:
      case 23:
        return bo(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Kc = !1, In = !1, Iv = typeof WeakSet == "function" ? WeakSet : Set, de = null;
  function Ru(n, r) {
    var l = n.ref;
    if (l !== null) if (typeof l == "function") try {
      l(null);
    } catch (o) {
      Rn(n, r, o);
    }
    else l.current = null;
  }
  function Nd(n, r, l) {
    try {
      l();
    } catch (o) {
      Rn(n, r, o);
    }
  }
  var Qv = !1;
  function zd(n, r) {
    if (nd = su, n = gv(), ds(n)) {
      if ("selectionStart" in n) var l = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        l = (l = n.ownerDocument) && l.defaultView || window;
        var o = l.getSelection && l.getSelection();
        if (o && o.rangeCount !== 0) {
          l = o.anchorNode;
          var c = o.anchorOffset, d = o.focusNode;
          o = o.focusOffset;
          try {
            l.nodeType, d.nodeType;
          } catch {
            l = null;
            break e;
          }
          var m = 0, E = -1, T = -1, z = 0, Q = 0, G = n, Y = null;
          t: for (; ; ) {
            for (var se; G !== l || c !== 0 && G.nodeType !== 3 || (E = m + c), G !== d || o !== 0 && G.nodeType !== 3 || (T = m + o), G.nodeType === 3 && (m += G.nodeValue.length), (se = G.firstChild) !== null; )
              Y = G, G = se;
            for (; ; ) {
              if (G === n) break t;
              if (Y === l && ++z === c && (E = m), Y === d && ++Q === o && (T = m), (se = G.nextSibling) !== null) break;
              G = Y, Y = G.parentNode;
            }
            G = se;
          }
          l = E === -1 || T === -1 ? null : { start: E, end: T };
        } else l = null;
      }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (rd = { focusedElem: n, selectionRange: l }, su = !1, de = r; de !== null; ) if (r = de, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null) n.return = r, de = n;
    else for (; de !== null; ) {
      r = de;
      try {
        var me = r.alternate;
        if (r.flags & 1024) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (me !== null) {
              var Se = me.memoizedProps, Dn = me.memoizedState, D = r.stateNode, x = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Se : qr(r.type, Se), Dn);
              D.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var L = r.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(A(163));
        }
      } catch (J) {
        Rn(r, r.return, J);
      }
      if (n = r.sibling, n !== null) {
        n.return = r.return, de = n;
        break;
      }
      de = r.return;
    }
    return me = Qv, Qv = !1, me;
  }
  function As(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Nd(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Fs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ud(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Ad(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Ad(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ma], delete r[Rs], delete r[ud], delete r[ny], delete r[ry])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Wv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Fd(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Wv(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function jd(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = xc));
    else if (o !== 4 && (n = n.child, n !== null)) for (jd(n, r, l), n = n.sibling; n !== null; ) jd(n, r, l), n = n.sibling;
  }
  function js(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6) n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null)) for (js(n, r, l), n = n.sibling; n !== null; ) js(n, r, l), n = n.sibling;
  }
  var Un = null, Qn = !1;
  function xr(n, r, l) {
    for (l = l.child; l !== null; ) Zi(n, r, l), l = l.sibling;
  }
  function Zi(n, r, l) {
    if (Vr && typeof Vr.onCommitFiberUnmount == "function") try {
      Vr.onCommitFiberUnmount(yl, l);
    } catch {
    }
    switch (l.tag) {
      case 5:
        In || Ru(l, r);
      case 6:
        var o = Un, c = Qn;
        Un = null, xr(n, r, l), Un = o, Qn = c, Un !== null && (Qn ? (n = Un, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Un.removeChild(l.stateNode));
        break;
      case 18:
        Un !== null && (Qn ? (n = Un, l = l.stateNode, n.nodeType === 8 ? ld(n.parentNode, l) : n.nodeType === 1 && ld(n, l), La(n)) : ld(Un, l.stateNode));
        break;
      case 4:
        o = Un, c = Qn, Un = l.stateNode.containerInfo, Qn = !0, xr(n, r, l), Un = o, Qn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!In && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Nd(l, r, m), c = c.next;
          } while (c !== o);
        }
        xr(n, r, l);
        break;
      case 1:
        if (!In && (Ru(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function")) try {
          o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
        } catch (E) {
          Rn(l, r, E);
        }
        xr(n, r, l);
        break;
      case 21:
        xr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (In = (o = In) || l.memoizedState !== null, xr(n, r, l), In = o) : xr(n, r, l);
        break;
      default:
        xr(n, r, l);
    }
  }
  function wo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Iv()), r.forEach(function(o) {
        var c = $d.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function _r(n, r) {
    var l = r.deletions;
    if (l !== null) for (var o = 0; o < l.length; o++) {
      var c = l[o];
      try {
        var d = n, m = r, E = m;
        e: for (; E !== null; ) {
          switch (E.tag) {
            case 5:
              Un = E.stateNode, Qn = !1;
              break e;
            case 3:
              Un = E.stateNode.containerInfo, Qn = !0;
              break e;
            case 4:
              Un = E.stateNode.containerInfo, Qn = !0;
              break e;
          }
          E = E.return;
        }
        if (Un === null) throw Error(A(160));
        Zi(d, m, c), Un = null, Qn = !1;
        var T = c.alternate;
        T !== null && (T.return = null), c.return = null;
      } catch (z) {
        Rn(c, r, z);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) el(r, n), r = r.sibling;
  }
  function el(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (_r(r, n), Ri(n), o & 4) {
          try {
            As(3, n, n.return), Fs(3, n);
          } catch (Se) {
            Rn(n, n.return, Se);
          }
          try {
            As(5, n, n.return);
          } catch (Se) {
            Rn(n, n.return, Se);
          }
        }
        break;
      case 1:
        _r(r, n), Ri(n), o & 512 && l !== null && Ru(l, l.return);
        break;
      case 5:
        if (_r(r, n), Ri(n), o & 512 && l !== null && Ru(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            la(c, "");
          } catch (Se) {
            Rn(n, n.return, Se);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null) try {
            E === "input" && d.type === "radio" && d.name != null && jn(c, d), _n(E, m);
            var z = _n(E, d);
            for (m = 0; m < T.length; m += 2) {
              var Q = T[m], G = T[m + 1];
              Q === "style" ? it(c, G) : Q === "dangerouslySetInnerHTML" ? ia(c, G) : Q === "children" ? la(c, G) : rt(c, Q, G, z);
            }
            switch (E) {
              case "input":
                xn(c, d);
                break;
              case "textarea":
                dr(c, d);
                break;
              case "select":
                var Y = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var se = d.value;
                se != null ? Hn(c, !!d.multiple, se, !1) : Y !== !!d.multiple && (d.defaultValue != null ? Hn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Hn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[Rs] = d;
          } catch (Se) {
            Rn(n, n.return, Se);
          }
        }
        break;
      case 6:
        if (_r(r, n), Ri(n), o & 4) {
          if (n.stateNode === null) throw Error(A(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Se) {
            Rn(n, n.return, Se);
          }
        }
        break;
      case 3:
        if (_r(r, n), Ri(n), o & 4 && l !== null && l.memoizedState.isDehydrated) try {
          La(r.containerInfo);
        } catch (Se) {
          Rn(n, n.return, Se);
        }
        break;
      case 4:
        _r(r, n), Ri(n);
        break;
      case 13:
        _r(r, n), Ri(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (Bs = Ft())), o & 4 && wo(n);
        break;
      case 22:
        if (Q = l !== null && l.memoizedState !== null, n.mode & 1 ? (In = (z = In) || Q, _r(r, n), In = z) : _r(r, n), Ri(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !Q && n.mode & 1) for (de = n, Q = n.child; Q !== null; ) {
            for (G = de = Q; de !== null; ) {
              switch (Y = de, se = Y.child, Y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  As(4, Y, Y.return);
                  break;
                case 1:
                  Ru(Y, Y.return);
                  var me = Y.stateNode;
                  if (typeof me.componentWillUnmount == "function") {
                    o = Y, l = Y.return;
                    try {
                      r = o, me.props = r.memoizedProps, me.state = r.memoizedState, me.componentWillUnmount();
                    } catch (Se) {
                      Rn(o, l, Se);
                    }
                  }
                  break;
                case 5:
                  Ru(Y, Y.return);
                  break;
                case 22:
                  if (Y.memoizedState !== null) {
                    xo(G);
                    continue;
                  }
              }
              se !== null ? (se.return = Y, de = se) : xo(G);
            }
            Q = Q.sibling;
          }
          e: for (Q = null, G = n; ; ) {
            if (G.tag === 5) {
              if (Q === null) {
                Q = G;
                try {
                  c = G.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = G.stateNode, T = G.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = be("display", m));
                } catch (Se) {
                  Rn(n, n.return, Se);
                }
              }
            } else if (G.tag === 6) {
              if (Q === null) try {
                G.stateNode.nodeValue = z ? "" : G.memoizedProps;
              } catch (Se) {
                Rn(n, n.return, Se);
              }
            } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === n) && G.child !== null) {
              G.child.return = G, G = G.child;
              continue;
            }
            if (G === n) break e;
            for (; G.sibling === null; ) {
              if (G.return === null || G.return === n) break e;
              Q === G && (Q = null), G = G.return;
            }
            Q === G && (Q = null), G.sibling.return = G.return, G = G.sibling;
          }
        }
        break;
      case 19:
        _r(r, n), Ri(n), o & 4 && wo(n);
        break;
      case 21:
        break;
      default:
        _r(
          r,
          n
        ), Ri(n);
    }
  }
  function Ri(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Wv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(A(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (la(c, ""), o.flags &= -33);
            var d = Fd(n);
            js(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Fd(n);
            jd(n, E, m);
            break;
          default:
            throw Error(A(161));
        }
      } catch (T) {
        Rn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function fy(n, r, l) {
    de = n, Gv(n);
  }
  function Gv(n, r, l) {
    for (var o = (n.mode & 1) !== 0; de !== null; ) {
      var c = de, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || Kc;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || In;
          E = Kc;
          var z = In;
          if (Kc = m, (In = T) && !z) for (de = c; de !== null; ) m = de, T = m.child, m.tag === 22 && m.memoizedState !== null ? qv(c) : T !== null ? (T.return = m, de = T) : qv(c);
          for (; d !== null; ) de = d, Gv(d), d = d.sibling;
          de = c, Kc = E, In = z;
        }
        Hd(n);
      } else c.subtreeFlags & 8772 && d !== null ? (d.return = c, de = d) : Hd(n);
    }
  }
  function Hd(n) {
    for (; de !== null; ) {
      var r = de;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              In || Fs(5, r);
              break;
            case 1:
              var o = r.stateNode;
              if (r.flags & 4 && !In) if (l === null) o.componentDidMount();
              else {
                var c = r.elementType === r.type ? l.memoizedProps : qr(r.type, l.memoizedProps);
                o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
              }
              var d = r.updateQueue;
              d !== null && Av(r, d, o);
              break;
            case 3:
              var m = r.updateQueue;
              if (m !== null) {
                if (l = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    l = r.child.stateNode;
                    break;
                  case 1:
                    l = r.child.stateNode;
                }
                Av(r, m, l);
              }
              break;
            case 5:
              var E = r.stateNode;
              if (l === null && r.flags & 4) {
                l = E;
                var T = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    T.autoFocus && l.focus();
                    break;
                  case "img":
                    T.src && (l.src = T.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var z = r.alternate;
                if (z !== null) {
                  var Q = z.memoizedState;
                  if (Q !== null) {
                    var G = Q.dehydrated;
                    G !== null && La(G);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(A(163));
          }
          In || r.flags & 512 && Ud(r);
        } catch (Y) {
          Rn(r, r.return, Y);
        }
      }
      if (r === n) {
        de = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, de = l;
        break;
      }
      de = r.return;
    }
  }
  function xo(n) {
    for (; de !== null; ) {
      var r = de;
      if (r === n) {
        de = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, de = l;
        break;
      }
      de = r.return;
    }
  }
  function qv(n) {
    for (; de !== null; ) {
      var r = de;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Fs(4, r);
            } catch (T) {
              Rn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                Rn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Ud(r);
            } catch (T) {
              Rn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Ud(r);
            } catch (T) {
              Rn(r, m, T);
            }
        }
      } catch (T) {
        Rn(r, r.return, T);
      }
      if (r === n) {
        de = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, de = E;
        break;
      }
      de = r.return;
    }
  }
  var Xv = Math.ceil, Jc = je.ReactCurrentDispatcher, _o = je.ReactCurrentOwner, Sa = je.ReactCurrentBatchConfig, bt = 0, En = null, fn = null, Cn = 0, br = 0, Tu = qt(0), Pn = 0, Hs = null, wu = 0, Zc = 0, Vs = 0, Ps = null, tr = null, Bs = 0, xu = 1 / 0, tl = null, ef = !1, Vd = null, Hl = null, Vl = !1, Ti = null, Pl = 0, $s = 0, Pd = null, Ys = -1, Is = 0;
  function Wn() {
    return bt & 6 ? Ft() : Ys !== -1 ? Ys : Ys = Ft();
  }
  function li(n) {
    return n.mode & 1 ? bt & 2 && Cn !== 0 ? Cn & -Cn : ay.transition !== null ? (Is === 0 && (Is = au()), Is) : (n = mt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : as(n.type)), n) : 1;
  }
  function Ha(n, r, l, o) {
    if (50 < $s) throw $s = 0, Pd = null, Error(A(185));
    Sl(n, l, o), (!(bt & 2) || n !== En) && (n === En && (!(bt & 2) && (Zc |= l), Pn === 4 && wi(n, Cn)), en(n, o), l === 1 && bt === 0 && !(r.mode & 1) && (xu = Ft() + 500, Dl && mi()));
  }
  function en(n, r) {
    var l = n.callbackNode;
    gl(n, r);
    var o = ci(n, n === En ? Cn : 0);
    if (o === 0) l !== null && Wt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Wt(l), r === 1) n.tag === 0 ? Lv(tf.bind(null, n)) : bc(tf.bind(null, n)), kv(function() {
        !(bt & 6) && mi();
      }), l = null;
      else {
        switch (ts(o)) {
          case 1:
            l = Mn;
            break;
          case 4:
            l = Hr;
            break;
          case 16:
            l = Je;
            break;
          case 536870912:
            l = Ui;
            break;
          default:
            l = Je;
        }
        l = ih(l, _u.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function _u(n, r) {
    if (Ys = -1, Is = 0, bt & 6) throw Error(A(327));
    var l = n.callbackNode;
    if (ko() && n.callbackNode !== l) return null;
    var o = ci(n, n === En ? Cn : 0);
    if (o === 0) return null;
    if (o & 30 || o & n.expiredLanes || r) r = Do(n, o);
    else {
      r = o;
      var c = bt;
      bt |= 2;
      var d = Jv();
      (En !== n || Cn !== r) && (tl = null, xu = Ft() + 500, Bl(n, r));
      do
        try {
          vy();
          break;
        } catch (E) {
          Kv(n, E);
        }
      while (!0);
      Fa(), Jc.current = d, bt = c, fn !== null ? r = 0 : (En = null, Cn = 0, r = Pn);
    }
    if (r !== 0) {
      if (r === 2 && (c = fi(n), c !== 0 && (o = c, r = Qs(n, c))), r === 1) throw l = Hs, Bl(n, 0), wi(n, o), en(n, Ft()), l;
      if (r === 6) wi(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !dy(c) && (r = Do(n, o), r === 2 && (d = fi(n), d !== 0 && (o = d, r = Qs(n, d))), r === 1)) throw l = Hs, Bl(n, 0), wi(n, o), en(n, Ft()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(A(345));
          case 2:
            Ou(n, tr, tl);
            break;
          case 3:
            if (wi(n, o), (o & 130023424) === o && (r = Bs + 500 - Ft(), 10 < r)) {
              if (ci(n, 0) !== 0) break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Wn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Ss(Ou.bind(null, n, tr, tl), r);
              break;
            }
            Ou(n, tr, tl);
            break;
          case 4:
            if (wi(n, o), (o & 4194240) === o) break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - Er(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = Ft() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Xv(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Ss(Ou.bind(null, n, tr, tl), o);
              break;
            }
            Ou(n, tr, tl);
            break;
          case 5:
            Ou(n, tr, tl);
            break;
          default:
            throw Error(A(329));
        }
      }
    }
    return en(n, Ft()), n.callbackNode === l ? _u.bind(null, n) : null;
  }
  function Qs(n, r) {
    var l = Ps;
    return n.current.memoizedState.isDehydrated && (Bl(n, r).flags |= 256), n = Do(n, r), n !== 2 && (r = tr, tr = l, r !== null && bu(r)), n;
  }
  function bu(n) {
    tr === null ? tr = n : tr.push.apply(tr, n);
  }
  function dy(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null)) for (var o = 0; o < l.length; o++) {
          var c = l[o], d = c.getSnapshot;
          c = c.value;
          try {
            if (!Za(d(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null) l.return = r, r = l;
      else {
        if (r === n) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function wi(n, r) {
    for (r &= ~Vs, r &= ~Zc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - Er(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function tf(n) {
    if (bt & 6) throw Error(A(327));
    ko();
    var r = ci(n, 0);
    if (!(r & 1)) return en(n, Ft()), null;
    var l = Do(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = fi(n);
      o !== 0 && (r = o, l = Qs(n, o));
    }
    if (l === 1) throw l = Hs, Bl(n, 0), wi(n, r), en(n, Ft()), l;
    if (l === 6) throw Error(A(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ou(n, tr, tl), en(n, Ft()), null;
  }
  function Du(n, r) {
    var l = bt;
    bt |= 1;
    try {
      return n(r);
    } finally {
      bt = l, bt === 0 && (xu = Ft() + 500, Dl && mi());
    }
  }
  function ku(n) {
    Ti !== null && Ti.tag === 0 && !(bt & 6) && ko();
    var r = bt;
    bt |= 1;
    var l = Sa.transition, o = mt;
    try {
      if (Sa.transition = null, mt = 1, n) return n();
    } finally {
      mt = o, Sa.transition = l, bt = r, !(bt & 6) && mi();
    }
  }
  function bo() {
    br = Tu.current, Re(Tu);
  }
  function Bl(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Es(l)), fn !== null) for (l = fn.return; l !== null; ) {
      var o = l;
      switch (kc(o), o.tag) {
        case 1:
          o = o.type.childContextTypes, o != null && Yr();
          break;
        case 3:
          so(), Re(Ge), Re(Yn), Uc();
          break;
        case 5:
          yd(o);
          break;
        case 4:
          so();
          break;
        case 13:
          Re(hn);
          break;
        case 19:
          Re(hn);
          break;
        case 10:
          va(o.type._context);
          break;
        case 22:
        case 23:
          bo();
      }
      l = l.return;
    }
    if (En = n, fn = n = $l(n.current, null), Cn = br = r, Pn = 0, Hs = null, Vs = Zc = wu = 0, tr = Ps = null, yu !== null) {
      for (r = 0; r < yu.length; r++) if (l = yu[r], o = l.interleaved, o !== null) {
        l.interleaved = null;
        var c = o.next, d = l.pending;
        if (d !== null) {
          var m = d.next;
          d.next = c, o.next = m;
        }
        l.pending = o;
      }
      yu = null;
    }
    return n;
  }
  function Kv(n, r) {
    do {
      var l = fn;
      try {
        if (Fa(), Ac.current = Si, ln) {
          for (var o = re.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          ln = !1;
        }
        if (Ki = 0, Ie = Oe = re = null, Gr = !1, co = 0, _o.current = null, l === null || l.return === null) {
          Pn = 1, Hs = r, fn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Cn, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, Q = E, G = Q.tag;
            if (!(Q.mode & 1) && (G === 0 || G === 11 || G === 15)) {
              var Y = Q.alternate;
              Y ? (Q.updateQueue = Y.updateQueue, Q.memoizedState = Y.memoizedState, Q.lanes = Y.lanes) : (Q.updateQueue = null, Q.memoizedState = null);
            }
            var se = Ls(m);
            if (se !== null) {
              se.flags &= -257, $v(se, m, E, d, r), se.mode & 1 && Bv(d, z, r), r = se, T = z;
              var me = r.updateQueue;
              if (me === null) {
                var Se = /* @__PURE__ */ new Set();
                Se.add(T), r.updateQueue = Se;
              } else me.add(T);
              break e;
            } else {
              if (!(r & 1)) {
                Bv(d, z, r), Bd();
                break e;
              }
              T = Error(A(426));
            }
          } else if (an && E.mode & 1) {
            var Dn = Ls(m);
            if (Dn !== null) {
              !(Dn.flags & 65536) && (Dn.flags |= 256), $v(Dn, m, E, d, r), zn(So(T, E));
              break e;
            }
          }
          d = T = So(T, E), Pn !== 4 && (Pn = 2), Ps === null ? Ps = [d] : Ps.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = bd(d, T, r);
                Uv(d, D);
                break e;
              case 1:
                E = T;
                var x = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Hl === null || !Hl.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var J = Pv(d, E, r);
                  Uv(d, J);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        eh(l);
      } catch (Te) {
        r = Te, fn === l && l !== null && (fn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Jv() {
    var n = Jc.current;
    return Jc.current = Si, n === null ? Si : n;
  }
  function Bd() {
    (Pn === 0 || Pn === 3 || Pn === 2) && (Pn = 4), En === null || !(wu & 268435455) && !(Zc & 268435455) || wi(En, Cn);
  }
  function Do(n, r) {
    var l = bt;
    bt |= 2;
    var o = Jv();
    (En !== n || Cn !== r) && (tl = null, Bl(n, r));
    do
      try {
        py();
        break;
      } catch (c) {
        Kv(n, c);
      }
    while (!0);
    if (Fa(), bt = l, Jc.current = o, fn !== null) throw Error(A(261));
    return En = null, Cn = 0, Pn;
  }
  function py() {
    for (; fn !== null; ) Zv(fn);
  }
  function vy() {
    for (; fn !== null && !cn(); ) Zv(fn);
  }
  function Zv(n) {
    var r = ah(n.alternate, n, br);
    n.memoizedProps = n.pendingProps, r === null ? eh(n) : fn = r, _o.current = null;
  }
  function eh(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = cy(l, r), l !== null) {
          l.flags &= 32767, fn = l;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Pn = 6, fn = null;
          return;
        }
      } else if (l = sy(l, r, br), l !== null) {
        fn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        fn = r;
        return;
      }
      fn = r = n;
    } while (r !== null);
    Pn === 0 && (Pn = 5);
  }
  function Ou(n, r, l) {
    var o = mt, c = Sa.transition;
    try {
      Sa.transition = null, mt = 1, th(n, r, l, o);
    } finally {
      Sa.transition = c, mt = o;
    }
    return null;
  }
  function th(n, r, l, o) {
    do
      ko();
    while (Ti !== null);
    if (bt & 6) throw Error(A(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current) throw Error(A(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Zo(n, d), n === En && (fn = En = null, Cn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || Vl || (Vl = !0, ih(Je, function() {
      return ko(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = Sa.transition, Sa.transition = null;
      var m = mt;
      mt = 1;
      var E = bt;
      bt |= 4, _o.current = null, zd(n, l), el(l, n), cu(rd), su = !!nd, rd = nd = null, n.current = l, fy(l), vr(), bt = E, mt = m, Sa.transition = d;
    } else n.current = l;
    if (Vl && (Vl = !1, Ti = n, Pl = c), d = n.pendingLanes, d === 0 && (Hl = null), qo(l.stateNode), en(n, Ft()), r !== null) for (o = n.onRecoverableError, l = 0; l < r.length; l++) c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (ef) throw ef = !1, n = Vd, Vd = null, n;
    return Pl & 1 && n.tag !== 0 && ko(), d = n.pendingLanes, d & 1 ? n === Pd ? $s++ : ($s = 0, Pd = n) : $s = 0, mi(), null;
  }
  function ko() {
    if (Ti !== null) {
      var n = ts(Pl), r = Sa.transition, l = mt;
      try {
        if (Sa.transition = null, mt = 16 > n ? 16 : n, Ti === null) var o = !1;
        else {
          if (n = Ti, Ti = null, Pl = 0, bt & 6) throw Error(A(331));
          var c = bt;
          for (bt |= 4, de = n.current; de !== null; ) {
            var d = de, m = d.child;
            if (de.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (de = z; de !== null; ) {
                    var Q = de;
                    switch (Q.tag) {
                      case 0:
                      case 11:
                      case 15:
                        As(8, Q, d);
                    }
                    var G = Q.child;
                    if (G !== null) G.return = Q, de = G;
                    else for (; de !== null; ) {
                      Q = de;
                      var Y = Q.sibling, se = Q.return;
                      if (Ad(Q), Q === z) {
                        de = null;
                        break;
                      }
                      if (Y !== null) {
                        Y.return = se, de = Y;
                        break;
                      }
                      de = se;
                    }
                  }
                }
                var me = d.alternate;
                if (me !== null) {
                  var Se = me.child;
                  if (Se !== null) {
                    me.child = null;
                    do {
                      var Dn = Se.sibling;
                      Se.sibling = null, Se = Dn;
                    } while (Se !== null);
                  }
                }
                de = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null) m.return = d, de = m;
            else e: for (; de !== null; ) {
              if (d = de, d.flags & 2048) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  As(9, d, d.return);
              }
              var D = d.sibling;
              if (D !== null) {
                D.return = d.return, de = D;
                break e;
              }
              de = d.return;
            }
          }
          var x = n.current;
          for (de = x; de !== null; ) {
            m = de;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null) L.return = m, de = L;
            else e: for (m = x; de !== null; ) {
              if (E = de, E.flags & 2048) try {
                switch (E.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Fs(9, E);
                }
              } catch (Te) {
                Rn(E, E.return, Te);
              }
              if (E === m) {
                de = null;
                break e;
              }
              var J = E.sibling;
              if (J !== null) {
                J.return = E.return, de = J;
                break e;
              }
              de = E.return;
            }
          }
          if (bt = c, mi(), Vr && typeof Vr.onPostCommitFiberRoot == "function") try {
            Vr.onPostCommitFiberRoot(yl, n);
          } catch {
          }
          o = !0;
        }
        return o;
      } finally {
        mt = l, Sa.transition = r;
      }
    }
    return !1;
  }
  function nh(n, r, l) {
    r = So(l, r), r = bd(n, r, 1), n = ma(n, r, 1), r = Wn(), n !== null && (Sl(n, 1, r), en(n, r));
  }
  function Rn(n, r, l) {
    if (n.tag === 3) nh(n, n, l);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        nh(r, n, l);
        break;
      } else if (r.tag === 1) {
        var o = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Hl === null || !Hl.has(o))) {
          n = So(l, n), n = Pv(r, n, 1), r = ma(r, n, 1), n = Wn(), r !== null && (Sl(r, 1, n), en(r, n));
          break;
        }
      }
      r = r.return;
    }
  }
  function hy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Wn(), n.pingedLanes |= n.suspendedLanes & l, En === n && (Cn & l) === l && (Pn === 4 || Pn === 3 && (Cn & 130023424) === Cn && 500 > Ft() - Bs ? Bl(n, 0) : Vs |= l), en(n, r);
  }
  function rh(n, r) {
    r === 0 && (n.mode & 1 ? (r = Iu, Iu <<= 1, !(Iu & 130023424) && (Iu = 4194304)) : r = 1);
    var l = Wn();
    n = Xi(n, r), n !== null && (Sl(n, r, l), en(n, l));
  }
  function my(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), rh(n, l);
  }
  function $d(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(A(314));
    }
    o !== null && o.delete(r), rh(n, l);
  }
  var ah;
  ah = function(n, r, l) {
    if (n !== null) if (n.memoizedProps !== r.pendingProps || Ge.current) Rr = !0;
    else {
      if (!(n.lanes & l) && !(r.flags & 128)) return Rr = !1, ga(n, r, l);
      Rr = !!(n.flags & 131072);
    }
    else Rr = !1, an && r.flags & 1048576 && Ol(r, hu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        zs(n, r), n = r.pendingProps;
        var c = fa(r, Yn.current);
        lo(r, l), c = xs(null, r, o, n, c, l);
        var d = $();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Nn(o) ? (d = !0, vu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, vd(r), c.updater = Ul, r.stateNode = c, c._reactInternals = r, wd(r, o, n, l), r = Co(null, r, o, !0, d, l)) : (r.tag = 0, an && d && Dc(r), Tr(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (zs(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = gy(o), n = qr(o, n), c) {
            case 0:
              r = jl(null, r, o, n, l);
              break e;
            case 1:
              r = Ze(null, r, o, n, l);
              break e;
            case 11:
              r = Al(null, r, o, n, l);
              break e;
            case 14:
              r = Eo(null, r, o, qr(o.type, n), l);
              break e;
          }
          throw Error(A(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), jl(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), Ze(n, r, o, c, l);
      case 3:
        e: {
          if (Dd(r), n === null) throw Error(A(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, hd(n, r), zc(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated) if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
            c = So(Error(A(423)), r), r = uy(n, r, o, l, c);
            break e;
          } else if (o !== c) {
            c = So(Error(A(424)), r), r = uy(n, r, o, l, c);
            break e;
          } else for (pa = ca(r.stateNode.containerInfo.firstChild), da = r, an = !0, Aa = null, l = zv(r, null, o, l), r.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (ao(), o === c) {
              r = Ei(n, r, l);
              break e;
            }
            Tr(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Fv(r), n === null && Oc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, pu(o, c) ? m = null : d !== null && pu(o, d) && (r.flags |= 32), Xr(n, r), Tr(n, r, m, l), r.child;
      case 6:
        return n === null && Oc(r), null;
      case 13:
        return Ro(n, r, l);
      case 4:
        return md(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Nl(r, null, o, l) : Tr(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), Al(n, r, o, c, l);
      case 7:
        return Tr(n, r, r.pendingProps, l), r.child;
      case 8:
        return Tr(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Tr(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Lt(Mc, o._currentValue), o._currentValue = m, d !== null) if (Za(d.value, m)) {
            if (d.children === c.children && !Ge.current) {
              r = Ei(n, r, l);
              break e;
            }
          } else for (d = r.child, d !== null && (d.return = r); d !== null; ) {
            var E = d.dependencies;
            if (E !== null) {
              m = d.child;
              for (var T = E.firstContext; T !== null; ) {
                if (T.context === o) {
                  if (d.tag === 1) {
                    T = ha(-1, l & -l), T.tag = 2;
                    var z = d.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var Q = z.pending;
                      Q === null ? T.next = T : (T.next = Q.next, Q.next = T), z.pending = T;
                    }
                  }
                  d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), dd(
                    d.return,
                    l,
                    r
                  ), E.lanes |= l;
                  break;
                }
                T = T.next;
              }
            } else if (d.tag === 10) m = d.type === r.type ? null : d.child;
            else if (d.tag === 18) {
              if (m = d.return, m === null) throw Error(A(341));
              m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), dd(m, l, r), m = d.sibling;
            } else m = d.child;
            if (m !== null) m.return = d;
            else for (m = d; m !== null; ) {
              if (m === r) {
                m = null;
                break;
              }
              if (d = m.sibling, d !== null) {
                d.return = m.return, m = d;
                break;
              }
              m = m.return;
            }
            d = m;
          }
          Tr(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, lo(r, l), c = ja(c), o = o(c), r.flags |= 1, Tr(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = qr(o, r.pendingProps), c = qr(o.type, c), Eo(n, r, o, c, l);
      case 15:
        return Fl(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), zs(n, r), r.tag = 1, Nn(o) ? (n = !0, vu(r)) : n = !1, lo(r, l), Hv(r, o, c), wd(r, o, c, l), Co(null, r, o, !0, n, l);
      case 19:
        return Md(n, r, l);
      case 22:
        return qc(n, r, l);
    }
    throw Error(A(156, r.tag));
  };
  function ih(n, r) {
    return Ln(n, r);
  }
  function yy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ea(n, r, l, o) {
    return new yy(n, r, l, o);
  }
  function Yd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function gy(n) {
    if (typeof n == "function") return Yd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === St) return 11;
      if (n === tt) return 14;
    }
    return 2;
  }
  function $l(n, r) {
    var l = n.alternate;
    return l === null ? (l = Ea(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function nf(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function") Yd(n) && (m = 1);
    else if (typeof n == "string") m = 5;
    else e: switch (n) {
      case ft:
        return Lu(l.children, c, d, r);
      case $e:
        m = 8, c |= 8;
        break;
      case wn:
        return n = Ea(12, l, r, c | 2), n.elementType = wn, n.lanes = d, n;
      case tn:
        return n = Ea(13, l, r, c), n.elementType = tn, n.lanes = d, n;
      case He:
        return n = Ea(19, l, r, c), n.elementType = He, n.lanes = d, n;
      case nt:
        return rf(l, c, d, r);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case yn:
            m = 10;
            break e;
          case Kt:
            m = 9;
            break e;
          case St:
            m = 11;
            break e;
          case tt:
            m = 14;
            break e;
          case wt:
            m = 16, o = null;
            break e;
        }
        throw Error(A(130, n == null ? n : typeof n, ""));
    }
    return r = Ea(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function Lu(n, r, l, o) {
    return n = Ea(7, n, o, r), n.lanes = l, n;
  }
  function rf(n, r, l, o) {
    return n = Ea(22, n, o, r), n.elementType = nt, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Id(n, r, l) {
    return n = Ea(6, n, null, r), n.lanes = l, n;
  }
  function af(n, r, l) {
    return r = Ea(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Qd(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = iu(0), this.expirationTimes = iu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = iu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Mu(n, r, l, o, c, d, m, E, T) {
    return n = new Qd(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Ea(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, vd(d), n;
  }
  function Sy(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ce, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Wd(n) {
    if (!n) return Na;
    n = n._reactInternals;
    e: {
      if (W(n) !== n || n.tag !== 1) throw Error(A(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Nn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(A(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Nn(l)) return bl(n, l, r);
    }
    return r;
  }
  function Gd(n, r, l, o, c, d, m, E, T) {
    return n = Mu(l, o, !0, n, c, d, m, E, T), n.context = Wd(null), l = n.current, o = Wn(), c = li(l), d = ha(o, c), d.callback = r ?? null, ma(l, d, c), n.current.lanes = c, Sl(n, c, o), en(n, o), n;
  }
  function Ws(n, r, l, o) {
    var c = r.current, d = Wn(), m = li(c);
    return l = Wd(l), r.context === null ? r.context = l : r.pendingContext = l, r = ha(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = ma(c, r, m), n !== null && (Ha(n, c, m, d), Nc(n, c, m)), m;
  }
  function lf(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function qd(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Xd(n, r) {
    qd(n, r), (n = n.alternate) && qd(n, r);
  }
  function Ey() {
    return null;
  }
  var lh = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function uf(n) {
    this._internalRoot = n;
  }
  Gs.prototype.render = uf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null) throw Error(A(409));
    Ws(n, r, null, null);
  }, Gs.prototype.unmount = uf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      ku(function() {
        Ws(null, n, null, null);
      }), r[ei] = null;
    }
  };
  function Gs(n) {
    this._internalRoot = n;
  }
  Gs.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = yt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < nn.length && r !== 0 && r < nn[l].priority; l++) ;
      nn.splice(l, 0, n), l === 0 && Ka(n);
    }
  };
  function of(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function nl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function uh() {
  }
  function Cy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = lf(m);
          d.call(z);
        };
      }
      var m = Gd(r, o, n, 0, null, !1, !1, "", uh);
      return n._reactRootContainer = m, n[ei] = m.current, pi(n.nodeType === 8 ? n.parentNode : n), ku(), m;
    }
    for (; c = n.lastChild; ) n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = lf(T);
        E.call(z);
      };
    }
    var T = Mu(n, 0, !1, null, null, !1, !1, "", uh);
    return n._reactRootContainer = T, n[ei] = T.current, pi(n.nodeType === 8 ? n.parentNode : n), ku(function() {
      Ws(r, T, l, o);
    }), T;
  }
  function sf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = lf(m);
          E.call(T);
        };
      }
      Ws(r, m, n, c);
    } else m = Cy(l, r, n, c, o);
    return lf(m);
  }
  Qu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = Ai(r.pendingLanes);
          l !== 0 && (es(r, l | 1), en(r, Ft()), !(bt & 6) && (xu = Ft() + 500, mi()));
        }
        break;
      case 13:
        ku(function() {
          var o = Xi(n, 1);
          if (o !== null) {
            var c = Wn();
            Ha(o, n, 1, c);
          }
        }), Xd(n, 1);
    }
  }, El = function(n) {
    if (n.tag === 13) {
      var r = Xi(n, 134217728);
      if (r !== null) {
        var l = Wn();
        Ha(r, n, 134217728, l);
      }
      Xd(n, 134217728);
    }
  }, ns = function(n) {
    if (n.tag === 13) {
      var r = li(n), l = Xi(n, r);
      if (l !== null) {
        var o = Wn();
        Ha(l, n, r, o);
      }
      Xd(n, r);
    }
  }, yt = function() {
    return mt;
  }, Wu = function(n, r) {
    var l = mt;
    try {
      return mt = n, r();
    } finally {
      mt = l;
    }
  }, Pt = function(n, r, l) {
    switch (r) {
      case "input":
        if (xn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; ) l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = _c(o);
              if (!c) throw Error(A(90));
              Fr(o), xn(o, c);
            }
          }
        }
        break;
      case "textarea":
        dr(n, l);
        break;
      case "select":
        r = l.value, r != null && Hn(n, !!l.multiple, r, !1);
    }
  }, vl = Du, tu = ku;
  var Ry = { usingClientEntryPoint: !1, Events: [vi, ro, _c, Wa, _a, Du] }, qs = { findFiberByHostInstance: Wi, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ty = { bundleType: qs.bundleType, version: qs.version, rendererPackageName: qs.rendererPackageName, rendererConfig: qs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: je.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = ze(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: qs.findFiberByHostInstance || Ey, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xs.isDisabled && Xs.supportsFiber) try {
      yl = Xs.inject(Ty), Vr = Xs;
    } catch {
    }
  }
  return Ia.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ry, Ia.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!of(r)) throw Error(A(200));
    return Sy(n, r, null, l);
  }, Ia.createRoot = function(n, r) {
    if (!of(n)) throw Error(A(299));
    var l = !1, o = "", c = lh;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Mu(n, 1, !1, null, null, l, !1, o, c), n[ei] = r.current, pi(n.nodeType === 8 ? n.parentNode : n), new uf(r);
  }, Ia.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(A(188)) : (n = Object.keys(n).join(","), Error(A(268, n)));
    return n = ze(r), n = n === null ? null : n.stateNode, n;
  }, Ia.flushSync = function(n) {
    return ku(n);
  }, Ia.hydrate = function(n, r, l) {
    if (!nl(r)) throw Error(A(200));
    return sf(null, n, r, !0, l);
  }, Ia.hydrateRoot = function(n, r, l) {
    if (!of(n)) throw Error(A(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = lh;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Gd(r, null, n, 1, l ?? null, c, !1, d, m), n[ei] = r.current, pi(n), o) for (n = 0; n < o.length; n++) l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
      l,
      c
    );
    return new Gs(r);
  }, Ia.render = function(n, r, l) {
    if (!nl(r)) throw Error(A(200));
    return sf(null, n, r, !1, l);
  }, Ia.unmountComponentAtNode = function(n) {
    if (!nl(n)) throw Error(A(40));
    return n._reactRootContainer ? (ku(function() {
      sf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ei] = null;
      });
    }), !0) : !1;
  }, Ia.unstable_batchedUpdates = Du, Ia.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!nl(l)) throw Error(A(200));
    if (n == null || n._reactInternals === void 0) throw Error(A(38));
    return sf(n, r, l, !1, o);
  }, Ia.version = "18.3.1-next-f1338f8080-20240426", Ia;
}
var Qa = {}, oR;
function cD() {
  if (oR) return Qa;
  oR = 1;
  var X = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return X.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var Z = ev(), A = fR(), et = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ot = !1;
    function zt(e) {
      ot = e;
    }
    function Qe(e) {
      if (!ot) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        st("warn", e, a);
      }
    }
    function S(e) {
      if (!ot) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        st("error", e, a);
      }
    }
    function st(e, t, a) {
      {
        var i = et.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = 0, ve = 1, We = 2, te = 3, Ue = 4, ue = 5, Ee = 6, pt = 7, Fn = 8, on = 9, rt = 10, je = 11, kt = 12, Ce = 13, ft = 14, $e = 15, wn = 16, yn = 17, Kt = 18, St = 19, tn = 21, He = 22, tt = 23, wt = 24, nt = 25, P = !0, he = !1, ie = !1, b = !1, B = !1, De = !0, Ve = !1, Ke = !0, at = !0, ht = !0, ct = !0, Et = /* @__PURE__ */ new Set(), Vt = {}, qn = {};
    function Fr(e, t) {
      cr(e, t), cr(e + "Capture", t);
    }
    function cr(e, t) {
      Vt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Vt[e] = t;
      {
        var a = e.toLowerCase();
        qn[a] = e, e === "onDoubleClick" && (qn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Et.add(t[i]);
    }
    var gn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Xn = Object.prototype.hasOwnProperty;
    function jn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function xn(e) {
      try {
        return On(e), !1;
      } catch {
        return !0;
      }
    }
    function On(e) {
      return "" + e;
    }
    function yr(e, t) {
      if (xn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jn(e)), On(e);
    }
    function fr(e) {
      if (xn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jn(e)), On(e);
    }
    function Hn(e, t) {
      if (xn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jn(e)), On(e);
    }
    function na(e, t) {
      if (xn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, jn(e)), On(e);
    }
    function ra(e) {
      if (xn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", jn(e)), On(e);
    }
    function dr(e) {
      if (xn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", jn(e)), On(e);
    }
    var aa = 0, Kn = 1, gr = 2, sn = 3, ia = 4, la = 5, ua = 6, ne = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", be = ne + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", it = new RegExp("^[" + ne + "][" + be + "]*$"), Ut = {}, Ot = {};
    function _n(e) {
      return Xn.call(Ot, e) ? !0 : Xn.call(Ut, e) ? !1 : it.test(e) ? (Ot[e] = !0, !0) : (Ut[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function dn(e, t, a) {
      return t !== null ? t.type === aa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function pr(e, t, a, i) {
      if (a !== null && a.type === aa)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Pt(e, t, a, i) {
      if (t === null || typeof t > "u" || pr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case sn:
            return !t;
          case ia:
            return t === !1;
          case la:
            return isNaN(t);
          case ua:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function $n(e) {
      return Jt.hasOwnProperty(e) ? Jt[e] : null;
    }
    function At(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === gr || t === sn || t === ia, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Jt = {}, Wa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Wa.forEach(function(e) {
      Jt[e] = new At(
        e,
        aa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Jt[t] = new At(
        t,
        Kn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Jt[e] = new At(
        e,
        gr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Jt[e] = new At(
        e,
        gr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Jt[e] = new At(
        e,
        sn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Jt[e] = new At(
        e,
        sn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Jt[e] = new At(
        e,
        ia,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Jt[e] = new At(
        e,
        ua,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Jt[e] = new At(
        e,
        la,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var _a = /[\-\:]([a-z])/g, vl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, vl);
      Jt[t] = new At(
        t,
        Kn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, vl);
      Jt[t] = new At(
        t,
        Kn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(_a, vl);
      Jt[t] = new At(
        t,
        Kn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Jt[e] = new At(
        e,
        Kn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var tu = "xlinkHref";
    Jt[tu] = new At(
      "xlinkHref",
      Kn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Jt[e] = new At(
        e,
        Kn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var nu = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, hl = !1;
    function Ga(e) {
      !hl && nu.test(e) && (hl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function qa(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        yr(a, t), i.sanitizeURL && Ga("" + a);
        var s = i.attributeName, f = null;
        if (i.type === ia) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Pt(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Pt(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === sn)
            return a;
          f = e.getAttribute(s);
        }
        return Pt(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function ba(e, t, a, i) {
      {
        if (!_n(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return yr(a, t), u === "" + a ? a : u;
      }
    }
    function Mi(e, t, a, i) {
      var u = $n(t);
      if (!dn(t, u, i)) {
        if (Pt(t, a, u, i) && (a = null), i || u === null) {
          if (_n(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (yr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === sn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var _ = u.type, w;
          _ === sn || _ === ia && a === !0 ? w = "" : (yr(a, y), w = "" + a, u.sanitizeURL && Ga(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var Sr = Symbol.for("react.element"), jr = Symbol.for("react.portal"), oa = Symbol.for("react.fragment"), Ni = Symbol.for("react.strict_mode"), ml = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), I = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), Le = Symbol.for("react.suspense"), dt = Symbol.for("react.suspense_list"), Ct = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), lt = Symbol.for("react.scope"), Ln = Symbol.for("react.debug_trace_mode"), Wt = Symbol.for("react.offscreen"), cn = Symbol.for("react.legacy_hidden"), vr = Symbol.for("react.cache"), Ft = Symbol.for("react.tracing_marker"), Da = Symbol.iterator, Mn = "@@iterator";
    function Hr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Da && e[Da] || e[Mn];
      return typeof t == "function" ? t : null;
    }
    var Je = Object.assign, zi = 0, Ui, yl, Vr, qo, Er, Xo, Ko;
    function Jo() {
    }
    Jo.__reactDisabledLog = !0;
    function ru() {
      {
        if (zi === 0) {
          Ui = console.log, yl = console.info, Vr = console.warn, qo = console.error, Er = console.group, Xo = console.groupCollapsed, Ko = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Jo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        zi++;
      }
    }
    function Iu() {
      {
        if (zi--, zi === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Je({}, e, {
              value: Ui
            }),
            info: Je({}, e, {
              value: yl
            }),
            warn: Je({}, e, {
              value: Vr
            }),
            error: Je({}, e, {
              value: qo
            }),
            group: Je({}, e, {
              value: Er
            }),
            groupCollapsed: Je({}, e, {
              value: Xo
            }),
            groupEnd: Je({}, e, {
              value: Ko
            })
          });
        }
        zi < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ai = et.ReactCurrentDispatcher, ci;
    function ka(e, t, a) {
      {
        if (ci === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ci = i && i[1] || "";
          }
        return `
` + ci + e;
      }
    }
    var gl = !1, fi;
    {
      var au = typeof WeakMap == "function" ? WeakMap : Map;
      fi = new au();
    }
    function iu(e, t) {
      if (!e || gl)
        return "";
      {
        var a = fi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      gl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Ai.current, Ai.current = null, ru();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var _ = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && fi.set(e, _), _;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        gl = !1, Ai.current = s, Iu(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", N = w ? ka(w) : "";
      return typeof e == "function" && fi.set(e, N), N;
    }
    function Sl(e, t, a) {
      return iu(e, !0);
    }
    function Zo(e, t, a) {
      return iu(e, !1);
    }
    function es(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function mt(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return iu(e, es(e));
      if (typeof e == "string")
        return ka(e);
      switch (e) {
        case Le:
          return ka("Suspense");
        case dt:
          return ka("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case W:
            return Zo(e.render);
          case Ct:
            return mt(e.type, t, a);
          case ze: {
            var i = e, u = i._payload, s = i._init;
            try {
              return mt(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ts(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ue:
          return ka(e.type);
        case wn:
          return ka("Lazy");
        case Ce:
          return ka("Suspense");
        case St:
          return ka("SuspenseList");
        case ke:
        case We:
        case $e:
          return Zo(e.type);
        case je:
          return Zo(e.type.render);
        case ve:
          return Sl(e.type);
        default:
          return "";
      }
    }
    function Qu(e) {
      try {
        var t = "", a = e;
        do
          t += ts(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function El(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function ns(e) {
      return e.displayName || "Context";
    }
    function yt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case oa:
          return "Fragment";
        case jr:
          return "Portal";
        case ml:
          return "Profiler";
        case Ni:
          return "StrictMode";
        case Le:
          return "Suspense";
        case dt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            var t = e;
            return ns(t) + ".Consumer";
          case R:
            var a = e;
            return ns(a._context) + ".Provider";
          case W:
            return El(e, e.render, "ForwardRef");
          case Ct:
            var i = e.displayName || null;
            return i !== null ? i : yt(e.type) || "Memo";
          case ze: {
            var u = e, s = u._payload, f = u._init;
            try {
              return yt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Wu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function lu(e) {
      return e.displayName || "Context";
    }
    function Ye(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case wt:
          return "Cache";
        case on:
          var i = a;
          return lu(i) + ".Consumer";
        case rt:
          var u = a;
          return lu(u._context) + ".Provider";
        case Kt:
          return "DehydratedFragment";
        case je:
          return Wu(a, a.render, "ForwardRef");
        case pt:
          return "Fragment";
        case ue:
          return a;
        case Ue:
          return "Portal";
        case te:
          return "Root";
        case Ee:
          return "Text";
        case wn:
          return yt(a);
        case Fn:
          return a === Ni ? "StrictMode" : "Mode";
        case He:
          return "Offscreen";
        case kt:
          return "Profiler";
        case tn:
          return "Scope";
        case Ce:
          return "Suspense";
        case St:
          return "SuspenseList";
        case nt:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case ve:
        case ke:
        case yn:
        case We:
        case ft:
        case $e:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Xa = et.ReactDebugCurrentFrame, pn = null, Pr = !1;
    function Oa() {
      {
        if (pn === null)
          return null;
        var e = pn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ye(e);
      }
      return null;
    }
    function Cl() {
      return pn === null ? "" : Qu(pn);
    }
    function nn() {
      Xa.getCurrentStack = null, pn = null, Pr = !1;
    }
    function vn(e) {
      Xa.getCurrentStack = e === null ? null : Cl, pn = e, Pr = !1;
    }
    function rs() {
      return pn;
    }
    function Jn(e) {
      Pr = e;
    }
    function Br(e) {
      return "" + e;
    }
    function Ka(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return dr(e), e;
        default:
          return "";
      }
    }
    var Gu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function uu(e, t) {
      Gu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function ou(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Rl(e) {
      return e._valueTracker;
    }
    function La(e) {
      e._valueTracker = null;
    }
    function Fi(e) {
      var t = "";
      return e && (ou(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function su(e) {
      var t = ou(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      dr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            dr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            dr(p), i = "" + p;
          },
          stopTracking: function() {
            La(e), delete e[t];
          }
        };
        return f;
      }
    }
    function ji(e) {
      Rl(e) || (e._valueTracker = su(e));
    }
    function qu(e) {
      if (!e)
        return !1;
      var t = Rl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Fi(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function di(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Hi = !1, Xu = !1, as = !1, Ja = !1;
    function Ku(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = Je({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      uu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Xu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Oa() || "A component", t.type), Xu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Hi && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Oa() || "A component", t.type), Hi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ka(t.value != null ? t.value : i),
        controlled: Ku(t)
      };
    }
    function M(e, t) {
      var a = e, i = t.checked;
      i != null && Mi(a, "checked", i, !1);
    }
    function F(e, t) {
      var a = e;
      {
        var i = Ku(t);
        !a._wrapperState.controlled && i && !Ja && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ja = !0), a._wrapperState.controlled && !i && !as && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), as = !0);
      }
      M(e, t);
      var u = Ka(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = Br(u)) : a.value !== Br(u) && (a.value = Br(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Pe(a, t.type, u) : t.hasOwnProperty("defaultValue") && Pe(a, t.type, Ka(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function K(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = Br(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function ge(e, t) {
      var a = e;
      F(a, t), fe(a, t);
    }
    function fe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        yr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = xh(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            qu(f), F(f, p);
          }
        }
      }
    }
    function Pe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || di(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Br(e._wrapperState.initialValue) : e.defaultValue !== Br(a) && (e.defaultValue = Br(a)));
    }
    var ut = !1, jt = !1, Bt = !1;
    function $t(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Z.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || jt || (jt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Bt || (Bt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ut && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ut = !0);
    }
    function Yt(e, t) {
      t.value != null && e.setAttribute("value", Br(Ka(t.value)));
    }
    var rn = Array.isArray;
    function xt(e) {
      return rn(e);
    }
    var Tl;
    Tl = !1;
    function Ju() {
      var e = Oa();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var is = ["value", "defaultValue"];
    function ls(e) {
      {
        uu("select", e);
        for (var t = 0; t < is.length; t++) {
          var a = is[t];
          if (e[a] != null) {
            var i = xt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Ju()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Ju());
          }
        }
      }
    }
    function Vi(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = Br(Ka(a)), _ = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          _ === null && !u[w].disabled && (_ = u[w]);
        }
        _ !== null && (_.selected = !0);
      }
    }
    function us(e, t) {
      return Je({}, t, {
        value: void 0
      });
    }
    function os(e, t) {
      var a = e;
      ls(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Tl && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Tl = !0);
    }
    function Pf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Vi(a, !!t.multiple, i, !1) : t.defaultValue != null && Vi(a, !!t.multiple, t.defaultValue, !0);
    }
    function $m(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Vi(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Vi(a, !!t.multiple, t.defaultValue, !0) : Vi(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function tv(e, t) {
      var a = e, i = t.value;
      i != null && Vi(a, !!t.multiple, i, !1);
    }
    var nv = !1;
    function Bf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Je({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Br(a._wrapperState.initialValue)
      });
      return i;
    }
    function rv(e, t) {
      var a = e;
      uu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !nv && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Oa() || "A component"), nv = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (xt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ka(i)
      };
    }
    function av(e, t) {
      var a = e, i = Ka(t.value), u = Ka(t.defaultValue);
      if (i != null) {
        var s = Br(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = Br(u));
    }
    function mc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Ym(e, t) {
      av(e, t);
    }
    var Pi = "http://www.w3.org/1999/xhtml", Im = "http://www.w3.org/1998/Math/MathML", yc = "http://www.w3.org/2000/svg";
    function $f(e) {
      switch (e) {
        case "svg":
          return yc;
        case "math":
          return Im;
        default:
          return Pi;
      }
    }
    function Yf(e, t) {
      return e == null || e === Pi ? $f(t) : e === yc && t === "foreignObject" ? Pi : e;
    }
    var Qm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, gc, iv = Qm(function(e, t) {
      if (e.namespaceURI === yc && !("innerHTML" in e)) {
        gc = gc || document.createElement("div"), gc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = gc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), $r = 1, Bi = 3, Sn = 8, sa = 9, If = 11, ss = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Bi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, lv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Zu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function uv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ov = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Zu).forEach(function(e) {
      ov.forEach(function(t) {
        Zu[uv(t, e)] = Zu[e];
      });
    });
    function wl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Zu.hasOwnProperty(e) && Zu[e]) ? t + "px" : (na(t, e), ("" + t).trim());
    }
    var Wm = /([A-Z])/g, Gm = /^ms-/;
    function qm(e) {
      return e.replace(Wm, "-$1").toLowerCase().replace(Gm, "-ms-");
    }
    var Qf = function() {
    };
    {
      var sv = /^(?:webkit|moz|o)[A-Z]/, cs = /^-ms-/, fs = /-(.)/g, cv = /;\s*$/, $i = {}, Wf = {}, Gf = !1, Sc = !1, qf = function(e) {
        return e.replace(fs, function(t, a) {
          return a.toUpperCase();
        });
      }, fv = function(e) {
        $i.hasOwnProperty(e) && $i[e] || ($i[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          qf(e.replace(cs, "ms-"))
        ));
      }, dv = function(e) {
        $i.hasOwnProperty(e) && $i[e] || ($i[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, pv = function(e, t) {
        Wf.hasOwnProperty(t) && Wf[t] || (Wf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(cv, "")));
      }, Xm = function(e, t) {
        Gf || (Gf = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Km = function(e, t) {
        Sc || (Sc = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Qf = function(e, t) {
        e.indexOf("-") > -1 ? fv(e) : sv.test(e) ? dv(e) : cv.test(t) && pv(e, t), typeof t == "number" && (isNaN(t) ? Xm(e, t) : isFinite(t) || Km(e, t));
      };
    }
    var Jm = Qf;
    function Zm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : qm(i)) + ":", t += wl(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function vv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Jm(i, t[i]);
          var s = wl(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Za(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function eo(e) {
      var t = {};
      for (var a in e)
        for (var i = lv[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function hv(e, t) {
      {
        if (!t)
          return;
        var a = eo(e), i = eo(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Za(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var mv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, yv = Je({
      menuitem: !0
    }, mv), gv = "__html";
    function ds(e, t) {
      if (t) {
        if (yv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(gv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function cu(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Ec = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, fu = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, xl = {}, ps = new RegExp("^(aria)-[" + be + "]*$"), Xf = new RegExp("^(aria)[A-Z][" + be + "]*$");
    function Sv(e, t) {
      {
        if (Xn.call(xl, t) && xl[t])
          return !0;
        if (Xf.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = fu.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), xl[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), xl[t] = !0, !0;
        }
        if (ps.test(t)) {
          var u = t.toLowerCase(), s = fu.hasOwnProperty(u) ? u : null;
          if (s == null)
            return xl[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), xl[t] = !0, !0;
        }
      }
      return !0;
    }
    function Cc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Sv(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function to(e, t) {
      cu(e, t) || Cc(e, t);
    }
    var Rc = !1;
    function Ev(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Rc && (Rc = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var vs = function() {
    };
    {
      var hr = {}, Kf = /^on./, Cv = /^on[^A-Z]/, Rv = new RegExp("^(aria)-[" + be + "]*$"), Tv = new RegExp("^(aria)[A-Z][" + be + "]*$");
      vs = function(e, t, a, i) {
        if (Xn.call(hr, t) && hr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), hr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), hr[t] = !0, !0;
          if (Kf.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), hr[t] = !0, !0;
        } else if (Kf.test(t))
          return Cv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), hr[t] = !0, !0;
        if (Rv.test(t) || Tv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), hr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), hr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), hr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), hr[t] = !0, !0;
        var v = $n(t), y = v !== null && v.type === aa;
        if (Ec.hasOwnProperty(u)) {
          var g = Ec[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), hr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), hr[t] = !0, !0;
        return typeof a == "boolean" && pr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), hr[t] = !0, !0) : y ? !0 : pr(t, a, v, !1) ? (hr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === sn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), hr[t] = !0), !0);
      };
    }
    var wv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = vs(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function _l(e, t, a) {
      cu(e, t) || wv(e, t, a);
    }
    var Tc = 1, hs = 2, ms = 4, ey = Tc | hs | ms, Yi = null;
    function ty(e) {
      Yi !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Yi = e;
    }
    function xv() {
      Yi === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Yi = null;
    }
    function _v(e) {
      return e === Yi;
    }
    function Gt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Bi ? t.parentNode : t;
    }
    var ys = null, Ii = null, pi = null;
    function Jf(e) {
      var t = Mo(e);
      if (t) {
        if (typeof ys != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = xh(a);
          ys(t.stateNode, t.type, i);
        }
      }
    }
    function Zf(e) {
      ys = e;
    }
    function no(e) {
      Ii ? pi ? pi.push(e) : pi = [e] : Ii = e;
    }
    function wc() {
      return Ii !== null || pi !== null;
    }
    function du() {
      if (Ii) {
        var e = Ii, t = pi;
        if (Ii = null, pi = null, Jf(e), t)
          for (var a = 0; a < t.length; a++)
            Jf(t[a]);
      }
    }
    var ed = function(e, t) {
      return e(t);
    }, bv = function() {
    }, td = !1;
    function Dv() {
      var e = wc();
      e && (bv(), du());
    }
    function gs(e, t, a) {
      if (td)
        return e(t, a);
      td = !0;
      try {
        return ed(e, t, a);
      } finally {
        td = !1, Dv();
      }
    }
    function xc(e, t, a) {
      ed = e, bv = a;
    }
    function nd(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function rd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && nd(t));
        default:
          return !1;
      }
    }
    function pu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = xh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (rd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var Ss = !1;
    if (gn)
      try {
        var Es = {};
        Object.defineProperty(Es, "passive", {
          get: function() {
            Ss = !0;
          }
        }), window.addEventListener("test", Es, Es), window.removeEventListener("test", Es, Es);
      } catch {
        Ss = !1;
      }
    function ad(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var kv = ad;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var id = document.createElement("react");
      kv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), _ = !1, w = !0, N = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          id.removeEventListener(H, Ne, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var le = Array.prototype.slice.call(arguments, 3);
        function Ne() {
          _ = !0, j(), a.apply(i, le), w = !1;
        }
        var _e, Tt = !1, vt = !1;
        function k(O) {
          if (_e = O.error, Tt = !0, _e === null && O.colno === 0 && O.lineno === 0 && (vt = !0), O.defaultPrevented && _e != null && typeof _e == "object")
            try {
              _e._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), id.addEventListener(H, Ne, !1), g.initEvent(H, !1, !1), id.dispatchEvent(g), U && Object.defineProperty(window, "event", U), _ && w && (Tt ? vt && (_e = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : _e = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(_e)), window.removeEventListener("error", k), !_)
          return j(), ad.apply(this, arguments);
      };
    }
    var ld = kv, ca = !1, Cs = null, Qi = !1, Ma = null, Rs = {
      onError: function(e) {
        ca = !0, Cs = e;
      }
    };
    function ei(e, t, a, i, u, s, f, p, v) {
      ca = !1, Cs = null, ld.apply(Rs, arguments);
    }
    function ud(e, t, a, i, u, s, f, p, v) {
      if (ei.apply(this, arguments), ca) {
        var y = Wi();
        Qi || (Qi = !0, Ma = y);
      }
    }
    function ny() {
      if (Qi) {
        var e = Ma;
        throw Qi = !1, Ma = null, e;
      }
    }
    function ry() {
      return ca;
    }
    function Wi() {
      if (ca) {
        var e = Cs;
        return ca = !1, Cs = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function vi(e) {
      return e._reactInternals;
    }
    function ro(e) {
      return e._reactInternals !== void 0;
    }
    function _c(e, t) {
      e._reactInternals = t;
    }
    var Me = (
      /*                      */
      0
    ), ti = (
      /*                */
      1
    ), qt = (
      /*                    */
      2
    ), Re = (
      /*                       */
      4
    ), Lt = (
      /*                */
      16
    ), Na = (
      /*                 */
      32
    ), Yn = (
      /*                     */
      64
    ), Ge = (
      /*                   */
      128
    ), Cr = (
      /*            */
      256
    ), fa = (
      /*                          */
      512
    ), Nn = (
      /*                     */
      1024
    ), Yr = (
      /*                      */
      2048
    ), hi = (
      /*                    */
      4096
    ), bl = (
      /*                   */
      8192
    ), vu = (
      /*             */
      16384
    ), Ov = Yr | Re | Yn | fa | Nn | vu, Gi = (
      /*               */
      32767
    ), Dl = (
      /*                   */
      32768
    ), Zn = (
      /*                */
      65536
    ), bc = (
      /* */
      131072
    ), Lv = (
      /*                       */
      1048576
    ), mi = (
      /*                    */
      2097152
    ), za = (
      /*                 */
      4194304
    ), kl = (
      /*                */
      8388608
    ), Ua = (
      /*               */
      16777216
    ), hu = (
      /*              */
      33554432
    ), Ir = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Re | Nn | 0
    ), Qr = qt | Re | Lt | Na | fa | hi | bl, ni = Re | Yn | fa | bl, Wr = Yr | Lt, er = za | kl | mi, mu = et.ReactCurrentOwner;
    function Ol(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (qt | hi)) !== Me && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === te ? a : null;
    }
    function Dc(e) {
      if (e.tag === Ce) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function kc(e) {
      return e.tag === te ? e.stateNode.containerInfo : null;
    }
    function da(e) {
      return Ol(e) === e;
    }
    function pa(e) {
      {
        var t = mu.current;
        if (t !== null && t.tag === ve) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ye(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = vi(e);
      return u ? Ol(u) === u : !1;
    }
    function an(e) {
      if (Ol(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Aa(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ol(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return an(s), e;
            if (v === u)
              return an(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== te)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function od(e) {
      var t = Aa(e);
      return t !== null ? sd(t) : null;
    }
    function sd(e) {
      if (e.tag === ue || e.tag === Ee)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = sd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function cd(e) {
      var t = Aa(e);
      return t !== null ? Oc(t) : null;
    }
    function Oc(e) {
      if (e.tag === ue || e.tag === Ee)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Ue) {
          var a = Oc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var fd = A.unstable_scheduleCallback, Lc = A.unstable_cancelCallback, Mv = A.unstable_shouldYield, ao = A.unstable_requestPaint, zn = A.unstable_now, ay = A.unstable_getCurrentPriorityLevel, Ll = A.unstable_ImmediatePriority, io = A.unstable_UserBlockingPriority, Ml = A.unstable_NormalPriority, Nv = A.unstable_LowPriority, Nl = A.unstable_IdlePriority, zv = A.unstable_yieldValue, Mc = A.unstable_setDisableYieldValue, qi = null, bn = null, ae = null, Fa = !1, va = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function dd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        at && (e = Je({}, e, {
          getLaneLabelMap: zl,
          injectProfilingHooks: Xi
        })), qi = t.inject(e), bn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function lo(e, t) {
      if (bn && typeof bn.onScheduleFiberRoot == "function")
        try {
          bn.onScheduleFiberRoot(qi, e, t);
        } catch (a) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function ja(e, t) {
      if (bn && typeof bn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ge) === Ge;
          if (ht) {
            var i;
            switch (t) {
              case ga:
                i = Ll;
                break;
              case Ci:
                i = io;
                break;
              case ii:
                i = Ml;
                break;
              case Us:
                i = Nl;
                break;
              default:
                i = Ml;
                break;
            }
            bn.onCommitFiberRoot(qi, e, i, a);
          }
        } catch (u) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function yu(e) {
      if (bn && typeof bn.onPostCommitFiberRoot == "function")
        try {
          bn.onPostCommitFiberRoot(qi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function pd(e) {
      if (bn && typeof bn.onCommitFiberUnmount == "function")
        try {
          bn.onCommitFiberUnmount(qi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Vn(e) {
      if (typeof zv == "function" && (Mc(e), zt(e)), bn && typeof bn.setStrictMode == "function")
        try {
          bn.setStrictMode(qi, e);
        } catch (t) {
          Fa || (Fa = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Xi(e) {
      ae = e;
    }
    function zl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < xs; a++) {
          var i = ly(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function vd(e) {
      ae !== null && typeof ae.markCommitStarted == "function" && ae.markCommitStarted(e);
    }
    function hd() {
      ae !== null && typeof ae.markCommitStopped == "function" && ae.markCommitStopped();
    }
    function ha(e) {
      ae !== null && typeof ae.markComponentRenderStarted == "function" && ae.markComponentRenderStarted(e);
    }
    function ma() {
      ae !== null && typeof ae.markComponentRenderStopped == "function" && ae.markComponentRenderStopped();
    }
    function Nc(e) {
      ae !== null && typeof ae.markComponentPassiveEffectMountStarted == "function" && ae.markComponentPassiveEffectMountStarted(e);
    }
    function Uv() {
      ae !== null && typeof ae.markComponentPassiveEffectMountStopped == "function" && ae.markComponentPassiveEffectMountStopped();
    }
    function zc(e) {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStarted == "function" && ae.markComponentPassiveEffectUnmountStarted(e);
    }
    function Av() {
      ae !== null && typeof ae.markComponentPassiveEffectUnmountStopped == "function" && ae.markComponentPassiveEffectUnmountStopped();
    }
    function Ts(e) {
      ae !== null && typeof ae.markComponentLayoutEffectMountStarted == "function" && ae.markComponentLayoutEffectMountStarted(e);
    }
    function yi() {
      ae !== null && typeof ae.markComponentLayoutEffectMountStopped == "function" && ae.markComponentLayoutEffectMountStopped();
    }
    function uo(e) {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStarted == "function" && ae.markComponentLayoutEffectUnmountStarted(e);
    }
    function oo() {
      ae !== null && typeof ae.markComponentLayoutEffectUnmountStopped == "function" && ae.markComponentLayoutEffectUnmountStopped();
    }
    function gu(e, t, a) {
      ae !== null && typeof ae.markComponentErrored == "function" && ae.markComponentErrored(e, t, a);
    }
    function md(e, t, a) {
      ae !== null && typeof ae.markComponentSuspended == "function" && ae.markComponentSuspended(e, t, a);
    }
    function so(e) {
      ae !== null && typeof ae.markLayoutEffectsStarted == "function" && ae.markLayoutEffectsStarted(e);
    }
    function Fv() {
      ae !== null && typeof ae.markLayoutEffectsStopped == "function" && ae.markLayoutEffectsStopped();
    }
    function yd(e) {
      ae !== null && typeof ae.markPassiveEffectsStarted == "function" && ae.markPassiveEffectsStarted(e);
    }
    function hn() {
      ae !== null && typeof ae.markPassiveEffectsStopped == "function" && ae.markPassiveEffectsStopped();
    }
    function ws(e) {
      ae !== null && typeof ae.markRenderStarted == "function" && ae.markRenderStarted(e);
    }
    function gd() {
      ae !== null && typeof ae.markRenderYielded == "function" && ae.markRenderYielded();
    }
    function Uc() {
      ae !== null && typeof ae.markRenderStopped == "function" && ae.markRenderStopped();
    }
    function Ac(e) {
      ae !== null && typeof ae.markRenderScheduled == "function" && ae.markRenderScheduled(e);
    }
    function Sd(e, t) {
      ae !== null && typeof ae.markForceUpdateScheduled == "function" && ae.markForceUpdateScheduled(e, t);
    }
    function Ki(e, t) {
      ae !== null && typeof ae.markStateUpdateScheduled == "function" && ae.markStateUpdateScheduled(e, t);
    }
    var re = (
      /*                         */
      0
    ), Oe = (
      /*                 */
      1
    ), Ie = (
      /*                    */
      2
    ), ln = (
      /*               */
      8
    ), Gr = (
      /*              */
      16
    ), co = Math.clz32 ? Math.clz32 : Ed, iy = Math.log, mr = Math.LN2;
    function Ed(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (iy(t) / mr | 0) | 0;
    }
    var xs = 31, $ = (
      /*                        */
      0
    ), Xt = (
      /*                          */
      0
    ), we = (
      /*                        */
      1
    ), gi = (
      /*    */
      2
    ), ri = (
      /*             */
      4
    ), Ji = (
      /*            */
      8
    ), ai = (
      /*                     */
      16
    ), fo = (
      /*                */
      32
    ), Su = (
      /*                       */
      4194240
    ), po = (
      /*                        */
      64
    ), Fc = (
      /*                        */
      128
    ), jc = (
      /*                        */
      256
    ), Hc = (
      /*                        */
      512
    ), Vc = (
      /*                        */
      1024
    ), Eu = (
      /*                        */
      2048
    ), Pc = (
      /*                        */
      4096
    ), vo = (
      /*                        */
      8192
    ), ho = (
      /*                        */
      16384
    ), Bc = (
      /*                       */
      32768
    ), _s = (
      /*                       */
      65536
    ), $c = (
      /*                       */
      131072
    ), Yc = (
      /*                       */
      262144
    ), Ic = (
      /*                       */
      524288
    ), Qc = (
      /*                       */
      1048576
    ), bs = (
      /*                       */
      2097152
    ), Ds = (
      /*                            */
      130023424
    ), Cu = (
      /*                             */
      4194304
    ), Wc = (
      /*                             */
      8388608
    ), Cd = (
      /*                             */
      16777216
    ), Gc = (
      /*                             */
      33554432
    ), Rd = (
      /*                             */
      67108864
    ), jv = Cu, mo = (
      /*          */
      134217728
    ), Td = (
      /*                          */
      268435455
    ), yo = (
      /*               */
      268435456
    ), Si = (
      /*                        */
      536870912
    ), ya = (
      /*                   */
      1073741824
    );
    function ly(e) {
      {
        if (e & we)
          return "Sync";
        if (e & gi)
          return "InputContinuousHydration";
        if (e & ri)
          return "InputContinuous";
        if (e & Ji)
          return "DefaultHydration";
        if (e & ai)
          return "Default";
        if (e & fo)
          return "TransitionHydration";
        if (e & Su)
          return "Transition";
        if (e & Ds)
          return "Retry";
        if (e & mo)
          return "SelectiveHydration";
        if (e & yo)
          return "IdleHydration";
        if (e & Si)
          return "Idle";
        if (e & ya)
          return "Offscreen";
      }
    }
    var Zt = -1, qr = po, go = Cu;
    function Ul(e) {
      switch (Al(e)) {
        case we:
          return we;
        case gi:
          return gi;
        case ri:
          return ri;
        case Ji:
          return Ji;
        case ai:
          return ai;
        case fo:
          return fo;
        case po:
        case Fc:
        case jc:
        case Hc:
        case Vc:
        case Eu:
        case Pc:
        case vo:
        case ho:
        case Bc:
        case _s:
        case $c:
        case Yc:
        case Ic:
        case Qc:
        case bs:
          return e & Su;
        case Cu:
        case Wc:
        case Cd:
        case Gc:
        case Rd:
          return e & Ds;
        case mo:
          return mo;
        case yo:
          return yo;
        case Si:
          return Si;
        case ya:
          return ya;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function ks(e, t) {
      var a = e.pendingLanes;
      if (a === $)
        return $;
      var i = $, u = e.suspendedLanes, s = e.pingedLanes, f = a & Td;
      if (f !== $) {
        var p = f & ~u;
        if (p !== $)
          i = Ul(p);
        else {
          var v = f & s;
          v !== $ && (i = Ul(v));
        }
      } else {
        var y = a & ~u;
        y !== $ ? i = Ul(y) : s !== $ && (i = Ul(s));
      }
      if (i === $)
        return $;
      if (t !== $ && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === $) {
        var g = Al(i), _ = Al(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= _ || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === ai && (_ & Su) !== $
        )
          return t;
      }
      (i & ri) !== $ && (i |= a & ai);
      var w = e.entangledLanes;
      if (w !== $)
        for (var N = e.entanglements, U = i & w; U > 0; ) {
          var j = Fl(U), le = 1 << j;
          i |= N[j], U &= ~le;
        }
      return i;
    }
    function Hv(e, t) {
      for (var a = e.eventTimes, i = Zt; t > 0; ) {
        var u = Fl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function Vv(e, t) {
      switch (e) {
        case we:
        case gi:
        case ri:
          return t + 250;
        case Ji:
        case ai:
        case fo:
        case po:
        case Fc:
        case jc:
        case Hc:
        case Vc:
        case Eu:
        case Pc:
        case vo:
        case ho:
        case Bc:
        case _s:
        case $c:
        case Yc:
        case Ic:
        case Qc:
        case bs:
          return t + 5e3;
        case Cu:
        case Wc:
        case Cd:
        case Gc:
        case Rd:
          return Zt;
        case mo:
        case yo:
        case Si:
        case ya:
          return Zt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Zt;
      }
    }
    function wd(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Fl(f), v = 1 << p, y = s[p];
        y === Zt ? ((v & i) === $ || (v & u) !== $) && (s[p] = Vv(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function So(e) {
      return Ul(e.pendingLanes);
    }
    function Os(e) {
      var t = e.pendingLanes & ~ya;
      return t !== $ ? t : t & ya ? ya : $;
    }
    function xd(e) {
      return (e & we) !== $;
    }
    function _d(e) {
      return (e & Td) !== $;
    }
    function bd(e) {
      return (e & Ds) === e;
    }
    function Pv(e) {
      var t = we | ri | ai;
      return (e & t) === $;
    }
    function Bv(e) {
      return (e & Su) === e;
    }
    function Ls(e, t) {
      var a = gi | ri | Ji | ai;
      return (t & a) !== $;
    }
    function $v(e, t) {
      return (t & e.expiredLanes) !== $;
    }
    function Yv(e) {
      return (e & Su) !== $;
    }
    function Rr() {
      var e = qr;
      return qr <<= 1, (qr & Su) === $ && (qr = po), e;
    }
    function Tr() {
      var e = go;
      return go <<= 1, (go & Ds) === $ && (go = Cu), e;
    }
    function Al(e) {
      return e & -e;
    }
    function Eo(e) {
      return Al(e);
    }
    function Fl(e) {
      return 31 - co(e);
    }
    function qc(e) {
      return Fl(e);
    }
    function Xr(e, t) {
      return (e & t) !== $;
    }
    function jl(e, t) {
      return (e & t) === t;
    }
    function Ze(e, t) {
      return e | t;
    }
    function Co(e, t) {
      return e & ~t;
    }
    function Dd(e, t) {
      return e & t;
    }
    function uy(e) {
      return e;
    }
    function kd(e, t) {
      return e !== Xt && e < t ? e : t;
    }
    function Ms(e) {
      for (var t = [], a = 0; a < xs; a++)
        t.push(e);
      return t;
    }
    function Ro(e, t, a) {
      e.pendingLanes |= t, t !== Si && (e.suspendedLanes = $, e.pingedLanes = $);
      var i = e.eventTimes, u = qc(t);
      i[u] = a;
    }
    function Od(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Fl(i), s = 1 << u;
        a[u] = Zt, i &= ~s;
      }
    }
    function Ns(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function oy(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = $, e.pingedLanes = $, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Fl(f), v = 1 << p;
        i[p] = $, u[p] = Zt, s[p] = Zt, f &= ~v;
      }
    }
    function Xc(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Fl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Ld(e, t) {
      var a = Al(t), i;
      switch (a) {
        case ri:
          i = gi;
          break;
        case ai:
          i = Ji;
          break;
        case po:
        case Fc:
        case jc:
        case Hc:
        case Vc:
        case Eu:
        case Pc:
        case vo:
        case ho:
        case Bc:
        case _s:
        case $c:
        case Yc:
        case Ic:
        case Qc:
        case bs:
        case Cu:
        case Wc:
        case Cd:
        case Gc:
        case Rd:
          i = fo;
          break;
        case Si:
          i = yo;
          break;
        default:
          i = Xt;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Xt ? Xt : i;
    }
    function Md(e, t, a) {
      if (va)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = qc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function zs(e, t) {
      if (va)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = qc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Ei(e, t) {
      return null;
    }
    var ga = we, Ci = ri, ii = ai, Us = Si, To = Xt;
    function wr() {
      return To;
    }
    function _t(e) {
      To = e;
    }
    function sy(e, t) {
      var a = To;
      try {
        return To = e, t();
      } finally {
        To = a;
      }
    }
    function cy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function Kc(e, t) {
      return e > t ? e : t;
    }
    function In(e, t) {
      return e !== 0 && e < t;
    }
    function Iv(e) {
      var t = Al(e);
      return In(ga, t) ? In(Ci, t) ? _d(t) ? ii : Us : Ci : ga;
    }
    function de(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Ru;
    function Nd(e) {
      Ru = e;
    }
    function Qv(e) {
      Ru(e);
    }
    var zd;
    function As(e) {
      zd = e;
    }
    var Fs;
    function Ud(e) {
      Fs = e;
    }
    var Ad;
    function Wv(e) {
      Ad = e;
    }
    var Fd;
    function jd(e) {
      Fd = e;
    }
    var js = !1, Un = [], Qn = null, xr = null, Zi = null, wo = /* @__PURE__ */ new Map(), _r = /* @__PURE__ */ new Map(), el = [], Ri = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function fy(e) {
      return Ri.indexOf(e) > -1;
    }
    function Gv(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Hd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Qn = null;
          break;
        case "dragenter":
        case "dragleave":
          xr = null;
          break;
        case "mouseover":
        case "mouseout":
          Zi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          wo.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          _r.delete(i);
          break;
        }
      }
    }
    function xo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = Gv(t, a, i, u, s);
        if (t !== null) {
          var p = Mo(t);
          p !== null && zd(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function qv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return Qn = xo(Qn, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return xr = xo(xr, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return Zi = xo(Zi, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return wo.set(y, xo(wo.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, _ = g.pointerId;
          return _r.set(_, xo(_r.get(_) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Xv(e) {
      var t = Zs(e.target);
      if (t !== null) {
        var a = Ol(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Ce) {
            var u = Dc(a);
            if (u !== null) {
              e.blockedOn = u, Fd(e.priority, function() {
                Fs(a);
              });
              return;
            }
          } else if (i === te) {
            var s = a.stateNode;
            if (de(s)) {
              e.blockedOn = kc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Jc(e) {
      for (var t = Ad(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < el.length && In(t, el[i].priority); i++)
        ;
      el.splice(i, 0, a), i === 0 && Xv(a);
    }
    function _o(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Bs(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          ty(s), u.target.dispatchEvent(s), xv();
        } else {
          var f = Mo(i);
          return f !== null && zd(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Sa(e, t, a) {
      _o(e) && a.delete(t);
    }
    function bt() {
      js = !1, Qn !== null && _o(Qn) && (Qn = null), xr !== null && _o(xr) && (xr = null), Zi !== null && _o(Zi) && (Zi = null), wo.forEach(Sa), _r.forEach(Sa);
    }
    function En(e, t) {
      e.blockedOn === t && (e.blockedOn = null, js || (js = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, bt)));
    }
    function fn(e) {
      if (Un.length > 0) {
        En(Un[0], e);
        for (var t = 1; t < Un.length; t++) {
          var a = Un[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Qn !== null && En(Qn, e), xr !== null && En(xr, e), Zi !== null && En(Zi, e);
      var i = function(p) {
        return En(p, e);
      };
      wo.forEach(i), _r.forEach(i);
      for (var u = 0; u < el.length; u++) {
        var s = el[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; el.length > 0; ) {
        var f = el[0];
        if (f.blockedOn !== null)
          break;
        Xv(f), f.blockedOn === null && el.shift();
      }
    }
    var Cn = et.ReactCurrentBatchConfig, br = !0;
    function Tu(e) {
      br = !!e;
    }
    function Pn() {
      return br;
    }
    function Hs(e, t, a) {
      var i = xu(t), u;
      switch (i) {
        case ga:
          u = wu;
          break;
        case Ci:
          u = Zc;
          break;
        case ii:
        default:
          u = Vs;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function wu(e, t, a, i) {
      var u = wr(), s = Cn.transition;
      Cn.transition = null;
      try {
        _t(ga), Vs(e, t, a, i);
      } finally {
        _t(u), Cn.transition = s;
      }
    }
    function Zc(e, t, a, i) {
      var u = wr(), s = Cn.transition;
      Cn.transition = null;
      try {
        _t(Ci), Vs(e, t, a, i);
      } finally {
        _t(u), Cn.transition = s;
      }
    }
    function Vs(e, t, a, i) {
      br && Ps(e, t, a, i);
    }
    function Ps(e, t, a, i) {
      var u = Bs(e, t, a, i);
      if (u === null) {
        Oy(e, t, i, tr, a), Hd(e, i);
        return;
      }
      if (qv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Hd(e, i), t & ms && fy(e)) {
        for (; u !== null; ) {
          var s = Mo(u);
          s !== null && Qv(s);
          var f = Bs(e, t, a, i);
          if (f === null && Oy(e, t, i, tr, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Oy(e, t, i, null, a);
    }
    var tr = null;
    function Bs(e, t, a, i) {
      tr = null;
      var u = Gt(i), s = Zs(u);
      if (s !== null) {
        var f = Ol(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Ce) {
            var v = Dc(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === te) {
            var y = f.stateNode;
            if (de(y))
              return kc(f);
            s = null;
          } else f !== s && (s = null);
        }
      }
      return tr = s, null;
    }
    function xu(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return ga;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ci;
        case "message": {
          var t = ay();
          switch (t) {
            case Ll:
              return ga;
            case io:
              return Ci;
            case Ml:
            case Nv:
              return ii;
            case Nl:
              return Us;
            default:
              return ii;
          }
        }
        default:
          return ii;
      }
    }
    function tl(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function ef(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Vd(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Hl(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Vl = null, Ti = null, Pl = null;
    function $s(e) {
      return Vl = e, Ti = Is(), !0;
    }
    function Pd() {
      Vl = null, Ti = null, Pl = null;
    }
    function Ys() {
      if (Pl)
        return Pl;
      var e, t = Ti, a = t.length, i, u = Is(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Pl = u.slice(e, p), Pl;
    }
    function Is() {
      return "value" in Vl ? Vl.value : Vl.textContent;
    }
    function Wn(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function li() {
      return !0;
    }
    function Ha() {
      return !1;
    }
    function en(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = li : this.isDefaultPrevented = Ha, this.isPropagationStopped = Ha, this;
      }
      return Je(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = li);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = li);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: li
      }), t;
    }
    var _u = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Qs = en(_u), bu = Je({}, _u, {
      view: 0,
      detail: 0
    }), dy = en(bu), wi, tf, Du;
    function ku(e) {
      e !== Du && (Du && e.type === "mousemove" ? (wi = e.screenX - Du.screenX, tf = e.screenY - Du.screenY) : (wi = 0, tf = 0), Du = e);
    }
    var bo = Je({}, bu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: $d,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (ku(e), wi);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : tf;
      }
    }), Bl = en(bo), Kv = Je({}, bo, {
      dataTransfer: 0
    }), Jv = en(Kv), Bd = Je({}, bu, {
      relatedTarget: 0
    }), Do = en(Bd), py = Je({}, _u, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), vy = en(py), Zv = Je({}, _u, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), eh = en(Zv), Ou = Je({}, _u, {
      data: 0
    }), th = en(Ou), ko = th, nh = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Rn = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function hy(e) {
      if (e.key) {
        var t = nh[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Wn(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Rn[e.keyCode] || "Unidentified" : "";
    }
    var rh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function my(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = rh[e];
      return i ? !!a[i] : !1;
    }
    function $d(e) {
      return my;
    }
    var ah = Je({}, bu, {
      key: hy,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: $d,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Wn(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Wn(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), ih = en(ah), yy = Je({}, bo, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Ea = en(yy), Yd = Je({}, bu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: $d
    }), gy = en(Yd), $l = Je({}, _u, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), nf = en($l), Lu = Je({}, bo, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), rf = en(Lu), Id = [9, 13, 27, 32], af = 229, Qd = gn && "CompositionEvent" in window, Mu = null;
    gn && "documentMode" in document && (Mu = document.documentMode);
    var Sy = gn && "TextEvent" in window && !Mu, Wd = gn && (!Qd || Mu && Mu > 8 && Mu <= 11), Gd = 32, Ws = String.fromCharCode(Gd);
    function lf() {
      Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var qd = !1;
    function Xd(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Ey(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function lh(e, t) {
      return e === "keydown" && t.keyCode === af;
    }
    function uf(e, t) {
      switch (e) {
        case "keyup":
          return Id.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== af;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Gs(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function of(e) {
      return e.locale === "ko";
    }
    var nl = !1;
    function uh(e, t, a, i, u) {
      var s, f;
      if (Qd ? s = Ey(t) : nl ? uf(t, i) && (s = "onCompositionEnd") : lh(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Wd && !of(i) && (!nl && s === "onCompositionStart" ? nl = $s(u) : s === "onCompositionEnd" && nl && (f = Ys()));
      var p = dh(a, s);
      if (p.length > 0) {
        var v = new th(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = Gs(i);
          y !== null && (v.data = y);
        }
      }
    }
    function Cy(e, t) {
      switch (e) {
        case "compositionend":
          return Gs(t);
        case "keypress":
          var a = t.which;
          return a !== Gd ? null : (qd = !0, Ws);
        case "textInput":
          var i = t.data;
          return i === Ws && qd ? null : i;
        default:
          return null;
      }
    }
    function sf(e, t) {
      if (nl) {
        if (e === "compositionend" || !Qd && uf(e, t)) {
          var a = Ys();
          return Pd(), nl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Xd(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Wd && !of(t) ? null : t.data;
        default:
          return null;
      }
    }
    function Ry(e, t, a, i, u) {
      var s;
      if (Sy ? s = Cy(t, i) : s = sf(t, i), !s)
        return null;
      var f = dh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new ko("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function qs(e, t, a, i, u, s, f) {
      uh(e, t, a, i, u), Ry(e, t, a, i, u);
    }
    var Ty = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Xs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Ty[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function n(e) {
      if (!gn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function r() {
      Fr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function l(e, t, a, i) {
      no(i);
      var u = dh(t, "onChange");
      if (u.length > 0) {
        var s = new Qs("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var o = null, c = null;
    function d(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function m(e) {
      var t = [];
      l(t, c, e, Gt(e)), gs(E, t);
    }
    function E(e) {
      k0(e, 0);
    }
    function T(e) {
      var t = hf(e);
      if (qu(t))
        return e;
    }
    function z(e, t) {
      if (e === "change")
        return t;
    }
    var Q = !1;
    gn && (Q = n("input") && (!document.documentMode || document.documentMode > 9));
    function G(e, t) {
      o = e, c = t, o.attachEvent("onpropertychange", se);
    }
    function Y() {
      o && (o.detachEvent("onpropertychange", se), o = null, c = null);
    }
    function se(e) {
      e.propertyName === "value" && T(c) && m(e);
    }
    function me(e, t, a) {
      e === "focusin" ? (Y(), G(t, a)) : e === "focusout" && Y();
    }
    function Se(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return T(c);
    }
    function Dn(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function D(e, t) {
      if (e === "click")
        return T(t);
    }
    function x(e, t) {
      if (e === "input" || e === "change")
        return T(t);
    }
    function L(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Pe(e, "number", e.value);
    }
    function J(e, t, a, i, u, s, f) {
      var p = a ? hf(a) : window, v, y;
      if (d(p) ? v = z : Xs(p) ? Q ? v = x : (v = Se, y = me) : Dn(p) && (v = D), v) {
        var g = v(t, a);
        if (g) {
          l(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && L(p);
    }
    function Te() {
      cr("onMouseEnter", ["mouseout", "mouseover"]), cr("onMouseLeave", ["mouseout", "mouseover"]), cr("onPointerEnter", ["pointerout", "pointerover"]), cr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Ae(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !_v(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Zs(y) || cp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var _ = u.ownerDocument;
          _ ? g = _.defaultView || _.parentWindow : g = window;
        }
        var w, N;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (w = a, N = U ? Zs(U) : null, N !== null) {
            var j = Ol(N);
            (N !== j || N.tag !== ue && N.tag !== Ee) && (N = null);
          }
        } else
          w = null, N = a;
        if (w !== N) {
          var le = Bl, Ne = "onMouseLeave", _e = "onMouseEnter", Tt = "mouse";
          (t === "pointerout" || t === "pointerover") && (le = Ea, Ne = "onPointerLeave", _e = "onPointerEnter", Tt = "pointer");
          var vt = w == null ? g : hf(w), k = N == null ? g : hf(N), H = new le(Ne, Tt + "leave", w, i, u);
          H.target = vt, H.relatedTarget = k;
          var O = null, q = Zs(u);
          if (q === a) {
            var pe = new le(_e, Tt + "enter", N, i, u);
            pe.target = k, pe.relatedTarget = vt, O = pe;
          }
          zR(e, H, O, w, N);
        }
      }
    }
    function Fe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var xe = typeof Object.is == "function" ? Object.is : Fe;
    function Tn(e, t) {
      if (xe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Xn.call(t, s) || !xe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Dt(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Yl(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function oh(e, t) {
      for (var a = Dt(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Bi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Dt(Yl(a));
      }
    }
    function pR(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return vR(e, u, s, f, p);
    }
    function vR(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, _ = null;
      e: for (; ; ) {
        for (var w = null; g === t && (a === 0 || g.nodeType === Bi) && (f = s + a), g === i && (u === 0 || g.nodeType === Bi) && (p = s + u), g.nodeType === Bi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
          _ = g, g = w;
        for (; ; ) {
          if (g === e)
            break e;
          if (_ === t && ++v === a && (f = s), _ === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
            break;
          g = _, _ = g.parentNode;
        }
        g = w;
      }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function hR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = oh(e, f), g = oh(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var _ = a.createRange();
          _.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(_), u.extend(g.node, g.offset)) : (_.setEnd(g.node, g.offset), u.addRange(_));
        }
      }
    }
    function y0(e) {
      return e && e.nodeType === Bi;
    }
    function g0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : y0(e) ? !1 : y0(t) ? g0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function mR(e) {
      return e && e.ownerDocument && g0(e.ownerDocument.documentElement, e);
    }
    function yR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function S0() {
      for (var e = window, t = di(); t instanceof e.HTMLIFrameElement; ) {
        if (yR(t))
          e = t.contentWindow;
        else
          return t;
        t = di(e.document);
      }
      return t;
    }
    function wy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function gR() {
      var e = S0();
      return {
        focusedElem: e,
        selectionRange: wy(e) ? ER(e) : null
      };
    }
    function SR(e) {
      var t = S0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && mR(a)) {
        i !== null && wy(a) && CR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === $r && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function ER(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = pR(e), t || {
        start: 0,
        end: 0
      };
    }
    function CR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : hR(e, t);
    }
    var RR = gn && "documentMode" in document && document.documentMode <= 11;
    function TR() {
      Fr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var cf = null, xy = null, Kd = null, _y = !1;
    function wR(e) {
      if ("selectionStart" in e && wy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function xR(e) {
      return e.window === e ? e.document : e.nodeType === sa ? e : e.ownerDocument;
    }
    function E0(e, t, a) {
      var i = xR(a);
      if (!(_y || cf == null || cf !== di(i))) {
        var u = wR(cf);
        if (!Kd || !Tn(Kd, u)) {
          Kd = u;
          var s = dh(xy, "onSelect");
          if (s.length > 0) {
            var f = new Qs("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = cf;
          }
        }
      }
    }
    function _R(e, t, a, i, u, s, f) {
      var p = a ? hf(a) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (Xs(p) || p.contentEditable === "true") && (cf = p, xy = a, Kd = null);
          break;
        case "focusout":
          cf = null, xy = null, Kd = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          _y = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          _y = !1, E0(e, i, u);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (RR)
            break;
        // falls through
        case "keydown":
        case "keyup":
          E0(e, i, u);
      }
    }
    function sh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var ff = {
      animationend: sh("Animation", "AnimationEnd"),
      animationiteration: sh("Animation", "AnimationIteration"),
      animationstart: sh("Animation", "AnimationStart"),
      transitionend: sh("Transition", "TransitionEnd")
    }, by = {}, C0 = {};
    gn && (C0 = document.createElement("div").style, "AnimationEvent" in window || (delete ff.animationend.animation, delete ff.animationiteration.animation, delete ff.animationstart.animation), "TransitionEvent" in window || delete ff.transitionend.transition);
    function ch(e) {
      if (by[e])
        return by[e];
      if (!ff[e])
        return e;
      var t = ff[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in C0)
          return by[e] = t[a];
      return e;
    }
    var R0 = ch("animationend"), T0 = ch("animationiteration"), w0 = ch("animationstart"), x0 = ch("transitionend"), _0 = /* @__PURE__ */ new Map(), b0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Oo(e, t) {
      _0.set(e, t), Fr(t, [e]);
    }
    function bR() {
      for (var e = 0; e < b0.length; e++) {
        var t = b0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Oo(a, "on" + i);
      }
      Oo(R0, "onAnimationEnd"), Oo(T0, "onAnimationIteration"), Oo(w0, "onAnimationStart"), Oo("dblclick", "onDoubleClick"), Oo("focusin", "onFocus"), Oo("focusout", "onBlur"), Oo(x0, "onTransitionEnd");
    }
    function DR(e, t, a, i, u, s, f) {
      var p = _0.get(t);
      if (p !== void 0) {
        var v = Qs, y = t;
        switch (t) {
          case "keypress":
            if (Wn(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            v = ih;
            break;
          case "focusin":
            y = "focus", v = Do;
            break;
          case "focusout":
            y = "blur", v = Do;
            break;
          case "beforeblur":
          case "afterblur":
            v = Do;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Bl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Jv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = gy;
            break;
          case R0:
          case T0:
          case w0:
            v = vy;
            break;
          case x0:
            v = nf;
            break;
          case "scroll":
            v = dy;
            break;
          case "wheel":
            v = rf;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = eh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Ea;
            break;
        }
        var g = (s & ms) !== 0;
        {
          var _ = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", w = MR(a, p, i.type, g, _);
          if (w.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: w
            });
          }
        }
      }
    }
    bR(), Te(), r(), TR(), lf();
    function kR(e, t, a, i, u, s, f) {
      DR(e, t, a, i, u, s);
      var p = (s & ey) === 0;
      p && (Ae(e, t, a, i, u), J(e, t, a, i, u), _R(e, t, a, i, u), qs(e, t, a, i, u));
    }
    var Jd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Dy = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Jd));
    function D0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ud(i, t, void 0, e), e.currentTarget = null;
    }
    function OR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          D0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], _ = g.instance, w = g.currentTarget, N = g.listener;
          if (_ !== i && e.isPropagationStopped())
            return;
          D0(e, N, w), i = _;
        }
    }
    function k0(e, t) {
      for (var a = (t & ms) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        OR(s, f, a);
      }
      ny();
    }
    function LR(e, t, a, i, u) {
      var s = Gt(a), f = [];
      kR(f, e, i, a, s, t), k0(f, t);
    }
    function mn(e, t) {
      Dy.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = uw(t), u = UR(e);
      i.has(u) || (O0(t, e, hs, a), i.add(u));
    }
    function ky(e, t, a) {
      Dy.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ms), O0(a, e, i, t);
    }
    var fh = "_reactListening" + Math.random().toString(36).slice(2);
    function Zd(e) {
      if (!e[fh]) {
        e[fh] = !0, Et.forEach(function(a) {
          a !== "selectionchange" && (Dy.has(a) || ky(a, !1, e), ky(a, !0, e));
        });
        var t = e.nodeType === sa ? e : e.ownerDocument;
        t !== null && (t[fh] || (t[fh] = !0, ky("selectionchange", !1, t)));
      }
    }
    function O0(e, t, a, i, u) {
      var s = Hs(e, t, a), f = void 0;
      Ss && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Vd(e, t, s, f) : ef(e, t, s) : f !== void 0 ? Hl(e, t, s, f) : tl(e, t, s);
    }
    function L0(e, t) {
      return e === t || e.nodeType === Sn && e.parentNode === t;
    }
    function Oy(e, t, a, i, u) {
      var s = i;
      if (!(t & Tc) && !(t & hs)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e: for (; ; ) {
            if (p === null)
              return;
            var v = p.tag;
            if (v === te || v === Ue) {
              var y = p.stateNode.containerInfo;
              if (L0(y, f))
                break;
              if (v === Ue)
                for (var g = p.return; g !== null; ) {
                  var _ = g.tag;
                  if (_ === te || _ === Ue) {
                    var w = g.stateNode.containerInfo;
                    if (L0(w, f))
                      return;
                  }
                  g = g.return;
                }
              for (; y !== null; ) {
                var N = Zs(y);
                if (N === null)
                  return;
                var U = N.tag;
                if (U === ue || U === Ee) {
                  p = s = N;
                  continue e;
                }
                y = y.parentNode;
              }
            }
            p = p.return;
          }
        }
      }
      gs(function() {
        return LR(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function MR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var _ = y, w = _.stateNode, N = _.tag;
        if (N === ue && w !== null && (g = w, p !== null)) {
          var U = pu(y, p);
          U != null && v.push(ep(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function dh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var v = f, y = pu(u, a);
          y != null && i.unshift(ep(u, y, v));
          var g = pu(u, t);
          g != null && i.push(ep(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function df(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ue);
      return e || null;
    }
    function NR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = df(s))
        u++;
      for (var f = 0, p = i; p; p = df(p))
        f++;
      for (; u - f > 0; )
        a = df(a), u--;
      for (; f - u > 0; )
        i = df(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = df(a), i = df(i);
      }
      return null;
    }
    function M0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, _ = v.tag;
        if (y !== null && y === i)
          break;
        if (_ === ue && g !== null) {
          var w = g;
          if (u) {
            var N = pu(p, s);
            N != null && f.unshift(ep(p, N, w));
          } else if (!u) {
            var U = pu(p, s);
            U != null && f.push(ep(p, U, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function zR(e, t, a, i, u) {
      var s = i && u ? NR(i, u) : null;
      i !== null && M0(e, t, i, s, !1), u !== null && a !== null && M0(e, a, u, s, !0);
    }
    function UR(e, t) {
      return e + "__bubble";
    }
    var Va = !1, tp = "dangerouslySetInnerHTML", ph = "suppressContentEditableWarning", Lo = "suppressHydrationWarning", N0 = "autoFocus", Ks = "children", Js = "style", vh = "__html", Ly, hh, np, z0, mh, U0, A0;
    Ly = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, hh = function(e, t) {
      to(e, t), Ev(e, t), _l(e, t, {
        registrationNameDependencies: Vt,
        possibleRegistrationNames: qn
      });
    }, U0 = gn && !document.documentMode, np = function(e, t, a) {
      if (!Va) {
        var i = yh(a), u = yh(t);
        u !== i && (Va = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, z0 = function(e) {
      if (!Va) {
        Va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, mh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, A0 = function(e, t) {
      var a = e.namespaceURI === Pi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var AR = /\r\n?/g, FR = /\u0000|\uFFFD/g;
    function yh(e) {
      ra(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(AR, `
`).replace(FR, "");
    }
    function gh(e, t, a, i) {
      var u = yh(t), s = yh(e);
      if (s !== u && (i && (Va || (Va = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && P))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function F0(e) {
      return e.nodeType === sa ? e : e.ownerDocument;
    }
    function jR() {
    }
    function Sh(e) {
      e.onclick = jR;
    }
    function HR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Js)
            f && Object.freeze(f), vv(t, f);
          else if (s === tp) {
            var p = f ? f[vh] : void 0;
            p != null && iv(t, p);
          } else if (s === Ks)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ss(t, f);
            } else typeof f == "number" && ss(t, "" + f);
          else s === ph || s === Lo || s === N0 || (Vt.hasOwnProperty(s) ? f != null && (typeof f != "function" && mh(s, f), s === "onScroll" && mn("scroll", t)) : f != null && Mi(t, s, f, u));
        }
    }
    function VR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Js ? vv(e, f) : s === tp ? iv(e, f) : s === Ks ? ss(e, f) : Mi(e, s, f, i);
      }
    }
    function PR(e, t, a, i) {
      var u, s = F0(a), f, p = i;
      if (p === Pi && (p = $f(e)), p === Pi) {
        if (u = cu(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Pi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Xn.call(Ly, e) && (Ly[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function BR(e, t) {
      return F0(t).createTextNode(e);
    }
    function $R(e, t, a, i) {
      var u = cu(t, a);
      hh(t, a);
      var s;
      switch (t) {
        case "dialog":
          mn("cancel", e), mn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          mn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Jd.length; f++)
            mn(Jd[f], e);
          s = a;
          break;
        case "source":
          mn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          mn("error", e), mn("load", e), s = a;
          break;
        case "details":
          mn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), mn("invalid", e);
          break;
        case "option":
          $t(e, a), s = a;
          break;
        case "select":
          os(e, a), s = us(e, a), mn("invalid", e);
          break;
        case "textarea":
          rv(e, a), s = Bf(e, a), mn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ds(t, s), HR(t, e, i, s, u), t) {
        case "input":
          ji(e), K(e, a, !1);
          break;
        case "textarea":
          ji(e), mc(e);
          break;
        case "option":
          Yt(e, a);
          break;
        case "select":
          Pf(e, a);
          break;
        default:
          typeof s.onClick == "function" && Sh(e);
          break;
      }
    }
    function YR(e, t, a, i, u) {
      hh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = us(e, a), p = us(e, i), s = [];
          break;
        case "textarea":
          f = Bf(e, a), p = Bf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && Sh(e);
          break;
      }
      ds(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Js) {
            var _ = f[v];
            for (y in _)
              _.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else v === tp || v === Ks || v === ph || v === Lo || v === N0 || (Vt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === N || w == null && N == null))
          if (v === Js)
            if (w && Object.freeze(w), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && N[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === tp) {
            var U = w ? w[vh] : void 0, j = N ? N[vh] : void 0;
            U != null && j !== U && (s = s || []).push(v, U);
          } else v === Ks ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === ph || v === Lo || (Vt.hasOwnProperty(v) ? (w != null && (typeof w != "function" && mh(v, w), v === "onScroll" && mn("scroll", e)), !s && N !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (hv(g, p[Js]), (s = s || []).push(Js, g)), s;
    }
    function IR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && M(e, u);
      var s = cu(a, i), f = cu(a, u);
      switch (VR(e, t, s, f), a) {
        case "input":
          F(e, u);
          break;
        case "textarea":
          av(e, u);
          break;
        case "select":
          $m(e, u);
          break;
      }
    }
    function QR(e) {
      {
        var t = e.toLowerCase();
        return Ec.hasOwnProperty(t) && Ec[t] || null;
      }
    }
    function WR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = cu(t, a), hh(t, a), t) {
        case "dialog":
          mn("cancel", e), mn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          mn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Jd.length; y++)
            mn(Jd[y], e);
          break;
        case "source":
          mn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          mn("error", e), mn("load", e);
          break;
        case "details":
          mn("toggle", e);
          break;
        case "input":
          C(e, a), mn("invalid", e);
          break;
        case "option":
          $t(e, a);
          break;
        case "select":
          os(e, a), mn("invalid", e);
          break;
        case "textarea":
          rv(e, a), mn("invalid", e);
          break;
      }
      ds(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, _ = 0; _ < g.length; _++) {
          var w = g[_].name.toLowerCase();
          switch (w) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[_].name);
          }
        }
      }
      var N = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var j = a[U];
          if (U === Ks)
            typeof j == "string" ? e.textContent !== j && (a[Lo] !== !0 && gh(e.textContent, j, s, f), N = [Ks, j]) : typeof j == "number" && e.textContent !== "" + j && (a[Lo] !== !0 && gh(e.textContent, j, s, f), N = [Ks, "" + j]);
          else if (Vt.hasOwnProperty(U))
            j != null && (typeof j != "function" && mh(U, j), U === "onScroll" && mn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var le = void 0, Ne = p && Ve ? null : $n(U);
            if (a[Lo] !== !0) {
              if (!(U === ph || U === Lo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === tp) {
                  var _e = e.innerHTML, Tt = j ? j[vh] : void 0;
                  if (Tt != null) {
                    var vt = A0(e, Tt);
                    vt !== _e && np(U, _e, vt);
                  }
                } else if (U === Js) {
                  if (v.delete(U), U0) {
                    var k = Zm(j);
                    le = e.getAttribute("style"), k !== le && np(U, le, k);
                  }
                } else if (p && !Ve)
                  v.delete(U.toLowerCase()), le = ba(e, U, j), j !== le && np(U, le, j);
                else if (!dn(U, Ne, p) && !Pt(U, j, Ne, p)) {
                  var H = !1;
                  if (Ne !== null)
                    v.delete(Ne.attributeName), le = qa(e, U, j, Ne);
                  else {
                    var O = i;
                    if (O === Pi && (O = $f(t)), O === Pi)
                      v.delete(U.toLowerCase());
                    else {
                      var q = QR(U);
                      q !== null && q !== U && (H = !0, v.delete(q)), v.delete(U);
                    }
                    le = ba(e, U, j);
                  }
                  var pe = Ve;
                  !pe && j !== le && !H && np(U, le, j);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[Lo] !== !0 && z0(v), t) {
        case "input":
          ji(e), K(e, a, !0);
          break;
        case "textarea":
          ji(e), mc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Sh(e);
          break;
      }
      return N;
    }
    function GR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function My(e, t) {
      {
        if (Va)
          return;
        Va = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (Va)
          return;
        Va = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function zy(e, t, a) {
      {
        if (Va)
          return;
        Va = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Uy(e, t) {
      {
        if (t === "" || Va)
          return;
        Va = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function qR(e, t, a) {
      switch (t) {
        case "input":
          ge(e, a);
          return;
        case "textarea":
          Ym(e, a);
          return;
        case "select":
          tv(e, a);
          return;
      }
    }
    var rp = function() {
    }, ap = function() {
    };
    {
      var XR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], j0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], KR = j0.concat(["button"]), JR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], H0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ap = function(e, t) {
        var a = Je({}, e || H0), i = {
          tag: t
        };
        return j0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), KR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), XR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ZR = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return JR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, eT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, V0 = {};
      rp = function(e, t, a) {
        a = a || H0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ZR(e, u) ? null : i, f = s ? null : eT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!V0[y]) {
            V0[y] = !0;
            var g = e, _ = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", _ = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, _, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var Eh = "suppressHydrationWarning", Ch = "$", Rh = "/$", ip = "$?", lp = "$!", tT = "style", Ay = null, Fy = null;
    function nT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case sa:
        case If: {
          t = i === sa ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Yf(null, "");
          break;
        }
        default: {
          var s = i === Sn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Yf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ap(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function rT(e, t, a) {
      {
        var i = e, u = Yf(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function mD(e) {
      return e;
    }
    function aT(e) {
      Ay = Pn(), Fy = gR();
      var t = null;
      return Tu(!1), t;
    }
    function iT(e) {
      SR(Fy), Tu(Ay), Ay = null, Fy = null;
    }
    function lT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = PR(e, t, a, s);
      return sp(u, y), Iy(y, t), y;
    }
    function uT(e, t) {
      e.appendChild(t);
    }
    function oT(e, t, a, i, u) {
      switch ($R(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function sT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return YR(e, t, a, i);
    }
    function jy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function cT(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = BR(e, t);
      return sp(i, s), s;
    }
    function fT() {
      var e = window.event;
      return e === void 0 ? ii : xu(e.type);
    }
    var Hy = typeof setTimeout == "function" ? setTimeout : void 0, dT = typeof clearTimeout == "function" ? clearTimeout : void 0, Vy = -1, P0 = typeof Promise == "function" ? Promise : void 0, pT = typeof queueMicrotask == "function" ? queueMicrotask : typeof P0 < "u" ? function(e) {
      return P0.resolve(null).then(e).catch(vT);
    } : Hy;
    function vT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function hT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function mT(e, t, a, i, u, s) {
      IR(e, t, a, i, u), Iy(e, u);
    }
    function B0(e) {
      ss(e, "");
    }
    function yT(e, t, a) {
      e.nodeValue = a;
    }
    function gT(e, t) {
      e.appendChild(t);
    }
    function ST(e, t) {
      var a;
      e.nodeType === Sn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Sh(a);
    }
    function ET(e, t, a) {
      e.insertBefore(t, a);
    }
    function CT(e, t, a) {
      e.nodeType === Sn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function RT(e, t) {
      e.removeChild(t);
    }
    function TT(e, t) {
      e.nodeType === Sn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Py(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === Sn) {
          var s = u.data;
          if (s === Rh)
            if (i === 0) {
              e.removeChild(u), fn(t);
              return;
            } else
              i--;
          else (s === Ch || s === ip || s === lp) && i++;
        }
        a = u;
      } while (a);
      fn(t);
    }
    function wT(e, t) {
      e.nodeType === Sn ? Py(e.parentNode, t) : e.nodeType === $r && Py(e, t), fn(e);
    }
    function xT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function _T(e) {
      e.nodeValue = "";
    }
    function bT(e, t) {
      e = e;
      var a = t[tT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = wl("display", i);
    }
    function DT(e, t) {
      e.nodeValue = t;
    }
    function kT(e) {
      e.nodeType === $r ? e.textContent = "" : e.nodeType === sa && e.documentElement && e.removeChild(e.documentElement);
    }
    function OT(e, t, a) {
      return e.nodeType !== $r || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function LT(e, t) {
      return t === "" || e.nodeType !== Bi ? null : e;
    }
    function MT(e) {
      return e.nodeType !== Sn ? null : e;
    }
    function $0(e) {
      return e.data === ip;
    }
    function By(e) {
      return e.data === lp;
    }
    function NT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function zT(e, t) {
      e._reactRetry = t;
    }
    function Th(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === $r || t === Bi)
          break;
        if (t === Sn) {
          var a = e.data;
          if (a === Ch || a === lp || a === ip)
            break;
          if (a === Rh)
            return null;
        }
      }
      return e;
    }
    function up(e) {
      return Th(e.nextSibling);
    }
    function UT(e) {
      return Th(e.firstChild);
    }
    function AT(e) {
      return Th(e.firstChild);
    }
    function FT(e) {
      return Th(e.nextSibling);
    }
    function jT(e, t, a, i, u, s, f) {
      sp(s, e), Iy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Oe) !== re;
      return WR(e, t, a, p, i, y, f);
    }
    function HT(e, t, a, i) {
      return sp(a, e), a.mode & Oe, GR(e, t);
    }
    function VT(e, t) {
      sp(t, e);
    }
    function PT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Sn) {
          var i = t.data;
          if (i === Rh) {
            if (a === 0)
              return up(t);
            a--;
          } else (i === Ch || i === lp || i === ip) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Y0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Sn) {
          var i = t.data;
          if (i === Ch || i === lp || i === ip) {
            if (a === 0)
              return t;
            a--;
          } else i === Rh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function BT(e) {
      fn(e);
    }
    function $T(e) {
      fn(e);
    }
    function YT(e) {
      return e !== "head" && e !== "body";
    }
    function IT(e, t, a, i) {
      var u = !0;
      gh(t.nodeValue, a, i, u);
    }
    function QT(e, t, a, i, u, s) {
      if (t[Eh] !== !0) {
        var f = !0;
        gh(i.nodeValue, u, s, f);
      }
    }
    function WT(e, t) {
      t.nodeType === $r ? My(e, t) : t.nodeType === Sn || Ny(e, t);
    }
    function GT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === $r ? My(a, t) : t.nodeType === Sn || Ny(a, t));
      }
    }
    function qT(e, t, a, i, u) {
      (u || t[Eh] !== !0) && (i.nodeType === $r ? My(a, i) : i.nodeType === Sn || Ny(a, i));
    }
    function XT(e, t, a) {
      zy(e, t);
    }
    function KT(e, t) {
      Uy(e, t);
    }
    function JT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && zy(i, t);
      }
    }
    function ZT(e, t) {
      {
        var a = e.parentNode;
        a !== null && Uy(a, t);
      }
    }
    function ew(e, t, a, i, u, s) {
      (s || t[Eh] !== !0) && zy(a, i);
    }
    function tw(e, t, a, i, u) {
      (u || t[Eh] !== !0) && Uy(a, i);
    }
    function nw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function rw(e) {
      Zd(e);
    }
    var pf = Math.random().toString(36).slice(2), vf = "__reactFiber$" + pf, $y = "__reactProps$" + pf, op = "__reactContainer$" + pf, Yy = "__reactEvents$" + pf, aw = "__reactListeners$" + pf, iw = "__reactHandles$" + pf;
    function lw(e) {
      delete e[vf], delete e[$y], delete e[Yy], delete e[aw], delete e[iw];
    }
    function sp(e, t) {
      t[vf] = e;
    }
    function wh(e, t) {
      t[op] = e;
    }
    function I0(e) {
      e[op] = null;
    }
    function cp(e) {
      return !!e[op];
    }
    function Zs(e) {
      var t = e[vf];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[op] || a[vf], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Y0(e); u !== null; ) {
              var s = u[vf];
              if (s)
                return s;
              u = Y0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Mo(e) {
      var t = e[vf] || e[op];
      return t && (t.tag === ue || t.tag === Ee || t.tag === Ce || t.tag === te) ? t : null;
    }
    function hf(e) {
      if (e.tag === ue || e.tag === Ee)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function xh(e) {
      return e[$y] || null;
    }
    function Iy(e, t) {
      e[$y] = t;
    }
    function uw(e) {
      var t = e[Yy];
      return t === void 0 && (t = e[Yy] = /* @__PURE__ */ new Set()), t;
    }
    var Q0 = {}, W0 = et.ReactDebugCurrentFrame;
    function _h(e) {
      if (e) {
        var t = e._owner, a = mt(e.type, e._source, t ? t.type : null);
        W0.setExtraStackFrame(a);
      } else
        W0.setExtraStackFrame(null);
    }
    function rl(e, t, a, i, u) {
      {
        var s = Function.call.bind(Xn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (_h(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), _h(null)), p instanceof Error && !(p.message in Q0) && (Q0[p.message] = !0, _h(u), S("Failed %s type: %s", a, p.message), _h(null));
          }
      }
    }
    var Qy = [], bh;
    bh = [];
    var Nu = -1;
    function No(e) {
      return {
        current: e
      };
    }
    function Kr(e, t) {
      if (Nu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== bh[Nu] && S("Unexpected Fiber popped."), e.current = Qy[Nu], Qy[Nu] = null, bh[Nu] = null, Nu--;
    }
    function Jr(e, t, a) {
      Nu++, Qy[Nu] = e.current, bh[Nu] = a, e.current = t;
    }
    var Wy;
    Wy = {};
    var ui = {};
    Object.freeze(ui);
    var zu = No(ui), Il = No(!1), Gy = ui;
    function mf(e, t, a) {
      return a && Ql(t) ? Gy : zu.current;
    }
    function G0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function yf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ui;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ye(e) || "Unknown";
          rl(i, s, "context", p);
        }
        return u && G0(e, t, s), s;
      }
    }
    function Dh() {
      return Il.current;
    }
    function Ql(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function kh(e) {
      Kr(Il, e), Kr(zu, e);
    }
    function qy(e) {
      Kr(Il, e), Kr(zu, e);
    }
    function q0(e, t, a) {
      {
        if (zu.current !== ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Jr(zu, t, e), Jr(Il, a, e);
      }
    }
    function X0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ye(e) || "Unknown";
            Wy[s] || (Wy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ye(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ye(e) || "Unknown";
          rl(u, f, "child context", v);
        }
        return Je({}, a, f);
      }
    }
    function Oh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ui;
        return Gy = zu.current, Jr(zu, a, e), Jr(Il, Il.current, e), !0;
      }
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = X0(e, t, Gy);
          i.__reactInternalMemoizedMergedChildContext = u, Kr(Il, e), Kr(zu, e), Jr(zu, u, e), Jr(Il, a, e);
        } else
          Kr(Il, e), Jr(Il, a, e);
      }
    }
    function ow(e) {
      {
        if (!da(e) || e.tag !== ve)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case te:
              return t.stateNode.context;
            case ve: {
              var a = t.type;
              if (Ql(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var zo = 0, Lh = 1, Uu = null, Xy = !1, Ky = !1;
    function J0(e) {
      Uu === null ? Uu = [e] : Uu.push(e);
    }
    function sw(e) {
      Xy = !0, J0(e);
    }
    function Z0() {
      Xy && Uo();
    }
    function Uo() {
      if (!Ky && Uu !== null) {
        Ky = !0;
        var e = 0, t = wr();
        try {
          var a = !0, i = Uu;
          for (_t(ga); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Uu = null, Xy = !1;
        } catch (s) {
          throw Uu !== null && (Uu = Uu.slice(e + 1)), fd(Ll, Uo), s;
        } finally {
          _t(t), Ky = !1;
        }
      }
      return null;
    }
    var gf = [], Sf = 0, Mh = null, Nh = 0, xi = [], _i = 0, ec = null, Au = 1, Fu = "";
    function cw(e) {
      return nc(), (e.flags & Lv) !== Me;
    }
    function fw(e) {
      return nc(), Nh;
    }
    function dw() {
      var e = Fu, t = Au, a = t & ~pw(t);
      return a.toString(32) + e;
    }
    function tc(e, t) {
      nc(), gf[Sf++] = Nh, gf[Sf++] = Mh, Mh = e, Nh = t;
    }
    function eE(e, t, a) {
      nc(), xi[_i++] = Au, xi[_i++] = Fu, xi[_i++] = ec, ec = e;
      var i = Au, u = Fu, s = zh(i) - 1, f = i & ~(1 << s), p = a + 1, v = zh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, _ = (f & g).toString(32), w = f >> y, N = s - y, U = zh(t) + N, j = p << N, le = j | w, Ne = _ + u;
        Au = 1 << U | le, Fu = Ne;
      } else {
        var _e = p << s, Tt = _e | f, vt = u;
        Au = 1 << v | Tt, Fu = vt;
      }
    }
    function Jy(e) {
      nc();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        tc(e, a), eE(e, a, i);
      }
    }
    function zh(e) {
      return 32 - co(e);
    }
    function pw(e) {
      return 1 << zh(e) - 1;
    }
    function Zy(e) {
      for (; e === Mh; )
        Mh = gf[--Sf], gf[Sf] = null, Nh = gf[--Sf], gf[Sf] = null;
      for (; e === ec; )
        ec = xi[--_i], xi[_i] = null, Fu = xi[--_i], xi[_i] = null, Au = xi[--_i], xi[_i] = null;
    }
    function vw() {
      return nc(), ec !== null ? {
        id: Au,
        overflow: Fu
      } : null;
    }
    function hw(e, t) {
      nc(), xi[_i++] = Au, xi[_i++] = Fu, xi[_i++] = ec, Au = t.id, Fu = t.overflow, ec = e;
    }
    function nc() {
      kr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Dr = null, bi = null, al = !1, rc = !1, Ao = null;
    function mw() {
      al && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function tE() {
      rc = !0;
    }
    function yw() {
      return rc;
    }
    function gw(e) {
      var t = e.stateNode.containerInfo;
      return bi = AT(t), Dr = e, al = !0, Ao = null, rc = !1, !0;
    }
    function Sw(e, t, a) {
      return bi = FT(t), Dr = e, al = !0, Ao = null, rc = !1, a !== null && hw(e, a), !0;
    }
    function nE(e, t) {
      switch (e.tag) {
        case te: {
          WT(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & Oe) !== re;
          qT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Ce: {
          var i = e.memoizedState;
          i.dehydrated !== null && GT(i.dehydrated, t);
          break;
        }
      }
    }
    function rE(e, t) {
      nE(e, t);
      var a = Tb();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Lt) : i.push(a);
    }
    function eg(e, t) {
      {
        if (rc)
          return;
        switch (e.tag) {
          case te: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ue:
                var i = t.type;
                t.pendingProps, XT(a, i);
                break;
              case Ee:
                var u = t.pendingProps;
                KT(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Oe) !== re;
                ew(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case Ee: {
                var _ = t.pendingProps, w = (e.mode & Oe) !== re;
                tw(
                  s,
                  f,
                  p,
                  _,
                  // TODO: Delete this argument when we remove the legacy root API.
                  w
                );
                break;
              }
            }
            break;
          }
          case Ce: {
            var N = e.memoizedState, U = N.dehydrated;
            if (U !== null) switch (t.tag) {
              case ue:
                var j = t.type;
                t.pendingProps, JT(U, j);
                break;
              case Ee:
                var le = t.pendingProps;
                ZT(U, le);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function aE(e, t) {
      t.flags = t.flags & ~hi | qt, eg(e, t);
    }
    function iE(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = OT(t, a);
          return i !== null ? (e.stateNode = i, Dr = e, bi = UT(i), !0) : !1;
        }
        case Ee: {
          var u = e.pendingProps, s = LT(t, u);
          return s !== null ? (e.stateNode = s, Dr = e, bi = null, !0) : !1;
        }
        case Ce: {
          var f = MT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: vw(),
              retryLane: ya
            };
            e.memoizedState = p;
            var v = wb(f);
            return v.return = e, e.child = v, Dr = e, bi = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function tg(e) {
      return (e.mode & Oe) !== re && (e.flags & Ge) === Me;
    }
    function ng(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function rg(e) {
      if (al) {
        var t = bi;
        if (!t) {
          tg(e) && (eg(Dr, e), ng()), aE(Dr, e), al = !1, Dr = e;
          return;
        }
        var a = t;
        if (!iE(e, t)) {
          tg(e) && (eg(Dr, e), ng()), t = up(a);
          var i = Dr;
          if (!t || !iE(e, t)) {
            aE(Dr, e), al = !1, Dr = e;
            return;
          }
          rE(i, a);
        }
      }
    }
    function Ew(e, t, a) {
      var i = e.stateNode, u = !rc, s = jT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Cw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = HT(t, a, e);
      if (i) {
        var u = Dr;
        if (u !== null)
          switch (u.tag) {
            case te: {
              var s = u.stateNode.containerInfo, f = (u.mode & Oe) !== re;
              IT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case ue: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Oe) !== re;
              QT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function Rw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      VT(a, e);
    }
    function Tw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return PT(a);
    }
    function lE(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== te && t.tag !== Ce; )
        t = t.return;
      Dr = t;
    }
    function Uh(e) {
      if (e !== Dr)
        return !1;
      if (!al)
        return lE(e), al = !0, !1;
      if (e.tag !== te && (e.tag !== ue || YT(e.type) && !jy(e.type, e.memoizedProps))) {
        var t = bi;
        if (t)
          if (tg(e))
            uE(e), ng();
          else
            for (; t; )
              rE(e, t), t = up(t);
      }
      return lE(e), e.tag === Ce ? bi = Tw(e) : bi = Dr ? up(e.stateNode) : null, !0;
    }
    function ww() {
      return al && bi !== null;
    }
    function uE(e) {
      for (var t = bi; t; )
        nE(e, t), t = up(t);
    }
    function Ef() {
      Dr = null, bi = null, al = !1, rc = !1;
    }
    function oE() {
      Ao !== null && (t1(Ao), Ao = null);
    }
    function kr() {
      return al;
    }
    function ag(e) {
      Ao === null ? Ao = [e] : Ao.push(e);
    }
    var xw = et.ReactCurrentBatchConfig, _w = null;
    function bw() {
      return xw.transition;
    }
    var il = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Dw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & ln && (t = a), a = a.return;
        return t;
      }, ac = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], ic = /* @__PURE__ */ new Set();
      il.recordUnsafeLifecycleWarnings = function(e, t) {
        ic.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & ln && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & ln && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & ln && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, il.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          e.add(Ye(w) || "Component"), ic.add(w.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          t.add(Ye(w) || "Component"), ic.add(w.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          a.add(Ye(w) || "Component"), ic.add(w.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          i.add(Ye(w) || "Component"), ic.add(w.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          u.add(Ye(w) || "Component"), ic.add(w.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(w) {
          s.add(Ye(w) || "Component"), ic.add(w.type);
        }), mp = []), t.size > 0) {
          var f = ac(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = ac(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = ac(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = ac(e);
          Qe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = ac(a);
          Qe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var _ = ac(u);
          Qe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, _);
        }
      };
      var Ah = /* @__PURE__ */ new Map(), sE = /* @__PURE__ */ new Set();
      il.recordLegacyContextWarning = function(e, t) {
        var a = Dw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!sE.has(e.type)) {
          var i = Ah.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Ah.set(a, i)), i.push(e));
        }
      }, il.flushLegacyContextWarning = function() {
        Ah.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ye(s) || "Component"), sE.add(s.type);
            });
            var u = ac(i);
            try {
              vn(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              nn();
            }
          }
        });
      }, il.discardPendingWarnings = function() {
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Ah = /* @__PURE__ */ new Map();
      };
    }
    var ig, lg, ug, og, sg, cE = function(e, t) {
    };
    ig = !1, lg = !1, ug = {}, og = {}, sg = {}, cE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ye(t) || "Component";
        og[a] || (og[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function kw(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & ln || Ke) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self) && // Will already throw with "Function components cannot have string refs"
        !(a._owner && a._owner.tag !== ve) && // Will already warn with "Function components cannot be given refs"
        !(typeof a.type == "function" && !kw(a.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        a._owner) {
          var u = Ye(e) || "Component";
          ug[u] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', u, i), ug[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ve)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Hn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(_) {
            var w = v.refs;
            _ === null ? delete w[y] : w[y] = _;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Fh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function jh(e) {
      {
        var t = Ye(e) || "Component";
        if (sg[t])
          return;
        sg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function fE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function dE(e) {
      function t(k, H) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [H], k.flags |= Lt) : O.push(H);
        }
      }
      function a(k, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, H) {
        for (var O = /* @__PURE__ */ new Map(), q = H; q !== null; )
          q.key !== null ? O.set(q.key, q) : O.set(q.index, q), q = q.sibling;
        return O;
      }
      function u(k, H) {
        var O = vc(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= Lv, H;
        var q = k.alternate;
        if (q !== null) {
          var pe = q.index;
          return pe < H ? (k.flags |= qt, H) : pe;
        } else
          return k.flags |= qt, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= qt), k;
      }
      function p(k, H, O, q) {
        if (H === null || H.tag !== Ee) {
          var pe = a0(O, k.mode, q);
          return pe.return = k, pe;
        } else {
          var oe = u(H, O);
          return oe.return = k, oe;
        }
      }
      function v(k, H, O, q) {
        var pe = O.type;
        if (pe === oa)
          return g(k, H, O.props.children, q, O.key);
        if (H !== null && (H.elementType === pe || // Keep this check inline so it only runs on the false path:
        y1(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof pe == "object" && pe !== null && pe.$$typeof === ze && fE(pe) === H.type)) {
          var oe = u(H, O.props);
          return oe.ref = yp(k, H, O), oe.return = k, oe._debugSource = O._source, oe._debugOwner = O._owner, oe;
        }
        var Be = r0(O, k.mode, q);
        return Be.ref = yp(k, H, O), Be.return = k, Be;
      }
      function y(k, H, O, q) {
        if (H === null || H.tag !== Ue || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var pe = i0(O, k.mode, q);
          return pe.return = k, pe;
        } else {
          var oe = u(H, O.children || []);
          return oe.return = k, oe;
        }
      }
      function g(k, H, O, q, pe) {
        if (H === null || H.tag !== pt) {
          var oe = Wo(O, k.mode, q, pe);
          return oe.return = k, oe;
        } else {
          var Be = u(H, O);
          return Be.return = k, Be;
        }
      }
      function _(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var q = a0("" + H, k.mode, O);
          return q.return = k, q;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case Sr: {
              var pe = r0(H, k.mode, O);
              return pe.ref = yp(k, null, H), pe.return = k, pe;
            }
            case jr: {
              var oe = i0(H, k.mode, O);
              return oe.return = k, oe;
            }
            case ze: {
              var Be = H._payload, Xe = H._init;
              return _(k, Xe(Be), O);
            }
          }
          if (xt(H) || Hr(H)) {
            var Qt = Wo(H, k.mode, O, null);
            return Qt.return = k, Qt;
          }
          Fh(k, H);
        }
        return typeof H == "function" && jh(k), null;
      }
      function w(k, H, O, q) {
        var pe = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return pe !== null ? null : p(k, H, "" + O, q);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Sr:
              return O.key === pe ? v(k, H, O, q) : null;
            case jr:
              return O.key === pe ? y(k, H, O, q) : null;
            case ze: {
              var oe = O._payload, Be = O._init;
              return w(k, H, Be(oe), q);
            }
          }
          if (xt(O) || Hr(O))
            return pe !== null ? null : g(k, H, O, q, null);
          Fh(k, O);
        }
        return typeof O == "function" && jh(k), null;
      }
      function N(k, H, O, q, pe) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var oe = k.get(O) || null;
          return p(H, oe, "" + q, pe);
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case Sr: {
              var Be = k.get(q.key === null ? O : q.key) || null;
              return v(H, Be, q, pe);
            }
            case jr: {
              var Xe = k.get(q.key === null ? O : q.key) || null;
              return y(H, Xe, q, pe);
            }
            case ze:
              var Qt = q._payload, Mt = q._init;
              return N(k, H, O, Mt(Qt), pe);
          }
          if (xt(q) || Hr(q)) {
            var Bn = k.get(O) || null;
            return g(H, Bn, q, pe, null);
          }
          Fh(H, q);
        }
        return typeof q == "function" && jh(H), null;
      }
      function U(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case Sr:
            case jr:
              cE(k, O);
              var q = k.key;
              if (typeof q != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(q);
                break;
              }
              if (!H.has(q)) {
                H.add(q);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", q);
              break;
            case ze:
              var pe = k._payload, oe = k._init;
              U(oe(pe), H, O);
              break;
          }
        }
        return H;
      }
      function j(k, H, O, q) {
        for (var pe = null, oe = 0; oe < O.length; oe++) {
          var Be = O[oe];
          pe = U(Be, pe, k);
        }
        for (var Xe = null, Qt = null, Mt = H, Bn = 0, Nt = 0, An = null; Mt !== null && Nt < O.length; Nt++) {
          Mt.index > Nt ? (An = Mt, Mt = null) : An = Mt.sibling;
          var ea = w(k, Mt, O[Nt], q);
          if (ea === null) {
            Mt === null && (Mt = An);
            break;
          }
          e && Mt && ea.alternate === null && t(k, Mt), Bn = s(ea, Bn, Nt), Qt === null ? Xe = ea : Qt.sibling = ea, Qt = ea, Mt = An;
        }
        if (Nt === O.length) {
          if (a(k, Mt), kr()) {
            var Ar = Nt;
            tc(k, Ar);
          }
          return Xe;
        }
        if (Mt === null) {
          for (; Nt < O.length; Nt++) {
            var si = _(k, O[Nt], q);
            si !== null && (Bn = s(si, Bn, Nt), Qt === null ? Xe = si : Qt.sibling = si, Qt = si);
          }
          if (kr()) {
            var wa = Nt;
            tc(k, wa);
          }
          return Xe;
        }
        for (var xa = i(k, Mt); Nt < O.length; Nt++) {
          var ta = N(xa, k, Nt, O[Nt], q);
          ta !== null && (e && ta.alternate !== null && xa.delete(ta.key === null ? Nt : ta.key), Bn = s(ta, Bn, Nt), Qt === null ? Xe = ta : Qt.sibling = ta, Qt = ta);
        }
        if (e && xa.forEach(function(Hf) {
          return t(k, Hf);
        }), kr()) {
          var Yu = Nt;
          tc(k, Yu);
        }
        return Xe;
      }
      function le(k, H, O, q) {
        var pe = Hr(O);
        if (typeof pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (lg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), lg = !0), O.entries === pe && (ig || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), ig = !0);
          var oe = pe.call(O);
          if (oe)
            for (var Be = null, Xe = oe.next(); !Xe.done; Xe = oe.next()) {
              var Qt = Xe.value;
              Be = U(Qt, Be, k);
            }
        }
        var Mt = pe.call(O);
        if (Mt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Bn = null, Nt = null, An = H, ea = 0, Ar = 0, si = null, wa = Mt.next(); An !== null && !wa.done; Ar++, wa = Mt.next()) {
          An.index > Ar ? (si = An, An = null) : si = An.sibling;
          var xa = w(k, An, wa.value, q);
          if (xa === null) {
            An === null && (An = si);
            break;
          }
          e && An && xa.alternate === null && t(k, An), ea = s(xa, ea, Ar), Nt === null ? Bn = xa : Nt.sibling = xa, Nt = xa, An = si;
        }
        if (wa.done) {
          if (a(k, An), kr()) {
            var ta = Ar;
            tc(k, ta);
          }
          return Bn;
        }
        if (An === null) {
          for (; !wa.done; Ar++, wa = Mt.next()) {
            var Yu = _(k, wa.value, q);
            Yu !== null && (ea = s(Yu, ea, Ar), Nt === null ? Bn = Yu : Nt.sibling = Yu, Nt = Yu);
          }
          if (kr()) {
            var Hf = Ar;
            tc(k, Hf);
          }
          return Bn;
        }
        for (var qp = i(k, An); !wa.done; Ar++, wa = Mt.next()) {
          var eu = N(qp, k, Ar, wa.value, q);
          eu !== null && (e && eu.alternate !== null && qp.delete(eu.key === null ? Ar : eu.key), ea = s(eu, ea, Ar), Nt === null ? Bn = eu : Nt.sibling = eu, Nt = eu);
        }
        if (e && qp.forEach(function(tD) {
          return t(k, tD);
        }), kr()) {
          var eD = Ar;
          tc(k, eD);
        }
        return Bn;
      }
      function Ne(k, H, O, q) {
        if (H !== null && H.tag === Ee) {
          a(k, H.sibling);
          var pe = u(H, O);
          return pe.return = k, pe;
        }
        a(k, H);
        var oe = a0(O, k.mode, q);
        return oe.return = k, oe;
      }
      function _e(k, H, O, q) {
        for (var pe = O.key, oe = H; oe !== null; ) {
          if (oe.key === pe) {
            var Be = O.type;
            if (Be === oa) {
              if (oe.tag === pt) {
                a(k, oe.sibling);
                var Xe = u(oe, O.props.children);
                return Xe.return = k, Xe._debugSource = O._source, Xe._debugOwner = O._owner, Xe;
              }
            } else if (oe.elementType === Be || // Keep this check inline so it only runs on the false path:
            y1(oe, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Be == "object" && Be !== null && Be.$$typeof === ze && fE(Be) === oe.type) {
              a(k, oe.sibling);
              var Qt = u(oe, O.props);
              return Qt.ref = yp(k, oe, O), Qt.return = k, Qt._debugSource = O._source, Qt._debugOwner = O._owner, Qt;
            }
            a(k, oe);
            break;
          } else
            t(k, oe);
          oe = oe.sibling;
        }
        if (O.type === oa) {
          var Mt = Wo(O.props.children, k.mode, q, O.key);
          return Mt.return = k, Mt;
        } else {
          var Bn = r0(O, k.mode, q);
          return Bn.ref = yp(k, H, O), Bn.return = k, Bn;
        }
      }
      function Tt(k, H, O, q) {
        for (var pe = O.key, oe = H; oe !== null; ) {
          if (oe.key === pe)
            if (oe.tag === Ue && oe.stateNode.containerInfo === O.containerInfo && oe.stateNode.implementation === O.implementation) {
              a(k, oe.sibling);
              var Be = u(oe, O.children || []);
              return Be.return = k, Be;
            } else {
              a(k, oe);
              break;
            }
          else
            t(k, oe);
          oe = oe.sibling;
        }
        var Xe = i0(O, k.mode, q);
        return Xe.return = k, Xe;
      }
      function vt(k, H, O, q) {
        var pe = typeof O == "object" && O !== null && O.type === oa && O.key === null;
        if (pe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Sr:
              return f(_e(k, H, O, q));
            case jr:
              return f(Tt(k, H, O, q));
            case ze:
              var oe = O._payload, Be = O._init;
              return vt(k, H, Be(oe), q);
          }
          if (xt(O))
            return j(k, H, O, q);
          if (Hr(O))
            return le(k, H, O, q);
          Fh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(Ne(k, H, "" + O, q)) : (typeof O == "function" && jh(k), a(k, H));
      }
      return vt;
    }
    var Cf = dE(!0), pE = dE(!1);
    function Ow(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = vc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = vc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Lw(e, t) {
      for (var a = e.child; a !== null; )
        gb(a, t), a = a.sibling;
    }
    var cg = No(null), fg;
    fg = {};
    var Hh = null, Rf = null, dg = null, Vh = !1;
    function Ph() {
      Hh = null, Rf = null, dg = null, Vh = !1;
    }
    function vE() {
      Vh = !0;
    }
    function hE() {
      Vh = !1;
    }
    function mE(e, t, a) {
      Jr(cg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== fg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = fg;
    }
    function pg(e, t) {
      var a = cg.current;
      Kr(cg, t), e._currentValue = a;
    }
    function vg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (jl(i.childLanes, t) ? u !== null && !jl(u.childLanes, t) && (u.childLanes = Ze(u.childLanes, t)) : (i.childLanes = Ze(i.childLanes, t), u !== null && (u.childLanes = Ze(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Mw(e, t, a) {
      Nw(e, t, a);
    }
    function Nw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ve) {
                var p = Eo(a), v = ju(Zt, p);
                v.tag = $h;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, _ = g.pending;
                  _ === null ? v.next = v : (v.next = _.next, _.next = v), g.pending = v;
                }
              }
              i.lanes = Ze(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = Ze(w.lanes, a)), vg(i.return, a, e), s.lanes = Ze(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === rt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Kt) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = Ze(N.lanes, a);
          var U = N.alternate;
          U !== null && (U.lanes = Ze(U.lanes, a)), vg(N, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var j = u.sibling;
            if (j !== null) {
              j.return = u.return, u = j;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Tf(e, t) {
      Hh = e, Rf = null, dg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Xr(a.lanes, t) && Mp(), a.firstContext = null);
      }
    }
    function Gn(e) {
      Vh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (dg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Rf === null) {
          if (Hh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Rf = a, Hh.dependencies = {
            lanes: $,
            firstContext: a
          };
        } else
          Rf = Rf.next = a;
      }
      return t;
    }
    var lc = null;
    function hg(e) {
      lc === null ? lc = [e] : lc.push(e);
    }
    function zw() {
      if (lc !== null) {
        for (var e = 0; e < lc.length; e++) {
          var t = lc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        lc = null;
      }
    }
    function yE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Bh(e, i);
    }
    function Uw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Aw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, hg(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Bh(e, i);
    }
    function Pa(e, t) {
      return Bh(e, t);
    }
    var Fw = Bh;
    function Bh(e, t) {
      e.lanes = Ze(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ze(a.lanes, t)), a === null && (e.flags & (qt | hi)) !== Me && p1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ze(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ze(a.childLanes, t) : (u.flags & (qt | hi)) !== Me && p1(e), i = u, u = u.return;
      if (i.tag === te) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var gE = 0, SE = 1, $h = 2, mg = 3, Yh = !1, yg, Ih;
    yg = !1, Ih = null;
    function gg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: $
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function EE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function ju(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: gE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Fo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Ih === u && !yg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), yg = !0), U_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Fw(e, a);
      } else
        return Aw(e, u, t, a);
    }
    function Qh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Yv(a)) {
          var s = u.lanes;
          s = Dd(s, e.pendingLanes);
          var f = Ze(s, a);
          u.lanes = f, Xc(e, f);
        }
      }
    }
    function Sg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function jw(e, t, a, i, u, s) {
      switch (a.tag) {
        case SE: {
          var f = a.payload;
          if (typeof f == "function") {
            vE();
            var p = f.call(s, i, u);
            {
              if (e.mode & ln) {
                Vn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Vn(!1);
                }
              }
              hE();
            }
            return p;
          }
          return f;
        }
        case mg:
          e.flags = e.flags & ~Zn | Ge;
        // Intentional fallthrough
        case gE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            vE(), y = v.call(s, i, u);
            {
              if (e.mode & ln) {
                Vn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Vn(!1);
                }
              }
              hE();
            }
          } else
            y = v;
          return y == null ? i : Je({}, i, y);
        }
        case $h:
          return Yh = !0, i;
      }
      return i;
    }
    function Wh(e, t, a, i) {
      var u = e.updateQueue;
      Yh = !1, Ih = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var _ = g.updateQueue, w = _.lastBaseUpdate;
          w !== f && (w === null ? _.firstBaseUpdate = y : w.next = y, _.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var N = u.baseState, U = $, j = null, le = null, Ne = null, _e = s;
        do {
          var Tt = _e.lane, vt = _e.eventTime;
          if (jl(i, Tt)) {
            if (Ne !== null) {
              var H = {
                eventTime: vt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Xt,
                tag: _e.tag,
                payload: _e.payload,
                callback: _e.callback,
                next: null
              };
              Ne = Ne.next = H;
            }
            N = jw(e, u, _e, N, t, a);
            var O = _e.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            _e.lane !== Xt) {
              e.flags |= Yn;
              var q = u.effects;
              q === null ? u.effects = [_e] : q.push(_e);
            }
          } else {
            var k = {
              eventTime: vt,
              lane: Tt,
              tag: _e.tag,
              payload: _e.payload,
              callback: _e.callback,
              next: null
            };
            Ne === null ? (le = Ne = k, j = N) : Ne = Ne.next = k, U = Ze(U, Tt);
          }
          if (_e = _e.next, _e === null) {
            if (p = u.shared.pending, p === null)
              break;
            var pe = p, oe = pe.next;
            pe.next = null, _e = oe, u.lastBaseUpdate = pe, u.shared.pending = null;
          }
        } while (!0);
        Ne === null && (j = N), u.baseState = j, u.firstBaseUpdate = le, u.lastBaseUpdate = Ne;
        var Be = u.shared.interleaved;
        if (Be !== null) {
          var Xe = Be;
          do
            U = Ze(U, Xe.lane), Xe = Xe.next;
          while (Xe !== Be);
        } else s === null && (u.shared.lanes = $);
        Yp(U), e.lanes = U, e.memoizedState = N;
      }
      Ih = null;
    }
    function Hw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function CE() {
      Yh = !1;
    }
    function Gh() {
      return Yh;
    }
    function RE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Hw(f, a));
        }
    }
    var gp = {}, jo = No(gp), Sp = No(gp), qh = No(gp);
    function Xh(e) {
      if (e === gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function TE() {
      var e = Xh(qh.current);
      return e;
    }
    function Eg(e, t) {
      Jr(qh, t, e), Jr(Sp, e, e), Jr(jo, gp, e);
      var a = nT(t);
      Kr(jo, e), Jr(jo, a, e);
    }
    function wf(e) {
      Kr(jo, e), Kr(Sp, e), Kr(qh, e);
    }
    function Cg() {
      var e = Xh(jo.current);
      return e;
    }
    function wE(e) {
      Xh(qh.current);
      var t = Xh(jo.current), a = rT(t, e.type);
      t !== a && (Jr(Sp, e, e), Jr(jo, a, e));
    }
    function Rg(e) {
      Sp.current === e && (Kr(jo, e), Kr(Sp, e));
    }
    var Vw = 0, xE = 1, _E = 1, Ep = 2, ll = No(Vw);
    function Tg(e, t) {
      return (e & t) !== 0;
    }
    function xf(e) {
      return e & xE;
    }
    function wg(e, t) {
      return e & xE | t;
    }
    function Pw(e, t) {
      return e | t;
    }
    function Ho(e, t) {
      Jr(ll, t, e);
    }
    function _f(e) {
      Kr(ll, e);
    }
    function Bw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Kh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Ce) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || $0(i) || By(i))
              return t;
          }
        } else if (t.tag === St && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ge) !== Me;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ba = (
      /*   */
      0
    ), nr = (
      /* */
      1
    ), Wl = (
      /*  */
      2
    ), rr = (
      /*    */
      4
    ), Or = (
      /*   */
      8
    ), xg = [];
    function _g() {
      for (var e = 0; e < xg.length; e++) {
        var t = xg[e];
        t._workInProgressVersionPrimary = null;
      }
      xg.length = 0;
    }
    function $w(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ce = et.ReactCurrentDispatcher, Cp = et.ReactCurrentBatchConfig, bg, bf;
    bg = /* @__PURE__ */ new Set();
    var uc = $, It = null, ar = null, ir = null, Jh = !1, Rp = !1, Tp = 0, Yw = 0, Iw = 25, V = null, Di = null, Vo = -1, Dg = !1;
    function Ht() {
      {
        var e = V;
        Di === null ? Di = [e] : Di.push(e);
      }
    }
    function ee() {
      {
        var e = V;
        Di !== null && (Vo++, Di[Vo] !== e && Qw(e));
      }
    }
    function Df(e) {
      e != null && !xt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function Qw(e) {
      {
        var t = Ye(It);
        if (!bg.has(t) && (bg.add(t), Di !== null)) {
          for (var a = "", i = 30, u = 0; u <= Vo; u++) {
            for (var s = Di[u], f = u === Vo ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Zr() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function kg(e, t) {
      if (Dg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!xe(e[a], t[a]))
          return !1;
      return !0;
    }
    function kf(e, t, a, i, u, s) {
      uc = s, It = t, Di = e !== null ? e._debugHookTypes : null, Vo = -1, Dg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = $, e !== null && e.memoizedState !== null ? ce.current = GE : Di !== null ? ce.current = WE : ce.current = QE;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= Iw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Dg = !1, ar = null, ir = null, t.updateQueue = null, Vo = -1, ce.current = qE, f = a(i, u);
        } while (Rp);
      }
      ce.current = fm, t._debugHookTypes = Di;
      var v = ar !== null && ar.next !== null;
      if (uc = $, It = null, ar = null, ir = null, V = null, Di = null, Vo = -1, e !== null && (e.flags & er) !== (t.flags & er) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Oe) !== re && S("Internal React error: Expected static flag was missing. Please notify the React team."), Jh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Of() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function bE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Gr) !== re ? t.flags &= ~(hu | Ua | Yr | Re) : t.flags &= ~(Yr | Re), e.lanes = Co(e.lanes, a);
    }
    function DE() {
      if (ce.current = fm, Jh) {
        for (var e = It.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Jh = !1;
      }
      uc = $, It = null, ar = null, ir = null, Di = null, Vo = -1, V = null, PE = !1, Rp = !1, Tp = 0;
    }
    function Gl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return ir === null ? It.memoizedState = ir = e : ir = ir.next = e, ir;
    }
    function ki() {
      var e;
      if (ar === null) {
        var t = It.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = ar.next;
      var a;
      if (ir === null ? a = It.memoizedState : a = ir.next, a !== null)
        ir = a, a = ir.next, ar = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        ar = e;
        var i = {
          memoizedState: ar.memoizedState,
          baseState: ar.baseState,
          baseQueue: ar.baseQueue,
          queue: ar.queue,
          next: null
        };
        ir === null ? It.memoizedState = ir = i : ir = ir.next = i;
      }
      return ir;
    }
    function kE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Og(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Lg(e, t, a) {
      var i = Gl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Xw.bind(null, It, s);
      return [i.memoizedState, f];
    }
    function Mg(e, t, a) {
      var i = ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = ar, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, _ = s.baseState, w = null, N = null, U = null, j = g;
        do {
          var le = j.lane;
          if (jl(uc, le)) {
            if (U !== null) {
              var _e = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Xt,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              U = U.next = _e;
            }
            if (j.hasEagerState)
              _ = j.eagerState;
            else {
              var Tt = j.action;
              _ = e(_, Tt);
            }
          } else {
            var Ne = {
              lane: le,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            U === null ? (N = U = Ne, w = _) : U = U.next = Ne, It.lanes = Ze(It.lanes, le), Yp(le);
          }
          j = j.next;
        } while (j !== null && j !== g);
        U === null ? w = _ : U.next = N, xe(_, i.memoizedState) || Mp(), i.memoizedState = _, i.baseState = w, i.baseQueue = U, u.lastRenderedState = _;
      }
      var vt = u.interleaved;
      if (vt !== null) {
        var k = vt;
        do {
          var H = k.lane;
          It.lanes = Ze(It.lanes, H), Yp(H), k = k.next;
        } while (k !== vt);
      } else f === null && (u.lanes = $);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Ng(e, t, a) {
      var i = ki(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        xe(p, i.memoizedState) || Mp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function yD(e, t, a) {
    }
    function gD(e, t, a) {
    }
    function zg(e, t, a) {
      var i = It, u = Gl(), s, f = kr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), bf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), bf = !0);
      } else {
        if (s = t(), !bf) {
          var p = t();
          xe(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), bf = !0);
        }
        var v = Om();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ls(v, uc) || OE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, rm(ME.bind(null, i, y, e), [e]), i.flags |= Yr, wp(nr | Or, LE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Zh(e, t, a) {
      var i = It, u = ki(), s = t();
      if (!bf) {
        var f = t();
        xe(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), bf = !0);
      }
      var p = u.memoizedState, v = !xe(p, s);
      v && (u.memoizedState = s, Mp());
      var y = u.queue;
      if (_p(ME.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      ir !== null && ir.memoizedState.tag & nr) {
        i.flags |= Yr, wp(nr | Or, LE.bind(null, i, y, s, t), void 0, null);
        var g = Om();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ls(g, uc) || OE(i, t, s);
      }
      return s;
    }
    function OE(e, t, a) {
      e.flags |= vu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = It.updateQueue;
      if (u === null)
        u = kE(), It.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function LE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, NE(t) && zE(e);
    }
    function ME(e, t, a) {
      var i = function() {
        NE(t) && zE(e);
      };
      return a(i);
    }
    function NE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !xe(a, i);
      } catch {
        return !0;
      }
    }
    function zE(e) {
      var t = Pa(e, we);
      t !== null && sr(t, e, we, Zt);
    }
    function em(e) {
      var t = Gl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: $,
        dispatch: null,
        lastRenderedReducer: Og,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Kw.bind(null, It, a);
      return [t.memoizedState, i];
    }
    function Ug(e) {
      return Mg(Og);
    }
    function Ag(e) {
      return Ng(Og);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = It.updateQueue;
      if (s === null)
        s = kE(), It.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Fg(e) {
      var t = Gl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function tm(e) {
      var t = ki();
      return t.memoizedState;
    }
    function xp(e, t, a, i) {
      var u = Gl(), s = i === void 0 ? null : i;
      It.flags |= e, u.memoizedState = wp(nr | t, a, void 0, s);
    }
    function nm(e, t, a, i) {
      var u = ki(), s = i === void 0 ? null : i, f = void 0;
      if (ar !== null) {
        var p = ar.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (kg(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      It.flags |= e, u.memoizedState = wp(nr | t, a, f, s);
    }
    function rm(e, t) {
      return (It.mode & Gr) !== re ? xp(hu | Yr | kl, Or, e, t) : xp(Yr | kl, Or, e, t);
    }
    function _p(e, t) {
      return nm(Yr, Or, e, t);
    }
    function jg(e, t) {
      return xp(Re, Wl, e, t);
    }
    function am(e, t) {
      return nm(Re, Wl, e, t);
    }
    function Hg(e, t) {
      var a = Re;
      return a |= za, (It.mode & Gr) !== re && (a |= Ua), xp(a, rr, e, t);
    }
    function im(e, t) {
      return nm(Re, rr, e, t);
    }
    function UE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Vg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Re;
      return u |= za, (It.mode & Gr) !== re && (u |= Ua), xp(u, rr, UE.bind(null, t, e), i);
    }
    function lm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return nm(Re, rr, UE.bind(null, t, e), i);
    }
    function Ww(e, t) {
    }
    var um = Ww;
    function Pg(e, t) {
      var a = Gl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function om(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Bg(e, t) {
      var a = Gl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function sm(e, t) {
      var a = ki(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (kg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function $g(e) {
      var t = Gl();
      return t.memoizedState = e, e;
    }
    function AE(e) {
      var t = ki(), a = ar, i = a.memoizedState;
      return jE(t, i, e);
    }
    function FE(e) {
      var t = ki();
      if (ar === null)
        return t.memoizedState = e, e;
      var a = ar.memoizedState;
      return jE(t, a, e);
    }
    function jE(e, t, a) {
      var i = !Pv(uc);
      if (i) {
        if (!xe(a, t)) {
          var u = Rr();
          It.lanes = Ze(It.lanes, u), Yp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Mp()), e.memoizedState = a, a;
    }
    function Gw(e, t, a) {
      var i = wr();
      _t(cy(i, Ci)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (_t(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Qe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Yg() {
      var e = em(!1), t = e[0], a = e[1], i = Gw.bind(null, a), u = Gl();
      return u.memoizedState = i, [t, i];
    }
    function HE() {
      var e = Ug(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    function VE() {
      var e = Ag(), t = e[0], a = ki(), i = a.memoizedState;
      return [t, i];
    }
    var PE = !1;
    function qw() {
      return PE;
    }
    function Ig() {
      var e = Gl(), t = Om(), a = t.identifierPrefix, i;
      if (kr()) {
        var u = dw();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Yw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function cm() {
      var e = ki(), t = e.memoizedState;
      return t;
    }
    function Xw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Io(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (BE(e))
        $E(t, u);
      else {
        var s = yE(e, t, u, i);
        if (s !== null) {
          var f = Ta();
          sr(s, e, i, f), YE(s, t, i);
        }
      }
      IE(e, i);
    }
    function Kw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Io(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (BE(e))
        $E(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === $ && (s === null || s.lanes === $)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ce.current, ce.current = ul;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, xe(y, v)) {
                Uw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ce.current = p;
            }
          }
        }
        var g = yE(e, t, u, i);
        if (g !== null) {
          var _ = Ta();
          sr(g, e, i, _), YE(g, t, i);
        }
      }
      IE(e, i);
    }
    function BE(e) {
      var t = e.alternate;
      return e === It || t !== null && t === It;
    }
    function $E(e, t) {
      Rp = Jh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function YE(e, t, a) {
      if (Yv(a)) {
        var i = t.lanes;
        i = Dd(i, e.pendingLanes);
        var u = Ze(i, a);
        t.lanes = u, Xc(e, u);
      }
    }
    function IE(e, t, a) {
      Ki(e, t);
    }
    var fm = {
      readContext: Gn,
      useCallback: Zr,
      useContext: Zr,
      useEffect: Zr,
      useImperativeHandle: Zr,
      useInsertionEffect: Zr,
      useLayoutEffect: Zr,
      useMemo: Zr,
      useReducer: Zr,
      useRef: Zr,
      useState: Zr,
      useDebugValue: Zr,
      useDeferredValue: Zr,
      useTransition: Zr,
      useMutableSource: Zr,
      useSyncExternalStore: Zr,
      useId: Zr,
      unstable_isNewReconciler: he
    }, QE = null, WE = null, GE = null, qE = null, ql = null, ul = null, dm = null;
    {
      var Qg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, qe = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      QE = {
        readContext: function(e) {
          return Gn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Ht(), Df(t), Pg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Ht(), Gn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Ht(), Df(t), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Ht(), Df(a), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Ht(), Df(t), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Ht(), Df(t), Hg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Ht(), Df(t);
          var a = ce.current;
          ce.current = ql;
          try {
            return Bg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Ht();
          var i = ce.current;
          ce.current = ql;
          try {
            return Lg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Ht(), Fg(e);
        },
        useState: function(e) {
          V = "useState", Ht();
          var t = ce.current;
          ce.current = ql;
          try {
            return em(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Ht(), $g(e);
        },
        useTransition: function() {
          return V = "useTransition", Ht(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Ht(), zg(e, t, a);
        },
        useId: function() {
          return V = "useId", Ht(), Ig();
        },
        unstable_isNewReconciler: he
      }, WE = {
        readContext: function(e) {
          return Gn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ee(), Pg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ee(), Gn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ee(), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ee(), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ee(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ee(), Hg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ee();
          var a = ce.current;
          ce.current = ql;
          try {
            return Bg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ee();
          var i = ce.current;
          ce.current = ql;
          try {
            return Lg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ee(), Fg(e);
        },
        useState: function(e) {
          V = "useState", ee();
          var t = ce.current;
          ce.current = ql;
          try {
            return em(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ee(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ee(), $g(e);
        },
        useTransition: function() {
          return V = "useTransition", ee(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ee(), zg(e, t, a);
        },
        useId: function() {
          return V = "useId", ee(), Ig();
        },
        unstable_isNewReconciler: he
      }, GE = {
        readContext: function(e) {
          return Gn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ee(), om(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ee(), Gn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ee(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ee(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ee(), im(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ee();
          var a = ce.current;
          ce.current = ul;
          try {
            return sm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ee();
          var i = ce.current;
          ce.current = ul;
          try {
            return Mg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ee(), tm();
        },
        useState: function(e) {
          V = "useState", ee();
          var t = ce.current;
          ce.current = ul;
          try {
            return Ug(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ee(), um();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ee(), AE(e);
        },
        useTransition: function() {
          return V = "useTransition", ee(), HE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ee(), Zh(e, t);
        },
        useId: function() {
          return V = "useId", ee(), cm();
        },
        unstable_isNewReconciler: he
      }, qE = {
        readContext: function(e) {
          return Gn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", ee(), om(e, t);
        },
        useContext: function(e) {
          return V = "useContext", ee(), Gn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", ee(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", ee(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", ee(), im(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", ee();
          var a = ce.current;
          ce.current = dm;
          try {
            return sm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", ee();
          var i = ce.current;
          ce.current = dm;
          try {
            return Ng(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", ee(), tm();
        },
        useState: function(e) {
          V = "useState", ee();
          var t = ce.current;
          ce.current = dm;
          try {
            return Ag(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", ee(), um();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", ee(), FE(e);
        },
        useTransition: function() {
          return V = "useTransition", ee(), VE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", ee(), Zh(e, t);
        },
        useId: function() {
          return V = "useId", ee(), cm();
        },
        unstable_isNewReconciler: he
      }, ql = {
        readContext: function(e) {
          return Qg(), Gn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", qe(), Ht(), Pg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", qe(), Ht(), Gn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", qe(), Ht(), rm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", qe(), Ht(), Vg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", qe(), Ht(), jg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", qe(), Ht(), Hg(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", qe(), Ht();
          var a = ce.current;
          ce.current = ql;
          try {
            return Bg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", qe(), Ht();
          var i = ce.current;
          ce.current = ql;
          try {
            return Lg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", qe(), Ht(), Fg(e);
        },
        useState: function(e) {
          V = "useState", qe(), Ht();
          var t = ce.current;
          ce.current = ql;
          try {
            return em(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", qe(), Ht(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", qe(), Ht(), $g(e);
        },
        useTransition: function() {
          return V = "useTransition", qe(), Ht(), Yg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", qe(), Ht(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", qe(), Ht(), zg(e, t, a);
        },
        useId: function() {
          return V = "useId", qe(), Ht(), Ig();
        },
        unstable_isNewReconciler: he
      }, ul = {
        readContext: function(e) {
          return Qg(), Gn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", qe(), ee(), om(e, t);
        },
        useContext: function(e) {
          return V = "useContext", qe(), ee(), Gn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", qe(), ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", qe(), ee(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", qe(), ee(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", qe(), ee(), im(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", qe(), ee();
          var a = ce.current;
          ce.current = ul;
          try {
            return sm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", qe(), ee();
          var i = ce.current;
          ce.current = ul;
          try {
            return Mg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", qe(), ee(), tm();
        },
        useState: function(e) {
          V = "useState", qe(), ee();
          var t = ce.current;
          ce.current = ul;
          try {
            return Ug(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", qe(), ee(), um();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", qe(), ee(), AE(e);
        },
        useTransition: function() {
          return V = "useTransition", qe(), ee(), HE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", qe(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", qe(), ee(), Zh(e, t);
        },
        useId: function() {
          return V = "useId", qe(), ee(), cm();
        },
        unstable_isNewReconciler: he
      }, dm = {
        readContext: function(e) {
          return Qg(), Gn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", qe(), ee(), om(e, t);
        },
        useContext: function(e) {
          return V = "useContext", qe(), ee(), Gn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", qe(), ee(), _p(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", qe(), ee(), lm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", qe(), ee(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", qe(), ee(), im(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", qe(), ee();
          var a = ce.current;
          ce.current = ul;
          try {
            return sm(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", qe(), ee();
          var i = ce.current;
          ce.current = ul;
          try {
            return Ng(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", qe(), ee(), tm();
        },
        useState: function(e) {
          V = "useState", qe(), ee();
          var t = ce.current;
          ce.current = ul;
          try {
            return Ag(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", qe(), ee(), um();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", qe(), ee(), FE(e);
        },
        useTransition: function() {
          return V = "useTransition", qe(), ee(), VE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", qe(), ee(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", qe(), ee(), Zh(e, t);
        },
        useId: function() {
          return V = "useId", qe(), ee(), cm();
        },
        unstable_isNewReconciler: he
      };
    }
    var Po = A.unstable_now, XE = 0, pm = -1, bp = -1, vm = -1, Wg = !1, hm = !1;
    function KE() {
      return Wg;
    }
    function Jw() {
      hm = !0;
    }
    function Zw() {
      Wg = !1, hm = !1;
    }
    function ex() {
      Wg = hm, hm = !1;
    }
    function JE() {
      return XE;
    }
    function ZE() {
      XE = Po();
    }
    function Gg(e) {
      bp = Po(), e.actualStartTime < 0 && (e.actualStartTime = Po());
    }
    function eC(e) {
      bp = -1;
    }
    function mm(e, t) {
      if (bp >= 0) {
        var a = Po() - bp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), bp = -1;
      }
    }
    function Xl(e) {
      if (pm >= 0) {
        var t = Po() - pm;
        pm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case kt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function qg(e) {
      if (vm >= 0) {
        var t = Po() - vm;
        vm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case te:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case kt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Kl() {
      pm = Po();
    }
    function Xg() {
      vm = Po();
    }
    function Kg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function ol(e, t) {
      if (e && e.defaultProps) {
        var a = Je({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Jg = {}, Zg, eS, tS, nS, rS, tC, ym, aS, iS, lS, Dp;
    {
      Zg = /* @__PURE__ */ new Set(), eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set(), Dp = /* @__PURE__ */ new Set();
      var nC = /* @__PURE__ */ new Set();
      ym = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          nC.has(a) || (nC.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, tC = function(e, t) {
        if (t === void 0) {
          var a = yt(e) || "Component";
          rS.has(a) || (rS.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Jg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Jg);
    }
    function uS(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & ln) {
          Vn(!0);
          try {
            s = a(i, u);
          } finally {
            Vn(!1);
          }
        }
        tC(t, s);
      }
      var f = s == null ? u : Je({}, u, s);
      if (e.memoizedState = f, e.lanes === $) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var oS = {
      isMounted: pa,
      enqueueSetState: function(e, t, a) {
        var i = vi(e), u = Ta(), s = Io(i), f = ju(u, s);
        f.payload = t, a != null && (ym(a, "setState"), f.callback = a);
        var p = Fo(i, f, s);
        p !== null && (sr(p, i, s, u), Qh(p, i, s)), Ki(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = vi(e), u = Ta(), s = Io(i), f = ju(u, s);
        f.tag = SE, f.payload = t, a != null && (ym(a, "replaceState"), f.callback = a);
        var p = Fo(i, f, s);
        p !== null && (sr(p, i, s, u), Qh(p, i, s)), Ki(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = vi(e), i = Ta(), u = Io(a), s = ju(i, u);
        s.tag = $h, t != null && (ym(t, "forceUpdate"), s.callback = t);
        var f = Fo(a, s, u);
        f !== null && (sr(f, a, u, i), Qh(f, a, u)), Sd(a, u);
      }
    };
    function rC(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & ln) {
            Vn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Vn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", yt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Tn(a, i) || !Tn(u, s) : !0;
    }
    function tx(e, t, a) {
      var i = e.stateNode;
      {
        var u = yt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), t.childContextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ln) === re && (Dp.add(t), S(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), t.contextTypes && !Dp.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ln) === re && (Dp.add(t), S(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u)), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !iS.has(t) && (iS.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", yt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !tS.has(t) && (tS.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", yt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || xt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function aC(e, t) {
      t.updater = oS, e.stateNode = t, _c(t, e), t._reactInternalInstance = Jg;
    }
    function iC(e, t, a) {
      var i = !1, u = ui, s = ui, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === I && f._context === void 0
        );
        if (!p && !lS.has(t)) {
          lS.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === R ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", yt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Gn(f);
      else {
        u = mf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? yf(e, u) : ui;
      }
      var g = new t(a, s);
      if (e.mode & ln) {
        Vn(!0);
        try {
          g = new t(a, s);
        } finally {
          Vn(!1);
        }
      }
      var _ = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      aC(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && _ === null) {
          var w = yt(t) || "Component";
          eS.has(w) || (eS.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, U = null, j = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), N !== null || U !== null || j !== null) {
            var le = yt(t) || "Component", Ne = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            nS.has(le) || (nS.add(le), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, le, Ne, N !== null ? `
  ` + N : "", U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && G0(e, u, s), g;
    }
    function nx(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ye(e) || "Component"), oS.enqueueReplaceState(t, t.state, null));
    }
    function lC(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ye(e) || "Component";
          Zg.has(s) || (Zg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        oS.enqueueReplaceState(t, t.state, null);
      }
    }
    function sS(e, t, a, i) {
      tx(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = {}, gg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Gn(s);
      else {
        var f = mf(e, t, !0);
        u.context = yf(e, f);
      }
      {
        if (u.state === a) {
          var p = yt(t) || "Component";
          aS.has(p) || (aS.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & ln && il.recordLegacyContextWarning(e, u), il.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (uS(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (nx(e, u), Wh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Re;
        y |= za, (e.mode & Gr) !== re && (y |= Ua), e.flags |= y;
      }
    }
    function rx(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ui;
      if (typeof p == "object" && p !== null)
        v = Gn(p);
      else {
        var y = mf(e, t, !0);
        v = yf(e, y);
      }
      var g = t.getDerivedStateFromProps, _ = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !_ && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && lC(e, u, a, v), CE();
      var w = e.memoizedState, N = u.state = w;
      if (Wh(e, a, u, i), N = e.memoizedState, s === a && w === N && !Dh() && !Gh()) {
        if (typeof u.componentDidMount == "function") {
          var U = Re;
          U |= za, (e.mode & Gr) !== re && (U |= Ua), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (uS(e, t, g, a), N = e.memoizedState);
      var j = Gh() || rC(e, t, s, a, w, N, v);
      if (j) {
        if (!_ && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var le = Re;
          le |= za, (e.mode & Gr) !== re && (le |= Ua), e.flags |= le;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var Ne = Re;
          Ne |= za, (e.mode & Gr) !== re && (Ne |= Ua), e.flags |= Ne;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, j;
    }
    function ax(e, t, a, i, u) {
      var s = t.stateNode;
      EE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : ol(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, _ = ui;
      if (typeof g == "object" && g !== null)
        _ = Gn(g);
      else {
        var w = mf(t, a, !0);
        _ = yf(t, w);
      }
      var N = a.getDerivedStateFromProps, U = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== _) && lC(t, s, i, _), CE();
      var j = t.memoizedState, le = s.state = j;
      if (Wh(t, i, s, u), le = t.memoizedState, f === v && j === le && !Dh() && !Gh() && !ie)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Re), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Nn), !1;
      typeof N == "function" && (uS(t, a, N, i), le = t.memoizedState);
      var Ne = Gh() || rC(t, a, p, i, j, le, _) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ie;
      return Ne ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, le, _), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, le, _)), typeof s.componentDidUpdate == "function" && (t.flags |= Re), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= Nn)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Re), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= Nn), t.memoizedProps = i, t.memoizedState = le), s.props = i, s.state = le, s.context = _, Ne;
    }
    function oc(e, t) {
      return {
        value: e,
        source: t,
        stack: Qu(t),
        digest: null
      };
    }
    function cS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function ix(e, t) {
      return !0;
    }
    function fS(e, t) {
      try {
        var a = ix(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ve)
            return;
          console.error(i);
        }
        var p = u ? Ye(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === te)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ye(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var _ = v + `
` + f + `

` + ("" + y);
        console.error(_);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var lx = typeof WeakMap == "function" ? WeakMap : Map;
    function uC(e, t, a) {
      var i = ju(Zt, a);
      i.tag = mg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        J_(u), fS(e, t);
      }, i;
    }
    function dS(e, t, a) {
      var i = ju(Zt, a);
      i.tag = mg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          g1(e), fS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        g1(e), fS(e, t), typeof u != "function" && X_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Xr(e.lanes, we) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ye(e) || "Unknown"));
      }), i;
    }
    function oC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new lx(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Z_.bind(null, e, t, a);
        va && Ip(e, a), t.then(s, s);
      }
    }
    function ux(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function ox(e, t) {
      var a = e.tag;
      if ((e.mode & Oe) === re && (a === ke || a === je || a === $e)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function sC(e) {
      var t = e;
      do {
        if (t.tag === Ce && Bw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function cC(e, t, a, i, u) {
      if ((e.mode & Oe) === re) {
        if (e === t)
          e.flags |= Zn;
        else {
          if (e.flags |= Ge, a.flags |= bc, a.flags &= ~(Ov | Dl), a.tag === ve) {
            var s = a.alternate;
            if (s === null)
              a.tag = yn;
            else {
              var f = ju(Zt, we);
              f.tag = $h, Fo(a, f, we);
            }
          }
          a.lanes = Ze(a.lanes, we);
        }
        return e;
      }
      return e.flags |= Zn, e.lanes = u, e;
    }
    function sx(e, t, a, i, u) {
      if (a.flags |= Dl, va && Ip(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ox(a), kr() && a.mode & Oe && tE();
        var f = sC(t);
        if (f !== null) {
          f.flags &= ~Cr, cC(f, t, a, e, u), f.mode & Oe && oC(e, s, u), ux(f, e, s);
          return;
        } else {
          if (!xd(u)) {
            oC(e, s, u), IS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (kr() && a.mode & Oe) {
        tE();
        var v = sC(t);
        if (v !== null) {
          (v.flags & Zn) === Me && (v.flags |= Cr), cC(v, t, a, e, u), ag(oc(i, a));
          return;
        }
      }
      i = oc(i, a), B_(i);
      var y = t;
      do {
        switch (y.tag) {
          case te: {
            var g = i;
            y.flags |= Zn;
            var _ = Eo(u);
            y.lanes = Ze(y.lanes, _);
            var w = uC(y, g, _);
            Sg(y, w);
            return;
          }
          case ve:
            var N = i, U = y.type, j = y.stateNode;
            if ((y.flags & Ge) === Me && (typeof U.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !s1(j))) {
              y.flags |= Zn;
              var le = Eo(u);
              y.lanes = Ze(y.lanes, le);
              var Ne = dS(y, N, le);
              Sg(y, Ne);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function cx() {
      return null;
    }
    var kp = et.ReactCurrentOwner, sl = !1, pS, Op, vS, hS, mS, sc, yS, gm, Lp;
    pS = {}, Op = {}, vS = {}, hS = {}, mS = {}, sc = !1, yS = {}, gm = {}, Lp = {};
    function Ca(e, t, a, i) {
      e === null ? t.child = pE(t, null, a, i) : t.child = Cf(t, e.child, a, i);
    }
    function fx(e, t, a, i) {
      t.child = Cf(t, e.child, null, i), t.child = Cf(t, null, a, i);
    }
    function fC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && rl(
          s,
          i,
          // Resolved props
          "prop",
          yt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Tf(t, u), ha(t);
      {
        if (kp.current = t, Jn(!0), v = kf(e, t, f, i, p, u), y = Of(), t.mode & ln) {
          Vn(!0);
          try {
            v = kf(e, t, f, i, p, u), y = Of();
          } finally {
            Vn(!1);
          }
        }
        Jn(!1);
      }
      return ma(), e !== null && !sl ? (bE(e, t, u), Hu(e, t, u)) : (kr() && y && Jy(t), t.flags |= ti, Ca(e, t, v, u), t.child);
    }
    function dC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (mb(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = jf(s), t.tag = $e, t.type = f, ES(t, s), pC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          if (p && rl(
            p,
            i,
            // Resolved props
            "prop",
            yt(s)
          ), a.defaultProps !== void 0) {
            var v = yt(s) || "Unknown";
            Lp[v] || (S("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", v), Lp[v] = !0);
          }
        }
        var y = n0(a.type, null, i, t, t.mode, u);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var g = a.type, _ = g.propTypes;
        _ && rl(
          _,
          i,
          // Resolved props
          "prop",
          yt(g)
        );
      }
      var w = e.child, N = _S(e, u);
      if (!N) {
        var U = w.memoizedProps, j = a.compare;
        if (j = j !== null ? j : Tn, j(U, i) && e.ref === t.ref)
          return Hu(e, t, u);
      }
      t.flags |= ti;
      var le = vc(w, i);
      return le.ref = t.ref, le.return = t, t.child = le, le;
    }
    function pC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === ze) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && rl(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            yt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Tn(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (sl = !1, t.pendingProps = i = g, _S(e, u))
            (e.flags & bc) !== Me && (sl = !0);
          else return t.lanes = e.lanes, Hu(e, t, u);
      }
      return gS(e, t, a, i, u);
    }
    function vC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || b)
        if ((t.mode & Oe) === re) {
          var f = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Lm(t, a);
        } else if (Xr(a, ya)) {
          var _ = {
            baseLanes: $,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = _;
          var w = s !== null ? s.baseLanes : a;
          Lm(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Ze(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = ya;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, Lm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = Ze(s.baseLanes, a), t.memoizedState = null) : N = a, Lm(t, N);
      }
      return Ca(e, t, u, a), t.child;
    }
    function dx(e, t, a) {
      var i = t.pendingProps;
      return Ca(e, t, i, a), t.child;
    }
    function px(e, t, a) {
      var i = t.pendingProps.children;
      return Ca(e, t, i, a), t.child;
    }
    function vx(e, t, a) {
      {
        t.flags |= Re;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ca(e, t, s, a), t.child;
    }
    function hC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= fa, t.flags |= mi);
    }
    function gS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && rl(
          s,
          i,
          // Resolved props
          "prop",
          yt(a)
        );
      }
      var f;
      {
        var p = mf(t, a, !0);
        f = yf(t, p);
      }
      var v, y;
      Tf(t, u), ha(t);
      {
        if (kp.current = t, Jn(!0), v = kf(e, t, a, i, f, u), y = Of(), t.mode & ln) {
          Vn(!0);
          try {
            v = kf(e, t, a, i, f, u), y = Of();
          } finally {
            Vn(!1);
          }
        }
        Jn(!1);
      }
      return ma(), e !== null && !sl ? (bE(e, t, u), Hu(e, t, u)) : (kr() && y && Jy(t), t.flags |= ti, Ca(e, t, v, u), t.child);
    }
    function mC(e, t, a, i, u) {
      {
        switch (Lb(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ge, t.flags |= Zn;
            var y = new Error("Simulated error coming from DevTools"), g = Eo(u);
            t.lanes = Ze(t.lanes, g);
            var _ = dS(t, oc(y, t), g);
            Sg(t, _);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && rl(
            w,
            i,
            // Resolved props
            "prop",
            yt(a)
          );
        }
      }
      var N;
      Ql(a) ? (N = !0, Oh(t)) : N = !1, Tf(t, u);
      var U = t.stateNode, j;
      U === null ? (Em(e, t), iC(t, a, i), sS(t, a, i, u), j = !0) : e === null ? j = rx(t, a, i, u) : j = ax(e, t, a, i, u);
      var le = SS(e, t, a, j, N, u);
      {
        var Ne = t.stateNode;
        j && Ne.props !== i && (sc || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ye(t) || "a component"), sc = !0);
      }
      return le;
    }
    function SS(e, t, a, i, u, s) {
      hC(e, t);
      var f = (t.flags & Ge) !== Me;
      if (!i && !f)
        return u && K0(t, a, !1), Hu(e, t, s);
      var p = t.stateNode;
      kp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, eC();
      else {
        ha(t);
        {
          if (Jn(!0), v = p.render(), t.mode & ln) {
            Vn(!0);
            try {
              p.render();
            } finally {
              Vn(!1);
            }
          }
          Jn(!1);
        }
        ma();
      }
      return t.flags |= ti, e !== null && f ? fx(e, t, v, s) : Ca(e, t, v, s), t.memoizedState = p.state, u && K0(t, a, !0), t.child;
    }
    function yC(e) {
      var t = e.stateNode;
      t.pendingContext ? q0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && q0(e, t.context, !1), Eg(e, t.containerInfo);
    }
    function hx(e, t, a) {
      if (yC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      EE(e, t), Wh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & Cr) {
          var g = oc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return gC(e, t, p, a, g);
        } else if (p !== s) {
          var _ = oc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return gC(e, t, p, a, _);
        } else {
          gw(t);
          var w = pE(t, null, p, a);
          t.child = w;
          for (var N = w; N; )
            N.flags = N.flags & ~qt | hi, N = N.sibling;
        }
      } else {
        if (Ef(), p === s)
          return Hu(e, t, a);
        Ca(e, t, p, a);
      }
      return t.child;
    }
    function gC(e, t, a, i, u) {
      return Ef(), ag(u), t.flags |= Cr, Ca(e, t, a, i), t.child;
    }
    function mx(e, t, a) {
      wE(t), e === null && rg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = jy(i, u);
      return p ? f = null : s !== null && jy(i, s) && (t.flags |= Na), hC(e, t), Ca(e, t, f, a), t.child;
    }
    function yx(e, t) {
      return e === null && rg(t), null;
    }
    function gx(e, t, a, i) {
      Em(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = yb(v), g = ol(v, u), _;
      switch (y) {
        case ke:
          return ES(t, v), t.type = v = jf(v), _ = gS(null, t, v, g, i), _;
        case ve:
          return t.type = v = XS(v), _ = mC(null, t, v, g, i), _;
        case je:
          return t.type = v = KS(v), _ = fC(null, t, v, g, i), _;
        case ft: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && rl(
              w,
              g,
              // Resolved for outer only
              "prop",
              yt(v)
            );
          }
          return _ = dC(
            null,
            t,
            v,
            ol(v.type, g),
            // The inner type can have defaults too
            i
          ), _;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === ze && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function Sx(e, t, a, i, u) {
      Em(e, t), t.tag = ve;
      var s;
      return Ql(a) ? (s = !0, Oh(t)) : s = !1, Tf(t, u), iC(t, a, i), sS(t, a, i, u), SS(null, t, a, !0, s, u);
    }
    function Ex(e, t, a, i) {
      Em(e, t);
      var u = t.pendingProps, s;
      {
        var f = mf(t, a, !1);
        s = yf(t, f);
      }
      Tf(t, i);
      var p, v;
      ha(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = yt(a) || "Unknown";
          pS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), pS[y] = !0);
        }
        t.mode & ln && il.recordLegacyContextWarning(t, null), Jn(!0), kp.current = t, p = kf(null, t, a, u, s, i), v = Of(), Jn(!1);
      }
      if (ma(), t.flags |= ti, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = yt(a) || "Unknown";
        Op[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), Op[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var _ = yt(a) || "Unknown";
          Op[_] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", _, _, _), Op[_] = !0);
        }
        t.tag = ve, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return Ql(a) ? (w = !0, Oh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, gg(t), aC(t, p), sS(t, a, u, i), SS(null, t, a, !0, w, i);
      } else {
        if (t.tag = ke, t.mode & ln) {
          Vn(!0);
          try {
            p = kf(null, t, a, u, s, i), v = Of();
          } finally {
            Vn(!1);
          }
        }
        return kr() && v && Jy(t), Ca(null, t, p, i), ES(t, a), t.child;
      }
    }
    function ES(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Oa();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), mS[u] || (mS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (t.defaultProps !== void 0) {
          var f = yt(t) || "Unknown";
          Lp[f] || (S("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", f), Lp[f] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var p = yt(t) || "Unknown";
          hS[p] || (S("%s: Function components do not support getDerivedStateFromProps.", p), hS[p] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var v = yt(t) || "Unknown";
          vS[v] || (S("%s: Function components do not support contextType.", v), vS[v] = !0);
        }
      }
    }
    var CS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Xt
    };
    function RS(e) {
      return {
        baseLanes: e,
        cachePool: cx(),
        transitions: null
      };
    }
    function Cx(e, t) {
      var a = null;
      return {
        baseLanes: Ze(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Rx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Tg(e, Ep);
    }
    function Tx(e, t) {
      return Co(e.childLanes, t);
    }
    function SC(e, t, a) {
      var i = t.pendingProps;
      Mb(t) && (t.flags |= Ge);
      var u = ll.current, s = !1, f = (t.flags & Ge) !== Me;
      if (f || Rx(u, e) ? (s = !0, t.flags &= ~Ge) : (e === null || e.memoizedState !== null) && (u = Pw(u, _E)), u = xf(u), Ho(t, u), e === null) {
        rg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Dx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var _ = wx(t, y, g, a), w = t.child;
          return w.memoizedState = RS(a), t.memoizedState = CS, _;
        } else
          return TS(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var U = N.dehydrated;
          if (U !== null)
            return kx(e, t, f, i, U, N, a);
        }
        if (s) {
          var j = i.fallback, le = i.children, Ne = _x(e, t, le, j, a), _e = t.child, Tt = e.child.memoizedState;
          return _e.memoizedState = Tt === null ? RS(a) : Cx(Tt, a), _e.childLanes = Tx(e, a), t.memoizedState = CS, Ne;
        } else {
          var vt = i.children, k = xx(e, t, vt, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function TS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = wS(u, i);
      return s.return = e, e.child = s, s;
    }
    function wx(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Oe) === re && s !== null ? (p = s, p.childLanes = $, p.pendingProps = f, e.mode & Ie && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Wo(a, u, i, null)) : (p = wS(f, u), v = Wo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function wS(e, t, a) {
      return E1(e, t, $, null);
    }
    function EC(e, t) {
      return vc(e, t);
    }
    function xx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = EC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Oe) === re && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Lt) : p.push(s);
      }
      return t.child = f, f;
    }
    function _x(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & Oe) === re && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = $, y.pendingProps = v, t.mode & Ie && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = EC(f, v), y.subtreeFlags = f.subtreeFlags & er;
      var _;
      return p !== null ? _ = vc(p, i) : (_ = Wo(i, s, u, null), _.flags |= qt), _.return = t, y.return = t, y.sibling = _, t.child = y, _;
    }
    function Sm(e, t, a, i) {
      i !== null && ag(i), Cf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = TS(t, s);
      return f.flags |= qt, t.memoizedState = null, f;
    }
    function bx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = wS(f, s), v = Wo(i, s, u, null);
      return v.flags |= qt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Oe) !== re && Cf(t, e.child, null, u), v;
    }
    function Dx(e, t, a) {
      return (e.mode & Oe) === re ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = we) : By(t) ? e.lanes = Ji : e.lanes = ya, null;
    }
    function kx(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & Cr) {
          t.flags &= ~Cr;
          var k = cS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Sm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ge, null;
          var H = i.children, O = i.fallback, q = bx(e, t, H, O, f), pe = t.child;
          return pe.memoizedState = RS(f), t.memoizedState = CS, q;
        }
      else {
        if (mw(), (t.mode & Oe) === re)
          return Sm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (By(u)) {
          var p, v, y;
          {
            var g = NT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var _;
          v ? _ = new Error(v) : _ = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = cS(_, p, y);
          return Sm(e, t, f, w);
        }
        var N = Xr(f, e.childLanes);
        if (sl || N) {
          var U = Om();
          if (U !== null) {
            var j = Ld(U, f);
            if (j !== Xt && j !== s.retryLane) {
              s.retryLane = j;
              var le = Zt;
              Pa(e, j), sr(U, e, j, le);
            }
          }
          IS();
          var Ne = cS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Sm(e, t, f, Ne);
        } else if ($0(u)) {
          t.flags |= Ge, t.child = e.child;
          var _e = eb.bind(null, e);
          return zT(u, _e), null;
        } else {
          Sw(t, u, s.treeContext);
          var Tt = i.children, vt = TS(t, Tt);
          return vt.flags |= hi, vt;
        }
      }
    }
    function CC(e, t, a) {
      e.lanes = Ze(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ze(i.lanes, t)), vg(e.return, t, a);
    }
    function Ox(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Ce) {
          var u = i.memoizedState;
          u !== null && CC(i, a, e);
        } else if (i.tag === St)
          CC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Lx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Kh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Mx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !yS[e])
        if (yS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Nx(e, t) {
      e !== void 0 && !gm[e] && (e !== "collapsed" && e !== "hidden" ? (gm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (gm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function RC(e, t) {
      {
        var a = xt(e), i = !a && typeof Hr(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function zx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (xt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!RC(e[a], a))
              return;
        } else {
          var i = Hr(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!RC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function xS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function TC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Mx(u), Nx(s, u), zx(f, u), Ca(e, t, f, a);
      var p = ll.current, v = Tg(p, Ep);
      if (v)
        p = wg(p, Ep), t.flags |= Ge;
      else {
        var y = e !== null && (e.flags & Ge) !== Me;
        y && Ox(t, t.child, a), p = xf(p);
      }
      if (Ho(t, p), (t.mode & Oe) === re)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Lx(t.child), _;
            g === null ? (_ = t.child, t.child = null) : (_ = g.sibling, g.sibling = null), xS(
              t,
              !1,
              // isBackwards
              _,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var U = N.alternate;
              if (U !== null && Kh(U) === null) {
                t.child = N;
                break;
              }
              var j = N.sibling;
              N.sibling = w, w = N, N = j;
            }
            xS(
              t,
              !0,
              // isBackwards
              w,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            xS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ux(e, t, a) {
      Eg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Cf(t, null, i, a) : Ca(e, t, i, a), t.child;
    }
    var wC = !1;
    function Ax(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || wC || (wC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && rl(v, s, "prop", "Context.Provider");
      }
      if (mE(t, u, p), f !== null) {
        var y = f.value;
        if (xe(y, p)) {
          if (f.children === s.children && !Dh())
            return Hu(e, t, a);
        } else
          Mw(t, u, a);
      }
      var g = s.children;
      return Ca(e, t, g, a), t.child;
    }
    var xC = !1;
    function Fx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (xC || (xC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Tf(t, a);
      var f = Gn(i);
      ha(t);
      var p;
      return kp.current = t, Jn(!0), p = s(f), Jn(!1), ma(), t.flags |= ti, Ca(e, t, p, a), t.child;
    }
    function Mp() {
      sl = !0;
    }
    function Em(e, t) {
      (t.mode & Oe) === re && e !== null && (e.alternate = null, t.alternate = null, t.flags |= qt);
    }
    function Hu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), eC(), Yp(t.lanes), Xr(a, t.childLanes) ? (Ow(e, t), t.child) : null;
    }
    function jx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Lt) : s.push(e), a.flags |= qt, a;
      }
    }
    function _S(e, t) {
      var a = e.lanes;
      return !!Xr(a, t);
    }
    function Hx(e, t, a) {
      switch (t.tag) {
        case te:
          yC(t), t.stateNode, Ef();
          break;
        case ue:
          wE(t);
          break;
        case ve: {
          var i = t.type;
          Ql(i) && Oh(t);
          break;
        }
        case Ue:
          Eg(t, t.stateNode.containerInfo);
          break;
        case rt: {
          var u = t.memoizedProps.value, s = t.type._context;
          mE(t, s, u);
          break;
        }
        case kt:
          {
            var f = Xr(a, t.childLanes);
            f && (t.flags |= Re);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Ce: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Ho(t, xf(ll.current)), t.flags |= Ge, null;
            var y = t.child, g = y.childLanes;
            if (Xr(a, g))
              return SC(e, t, a);
            Ho(t, xf(ll.current));
            var _ = Hu(e, t, a);
            return _ !== null ? _.sibling : null;
          } else
            Ho(t, xf(ll.current));
          break;
        }
        case St: {
          var w = (e.flags & Ge) !== Me, N = Xr(a, t.childLanes);
          if (w) {
            if (N)
              return TC(e, t, a);
            t.flags |= Ge;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Ho(t, ll.current), N)
            break;
          return null;
        }
        case He:
        case tt:
          return t.lanes = $, vC(e, t, a);
      }
      return Hu(e, t, a);
    }
    function _C(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return jx(e, t, n0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || Dh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          sl = !0;
        else {
          var s = _S(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ge) === Me)
            return sl = !1, Hx(e, t, a);
          (e.flags & bc) !== Me ? sl = !0 : sl = !1;
        }
      } else if (sl = !1, kr() && cw(t)) {
        var f = t.index, p = fw();
        eE(t, p, f);
      }
      switch (t.lanes = $, t.tag) {
        case We:
          return Ex(e, t, t.type, a);
        case wn: {
          var v = t.elementType;
          return gx(e, t, v, a);
        }
        case ke: {
          var y = t.type, g = t.pendingProps, _ = t.elementType === y ? g : ol(y, g);
          return gS(e, t, y, _, a);
        }
        case ve: {
          var w = t.type, N = t.pendingProps, U = t.elementType === w ? N : ol(w, N);
          return mC(e, t, w, U, a);
        }
        case te:
          return hx(e, t, a);
        case ue:
          return mx(e, t, a);
        case Ee:
          return yx(e, t);
        case Ce:
          return SC(e, t, a);
        case Ue:
          return Ux(e, t, a);
        case je: {
          var j = t.type, le = t.pendingProps, Ne = t.elementType === j ? le : ol(j, le);
          return fC(e, t, j, Ne, a);
        }
        case pt:
          return dx(e, t, a);
        case Fn:
          return px(e, t, a);
        case kt:
          return vx(e, t, a);
        case rt:
          return Ax(e, t, a);
        case on:
          return Fx(e, t, a);
        case ft: {
          var _e = t.type, Tt = t.pendingProps, vt = ol(_e, Tt);
          if (t.type !== t.elementType) {
            var k = _e.propTypes;
            k && rl(
              k,
              vt,
              // Resolved for outer only
              "prop",
              yt(_e)
            );
          }
          return vt = ol(_e.type, vt), dC(e, t, _e, vt, a);
        }
        case $e:
          return pC(e, t, t.type, t.pendingProps, a);
        case yn: {
          var H = t.type, O = t.pendingProps, q = t.elementType === H ? O : ol(H, O);
          return Sx(e, t, H, q, a);
        }
        case St:
          return TC(e, t, a);
        case tn:
          break;
        case He:
          return vC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Lf(e) {
      e.flags |= Re;
    }
    function bC(e) {
      e.flags |= fa, e.flags |= mi;
    }
    var DC, bS, kC, OC;
    DC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === Ee)
          uT(e, u.stateNode);
        else if (u.tag !== Ue) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, bS = function(e, t) {
    }, kC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Cg(), v = sT(f, a, s, i, u, p);
        t.updateQueue = v, v && Lf(t);
      }
    }, OC = function(e, t, a, i) {
      a !== i && Lf(t);
    };
    function Np(e, t) {
      if (!kr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Lr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = $, i = Me;
      if (t) {
        if ((e.mode & Ie) !== re) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Ze(a, Ze(y.lanes, y.childLanes)), i |= y.subtreeFlags & er, i |= y.flags & er, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Ze(a, Ze(g.lanes, g.childLanes)), i |= g.subtreeFlags & er, i |= g.flags & er, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Ie) !== re) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ze(a, Ze(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ze(a, Ze(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Vx(e, t, a) {
      if (ww() && (t.mode & Oe) !== re && (t.flags & Ge) === Me)
        return uE(t), Ef(), t.flags |= Cr | Dl | Zn, !1;
      var i = Uh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Rw(t), Lr(t), (t.mode & Ie) !== re) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Ef(), (t.flags & Ge) === Me && (t.memoizedState = null), t.flags |= Re, Lr(t), (t.mode & Ie) !== re) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return oE(), !0;
    }
    function LC(e, t, a) {
      var i = t.pendingProps;
      switch (Zy(t), t.tag) {
        case We:
        case wn:
        case $e:
        case ke:
        case je:
        case pt:
        case Fn:
        case kt:
        case on:
        case ft:
          return Lr(t), null;
        case ve: {
          var u = t.type;
          return Ql(u) && kh(t), Lr(t), null;
        }
        case te: {
          var s = t.stateNode;
          if (wf(t), qy(t), _g(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Uh(t);
            if (f)
              Lf(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Cr) !== Me) && (t.flags |= Nn, oE());
            }
          }
          return bS(e, t), Lr(t), null;
        }
        case ue: {
          Rg(t);
          var v = TE(), y = t.type;
          if (e !== null && t.stateNode != null)
            kC(e, t, y, i, v), e.ref !== t.ref && bC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Lr(t), null;
            }
            var g = Cg(), _ = Uh(t);
            if (_)
              Ew(t, v, g) && Lf(t);
            else {
              var w = lT(y, i, v, g, t);
              DC(w, t, !1, !1), t.stateNode = w, oT(w, y, i, v) && Lf(t);
            }
            t.ref !== null && bC(t);
          }
          return Lr(t), null;
        }
        case Ee: {
          var N = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            OC(e, t, U, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = TE(), le = Cg(), Ne = Uh(t);
            Ne ? Cw(t) && Lf(t) : t.stateNode = cT(N, j, le, t);
          }
          return Lr(t), null;
        }
        case Ce: {
          _f(t);
          var _e = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Tt = Vx(e, t, _e);
            if (!Tt)
              return t.flags & Zn ? t : null;
          }
          if ((t.flags & Ge) !== Me)
            return t.lanes = a, (t.mode & Ie) !== re && Kg(t), t;
          var vt = _e !== null, k = e !== null && e.memoizedState !== null;
          if (vt !== k && vt) {
            var H = t.child;
            if (H.flags |= bl, (t.mode & Oe) !== re) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !B);
              O || Tg(ll.current, _E) ? P_() : IS();
            }
          }
          var q = t.updateQueue;
          if (q !== null && (t.flags |= Re), Lr(t), (t.mode & Ie) !== re && vt) {
            var pe = t.child;
            pe !== null && (t.treeBaseDuration -= pe.treeBaseDuration);
          }
          return null;
        }
        case Ue:
          return wf(t), bS(e, t), e === null && rw(t.stateNode.containerInfo), Lr(t), null;
        case rt:
          var oe = t.type._context;
          return pg(oe, t), Lr(t), null;
        case yn: {
          var Be = t.type;
          return Ql(Be) && kh(t), Lr(t), null;
        }
        case St: {
          _f(t);
          var Xe = t.memoizedState;
          if (Xe === null)
            return Lr(t), null;
          var Qt = (t.flags & Ge) !== Me, Mt = Xe.rendering;
          if (Mt === null)
            if (Qt)
              Np(Xe, !1);
            else {
              var Bn = $_() && (e === null || (e.flags & Ge) === Me);
              if (!Bn)
                for (var Nt = t.child; Nt !== null; ) {
                  var An = Kh(Nt);
                  if (An !== null) {
                    Qt = !0, t.flags |= Ge, Np(Xe, !1);
                    var ea = An.updateQueue;
                    return ea !== null && (t.updateQueue = ea, t.flags |= Re), t.subtreeFlags = Me, Lw(t, a), Ho(t, wg(ll.current, Ep)), t.child;
                  }
                  Nt = Nt.sibling;
                }
              Xe.tail !== null && zn() > JC() && (t.flags |= Ge, Qt = !0, Np(Xe, !1), t.lanes = jv);
            }
          else {
            if (!Qt) {
              var Ar = Kh(Mt);
              if (Ar !== null) {
                t.flags |= Ge, Qt = !0;
                var si = Ar.updateQueue;
                if (si !== null && (t.updateQueue = si, t.flags |= Re), Np(Xe, !0), Xe.tail === null && Xe.tailMode === "hidden" && !Mt.alternate && !kr())
                  return Lr(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              zn() * 2 - Xe.renderingStartTime > JC() && a !== ya && (t.flags |= Ge, Qt = !0, Np(Xe, !1), t.lanes = jv);
            }
            if (Xe.isBackwards)
              Mt.sibling = t.child, t.child = Mt;
            else {
              var wa = Xe.last;
              wa !== null ? wa.sibling = Mt : t.child = Mt, Xe.last = Mt;
            }
          }
          if (Xe.tail !== null) {
            var xa = Xe.tail;
            Xe.rendering = xa, Xe.tail = xa.sibling, Xe.renderingStartTime = zn(), xa.sibling = null;
            var ta = ll.current;
            return Qt ? ta = wg(ta, Ep) : ta = xf(ta), Ho(t, ta), xa;
          }
          return Lr(t), null;
        }
        case tn:
          break;
        case He:
        case tt: {
          YS(t);
          var Yu = t.memoizedState, Hf = Yu !== null;
          if (e !== null) {
            var qp = e.memoizedState, eu = qp !== null;
            eu !== Hf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !b && (t.flags |= bl);
          }
          return !Hf || (t.mode & Oe) === re ? Lr(t) : Xr(Zl, ya) && (Lr(t), t.subtreeFlags & (qt | Re) && (t.flags |= bl)), null;
        }
        case wt:
          return null;
        case nt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Px(e, t, a) {
      switch (Zy(t), t.tag) {
        case ve: {
          var i = t.type;
          Ql(i) && kh(t);
          var u = t.flags;
          return u & Zn ? (t.flags = u & ~Zn | Ge, (t.mode & Ie) !== re && Kg(t), t) : null;
        }
        case te: {
          t.stateNode, wf(t), qy(t), _g();
          var s = t.flags;
          return (s & Zn) !== Me && (s & Ge) === Me ? (t.flags = s & ~Zn | Ge, t) : null;
        }
        case ue:
          return Rg(t), null;
        case Ce: {
          _f(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Ef();
          }
          var p = t.flags;
          return p & Zn ? (t.flags = p & ~Zn | Ge, (t.mode & Ie) !== re && Kg(t), t) : null;
        }
        case St:
          return _f(t), null;
        case Ue:
          return wf(t), null;
        case rt:
          var v = t.type._context;
          return pg(v, t), null;
        case He:
        case tt:
          return YS(t), null;
        case wt:
          return null;
        default:
          return null;
      }
    }
    function MC(e, t, a) {
      switch (Zy(t), t.tag) {
        case ve: {
          var i = t.type.childContextTypes;
          i != null && kh(t);
          break;
        }
        case te: {
          t.stateNode, wf(t), qy(t), _g();
          break;
        }
        case ue: {
          Rg(t);
          break;
        }
        case Ue:
          wf(t);
          break;
        case Ce:
          _f(t);
          break;
        case St:
          _f(t);
          break;
        case rt:
          var u = t.type._context;
          pg(u, t);
          break;
        case He:
        case tt:
          YS(t);
          break;
      }
    }
    var NC = null;
    NC = /* @__PURE__ */ new Set();
    var Cm = !1, Mr = !1, Bx = typeof WeakSet == "function" ? WeakSet : Set, ye = null, Mf = null, Nf = null;
    function $x(e) {
      ei(null, function() {
        throw e;
      }), Wi();
    }
    var Yx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Ie)
        try {
          Kl(), t.componentWillUnmount();
        } finally {
          Xl(e);
        }
      else
        t.componentWillUnmount();
    };
    function zC(e, t) {
      try {
        Bo(rr, e);
      } catch (a) {
        un(e, t, a);
      }
    }
    function DS(e, t, a) {
      try {
        Yx(e, a);
      } catch (i) {
        un(e, t, i);
      }
    }
    function Ix(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        un(e, t, i);
      }
    }
    function UC(e, t) {
      try {
        FC(e);
      } catch (a) {
        un(e, t, a);
      }
    }
    function zf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (ht && ct && e.mode & Ie)
              try {
                Kl(), i = a(null);
              } finally {
                Xl(e);
              }
            else
              i = a(null);
          } catch (u) {
            un(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          a.current = null;
    }
    function Rm(e, t, a) {
      try {
        a();
      } catch (i) {
        un(e, t, i);
      }
    }
    var AC = !1;
    function Qx(e, t) {
      aT(e.containerInfo), ye = t, Wx();
      var a = AC;
      return AC = !1, a;
    }
    function Wx() {
      for (; ye !== null; ) {
        var e = ye, t = e.child;
        (e.subtreeFlags & Ir) !== Me && t !== null ? (t.return = e, ye = t) : Gx();
      }
    }
    function Gx() {
      for (; ye !== null; ) {
        var e = ye;
        vn(e);
        try {
          qx(e);
        } catch (a) {
          un(e, e.return, a);
        }
        nn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ye = t;
          return;
        }
        ye = e.return;
      }
    }
    function qx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & Nn) !== Me) {
        switch (vn(e), e.tag) {
          case ke:
          case je:
          case $e:
            break;
          case ve: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !sc && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : ol(e.type, i), u);
              {
                var p = NC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ye(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case te: {
            {
              var v = e.stateNode;
              kT(v.containerInfo);
            }
            break;
          }
          case ue:
          case Ee:
          case Ue:
          case yn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        nn();
      }
    }
    function cl(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Or) !== Ba ? zc(t) : (e & rr) !== Ba && uo(t), (e & Wl) !== Ba && Qp(!0), Rm(t, a, p), (e & Wl) !== Ba && Qp(!1), (e & Or) !== Ba ? Av() : (e & rr) !== Ba && oo());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Bo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Or) !== Ba ? Nc(t) : (e & rr) !== Ba && Ts(t);
            var f = s.create;
            (e & Wl) !== Ba && Qp(!0), s.destroy = f(), (e & Wl) !== Ba && Qp(!1), (e & Or) !== Ba ? Uv() : (e & rr) !== Ba && yi();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & rr) !== Me ? v = "useLayoutEffect" : (s.tag & Wl) !== Me ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Xx(e, t) {
      if ((t.flags & Re) !== Me)
        switch (t.tag) {
          case kt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = JE(), p = t.alternate === null ? "mount" : "update";
            KE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e: for (; v !== null; ) {
              switch (v.tag) {
                case te:
                  var y = v.stateNode;
                  y.passiveEffectDuration += a;
                  break e;
                case kt:
                  var g = v.stateNode;
                  g.passiveEffectDuration += a;
                  break e;
              }
              v = v.return;
            }
            break;
          }
        }
    }
    function Kx(e, t, a, i) {
      if ((a.flags & ni) !== Me)
        switch (a.tag) {
          case ke:
          case je:
          case $e: {
            if (!Mr)
              if (a.mode & Ie)
                try {
                  Kl(), Bo(rr | nr, a);
                } finally {
                  Xl(a);
                }
              else
                Bo(rr | nr, a);
            break;
          }
          case ve: {
            var u = a.stateNode;
            if (a.flags & Re && !Mr)
              if (t === null)
                if (a.type === a.elementType && !sc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & Ie)
                  try {
                    Kl(), u.componentDidMount();
                  } finally {
                    Xl(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : ol(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !sc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), a.mode & Ie)
                  try {
                    Kl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Xl(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !sc && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ye(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ye(a) || "instance")), RE(a, p, u));
            break;
          }
          case te: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ue:
                    y = a.child.stateNode;
                    break;
                  case ve:
                    y = a.child.stateNode;
                    break;
                }
              RE(a, v, y);
            }
            break;
          }
          case ue: {
            var g = a.stateNode;
            if (t === null && a.flags & Re) {
              var _ = a.type, w = a.memoizedProps;
              hT(g, _, w);
            }
            break;
          }
          case Ee:
            break;
          case Ue:
            break;
          case kt: {
            {
              var N = a.memoizedProps, U = N.onCommit, j = N.onRender, le = a.stateNode.effectDuration, Ne = JE(), _e = t === null ? "mount" : "update";
              KE() && (_e = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, _e, a.actualDuration, a.treeBaseDuration, a.actualStartTime, Ne);
              {
                typeof U == "function" && U(a.memoizedProps.id, _e, le, Ne), G_(a);
                var Tt = a.return;
                e: for (; Tt !== null; ) {
                  switch (Tt.tag) {
                    case te:
                      var vt = Tt.stateNode;
                      vt.effectDuration += le;
                      break e;
                    case kt:
                      var k = Tt.stateNode;
                      k.effectDuration += le;
                      break e;
                  }
                  Tt = Tt.return;
                }
              }
            }
            break;
          }
          case Ce: {
            i_(e, a);
            break;
          }
          case St:
          case yn:
          case tn:
          case He:
          case tt:
          case nt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Mr || a.flags & fa && FC(a);
    }
    function Jx(e) {
      switch (e.tag) {
        case ke:
        case je:
        case $e: {
          if (e.mode & Ie)
            try {
              Kl(), zC(e, e.return);
            } finally {
              Xl(e);
            }
          else
            zC(e, e.return);
          break;
        }
        case ve: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Ix(e, e.return, t), UC(e, e.return);
          break;
        }
        case ue: {
          UC(e, e.return);
          break;
        }
      }
    }
    function Zx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? xT(u) : bT(i.stateNode, i.memoizedProps);
            } catch (f) {
              un(e, e.return, f);
            }
          }
        } else if (i.tag === Ee) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? _T(s) : DT(s, i.memoizedProps);
            } catch (f) {
              un(e, e.return, f);
            }
        } else if (!((i.tag === He || i.tag === tt) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function FC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ue:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & Ie)
            try {
              Kl(), u = t(i);
            } finally {
              Xl(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ye(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ye(e)), t.current = i;
      }
    }
    function e_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function jC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, jC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && lw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function t_(e) {
      for (var t = e.return; t !== null; ) {
        if (HC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function HC(e) {
      return e.tag === ue || e.tag === te || e.tag === Ue;
    }
    function VC(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || HC(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== Ee && t.tag !== Kt; ) {
          if (t.flags & qt || t.child === null || t.tag === Ue)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & qt))
          return t.stateNode;
      }
    }
    function n_(e) {
      var t = t_(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & Na && (B0(a), t.flags &= ~Na);
          var i = VC(e);
          OS(e, i, a);
          break;
        }
        case te:
        case Ue: {
          var u = t.stateNode.containerInfo, s = VC(e);
          kS(e, s, u);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function kS(e, t, a) {
      var i = e.tag, u = i === ue || i === Ee;
      if (u) {
        var s = e.stateNode;
        t ? CT(a, s, t) : ST(a, s);
      } else if (i !== Ue) {
        var f = e.child;
        if (f !== null) {
          kS(f, t, a);
          for (var p = f.sibling; p !== null; )
            kS(p, t, a), p = p.sibling;
        }
      }
    }
    function OS(e, t, a) {
      var i = e.tag, u = i === ue || i === Ee;
      if (u) {
        var s = e.stateNode;
        t ? ET(a, s, t) : gT(a, s);
      } else if (i !== Ue) {
        var f = e.child;
        if (f !== null) {
          OS(f, t, a);
          for (var p = f.sibling; p !== null; )
            OS(p, t, a), p = p.sibling;
        }
      }
    }
    var Nr = null, fl = !1;
    function r_(e, t, a) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case ue: {
              Nr = i.stateNode, fl = !1;
              break e;
            }
            case te: {
              Nr = i.stateNode.containerInfo, fl = !0;
              break e;
            }
            case Ue: {
              Nr = i.stateNode.containerInfo, fl = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Nr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        PC(e, t, a), Nr = null, fl = !1;
      }
      e_(a);
    }
    function $o(e, t, a) {
      for (var i = a.child; i !== null; )
        PC(e, t, i), i = i.sibling;
    }
    function PC(e, t, a) {
      switch (pd(a), a.tag) {
        case ue:
          Mr || zf(a, t);
        // eslint-disable-next-line-no-fallthrough
        case Ee: {
          {
            var i = Nr, u = fl;
            Nr = null, $o(e, t, a), Nr = i, fl = u, Nr !== null && (fl ? TT(Nr, a.stateNode) : RT(Nr, a.stateNode));
          }
          return;
        }
        case Kt: {
          Nr !== null && (fl ? wT(Nr, a.stateNode) : Py(Nr, a.stateNode));
          return;
        }
        case Ue: {
          {
            var s = Nr, f = fl;
            Nr = a.stateNode.containerInfo, fl = !0, $o(e, t, a), Nr = s, fl = f;
          }
          return;
        }
        case ke:
        case je:
        case ft:
        case $e: {
          if (!Mr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var _ = g, w = _.destroy, N = _.tag;
                  w !== void 0 && ((N & Wl) !== Ba ? Rm(a, t, w) : (N & rr) !== Ba && (uo(a), a.mode & Ie ? (Kl(), Rm(a, t, w), Xl(a)) : Rm(a, t, w), oo())), g = g.next;
                } while (g !== y);
              }
            }
          }
          $o(e, t, a);
          return;
        }
        case ve: {
          if (!Mr) {
            zf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && DS(a, t, U);
          }
          $o(e, t, a);
          return;
        }
        case tn: {
          $o(e, t, a);
          return;
        }
        case He: {
          if (
            // TODO: Remove this dead flag
            a.mode & Oe
          ) {
            var j = Mr;
            Mr = j || a.memoizedState !== null, $o(e, t, a), Mr = j;
          } else
            $o(e, t, a);
          break;
        }
        default: {
          $o(e, t, a);
          return;
        }
      }
    }
    function a_(e) {
      e.memoizedState;
    }
    function i_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && $T(s);
          }
        }
      }
    }
    function BC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Bx()), t.forEach(function(i) {
          var u = tb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), va)
              if (Mf !== null && Nf !== null)
                Ip(Nf, Mf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function l_(e, t, a) {
      Mf = a, Nf = e, vn(t), $C(t, e), vn(t), Mf = null, Nf = null;
    }
    function dl(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            r_(e, t, s);
          } catch (v) {
            un(s, t, v);
          }
        }
      var f = rs();
      if (t.subtreeFlags & Qr)
        for (var p = t.child; p !== null; )
          vn(p), $C(p, e), p = p.sibling;
      vn(f);
    }
    function $C(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ke:
        case je:
        case ft:
        case $e: {
          if (dl(t, e), Jl(e), u & Re) {
            try {
              cl(Wl | nr, e, e.return), Bo(Wl | nr, e);
            } catch (Be) {
              un(e, e.return, Be);
            }
            if (e.mode & Ie) {
              try {
                Kl(), cl(rr | nr, e, e.return);
              } catch (Be) {
                un(e, e.return, Be);
              }
              Xl(e);
            } else
              try {
                cl(rr | nr, e, e.return);
              } catch (Be) {
                un(e, e.return, Be);
              }
          }
          return;
        }
        case ve: {
          dl(t, e), Jl(e), u & fa && i !== null && zf(i, i.return);
          return;
        }
        case ue: {
          dl(t, e), Jl(e), u & fa && i !== null && zf(i, i.return);
          {
            if (e.flags & Na) {
              var s = e.stateNode;
              try {
                B0(s);
              } catch (Be) {
                un(e, e.return, Be);
              }
            }
            if (u & Re) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    mT(f, g, y, v, p, e);
                  } catch (Be) {
                    un(e, e.return, Be);
                  }
              }
            }
          }
          return;
        }
        case Ee: {
          if (dl(t, e), Jl(e), u & Re) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var _ = e.stateNode, w = e.memoizedProps, N = i !== null ? i.memoizedProps : w;
            try {
              yT(_, N, w);
            } catch (Be) {
              un(e, e.return, Be);
            }
          }
          return;
        }
        case te: {
          if (dl(t, e), Jl(e), u & Re && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                BT(t.containerInfo);
              } catch (Be) {
                un(e, e.return, Be);
              }
          }
          return;
        }
        case Ue: {
          dl(t, e), Jl(e);
          return;
        }
        case Ce: {
          dl(t, e), Jl(e);
          var j = e.child;
          if (j.flags & bl) {
            var le = j.stateNode, Ne = j.memoizedState, _e = Ne !== null;
            if (le.isHidden = _e, _e) {
              var Tt = j.alternate !== null && j.alternate.memoizedState !== null;
              Tt || V_();
            }
          }
          if (u & Re) {
            try {
              a_(e);
            } catch (Be) {
              un(e, e.return, Be);
            }
            BC(e);
          }
          return;
        }
        case He: {
          var vt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Oe
          ) {
            var k = Mr;
            Mr = k || vt, dl(t, e), Mr = k;
          } else
            dl(t, e);
          if (Jl(e), u & bl) {
            var H = e.stateNode, O = e.memoizedState, q = O !== null, pe = e;
            if (H.isHidden = q, q && !vt && (pe.mode & Oe) !== re) {
              ye = pe;
              for (var oe = pe.child; oe !== null; )
                ye = oe, o_(oe), oe = oe.sibling;
            }
            Zx(pe, q);
          }
          return;
        }
        case St: {
          dl(t, e), Jl(e), u & Re && BC(e);
          return;
        }
        case tn:
          return;
        default: {
          dl(t, e), Jl(e);
          return;
        }
      }
    }
    function Jl(e) {
      var t = e.flags;
      if (t & qt) {
        try {
          n_(e);
        } catch (a) {
          un(e, e.return, a);
        }
        e.flags &= ~qt;
      }
      t & hi && (e.flags &= ~hi);
    }
    function u_(e, t, a) {
      Mf = a, Nf = t, ye = e, YC(e, t, a), Mf = null, Nf = null;
    }
    function YC(e, t, a) {
      for (var i = (e.mode & Oe) !== re; ye !== null; ) {
        var u = ye, s = u.child;
        if (u.tag === He && i) {
          var f = u.memoizedState !== null, p = f || Cm;
          if (p) {
            LS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Mr, _ = Cm, w = Mr;
            Cm = p, Mr = g, Mr && !w && (ye = u, s_(u));
            for (var N = s; N !== null; )
              ye = N, YC(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            ye = u, Cm = _, Mr = w, LS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ni) !== Me && s !== null ? (s.return = u, ye = s) : LS(e, t, a);
      }
    }
    function LS(e, t, a) {
      for (; ye !== null; ) {
        var i = ye;
        if ((i.flags & ni) !== Me) {
          var u = i.alternate;
          vn(i);
          try {
            Kx(t, u, i, a);
          } catch (f) {
            un(i, i.return, f);
          }
          nn();
        }
        if (i === e) {
          ye = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, ye = s;
          return;
        }
        ye = i.return;
      }
    }
    function o_(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.child;
        switch (t.tag) {
          case ke:
          case je:
          case ft:
          case $e: {
            if (t.mode & Ie)
              try {
                Kl(), cl(rr, t, t.return);
              } finally {
                Xl(t);
              }
            else
              cl(rr, t, t.return);
            break;
          }
          case ve: {
            zf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && DS(t, t.return, i);
            break;
          }
          case ue: {
            zf(t, t.return);
            break;
          }
          case He: {
            var u = t.memoizedState !== null;
            if (u) {
              IC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, ye = a) : IC(e);
      }
    }
    function IC(e) {
      for (; ye !== null; ) {
        var t = ye;
        if (t === e) {
          ye = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ye = a;
          return;
        }
        ye = t.return;
      }
    }
    function s_(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.child;
        if (t.tag === He) {
          var i = t.memoizedState !== null;
          if (i) {
            QC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, ye = a) : QC(e);
      }
    }
    function QC(e) {
      for (; ye !== null; ) {
        var t = ye;
        vn(t);
        try {
          Jx(t);
        } catch (i) {
          un(t, t.return, i);
        }
        if (nn(), t === e) {
          ye = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, ye = a;
          return;
        }
        ye = t.return;
      }
    }
    function c_(e, t, a, i) {
      ye = t, f_(t, e, a, i);
    }
    function f_(e, t, a, i) {
      for (; ye !== null; ) {
        var u = ye, s = u.child;
        (u.subtreeFlags & Wr) !== Me && s !== null ? (s.return = u, ye = s) : d_(e, t, a, i);
      }
    }
    function d_(e, t, a, i) {
      for (; ye !== null; ) {
        var u = ye;
        if ((u.flags & Yr) !== Me) {
          vn(u);
          try {
            p_(t, u, a, i);
          } catch (f) {
            un(u, u.return, f);
          }
          nn();
        }
        if (u === e) {
          ye = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, ye = s;
          return;
        }
        ye = u.return;
      }
    }
    function p_(e, t, a, i) {
      switch (t.tag) {
        case ke:
        case je:
        case $e: {
          if (t.mode & Ie) {
            Xg();
            try {
              Bo(Or | nr, t);
            } finally {
              qg(t);
            }
          } else
            Bo(Or | nr, t);
          break;
        }
      }
    }
    function v_(e) {
      ye = e, h_();
    }
    function h_() {
      for (; ye !== null; ) {
        var e = ye, t = e.child;
        if ((ye.flags & Lt) !== Me) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              ye = u, g_(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            ye = e;
          }
        }
        (e.subtreeFlags & Wr) !== Me && t !== null ? (t.return = e, ye = t) : m_();
      }
    }
    function m_() {
      for (; ye !== null; ) {
        var e = ye;
        (e.flags & Yr) !== Me && (vn(e), y_(e), nn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, ye = t;
          return;
        }
        ye = e.return;
      }
    }
    function y_(e) {
      switch (e.tag) {
        case ke:
        case je:
        case $e: {
          e.mode & Ie ? (Xg(), cl(Or | nr, e, e.return), qg(e)) : cl(Or | nr, e, e.return);
          break;
        }
      }
    }
    function g_(e, t) {
      for (; ye !== null; ) {
        var a = ye;
        vn(a), E_(a, t), nn();
        var i = a.child;
        i !== null ? (i.return = a, ye = i) : S_(e);
      }
    }
    function S_(e) {
      for (; ye !== null; ) {
        var t = ye, a = t.sibling, i = t.return;
        if (jC(t), t === e) {
          ye = null;
          return;
        }
        if (a !== null) {
          a.return = i, ye = a;
          return;
        }
        ye = i;
      }
    }
    function E_(e, t) {
      switch (e.tag) {
        case ke:
        case je:
        case $e: {
          e.mode & Ie ? (Xg(), cl(Or, e, t), qg(e)) : cl(Or, e, t);
          break;
        }
      }
    }
    function C_(e) {
      switch (e.tag) {
        case ke:
        case je:
        case $e: {
          try {
            Bo(rr | nr, e);
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
        case ve: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
      }
    }
    function R_(e) {
      switch (e.tag) {
        case ke:
        case je:
        case $e: {
          try {
            Bo(Or | nr, e);
          } catch (t) {
            un(e, e.return, t);
          }
          break;
        }
      }
    }
    function T_(e) {
      switch (e.tag) {
        case ke:
        case je:
        case $e: {
          try {
            cl(rr | nr, e, e.return);
          } catch (a) {
            un(e, e.return, a);
          }
          break;
        }
        case ve: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && DS(e, e.return, t);
          break;
        }
      }
    }
    function w_(e) {
      switch (e.tag) {
        case ke:
        case je:
        case $e:
          try {
            cl(Or | nr, e, e.return);
          } catch (t) {
            un(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var zp = Symbol.for;
      zp("selector.component"), zp("selector.has_pseudo_class"), zp("selector.role"), zp("selector.test_id"), zp("selector.text");
    }
    var x_ = [];
    function __() {
      x_.forEach(function(e) {
        return e();
      });
    }
    var b_ = et.ReactCurrentActQueue;
    function D_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function WC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && b_.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var k_ = Math.ceil, MS = et.ReactCurrentDispatcher, NS = et.ReactCurrentOwner, zr = et.ReactCurrentBatchConfig, pl = et.ReactCurrentActQueue, lr = (
      /*             */
      0
    ), GC = (
      /*               */
      1
    ), Ur = (
      /*                */
      2
    ), Oi = (
      /*                */
      4
    ), Vu = 0, Up = 1, cc = 2, Tm = 3, Ap = 4, qC = 5, zS = 6, Rt = lr, Ra = null, kn = null, ur = $, Zl = $, US = No($), or = Vu, Fp = null, wm = $, jp = $, xm = $, Hp = null, $a = null, AS = 0, XC = 500, KC = 1 / 0, O_ = 500, Pu = null;
    function Vp() {
      KC = zn() + O_;
    }
    function JC() {
      return KC;
    }
    var _m = !1, FS = null, Uf = null, fc = !1, Yo = null, Pp = $, jS = [], HS = null, L_ = 50, Bp = 0, VS = null, PS = !1, bm = !1, M_ = 50, Af = 0, Dm = null, $p = Zt, km = $, ZC = !1;
    function Om() {
      return Ra;
    }
    function Ta() {
      return (Rt & (Ur | Oi)) !== lr ? zn() : ($p !== Zt || ($p = zn()), $p);
    }
    function Io(e) {
      var t = e.mode;
      if ((t & Oe) === re)
        return we;
      if ((Rt & Ur) !== lr && ur !== $)
        return Eo(ur);
      var a = bw() !== _w;
      if (a) {
        if (zr.transition !== null) {
          var i = zr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return km === Xt && (km = Rr()), km;
      }
      var u = wr();
      if (u !== Xt)
        return u;
      var s = fT();
      return s;
    }
    function N_(e) {
      var t = e.mode;
      return (t & Oe) === re ? we : Tr();
    }
    function sr(e, t, a, i) {
      rb(), ZC && S("useInsertionEffect must not schedule updates."), PS && (bm = !0), Ro(e, a, i), (Rt & Ur) !== $ && e === Ra ? lb(t) : (va && Md(e, t, a), ub(t), e === Ra && ((Rt & Ur) === lr && (jp = Ze(jp, a)), or === Ap && Qo(e, ur)), Ya(e, i), a === we && Rt === lr && (t.mode & Oe) === re && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !pl.isBatchingLegacy && (Vp(), Z0()));
    }
    function z_(e, t, a) {
      var i = e.current;
      i.lanes = t, Ro(e, t, a), Ya(e, a);
    }
    function U_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Rt & Ur) !== lr
      );
    }
    function Ya(e, t) {
      var a = e.callbackNode;
      wd(e, t);
      var i = ks(e, e === Ra ? ur : $);
      if (i === $) {
        a !== null && h1(a), e.callbackNode = null, e.callbackPriority = Xt;
        return;
      }
      var u = Al(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(pl.current !== null && a !== GS)) {
        a == null && s !== we && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && h1(a);
      var f;
      if (u === we)
        e.tag === zo ? (pl.isBatchingLegacy !== null && (pl.didScheduleLegacyUpdate = !0), sw(n1.bind(null, e))) : J0(n1.bind(null, e)), pl.current !== null ? pl.current.push(Uo) : pT(function() {
          (Rt & (Ur | Oi)) === lr && Uo();
        }), f = null;
      else {
        var p;
        switch (Iv(i)) {
          case ga:
            p = Ll;
            break;
          case Ci:
            p = io;
            break;
          case ii:
            p = Ml;
            break;
          case Us:
            p = Nl;
            break;
          default:
            p = Ml;
            break;
        }
        f = qS(p, e1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function e1(e, t) {
      if (Zw(), $p = Zt, km = $, (Rt & (Ur | Oi)) !== lr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = $u();
      if (i && e.callbackNode !== a)
        return null;
      var u = ks(e, e === Ra ? ur : $);
      if (u === $)
        return null;
      var s = !Ls(e, u) && !$v(e, u) && !t, f = s ? I_(e, u) : Mm(e, u);
      if (f !== Vu) {
        if (f === cc) {
          var p = Os(e);
          p !== $ && (u = p, f = BS(e, p));
        }
        if (f === Up) {
          var v = Fp;
          throw dc(e, $), Qo(e, u), Ya(e, zn()), v;
        }
        if (f === zS)
          Qo(e, u);
        else {
          var y = !Ls(e, u), g = e.current.alternate;
          if (y && !F_(g)) {
            if (f = Mm(e, u), f === cc) {
              var _ = Os(e);
              _ !== $ && (u = _, f = BS(e, _));
            }
            if (f === Up) {
              var w = Fp;
              throw dc(e, $), Qo(e, u), Ya(e, zn()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, A_(e, f, u);
        }
      }
      return Ya(e, zn()), e.callbackNode === a ? e1.bind(null, e) : null;
    }
    function BS(e, t) {
      var a = Hp;
      if (de(e)) {
        var i = dc(e, t);
        i.flags |= Cr, nw(e.containerInfo);
      }
      var u = Mm(e, t);
      if (u !== cc) {
        var s = $a;
        $a = a, s !== null && t1(s);
      }
      return u;
    }
    function t1(e) {
      $a === null ? $a = e : $a.push.apply($a, e);
    }
    function A_(e, t, a) {
      switch (t) {
        case Vu:
        case Up:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case cc: {
          pc(e, $a, Pu);
          break;
        }
        case Tm: {
          if (Qo(e, a), bd(a) && // do not delay if we're inside an act() scope
          !m1()) {
            var i = AS + XC - zn();
            if (i > 10) {
              var u = ks(e, $);
              if (u !== $)
                break;
              var s = e.suspendedLanes;
              if (!jl(s, a)) {
                Ta(), Ns(e, s);
                break;
              }
              e.timeoutHandle = Hy(pc.bind(null, e, $a, Pu), i);
              break;
            }
          }
          pc(e, $a, Pu);
          break;
        }
        case Ap: {
          if (Qo(e, a), Bv(a))
            break;
          if (!m1()) {
            var f = Hv(e, a), p = f, v = zn() - p, y = nb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Hy(pc.bind(null, e, $a, Pu), y);
              break;
            }
          }
          pc(e, $a, Pu);
          break;
        }
        case qC: {
          pc(e, $a, Pu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function F_(e) {
      for (var t = e; ; ) {
        if (t.flags & vu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!xe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & vu && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Qo(e, t) {
      t = Co(t, xm), t = Co(t, jp), Od(e, t);
    }
    function n1(e) {
      if (ex(), (Rt & (Ur | Oi)) !== lr)
        throw new Error("Should not already be working.");
      $u();
      var t = ks(e, $);
      if (!Xr(t, we))
        return Ya(e, zn()), null;
      var a = Mm(e, t);
      if (e.tag !== zo && a === cc) {
        var i = Os(e);
        i !== $ && (t = i, a = BS(e, i));
      }
      if (a === Up) {
        var u = Fp;
        throw dc(e, $), Qo(e, t), Ya(e, zn()), u;
      }
      if (a === zS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, pc(e, $a, Pu), Ya(e, zn()), null;
    }
    function j_(e, t) {
      t !== $ && (Xc(e, Ze(t, we)), Ya(e, zn()), (Rt & (Ur | Oi)) === lr && (Vp(), Uo()));
    }
    function $S(e, t) {
      var a = Rt;
      Rt |= GC;
      try {
        return e(t);
      } finally {
        Rt = a, Rt === lr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !pl.isBatchingLegacy && (Vp(), Z0());
      }
    }
    function H_(e, t, a, i, u) {
      var s = wr(), f = zr.transition;
      try {
        return zr.transition = null, _t(ga), e(t, a, i, u);
      } finally {
        _t(s), zr.transition = f, Rt === lr && Vp();
      }
    }
    function Bu(e) {
      Yo !== null && Yo.tag === zo && (Rt & (Ur | Oi)) === lr && $u();
      var t = Rt;
      Rt |= GC;
      var a = zr.transition, i = wr();
      try {
        return zr.transition = null, _t(ga), e ? e() : void 0;
      } finally {
        _t(i), zr.transition = a, Rt = t, (Rt & (Ur | Oi)) === lr && Uo();
      }
    }
    function r1() {
      return (Rt & (Ur | Oi)) !== lr;
    }
    function Lm(e, t) {
      Jr(US, Zl, e), Zl = Ze(Zl, t);
    }
    function YS(e) {
      Zl = US.current, Kr(US, e);
    }
    function dc(e, t) {
      e.finishedWork = null, e.finishedLanes = $;
      var a = e.timeoutHandle;
      if (a !== Vy && (e.timeoutHandle = Vy, dT(a)), kn !== null)
        for (var i = kn.return; i !== null; ) {
          var u = i.alternate;
          MC(u, i), i = i.return;
        }
      Ra = e;
      var s = vc(e.current, null);
      return kn = s, ur = Zl = t, or = Vu, Fp = null, wm = $, jp = $, xm = $, Hp = null, $a = null, zw(), il.discardPendingWarnings(), s;
    }
    function a1(e, t) {
      do {
        var a = kn;
        try {
          if (Ph(), DE(), nn(), NS.current = null, a === null || a.return === null) {
            or = Up, Fp = t, kn = null;
            return;
          }
          if (ht && a.mode & Ie && mm(a, !0), at)
            if (ma(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              md(a, i, ur);
            } else
              gu(a, t, ur);
          sx(e, a.return, a, t, ur), o1(a);
        } catch (u) {
          t = u, kn === a && a !== null ? (a = a.return, kn = a) : a = kn;
          continue;
        }
        return;
      } while (!0);
    }
    function i1() {
      var e = MS.current;
      return MS.current = fm, e === null ? fm : e;
    }
    function l1(e) {
      MS.current = e;
    }
    function V_() {
      AS = zn();
    }
    function Yp(e) {
      wm = Ze(e, wm);
    }
    function P_() {
      or === Vu && (or = Tm);
    }
    function IS() {
      (or === Vu || or === Tm || or === cc) && (or = Ap), Ra !== null && (_d(wm) || _d(jp)) && Qo(Ra, ur);
    }
    function B_(e) {
      or !== Ap && (or = cc), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function $_() {
      return or === Vu;
    }
    function Mm(e, t) {
      var a = Rt;
      Rt |= Ur;
      var i = i1();
      if (Ra !== e || ur !== t) {
        if (va) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, ur), u.clear()), zs(e, t);
        }
        Pu = Ei(), dc(e, t);
      }
      ws(t);
      do
        try {
          Y_();
          break;
        } catch (s) {
          a1(e, s);
        }
      while (!0);
      if (Ph(), Rt = a, l1(i), kn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Uc(), Ra = null, ur = $, or;
    }
    function Y_() {
      for (; kn !== null; )
        u1(kn);
    }
    function I_(e, t) {
      var a = Rt;
      Rt |= Ur;
      var i = i1();
      if (Ra !== e || ur !== t) {
        if (va) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Ip(e, ur), u.clear()), zs(e, t);
        }
        Pu = Ei(), Vp(), dc(e, t);
      }
      ws(t);
      do
        try {
          Q_();
          break;
        } catch (s) {
          a1(e, s);
        }
      while (!0);
      return Ph(), l1(i), Rt = a, kn !== null ? (gd(), Vu) : (Uc(), Ra = null, ur = $, or);
    }
    function Q_() {
      for (; kn !== null && !Mv(); )
        u1(kn);
    }
    function u1(e) {
      var t = e.alternate;
      vn(e);
      var a;
      (e.mode & Ie) !== re ? (Gg(e), a = QS(t, e, Zl), mm(e, !0)) : a = QS(t, e, Zl), nn(), e.memoizedProps = e.pendingProps, a === null ? o1(e) : kn = a, NS.current = null;
    }
    function o1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Dl) === Me) {
          vn(t);
          var u = void 0;
          if ((t.mode & Ie) === re ? u = LC(a, t, Zl) : (Gg(t), u = LC(a, t, Zl), mm(t, !1)), nn(), u !== null) {
            kn = u;
            return;
          }
        } else {
          var s = Px(a, t);
          if (s !== null) {
            s.flags &= Gi, kn = s;
            return;
          }
          if ((t.mode & Ie) !== re) {
            mm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Dl, i.subtreeFlags = Me, i.deletions = null;
          else {
            or = zS, kn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          kn = v;
          return;
        }
        t = i, kn = t;
      } while (t !== null);
      or === Vu && (or = qC);
    }
    function pc(e, t, a) {
      var i = wr(), u = zr.transition;
      try {
        zr.transition = null, _t(ga), W_(e, t, a, i);
      } finally {
        zr.transition = u, _t(i);
      }
      return null;
    }
    function W_(e, t, a, i) {
      do
        $u();
      while (Yo !== null);
      if (ab(), (Rt & (Ur | Oi)) !== lr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (vd(s), u === null)
        return hd(), null;
      if (s === $ && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = $, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Xt;
      var f = Ze(u.lanes, u.childLanes);
      oy(e, f), e === Ra && (Ra = null, kn = null, ur = $), ((u.subtreeFlags & Wr) !== Me || (u.flags & Wr) !== Me) && (fc || (fc = !0, HS = a, qS(Ml, function() {
        return $u(), null;
      })));
      var p = (u.subtreeFlags & (Ir | Qr | ni | Wr)) !== Me, v = (u.flags & (Ir | Qr | ni | Wr)) !== Me;
      if (p || v) {
        var y = zr.transition;
        zr.transition = null;
        var g = wr();
        _t(ga);
        var _ = Rt;
        Rt |= Oi, NS.current = null, Qx(e, u), ZE(), l_(e, u, s), iT(e.containerInfo), e.current = u, so(s), u_(u, e, s), Fv(), ao(), Rt = _, _t(g), zr.transition = y;
      } else
        e.current = u, ZE();
      var w = fc;
      if (fc ? (fc = !1, Yo = e, Pp = s) : (Af = 0, Dm = null), f = e.pendingLanes, f === $ && (Uf = null), w || d1(e.current, !1), ja(u.stateNode, i), va && e.memoizedUpdaters.clear(), __(), Ya(e, zn()), t !== null)
        for (var N = e.onRecoverableError, U = 0; U < t.length; U++) {
          var j = t[U], le = j.stack, Ne = j.digest;
          N(j.value, {
            componentStack: le,
            digest: Ne
          });
        }
      if (_m) {
        _m = !1;
        var _e = FS;
        throw FS = null, _e;
      }
      return Xr(Pp, we) && e.tag !== zo && $u(), f = e.pendingLanes, Xr(f, we) ? (Jw(), e === VS ? Bp++ : (Bp = 0, VS = e)) : Bp = 0, Uo(), hd(), null;
    }
    function $u() {
      if (Yo !== null) {
        var e = Iv(Pp), t = Kc(ii, e), a = zr.transition, i = wr();
        try {
          return zr.transition = null, _t(t), q_();
        } finally {
          _t(i), zr.transition = a;
        }
      }
      return !1;
    }
    function G_(e) {
      jS.push(e), fc || (fc = !0, qS(Ml, function() {
        return $u(), null;
      }));
    }
    function q_() {
      if (Yo === null)
        return !1;
      var e = HS;
      HS = null;
      var t = Yo, a = Pp;
      if (Yo = null, Pp = $, (Rt & (Ur | Oi)) !== lr)
        throw new Error("Cannot flush passive effects while already rendering.");
      PS = !0, bm = !1, yd(a);
      var i = Rt;
      Rt |= Oi, v_(t.current), c_(t, t.current, a, e);
      {
        var u = jS;
        jS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Xx(t, f);
        }
      }
      hn(), d1(t.current, !0), Rt = i, Uo(), bm ? t === Dm ? Af++ : (Af = 0, Dm = t) : Af = 0, PS = !1, bm = !1, yu(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function s1(e) {
      return Uf !== null && Uf.has(e);
    }
    function X_(e) {
      Uf === null ? Uf = /* @__PURE__ */ new Set([e]) : Uf.add(e);
    }
    function K_(e) {
      _m || (_m = !0, FS = e);
    }
    var J_ = K_;
    function c1(e, t, a) {
      var i = oc(a, t), u = uC(e, i, we), s = Fo(e, u, we), f = Ta();
      s !== null && (Ro(s, we, f), Ya(s, f));
    }
    function un(e, t, a) {
      if ($x(a), Qp(!1), e.tag === te) {
        c1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === te) {
          c1(i, e, a);
          return;
        } else if (i.tag === ve) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !s1(s)) {
            var f = oc(a, e), p = dS(i, f, we), v = Fo(i, p, we), y = Ta();
            v !== null && (Ro(v, we, y), Ya(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Z_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ta();
      Ns(e, a), ob(e), Ra === e && jl(ur, a) && (or === Ap || or === Tm && bd(ur) && zn() - AS < XC ? dc(e, $) : xm = Ze(xm, a)), Ya(e, u);
    }
    function f1(e, t) {
      t === Xt && (t = N_(e));
      var a = Ta(), i = Pa(e, t);
      i !== null && (Ro(i, t, a), Ya(i, a));
    }
    function eb(e) {
      var t = e.memoizedState, a = Xt;
      t !== null && (a = t.retryLane), f1(e, a);
    }
    function tb(e, t) {
      var a = Xt, i;
      switch (e.tag) {
        case Ce:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case St:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), f1(e, a);
    }
    function nb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : k_(e / 1960) * 1960;
    }
    function rb() {
      if (Bp > L_)
        throw Bp = 0, VS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Af > M_ && (Af = 0, Dm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function ab() {
      il.flushLegacyContextWarning(), il.flushPendingUnsafeLifecycleWarnings();
    }
    function d1(e, t) {
      vn(e), Nm(e, Ua, T_), t && Nm(e, hu, w_), Nm(e, Ua, C_), t && Nm(e, hu, R_), nn();
    }
    function Nm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Me ? i = i.child : ((i.flags & t) !== Me && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var zm = null;
    function p1(e) {
      {
        if ((Rt & Ur) !== lr || !(e.mode & Oe))
          return;
        var t = e.tag;
        if (t !== We && t !== te && t !== ve && t !== ke && t !== je && t !== ft && t !== $e)
          return;
        var a = Ye(e) || "ReactComponent";
        if (zm !== null) {
          if (zm.has(a))
            return;
          zm.add(a);
        } else
          zm = /* @__PURE__ */ new Set([a]);
        var i = pn;
        try {
          vn(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? vn(e) : nn();
        }
      }
    }
    var QS;
    {
      var ib = null;
      QS = function(e, t, a) {
        var i = C1(ib, t);
        try {
          return _C(e, t, a);
        } catch (s) {
          if (yw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ph(), DE(), MC(e, t), C1(t, i), t.mode & Ie && Gg(t), ei(null, _C, null, e, t, a), ry()) {
            var u = Wi();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var v1 = !1, WS;
    WS = /* @__PURE__ */ new Set();
    function lb(e) {
      if (Pr && !qw())
        switch (e.tag) {
          case ke:
          case je:
          case $e: {
            var t = kn && Ye(kn) || "Unknown", a = t;
            if (!WS.has(a)) {
              WS.add(a);
              var i = Ye(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ve: {
            v1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), v1 = !0);
            break;
          }
        }
    }
    function Ip(e, t) {
      if (va) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Md(e, i, t);
        });
      }
    }
    var GS = {};
    function qS(e, t) {
      {
        var a = pl.current;
        return a !== null ? (a.push(t), GS) : fd(e, t);
      }
    }
    function h1(e) {
      if (e !== GS)
        return Lc(e);
    }
    function m1() {
      return pl.current !== null;
    }
    function ub(e) {
      {
        if (e.mode & Oe) {
          if (!WC())
            return;
        } else if (!D_() || Rt !== lr || e.tag !== ke && e.tag !== je && e.tag !== $e)
          return;
        if (pl.current === null) {
          var t = pn;
          try {
            vn(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ye(e));
          } finally {
            t ? vn(e) : nn();
          }
        }
      }
    }
    function ob(e) {
      e.tag !== zo && WC() && pl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Qp(e) {
      ZC = e;
    }
    var Li = null, Ff = null, sb = function(e) {
      Li = e;
    };
    function jf(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        return t === void 0 ? e : t.current;
      }
    }
    function XS(e) {
      return jf(e);
    }
    function KS(e) {
      {
        if (Li === null)
          return e;
        var t = Li(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = jf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: W,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function y1(e, t) {
      {
        if (Li === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ve: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ke: {
            (typeof i == "function" || s === ze) && (u = !0);
            break;
          }
          case je: {
            (s === W || s === ze) && (u = !0);
            break;
          }
          case ft:
          case $e: {
            (s === Ct || s === ze) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Li(a);
          if (f !== void 0 && f === Li(i))
            return !0;
        }
        return !1;
      }
    }
    function g1(e) {
      {
        if (Li === null || typeof WeakSet != "function")
          return;
        Ff === null && (Ff = /* @__PURE__ */ new WeakSet()), Ff.add(e);
      }
    }
    var cb = function(e, t) {
      {
        if (Li === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        $u(), Bu(function() {
          JS(e.current, i, a);
        });
      }
    }, fb = function(e, t) {
      {
        if (e.context !== ui)
          return;
        $u(), Bu(function() {
          Wp(t, e, null, null);
        });
      }
    };
    function JS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ke:
          case $e:
          case ve:
            v = p;
            break;
          case je:
            v = p.render;
            break;
        }
        if (Li === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var _ = Li(v);
          _ !== void 0 && (a.has(_) ? g = !0 : t.has(_) && (f === ve ? g = !0 : y = !0));
        }
        if (Ff !== null && (Ff.has(e) || i !== null && Ff.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Pa(e, we);
          w !== null && sr(w, e, we, Zt);
        }
        u !== null && !g && JS(u, t, a), s !== null && JS(s, t, a);
      }
    }
    var db = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return ZS(e.current, i, a), a;
      }
    };
    function ZS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ke:
          case $e:
          case ve:
            p = f;
            break;
          case je:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? pb(e, a) : i !== null && ZS(i, t, a), u !== null && ZS(u, t, a);
      }
    }
    function pb(e, t) {
      {
        var a = vb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ue:
              t.add(i.stateNode);
              return;
            case Ue:
              t.add(i.stateNode.containerInfo);
              return;
            case te:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function vb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ue)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var e0;
    {
      e0 = !1;
      try {
        var S1 = Object.preventExtensions({});
      } catch {
        e0 = !0;
      }
    }
    function hb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Me, this.subtreeFlags = Me, this.deletions = null, this.lanes = $, this.childLanes = $, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !e0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var oi = function(e, t, a, i) {
      return new hb(e, t, a, i);
    };
    function t0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function mb(e) {
      return typeof e == "function" && !t0(e) && e.defaultProps === void 0;
    }
    function yb(e) {
      if (typeof e == "function")
        return t0(e) ? ve : ke;
      if (e != null) {
        var t = e.$$typeof;
        if (t === W)
          return je;
        if (t === Ct)
          return ft;
      }
      return We;
    }
    function vc(e, t) {
      var a = e.alternate;
      a === null ? (a = oi(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Me, a.subtreeFlags = Me, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & er, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case We:
        case ke:
        case $e:
          a.type = jf(e.type);
          break;
        case ve:
          a.type = XS(e.type);
          break;
        case je:
          a.type = KS(e.type);
          break;
      }
      return a;
    }
    function gb(e, t) {
      e.flags &= er | qt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = $, e.lanes = t, e.child = null, e.subtreeFlags = Me, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Me, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Sb(e, t, a) {
      var i;
      return e === Lh ? (i = Oe, t === !0 && (i |= ln, i |= Gr)) : i = re, va && (i |= Ie), oi(te, null, null, i);
    }
    function n0(e, t, a, i, u, s) {
      var f = We, p = e;
      if (typeof e == "function")
        t0(e) ? (f = ve, p = XS(p)) : p = jf(p);
      else if (typeof e == "string")
        f = ue;
      else
        e: switch (e) {
          case oa:
            return Wo(a.children, u, s, t);
          case Ni:
            f = Fn, u |= ln, (u & Oe) !== re && (u |= Gr);
            break;
          case ml:
            return Eb(a, u, s, t);
          case Le:
            return Cb(a, u, s, t);
          case dt:
            return Rb(a, u, s, t);
          case Wt:
            return E1(a, u, s, t);
          case cn:
          // eslint-disable-next-line no-fallthrough
          case lt:
          // eslint-disable-next-line no-fallthrough
          case vr:
          // eslint-disable-next-line no-fallthrough
          case Ft:
          // eslint-disable-next-line no-fallthrough
          case Ln:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case R:
                  f = rt;
                  break e;
                case I:
                  f = on;
                  break e;
                case W:
                  f = je, p = KS(p);
                  break e;
                case Ct:
                  f = ft;
                  break e;
                case ze:
                  f = wn, p = null;
                  break e;
              }
            var v = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var y = i ? Ye(i) : null;
              y && (v += `

Check the render method of \`` + y + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
          }
        }
      var g = oi(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function r0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = n0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Wo(e, t, a, i) {
      var u = oi(pt, e, i, t);
      return u.lanes = a, u;
    }
    function Eb(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = oi(kt, e, i, t | Ie);
      return u.elementType = ml, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Cb(e, t, a, i) {
      var u = oi(Ce, e, i, t);
      return u.elementType = Le, u.lanes = a, u;
    }
    function Rb(e, t, a, i) {
      var u = oi(St, e, i, t);
      return u.elementType = dt, u.lanes = a, u;
    }
    function E1(e, t, a, i) {
      var u = oi(He, e, i, t);
      u.elementType = Wt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function a0(e, t, a) {
      var i = oi(Ee, e, null, t);
      return i.lanes = a, i;
    }
    function Tb() {
      var e = oi(ue, null, null, re);
      return e.elementType = "DELETED", e;
    }
    function wb(e) {
      var t = oi(Kt, null, null, re);
      return t.stateNode = e, t;
    }
    function i0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = oi(Ue, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function C1(e, t) {
      return e === null && (e = oi(We, null, null, re)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function xb(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Vy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Xt, this.eventTimes = Ms($), this.expirationTimes = Ms(Zt), this.pendingLanes = $, this.suspendedLanes = $, this.pingedLanes = $, this.expiredLanes = $, this.mutableReadLanes = $, this.finishedLanes = $, this.entangledLanes = $, this.entanglements = Ms($), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < xs; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Lh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case zo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function R1(e, t, a, i, u, s, f, p, v, y) {
      var g = new xb(e, t, a, p, v), _ = Sb(t, s);
      g.current = _, _.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        _.memoizedState = w;
      }
      return gg(_), g;
    }
    var l0 = "18.3.1";
    function _b(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return fr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: jr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var u0, o0;
    u0 = !1, o0 = {};
    function T1(e) {
      if (!e)
        return ui;
      var t = vi(e), a = ow(t);
      if (t.tag === ve) {
        var i = t.type;
        if (Ql(i))
          return X0(t, i, a);
      }
      return a;
    }
    function bb(e, t) {
      {
        var a = vi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = od(a);
        if (u === null)
          return null;
        if (u.mode & ln) {
          var s = Ye(a) || "Component";
          if (!o0[s]) {
            o0[s] = !0;
            var f = pn;
            try {
              vn(u), a.mode & ln ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? vn(f) : nn();
            }
          }
        }
        return u.stateNode;
      }
    }
    function w1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return R1(e, t, v, y, a, i, u, s, f);
    }
    function x1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, _ = R1(a, i, g, e, u, s, f, p, v);
      _.context = T1(null);
      var w = _.current, N = Ta(), U = Io(w), j = ju(N, U);
      return j.callback = t ?? null, Fo(w, j, U), z_(_, U, N), _;
    }
    function Wp(e, t, a, i) {
      lo(t, e);
      var u = t.current, s = Ta(), f = Io(u);
      Ac(f);
      var p = T1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Pr && pn !== null && !u0 && (u0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ye(pn) || "Unknown"));
      var v = ju(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = Fo(u, v, f);
      return y !== null && (sr(y, u, f, s), Qh(y, u, f)), f;
    }
    function Um(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ue:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Db(e) {
      switch (e.tag) {
        case te: {
          var t = e.stateNode;
          if (de(t)) {
            var a = So(t);
            j_(t, a);
          }
          break;
        }
        case Ce: {
          Bu(function() {
            var u = Pa(e, we);
            if (u !== null) {
              var s = Ta();
              sr(u, e, we, s);
            }
          });
          var i = we;
          s0(e, i);
          break;
        }
      }
    }
    function _1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = kd(a.retryLane, t));
    }
    function s0(e, t) {
      _1(e, t);
      var a = e.alternate;
      a && _1(a, t);
    }
    function kb(e) {
      if (e.tag === Ce) {
        var t = mo, a = Pa(e, t);
        if (a !== null) {
          var i = Ta();
          sr(a, e, t, i);
        }
        s0(e, t);
      }
    }
    function Ob(e) {
      if (e.tag === Ce) {
        var t = Io(e), a = Pa(e, t);
        if (a !== null) {
          var i = Ta();
          sr(a, e, t, i);
        }
        s0(e, t);
      }
    }
    function b1(e) {
      var t = cd(e);
      return t === null ? null : t.stateNode;
    }
    var D1 = function(e) {
      return null;
    };
    function Lb(e) {
      return D1(e);
    }
    var k1 = function(e) {
      return !1;
    };
    function Mb(e) {
      return k1(e);
    }
    var O1 = null, L1 = null, M1 = null, N1 = null, z1 = null, U1 = null, A1 = null, F1 = null, j1 = null;
    {
      var H1 = function(e, t, a) {
        var i = t[a], u = xt(e) ? e.slice() : Je({}, e);
        return a + 1 === t.length ? (xt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = H1(e[i], t, a + 1), u);
      }, V1 = function(e, t) {
        return H1(e, t, 0);
      }, P1 = function(e, t, a, i) {
        var u = t[i], s = xt(e) ? e.slice() : Je({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], xt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = P1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, B1 = function(e, t, a) {
        if (t.length !== a.length) {
          Qe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Qe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return P1(e, t, a, 0);
      }, $1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = xt(e) ? e.slice() : Je({}, e);
        return s[u] = $1(e[u], t, a + 1, i), s;
      }, Y1 = function(e, t, a) {
        return $1(e, t, 0, a);
      }, c0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      O1 = function(e, t, a, i) {
        var u = c0(e, t);
        if (u !== null) {
          var s = Y1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Je({}, e.memoizedProps);
          var f = Pa(e, we);
          f !== null && sr(f, e, we, Zt);
        }
      }, L1 = function(e, t, a) {
        var i = c0(e, t);
        if (i !== null) {
          var u = V1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Je({}, e.memoizedProps);
          var s = Pa(e, we);
          s !== null && sr(s, e, we, Zt);
        }
      }, M1 = function(e, t, a, i) {
        var u = c0(e, t);
        if (u !== null) {
          var s = B1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Je({}, e.memoizedProps);
          var f = Pa(e, we);
          f !== null && sr(f, e, we, Zt);
        }
      }, N1 = function(e, t, a) {
        e.pendingProps = Y1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Pa(e, we);
        i !== null && sr(i, e, we, Zt);
      }, z1 = function(e, t) {
        e.pendingProps = V1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Pa(e, we);
        a !== null && sr(a, e, we, Zt);
      }, U1 = function(e, t, a) {
        e.pendingProps = B1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Pa(e, we);
        i !== null && sr(i, e, we, Zt);
      }, A1 = function(e) {
        var t = Pa(e, we);
        t !== null && sr(t, e, we, Zt);
      }, F1 = function(e) {
        D1 = e;
      }, j1 = function(e) {
        k1 = e;
      };
    }
    function Nb(e) {
      var t = od(e);
      return t === null ? null : t.stateNode;
    }
    function zb(e) {
      return null;
    }
    function Ub() {
      return pn;
    }
    function Ab(e) {
      var t = e.findFiberByHostInstance, a = et.ReactCurrentDispatcher;
      return dd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: O1,
        overrideHookStateDeletePath: L1,
        overrideHookStateRenamePath: M1,
        overrideProps: N1,
        overridePropsDeletePath: z1,
        overridePropsRenamePath: U1,
        setErrorHandler: F1,
        setSuspenseHandler: j1,
        scheduleUpdate: A1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Nb,
        findFiberByHostInstance: t || zb,
        // React Refresh
        findHostInstancesForRefresh: db,
        scheduleRefresh: cb,
        scheduleRoot: fb,
        setRefreshHandler: sb,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Ub,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: l0
      });
    }
    var I1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function f0(e) {
      this._internalRoot = e;
    }
    Am.prototype.render = f0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Fm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== Sn) {
          var i = b1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Wp(e, t, null, null);
    }, Am.prototype.unmount = f0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        r1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Bu(function() {
          Wp(null, e, null, null);
        }), I0(t);
      }
    };
    function Fb(e, t) {
      if (!Fm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      Q1(e);
      var a = !1, i = !1, u = "", s = I1;
      t != null && (t.hydrate ? Qe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Sr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = w1(e, Lh, null, a, i, u, s);
      wh(f.current, e);
      var p = e.nodeType === Sn ? e.parentNode : e;
      return Zd(p), new f0(f);
    }
    function Am(e) {
      this._internalRoot = e;
    }
    function jb(e) {
      e && Jc(e);
    }
    Am.prototype.unstable_scheduleHydration = jb;
    function Hb(e, t, a) {
      if (!Fm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      Q1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = I1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = x1(t, null, e, Lh, i, s, f, p, v);
      if (wh(y.current, e), Zd(e), u)
        for (var g = 0; g < u.length; g++) {
          var _ = u[g];
          $w(y, _);
        }
      return new Am(y);
    }
    function Fm(e) {
      return !!(e && (e.nodeType === $r || e.nodeType === sa || e.nodeType === If || !De));
    }
    function Gp(e) {
      return !!(e && (e.nodeType === $r || e.nodeType === sa || e.nodeType === If || e.nodeType === Sn && e.nodeValue === " react-mount-point-unstable "));
    }
    function Q1(e) {
      e.nodeType === $r && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Vb = et.ReactCurrentOwner, W1;
    W1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== Sn) {
        var t = b1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = d0(e), u = !!(i && Mo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === $r && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function d0(e) {
      return e ? e.nodeType === sa ? e.documentElement : e.firstChild : null;
    }
    function G1() {
    }
    function Pb(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Um(f);
            s.call(w);
          };
        }
        var f = x1(
          t,
          i,
          e,
          zo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          G1
        );
        e._reactRootContainer = f, wh(f.current, e);
        var p = e.nodeType === Sn ? e.parentNode : e;
        return Zd(p), Bu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Um(g);
            y.call(w);
          };
        }
        var g = w1(
          e,
          zo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          G1
        );
        e._reactRootContainer = g, wh(g.current, e);
        var _ = e.nodeType === Sn ? e.parentNode : e;
        return Zd(_), Bu(function() {
          Wp(t, g, a, i);
        }), g;
      }
    }
    function Bb(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function jm(e, t, a, i, u) {
      W1(a), Bb(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Pb(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Um(f);
            p.call(v);
          };
        }
        Wp(t, f, e, u);
      }
      return Um(f);
    }
    var q1 = !1;
    function $b(e) {
      {
        q1 || (q1 = !0, S("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Vb.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", yt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === $r ? e : bb(e, "findDOMNode");
    }
    function Yb(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return jm(null, e, t, !0, a);
    }
    function Ib(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return jm(null, e, t, !1, a);
    }
    function Qb(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Gp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ro(e))
        throw new Error("parentComponent must be a valid React Component");
      return jm(e, t, a, !1, i);
    }
    var X1 = !1;
    function Wb(e) {
      if (X1 || (X1 = !0, S("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Gp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = d0(e), i = a && !Mo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Bu(function() {
          jm(null, null, e, !1, function() {
            e._reactRootContainer = null, I0(e);
          });
        }), !0;
      } else {
        {
          var u = d0(e), s = !!(u && Mo(u)), f = e.nodeType === $r && Gp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Nd(Db), As(kb), Ud(Ob), Wv(wr), jd(sy), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Zf(qR), xc($S, H_, Bu);
    function Gb(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Fm(t))
        throw new Error("Target container is not a DOM element.");
      return _b(e, t, null, a);
    }
    function qb(e, t, a, i) {
      return Qb(e, t, a, i);
    }
    var p0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Mo, hf, xh, no, du, $S]
    };
    function Xb(e, t) {
      return p0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Fb(e, t);
    }
    function Kb(e, t, a) {
      return p0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Hb(e, t, a);
    }
    function Jb(e) {
      return r1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Bu(e);
    }
    var Zb = Ab({
      findFiberByHostInstance: Zs,
      bundleType: 1,
      version: l0,
      rendererPackageName: "react-dom"
    });
    if (!Zb && gn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var K1 = window.location.protocol;
      /^(https?|file):$/.test(K1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (K1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Qa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = p0, Qa.createPortal = Gb, Qa.createRoot = Xb, Qa.findDOMNode = $b, Qa.flushSync = Jb, Qa.hydrate = Yb, Qa.hydrateRoot = Kb, Qa.render = Ib, Qa.unmountComponentAtNode = Wb, Qa.unstable_batchedUpdates = $S, Qa.unstable_renderSubtreeIntoContainer = qb, Qa.version = l0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Qa;
}
var sR;
function fD() {
  if (sR) return Pm.exports;
  sR = 1;
  var X = {};
  function Z() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (X.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Z);
      } catch (A) {
        console.error(A);
      }
    }
  }
  return X.NODE_ENV === "production" ? (Z(), Pm.exports = sD()) : Pm.exports = cD(), Pm.exports;
}
var cR;
function dD() {
  if (cR) return Vf;
  cR = 1;
  var X = {}, Z = fD();
  if (X.NODE_ENV === "production")
    Vf.createRoot = Z.createRoot, Vf.hydrateRoot = Z.hydrateRoot;
  else {
    var A = Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Vf.createRoot = function(et, ot) {
      A.usingClientEntryPoint = !0;
      try {
        return Z.createRoot(et, ot);
      } finally {
        A.usingClientEntryPoint = !1;
      }
    }, Vf.hydrateRoot = function(et, ot, zt) {
      A.usingClientEntryPoint = !0;
      try {
        return Z.hydrateRoot(et, ot, zt);
      } finally {
        A.usingClientEntryPoint = !1;
      }
    };
  }
  return Vf;
}
var dR = dD();
function pD(X, Z) {
  return [Z, X];
}
function vD({
  Iinput1: X,
  Iinput2: Z
}) {
  const [A, et] = Zp.useState(X.value), [ot, zt] = Zp.useState(Z.value), Qe = (S) => {
    S.preventDefault();
    const [st, ke] = pD(A, ot);
    et(st), zt(ke);
  };
  return /* @__PURE__ */ Go.jsxs(Go.Fragment, { children: [
    /* @__PURE__ */ Go.jsx("input", { type: X.type, size: X.size, value: A, onChange: (S) => et(S.target.value) }),
    " ",
    /* @__PURE__ */ Go.jsx("a", { className: "icon-change-btn", onClick: Qe }),
    " ",
    /* @__PURE__ */ Go.jsx("input", { type: Z.type, size: Z.size, value: ot, onChange: (S) => zt(S.target.value) })
  ] });
}
const hD = () => {
  const [X, Z] = Zp.useState({}), [A, et] = Zp.useState(!1);
  if (Zp.useEffect(() => {
    const zt = {};
    if (hc)
      for (let Qe in hc.dataset)
        hc.dataset.hasOwnProperty(Qe) && (zt[Qe] = hc.dataset[Qe]);
    Z(zt), et(!0);
  }, []), !A)
    return;
  const ot = {
    input1: {
      type: X.type1,
      size: parseInt(X.size1),
      value: X.val1
    },
    input2: {
      type: X.type2,
      size: parseInt(X.size2),
      value: X.val2
    }
  };
  return /* @__PURE__ */ Go.jsx(vD, { Iinput1: ot.input1 || {}, Iinput2: ot.input2 || {} });
}, hc = document.getElementById("react-app");
hc && (console.log("pass:", hc), dR.createRoot(hc).render(/* @__PURE__ */ Go.jsx(hD, {})));
const m0 = document.getElementById("react-app2");
m0 && (console.log("pass:", m0), dR.createRoot(m0).render(/* @__PURE__ */ Go.jsx("h1", { children: "Hello, world React" })));
