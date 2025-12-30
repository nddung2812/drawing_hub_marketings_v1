module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/components/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jotai/esm/react.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/components/providers.tsx",
        lineNumber: 6,
        columnNumber: 10
    }, this);
}
}),
"[project]/lib/atoms/theme.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "themeAtom",
    ()=>themeAtom
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jotai/esm/vanilla.mjs [app-ssr] (ecmascript)");
;
const themeAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["atom"])("light");
}),
"[project]/components/theme-sync.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeSync",
    ()=>ThemeSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jotai/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$atoms$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/atoms/theme.ts [app-ssr] (ecmascript)");
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
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAtom"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$atoms$2f$theme$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["themeAtom"]);
    const initializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Initialize atom from (1) localStorage, otherwise (2) current DOM class (set by layout bootstrap script)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = readStoredTheme();
        setTheme(stored ?? getDomTheme());
        initializedRef.current = true;
    }, [
        setTheme
    ]);
    // Persist + apply to DOM on updates (after initialization)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!initializedRef.current) return;
        applyDomTheme(theme);
        writeStoredTheme(theme);
    }, [
        theme
    ]);
    // If user has NOT chosen a theme yet, keep in sync with system changes.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const stored = readStoredTheme();
        if (stored) return;
        const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
        if (!mq) return;
        const onChange = ()=>setTheme(mq.matches ? "dark" : "light");
        mq.addEventListener?.("change", onChange);
        return ()=>mq.removeEventListener?.("change", onChange);
    }, [
        setTheme
    ]);
    return null;
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
"[project]/node_modules/jotai/esm/vanilla/internals.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/node_modules/jotai/esm/vanilla.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jotai/esm/vanilla/internals.mjs [app-ssr] (ecmascript)");
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERNAL_buildStoreRev2"])();
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
"[project]/node_modules/jotai/esm/react.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jotai/esm/vanilla.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jotai/esm/vanilla/internals.mjs [app-ssr] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("node_modules/jotai/esm/react.mjs")}`;
    }
};
'use client';
;
;
;
const StoreContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(void 0);
function useStore(options) {
    const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(StoreContext);
    return (options == null ? void 0 : options.store) || store || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDefaultStore"])();
}
function Provider({ children, store }) {
    const storeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    if (store) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(StoreContext.Provider, {
            value: store
        }, children);
    }
    if (storeRef.current === null) {
        storeRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStore"])();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createElement"])(StoreContext.Provider, {
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
const use = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use || // A shim for older React versions
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
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERNAL_registerAbortHandler"])(nextValue, onAbort);
                    } else {
                        resolve(nextValue);
                    }
                } catch (e) {
                    reject(e);
                }
            };
            promise.then(onFulfilled(promise), onRejected(promise));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jotai$2f$esm$2f$vanilla$2f$internals$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INTERNAL_registerAbortHandler"])(promise, onAbort);
        });
        continuablePromiseMap.set(promise, continuablePromise);
    }
    return continuablePromise;
};
function useAtomValue(atom, options) {
    const { delay, unstable_promiseStatus: promiseStatus = !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].use } = options || {};
    const store = useStore(options);
    const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReducer"])((prev)=>{
        const nextValue = store.get(atom);
        if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom) {
            return prev;
        }
        return [
            nextValue,
            store,
            atom
        ];
    }, void 0, ()=>[
            store.get(atom),
            store,
            atom
        ]);
    let value = valueFromReducer;
    if (storeFromReducer !== store || atomFromReducer !== atom) {
        rerender();
        value = store.get(atom);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const unsub = store.sub(atom, ()=>{
            if (promiseStatus) {
                try {
                    const value2 = store.get(atom);
                    if (isPromiseLike(value2)) {
                        attachPromiseStatus(createContinuablePromise(value2, ()=>store.get(atom)));
                    }
                } catch (e) {}
            }
            if (typeof delay === "number") {
                setTimeout(rerender, delay);
                return;
            }
            rerender();
        });
        rerender();
        return unsub;
    }, [
        store,
        atom,
        delay,
        promiseStatus
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebugValue"])(value);
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
    const setAtom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((...args)=>{
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && !("write" in atom)) {
            throw new Error("not writable atom");
        }
        return store.set(atom, ...args);
    }, [
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e03353ab._.js.map