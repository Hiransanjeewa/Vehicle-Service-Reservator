package com.vehicleservicereservator.VehicleService.AuthorizationService;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class Auth0TokenGenerator {

    private final RestTemplate restTemplate;
    private final String clientId;
    private final String clientSecret;

    public Auth0TokenGenerator(RestTemplate restTemplate,
                               @Value("${auth.clientId}") String clientId,
                               @Value("${auth.clientSecret}") String clientSecret) {
        this.restTemplate = restTemplate;
        this.clientId = clientId;
        this.clientSecret = clientSecret;
    }

    public String exchangeCodeForAccessToken(String accessCode) {
        String url = "https://vehicle-reservator-organization.us.auth0.com/oauth/token";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        String requestBody = "client_id=" + clientId +
                "&client_secret=" + clientSecret +
                "&grant_type=authorization_code" +
                "&redirect_uri=http://localhost:3000" +
                "&code=" + accessCode;

        HttpEntity<String> request = new HttpEntity<>(requestBody, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);

        if (response.getStatusCode() == HttpStatus.OK) {
            return response.getBody();
        } else {
            // Handle error
            return null;
        }
    }
}
