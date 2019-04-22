import{GET_ERRORS,CLEAR_ERRORS} from './Types';

//Return errors
export const returnErrors=(msg,status,id=null)=>{
    return{
        type:GET_ERRORS,
        payload:{msg,status,id}
    }
}

//Clear CLEAR_ERRORS
export const clearErrors=()=>{
    return{
        type:CLEAR_ERRORS
    };
};

