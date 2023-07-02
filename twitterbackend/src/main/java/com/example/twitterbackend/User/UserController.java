package com.example.twitterbackend.User;

import com.example.twitterbackend.Config.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/user")
public class UserController {

    private final UserService userService;
    private final JwtService jwtService;

    @Autowired
    public UserController(UserService userService, JwtService jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @GetMapping
    public User getUser(@RequestHeader("AUTHORIZATION") String authHeader){
        String email = jwtService.extractUsername(authHeader.substring(7));
        return userService.getUserByEmail(email);
    }

}
