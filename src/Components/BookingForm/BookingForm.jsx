import './BookingForm.scss'
import React from 'react'
import imgTitle from '../Item/img/ItemImg.png'

export default function BookingForm({setShowForm}){
/* 
    let obBooking={
        task:null,
        typeProduct:null,
        cout:null

    } */
    const [obBooking,setObBooking] = React.useState({})
    
    const [formNum,setFormNum] = React.useState(1)

    const Form1 = ({obBooking}) =>{
        const tasks =[
            {title:'Производство идеальной корпоративной одежды',
            img:imgTitle,
            idTask:0},
            {title:'Производство промопродукции для бизнеса',
            img:imgTitle,
            idTask:1},
            {title:'Производство изделий для вашего бренда одежды',
            img:imgTitle,
            idTask:2},
            {title:'Другое',
            img:imgTitle,
            idTask:3},

        ]
        const [task,setTask] = React.useState([])

        const handleSetTask = (i) =>{
            const find = task.find(el=>el.idTask==i)
            console.log(find)
            if (find==undefined){
                let arr = task
                arr.push(tasks[i])
                setTask(arr)  
                console.log('такова нет') 
                console.log(task)
            } 
            if(find!==undefined){
                setTask(task.filter(el=>el.idTask!=i))
                console.log('такое есть') 
                console.log(task)
            }
            obBooking.task=task
            setObBooking(obBooking)
            
        }

        const Item = ({el}) =>{
            return(
                <div className='Item'>
                        <img src={el.img} width={70} height={70}/>
                        <p className='task_title'>{el.title}</p>
                </div>
            )
        }

        
        

        
        return(
            <div className='Form1' onClick={()=>console.log(task)}>
                <ul className='set_task'>
                    {tasks.map((el,i)=>
                   
                    <li key={el.idTask}>
                        <Item el={el}/>
                       
                    </li>)}
                </ul>
            </div>
        )
    }

    const Form2 = ({obBooking}) =>{
        const typeProduct = [
            {title:'Худи/свитшоты',
            idPoduct: 0},

            {title:'Костюмы',
            idPoduct: 1},

            {title:'Футболки/лонгсливы',
            idPoduct: 2},

            {title:'Рубашки',
            idPoduct: 3},

            {title:'Платья',
            idPoduct: 4},

            {title:'Шорты',
            idPoduct: 5},

            {title:'Другое',
            idPoduct: 6},

            
        ]

        const [type,setType] = React.useState(0)

        const handleSetType = (i) =>{
            setType(i)
            obBooking.typeProduct = typeProduct[i]
            setObBooking(obBooking)
        }

        return(
            <div className='Form1'>
                <h3>Выберите тип изделия</h3>
                <ul className='set_task'>
                    {typeProduct.map((el,i)=>(
                        <li key={el.id}>
                            <div className={type==i ? 'task task_active' : 'task '} onClick={()=>handleSetType(i)}>
                                <img src = {imgTitle} width={70} height={70}/>
                                <h4 className='task_title'>{el.title}</h4>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    const Form3 = ({obBooking}) =>{
        
        const [cout,setCout] = React.useState(null)
        const coutList = [
            {
                title:'1-5 штук',
                idCout:0,
            },
            {
                title:'6-15 штук',
                idCout:1,
            },
            {
                title:'16-25 штук',
                idCout:2,
            },
            {
                title:'26-50 штук',
                idCout:3,
            },
            {
                title:'Больше 50',
                idCout:4,
            },
            
        ]

        const handleSetCout = (i) =>{
            setCout(i)
            obBooking.cout = coutList[i]
            setObBooking(obBooking)
            console.log(obBooking)
        }
        
        return(
            <div className='Form3'>
                <div className='cout_list'>
                    {coutList.map((el,i)=>
                    (<label>
                        <input type='radio'
                    checked={i==cout}
                    value='123'
                    onChange={()=>handleSetCout(i)}
                    />
                    <h3>{el.title}</h3>
                    </label>))
                }
                </div>
            </div>
        )
    }

    const Form4 = ({obBooking}) =>{
        
        const services = [
            {
                title:'Разработка уникального дизайна',
                idService:0,
            },
            {
                title:'Уникальная ткань',
                idService:1,
            },
            {
                title:'Упаковка',
                idService:2,
            },
            {
                title:'Логистика',
                idService:3,
            },
            {
                title:'Составление подарочных наборот',
                idService:4,
            },
            {
                title:'БЕЗ ДОП УСЛУГ',
                idService:5,
            },

        ]
        
        const [service,setService] = React.useState(null)

        const handleSetServie = (i) =>{
            setService(i)
            obBooking.service = services[i]
            setObBooking(obBooking)
        }
        return(
            <div className='Form1'>
                <ul className='set_task'>
                    {services.map((el,i)=>
                    <li>
                        <div className={service==i ? 'task task_active' : 'task'}
                        onClick={()=>handleSetServie(i)}>
                            <img src={imgTitle} width={70} height={70}/>
                            <h3>{el.title}</h3>
                        </div>
                    </li>)}
                </ul>
            </div>
        )
    }

    return(
        <div className='form_wrapper' >
            <div className="BookingForm" >
            <div className='form_header' onClick={()=>console.log(obBooking)}>
123
            </div>
            
            {formNum == 1 ? <Form1 obBooking={obBooking}/> : null}
            {formNum == 2 ? <Form2 obBooking={obBooking}/>  : null}
            {formNum == 3 ? <Form3 obBooking={obBooking}/> : null}
            {formNum == 4 ? <Form4 obBooking={obBooking}/> : null}

            <div className='form_buttons'>
                
                <button
                onClick={()=>formNum>0 ? setFormNum(formNum-1) : null}
                >
                    Назад
                </button>


                <button
                 onClick={()=>formNum<5 ? setFormNum(formNum+1) : null}
                >
                    Далее
                </button>
            </div>
        </div>
        <div className='overlay' onClick={()=>setShowForm(false)}></div>
        </div>
    )
}