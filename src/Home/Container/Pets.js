import React from 'react';

const Pets = () => {
  const pets = [
    { name: 'Belinha', species: 'Calopsita', gender: 'Fêmea' },
    { name: 'Cláudio', species: 'Cachorro', gender: 'Macho' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex-1 m-2">
      <h2 className="text-xl font-semibold mb-2">Pets</h2>
      <div className="border-t border-customGreen my-2"></div>
      <input type="text" placeholder="Search" className="w-full p-2 border rounded mb-4" />
      <ul>
        {pets.map((pet, index) => (
          <li key={index} className="flex justify-between items-center mb-3">
            <span>{pet.name}</span>
            <p>{pet.species} - {pet.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pets;

