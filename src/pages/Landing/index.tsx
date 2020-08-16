import React, { useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import logoImg from '../../assest/images/logo.png';
import landingImg from '../../assest/images/landing.svg';
import studyIcon from '../../assest/images/icons/study.svg';
import giveClassesIcon from '../../assest/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assest/images/icons/purple-heart.svg';
import './styles.css'
import api from '../../services/api';



function Landing() {
    //criando variavel de stado para armazenar a informacao do total de conexao
    const[totalConnections, setTotalConnections] = useState(0);
    
    //
    useEffect(() =>{
        api.get('connections').then(response =>{
            const {total} = response.data;
            setTotalConnections(total);
            console.log(response);
        })
    },[]);

    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy"/> 
                <h2>Sua plataforma de estudos online.</h2>
            </div>
        
        <img 
            src={landingImg} 
            className="hero-image" 
            alt="Plataroma de estudos"
        />
        
        <div className="buttons-container">
            <Link to="/study" className="study">
                <img src={studyIcon} alt="Estudar"></img>
                Estudar
            </Link>
            <Link to="/give-classes" className="give-classes">
                <img src={giveClassesIcon} alt="Estudar"></img>
                Dar aula
            </Link>

        </div>

        <span className="total-connections">
            Total de {totalConnections} conexoes já realizadas
            <img src={purpleHeartIcon} alt="Coracao roxo"/>

        </span>
        
        </div>
    </div>



    )


}

export default Landing;