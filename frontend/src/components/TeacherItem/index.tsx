import React from 'react'
import avatarImg from '../../assets/images/leo.jpg'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src={avatarImg} alt="Giordano Einstein Dorneles" />
                <div>
                    <strong>Leonardo Borges Neres</strong>
                    <span>TI</span>
                </div>
            </header>
            <p>
            O bacharel da Ciência da Computação trabalha, fundamentalmente, na elaboração de programas de informática, para computadores ou dispositivos móveis, como celulares e tablets.
                        <br /> <br />
                        O aluno aprende sobre varias disciplinas que formam a computação muito téoricamente, pois o curso não tem tempo para aprofundameto de cada disciplina
                    </p>
            <footer>
                <p>
                    Preço/hora
                            <strong>R$: 30,00</strong>
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