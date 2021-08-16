import React from "react"
import styles from './styles.module.scss'

import Image from 'next/image'
import Link from "next/Link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function RegisterDeliveryman() {
  return (
    <div className={styles.container}>

      <header>
        <Link href="/login-deliveryman">
          <button className={styles.backBtn}>
            <FontAwesomeIcon icon="arrow-left" />
          </button>
        </Link>

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
        <h2>Serão necessários alguns documentos.</h2>

        <p>Antes de iniciar o seu cadastro, tenha em mãos os seguintes documentos:</p>

        <h3>- CNH atualizada</h3>
        <p>Caso sua CNH esteja vencida ou suspensa, o seu cadastro não será aprovado.</p>       
        
        <h3>- Comprovante de residência</h3>
        <p>É necessário que seja o mais atual.</p>       
        
        <h3>- Documento do veículo</h3>
        <p>Caso o documento esteja vencido ou irregular, o seu cadastro não será aprovado.</p>       
      </section>

      <section className={styles.actionButtons}>
        <Link href="/register-deliveryman/steps/1">
          <button>Quero ser entregador parceiro da Helix</button>
        </Link>
        
        <Link href="/login-deliveryman">
          <button className={styles.cancel}>Cancelar</button>
        </Link>
      </section>
    </div>
  )
}
