const mutations ={
    //登录上
    login: function (state) {
        state.isLogin = true;
        state.nickname = JSON.parse(localStorage.getItem("accountMes")).nickname;
        state.headimg = JSON.parse(localStorage.getItem("accountMes")).headimg;
    },
    //登出
    logout: function (state) {
        state.isLogin = false;
        state.nickname = "";
        state.headimg = "";
    }
}

export default mutations
