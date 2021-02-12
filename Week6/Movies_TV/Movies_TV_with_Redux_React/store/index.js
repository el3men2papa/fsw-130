const redux = require("redux")
const {createStore} = require ("redux")
const allReducers = require ("../Reducers/index")

const store = createStore(allReducers)
module.exports = (
    store
)