

const validation = (userData, errors, setErrors) => {

    // username
    if(!userData.username)
        setErrors({...errors, username: 'Por favor completa este campo'})

    else if (userData.username.length > 35)
        setErrors({...errors, username: 'No puede superar los 35 caracteres'})

    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{3}$/.test(userData.username)){
        setErrors({...errors, username: 'Email inválido'})
    } else {
        setErrors({...errors, username: ''})
    }

    // password
    if (userData.password.length < 6 ||  userData.password.length > 10)
        setErrors({...errors, password: 'Longitud inválida'})

    else if (!/\d/.test(userData.password)){
        setErrors({...errors, password: 'Debe contener a menos un número'})
    } else {
        setErrors({...errors, password: ''})
    }

    // else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/.test(userData.password))
    //     setErrors({...errors, password: 'Pasword inválido'})



};


export default validation