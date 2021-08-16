import React from "react"
import styles from '../styles.module.scss'

import Image from 'next/image'
import Link from "next/Link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Step1() {
  return (
    <div className={styles.container}>
      <header>
        <Link href="/register-deliveryman">
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

        <p>Informações básicas</p>

        <span>Nome completo</span>
        <input type="text" placeholder="João da Silva" />              
        
        <span>CPF</span>
        <input type="text" placeholder="123.456.789-99" />

        <span>Telefone (WhatsApp)</span>
        <input type="text" placeholder="(18) 9 9999-9999" />
        
        <span>E-mail</span>
        <input type="email" placeholder="exemplo@exemplo.com" />
        
        <span>Senha</span>
        <input type="password" placeholder="Crie uma senha" />

        <span>Confirmar senha</span>
        <input type="password" placeholder="Confirme a sua senha" />

        <div className={styles.terms}>
          <input type="checkbox" name="" id="" />

          <p>Li e aceito os <strong>Termos de Uso</strong></p>
          {/* ainda estamos desenvolvendo os termos */}
        </div>

        {/* <p>Passo 1 de 4</p>      */}
        
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
        <Link href="/register-deliveryman/steps/2">
          <button>Continuar para Endereço</button>
        </Link>

        {/* <button className={styles.disabled}>Preencha corretamente para continuar</button> */}

        <Link href="/login-deliveryman">
          <button className={styles.cancel}>Cancelar meu cadastro</button>
        </Link>
      </section>
    </div>
  )
}
