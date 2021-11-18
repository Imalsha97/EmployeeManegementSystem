import axios from "axios";

const BASE_URL = "http://localhost:5000/departure";
class DepartureService {

    getEmployees(){
        return axios.get(BASE_URL);
    }
    // createEmployee(employee){
    //     return axios.post(EMPLOYEE_BASE_URL,employee);
    // }
    // getEmployeeById(employeeId){
    //     return axios.get(EMPLOYEE_BASE_URL + '/' +employeeId);
    // }
    // updateEmployee(employee, employeeId){
    //     return axios.put(EMPLOYEE_BASE_URL + '/' +employeeId,employee);
    // }

}

//export as a EmployeeService object
export default new DepartureService()