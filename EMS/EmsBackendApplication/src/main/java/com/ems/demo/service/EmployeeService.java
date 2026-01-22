package com.ems.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


import com.ems.demo.entity.Employee;
import com.ems.demo.repo.EmployeeRepo;

@Service
public class EmployeeService {
	
	@Autowired
	EmployeeRepo erepo;
	
	 public Employee getEmployee(int id) {
	        return erepo.findById(id)
	                .orElseThrow(() -> new RuntimeException("Employee not found"));
	    }
	 
	 public List<Employee> getAllEmployee()
	 {
		 return  erepo.findAll();
		
	 }
	 
	 public Employee saveEmployee(@RequestBody Employee e )
	 {
		return erepo.save(e);
		 
	 }

	 public Employee updateEmployee(int id, Employee newEmp) {

	        Employee existingEmp = erepo.findById(id)
	                .orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));

	        existingEmp.setName(newEmp.getName());
	        existingEmp.setMob(newEmp.getMob());
	        existingEmp.setEmail(newEmp.getEmail());

	        return erepo.save(existingEmp);
	    }

	 
	  public String deleteByid(@PathVariable("id") int id)
	  {
	        erepo.deleteById(id);
	        return "Record Deleted Sucessfullyyyyy.....!";
	  }

	  
}
