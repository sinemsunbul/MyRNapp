const INITIAL_STATE={
    name:"Sinem",
    age:18,
}

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case "SET_NAME":
            return {...state,name:action.payload}
           
        case "SET_AGE":
                return {...state,age:action.payload}
           
            default: 
            return state
    }
}