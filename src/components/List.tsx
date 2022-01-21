import React from 'react';


interface Iprops {
    dataInvitedPpl: {
      name: string,
      age: number,
      url: string,
      note?: string,
      confirmed?: boolean
  
    }[]
  }

 


const List: React.FC<Iprops> = ({dataInvitedPpl}) =>{
     const renderizarLista = (): JSX.Element[] => {
         return dataInvitedPpl.map((person)=>{
             return (
                 
                     <>
                     <div className="ImgName">
                        <div className="divisor">
                            <img alt="imagem convidado" src={person.url}/>
                            <h2>{person.name}</h2>
                            <span>{person.age} anos</span>
                        </div>
                     
                   
                     {person.note === "" ? 'Sem observações':'OBS:'} <span>{person.note}</span>
               
                     </div>
                     </>
             
             )
         })
     }

    return (
        <div>
           
            {renderizarLista()}
        </div>
    )
}

export default List;