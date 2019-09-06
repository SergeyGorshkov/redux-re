const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((prev, fn) => fn(prev), comp);
};

export default compose;