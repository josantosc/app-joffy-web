import React, { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import backIcon from '../../assest/images/icons/back.svg'
import logoImg from '../../../assest/images/logo.svg'
import whatsappIcon from '../../assest/images/icons/whatsapp.svg'
import './styles.css'
import PageHeader from '../../components/PageHeader'
import TeacherItem, {Teacher}from '../../components/TeatcherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'




function TeacherList(){

    const [teachers,setTeachers ] = useState([]);
    
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    async  function searchTeachers(e: FormEvent){
        e.preventDefault();
       const response = await  api.get('classes',{
           params:{
                subject,
                week_day,
                time
           }
       });
       setTeachers(response.data);
    }
    return (
    
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os professores disponíveis.">
             <form id="search-teachers" onSubmit={searchTeachers}>
             <Select 
                    name="subject" 
                    label="Matéria"
                    value={subject}
                    onChange={(e)=>{setSubject(e.target.value)}}
                    option = {[
                        {value:'Data Science', label:'Data Science'},
                        {value:'Machine Learning', label:'Machine Learning'},
                        {value:'Big Data', label:'Big Data'},
                        {value:'Matemática', label:'Matemática'},
                        {value:'BI', label:'BI'}

                    ]}
                
                />
                <Select 
                    name="week_day" 
                    label="Dia da semana"
                    value={week_day}
                    onChange={(e)=>{setWeek_day(e.target.value)}}
                    option = {[
                        {value:'0', label:'Domingo'},
                        {value:'1', label:'Segunda-feira'},
                        {value:'2', label:'Terça-feira'},
                        {value:'3', label:'Quarta-feira'},
                        {value:'4', label:'Quinta-feira'},
                        {value:'5', label:'Sexta-feira'},
                        {value:'6', label:'Sábado'}
                    ]}
                
                />
    
                <Input  
                    type="time" 
                    name="time" 
                    label="Hora"
                    value={time}
                    onChange={(e)=>
                        {setTime(e.target.value)
                        
                    }}
                    
                />
                <button type='submit'>
                    Buscar
                </button>
             </form>
             
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>;
                }) }   
            </main>

        </div>
    )
}

export default TeacherList;
