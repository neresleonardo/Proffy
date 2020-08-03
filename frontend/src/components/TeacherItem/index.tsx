import React from 'react'
import avatarImg from '../../assets/images/gio.jpg'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src={avatarImg} alt="Giordano Einstein Dorneles" />
                <div>
                    <strong>Giordano Einstein Dorneles</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada.
                        <br /> <br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das
                        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
                        uma das minhas explosões.
                    </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$: 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem