import React from 'react';
import Title from './Title';
import ModuleDetails from './ModuleDetails';
import calculateAge from '../utils/age';

export default function HelloWolrd() {
  const name = 'Ivandré Barpp';
  const birth = '24/02/1999';
  const age = calculateAge(birth);

  return (
    <div>
      <h1 style={ { color: 'green', textAlign: 'center' } }>{name}</h1>
      <p>{`Age ${age}`}</p>
      <Title />
      <ModuleDetails />
    </div>
  );
}
