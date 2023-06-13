package com.example.twitterbackend.Tag;

import jakarta.persistence.*;

@Entity
@Table(name = "tag")
public class Tag {

    @Id
    @SequenceGenerator(
            name = "tag_sequence",
            sequenceName = "tag_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "tag_sequence"
    )
    private Long id;

    private String text;

    private int amountUsed;

    public Tag() {
    }

    public Tag(Long id, String text, int amountUsed) {
        this.id = id;
        this.text = text;
        this.amountUsed = amountUsed;
    }

    public Tag(String text, int amountUsed) {
        this.text = text;
        this.amountUsed = amountUsed;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public int getAmountUsed() {
        return amountUsed;
    }

    public void setAmountUsed(int amountUsed) {
        this.amountUsed = amountUsed;
    }

    @Override
    public String toString() {
        return "Tag{" +
                "id=" + id +
                ", text='" + text + '\'' +
                ", amountUsed=" + amountUsed +
                '}';
    }
}
