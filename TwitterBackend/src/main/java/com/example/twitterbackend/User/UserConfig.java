package com.example.twitterbackend.User;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {

    @Bean
    CommandLineRunner userCommandLineRunner(UserRepository repository){
        return args -> {
            User Admin = new User(
                    "admin",
                    "admin",
                    "admin@gmail.com",
                    "13/12/2001"
            );

            repository.saveAll(
                    List.of(Admin)
            );
        };
    }

}
