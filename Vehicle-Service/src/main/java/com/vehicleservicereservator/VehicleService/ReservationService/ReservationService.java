package com.vehicleservicereservator.VehicleService.ReservationService;

import com.vehicleservicereservator.VehicleService.Dtos.Reservation;

import java.util.List;

public interface ReservationService {
    List<Reservation> getReservations (String email);

}
