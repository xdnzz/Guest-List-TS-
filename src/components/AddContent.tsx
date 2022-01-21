import react, { useState } from 'react';
import './style.css';

const AddContent = () =>{

    const [input, setInput] = useState({
        name:'',
        age:'',
        img:'',
        note:''
    })

    return(
        <div className='conteudo'>
            <input type="text"
            placeholder="Nome do convidado(a)"
            value={input.name}
            />
            <input type="text"
            placeholder="Idade"
            value={input.age}
            />
            <input type="text"
            placeholder="Url da foto"
            value={input.img}
            />
            <textarea
            placeholder="Observações"
            value={input.note}
            />
        </div>
    )
}


export default AddContent;