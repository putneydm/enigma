import React, {Component} from "react"
import { ButtonYuge } from "./button"

const OpenDecoder = ({ f, status }) => {
    return (
        <div 
            className="flex-centered"
        >
            <ButtonYuge
                f={ f }
                status={ status }
            >
                Ready? Let's code!
            </ButtonYuge>
        </div>
    )
}

export { OpenDecoder }