var user = {
  login: function(userName,password,callBack){
    $.post('http://localhost:8000/admin/login',{user_name:userName,password:password},function(res){
      // res是本次请求，从服务器回来的数据
      console.log(res);
      callBack(res);
    });
  },

  
}