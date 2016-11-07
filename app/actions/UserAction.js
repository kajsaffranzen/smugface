var dispatcher = require("../dispatcher");

module.exports = {
    addUser:function(user){
        dispatcher.dispatch({
           user:user,
           type:"user:addUser" 
        });
    },
    deleteUser:function(user){
        dispatcher.dispatch({
           user:user,
           type:"user:deleteUser" 
        });
    },
    addSmug:function(user){
        dispatcher.dispatch({
            user:user,
            type:"user:addSmug"
        });
    },
    likeSmug:function(user){
        dispatcher.dispatch({
          user:user,
          type:"user:likeSmug"
        });
    }
}