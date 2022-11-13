import React from "react";
import {Link} from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 opacity-80 items-center bg-green-300" >
            <span className="font-bold"> Metrics App </span>

            <span>
                <Link to="/" className="mr-2" >Metrics</Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    )
}
