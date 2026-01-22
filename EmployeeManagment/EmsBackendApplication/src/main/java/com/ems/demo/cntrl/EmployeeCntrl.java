package com.ems.demo.cntrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ems.demo.entity.Employee;

import com.ems.demo.service.EmployeeService;


@RestController
@RequestMapping("/api/employees")
public class EmployeeCntrl {
	
	
	 @Autowired
	 EmployeeService employeeService;

	    @GetMapping("elementById/{id}")
	    public Employee getEmployeeById(@PathVariable("id") int id) {
	        return employeeService.getEmployee(id);
	    }
	
	    @GetMapping("allemp")
	    public List<Employee> getAllEmp()
	    {
			return employeeService.getAllEmployee();
	    	
	    }
	    
	    @PostMapping("save")
	    public Employee saveEmployee(@RequestBody Employee e)
	    {
	    	return employeeService.saveEmployee(e);
	    }
		
	    @PutMapping("/updt/{id}")
	    public ResponseEntity<Employee> updateEmployee(
	            @PathVariable ("id")int id,
	            @RequestBody Employee emp) {

	        Employee updatedEmp = employeeService.updateEmployee(id, emp);
	        return ResponseEntity.ok(updatedEmp);
	    }

	    @DeleteMapping("delt/{id}")
	    public String deleteByID(@PathVariable ("id") int id)
	    {
			return employeeService.deleteByid(id);
	    	
	    }
	    

}
