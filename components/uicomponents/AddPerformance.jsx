import React from "react";

const AddPerformance = ({closeModal}) => {
  // Dummy data for student performance
  const studentData = [
    {
      studentName: "Alice Johnson",
      matricNo: "54321",
      performance: [
        { subject: "Mathematics", score: 74, grade: "B", remarks: "Good" },
        { subject: "English", score: 88, grade: "A", remarks: "Very Good" },
        { subject: "Biology", score: 95, grade: "A", remarks: "Outstanding" },
      ],
    },
  ];

  return (
    <div className=" px-10">
    <button onClick={closeModal} className=" text-red-400"> x</button>
      <h1 className="text-2xl font-bold mb-6">Student Performance</h1>
      {studentData.map((student, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-2">
            {student.studentName} (Matric No: {student.matricNo})
          </h2>
          <table className="w-full text-left table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Subject</th>
                <th className="px-4 py-2">Score</th>
                <th className="px-4 py-2">Grade</th>
                <th className="px-4 py-2">Remarks</th>
              </tr>
            </thead>
            <tbody>
              {student.performance.map((perf, i) => (
                <tr key={i} className="border-b">
                  <td className="px-4 py-2">{perf.subject}</td>
                  <td className="px-4 py-2">{perf.score}</td>
                  <td className="px-4 py-2">{perf.grade}</td>
                  <td className="px-4 py-2">{perf.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default AddPerformance;
