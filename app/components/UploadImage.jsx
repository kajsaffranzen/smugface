var React = require("react");
var actions = require("../actions/UserAction");

module.exports = React.createClass({
	getInitialState:function(){
      return {
         	file:"",
         	imagePreviewUrl:""
      }  
    },
    addImg:function(e){
        e.preventDefault();
        console.log(this.state)
        actions.addImg(this.state);
    },
    handleInputChange:function(e){

      e.preventDefault();
      var reader = new FileReader();
      var file = e.target.files[0];

      reader.onloadend = () => {
	      this.setState({
	        file: file,
	        imagePreviewUrl: reader.result
	      });
	    }

      reader.readAsDataURL(file);
      
    },
	render:function(){
		var {imagePreviewUrl} = this.state;
    	var $imagePreview = null;

		if (imagePreviewUrl) 
	      $imagePreview = (<img src={imagePreviewUrl} />);
	    else 
	      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);

		return (
			<form className="form">
				<div className="uploadImg">
					<input className="fileInput" type="file" onChange={this.handleInputChange} />
				</div>  
				<div className="imgPreview">
		          {$imagePreview}
		        </div>
		    
		        <button className="submitButton" type="submit" onClick={this.addImg}>Ladda upp</button>
			</form>
	    )
	}
})



  

