package com.example.metrics.model;

import lombok.Data;

import javax.persistence.*;
import java.time.OffsetDateTime;

@Entity
@Table (name = "t_metrics")
@Data
public class Metric {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long Id;
    String uniqueId;
    String url;
    OffsetDateTime dateTime;
}
