import React, { useRef } from 'react';

const Attendances = () => {
  const attendances = [
    {
      date: '01/10/2024',
      events: [{ time: '08:30', type: 'Consulta', doctor: 'Dra. Fabiana Almeida' }],
    },
    {
      date: '30/09/2024',
      events: [
        { time: '10:30', type: 'Consulta', doctor: 'Dra. Fabiana Almeida' },
        { time: '11:00', type: 'Vacinação', doctor: 'Dra. Jaqueline Campos' },
        { time: '13:30', type: 'Castração', doctor: 'Dr. Kleber Duarte' },
      ],
    },
    {
      date: '29/09/2024',
      events: [],
    },
    {
      date: '28/09/2024',
      events: [{ time: '14:00', type: 'Consulta', doctor: 'Dr. Pedro Silva' }],
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex-1 m-2 relative">
      <h2 className="text-xl font-semibold mb-2">Atendimentos</h2>
      <div className="border-t border-customGreen my-2"></div>
      <input
        type="text"
        placeholder="Pesquisar"
        className="w-full p-2 border rounded mb-4"
      />
      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-700 text-xl w-8 h-8 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-400 z-10"
        >
          <i className="fa-solid fa-angle-left" style={{ color: "#000000" }}></i>
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-700 text-xl w-8 h-8 flex items-center justify-center rounded-full shadow-lg hover:bg-gray-400 z-10"
        >
          <i className="fa-solid fa-angle-right" style={{ color: "#000000" }}></i>
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden overflow-hidden"
        >
          {attendances.map((attendance, index) => (
            <div
              key={index}
              className={`border rounded-lg shadow-sm bg-gray-50 p-4 flex-shrink-0 ${
                attendances.length === 1
                  ? 'w-full'
                  : attendances.length === 2
                  ? 'w-1/2'
                  : 'w-1/3'
              }`}
            >
              <h3
                className={`font-semibold mb-2 text-center ${
                  attendance.events.length ? 'text-yellow-600' : 'text-gray-400'
                }`}
              >
                <span
                  className="inline-block px-4 py-2 rounded-full text-[#464646]"
                  style={{ backgroundColor: '#FDF9D7' }}
                >
                  {attendance.date}
                </span>
              </h3>
              {attendance.events.length > 0 ? (
                attendance.events.map((event, idx) => (
                  <div
                    key={idx}
                    className="border-b border-gray-300 pb-2 mb-2 flex justify-between items-center"
                  >
                    <span className="text-lg font-medium">{event.time} - {event.type}</span>
                    <p className="text-sm text-gray-500">{event.doctor}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500 text-center">
                  Não houve nenhum atendimento nessa data.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute bottom-4 right-12 bg-white text-customGreen border w-12 h-12 flex items-center justify-center rounded-full shadow-lg hover:bg-customGreen hover:text-white transition-all text-xl"
      >
        <i className="fa-solid fa-plus" style={{ color: "#000000" }}></i>
      </button>
    </div>
  );
};

export default Attendances;
