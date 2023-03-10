package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Address;
import com.example.demo.Service.service;

@RestController
@CrossOrigin
public class ApiController {
	@Autowired
	private service sa;


	@GetMapping("/get") public List<Address> getDetails() {
		return sa.getAllDetails();
	}

//	@GetMapping("/show/{id}")
//	public List<Address> getdetails(@PathVariable int id) {
//		return sa.findId(id);
//	}

	@PostMapping("/add")
	public Address addDetails(@RequestBody Address s) {
		return sa.addDetails(s);
	}

	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable int id) {
		sa.deleteDepartmentById(id);
	}

	@PutMapping("/update/{id}")
	public Address update(@PathVariable int id, @RequestBody Address e) {
		return sa.update(id, e);
//	}
//	@PutMapping("/up/{add}/{id}")
//	public Address UpdateNow(@RequestBody Address add,@PathVariable long id) {
//		 return sa.Update(add,id);	 
//	}
	}}
