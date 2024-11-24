import React, { useState } from 'react'


export default function List() {

    const fruits = ["apple", "orange" , "mango", "pineapple"]

    const ListItems = fruits.map(item => <li>{item}</li> )


    return(<>

            <ol>{ListItems}</ol>


     </>);


}

