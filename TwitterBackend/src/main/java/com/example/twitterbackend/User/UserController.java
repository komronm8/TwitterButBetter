package com.example.twitterbackend.User;

import com.example.twitterbackend.Security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/user")
public class UserController {

    private final UserService userService;

    private final JwtUtils jwtUtils;

    @Autowired
    public UserController(UserService userService, JwtUtils jwtUtils) {
        this.userService = userService;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping(path = "registerUser")
    public void registerUser(@RequestBody User user){
        userService.addNewUser(user);
    }

    @GetMapping
    public User getUser(@RequestHeader("AUTHORIZATION") String authHeader){
        String email = jwtUtils.extractUserName(authHeader.substring(7));
        return userService.getUserByEmail(email);
    }

}
