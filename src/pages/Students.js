import React, { useState, useEffect } from 'react';
import { fetchStudents, addStudent } from '../api';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', major: '' });

  useEffect(() => {
    fetchStudents()
      .then((response) => setStudents(response.data))
      .catch((error) => console.error('Error fetching students:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(form).then(() => {
      setForm({ name: '', email: '', major: '' });
      fetchStudents().then((response) => setStudents(response.data));
    });
  };

  return (
    <div>
      <h2>Students</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Major"
          value={form.major}
          onChange={(e) => setForm({ ...form, major: e.target.value })}
          required
        />
        <button type="submit">Add Student</button>
      </form>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} - {student.email} ({student.major})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
