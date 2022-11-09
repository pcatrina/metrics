package com.example.metrics.controller;

import com.example.metrics.dto.request.MetricRq;
import com.example.metrics.dto.request.MetricsGetRq;
import com.example.metrics.dto.reseponse.MetricsGetRs;
import com.example.metrics.service.MetricService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Api(tags = "Metrics controller")
@Controller
@RequestMapping(value = "v1/metric", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class MetricController {

    private final MetricService metricsService;

    @PostMapping
    @ApiOperation(value = "save metric")
    public ResponseEntity<Void> registerMetric(@RequestBody @Valid MetricRq metricRq) {
        metricsService.registerMetric(metricRq);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping
    @ApiOperation(value = "getting metrics")
    public ResponseEntity<MetricsGetRs> getMetrics(@Valid MetricsGetRq metricsGetRq) {
        MetricsGetRs rs = metricsService.getMetrics(metricsGetRq);
        return new ResponseEntity<>(rs, HttpStatus.OK);
    }
}
