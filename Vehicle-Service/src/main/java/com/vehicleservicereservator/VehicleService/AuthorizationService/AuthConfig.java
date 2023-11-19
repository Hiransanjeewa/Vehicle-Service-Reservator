package com.vehicleservicereservator.VehicleService.AuthorizationService;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
public class AuthConfig {

    @Value("${auth.clientId}")
    private String clientId;

    @Value("${auth.clientSecret}")
    private String clientSecret;

    @Bean(name = "customAuth0TokenGenerator")
    public Auth0TokenGenerator auth0TokenGenerator(RestTemplate restTemplate) {
        return new Auth0TokenGenerator(restTemplate, clientId, clientSecret);
    }

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }
}
