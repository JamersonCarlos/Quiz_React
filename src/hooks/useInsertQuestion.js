import { db } from "../firebase/config"
import { useEffect, useReducer, useState} from "react"
import { addDoc, collection} from "firebase/firestore"

const initialState = { 
    loading: null, 
    error: null
}

const dispatchReducer = (state, action) => { 
    switch(action.type) { 
        case "LOADING": 
            return { loading: true, error: null };
        case "INSERT_QUESTION": 
            return { loading: false, error: null};
        case "ERROR":
            return { loading: false, error: action.payload};
        default: 
            return state; 
    } 
}

export const useInsertQuestion = (docCollection) => { 
    const [response, dispatch] = useReducer(dispatchReducer, initialState);

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const checkCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action);
        }
    };

    const insertQuestion = async (question) => { 
        
        checkCancelBeforeDispatch({
            type: "LOADING"
        });

        try {
            const insertedQuestion = await addDoc(
                collection(db, docCollection),
                question
            );

            checkCancelBeforeDispatch({
                type: "INSERT_QUESTION",
                payload: insertedQuestion
            });
        
        } catch (error) {
            checkCancelBeforeDispatch({ 
                type: "ERROR",
                payload: error.message
            });
        }
        
    }

    useEffect(() => { 
        return () => setCancelled(true);
    });

    return {insertQuestion, response}

}