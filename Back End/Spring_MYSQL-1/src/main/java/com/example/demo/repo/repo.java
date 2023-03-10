package com.example.demo .repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.demo.Entity.Address;
public interface repo extends JpaRepository<Address, Integer> {

	void deleteById(int id);
//	@Query(value = "SELECT * FROM Address u WHERE u.id =:id", nativeQuery = true)
//	public List<Address> find(@Param("id") Long id);
//	@Modifying 
//	@Query("Update Address a set a.address=:add where a.id=:id")
//	public Address updatequery(@Param("add")Address add ,@Param("id")long id);
	
}
