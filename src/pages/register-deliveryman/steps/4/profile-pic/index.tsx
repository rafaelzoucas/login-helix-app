import React from "react"
import styles from '../../styles.module.scss'

import Image from 'next/image'
import Link from "next/Link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProfilePic() {
  return (
    <div className={styles.container}>
      <header>
        <Link href="/register-deliveryman/steps/4">
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

        <p>Foto de perfil</p>

        <div className={styles.sendContainer}>
          <div>
            <span>Foto de perfil</span>

            <p>
              Confira se o seu rosto está bem visível.
            </p>
          </div>
          
          
            <Image 
              width={200} 
              height={200} 
              src="/perfil.jpg"
              alt="Perfil"
              objectFit="cover" //não deixa a imagem ficar distorcida
              className={styles.profilePic}
            />

          <button>
            Escolher foto
          </button>


        </div>
      </section>

      <section className={styles.actionButtons}>
        <Link href="/register-deliveryman/steps/4">
          <button>Enviar</button>
        </Link>

        {/* <button className={styles.disabled}>Próximo</button> */}

        
      </section>
    </div>
  )
}
