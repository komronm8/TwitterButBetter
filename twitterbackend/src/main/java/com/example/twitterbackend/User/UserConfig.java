package com.example.twitterbackend.User;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserConfig {

    @Bean
    public CommandLineRunner commandLineRunner(UserRepository repository){
        return args -> {
            User Admin = new User(
                    "admin",
                    "admin",
                    "admin@gmail.com",
                    Role.ADMIN
            );

            repository.save(Admin);
        };

    }

}
