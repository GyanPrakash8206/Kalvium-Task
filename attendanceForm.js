// AttendanceForm.js
import React, { useState } from 'react';

function AttendanceForm() {
  const [employeeName, setEmployeeName] = useState('');
  const [attendanceDate, setAttendanceDate] = useState('');
  const [attendanceRecord, setAttendanceRecord] = useState([]);

  const handleNameChange = (e) => {
    setEmployeeName(e.target.value);
  };

  const handleDateChange = (e) => {
    setAttendanceDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeName && attendanceDate) {
      // Save the attendance record (you'd normally send it to the backend here)
      setAttendanceRecord([...attendanceRecord, { name: employeeName, date: attendanceDate }]);
      // Clear the input fields
      setEmployeeName('');
      setAttendanceDate('');
    }
  };

  return (
    <div>
      <h2>Employee Attendance Record</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Employee Name:
          <input type="text" value={employeeName} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Attendance Date:
          <input type="date" value={attendanceDate} onChange={handleDateChange} />
        </label>
        <br />
        <button type="submit">Record Attendance</button>
      </form>
      <h3>Attendance Records:</h3>
      <ul>
        {attendanceRecord.map((record, index) => (
          <li key={index}>
            Employee: {record.name}, Date: {record.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttendanceForm;
