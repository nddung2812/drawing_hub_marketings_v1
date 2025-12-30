(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jotai/esm/react.mjs [app-client] (ecmascript)");
"use client";
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/components/providers.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/atoms/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "themeAtom",
    ()=>themeAtom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jotai/esm/vanilla.mjs [app-client] (ecmascript)");
;
const themeAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["atom"])("light");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/theme-sync.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeSync",
    ()=>ThemeSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jotai/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$atoms$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/atoms/theme.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function readStoredTheme() {
    try {
        const stored = localStorage.getItem("theme");
        return stored === "dark" || stored === "light" ? stored : null;
    } catch (_) {
        return null;
    }
}
function writeStoredTheme(theme) {
    try {
        localStorage.setItem("theme", theme);
    } catch (_) {}
}
function getDomTheme() {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
function applyDomTheme(theme) {
    document.documentElement.classList.toggle("dark", theme === "dark");
}
function ThemeSync() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$atoms$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themeAtom"]);
    const initializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Initialize atom from (1) localStorage, otherwise (2) current DOM class (set by layout bootstrap script)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeSync.useEffect": ()=>{
            const stored = readStoredTheme();
            setTheme(stored ?? getDomTheme());
            initializedRef.current = true;
        }
    }["ThemeSync.useEffect"], [
        setTheme
    ]);
    // Persist + apply to DOM on updates (after initialization)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeSync.useEffect": ()=>{
            if (!initializedRef.current) return;
            applyDomTheme(theme);
            writeStoredTheme(theme);
        }
    }["ThemeSync.useEffect"], [
        theme
    ]);
    // If user has NOT chosen a theme yet, keep in sync with system changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeSync.useEffect": ()=>{
            const stored = readStoredTheme();
            if (stored) return;
            const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
            if (!mq) return;
            const onChange = {
                "ThemeSync.useEffect.onChange": ()=>setTheme(mq.matches ? "dark" : "light")
            }["ThemeSync.useEffect.onChange"];
            mq.addEventListener?.("change", onChange);
            return ({
                "ThemeSync.useEffect": ()=>mq.removeEventListener?.("change", onChange)
            })["ThemeSync.useEffect"];
        }
    }["ThemeSync.useEffect"], [
        setTheme
    ]);
    return null;
}
_s(ThemeSync, "YZ8LO6We+/6xNOMmMvKh37uf8LI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAtom"]
    ];
});
_c = ThemeSync;
var _c;
__turbopack_context__.k.register(_c, "ThemeSync");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/jotai/esm/vanilla/internals.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERNAL_abortPromise",
    ()=>abortPromise,
    "INTERNAL_addPendingPromiseToDependency",
    ()=>addPendingPromiseToDependency,
    "INTERNAL_buildStoreRev2",
    ()=>buildStore,
    "INTERNAL_getBuildingBlocksRev2",
    ()=>getBuildingBlocks,
    "INTERNAL_getMountedOrPendingDependents",
    ()=>getMountedOrPendingDependents,
    "INTERNAL_hasInitialValue",
    ()=>hasInitialValue,
    "INTERNAL_initializeStoreHooksRev2",
    ()=>initializeStoreHooks,
    "INTERNAL_isActuallyWritableAtom",
    ()=>isActuallyWritableAtom,
    "INTERNAL_isAtomStateInitialized",
    ()=>isAtomStateInitialized,
    "INTERNAL_isPendingPromise",
    ()=>isPendingPromise,
    "INTERNAL_isPromiseLike",
    ()=>isPromiseLike,
    "INTERNAL_promiseStateMap",
    ()=>promiseStateMap,
    "INTERNAL_registerAbortHandler",
    ()=>registerAbortHandler,
    "INTERNAL_returnAtomValue",
    ()=>returnAtomValue
]);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/jotai/esm/vanilla/internals.mjs")}`;
    }
};
function hasInitialValue(atom) {
    return "init" in atom;
}
function isActuallyWritableAtom(atom) {
    return !!atom.write;
}
function isAtomStateInitialized(atomState) {
    return "v" in atomState || "e" in atomState;
}
function returnAtomValue(atomState) {
    if ("e" in atomState) {
        throw atomState.e;
    }
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !("v" in atomState)) {
        throw new Error("[Bug] atom state is not initialized");
    }
    return atomState.v;
}
const promiseStateMap = /* @__PURE__ */ new WeakMap();
function isPendingPromise(value) {
    var _a;
    return isPromiseLike(value) && !!((_a = promiseStateMap.get(value)) == null ? void 0 : _a[0]);
}
function abortPromise(promise) {
    const promiseState = promiseStateMap.get(promise);
    if (promiseState == null ? void 0 : promiseState[0]) {
        promiseState[0] = false;
        promiseState[1].forEach((fn)=>fn());
    }
}
function registerAbortHandler(promise, abortHandler) {
    let promiseState = promiseStateMap.get(promise);
    if (!promiseState) {
        promiseState = [
            true,
            /* @__PURE__ */ new Set()
        ];
        promiseStateMap.set(promise, promiseState);
        const settle = ()=>{
            promiseState[0] = false;
        };
        promise.then(settle, settle);
    }
    promiseState[1].add(abortHandler);
}
function isPromiseLike(p) {
    return typeof (p == null ? void 0 : p.then) === "function";
}
function addPendingPromiseToDependency(atom, promise, dependencyAtomState) {
    if (!dependencyAtomState.p.has(atom)) {
        dependencyAtomState.p.add(atom);
        const cleanup = ()=>dependencyAtomState.p.delete(atom);
        promise.then(cleanup, cleanup);
    }
}
function getMountedOrPendingDependents(atom, atomState, mountedMap) {
    var _a;
    const dependents = /* @__PURE__ */ new Set();
    for (const a of ((_a = mountedMap.get(atom)) == null ? void 0 : _a.t) || []){
        dependents.add(a);
    }
    for (const atomWithPendingPromise of atomState.p){
        dependents.add(atomWithPendingPromise);
    }
    return dependents;
}
const createStoreHook = ()=>{
    const callbacks = /* @__PURE__ */ new Set();
    const notify = ()=>callbacks.forEach((fn)=>fn());
    notify.add = (fn)=>{
        callbacks.add(fn);
        return ()=>callbacks.delete(fn);
    };
    return notify;
};
const createStoreHookForAtoms = ()=>{
    const all = {};
    const callbacks = /* @__PURE__ */ new WeakMap();
    const notify = (atom)=>{
        var _a, _b;
        (_a = callbacks.get(all)) == null ? void 0 : _a.forEach((fn)=>fn(atom));
        (_b = callbacks.get(atom)) == null ? void 0 : _b.forEach((fn)=>fn());
    };
    notify.add = (atom, fn)=>{
        const key = atom || all;
        let fns = callbacks.get(key);
        if (!fns) {
            fns = /* @__PURE__ */ new Set();
            callbacks.set(key, fns);
        }
        fns.add(fn);
        return ()=>{
            fns.delete(fn);
            if (!fns.size) {
                callbacks.delete(key);
            }
        };
    };
    return notify;
};
function initializeStoreHooks(storeHooks) {
    storeHooks.i || (storeHooks.i = createStoreHookForAtoms());
    storeHooks.r || (storeHooks.r = createStoreHookForAtoms());
    storeHooks.c || (storeHooks.c = createStoreHookForAtoms());
    storeHooks.m || (storeHooks.m = createStoreHookForAtoms());
    storeHooks.u || (storeHooks.u = createStoreHookForAtoms());
    storeHooks.f || (storeHooks.f = createStoreHook());
    return storeHooks;
}
const BUILDING_BLOCK_atomRead = (_store, atom, ...params)=>atom.read(...params);
const BUILDING_BLOCK_atomWrite = (_store, atom, ...params)=>atom.write(...params);
const BUILDING_BLOCK_atomOnInit = (store, atom)=>{
    if (atom.INTERNAL_onInit) {
        return atom.INTERNAL_onInit(store);
    }
    if (atom.unstable_onInit) {
        console.warn("[DEPRECATED] atom.unstable_onInit is renamed to atom.INTERNAL_onInit.");
        return atom.unstable_onInit(store);
    }
};
const BUILDING_BLOCK_atomOnMount = (_store, atom, setAtom)=>{
    var _a;
    return (_a = atom.onMount) == null ? void 0 : _a.call(atom, setAtom);
};
const BUILDING_BLOCK_ensureAtomState = (store, atom)=>{
    var _a;
    const buildingBlocks = getInternalBuildingBlocks(store);
    const atomStateMap = buildingBlocks[0];
    const storeHooks = buildingBlocks[6];
    const atomOnInit = buildingBlocks[9];
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !atom) {
        throw new Error("Atom is undefined or null");
    }
    let atomState = atomStateMap.get(atom);
    if (!atomState) {
        atomState = {
            d: /* @__PURE__ */ new Map(),
            p: /* @__PURE__ */ new Set(),
            n: 0
        };
        atomStateMap.set(atom, atomState);
        (_a = storeHooks.i) == null ? void 0 : _a.call(storeHooks, atom);
        atomOnInit == null ? void 0 : atomOnInit(store, atom);
    }
    return atomState;
};
const BUILDING_BLOCK_flushCallbacks = (store)=>{
    const buildingBlocks = getInternalBuildingBlocks(store);
    const mountedMap = buildingBlocks[1];
    const changedAtoms = buildingBlocks[3];
    const mountCallbacks = buildingBlocks[4];
    const unmountCallbacks = buildingBlocks[5];
    const storeHooks = buildingBlocks[6];
    const recomputeInvalidatedAtoms = buildingBlocks[13];
    const errors = [];
    const call = (fn)=>{
        try {
            fn();
        } catch (e) {
            errors.push(e);
        }
    };
    do {
        if (storeHooks.f) {
            call(storeHooks.f);
        }
        const callbacks = /* @__PURE__ */ new Set();
        const add = callbacks.add.bind(callbacks);
        changedAtoms.forEach((atom)=>{
            var _a;
            return (_a = mountedMap.get(atom)) == null ? void 0 : _a.l.forEach(add);
        });
        changedAtoms.clear();
        unmountCallbacks.forEach(add);
        unmountCallbacks.clear();
        mountCallbacks.forEach(add);
        mountCallbacks.clear();
        callbacks.forEach(call);
        if (changedAtoms.size) {
            recomputeInvalidatedAtoms(store);
        }
    }while (changedAtoms.size || unmountCallbacks.size || mountCallbacks.size)
    if (errors.length) {
        throw new AggregateError(errors);
    }
};
const BUILDING_BLOCK_recomputeInvalidatedAtoms = (store)=>{
    const buildingBlocks = getInternalBuildingBlocks(store);
    const mountedMap = buildingBlocks[1];
    const invalidatedAtoms = buildingBlocks[2];
    const changedAtoms = buildingBlocks[3];
    const ensureAtomState = buildingBlocks[11];
    const readAtomState = buildingBlocks[14];
    const mountDependencies = buildingBlocks[17];
    const topSortedReversed = [];
    const visiting = /* @__PURE__ */ new WeakSet();
    const visited = /* @__PURE__ */ new WeakSet();
    const stack = Array.from(changedAtoms);
    while(stack.length){
        const a = stack[stack.length - 1];
        const aState = ensureAtomState(store, a);
        if (visited.has(a)) {
            stack.pop();
            continue;
        }
        if (visiting.has(a)) {
            if (invalidatedAtoms.get(a) === aState.n) {
                topSortedReversed.push([
                    a,
                    aState
                ]);
            } else if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && invalidatedAtoms.has(a)) {
                throw new Error("[Bug] invalidated atom exists");
            }
            visited.add(a);
            stack.pop();
            continue;
        }
        visiting.add(a);
        for (const d of getMountedOrPendingDependents(a, aState, mountedMap)){
            if (!visiting.has(d)) {
                stack.push(d);
            }
        }
    }
    for(let i = topSortedReversed.length - 1; i >= 0; --i){
        const [a, aState] = topSortedReversed[i];
        let hasChangedDeps = false;
        for (const dep of aState.d.keys()){
            if (dep !== a && changedAtoms.has(dep)) {
                hasChangedDeps = true;
                break;
            }
        }
        if (hasChangedDeps) {
            readAtomState(store, a);
            mountDependencies(store, a);
        }
        invalidatedAtoms.delete(a);
    }
};
const storeMutationSet = /* @__PURE__ */ new WeakSet();
const BUILDING_BLOCK_readAtomState = (store, atom)=>{
    var _a, _b;
    const buildingBlocks = getInternalBuildingBlocks(store);
    const mountedMap = buildingBlocks[1];
    const invalidatedAtoms = buildingBlocks[2];
    const changedAtoms = buildingBlocks[3];
    const storeHooks = buildingBlocks[6];
    const atomRead = buildingBlocks[7];
    const ensureAtomState = buildingBlocks[11];
    const flushCallbacks = buildingBlocks[12];
    const recomputeInvalidatedAtoms = buildingBlocks[13];
    const readAtomState = buildingBlocks[14];
    const writeAtomState = buildingBlocks[16];
    const mountDependencies = buildingBlocks[17];
    const setAtomStateValueOrPromise = buildingBlocks[20];
    const atomState = ensureAtomState(store, atom);
    if (isAtomStateInitialized(atomState)) {
        if (mountedMap.has(atom) && invalidatedAtoms.get(atom) !== atomState.n) {
            return atomState;
        }
        let hasChangedDeps = false;
        for (const [a, n] of atomState.d){
            if (readAtomState(store, a).n !== n) {
                hasChangedDeps = true;
                break;
            }
        }
        if (!hasChangedDeps) {
            return atomState;
        }
    }
    atomState.d.clear();
    let isSync = true;
    function mountDependenciesIfAsync() {
        if (mountedMap.has(atom)) {
            mountDependencies(store, atom);
            recomputeInvalidatedAtoms(store);
            flushCallbacks(store);
        }
    }
    function getter(a) {
        var _a2;
        if (a === atom) {
            const aState2 = ensureAtomState(store, a);
            if (!isAtomStateInitialized(aState2)) {
                if (hasInitialValue(a)) {
                    setAtomStateValueOrPromise(store, a, a.init);
                } else {
                    throw new Error("no atom init");
                }
            }
            return returnAtomValue(aState2);
        }
        const aState = readAtomState(store, a);
        try {
            return returnAtomValue(aState);
        } finally{
            atomState.d.set(a, aState.n);
            if (isPendingPromise(atomState.v)) {
                addPendingPromiseToDependency(atom, atomState.v, aState);
            }
            if (mountedMap.has(atom)) {
                (_a2 = mountedMap.get(a)) == null ? void 0 : _a2.t.add(atom);
            }
            if (!isSync) {
                mountDependenciesIfAsync();
            }
        }
    }
    let controller;
    let setSelf;
    const options = {
        get signal () {
            if (!controller) {
                controller = new AbortController();
            }
            return controller.signal;
        },
        get setSelf () {
            if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !isActuallyWritableAtom(atom)) {
                console.warn("setSelf function cannot be used with read-only atom");
            }
            if (!setSelf && isActuallyWritableAtom(atom)) {
                setSelf = (...args)=>{
                    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && isSync) {
                        console.warn("setSelf function cannot be called in sync");
                    }
                    if (!isSync) {
                        try {
                            return writeAtomState(store, atom, ...args);
                        } finally{
                            recomputeInvalidatedAtoms(store);
                            flushCallbacks(store);
                        }
                    }
                };
            }
            return setSelf;
        }
    };
    const prevEpochNumber = atomState.n;
    try {
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            storeMutationSet.delete(store);
        }
        const valueOrPromise = atomRead(store, atom, getter, options);
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && storeMutationSet.has(store)) {
            console.warn("Detected store mutation during atom read. This is not supported.");
        }
        setAtomStateValueOrPromise(store, atom, valueOrPromise);
        if (isPromiseLike(valueOrPromise)) {
            registerAbortHandler(valueOrPromise, ()=>controller == null ? void 0 : controller.abort());
            valueOrPromise.then(mountDependenciesIfAsync, mountDependenciesIfAsync);
        }
        (_a = storeHooks.r) == null ? void 0 : _a.call(storeHooks, atom);
        return atomState;
    } catch (error) {
        delete atomState.v;
        atomState.e = error;
        ++atomState.n;
        return atomState;
    } finally{
        isSync = false;
        if (prevEpochNumber !== atomState.n && invalidatedAtoms.get(atom) === prevEpochNumber) {
            invalidatedAtoms.set(atom, atomState.n);
            changedAtoms.add(atom);
            (_b = storeHooks.c) == null ? void 0 : _b.call(storeHooks, atom);
        }
    }
};
const BUILDING_BLOCK_invalidateDependents = (store, atom)=>{
    const buildingBlocks = getInternalBuildingBlocks(store);
    const mountedMap = buildingBlocks[1];
    const invalidatedAtoms = buildingBlocks[2];
    const ensureAtomState = buildingBlocks[11];
    const stack = [
        atom
    ];
    while(stack.length){
        const a = stack.pop();
        const aState = ensureAtomState(store, a);
        for (const d of getMountedOrPendingDependents(a, aState, mountedMap)){
            const dState = ensureAtomState(store, d);
            invalidatedAtoms.set(d, dState.n);
            stack.push(d);
        }
    }
};
const BUILDING_BLOCK_writeAtomState = (store, atom, ...args)=>{
    const buildingBlocks = getInternalBuildingBlocks(store);
    const changedAtoms = buildingBlocks[3];
    const storeHooks = buildingBlocks[6];
    const atomWrite = buildingBlocks[8];
    const ensureAtomState = buildingBlocks[11];
    const flushCallbacks = buildingBlocks[12];
    const recomputeInvalidatedAtoms = buildingBlocks[13];
    const readAtomState = buildingBlocks[14];
    const invalidateDependents = buildingBlocks[15];
    const writeAtomState = buildingBlocks[16];
    const mountDependencies = buildingBlocks[17];
    const setAtomStateValueOrPromise = buildingBlocks[20];
    let isSync = true;
    const getter = (a)=>returnAtomValue(readAtomState(store, a));
    const setter = (a, ...args2)=>{
        var _a;
        const aState = ensureAtomState(store, a);
        try {
            if (a === atom) {
                if (!hasInitialValue(a)) {
                    throw new Error("atom not writable");
                }
                if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
                    storeMutationSet.add(store);
                }
                const prevEpochNumber = aState.n;
                const v = args2[0];
                setAtomStateValueOrPromise(store, a, v);
                mountDependencies(store, a);
                if (prevEpochNumber !== aState.n) {
                    changedAtoms.add(a);
                    invalidateDependents(store, a);
                    (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, a);
                }
                return void 0;
            } else {
                return writeAtomState(store, a, ...args2);
            }
        } finally{
            if (!isSync) {
                recomputeInvalidatedAtoms(store);
                flushCallbacks(store);
            }
        }
    };
    try {
        return atomWrite(store, atom, getter, setter, ...args);
    } finally{
        isSync = false;
    }
};
const BUILDING_BLOCK_mountDependencies = (store, atom)=>{
    var _a;
    const buildingBlocks = getInternalBuildingBlocks(store);
    const mountedMap = buildingBlocks[1];
    const changedAtoms = buildingBlocks[3];
    const storeHooks = buildingBlocks[6];
    const ensureAtomState = buildingBlocks[11];
    const invalidateDependents = buildingBlocks[15];
    const mountAtom = buildingBlocks[18];
    const unmountAtom = buildingBlocks[19];
    const atomState = ensureAtomState(store, atom);
    const mounted = mountedMap.get(atom);
    if (mounted && !isPendingPromise(atomState.v)) {
        for (const [a, n] of atomState.d){
            if (!mounted.d.has(a)) {
                const aState = ensureAtomState(store, a);
                const aMounted = mountAtom(store, a);
                aMounted.t.add(atom);
                mounted.d.add(a);
                if (n !== aState.n) {
                    changedAtoms.add(a);
                    invalidateDependents(store, a);
                    (_a = storeHooks.c) == null ? void 0 : _a.call(storeHooks, a);
                }
            }
        }
        for (const a of mounted.d){
            if (!atomState.d.has(a)) {
                mounted.d.delete(a);
                const aMounted = unmountAtom(store, a);
                aMounted == null ? void 0 : aMounted.t.delete(atom);
            }
        }
    }
};
const BUILDING_BLOCK_mountAtom = (store, atom)=>{
    var _a;
    const buildingBlocks = getInternalBuildingBlocks(store);
    const mountedMap = buildingBlocks[1];
    const mountCallbacks = buildingBlocks[4];
    const storeHooks = buildingBlocks[6];
    const atomOnMount = buildingBlocks[10];
    const ensureAtomState = buildingBlocks[11];
    const flushCallbacks = buildingBlocks[12];
    const recomputeInvalidatedAtoms = buildingBlocks[13];
    const readAtomState = buildingBlocks[14];
    const writeAtomState = buildingBlocks[16];
    const mountAtom = buildingBlocks[18];
    const atomState = ensureAtomState(store, atom);
    let mounted = mountedMap.get(atom);
    if (!mounted) {
        readAtomState(store, atom);
        for (const a of atomState.d.keys()){
            const aMounted = mountAtom(store, a);
            aMounted.t.add(atom);
        }
        mounted = {
            l: /* @__PURE__ */ new Set(),
            d: new Set(atomState.d.keys()),
            t: /* @__PURE__ */ new Set()
        };
        mountedMap.set(atom, mounted);
        if (isActuallyWritableAtom(atom)) {
            const processOnMount = ()=>{
                let isSync = true;
                const setAtom = (...args)=>{
                    try {
                        return writeAtomState(store, atom, ...args);
                    } finally{
                        if (!isSync) {
                            recomputeInvalidatedAtoms(store);
                            flushCallbacks(store);
                        }
                    }
                };
                try {
                    const onUnmount = atomOnMount(store, atom, setAtom);
                    if (onUnmount) {
                        mounted.u = ()=>{
                            isSync = true;
                            try {
                                onUnmount();
                            } finally{
                                isSync = false;
                            }
                        };
                    }
                } finally{
                    isSync = false;
                }
            };
            mountCallbacks.add(processOnMount);
        }
        (_a = storeHooks.m) == null ? void 0 : _a.call(storeHooks, atom);
    }
    return mounted;
};
const BUILDING_BLOCK_unmountAtom = (store, atom)=>{
    var _a, _b;
    const buildingBlocks = getInternalBuildingBlocks(store);
    const mountedMap = buildingBlocks[1];
    const unmountCallbacks = buildingBlocks[5];
    const storeHooks = buildingBlocks[6];
    const ensureAtomState = buildingBlocks[11];
    const unmountAtom = buildingBlocks[19];
    const atomState = ensureAtomState(store, atom);
    let mounted = mountedMap.get(atom);
    if (!mounted || mounted.l.size) {
        return mounted;
    }
    let isDependent = false;
    for (const a of mounted.t){
        if ((_a = mountedMap.get(a)) == null ? void 0 : _a.d.has(atom)) {
            isDependent = true;
            break;
        }
    }
    if (!isDependent) {
        if (mounted.u) {
            unmountCallbacks.add(mounted.u);
        }
        mounted = void 0;
        mountedMap.delete(atom);
        for (const a of atomState.d.keys()){
            const aMounted = unmountAtom(store, a);
            aMounted == null ? void 0 : aMounted.t.delete(atom);
        }
        (_b = storeHooks.u) == null ? void 0 : _b.call(storeHooks, atom);
        return void 0;
    }
    return mounted;
};
const BUILDING_BLOCK_setAtomStateValueOrPromise = (store, atom, valueOrPromise)=>{
    const ensureAtomState = getInternalBuildingBlocks(store)[11];
    const atomState = ensureAtomState(store, atom);
    const hasPrevValue = "v" in atomState;
    const prevValue = atomState.v;
    if (isPromiseLike(valueOrPromise)) {
        for (const a of atomState.d.keys()){
            addPendingPromiseToDependency(atom, valueOrPromise, ensureAtomState(store, a));
        }
    }
    atomState.v = valueOrPromise;
    delete atomState.e;
    if (!hasPrevValue || !Object.is(prevValue, atomState.v)) {
        ++atomState.n;
        if (isPromiseLike(prevValue)) {
            abortPromise(prevValue);
        }
    }
};
const BUILDING_BLOCK_storeGet = (store, atom)=>{
    const readAtomState = getInternalBuildingBlocks(store)[14];
    return returnAtomValue(readAtomState(store, atom));
};
const BUILDING_BLOCK_storeSet = (store, atom, ...args)=>{
    const buildingBlocks = getInternalBuildingBlocks(store);
    const flushCallbacks = buildingBlocks[12];
    const recomputeInvalidatedAtoms = buildingBlocks[13];
    const writeAtomState = buildingBlocks[16];
    try {
        return writeAtomState(store, atom, ...args);
    } finally{
        recomputeInvalidatedAtoms(store);
        flushCallbacks(store);
    }
};
const BUILDING_BLOCK_storeSub = (store, atom, listener)=>{
    const buildingBlocks = getInternalBuildingBlocks(store);
    const flushCallbacks = buildingBlocks[12];
    const mountAtom = buildingBlocks[18];
    const unmountAtom = buildingBlocks[19];
    const mounted = mountAtom(store, atom);
    const listeners = mounted.l;
    listeners.add(listener);
    flushCallbacks(store);
    return ()=>{
        listeners.delete(listener);
        unmountAtom(store, atom);
        flushCallbacks(store);
    };
};
const buildingBlockMap = /* @__PURE__ */ new WeakMap();
const getInternalBuildingBlocks = (store)=>{
    const buildingBlocks = buildingBlockMap.get(store);
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !buildingBlocks) {
        throw new Error("Store must be created by buildStore to read its building blocks");
    }
    return buildingBlocks;
};
function getBuildingBlocks(store) {
    const buildingBlocks = getInternalBuildingBlocks(store);
    const enhanceBuildingBlocks = buildingBlocks[24];
    if (enhanceBuildingBlocks) {
        return enhanceBuildingBlocks(buildingBlocks);
    }
    return buildingBlocks;
}
function buildStore(...buildArgs) {
    const store = {
        get (atom) {
            const storeGet = getInternalBuildingBlocks(store)[21];
            return storeGet(store, atom);
        },
        set (atom, ...args) {
            const storeSet = getInternalBuildingBlocks(store)[22];
            return storeSet(store, atom, ...args);
        },
        sub (atom, listener) {
            const storeSub = getInternalBuildingBlocks(store)[23];
            return storeSub(store, atom, listener);
        }
    };
    const buildingBlocks = [
        // store state
        /* @__PURE__ */ new WeakMap(),
        // atomStateMap
        /* @__PURE__ */ new WeakMap(),
        // mountedMap
        /* @__PURE__ */ new WeakMap(),
        // invalidatedAtoms
        /* @__PURE__ */ new Set(),
        // changedAtoms
        /* @__PURE__ */ new Set(),
        // mountCallbacks
        /* @__PURE__ */ new Set(),
        // unmountCallbacks
        {},
        // storeHooks
        // atom interceptors
        BUILDING_BLOCK_atomRead,
        BUILDING_BLOCK_atomWrite,
        BUILDING_BLOCK_atomOnInit,
        BUILDING_BLOCK_atomOnMount,
        // building-block functions
        BUILDING_BLOCK_ensureAtomState,
        BUILDING_BLOCK_flushCallbacks,
        BUILDING_BLOCK_recomputeInvalidatedAtoms,
        BUILDING_BLOCK_readAtomState,
        BUILDING_BLOCK_invalidateDependents,
        BUILDING_BLOCK_writeAtomState,
        BUILDING_BLOCK_mountDependencies,
        BUILDING_BLOCK_mountAtom,
        BUILDING_BLOCK_unmountAtom,
        BUILDING_BLOCK_setAtomStateValueOrPromise,
        BUILDING_BLOCK_storeGet,
        BUILDING_BLOCK_storeSet,
        BUILDING_BLOCK_storeSub,
        void 0
    ].map((fn, i)=>buildArgs[i] || fn);
    buildingBlockMap.set(store, Object.freeze(buildingBlocks));
    return store;
}
;
}),
"[project]/node_modules/jotai/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERNAL_overrideCreateStore",
    ()=>INTERNAL_overrideCreateStore,
    "atom",
    ()=>atom,
    "createStore",
    ()=>createStore,
    "getDefaultStore",
    ()=>getDefaultStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jotai/esm/vanilla/internals.mjs [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/jotai/esm/vanilla.mjs")}`;
    }
};
;
let keyCount = 0;
function atom(read, write) {
    const key = `atom${++keyCount}`;
    const config = {
        toString () {
            return (__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && this.debugLabel ? key + ":" + this.debugLabel : key;
        }
    };
    if (typeof read === "function") {
        config.read = read;
    } else {
        config.init = read;
        config.read = defaultRead;
        config.write = defaultWrite;
    }
    if (write) {
        config.write = write;
    }
    return config;
}
function defaultRead(get) {
    return get(this);
}
function defaultWrite(get, set, arg) {
    return set(this, typeof arg === "function" ? arg(get(this)) : arg);
}
let overiddenCreateStore;
function INTERNAL_overrideCreateStore(fn) {
    overiddenCreateStore = fn(overiddenCreateStore);
}
function createStore() {
    if (overiddenCreateStore) {
        return overiddenCreateStore();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTERNAL_buildStoreRev2"])();
}
let defaultStore;
function getDefaultStore() {
    if (!defaultStore) {
        defaultStore = createStore();
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore);
            if (globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore) {
                console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044");
            }
        }
    }
    return defaultStore;
}
;
}),
"[project]/node_modules/jotai/esm/react.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Provider",
    ()=>Provider,
    "useAtom",
    ()=>useAtom,
    "useAtomValue",
    ()=>useAtomValue,
    "useSetAtom",
    ()=>useSetAtom,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jotai/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jotai/esm/vanilla/internals.mjs [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/jotai/esm/react.mjs")}`;
    }
};
'use client';
;
;
;
const StoreContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(void 0);
function useStore(options) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(StoreContext);
    return (options == null ? void 0 : options.store) || store || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultStore"])();
}
function Provider({ children, store }) {
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (store) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(StoreContext.Provider, {
            value: store
        }, children);
    }
    if (storeRef.current === null) {
        storeRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(StoreContext.Provider, {
        // TODO: If this is not a false positive, consider using useState instead of useRef like https://github.com/pmndrs/jotai/pull/2771
        // eslint-disable-next-line react-hooks/refs
        value: storeRef.current
    }, children);
}
const isPromiseLike = (x)=>typeof (x == null ? void 0 : x.then) === "function";
const attachPromiseStatus = (promise)=>{
    if (!promise.status) {
        promise.status = "pending";
        promise.then((v)=>{
            promise.status = "fulfilled";
            promise.value = v;
        }, (e)=>{
            promise.status = "rejected";
            promise.reason = e;
        });
    }
};
const use = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use || // A shim for older React versions
((promise)=>{
    if (promise.status === "pending") {
        throw promise;
    } else if (promise.status === "fulfilled") {
        return promise.value;
    } else if (promise.status === "rejected") {
        throw promise.reason;
    } else {
        attachPromiseStatus(promise);
        throw promise;
    }
});
const continuablePromiseMap = /* @__PURE__ */ new WeakMap();
const createContinuablePromise = (promise, getValue)=>{
    let continuablePromise = continuablePromiseMap.get(promise);
    if (!continuablePromise) {
        continuablePromise = new Promise((resolve, reject)=>{
            let curr = promise;
            const onFulfilled = (me)=>(v)=>{
                    if (curr === me) {
                        resolve(v);
                    }
                };
            const onRejected = (me)=>(e)=>{
                    if (curr === me) {
                        reject(e);
                    }
                };
            const onAbort = ()=>{
                try {
                    const nextValue = getValue();
                    if (isPromiseLike(nextValue)) {
                        continuablePromiseMap.set(nextValue, continuablePromise);
                        curr = nextValue;
                        nextValue.then(onFulfilled(nextValue), onRejected(nextValue));
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTERNAL_registerAbortHandler"])(nextValue, onAbort);
                    } else {
                        resolve(nextValue);
                    }
                } catch (e) {
                    reject(e);
                }
            };
            promise.then(onFulfilled(promise), onRejected(promise));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INTERNAL_registerAbortHandler"])(promise, onAbort);
        });
        continuablePromiseMap.set(promise, continuablePromise);
    }
    return continuablePromise;
};
function useAtomValue(atom, options) {
    const { delay, unstable_promiseStatus: promiseStatus = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use } = options || {};
    const store = useStore(options);
    const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])({
        "useAtomValue.useReducer": (prev)=>{
            const nextValue = store.get(atom);
            if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom) {
                return prev;
            }
            return [
                nextValue,
                store,
                atom
            ];
        }
    }["useAtomValue.useReducer"], void 0, {
        "useAtomValue.useReducer": ()=>[
                store.get(atom),
                store,
                atom
            ]
    }["useAtomValue.useReducer"]);
    let value = valueFromReducer;
    if (storeFromReducer !== store || atomFromReducer !== atom) {
        rerender();
        value = store.get(atom);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAtomValue.useEffect": ()=>{
            const unsub = store.sub(atom, {
                "useAtomValue.useEffect.unsub": ()=>{
                    if (promiseStatus) {
                        try {
                            const value2 = store.get(atom);
                            if (isPromiseLike(value2)) {
                                attachPromiseStatus(createContinuablePromise(value2, {
                                    "useAtomValue.useEffect.unsub": ()=>store.get(atom)
                                }["useAtomValue.useEffect.unsub"]));
                            }
                        } catch (e) {}
                    }
                    if (typeof delay === "number") {
                        setTimeout(rerender, delay);
                        return;
                    }
                    rerender();
                }
            }["useAtomValue.useEffect.unsub"]);
            rerender();
            return unsub;
        }
    }["useAtomValue.useEffect"], [
        store,
        atom,
        delay,
        promiseStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(value);
    if (isPromiseLike(value)) {
        const promise = createContinuablePromise(value, ()=>store.get(atom));
        if (promiseStatus) {
            attachPromiseStatus(promise);
        }
        return use(promise);
    }
    return value;
}
function useSetAtom(atom, options) {
    const store = useStore(options);
    const setAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSetAtom.useCallback[setAtom]": (...args)=>{
            if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !("write" in atom)) {
                throw new Error("not writable atom");
            }
            return store.set(atom, ...args);
        }
    }["useSetAtom.useCallback[setAtom]"], [
        store,
        atom
    ]);
    return setAtom;
}
function useAtom(atom, options) {
    return [
        useAtomValue(atom, options),
        // We do wrong type assertion here, which results in throwing an error.
        useSetAtom(atom, options)
    ];
}
;
}),
]);

//# sourceMappingURL=_5d30117d._.js.map