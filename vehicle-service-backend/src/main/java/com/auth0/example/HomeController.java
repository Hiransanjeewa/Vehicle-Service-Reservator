package com.auth0.example;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Controller for the home page.
 */
@Controller
public class HomeController {

    @GetMapping("/")
    public String currentUserName(Model model, Authentication authentication) {
        if (authentication != null){
            DefaultOidcUser userDetails = (DefaultOidcUser) authentication.getPrincipal();
            model.addAttribute("userName", userDetails.getName());
            model.addAttribute("IDTokenClaims", userDetails);
        }

        return "home";
    }

}