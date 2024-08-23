import React, { useState } from 'react'
import "./chatlist.css"
function Chatlist() {
   const[add,setadd]=useState(true)
   const setup=()=>{
    setadd((p)=>!p)
   }
  return (
    <div className='chatlist'>
        <div className="search">
            <div className="search_box">
                <img src="./search.png" alt="" />
                <input type="text" placeholder='search'/>
            </div>
            <img src={add?"./plus.png":"./min.png"} alt=""  className='plus' onClick={setup}/>
        </div>
        <div className="item">
          <img src="./ava.png" alt="" />
          <div className="texts">
<span>
  sampath
</span>
<p>hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./ava.png" alt="" />
          <div className="texts">
<span>
  sampath
</span>
<p>hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./ava.png" alt="" />
          <div className="texts">
<span>
  sampath
</span>
<p>hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./ava.png" alt="" />
          <div className="texts">
<span>
  sampath
</span>
<p>hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./ava.png" alt="" />
          <div className="texts">
<span>
  sampath
</span>
<p>hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./ava.png" alt="" />
          <div className="texts">
<span>
  sampath
</span>
<p>hello</p>
          </div>
        </div>
        <div className="item">
          <img src="./ava.png" alt="" />
          <div className="texts">
<span>
  sampath
</span>
<p>hello</p>
          </div>
        </div>
    </div>
  )
}

export default Chatlist