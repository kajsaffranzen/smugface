var mongoose = require("mongoose");
var User = require("../data/realUser");
var _ = require("underscore");

var router = require("express").Router();
var routers = require("express").Router();
router.route("/realUser/:id?").put(loginRealUser).post(addRealUser);

function loginRealUser(req, res) {
    console.log(req.body.username);
    User.findOne({username:req.body.username}, function (err, user) {
        if (err)
            res.send(err);
            
        else
            res.json(user);     


    });
}

function addRealUser(req, res) {
    var user = new User(_.extend({}, req.body));
    user.save(function (err) {
        if (err)
            res.send(err);
        else{
            res.json(user);      
           
            }       
    });
}

module.exports = router;
