const init={
   authError:null
}

const authreducer=(state=init,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            console.log('LOGIN SUCCESS');
            return {
                ...state,
                authError:null,
            };
        case 'LOGIN_ERROR':
            console.log('login failed')
            return {
                ...state,
                authError:'login failed'
            };
        case 'LOGOUT_SUCCESS':
            console.log('logout success')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError:null,
            };        
            case 'SIGNUP_ERROR':
            console.log('signup failed')       
            return {
                ...state,
            authError:action.err.message}
            ;
        default:
            return state;
        
    }
}

export default authreducer