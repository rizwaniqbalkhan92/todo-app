import React,{useEffect} from 'react'


import { connect } from 'react-redux'

const User = (props) => {
useEffect(()=>{
console.log(props.counter)

},[props])

    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = (state) => ({
   counter:state.counter
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
