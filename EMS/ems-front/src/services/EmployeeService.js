import axios from 'axios';

const REST_API_BASE_URL='http://localhost:8080/api/employees/allemp';
const ADD_EMPLOYEE_API='http://localhost:8080/api/employees/save';
const GET_API='http://localhost:8080/api/employees/elementById';


export const listEmployees=()=>{
    return axios.get(REST_API_BASE_URL);
}

export const createEmployee=(employee)=>{
   return axios.post(ADD_EMPLOYEE_API,employee)
}

export const getEmployee = (employeeId) => {
    return axios.get(`${GET_API}/${employeeId}`);
};
export const updateEmployee = (id, employee) => {
  return axios.put(`http://localhost:8080/api/employees/updt/${id}`, employee);
};
export const deleteEmployee= (id) => {
  return axios.delete(`http://localhost:8080/api/employees/delt/${id}`);
};