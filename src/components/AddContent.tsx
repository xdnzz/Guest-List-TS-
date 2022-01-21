import React, { useState } from "react";
import './style.css';
import { Ippl as Datas } from "../App";

interface IData{
    people: Datas["ppl"],
    setPeople: React.Dispatch<React.SetStateAction<Datas["ppl"]>>
}

    const AddToList:React.FC<IData> = ({people, setPeople}) => {

    const [data, setData] = useState({
        name: "",
        age: "",
        note: "",
        url: ""
    })


    const handChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void =>{
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    const handleClick = ():void => {
        if( !data.name || !data.age ||  !data.url){
            return
        }
        setPeople([
            ...people, {
                name: data.name,
                age: parseInt(data.age),
                url: data.url,
                note: data.note
            }
        ])
  
    }

    return (
        <div className="conteudo">
            <input
                type="text"
                placeholder="Nome"
                value={data.name}
                onChange={handChange}
                name="name"
            />
             <input
                type="text"
                placeholder="Idade"
                value={data.age}
                onChange={handChange}
                name="age"
            />
             <input
                type="text"
                placeholder="Foto do convidado(url)"
                value={data.url}
                onChange={handChange}
                name="url"
            />
             <textarea
                placeholder="Observação"
                value={data.note}
                onChange={handChange}
                name="note"
                
            />

            <button
            onClick={handleClick}
            className="botao"
            >
                Adicionar convidado
            </button>
            

        </div>
    )
}

export default AddToList;