package com.vehicleservicereservator.VehicleService;


import jakarta.persistence.*;
//import org.attoparser.dom.Text;

import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "VehicleService")
public class VehicleService {

    @Id
    @Column(name = "booking_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int book_id;

    @Column(name = "name",length = 255,nullable = false)
    private String name;

    @Column(name = "email",length = 255,nullable = false)
    private String email;

    @Column(name = "phone",length = 255,nullable = false)
    private String phone;

    @Column(name = "date")
    private Date date;

    @Column(name = "time")
    private Time time;

    @Column(name = "location",length = 255,nullable = false)
    private String location;

    @Column(name = "vehicle_no",length = 255,nullable = false)
    private String vehicle_no;

    @Column(name = "mileage",nullable = false)
    private int mileage;


    @Column(name = "message" ,columnDefinition = "text",nullable = true)
    private String message;


    public VehicleService() {
    }

    public VehicleService(int book_id, String name, String email, String phone, Date date, Time time, String location, String vehicle_no, int mileage, String message) {
        this.book_id = book_id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.date = date;
        this.time = time;
        this.location = location;
        this.vehicle_no = vehicle_no;
        this.mileage = mileage;
        this.message = message;
    }

    public int getBook_id() {
        return book_id;
    }

    public void setBook_id(int book_id) {
        this.book_id = book_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getTime() {
        return time;
    }

    public void setTime(Time time) {
        this.time = time;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getVehicle_no() {
        return vehicle_no;
    }

    public void setVehicle_no(String vehicle_no) {
        this.vehicle_no = vehicle_no;
    }

    public int getMileage() {
        return mileage;
    }

    public void setMileage(int mileage) {
        this.mileage = mileage;
    }

    public String getMessage() {
        return message;
    }

    public void setText(String message) {
        this.message = message;
    }
}
