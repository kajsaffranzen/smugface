var React = require("react");
var StyleSheet = require("react-style");
var UserInfo = require("./UserInfo.jsx")
var AddUser = require("./AddUser.jsx")
var Login = require("./loginRealUser.jsx")
var userStore = require("../stores/usersStore");
var AddRealUser = require("./AddRealUser.jsx")

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#4B97F0',
    padding: '10px',

  },
  smug: {
    margin: '10px',
  }, 
  addBtn:{
    padding: '2px',
    backgroundColor: '#F27064',
    color: 'white',
    borderRadius: '50px',
    width: 70,
    height: 70,
    fontSize: '30pt',
  }
});

function getUserState() {
  var ID = userStore.getUserId();
  return ID;  
}

module.exports = React.createClass({
  getInitialState:function(){
    return {
        pressed: ""
    }  
  },
  addSmug: function(e){
        this.setState({ pressed: 1});
        e.preventDefault();
  },

  render:function(){
      var {pressed} = this.state;
      var $addButton = null;
      $getButton = null;
      var theID = getUserState();
      if(theID != "" && !pressed){
      $getButton =(<button className="btn" style={styles.addBtn} type="submit" onClick={this.addSmug}>+</button>);
      }
      if(pressed)
        $addButton =(<AddUser/>);

       return(
           <div className="row" style={styles.wrapper}>
              <div className="row" >
                  <div className="col-lg-4 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-3 col-xs-6 col-xs-offset-3">
                    {
                      this.props.users.map(function(s,index){
                       if(index%2 == 0){
                          return( 
                            <UserInfo info={s} key={"user"+index} />      
                          )  
                        }
                                 
                      })
                    }
                </div>
                <div className="col-lg-4 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-5 col-sm-offset-3 col-xs-6 col-xs-offset-3">
                    {
                      this.props.users.map(function(s,index){
                        if(index%2 != 0){
                          return( 
                            <UserInfo info={s} key={"user"+index} />      
                          )  
                        }        
                      })
                    }
                </div>
               
              </div>
              <div className="row">
                <div className="col-lg-6 col-lg-offset-6 col-md-6 col-md-offset-6 col-sm-6 col-sm-offset-6 col-xs-6 col-xs-offset-6">
                 {$getButton} 
                </div>
              </div>
              <div className="row">
                <div className="col-lg-7 col-lg-offset-3 col-md-7 col-md-offset-3 col-sm-7 col-sm-offset-3">
                  {$addButton}
                </div>
              </div>

              <div className="row">
                <div className="col-lg-7 col-lg-offset-3 col-md-7 col-md-offset-3 col-sm-7 col-sm-offset-3">
                  <AddRealUser/>
                  <Login/>
                </div>
              </div>
              
              
            
           </div>
       )
   } 
});
