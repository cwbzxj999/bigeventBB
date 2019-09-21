var user = {
  /**
   * 
   * @param {*} userName 
   * @param {*} password 
   * @param {*} callBack 
   */
  login: function (userName, password, callBack) {
    $.post(URLIST.user_login, {
      user_name: userName,
      password: password
    }, function (res) {
      // res是本次请求，从服务器回来的数据
      console.log(res);
      callBack(res);
    });
  },


  logout: function (callBack) {
    $.post(URLIST.user_logout, function (res) {
      callBack(res);
    });
  },


  getInfo: function (callBack) {
    $.get(URLIST.user_info, function (res) {
      callBack(res);
    });
  }

};