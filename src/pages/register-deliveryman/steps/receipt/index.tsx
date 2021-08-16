import React from "react"
import styles from '../../styles.module.scss'

import Image from 'next/image'
import Link from "next/Link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Receipt() {
  return (
    <div className={styles.container}>

      <header>
        <div>
          <Image 
            width={150} 
            height={32.41} 
            src="/white-logo.png"
            alt="Helix"
            className={styles.logo}
          />
        </div>
      </header>
      
      <section className={styles.requiredDocuments}>
        <h2>Seu cadastro foi aprovado!</h2>

        <p>Em breve entraremos em contato via WhatsApp para ativar o seu cadastro. </p>  
      </section>

      <section className={styles.actionButtons}>
        <Link href="/login-deliveryman">
          <button>Login</button>
        </Link>
      </section>
    </div>
  )
}
