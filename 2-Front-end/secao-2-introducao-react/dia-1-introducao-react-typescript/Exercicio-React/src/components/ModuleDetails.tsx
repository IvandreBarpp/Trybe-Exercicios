import React from 'react';

export default function ModuleDetails() {
  const modules = ['✅ Fundamentos', '⏳ Front-End', '⏳ Back-End'];
  return (
    <>
      <p>{modules[0]}</p>
      <p>{modules[1]}</p>
    </>
  );
}
