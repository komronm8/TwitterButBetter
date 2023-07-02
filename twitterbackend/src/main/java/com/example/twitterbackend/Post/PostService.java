package com.example.twitterbackend.Post;

import com.example.twitterbackend.User.Role;
import com.example.twitterbackend.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

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
        postRepository.save(post);
    }

    public Post getPost(Integer postId) {
        return postRepository.findById(postId)
                .orElseThrow(() -> new IllegalStateException("Order does not exist"));
    }

    public List<Post> getPosts() {
        return postRepository.findAll();
    }

    public List<Post> getUserPosts(Integer userId) {
        return postRepository.findUserPosts(userId);
    }

    public void deletePost(Integer postId, User user) {
        boolean exists = postRepository.existsById(postId);
        if(!exists){
            throw new IllegalStateException("Post with id " + postId + " does not exist");
        }
        Post post = postRepository.getReferenceById(postId);
        if(user.getRole() != Role.ADMIN){
            if(!Objects.equals(post.getUser().getId(), user.getId())){
                throw new IllegalStateException("User does not have access");
            }
        }
        postRepository.deleteById(postId);
    }

    public void updatePost(Post post, User user) {
        boolean exists = postRepository.existsById(post.getId());
        if(!exists){
            throw new IllegalStateException("Post with id " + post.getId() + " does not exist");
        }
        Post currentPost = postRepository.getReferenceById(post.getId());
        if(!Objects.equals(currentPost.getUser().getId(), user.getId())){
            throw new IllegalStateException("User does not have access");
        }
        currentPost.setText(post.getText());
        postRepository.save(currentPost);
    }

}
