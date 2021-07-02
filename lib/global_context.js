

export default function getCtx(){
    if(!window) return null; // if called server-side
    if(!window.__my_context) window.__my_context = {
            _tone: require('tone'),    
        };
    return window.__my_context;
}