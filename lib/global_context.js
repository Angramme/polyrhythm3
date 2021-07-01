

export default function getCtx(){
    if(!window.__my_context) window.__my_context = {
            _tone: require('tone'),    
        };
    return window.__my_context;
}