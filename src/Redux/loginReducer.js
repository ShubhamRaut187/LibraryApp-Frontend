import { Login,Logout } from "./actiontypes";

// Initial store value
let InitialLog = {
    Status:false,
    User:{},
}

// Reducer
const loginReducer = (store = InitialLog,action) => {
    switch (action.type) {
        case Login:{
            return{
                Status:true,
                User:action.payload
            }
        }
        case Logout:{
            return{
                ...InitialLog,
                User:action.payload
            }
        }
    
        default:{
            return store
        }
    }
}

export {loginReducer}