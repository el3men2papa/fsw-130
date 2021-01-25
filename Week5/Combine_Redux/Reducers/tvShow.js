const initialState = {
    tvShow: []
}


function tvShowReducer( state =initialState, action ) {
    switch ( action.type ) {
        case "ADD_TV_SHOW":
            return {
                ...state,
                tvShow: [...state.tvShow, action.payload ]
            }
            case "DELETE_TV_SHOW":
                const previousTvShows = state.tvShow.filter(tvShow => tvShow !== action.payload)
            return {
                ...state,
                tvShow: previousTvShows
                }
        case "ALL_TV_SHOW":
            return `All Tv Shows Running This Week ${state.tvShow}`
            default: return state
            }
    }


module.exports = 
    (tvShowReducer)
