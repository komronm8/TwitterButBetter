package com.example.twitterbackend.Post;

import com.example.twitterbackend.User.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

    public void deletePost(Integer postId) {
        boolean exists = postRepository.existsById(postId);
        if(!exists){
            throw new IllegalStateException("Post with id " + postId + " does not exist");
        }
        postRepository.deleteById(postId);
    }

    public void updatePost(Post post) {
        boolean exists = postRepository.existsById(post.getId());
        if(!exists){
            throw new IllegalStateException("Post with id " + post.getId() + " does not exist");
        }
        Post currentPost = postRepository.getReferenceById(post.getId());
        currentPost.setText(post.getText());
        postRepository.save(currentPost);
    }

}
