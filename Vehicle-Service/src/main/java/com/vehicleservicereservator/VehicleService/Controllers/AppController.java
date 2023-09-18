package com.vehicleservicereservator.VehicleService.Controllers;



import com.vehicleservicereservator.VehicleService.Dtos.Reservation;
import com.vehicleservicereservator.VehicleService.ReservationService.ReservationService;
import com.vehicleservicereservator.VehicleService.ReservationService.ReservationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class AppController {


   // @Autowired
    private ReservationService reservationService = new ReservationServiceImpl();

//    @GetMapping("/")
//    public String currentUserName(Model model, Authentication authentication) {
//        DefaultOidcUser userDetails = (DefaultOidcUser) authentication.getPrincipal();
//        model.addAttribute("userName", userDetails.getName());
//        model.addAttribute("IDTokenClaims", userDetails);
//        return "home";
//    }

    @PostMapping("/add-reservation")
    public List<Reservation> getReservations(String email){
        return  reservationService.getReservations(email);
    }

}
