import React, {useState} from "react";
import {IMetric} from "../../models/IMetric";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import axios, {AxiosError} from "axios";
import {ErrorMessage} from "../ErrorMessage";

const metricData: IMetric = {
    dateTime: new Date().toISOString(),
    uniqueId: generateUniqueID(),
    url: ""
}

export function RegisterMetricForm() {

    const [value, setValue] = useState('')
    const [valid, setValid] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [create, setCreate] = useState(false)

    const SubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setValid('')
        setError('')

        if (value.trim().length === 0) {
            setValid('Please enter url.')
            return
        }

        metricData.url = value

        try {
            setLoading(true)
            const response = await axios.post<IMetric>(
                "http://localhost:8080/api/v1/metric",
                metricData)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
            setCreate(false)
            setLoading(false)
        }
        setCreate(true)
    }

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <form onSubmit={SubmitHandler}>
                <h1
                    className="py-2 px-4 mb-2 flex flex-col items-center"
                >
                    Register Metric
                </h1>
                <input
                    type="text"
                    name="url"
                    placeholder="Enter URL to register ..."
                    className="border rounded py-2 px-4 mb-2 w-full outline-0"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />

                {valid && <ErrorMessage error={valid}/>}
                {error && <ErrorMessage error={error}/>}
                {create && <h1>Create!!!</h1>}

                <button
                    type="submit"
                    className="py-2 px-4 rounded-lg border bg-green-300 hover:text-white"
                >
                    Create
                </button>

                {loading && <div>Loading...</div>}
            </form>
        </div>
    )
}