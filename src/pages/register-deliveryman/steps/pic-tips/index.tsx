import React from "react"
import styles from '../../styles.module.scss'

import Image from 'next/image'
import Link from "next/Link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function RegisterDeliveryman() {
  return (
    <div className={styles.container}>

      <header>
        <Link href="/register-deliveryman/steps/3">
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
        <h2>Como agilizar a ativação do seu cadastro.</h2>

        <p>Para garantir que o seu cadastro seja aprovado mais rápidamente, siga os passos abaixo:</p>

        <h3>- Fotos <strong>nítidas</strong> e <strong>legíveis</strong></h3>
        <p>Após tirar a foto, verifique se todas as informações estão legíveis.</p>       
        
        <h3>- Documento <strong>desamassado</strong></h3>
        <p>Para que suas fotos tenham uma melhor qualidade, desamasse caso esteja amassado.</p>       
        
        <h3>- Superfície <strong>plana</strong> e <strong>escura</strong></h3>
        <p>Coloque o seu documento sob uma superfície plana e escura, isso pode te ajudar a tirar fotos melhores.</p>       
      </section>

      <section className={styles.actionButtons}>
        <Link href="/register-deliveryman/steps/4">
          <button>Entendi, quero enviar meus comprovantes</button>
        </Link>
        
        {/* <button className={styles.disabled}>Preencha corretamente para continuar</button> */}

        <Link href="/login-deliveryman">
          <button className={styles.cancel}>Cancelar meu cadastro</button>
        </Link>
      </section>
    </div>
  )
}
