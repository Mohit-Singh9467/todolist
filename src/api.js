import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// API Endpoints
export const fetchStudents = () => API.get('/students');
export const fetchProjects = () => API.get('/projects');
export const addStudent = (student) => API.post('/students', student);
export const addProject = (project) => API.post('/projects', project);
