import React from 'react';
import Person from './Person';

const Namelist = () => {
    const persons = [
        {
            id: 1,
            name: 'bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'donex',
            age: 22,
            skill: 'flutter'
        }
    ];

    return (
        <div>
            {persons.map((person) => (
                <Person key={person.id} person={person}/>
            ))}
        </div>
    );
};

export default Namelist;
