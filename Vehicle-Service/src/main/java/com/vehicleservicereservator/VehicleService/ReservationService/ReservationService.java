package com.vehicleservicereservator.VehicleService.ReservationService;

import com.vehicleservicereservator.VehicleService.Dtos.Reservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ReservationService {



    List<Reservation> getReservations (String email);

}
