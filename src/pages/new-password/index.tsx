import Link from "next/Link"
import React, { useState } from "react"
import styles from './styles.module.scss'

export default function NewPassword() {

    return (
        <div className={styles.container}>
            <h2>Nova senha</h2>
            <input type="password" placeholder="Digite nova senha" />
            <input type="password" placeholder="Confirme a nova senha" />
            <button type="submit" >
                Alterar senha
            </button>
            <Link href="/login-client">
                <p>Voltar</p>
            </Link>         
        </div>
    )
}
