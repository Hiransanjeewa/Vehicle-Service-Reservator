package com.vehicleservicereservator.VehicleService.Dtos;

import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class Reservation {

    public static Time convertStringToTime(String timeString) throws ParseException {
            SimpleDateFormat dateFormat = new SimpleDateFormat("hh a");
            Date date = dateFormat.parse(timeString);
            return new Time(date.getTime());

    }


    private int book_id;
    private String name;
    private String email;
    private Date date;
    private String time;
    private Long phone;
    private String vehicle_no;
    private int mileage;
    private String message;
    private String location;


    public Reservation() {
    }

    public Reservation(int book_id, String name, String email, Date date, String time, Long phone, String vehicle_no, int mileage, String message, String location) {
        this.book_id = book_id;
        this.name = name;
        this.email = email;
        this.date = date;
        this.time = time;
        this.phone = phone;
        this.vehicle_no = vehicle_no;
        this.mileage = mileage;
        this.message = message;
        this.location = location;
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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
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
}
