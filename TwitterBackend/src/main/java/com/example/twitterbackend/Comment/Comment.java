package com.example.twitterbackend.Comment;

import com.example.twitterbackend.Post.Post;
import com.example.twitterbackend.User.User;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "comment")
public class Comment {

    @Id
    @SequenceGenerator(
            name = "comment_sequence",
            sequenceName = "comment_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "comment_sequence"
    )
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "post_id")
    private Post post;
    private String text;
    private LocalDate date;
    private LocalTime time;

    public Comment(){}

    public Comment(Long id, User user, Post post, String text, LocalDate date, LocalTime time) {
        this.id = id;
        this.user = user;
        this.post = post;
        this.text = text;
        this.date = date;
        this.time = time;
    }

    public Comment(User user, Post post, String text, LocalDate date, LocalTime time) {
        this.user = user;
        this.post = post;
        this.text = text;
        this.date = date;
        this.time = time;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return "Comment{" +
                "id=" + id +
                ", user=" + user +
                ", post=" + post +
                ", text='" + text + '\'' +
                ", date=" + date +
                ", time=" + time +
                '}';
    }
}
