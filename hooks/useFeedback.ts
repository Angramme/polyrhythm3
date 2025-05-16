import { createWithEqualityFn } from "zustand/traditional";
import { createJSONStorage, persist } from "zustand/middleware";
import { Types } from "mongoose";
import { ResponseData } from "pages/api/feedback";
import clone from "just-clone";
// import { createMongoStorage } from "./server-storage";


type promise = Promise<any>;
interface feedbackState {
    promise: null | promise,
    id: null | Types.ObjectId
    rating: number
    feedback: {[k:string]: any}
    setRating: (x: number) => void
    setFeedback: (x: {[k:string]: any} | ((y: {[k:string]: any}) => {[k:string]: any})) => void
    resetFeedback: () => void
    setPromise: (p: promise) => void
    setId: (id: Types.ObjectId) => void
}

export const useFeedback = createWithEqualityFn<feedbackState>()(
    // persist(
    (set, get) => ({
        promise: null,
        id: null,

        rating: 0,
        feedback: {},
        setRating: (rating) => set({ rating }),
        setFeedback: (f) => set({ feedback: (typeof f === 'function' ? f(get().feedback) : f) }),
        resetFeedback: () => set({ feedback: {} }),
        setId: (id: Types.ObjectId) => set({ id }),
        setPromise: (p: promise) => set({ promise: p })
    }), 
    // {
    //     name: 'feedback-storage',
    //     // storage: createJSONStorage(()=>createMongoStorage('test_user'))
    //     // storage: TODO: use database
    // })
);

export function useFeedbackEntry(key: string, defaul: any){
    const value = useFeedback(s=>s.feedback[key] ?? defaul);
    const { setFeedback, id, promise, feedback, setPromise, setId } = useFeedback();

    const update_server = ()=>{
        if(promise != null) return;
        setPromise(
            fetch('/api/feedback', {
                method: 'POST',
                body: JSON.stringify({ data: feedback, id })
            })
            .then(r=>r.json())
            .then(({id})=>{
                console.log(id)
                setPromise(null);
                setId(id);
            })
        )
    }

    const cb = (x: any)=>{
        setFeedback(y=>({ ...y, [key]: (typeof x === 'function' ? x(y[key] ?? defaul) : x) }));
        update_server();

        // update on the server
        // const create_promise_wid = () => fetch('/api/feedback', { body: JSON.stringify({ data: new_feedback, id }) });
        // const create_promise_nid = () => fetch('/api/feedback', { body: JSON.stringify({ data: new_feedback }) }).then(r => r.json()).then(({id}) => setId(id))
        // if(id != null) setPromise(create_promise_wid())
        // else if(promise != null) setPromise(promise.then(create_promise_wid))
        // else setPromise(create_promise_nid())

    }
    return [value, cb]
}