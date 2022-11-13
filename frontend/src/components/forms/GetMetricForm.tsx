import React, {useState} from "react";
import axios, {AxiosError} from "axios";
import {ErrorMessage} from "../ErrorMessage";
import {IGetMetricCount} from "../../models/IGetMetricCount";

export interface ITotalCount {
    totalCount: number
}

const resp: ITotalCount = {
    totalCount: 0
}

const params: IGetMetricCount = {
    url: "",
    dateTime: ""
}


export function GetMetricForm() {

    const [value, setValue] = useState('')
    const [date, setDate] = useState('')
    const [valid, setValid] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const SubmitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setValid('')
        setError('')

        if (value.trim().length === 0) {
            setValid('Please enter url.')
            return
        }

        if (date.trim().length === 0){
            setValid("Please enter correct date.")
            return
        }

        params.url = value
        params.dateTime = date


        try {
            console.log(params)
            setLoading(true)
            const response = await axios.get<ITotalCount>(
                "http://localhost:8080/api/v1/metric",
                { params })
            setLoading(false)
            resp.totalCount = response.data.totalCount
        } catch (e: unknown) {
            const error = e as AxiosError
            setError(error.message)
            setLoading(false)
        }
    }

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <form onSubmit={SubmitHandler}>
                <h1
                    className="py-2 px-4 mb-2 flex flex-col items-center"
                >
                    Get Metric Count
                </h1>
                <input
                    type="text"
                    name="url"
                    placeholder="Enter URL to get Count ..."
                    className="border rounded py-2 px-4 mb-2 w-full outline-0"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
                <input
                    type="text"
                    name="date"
                    placeholder="Enter Date in format yyyy-MM-dd"
                    className="border rounded py-2 px-4 mb-2 w-full outline-0"
                    value={date}
                    onChange={event => setDate(event.target.value)}
                />

                {valid && <ErrorMessage error={valid}/>}
                {error && <ErrorMessage error={error}/>}

                <button
                    type="submit"
                    className="py-2 px-4 rounded-lg border bg-green-300 hover:text-white"
                >
                    Get count
                </button>

                {loading && <div>Loading...</div>}
                <h1 className="py-2 px-4 mb-2 flex flex-col items-center" >Количество посещений  =  {resp.totalCount}</h1>
            </form>
        </div>
    )
}