import React, {Component} from "react"
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';
import { Button } from "./button"

const Dialog=({ text, vis, f, f2 }) => {
  return (
    <div
      className={ vis?"dialog active":"dialog" }
      >
      <p>{`${text}`}</p>
      <Button
        val={ "Cancel" }
        text={ "cancel"}
        f={ f }
        primary={ true }
      />
      <Button
        val={ "delete" }
        f={ f2 }
        text={ "Yes, delete"}
      />
    </div>
  )
}
Dialog.propTypes = {
  vis: PropTypes.bool
}

export { Dialog }
