package com.example.metrics.service;

import com.example.metrics.dto.request.MetricRq;
import com.example.metrics.dto.request.MetricsGetRq;
import com.example.metrics.dto.reseponse.MetricsGetRs;

public interface MetricService {
    void registerMetric(MetricRq metricRq);

    MetricsGetRs getMetrics(MetricsGetRq metricsGetRq);
}
