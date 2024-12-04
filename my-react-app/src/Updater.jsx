import React, {useState} from 'react'

function Updater() {

    const [car , setCar] = useState({Carname: "Minicooper", Year: 2020 , CompanyName : "Cooperworks"});

    const handleCarNameChange = (e) =>
        setCar(c => ({...car, Carname: e.target.value})  )

    const handleYearChange = (e) =>
        setCar(c => ({...car, Year: e.target.value})  )

    const handleCompanyName = (e) =>
        setCar(c => ({...car, CompanyName: e.target.value})  )





  return (
    <div>

        
        <p>    
            My favorite car is : {car.Carname}<br />
            Year of release: {car.Year} <br />
            Company Name : {car.CompanyName}
        </p>

        <input type="text" value = {car.Carname} onChange={handleCarNameChange}/>
        <br />
        <input type="number" value = {car.Year} onChange={handleYearChange} />
        <br />
        <input type="text" value = {car.CompanyName} onChange={handleCompanyName}/>

      
    </div>
  )
}

export default Updater
