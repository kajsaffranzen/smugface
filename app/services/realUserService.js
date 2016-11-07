var $ = require("jquery");
var promise = require("es6-promise");
var resourceUrl = "/realUser/kajsa";
// /api/user/databaseuser

module.exports = {
    addRealUser: function (user) {
        var Promise = promise.Promise;
        console.log(user);
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: "api/realUser/add",
                data: user,
                method: "POST",
                success: resolve,
                error: reject
            });
        });
    },
    loginRealUser: function (user) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: "api/realUser/login",
                data: user,
                method: "PUT",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    },

}