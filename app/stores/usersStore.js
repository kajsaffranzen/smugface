var dispatcher = require("../dispatcher");
var userService = require("../services/userService");
var realUserService = require("../services/realUserService");

function UserStore() {
    var listeners = [];
    var User = "";
    
    function onChange(listener) {
        getUsers(listener);
        listeners.push(listener);
    }

    function getUserId(){
        return User;
    }
    
    function getUsers(cb){
        userService.getUser().then(function (res) {
            cb(res);
        });
    }

    function addUser(user) {
        userService.addUser(user).then(function (res) {
            triggerListeners();
        });
    }
    function addRealUser(user) {
        realUserService.addRealUser(user).then(function (res) {
            triggerListeners();
            if (res != null)
                User = res.username;

            console.log(res);
        });
    }
    function loginRealUser(user) {
        realUserService.loginRealUser(user).then(function (res) { 
            if (res != null){
                User = res.username;
                triggerListeners();
            }

        });
    }

    function likeSmug(user){
        userService.likeSmug(user).then(function (res){
            triggerListeners();
        });
    }

    function deleteUser(user) {
        userService.deleteUser(user).then(function (res) {
            triggerListeners();
        });
    }

    function triggerListeners() {
        getUsers(function (res) {
            listeners.forEach(function (listener) {
                listener(res, User);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "user") {
            switch (split[1]) {
                 case "addUser":
                    addUser(payload.user);
                    break;
                case "deleteUser":
                    deleteUser(payload.user);
                    break;
                case "likeSmug":
                    likeSmug(payload.user);
                    break;
                case "addRealUser":
                    addRealUser(payload.user);
                break;
                case "loginRealUser":
                    loginRealUser(payload.user);
                break;
            }
        }
    });

    return {
        onChange: onChange,
        getUserId: getUserId
    }
}

module.exports = UserStore();




