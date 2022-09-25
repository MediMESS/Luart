import React from "react"
import ReactDOM from "react-dom/client"
import "./index.scss"
import "src/assets/scss/theme.scss"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter as Router } from "react-router-dom"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { worker } = require("src/mocks/browser")
worker.start()
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
