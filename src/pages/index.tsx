import React from "react"
import styles from './home.module.scss'

import Image from 'next/image'
import Link from 'next/Link'

export default function Home() {
  return (
    <div className={styles.container}>

      <section className={styles.clientContainer}>
        <header>
          <Image 
              width={150} 
              height={32.41} 
              src="/logo.png"
              alt="Helix"
          />
        </header>
        
        <h1>Sou Empresa</h1>

        <Link href="/login-client">
          <button>Acessar minha conta</button>
        </Link>

        <p>
          Ainda não tem conta?
          <Link href="/register-client/steps/1">
              Cadastre-se
          </Link>
        </p>
      </section>

      <section className={styles.deliverymanContainer}>
        <h1>Sou Entregador</h1>

        <Link href="/login-deliveryman">
          <button>Acessar minha conta</button>
        </Link>

        <p>
          Ainda não tem conta? 
          <Link href="/register-deliveryman">
              Cadastre-se
          </Link>
        </p>
      </section>

      <ul className={styles.roundLines}>
        <li></li>
      </ul>
    </div>
  )
}
