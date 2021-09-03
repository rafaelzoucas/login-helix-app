import React from "react"
import styles from '../styles.module.scss'

import Image from 'next/image'
import Link from "next/Link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Step2() {
  return (
    <div className={styles.container}>

      <header>
        <Link href="/register-deliveryman/steps/1">
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

        <p>Endereço</p>

        <span>Rua</span>
        <input type="text" placeholder="Rua Da Minha Casa" />              
        
        <span>Número</span>
        <input type="number" placeholder="123" />

        <span>Complemento</span>
        <input type="number" placeholder="Ap 1" /> 

        <span>Cidade</span>
        <input type="text" placeholder="Assis" />
        
        <span>Estado</span>
        <input type="text" placeholder="SP" />
        
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
        <Link href="/register-deliveryman/steps/3">
          <button>Continuar para Dados Bancários</button>
        </Link>
        
        {/* <button className={styles.disabled}>Preencha corretamente para continuar</button> */}

        <Link href="/login-deliveryman">
          <button className={styles.cancel}>Cancelar meu cadastro</button>
        </Link>
      </section>
    </div>
  )
}
