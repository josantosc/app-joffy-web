import React from 'react'
import './styles.css'
import logoImg from '../../assest/images/logo.svg'
import whatsappIcon from '../../assest/images/icons/whatsapp.svg'
import { create } from 'domain'
import api from '../../services/api'


 export interface Teacher{
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string
 }
 interface TeacherItemPropos{
    teacher: Teacher
       
    
}

const TeacherItem: React.FC<TeacherItemPropos> = ( {teacher} ) => {
    function createNewConnection(){
        api.post('connections',{
            user_id: teacher.id,
        });
    }

    return(
        <article className="teacher-item">
        <header>
            <img src={teacher.avatar} alt={teacher.avatar}/>
            <div>
                <strong>{teacher.name}</strong>
                <span>{teacher.subject}</span> 
            </div>
        </header>
        <p>{teacher.bio}</p>
        <footer>
            <p>
                Preço/hora
                <strong>R$ {teacher.cost} </strong>
            </p>
            <a  target='_blank'
                onClick={createNewConnection} 
                href={`https://wa.me/${teacher.whatsapp}`}
            >
                <img src={whatsappIcon} alt="whatsapp"/>
                Entrar em contato
            </a>
        </footer>

    </article>

    )
}

export default TeacherItem;