package com.vehicleservicereservator.VehicleService.Repository;

import com.vehicleservicereservator.VehicleService.VehicleService;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;



@EnableJpaRepositories
@Repository
public interface VehicleServiceRepo extends JpaRepository<VehicleService, Integer> {

    @Query(value="select * from vehicle_service where email=:email", nativeQuery=true)
    List<VehicleService> getAllReservations(String email);


    @Transactional
    @Modifying
    @Query(value="DELETE FROM vehicle_service WHERE booking_id=:book_id", nativeQuery=true)
    void deleteReservation(@Param("book_id") int book_id);

    @Query(value="select * from vehicle_service where booking_id=:book_id", nativeQuery=true)
    VehicleService getReservationByID(int book_id);


    @Query(value="SELECT * \n" +
            "    FROM vehicle_service\n" +
            "    WHERE vehicle_no = :vehicle_no\n" +
            "    ORDER BY date DESC\n" +
            "    LIMIT 1;", nativeQuery=true)
    VehicleService getlatestReservation(String vehicle_no);

}
