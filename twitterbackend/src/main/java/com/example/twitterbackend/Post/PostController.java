package com.example.twitterbackend.Post;

import com.example.twitterbackend.Config.JwtService;
import com.example.twitterbackend.User.User;
import com.example.twitterbackend.User.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/post")
public class PostController {

    private final PostService postService;
    private final UserService userService;
    private final JwtService jwtService;

    @Autowired
    public PostController(PostService postService, UserService userService, JwtService jwtService) {
        this.postService = postService;
        this.userService = userService;
        this.jwtService = jwtService;
    }

    @PostMapping
    public ResponseEntity<Post> createPost(
            @RequestHeader("AUTHORIZATION") String authHeader,
            @RequestBody Post post){
        String email = jwtService.extractUsername(authHeader.substring(7));
        User user = userService.getUserByEmail(email);
        postService.createPost(post, user);
        return new ResponseEntity<>(postService.getPost(post.getId()), HttpStatus.OK);
    }

    @GetMapping
    public List<Post> getPosts(){
        return postService.getPosts();
    }

    @GetMapping(path = "{user_id}")
    public List<Post> getUsersPosts(
            @PathVariable("user_id") Integer user_id
    ){
        return postService.getUserPosts(user_id);
    }

    @DeleteMapping(path = "{post_id}")
    public void deletePost(
            @PathVariable("post_id") Integer post_id
    ){
        postService.deletePost(post_id);
    }

    @PutMapping(path = "/updatePost")
    public void updatePost(
            @RequestBody Post post
    ){
        postService.updatePost(post);
    }

}
