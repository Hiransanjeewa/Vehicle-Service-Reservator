package com.vehicleservicereservator.VehicleService.ReservationService;

import com.vehicleservicereservator.VehicleService.Dtos.Reservation;
import com.vehicleservicereservator.VehicleService.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.List;


public interface ReservationService {

    List<VehicleService> getReservations (String email);

    String addReservations(VehicleService vehicleService) throws ParseException;

    String deleteReservations(int book_id);
}
