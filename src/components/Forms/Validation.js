

const validation = (userData, errors, setErrors) => {

    // username
    if(!userData.username)
        setErrors({...errors, username: 'Por favor completa este campo'})

    else if (userData.username.length > 35)
        setErrors({...errors, username: 'El email no puede superar los 35 caracteres'})

    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/.test(userData.username)){
        setErrors({...errors, username: 'Email inválido'})
    } 
    else {
        setErrors({...errors, username: ''})
    }

    // password
    if (userData.password.length < 6 ||  userData.password.length > 10)
        setErrors({...errors, password: 'Password con longitud inválida'})

    else if (!/\d/.test(userData.password)){
        setErrors({...errors, password: 'El password debe contener a menos un número'})
    } else {
        setErrors({...errors, password: ''})
    }


};


export default validation;