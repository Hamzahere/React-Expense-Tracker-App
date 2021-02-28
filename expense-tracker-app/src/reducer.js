const transactionReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TRANSACTION':
            return ([action.payload,...state]);
            case 'DELETE_TRANSACTION':
                 return [
                ...state.filter((item, index) => item.id != action.payload)];
               // console.log(state.filter((item, index) => item.id != action.payload));
            default:
                return state;
                
    };
}

export default transactionReducer;