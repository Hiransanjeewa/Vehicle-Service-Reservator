package com.vehicleservicereservator.VehicleService.Controllers;



import com.vehicleservicereservator.VehicleService.Dtos.DeleteReservationDto;
import com.vehicleservicereservator.VehicleService.Dtos.Email;
import com.vehicleservicereservator.VehicleService.Dtos.Reservation;
import com.vehicleservicereservator.VehicleService.ReservationService.ReservationService;

import org.springframework.beans.factory.annotation.Autowired;

import com.vehicleservicereservator.VehicleService.VehicleService;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


import java.text.ParseException;
import java.util.List;

@RestController
@CrossOrigin
public class AppController {

//    @GetMapping("/auth/callback")
//    public String handleAuthCallback(@AuthenticationPrincipal OidcUser oidcUser) {
//        // Access the JWT token from the authenticated user object
//        String jwtToken = oidcUser.getIdToken().getTokenValue();
//
//        // You can do additional processing here if needed
//
//        // Return the JWT token to the frontend
//        return jwtToken;
//    }



//    @GetMapping("/")
//    public String currentUserName(Model model, Authentication authentication) {
//        DefaultOidcUser userDetails = (DefaultOidcUser) authentication.getPrincipal();
//        model.addAttribute("userName", userDetails.getName());
//        model.addAttribute("IDTokenClaims", userDetails);
//        return "home";
//    }

    @GetMapping("/user")
    public String user(Model model,
                       @AuthenticationPrincipal OidcUser oidcUser) {
        model.addAttribute("userName", oidcUser.getName());
        model.addAttribute("audience", oidcUser.getAudience());
        return "user";
    }


    @Autowired
    private ReservationService reservationService;


    @GetMapping("/hello")
    public String getWelcome (){
        System.out.println("Triggered");
        return "Hello";
    }

    @PostMapping("/get-reservations")
    @ResponseBody
    public List<VehicleService> getReservations(@RequestBody Email email, @RequestHeader("Authorization") String authorizationHeader)


    {

        // Token Testing

        String token = authorizationHeader.substring("Bearer ".length());

        System.out.println(token);


        // End of  Token Testing

          System.out.println(email.getEmail());
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
