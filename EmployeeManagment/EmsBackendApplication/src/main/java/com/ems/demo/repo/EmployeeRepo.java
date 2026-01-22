package com.ems.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ems.demo.entity.Employee;

public interface EmployeeRepo extends JpaRepository<Employee,Integer>{
	
	

}
