package com.example.metrics.dto.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.OffsetDateTime;

@Data
public class MetricRq {
    @NotBlank
    String uniqueId;
    @NotBlank
    String url;
    @NotNull
    OffsetDateTime dateTime;
}
