export const SetName=(name)=>{
    return{
        // hangi statein değşcegini type
        type:"SET_NAME",
        // neyle değişcegini payload
        payload:name
    }
}

export const SetAge=(age)=>{
    return{
        type:"SET_AGE",
        payload:age
    }
}