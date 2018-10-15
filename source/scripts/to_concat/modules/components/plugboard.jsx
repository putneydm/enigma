import React, {Component} from "react"
import ReactDOM from "react-dom"
import { PlugBoardDrop } from "./rotorringdrop"
import { Label } from "./label"

const Plugboard=({ plugs, count, f, selected, animate=false }) => {
  return (
    <div
      className="plugboard-container"
    >
      <Label>
        Cross-connect pairs of letters on the plugboard
      </Label>
      {plugs.map((el, i) => {
        return (
          <div
            className={el.ccOne && el.ccTwo? "plugboard-pair":"plugboard-pair inactive"}
            key={ i }
          >
            <PlugBoardDrop
              r={ plugs }
              key={ i + plugs.length }
              rotorVal={ el.ccOne }
              f={ f }
              id={ "ccOne" }
              rotorsArr={ count }
              selected={ selected }
              index={ i }
              valueSet= { el.ccOne!==undefined?true:false }
              animate = { animate }
            />
            <PlugBoardDrop
              r={ plugs }
              key={ i + (plugs.length * 10)  }
              rotorVal={ el.ccTwo }
              f={ f }
              id={ "ccTwo" }
              rotorsArr={ count }
              selected={ selected }
              index={ i }
              active={el.ccOne!==undefined?true:false}
              valueSet={ el.ccOne>=0&&el.ccTwo>=0?true:false}
              animate = { animate }
            />
          </div>
        )
      })}
    </div>
  )
}

export { Plugboard }
