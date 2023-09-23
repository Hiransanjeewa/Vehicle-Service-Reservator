package com.vehicleservicereservator.VehicleService.Controllers;



import com.vehicleservicereservator.VehicleService.Dtos.DeleteReservationDto;
import com.vehicleservicereservator.VehicleService.Dtos.Email;
import com.vehicleservicereservator.VehicleService.Dtos.Reservation;
import com.vehicleservicereservator.VehicleService.ReservationService.ReservationService;

import org.springframework.beans.factory.annotation.Autowired;

import com.vehicleservicereservator.VehicleService.VehicleService;

import org.springframework.web.bind.annotation.*;


import java.text.ParseException;
import java.util.List;

@RestController
@CrossOrigin
public class AppController {


    @Autowired
    private ReservationService reservationService;



    @PostMapping("/get-reservations")
    @ResponseBody
    public List<VehicleService> getReservations(@RequestBody Email email, @RequestHeader("Authorization") String authorizationHeader)


    {

        // Token Testing

        String token = authorizationHeader.substring("Bearer ".length());

        System.out.println(token);

        // End of  Token Testing

      //  System.out.println(email.getEmail());
           return  reservationService.getReservations(email.getEmail());
    }

    @PostMapping("/add-reservation")
    @ResponseBody
    public String addReservation(@RequestBody Reservation reservation) throws ParseException {

        //  System.out.println(email.getEmail());
        return  reservationService.addReservations(reservation);
//        System.out.println(vehicleService.getTime());
//        return "Success";
    }

    @PostMapping ("/delete-reservation")
    @ResponseBody
    public String deleteReservation(@RequestBody DeleteReservationDto deleteReservationDto){

        //  System.out.println(email.getEmail());
        return reservationService.deleteReservations(deleteReservationDto.getBook_id()) ;
    }


}
