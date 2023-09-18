package com.vehicleservicereservator.VehicleService.Repository;

import com.vehicleservicereservator.VehicleService.Dtos.Reservation;

import com.vehicleservicereservator.VehicleService.VehicleService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.sql.Time;
import java.util.Date;
import java.util.List;



@EnableJpaRepositories
@Repository
public interface VehicleServiceRepo extends JpaRepository<VehicleService, Integer> {

    @Query(value="select * from vehicle_service where email=:email", nativeQuery=true)
    List<VehicleService> getAllReservations(String email);

    @Query(value="delete * from vehicle_service where book_id=:book_id", nativeQuery=true)
    String deleteReservation(int book_id);

    @Query(value="SELECT COUNT(*) > 0 AS has_upcoming_reservation\n" +
            "FROM vehicle_service\n" +
            "WHERE vehicle_no =:vehicle_no\n" +
            "  AND date > CURRENT_DATE\n" +
            "  AND (\n" +
            "    date = CURRENT_DATE\n" +
            "    AND time > CURRENT_TIME\n" +
            "    OR date > CURRENT_DATE\n" +
            "  ); ", nativeQuery=true)
    int checkReservations(String vehicle_no);

}
