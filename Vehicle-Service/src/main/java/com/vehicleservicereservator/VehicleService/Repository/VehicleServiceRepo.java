package com.vehicleservicereservator.VehicleService.Repository;

import com.vehicleservicereservator.VehicleService.Dtos.Reservation;

import com.vehicleservicereservator.VehicleService.VehicleService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;



@EnableJpaRepositories
@Repository
public interface VehicleServiceRepo extends JpaRepository<VehicleService, Integer> {

    @Query(value="select * from vehicle_service where email=:email", nativeQuery=true)
    List<VehicleService> getAllReservations(String email);
}
