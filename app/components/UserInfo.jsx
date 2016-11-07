var React = require("react");
var actions = require("../actions/UserAction");
var userStore = require("../stores/usersStore");
var StyleSheet = require("react-style");

const styles = StyleSheet.create({
  wrapper: {
    border: '2px solid white',
    borderRadius: '20px',
    color: '#3C3C3C',
    backgroundColor: '#FFFFFF',
    padding: '30px',
    marginBottom: '10vh',
  },
  images:{
    margin: '0px',
  },
  deleteBtn:{
    backgroundColor: '#BAC1BE',
    border: '2px solid',
    borderRadius: '50px', 
    color: 'white',
  },
  likeBtn:{
    color: '#F27064',
    backgroundColor: 'white',
    border: '2px solid',
    borderRadius: '10px',
    width: 100,
  }
});

function getUserState() {
  var ID = userStore.getUserId();
  return ID; 
}

module.exports = React.createClass({
    deleteUser: function(e){
        e.preventDefault();
        actions.deleteUser(this.props.info);
    },
    likeSmug: function(e){
        e.preventDefault();
        actions.likeSmug(this.props.info);
    },
    render:function(){  
        var $deleteSmugBtn = null;
        var theId = getUserState();

        if(this.props.info.userId == theId)
            $deleteSmugBtn = (<button className="btn" style={styles.deleteBtn} type="submit" onClick={this.deleteUser}>X</button>);
     
        return(
            <div className="row" style={styles.wrapper} >
                <div className="row">
                    <div className="col-lg-7 col-md-8 col-xs-10" >
                        <img src={this.props.info.imagePreviewUrl} width={350} height={300}/>
                    </div>
                    <div className="col-lg-2 colcol-md-1 col-md-offset-2 col-sm-2 col-xs-2">
                        {$deleteSmugBtn}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-8 col-md-offset-0 col-sm-9 col-xs-10">
                        <h2>{this.props.info.name}</h2>
                    </div>
                    <div className="col-lg-2 col-lg-offset-6 col-sm-2 col-sm-offset-1 col-xs-2">
                       <h2> {this.props.info.rating}</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        {this.props.info.tagline}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-md-offset-4 col-sm-8 col-sm-offset-4 col-xs-8 col-xs-offset-4">
                        <button className="btn" style={styles.likeBtn} type="submit" onClick={this.likeSmug}>Rösta</button>
                    </div>
                </div>
            </div>
        )

    }
})

