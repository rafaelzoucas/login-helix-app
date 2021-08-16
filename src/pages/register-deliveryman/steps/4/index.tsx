import React from "react"
import styles from '../styles.module.scss'

import Image from 'next/image'
import Link from "next/Link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Step4() {
  return (
    <div className={styles.container}>
      <header>
        <Link href="/register-deliveryman/steps/pic-tips">
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
        <h2>Documentos</h2>

        <p>Comprovantes</p>

        <Link href="/register-deliveryman/steps/4/profile-pic">
          <div className={styles.cardContainer}>
            <div>
              <span>Foto de perfil</span>

              <p>
                <FontAwesomeIcon icon="share" />
                Enviar
              </p>

              {/* <p>
                <FontAwesomeIcon icon="clock" />
                Em análise
              </p> */}

              {/* <p>
                <FontAwesomeIcon icon="clock" />
                
              </p> */}

              {/* <p>Enviar novamente</p>
              <p className={styles.refused}>
                <FontAwesomeIcon icon="times-circle" />
                Aqui vai o motivo de ter sido recusado.
              </p> */}

              {/* <p className={styles.approved}>
                <FontAwesomeIcon icon="check-circle" />
                Aprovado
              </p> */}
            </div>

            <FontAwesomeIcon icon="angle-right" />
          </div>
        </Link>

        <Link href="/register-deliveryman/steps/4/cnh">
          <div className={styles.cardContainer}>
            <div>
              <span>CNH</span>

              {/* <p>
                <FontAwesomeIcon icon="share" />
                Enviar
              </p> */}

              <p>
                <FontAwesomeIcon icon="clock" />
                Em análise
              </p>

              {/* <p>Enviar novamente</p>
              <p className={styles.refused}>
                <FontAwesomeIcon icon="times-circle" />
                Aqui vai o motivo de ter sido recusado.
              </p> */}

              {/* <p className={styles.approved}>
                <FontAwesomeIcon icon="check-circle" />
                Aprovado
              </p> */}
            </div>

            <FontAwesomeIcon icon="angle-right" />
          </div>
        </Link>

        <Link href="/register-deliveryman/steps/4/vehicle">
          <div className={styles.cardContainer}>
            <div>
              <span>Documento do veículo</span>

              {/* <p>
                <FontAwesomeIcon icon="share" />
                Enviar
              </p> */}

              {/* <p>
                <FontAwesomeIcon icon="clock" />
                Em análise
              </p> */}

              <p>Enviar novamente</p>
              <p className={styles.refused}>
                <FontAwesomeIcon icon="times-circle" />
                Este documento não foi aprovado.
              </p>

              {/* <p className={styles.approved}>
                <FontAwesomeIcon icon="check-circle" />
                Aprovado
              </p> */}
            </div>

            <FontAwesomeIcon icon="angle-right" />
          </div>
        </Link>

        <Link href="/register-deliveryman/steps/4/address">
          <div className={styles.cardContainer}>
            <div>
              <span>Comprovante de residência</span>

              {/* <p>
                <FontAwesomeIcon icon="share" />
                Enviar
              </p> */}

              {/* <p>
                <FontAwesomeIcon icon="clock" />
                Em análise
              </p> */}

              {/* <p>Enviar novamente</p>
              <p className={styles.refused}>
                <FontAwesomeIcon icon="times-circle" />
                Aqui vai o motivo de ter sido recusado.
              </p> */}
              
              <p className={styles.approved}>
                <FontAwesomeIcon icon="check-circle" />
                Aprovado
              </p>
            </div>

            <FontAwesomeIcon icon="angle-right" />
          </div>
        </Link>

        <div className={styles.steps}>
          <p className={styles.completedStep}>
            <FontAwesomeIcon icon="pen" />
            Informações básicas
          </p>

          <FontAwesomeIcon icon="chevron-right" className={styles.completedStep} />

          <p className={styles.completedStep}>
            <FontAwesomeIcon icon="id-card" />
            Documentos
          </p>
          
          <FontAwesomeIcon icon="chevron-right" className={styles.completedStep} />

          <p>
            <FontAwesomeIcon icon="user-check" />
            Ativar cadastro
          </p>
        </div>
      </section>

      <section className={styles.actionButtons}>
        {/* <Link href="/register-deliveryman/steps/confirm">
          <button>Próximo</button>
        </Link> */}

        <button className={styles.disabled}>Próximo</button>

        
      </section>
    </div>
  )
}
