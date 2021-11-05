import React from "react"
import styles from './styles.module.scss'

import Image from 'next/image'
import Link from 'next/Link'

export default function LoginClient() {
  return (
    <div className={styles.container}>

      <section className={styles.logo}>
        <Image 
          width={200} 
          height={43.7} 
          src="/white-logo.png"
          alt="Helix"
        />
      </section>
      
      <section className={styles.formContainer}>
        <h2>Login</h2>

        <span>E-mail</span>
        <input type="text" placeholder="email@exemplo.com" />

        <span>Senha</span>
        <input type="senha" placeholder="Digite sua senha" />

        <Link href="/esqueci-senha">
          <p>Esqueci minha senha</p>
        </Link>

        <button className={styles.enterButton}>Entrar</button>

        <p>
          Não tem conta?
          <Link href="/register-deliveryman">
            <strong>
                Cadastre-se
            </strong>
          </Link>
        </p>
        
        <h3>Sou empresa</h3>

        <Link href="/login-client">
          <button>Ir para login de empresa</button>
        </Link>
      </section>
    </div>
  )
}
