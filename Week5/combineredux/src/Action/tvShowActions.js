
//--------------TV Shows Actions-----------

function addTvShow(tvShow) {
    return {
        type: "ADD_TV_SHOW",
        payload: tvShow
    }
}

function deleteTvShow(tvshow) {
    return {
        type: "DELETE_TV_SHOW",
        payload: tvshow
    }
}

function allTvShow()
return {
    typer: "ALL_TV_SHOW"
}

module.exports = (
    addTvShow,
    deleteTvShow,
    allTvShow
)