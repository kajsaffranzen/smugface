var React = require("react");
var actions = require("../actions/UserAction");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          tagline:""
      }  
    },
    addSmug:function(e){
        e.preventDefault();
        actions.addUser(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addSmug}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Add smug name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Smug name" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Description:</label>
                    <input type="text" className="form-control" id="" name="" value={this.state.tagline} onChange={this.handleInputChange} placeholder="Description" />                    
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Smug</button>
                </div>
            </form>
        )
    }
})