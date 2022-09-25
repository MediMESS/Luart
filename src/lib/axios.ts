import baseAxios from "axios"
import applyCaseMiddleware from "axios-case-converter"

const axios = applyCaseMiddleware(baseAxios.create())

export default axios
