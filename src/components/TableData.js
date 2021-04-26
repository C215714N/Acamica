import React, { useRef } from "react";
export const Thead = (props) => { return( 
    <thead>
        <tr>
            <th><input type="checkbox" /></th> 
            { Object.keys(props.title).map( (key, i) => <th key={i}> {key} </th> ) }
            <th>Acciones</th>                  
        </tr>
    </thead>
)   }
export const Tbody = (props) => {
    const myRefs= useRef([]);
    return(
    <tbody>
    {   props.data.map( (row, i) => 
        <tr key={i} ref={(el) => (myRefs.current[i] = row)}> 
            <td><input type="checkbox" onChange={ () => console.log(myRefs.current[i])}/></td>
            { Object.keys(row).map( ( key, id ) => <td key={id}>{row[key]}</td> ) } 
            <td>...</td>
        </tr>
    )   }
    </tbody>
)   }