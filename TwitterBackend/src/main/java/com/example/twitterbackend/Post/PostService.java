package com.example.twitterbackend.Post;

import com.example.twitterbackend.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service

public class PostService {

    private final PostRepository postRepository;

    @Autowired
    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }


    @Transactional
    public void createPost(Post post, User user) {
        post.setUser(user);
        post.setDate(LocalDate.now());
        post.setTime(LocalTime.now());
        postRepository.save(post);
    }

    public Post getPost(Long postId) {
        return postRepository.findById(postId)
                .orElseThrow(() -> new IllegalStateException("Order does not exist"));
    }

    public List<Post> getPosts() {
        return postRepository.findAll();
    }

    public List<Post> getUserOrders(Long userId) {
        return postRepository.findUserPosts(userId);
    }

    public void deletePost(Long postId) {
        boolean exists = postRepository.existsById(postId);
        if(!exists){
            throw new IllegalStateException("Customer with id " + postId + " does not exist");
        }
        postRepository.deleteById(postId);
    }

    public void updatePost(Post post) {
        Post currentPost = postRepository.getReferenceById(post.getId());
        currentPost.setText(post.getText());
        postRepository.save(currentPost);
    }
}
