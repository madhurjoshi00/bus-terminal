import React, { useState, useEffect } from 'react';
import firebase from "./firebase";  //import of Firebase 
import { useNavigate } from 'react-router-dom';

const Card=()=>{
    let navigate = useNavigate()
    let path = '/'
  const [num, setNum] = useState([]); // Initial empty array of users
  const [num1, setNum1] = useState([]); // Initial empty array of users

  
  useEffect(() => {
     setNum([])
    //Fetch data from firestore and store them in the num array
    const ref = firebase.firestore().collection('Terminal')
     ref.get().then((snapshot)=>{
      snapshot.docs.forEach(doc=>{
 
              num.push({
                  ...doc.data(),
                  key: doc.data().number,
              })
              
          
      })
      setNum(num)
      console.log(num.length)
  })
      
    
  
    // Unsubscribe from events when no longer in use
    // return () => subscriber();
  }, []);
  const Edit=(name)=>{
      
      navigate(path)
      
  }
  const del=(name,id)=>{
    console.log(name)
    const ref = firebase.firestore().collection('Terminal')
    ref.doc(name).delete()
    //window.location.reload(false);
    alert('Deleted Sucessfully, Refresh for update ')

}
  //creating a list using map function for specific use card
  const list = num.map((res,id) => (
    
  <div style={{border:' 1px solid black',width:'50%',height:'100%',marginBottom:"1%",flexDirection:"row",display:"flex",marginRight:'1%',}} >
    <h3 style={{marginLeft:'2%',width:'50vh'}}>Name: {res.name} </h3>
    <h3 style={{marginLeft:'2%',width:'50vh'}}>Latitude: {res.latitude} </h3>
    <h3 style={{marginLeft:'2%',width:'50vh'}}>Longitude: {res.longitude} </h3>
    <button onClick={()=>Edit(res.name)}>Edit</button>
    <button onClick={()=>del(res.id,id)}>Delete</button>

</div>
      ))
      //if no user left for approval display No Pending Approval
      if(num.length===0){
        return(
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh',fontSize:'2rem'}}>
              <h1 >No Termial Data</h1>
            </div>
            
          )
      }
      //returns the list of users left for approval
  else{
    return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>{list}</div>
        )
  }
  

}

export default Card