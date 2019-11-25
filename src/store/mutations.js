import * as types from "./types";

const mutations = {
    [types.LOGINSTATUS]: (state, bool) => {
        state.loginStatus = bool
    },
    [types.TOKEN]: (state, value) => {
        state.token = value
    },
    [types.USERINFO]: (state, info) => {
        state.USERINFO = info
    },
}

export default mutations
