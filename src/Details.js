import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import firebase from './firebase'
import Card from './Card'

const Details = ()=>{
    const [terminal,setTerminal]=useState([])
    let navigate=useNavigate()
    let path='/add'
    function add(){
        navigate(path)
    }
useEffect(()=>{
    const ref = firebase.firestore().collection('Terminal')
    ref.get().then((snapshot)=>{
     snapshot.docs.forEach(doc=>{
     terminal.push({...doc.data(),key:doc.id})
 
 })
 setTerminal(terminal)
 })
    
},[]);

return(
    <div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <div>Details</div>

    <button onClick={()=>add()} >Add Terminal</button>
    </div>
    <Card/>
    </div>
)

}

export default Details