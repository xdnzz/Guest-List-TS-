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
                         <img alt="imagem convidado" src={person.url}/>
                         <h2>{person.name}</h2>
                     
                     <span>{person.age} Years Old</span>
                     <span>{person.note}</span>
                     {person.confirmed? 'Confirmed' : 'Pending'}
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