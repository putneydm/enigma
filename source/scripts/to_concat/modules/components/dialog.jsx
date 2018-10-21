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
        f={ f }
        primary={ true }
      >
        Cancel
      </Button>
      <Button
        val={ "delete" }
        f={ f2 }
      >
        Yes, delete
      </Button>
    </div>
  )
}
Dialog.propTypes = {
  vis: PropTypes.bool
}

export { Dialog }
