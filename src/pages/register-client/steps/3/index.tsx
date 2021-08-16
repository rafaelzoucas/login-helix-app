import React, { useState } from "react"
import styles from '../styles.module.scss'

import Image from 'next/image'
import Link from "next/Link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Step3() {
  const [isDayActive, setIsDayActive] = useState(false)

  const switchToggle = () => {
    if(isDayActive) {
      setIsDayActive(false)
    } else {
      setIsDayActive(true)
    }
  }

  return (
    <div className={styles.container}>
      <header>
        <Link href="/register-client/steps/2">
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

        <span>Horário de funcionamento</span>
        <div className={styles.weekDays}>
          <section>
            <div className={styles.time}>
              <p>Domingo</p>
              <div>
                <input type="text" placeholder="19:00" />
                <input type="text" placeholder="23:00" />
              </div>
              <button>+ Adicionar horários</button>
            </div>
            <div className={`${isDayActive ? (
                `${styles.toggleOn}`
              ) : (
                `${styles.toggleOff}`
              )}`}               
              onClick={switchToggle}
            >
              <div className={styles.toggleCircle} />
            </div>
          </section>
        </div>

        <div className={styles.weekDays}>
          <section>
            <div className={styles.time}>
              <p>Segunda-feira</p>
              <div>
                <input type="text" placeholder="19:00" />
                <input type="text" placeholder="23:00" />
              </div>
              <button>+ Adicionar horários</button>
            </div>
            <div className={`${isDayActive ? (
                `${styles.toggleOn}`
              ) : (
                `${styles.toggleOff}`
              )}`}               
              onClick={switchToggle}
            >
              <div className={styles.toggleCircle} />
            </div>
          </section>
        </div>

        <div className={styles.weekDays}>
          <section>
            <div className={styles.time}>
              <p>Terça-feira</p>
              <div>
                <input type="text" placeholder="19:00" />
                <input type="text" placeholder="23:00" />
              </div>
              <button>+ Adicionar horários</button>
            </div>
            <div className={`${isDayActive ? (
                `${styles.toggleOn}`
              ) : (
                `${styles.toggleOff}`
              )}`}               
              onClick={switchToggle}
            >
              <div className={styles.toggleCircle} />
            </div>
          </section>
        </div>

        <div className={styles.weekDays}>
          <section>
            <div className={styles.time}>
              <p>Quarta-feira</p>
              <div>
                <input type="text" placeholder="19:00" />
                <input type="text" placeholder="23:00" />
              </div>
              <button>+ Adicionar horários</button>
            </div>
            <div className={`${isDayActive ? (
                `${styles.toggleOn}`
              ) : (
                `${styles.toggleOff}`
              )}`}               
              onClick={switchToggle}
            >
              <div className={styles.toggleCircle} />
            </div>
          </section>
        </div>

        <div className={styles.weekDays}>
          <section>
            <div className={styles.time}>
              <p>Quinta-feira</p>
              <div>
                <input type="text" placeholder="19:00" />
                <input type="text" placeholder="23:00" />
              </div>
              <button>+ Adicionar horários</button>
            </div>
            <div className={`${isDayActive ? (
                `${styles.toggleOn}`
              ) : (
                `${styles.toggleOff}`
              )}`}               
              onClick={switchToggle}
            >
              <div className={styles.toggleCircle} />
            </div>
          </section>
        </div>

        <div className={styles.weekDays}>
          <section>
            <div className={styles.time}>
              <p>Sexta-feira</p>
              <div>
                <input type="text" placeholder="19:00" />
                <input type="text" placeholder="23:00" />
              </div>
              <button>+ Adicionar horários</button>
            </div>
            <div className={`${isDayActive ? (
                `${styles.toggleOn}`
              ) : (
                `${styles.toggleOff}`
              )}`}               
              onClick={switchToggle}
            >
              <div className={styles.toggleCircle} />
            </div>
          </section>
        </div>

        <div className={styles.weekDays}>
          <section>
            <div className={styles.time}>
              <p>Sábado</p>
              <div>
                <input type="text" placeholder="19:00" />
                <input type="text" placeholder="23:00" />
              </div>
              <button>+ Adicionar horários</button>
            </div>
            <div className={`${isDayActive ? (
                `${styles.toggleOn}`
              ) : (
                `${styles.toggleOff}`
              )}`}               
              onClick={switchToggle}
            >
              <div className={styles.toggleCircle} />
            </div>
          </section>
        </div>          
        
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
        <Link href="/register-client/steps/receipt">
          <button>Finalizar meu cadastro</button>
        </Link>

        {/* <button className={styles.disabled}>Preencha corretamente para continuar</button> */}

        <Link href="/login-client">
          <button className={styles.cancel}>Cancelar meu cadastro</button>
        </Link>
      </section>
    </div>
  )
}
