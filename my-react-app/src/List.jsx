import React, { useState } from 'react'


export default function List(props) {

   
    const ItemsList = props.items               
    const ListItems = ItemsList.map(item=> <li>{item.name}{item.calories}</li> )


    return(<>   

            <ol>{ListItems}</ol>


     </>);


}

