var React = require("react");
var StyleSheet = require("react-style");
var actions = require("../actions/UserAction");
var userStore = require("../stores/usersStore");

const styles = StyleSheet.create({
  image:{
    width: 500,
    height: 500,
  }
});

//hämta realUserId,
function getUserState() {
  return {
    userId: userStore.getUserId(),
    name: "",
    tagline: "",
    rating: 0,
    imagePreviewUrl: "",
  };
}


module.exports = React.createClass({
    getInitialState:function(){
      return getUserState();
    },
    addUser:function(e){
        e.preventDefault();
        actions.addUser(this.state);
        var form = document.forms.theForm;
        form.tagline.value = "";
        form.file.value = "";
        this.setState(this.getInitialState());
        
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    handleInputImageChange:function(e){
      e.preventDefault();
      var reader = new FileReader();
      var file = e.target.files[0];

      reader.onloadend = () => {
        this.setState({
          imagePreviewUrl: reader.result
        });
      }
      reader.readAsDataURL(file);
    },
    render:function(){
      var {imagePreviewUrl} = this.state;
      var $imagePreview = null;
      var $addButton = null;

      if (imagePreviewUrl) 
        $imagePreview = (<img src={imagePreviewUrl}  />);
      else 
        $imagePreview = (<div className="previewText"> </div>);

      return(
          <form className="form" name="theForm" onSubmit={this.addUser}>
              <div className="form-group">
                  <label className="control-label" htmlFor="name">Add smug:</label>
                  <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Smug name" />                    
              </div>
              <div className="form-group">
                  <label className="control-label" htmlFor="password">Description:</label>
                  <input type="text" className="form-control" id="password" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Description" />                    
              </div>
              <div className="form-group">
                  <div className="uploadImg">
                    <input className="fileInput" name="file" type="file" onChange={this.handleInputImageChange} />
                  </div>
                  <div className="imgPreview"> 
                    {$imagePreview}
                  </div>  
                  <button className="btn" disabled={!this.state.name} type="submit">Lägg till smug</button>
              </div>
          </form>
        )
    }
})
