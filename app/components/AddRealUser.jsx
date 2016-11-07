var React = require("react");
var actions = require("../actions/RealUserAction");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          username:"",
          password:""
      }  
    },
    addRealUser:function(e){
        e.preventDefault();
        actions.addRealUser(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var username = e.target.name;
      var state = this.state;
      state[username] = e.target.value;
      this.setState(state);
    },
    render:function(){
      return(
          <form className="form" onSubmit={this.addRealUser}>
              <div className="form-group">
                  <label className="control-label" htmlFor="username">Användarnamn:</label>
                  <input type="text" className="form-control" id="username" name="username" value={this.state.username} onChange={this.handleInputChange} placeholder="Användarnamn" />                    
              </div>
              <div className="form-group">
                  <label className="control-label" htmlFor="password">Lösenord:</label>
                  <input type="text" className="form-control" id="password" name="password" value={this.state.address} onChange={this.handleInputChange} placeholder="Lösenord" />                    
              </div>
                 <button className="btn" type="submit">Registrera</button>
          </form>
        )
    }
})