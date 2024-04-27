var Em = {
    get: (t,e,n)=>{
        let r = e === void 0 ? t : {
            [t]: e
        };
        return oe.storage[n].get(r)
    }
    ,
    set: (t,e,n)=>oe.storage[n].set({
        [t]: e
    })
};
