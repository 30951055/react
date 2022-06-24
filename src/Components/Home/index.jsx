import React, { Component } from 'react'

import './index.css'

export default class Welcome extends Component{
    state = {
        users:[
            {id:'101',name:'大力',age:20},
            {id:'102',name:'老王',age:30},
            {id:'103',name:'老李',age:40},
            {id:'104',name:'老赵',age:29},
        ]
    }

    render(){
        return <div className='main'>
            <ul>
                {
                    this.state.users.map((stateObj) =>{
                        return <li key={stateObj.id}>{stateObj.id},{stateObj.name},{stateObj.age}</li>
                    })
                }
            </ul>
        </div>
    }
}