import React, {Component} from "../../../../../node_modules/react"
import ReactDOM from "../../../../../node_modules/react-dom"

import { SaveTools } from "./save_tools"
import { Dialog } from "./dialog"

const SaveInterface = ({handleSettingsSave, handleSettingsRetrieve, handleClearDialog, status, handleSettingsClear }) => {
  return (
    <div>
      <SaveTools
        f1 = { handleSettingsSave }
        f2 = { handleSettingsRetrieve }
        f3 = { handleClearDialog }
        status = { status }
      />
      <Dialog
        text = "Achtung! Permanently delete saved machine setup?"
        vis = { status.dialog }
        f = { handleClearDialog }
        f2 = { handleSettingsClear }
      />
    </div>
)}

export { SaveInterface }
