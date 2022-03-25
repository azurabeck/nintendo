const INITIAL_STATE = {};

const nintendoReducer = (state = INITIAL_STATE, action) => {    
    switch (action.type) {
        case 'GET_TOKEN_SUCCESS':
            return {
             ...state, 
             access_token: action.payload.access_token,
           }        
        case 'GET_TOKEN_ERROR':
            return {
              ...state, 
              access_token: null,
              err: action.payload.msg
         } 
        case 'GET_TOKEN_AZ_SUCCESS':
            return {
             ...state, 
             games: action.payload,
           }        
        case 'GET_TOKEN_AZ_ERROR':
            return {
              ...state, 
              games: null,
              err: action.payload.msg
         }    
        default: return state;
    }
}


export default nintendoReducer;