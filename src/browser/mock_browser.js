
var qb = {
    addListener: ()=>{}
    ,
    removeListener: ()=>{}
    ,
    hasListener: ()=>{}
}
    , jb = {
    permissions: {
        contains: ()=>{}
        ,
        request: ()=>{}
    },
    runtime: {
        onMessage: qb,
        openOptionsPage: ()=>{}
        ,
        lastError: {
            message: ""
        }
    },
    storage: {
        sync: {
            get: ()=>{}
            ,
            set: ()=>{}
        }
    },
    tabs: {
        onUpdated: qb,
        query: ()=>{}
        ,
        sendMessage: ()=>{}
    }
};
