package com.vehicleservicereservator.VehicleService.Dtos;

import java.util.List;

public class Reservation {

    private int booking_id;
    private String name;
    private String email;
    private int phone;
    private String vehicle_no;
    private int mileage;
    private String message;
    private String location;


    public Reservation() {
    }

    public int getBooking_id() {
        return booking_id;
    }

    public void setBooking_id(int booking_id) {
        this.booking_id = booking_id;
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

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
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

    public void setMessage(String message) {
        this.message = message;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Reservation(int booking_id, String name, String email, int phone, String vehicle_no, int mileage, String message, String location, List<Integer> date, List<Integer> time) {
        this.booking_id = booking_id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.vehicle_no = vehicle_no;
        this.mileage = mileage;
        this.message = message;
        this.location = location;
        this.date = date;
        this.time = time;
    }




    private List<Integer> date;
    private List<Integer> time;


}
