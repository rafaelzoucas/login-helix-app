import Link from "next/Link"
import React, { useState } from "react"
import styles from './styles.module.scss'

export default function ForgotPassword() {
    const [isCodeSent, setIsCodeSent] = useState(false)

    return (
        <div className={styles.container}>
            {
                isCodeSent ? (
                    <>
                        <h2>Verifique seu Whatsapp</h2>
                        <h6>Enviamos um link no seu WhatsApp para você recuperar a senha.</h6>
                        <Link href="/login-client">
                            <p>Login</p>
                        </Link>
                    </>
                ) : (
                    <>
                        <h2>Recuperar senha</h2>
                        <input type="text" placeholder="Digite o seu e-mail" />
                        <button 
                            type="submit" 
                            onClick={() => {setIsCodeSent(true)}}
                            >
                            Recuperar
                        </button>
                        <Link href="/login-client">
                            <p>Voltar</p>
                        </Link>
                    </>
                )
            }
        </div>
    )
}
