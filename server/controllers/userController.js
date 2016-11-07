var mongoose = require("mongoose");
var User = require("../data/user");
var _ = require("underscore");

var router = require("express").Router();
router.route("/user/:id?").get(getUser).post(addUser).put(likeSmug).delete(deleteUser);

function getUser(req, res) {
    User.find(function (err, user) {
        if (err)
            res.send(err);  
        else
            res.json(user);            
    });
}

function addUser(req, res) {
    var user = new User(_.extend({}, req.body));
    user.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(user);            
    });
}

function deleteUser(req, res) {
    var id = req.params.id;
    User.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

function likeSmug(req, res){
    var id = req.params.id;
    req.body.rating = parseInt(req.body.rating)+1;
    User.update({_id:id}, req.body, function(error, user){
        User.find({_id:id}, function(err, doc){
            if (err)
                res.send(err)
            else
                res.json(doc);
        });
    })
}


module.exports = router;