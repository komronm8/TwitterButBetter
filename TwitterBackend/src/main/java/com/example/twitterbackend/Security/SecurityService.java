package com.example.twitterbackend.Security;

import com.example.twitterbackend.User.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SecurityService implements UserDetailsService{

    private final UserRepository userRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<com.example.twitterbackend.User.User> userOptional = userRepository.findUserByEmail(email);
        if(userOptional.isPresent()){
            return new User(
                    userOptional.get().getEmail(),
                    userOptional.get().getPassword(),
                    Collections.singleton(new SimpleGrantedAuthority("ROLE_USER")));
        }
        throw new IllegalStateException("The User does not exist");
    }
}
