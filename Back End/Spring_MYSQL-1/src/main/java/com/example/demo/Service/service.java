package com.example.demo.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.Address;
import com.example.demo.repo.repo;


@Service
public class service {
	@Autowired
	public repo r;
	
	public List<Address> getAllDetails ()
	{
		List<Address> arr= new ArrayList<> () ;
		arr= r.findAll();
		return arr;
	}
//	public List<Address> findID(Long id){
//		List<Address> c=r.find(id);
//		List<Address> c= new ArrayList<> () ;
//		c=r.find(id);
//		return c;
//	}
	public Address addDetails(Address s)
	{
		return r.saveAndFlush(s);
		
		
	}
	public void deleteDepartmentById(int id)
	{
		r.deleteById(id);
	}
	
	public Address update(int id,Address e) {
		return r.saveAndFlush(e);
	}
//	public Address Update(Address add ,long id) {
//		return r.updatequery(add,id);
//	}
}
