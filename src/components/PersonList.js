import React from 'react'

export default function PersonList() {
     const persons = [
        {
            id:1,
            name:'Anish',
            age:24
        },
        {
            id:2,
            name:'Ashish',
            age:25
        },
        {
            id:3,
            name:'Uttam',
            age :30
        },
        {
            id:4,
            name:'Bibek',
            age:20
        }

    ]
    return (
        <div>
            <h2>Person List</h2>
            <ul>
                {persons.map((person)=>{
                  return <li key = {person.id}>I am {person.name}, and I am {person.age} years old</li>

                })}
            </ul>
        </div>
    )
}
