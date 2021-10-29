import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { CounterFn, AddTodoFunc } from './Components/Redux/modules/actions'

import User from './Components/User'
import uuid from 'uuid'
// import './App.css'

const App = (props) => {
  let [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [update2, setUpate2] = useState('')
  const [objTodo, setObjTodo] = useState([])
  const [editStatus, setEditStatus] = useState(false)
  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)


  }
  const update = () => {
    // const update=props.counter * 0
    setCount(0)


  }

  const addToDoObj = () => {
    console.log(props)
    if (props.todos) {

      setObjTodo([
        ...props.todos,
        {
          id: uuid(),
          item: text
        }
      ])
    }
    else {
      setObjTodo([
        {
          id: uuid(),
          item: text
        }
      ])

    }

  }
const Delete=(id)=>{
  // if(obj.status===true){
  //   setEditStatus(true)
  // }
  const data=props.todos.filter(val=>val.id !== id)
  setObjTodo(data)

  }
const edit=(id)=>{
  // if(obj.status===true){
  //   setEditStatus(true)
  // }
const newTodo=[{id:id,item:update2},...props.todos]
props.todos.map((val=>{
  if(id===val.id){
    setObjTodo(newTodo)
  }
}))
  



  }
  useEffect(() => {
    props.AddTodoFunc(objTodo)

  }, [objTodo])

  useEffect(() => {

    props.CounterFn(count)
  }, [count])
  useEffect(() => {
    console.log(props.counter)
  }, [props])
  return (
    <div>
      <User />
      <button onClick={() => increment()}>INCEMENT</button>
      <button onClick={() => decrement()}>DECEMENT</button>
      <button onClick={() => update()}>UPDATE</button>
      <input placeholder='add todo' onChange={e => setText(e.target.value)} />
      <button onClick={addToDoObj}>ADD TO DO</button>
      <h1>{props.counter}</h1>
      {
        props.todos ? props.todos.map((val) => (
      <div>
            <h2>{val.item}</h2>
          <button onClick={()=>Delete(val.id)}>Update</button>
          <button onClick={()=>edit(val.id)}>Update</button>
          <input onChange={e=>setUpate2(e.target.value)} className={editStatus===true ? 'updateDispaly' :'noDisplay' }  />
          </div>
        )) : 'No value'
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  counter: state.counter,
  todos: state.todos
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    CounterFn,
    AddTodoFunc
  }, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(App)






