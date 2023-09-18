package com.vehicleservicereservator.VehicleService.Controllers;



import com.vehicleservicereservator.VehicleService.Dtos.Email;
import com.vehicleservicereservator.VehicleService.Dtos.Reservation;
import com.vehicleservicereservator.VehicleService.ReservationService.ReservationService;
import com.vehicleservicereservator.VehicleService.ReservationService.ReservationServiceImpl;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import com.vehicleservicereservator.VehicleService.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController
public class AppController {


    @Autowired
    private ReservationService reservationService;

//    @GetMapping("/")
//    public String currentUserName(Model model, Authentication authentication) {
//        DefaultOidcUser userDetails = (DefaultOidcUser) authentication.getPrincipal();
//        model.addAttribute("userName", userDetails.getName());
//        model.addAttribute("IDTokenClaims", userDetails);
//        return "home";
//    }

    @PostMapping("/get-reservations")
    @ResponseBody
    public List<VehicleService> getReservations(@RequestBody Email email){

      //  System.out.println(email.getEmail());
           return  reservationService.getReservations(email.getEmail());
    }

    @PostMapping("/add-reservation")
    @ResponseBody
    public String addReservation(@RequestBody VehicleService vehicleService) throws ParseException {

        //  System.out.println(email.getEmail());
        return  reservationService.addReservations(vehicleService);
    }

    @DeleteMapping("/delete-reservation")
    @ResponseBody
    public String deleteReservation(@RequestBody int book_id){

        //  System.out.println(email.getEmail());


        return reservationService.deleteReservations(book_id) ;
    }


}
