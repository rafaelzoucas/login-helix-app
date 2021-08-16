import React from "react"
import styles from '../styles.module.scss'

import Image from 'next/image'
import Link from "next/Link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Step3() {
  return (
    <div className={styles.container}>
      <header>
        <Link href="/register-deliveryman/steps/2">
          <button className={styles.backBtn}>
            <FontAwesomeIcon icon="arrow-left" />
          </button>
        </Link>
        <Image 
          width={150} 
          height={32.41} 
          src="/white-logo.png"
          alt="Helix"
          className={styles.logo}
        />
      </header>
      
      <section className={styles.formContainer}>
        <h2>Cadastro</h2>

        <p>Dados bancários</p>

        <span>Nome ou código do banco</span>
        <input type="text" placeholder="123 - Meu Banco" />              
        
        <span>Número da agência</span>
        <input type="text" placeholder="0001" />

        <span>Número da conta com digito</span>
        <input type="text" placeholder="00011111111-02" />
        
        <span>Chave PIX</span>
        <input type="text" placeholder="Minha chave PIX" />
        
        <div className={styles.steps}>
          <p className={styles.completedStep}>
            <FontAwesomeIcon icon="pen" />
            Informações básicas
          </p>

          <FontAwesomeIcon icon="chevron-right" className={styles.completedStep} />

          <p>
            <FontAwesomeIcon icon="id-card" />
            Documentos
          </p>
          
          <FontAwesomeIcon icon="chevron-right" />

          <p>
            <FontAwesomeIcon icon="user-check" />
            Ativar cadastro
          </p>
        </div>
      </section>

      <section className={styles.actionButtons}>
        <Link href="/register-deliveryman/steps/pic-tips">
          <button>Continuar para Comprovantes</button>
        </Link>

        {/* <button className={styles.disabled}>Preencha corretamente para continuar</button> */}

        <Link href="/login-deliveryman">
          <button className={styles.cancel}>Cancelar meu cadastro</button>
        </Link>
      </section>
    </div>
  )
}
