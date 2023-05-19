import { db } from "../firebase/config"
import { useEffect, useReducer, useState} from "react"
import { collection, query, orderBy, onSnapshot, where, QuerySnapshot } from "firebase/firestore";


export const useFetchQuestion = (docCollection, category) => { 
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState();
    
    useEffect(() => { 
        setLoading(true);
        async function loadData() { 
            const collectionRef = await collection(db, docCollection); 
            try {
                let q = await query(
                    collectionRef, 
                    where("category", "==", category)
                )

                await onSnapshot(q, (querySnapshot) => { 
                    setQuestions(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id, 
                            ...doc.data()
                        })
                    ))
                })

                setLoading(false)
            } catch (error) {
                console.log(error.message);
            }
        }
        
        loadData();
    }, [docCollection, category])
    
    
    return {questions, loading}
}

