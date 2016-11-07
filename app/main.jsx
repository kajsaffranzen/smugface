//connects to the store
var React = require("react");
var ReactDOM = require("react-dom");
var UserList = require("./components/UserList.jsx");
var usersStore = require("./stores/usersStore");

var _users = [];

var getUsersCallback = function(users){
	_users = users;
	render();
}

usersStore.onChange(getUsersCallback);

function render(){
    ReactDOM.render(<UserList users={_users}/>, document.getElementById("container"));    
}

