package com.example.metrics.mapper;

import com.example.metrics.dto.request.MetricRq;
import com.example.metrics.dto.reseponse.MetricsGetRs;
import com.example.metrics.model.Metric;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MetricMapper {
    Metric toEntity(MetricRq metricRq);

    @Mapping(target = "totalCount", source = "totalCount")
    MetricsGetRs toMetricsGetRs(Long totalCount);
}
