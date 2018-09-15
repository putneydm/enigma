import React, { Component } from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"
import { PlugBoardDrop } from "./rotorringdrop"
import { Label } from "./label"

// const RotorRingDrop=({ r, rotorVal, f, id, rotorsArr }) => {
//   const clicky=(e) => {
//     e.preventDefault()
//     const test=e.target.classList.contains("disabled")
//     !test?f(id, e.target.value):f(id, rotorVal)
//  }
//   return (
//   <div
//     className="notes-picker-icn"
//   >
//     <ul
//       className="notes-colors"
//       id={id}
//       onClick={ clicky }
//     >
//       {r.map((el, i) => {
//         return (
//           <li
//               key={i}
//               value={i}
//               // onClick={ clicky }
//               className={ rotorVal===i?"active":rotorsArr.some(ele => ele.sel===i) && rotorVal !== i? "disabled": "inactive"}
//             >
//               {`${el}`}
//           </li>
//         )
//      })}
//     </ul>
//   </div>
//   )
// }
//
// const PlugboardDropdown=({ r, id, f, item, index, selected, def }) => {
//     const clicky=(e) => {
//       e.preventDefault()
//       f(item, index, e.target.value)
//     }
//     return (
//       <select
//         onChange={ clicky }
//         id={ id }
//         value= { def !== null?def:"def" }
//       >
//         <option
//           disabled="true"
//           hidden="true"
//           value="def"
//         >
//           Choose letter
//         </option>
//         {r.map((el, i) => {
//           return (
//             <option
//               key={ i }
//               value={ i }
//               disabled={ selected.some((le) => i === le && i !== def) }
//             >
//               {`${el}`}
//             </option>
//           )
//         })}
//       </select>
//     )
//   }


const Plugboard=({ plugs, count, f, selected, animate=false }) => {
  // console.log("selected", selected);
  // console.log("plugs", plugs);
  return (
    <div
      className="plugboard-container"
    >
      <Label>
        Cross-connect pairs of letters on the plugboard
      </Label>
      {plugs.map((el, i) => {
        // console.log("el",el);
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
