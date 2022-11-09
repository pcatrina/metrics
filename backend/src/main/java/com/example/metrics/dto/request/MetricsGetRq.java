package com.example.metrics.dto.request;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Data
public class MetricsGetRq {
    @NotBlank
    String url;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    LocalDate dateTime;
}
