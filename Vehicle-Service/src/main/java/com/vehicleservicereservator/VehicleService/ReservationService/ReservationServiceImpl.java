package com.vehicleservicereservator.VehicleService.ReservationService;

import com.vehicleservicereservator.VehicleService.Repository.VehicleServiceRepo;
import com.vehicleservicereservator.VehicleService.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.List;


@Service
public class ReservationServiceImpl implements ReservationService{

    @Autowired
    private VehicleServiceRepo vehicleServiceRepo;

    @Override
    public List<VehicleService> getReservations(String email) {
       // System.out.println(email);
       return vehicleServiceRepo.getAllReservations(email);
       // return null;
    }

    @Override
    public String addReservations(VehicleService vehicleService)  {
        System.out.println(vehicleService.getDate());
        System.out.println(vehicleService.getTime());

        DateValidator dateValidator = new DateValidator();
        if (dateValidator.isDateTodayOrFuture(vehicleService.getDate(),vehicleService.getTime())){
            if (vehicleServiceRepo.checkReservations(vehicleService.getVehicle_no())==0){
                vehicleServiceRepo.save(vehicleService);
                return "success";
            }else {
                return "You have a reservation for this vehicle already";
            }
        }else {
            return "Please add future date";
        }


        // Add email, name , phone
        // Add logic for availabitity


    }

    @Override
    public String deleteReservations(int book_id) {


       return vehicleServiceRepo.deleteReservation(book_id);
    }
}
