var dispatcher = require("../dispatcher");

module.exports = {
	addRealUser:function(user){
        dispatcher.dispatch({
           user:user,
           type:"user:addRealUser" 
        });
    },
    loginRealUser:function(user){
        dispatcher.dispatch({
           user:user,
           type:"user:loginRealUser" 
        });
    }
}