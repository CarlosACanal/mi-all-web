import React from 'react';

const Reports = () => {
  const reports = [
    { title: 'Cadastro de vacinação', doctor: 'Dr. Kleber Duarte', date: '30/09/2024' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex-1 m-2">
      <h2 className="text-xl font-semibold mb-2">Relatórios</h2>
      <div className="border-t border-customGreen my-2"></div>
      <input type="text" placeholder="Search" className="w-full p-2 border rounded mb-4" />
      <ul className="space-y-4">
        {reports.map((report, index) => (
          <li
            key={index}
            className="flex justify-between items-center border p-4 rounded shadow-sm bg-gray-50"
          >
            <div>
              <span className="block text-lg font-medium">{report.title}</span>
              <p className="text-sm text-gray-500 mt-1">
                {report.doctor} - {report.date}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
