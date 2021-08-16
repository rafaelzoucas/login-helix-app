import React from "react"
import styles from '../styles.module.scss'

import Image from 'next/image'
import Link from "next/Link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Step2() {
  return (
    <div className={styles.container}>

      <header>
        <Link href="/register-client/steps/1">
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

        <p>Estabelecimento</p>

        <span>Nome</span>
        <input type="text" placeholder="Nome da Loja" /> 

        <span>CPF ou CNPJ</span>
        <input type="number" placeholder="999.999.999.99 ou 99.999.999/0001-99" />              
        
        <span>Telefone (WhatsApp)</span>
        <input type="number" placeholder="(99) 9 9999-9999" />

        <span>Rua</span>
        <input type="text" placeholder="Rua Do Estabelecimento" />

        <span>Número</span>
        <input type="number" placeholder="123" />
        
        <span>Referência (opcional)</span>
        <input type="number" placeholder="Próximo ao Ponto de Referência" />
        
        <span>CEP</span>
        <input type="text" placeholder="19800-000" />
        
        <span>Ramo de atividades</span>
        <select placeholder="Alimentício" >
          <option value="">Alimentício</option>
          <option value="">Comércio</option>
          <option value="">Clínica</option>
          <option value="">Escritório</option>
        </select> 
        
        <div className={styles.steps}>
          <p className={styles.completedStep}>
            <FontAwesomeIcon icon="user-tie" />
            Dados do proprietário
          </p>

          <FontAwesomeIcon icon="chevron-right" className={styles.completedStep} />

          <p className={styles.completedStep}>
            <FontAwesomeIcon icon="store" />
            Estabelecimento
          </p>
          
          <FontAwesomeIcon icon="chevron-right" className={styles.completedStep} />

          <p>
            <FontAwesomeIcon icon="user-check" />
            Ativar cadastro
          </p>
        </div>
      </section>

      <section className={styles.actionButtons}>
        <Link href="/register-client/steps/3">
          <button>Continuar para Horários</button>
        </Link>
        
        {/* <button className={styles.disabled}>Preencha corretamente para continuar</button> */}

        <Link href="/login-client">
          <button className={styles.cancel}>Cancelar meu cadastro</button>
        </Link>
      </section>
    </div>
  )
}
