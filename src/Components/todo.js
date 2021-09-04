import React,{useState,useEffect} from 'react'
import '../App.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardActionArea ,Modal } from '@material-ui/core';
import firebase  from './config'



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const Todo = () => {
const [task,setTask]=useState('')
const [upTask,setUpTask]=useState('')
const [updateKey,setUpdateKey]=useState('')
const [finalData,setFinalData]=useState(['lunch','dinner','break fast'])

// console.log(finalData)
var todos=firebase.database().ref('Todos')

  const addData=()=>{
todos.push({task:task})
setTask('')

  }
  console.log(finalData)
//   const addData=()=>{
// todos.push(task)

//   }
const delBtn=(key)=>{
todos.child(key).remove()
}



// const [modalStyle] = React.useState(getModalStyle);
const [open, setOpen] = React.useState(false);

const updateTask=()=>{

firebase.database().ref('Todos/'+updateKey).update({task:upTask})
setOpen(false)

}

const handleOpen = (key) => {
  setOpen(true) 
  
  setUpdateKey(key)
};

const handleClose = () => {
  setOpen(false);
};
//   useEffect(()=>{
// todos.on('value',(data)=>{
//   let keys=Object.keys(data.val())
//   var dataUserful=data.val()
//   if(keys){
   
//     var arr=[]
//     for(var i=0; i<keys.length; i++){
//       const key=keys[i]
//       const data2=dataUserful[key]
//       const obj={key:key, data:data2}
//       arr.push(obj)


         

//     }
// setFinalData(arr)
//   }else{
// alert('Please.. wait')
//   }


// })



//   },[])

useEffect(()=>{
todos.on('value',(data)=>{
var keys=Object.keys(data.val())
var dataM=data.val()
if(keys){
  var arr=[]
for(var j=0; j<keys.length; j++){
  let key=keys[j]
  const dataImp=dataM[key]
  const obj={value:dataImp.task,key:key}
  arr.push(obj)
}
setFinalData(arr)
}

else{
  alert('...')
}

})
},[])

  
    const array=[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]
    const classes = useStyles();
    return (
        <div className='todo'>
        <Card>
        
<CardContent>
          <span className='form'>
              
              <div className='inner1' >
                  
          <TextField className='TextField' value={task} onChange={e=>setTask(e.target.value)} style={{width:460,height:60}} id="outlined-basic" label="Tasks" variant="outlined" />
              </div>
              <div className='inner2' >
                  
          <Button className='btnAdd' onClick={addData}  style={{width:110, height:55}} variant="contained" color="primary" href="#contained-buttons">
        Add
      </Button>
              </div>
          </span>
          <div className='list'>
         
          <Card className='card'  >
      <CardContent>
        { finalData ?
          finalData.map(val=>(
                <Card   style={{height:60,marginTop:8}}>
                    <CardContent style={{display:'flex',justifyContent:'space-between'}}>{val.value}   
                    <span style={{display:'flex',justifyContent:'space-around', width:190}}>

                    <Button variant="contained" onClick={()=>delBtn(val.key)}  color="secondary" href="#contained-buttons">
        Delete
      </Button>
                    <Button variant="contained" onClick={()=>handleOpen(val.key)}  color="info" href="#contained-buttons">
        Update
      </Button>
                    </span> 
                 </CardContent>
               
                </Card> 
            )): alert('Please.. wait')
        }



      </CardContent>
    
    </Card>
         
          </div>

</CardContent>
</Card>
<Modal open={open}  onClose={handleClose} >
  <Card  className='updateCard' >
    <CardContent>
<Button   className='btncancel' onClick={handleClose}  color="dark" href="#contained-buttons">
        X
      </Button>
<h2 className='upTask'>UPDATE TASK  </h2>
<TextField className='TextField' onChange={e=>setUpTask(e.target.value)} style={{width:460,height:60}} id="outlined-basic" label="Update Task" variant="outlined" />

<div  style={{display:'flex',justifyContent:'space-around',marginTop:10}}>

           
                    <Button variant="contained" className='btnUpdate' onClick={updateTask}  color="primary" href="#contained-buttons">
       Update
      </Button>
</div>



    </CardContent>

  </Card>
</Modal>
        </div>
    )
}

export default Todo
