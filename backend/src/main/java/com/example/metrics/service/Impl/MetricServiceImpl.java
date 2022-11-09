package com.example.metrics.service.Impl;

import com.example.metrics.dto.request.MetricRq;
import com.example.metrics.dto.request.MetricsGetRq;
import com.example.metrics.dto.reseponse.MetricsGetRs;
import com.example.metrics.mapper.MetricMapper;
import com.example.metrics.model.Metric;
import com.example.metrics.repository.MetricRepository;
import com.example.metrics.service.MetricService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalTime;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;

@Slf4j
@Service
@RequiredArgsConstructor
public class MetricServiceImpl implements MetricService {

    private final MetricRepository metricRepository;
    private final MetricMapper metricMapper;
    @Override
    @Transactional
    public void registerMetric(MetricRq metricRq) {
        log.info("Register new Metric by : {}", metricRq.getUniqueId());
        Metric metric = metricMapper.toEntity(metricRq);
        Metric save = metricRepository.save(metric);
        log.info("Saved Metric with Id : {}", save.getId());
    }

    @Override
    @Transactional(readOnly = true)
    public MetricsGetRs getMetrics(MetricsGetRq metricsGetRq) {
        log.info("Getting metrics count by: {}", metricsGetRq.toString());
        long count = metricRepository.countByUrlAndDateTimeBetween(metricsGetRq.getUrl(),
                OffsetDateTime.of(metricsGetRq.getDateTime(), LocalTime.MIN, ZoneOffset.UTC),
                OffsetDateTime.of(metricsGetRq.getDateTime(), LocalTime.MAX, ZoneOffset.UTC));
        MetricsGetRs metricsGetRs = metricMapper.toMetricsGetRs(count);
        log.info("Total count by request = {}", metricsGetRs.getTotalCount());
        return metricsGetRs;
    }
}
