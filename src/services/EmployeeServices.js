import axios from "axios";
const Rest_API_BASE_URL = 'http://localhost:8080/api/employees';

export const listEmployee = () => axios.get(Rest_API_BASE_URL);

export const createEmployee = (employee) => axios.post(Rest_API_BASE_URL, employee);

export const getEmployee = (employeeId) => axios.get(Rest_API_BASE_URL + '/' + employeeId);

export const updateEmployee =(employeeId, employee) => axios.put(Rest_API_BASE_URL + '/' + employeeId,employee);

export const deleteEmployee = (employeeId, employee) => axios.delete(Rest_API_BASE_URL + '/'+ employeeId);
