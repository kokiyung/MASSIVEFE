function Validation(values){
    let error = {}
    
    
    if(values.username === ''){
        error.username = 'Username not be empty'
    }
    else{
        error.username = ""
    }
    if(values.name === ''){
        error.name = 'name not be empty'
    }
    else{
        error.name = ""
    }
    if(values.phone === ''){
        error.phone = 'phone not be empty'
    }
    else{
        error.phone = ""
    }
    if(values.email === ''){
        error.email = 'email not be empty'
    }
    else{
        error.email = ""
    }
    if(values.password === ''){
        error.password = 'password not be empty'
    }
    else{
        error.password = ""
    }

    
    return error;
}

export default Validation