import React from 'react';
import firebase from './firebase'; //import firebase


class AddContact extends React.Component{
    //state for storing name and gid
    state={
        name:"",
        latitude:"",
        longitude:"",
        id:''
    };

    add =(e)=>{
        e.preventDefault();
        //validation for checking if data is entered
        if(this.state.name==="" || this.state.latitude==="" || this.state.longitude==="" ){
            alert("All the fields are mandatory!");
            return
        }
        const ref = firebase.firestore().collection('Terminal');
        var id=firebase.firestore().collection('Terminal').doc().id
        //setting data of users
        const data = {
            name: this.state.name,
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            id:id
          };

          //sending the stored data into firebase
          ref.doc(data.id).set(data)
          console.log(data)
         
          //resetting the Text Input to null
        
        this.setState({name:"",latitude:"",longitude:""});
      
        
    }

    //Code for UI
    render(){
        return(
            <div className="ui main">
                <h2>Add Terminal</h2>
                <form className="ui  form" onSubmit={this.add}>
                    <div className="field">
                        
                        <input type="text" 
                        name="name" 
                        placeholder="Name" 
                        value={this.state.name}
                        onChange={(e)=>this.setState({name:e.target.value})} style={{marginBottom:'10px'}}></input>
                        
                    </div>
                    <div className="field">
                       
                        <input type="text" 
                        name="latitude" 
                        placeholder="Latitude"
                        value={this.state.latitude}
                        onChange={(e)=>this.setState({latitude:e.target.value})}
                        style={{marginBottom:'10px'}}
                        ></input>
                        
                    </div>
                    <div className="field">
                        
                        <input type="text" 
                        name="longitude" 
                        placeholder="Longitude"
                        value={this.state.longitude}
                        onChange={(e)=>this.setState({longitude:e.target.value})}
                        style={{marginBottom:'10px'}}
                        ></input>
                        
                    </div>
                    
                    <button className="ui button blue">Add</button>

                </form>
                

            </div>
        );
    }

}

export default AddContact;