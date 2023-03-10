//package com.example.demo.Entity;
//
//import jakarta.persistence.CascadeType;
//import jakarta.persistence.Column;
//import jakarta.persistence.Entity;
//import jakarta.persistence.Id;
//import jakarta.persistence.JoinColumn;
//import jakarta.persistence.OneToOne;
//import jakarta.persistence.Table;
//
//@Entity
//@Table(name = "student_details")
//public class Student {
//	
//		@Id
//		@Column(name = "stud_id")
//		private Long id;
//		
//		@Column(name = "stud_name")
//		private String name;
//		
//		@Column(name = "stud_age")
//		private int age;
//		
//		@OneToOne(cascade = CascadeType.ALL)
//		@JoinColumn(name = "fk_dept_id", 
//					referencedColumnName = "address_id")
//		private Address address;
//		
//		public Long getId() {
//			return id;
//		}
//			
//		public String getName() {
//			return name;
//		}
//		public int getAge() {
//			return age;
//		}
//
//		public void setId(Long id) {
//			this.id = id;
//			
//			
//		}
//
//		public void setName(String name) {
//			this.name = name;
//		}
//
//		public void setAge(int age) {
//			this.age = age;
//		}
//
//		public Student(Long id, String name, int age) {
//			super();
//			this.id = id;
//			this.name = name;
//			this.age = age;
//		}
//
//		public Student() {
//			// TODO Auto-generated constructor stub
//		}
//
//		public Address getAddress() {
//			return address;
//		}
//
//		public void setAddress(Address address) {
//			this.address = address;
//		}
//		
//		@Override
//		public String toString() {
//			return id + " " + name + " " + age + " " + address;
//		}
//		
//}
