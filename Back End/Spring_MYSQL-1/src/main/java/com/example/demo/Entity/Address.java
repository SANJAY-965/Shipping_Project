package com.example.demo.Entity;
import jakarta.persistence.Id; 
import jakarta.persistence.Entity;

//import jakarta.persistence.Column;

//package com.example.demo.entity;

//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.OneToOne;

@Entity
public class Address {
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	@Column(name = "address_id")
	@Id
	private int Reference_Id;
	
	private String Customer_Name;
	private String From_Address;
	private String To_Address;
	private String Product;
	private Long Contact_Number;
	private int Cost;
	public int getReference_Id() {
		return Reference_Id;
	}
	public String getCustomer_Name() {
		return Customer_Name;
	}
	public String getFrom_Address() {
		return From_Address;
	}
	public String getTo_Address() {
		return To_Address;
	}
	public String getProduct() {
		return Product;
	}
	public Long getContact_Number() {
		return Contact_Number;
	}
	public int getCost() {
		return Cost;
	}
	public void setReference_Id(int reference_Id) {
		Reference_Id = reference_Id;
	}
	public void setCustomer_Name(String customer_Name) {
		Customer_Name = customer_Name;
	}
	public void setFrom_Address(String from_Address) {
		From_Address = from_Address;
	}
	public void setTo_Address(String to_Address) {
		To_Address = to_Address;
	}
	public void setProduct(String product) {
		Product = product;
	}
	public void setContact_Number(Long contact_Number) {
		Contact_Number = contact_Number;
	}
	public void setCost(int cost) {
		Cost = cost;
	}
	public Address(int reference_Id, String customer_Name, String from_Address, String to_Address, String product,
			Long contact_Number, int cost) {
		super();
		Reference_Id = reference_Id;
		Customer_Name = customer_Name;
		From_Address = from_Address;
		To_Address = to_Address;
		Product = product;
		Contact_Number = contact_Number;
		Cost = cost;
	}
	public Address () {
		;
	}


//	@OneToOne(mappedBy = "address")
//	private Student student;
//	
//	@Override
//	public String toString() {
//		return "[ " + id + " " + city + " " + pincode + " ]";
//	}
}