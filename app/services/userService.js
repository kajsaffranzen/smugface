var $ = require("jquery");
var promise = require("es6-promise");
var resourceUrl = "/api/user";
// /api/user/databaseuser
//data: JSON.stringify(user),

module.exports = {
    addUser: function (user) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                data: user,
                method: "POST",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    },
    getUser: function () {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    },
    deleteUser: function (user) {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl+ "/" +  user._id,
                method: "DELETE",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    },
    likeSmug: function(user){
         var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: "/api/user/" +  user._id,
                data: user,
                method: "PUT",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    }   
}