import React from 'react';


interface Iprops {
    people: {
      name: string,
      age: number,
      urlImg: string,
      note?: string,
      confirmed: boolean
  
    }[]
  }


const List: React.FC<Iprops> = ({people}) =>{

     const renderizarLista = (): JSX.Element[] => {
         return people.map((person)=>{
             return (
                 <li>
                     <div>
                         <img src={person.urlImg}/>
                         <h2>{person.name}</h2>
                     </div>
                     <p>{person.age} Years Old</p>
                     <p>{person.note}</p>
                 </li>
             )
         })
     }


    return (
        <div>
            ik ben een liest
            {renderizarLista()}
        </div>
    )
}

export default List;