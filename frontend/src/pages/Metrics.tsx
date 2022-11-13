import React from "react";
import {RegisterMetricForm} from "../components/forms/RegisterMetricForm";
import {GetMetricForm} from "../components/forms/GetMetricForm";

export function Metrics() {

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            <RegisterMetricForm />
            <GetMetricForm/>
        </div>
    )
}