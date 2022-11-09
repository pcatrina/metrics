package com.example.metrics.repository;

import com.example.metrics.model.Metric;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.OffsetDateTime;

@Repository
public interface MetricRepository extends JpaRepository<Metric, Long> {
    long countByUrlAndDateTimeBetween(String url, OffsetDateTime dateTime, OffsetDateTime dateTime2);
}
