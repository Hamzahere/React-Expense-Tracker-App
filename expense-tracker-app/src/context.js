import React , {createContext, useReducer} from 'react';
import transactionReducer from './reducer';


import { v4 as uuidv4 } from 'uuid';





const initialData = [
    { id: uuidv4(),amount: 800, desc: "Cash" },
    { id: uuidv4(),amount: 40, desc: "Book" },
    { id: uuidv4(),amount: -200, desc: "Camera" }
]

export const TransactionContext = createContext(initialData);

export const ContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(transactionReducer,initialData);

    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transaction
        })
    }

    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        })
    }

    return (
        <TransactionContext.Provider value={
            {
                transactions: state,
                addTransaction,
                deleteTransaction
            }
        }>
            {children}
        </TransactionContext.Provider>
    );

}
