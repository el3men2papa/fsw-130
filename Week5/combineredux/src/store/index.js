const redux = require("redux")
const {createStore} = require ("redux")
const allReducers = require ("./Reducers/index.js")

const store = createStore(allReducers)

module.exports = (
    store
)


  

module.exports = store