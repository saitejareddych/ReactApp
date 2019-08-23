import React from 'react'
import PersonList from './PersonList'
function Namelist(){
    const Person = [{
            Name: 'Sai',
            Age: '23'},
        {
            Name: 'Teja',
            Age: '24'},
        {
            Name: 'Chinthareddy',
            Age: '25'
        }
    ]

    const Data= Person.map(Person => <PersonList Person1={Person}></PersonList>)
    return(<div>{Data}</div>)
}

export default Namelist