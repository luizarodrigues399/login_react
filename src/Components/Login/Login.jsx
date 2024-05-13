import style from './Login.module.css'
import { FaUser, FaLock } from 'react-icons/fa'
import { useState } from "react"

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submit = (event) =>{

        event.preventDefault();

        console.log(email, password)
    };

    return (
    <div className={style.login_box}>

        <div className={style.login_elements}>

            <form onSubmit={submit}>
                <h3>Acesse o sistema</h3>
    
                <div className={style.login_input}>

                    <input type='email' placeholder='E-mail' required onChange={ 
                        (event) => setEmail(event.target.value)
                    }/>

                    <FaUser className={style.fa_icons}/>
                </div>
                
                <div className={style.login_input}>

                    <input type='password' placeholder='Senha' required
                    onChange = {
                        (event) => setPassword(event.target.value)
                    }/>

                    <FaLock className={style.fa_icons}/>
                </div>

                <div className={style.forget_remind}>

                    <div className={style.remind_box}>

                        <input id='forgetPassword' type='checkbox'/> 

                        <label htmlFor='forgetPassword'>Lembre de mim</label>
                    </div>

                    <a href='#'>Esqueceu sua senha?</a>
                </div>

                <button type='submit'>Login</button>

                <p>Não tem uma conta? <a href='#' className={style.register}>Registrar!</a></p>
            </form>
        </div>
    </div>
    )
}

export default Login

