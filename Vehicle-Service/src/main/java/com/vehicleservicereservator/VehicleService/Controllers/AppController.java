package com.vehicleservicereservator.VehicleService.Controllers;



import com.vehicleservicereservator.VehicleService.AuthorizationService.Auth0TokenGenerator;
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
@RequestMapping(path = "/api")
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

//    @GetMapping("/user")
//    public String user(Model model,
//                       @AuthenticationPrincipal OidcUser oidcUser) {
//        model.addAttribute("userName", oidcUser.getName());
//        model.addAttribute("audience", oidcUser.getAudience());
//        return "user";
//    }

//    @GetMapping("/public")
//    public String getWelcome (){
//        System.out.println("Triggered");
//        return "Hello";
//    }


    @Autowired
    private ReservationService reservationService;



    @GetMapping("/public")
    public String getToken(@RequestParam String code) {
        System.out.println("Access Code Received: " + code);

    //    Auth0TokenGenerator auth0TokenGenerator;


        // Exchange the authorization code for an access token
      //  String accessToken = exchangeCodeForAccessToken(code);
     //   System.out.println("Access Token: " + accessToken);

        // String accessToken = String.valueOf(auth0TokenGenerator.exchangeCodeForAccessToken(code));

        // System.out.println("Access Token: " + accessToken);



        return "Hello";
    }


//    private String exchangeCodeForAccessToken(String code) {
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
//
//        Map<String, String> requestBody = new HashMap<>();
//        requestBody.put("grant_type", "authorization_code");
//        requestBody.put("client_id", clientId);
//        requestBody.put("client_secret", clientSecret);
//        requestBody.put("code", code);
//        requestBody.put("redirect_uri", "http://localhost:3000"); // Replace with your actual redirect URI
//
//        HttpEntity<Map<String, String>> requestEntity = new HttpEntity<>(requestBody, headers);
//
//        ResponseEntity<Map> responseEntity = new RestTemplate().postForEntity("https://your-auth0-tenant.auth0.com/oauth/token", requestEntity, Map.class);
//
//        if (responseEntity.getStatusCode() == HttpStatus.OK) {
//            return responseEntity.getBody().get("access_token").toString();
//        } else {
//            // Handle error
//            throw new RuntimeException("Failed to retrieve access token");
//        }


 //   }


    @PostMapping("/get-reservations")
    @ResponseBody
  //  public List<VehicleService> getReservations(@RequestBody Email email, @RequestHeader("Authorization") String authorizationHeader)
    public List<VehicleService> getReservations(@RequestBody Email email)


    {

        // Token Testing

     //   String token = authorizationHeader.substring("Bearer ".length());

    //    System.out.println(token);


        // End of  Token Testing
        System.out.println('*');
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
