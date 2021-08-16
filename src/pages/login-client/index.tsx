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

        {/* <p>Esqueci minha senha</p> */}

        <button className={styles.enterButton}>Entrar</button>

        <p>
          Não tem conta?
          <Link href="/register-client/steps/1">
            <strong>
                Cadastre-se
            </strong>
          </Link>
        </p>
        
        <h3>Sou entregador</h3>

        <Link href="/login-deliveryman">
          <button>Ir para login de entregador</button>
        </Link>
      </section>
    </div>
  )
}
