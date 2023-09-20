package com.vehicleservicereservator.VehicleService.ReservationService;

import com.vehicleservicereservator.VehicleService.Dtos.Reservation;
import com.vehicleservicereservator.VehicleService.Repository.VehicleServiceRepo;
import com.vehicleservicereservator.VehicleService.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Time;
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
    public String addReservations(Reservation reservation) throws ParseException {

        VehicleService vehicleService = new VehicleService ();

        vehicleService.setName(reservation.getName());
        vehicleService.setEmail(reservation.getEmail());
        vehicleService.setVehicle_no(reservation.getVehicle_no());
        vehicleService.setMessage(reservation.getMessage());
        vehicleService.setLocation(reservation.getLocation());
        vehicleService.setMileage(reservation.getMileage());
        vehicleService.setDate(reservation.getDate());


        String phoneAsString = Long.toString(reservation.getPhone());
        vehicleService.setPhone(phoneAsString);

        if ((reservation.getTime() == "10 AM")||(reservation.getTime() == "11 AM")||(reservation.getTime() == "12 PM")) {
            // Convert the string time to Time type
            Time convertedTime = Reservation.convertStringToTime(reservation.getTime());
            //  System.out.println(convertedTime);
            vehicleService.setTime(convertedTime);
        }else {
            return " Please select a time from a given time options";
        }








        DateValidator dateValidator = new DateValidator();

//        System.out.println(vehicleService.getDate());
//        System.out.println(vehicleService.getTime());

        if (dateValidator.isDateTodayOrFuture(vehicleService.getDate(),vehicleService.getTime())){

            if (vehicleServiceRepo.getlatestReservation(vehicleService.getVehicle_no())!=null){
                VehicleService vehicleService1 = vehicleServiceRepo.getlatestReservation(vehicleService.getVehicle_no());

//                System.out.println(vehicleService1.getDate());
//                System.out.println(vehicleService1.getTime());
//               System.out.println(dateValidator.isDateTodayOrFuture(vehicleService1.getDate(), vehicleService1.getTime()));
                if (!dateValidator.isDateTodayOrFuture(vehicleService1.getDate(), vehicleService1.getTime())) {
                    System.out.println("Saving1");
                    vehicleServiceRepo.save(vehicleService);
                    return "success";
                } else {
                    return "You have a reservation for this vehicle already";
                }
            }
         //   System.out.println(vehicleService1);

             else {
                System.out.println("Saving1");
                vehicleServiceRepo.save(vehicleService);
                return "success";
            }

        }else {
            return "Please add future date";
        }

        // Add email, name , phone
        // Add logic for availabitity

    }

    @Override
    public String deleteReservations(int book_id) {

        VehicleService vehicleService= vehicleServiceRepo.getReservationByID(book_id);
        DateValidator dateValidator = new DateValidator();
        if (dateValidator.isDateTodayOrFuture(vehicleService.getDate(),vehicleService.getTime())) {
            return vehicleServiceRepo.deleteReservation(book_id);
        }else {
            return "Cannot delete past reservations";
        }
    }
}
