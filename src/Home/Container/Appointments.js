import React from 'react';

const Appointments = () => {
  // Dados fictícios, substituir por dados da API
  const appointments = [
    { time: '14:30', type: 'Consulta', doctor: 'Dra. Fabiana Almeida', date: '19/10/2024' },
    { time: '15:00', type: 'Vacinação', doctor: 'Dr. Jurandir Miranda', date: '14/12/2024' },
    { time: '13:00', type: 'Castração', doctor: 'Dr. Rodrigo Faro', date: '10/12/2024' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex-1 m-2">
      <h2 className="text-xl font-semibold mb-2">Agendamentos</h2>
      <div className="border-t border-customGreen my-2"></div>
      <input type="text" placeholder="Search" className="w-full p-2 border rounded mb-4" />
      <ul className="space-y-4">
        {appointments.map((appt, index) => (
          <li
            key={index}
            className="flex justify-between items-center border p-4 rounded shadow-sm bg-gray-50"
          >
            <div>
              <span className="block text-lg font-medium">{appt.time} - {appt.type}</span>
              <p className="text-sm text-gray-500 mt-1">{appt.doctor}</p>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-sm text-gray-700">{appt.date}</p>
              <div className="flex gap-2">
                <i className="fa-solid fa-pen-to-square text-black cursor-pointer"></i>
                <i className="fa-solid fa-circle-info text-black cursor-pointer"></i>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
