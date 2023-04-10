import React,{useState} from 'react'

const SimpleCounter = () => {
  const [value,setValue] = useState(0);
  const reset = ()=> {
    setValue(0);
  }
  return (
    <div className='block'>
      <h1 className='title'>SIMPLE COUNTER</h1>
      <h1 className='value'>{value}</h1>
      <button className='btn' onClick={()=>{setValue(value-1) }}>Decrease</button>
      <button className='btn' onClick={reset}>Reset</button>
      <button className='btn' onClick={()=>{setValue(value+1) }}>Increase</button>
    </div>
  )
}

export default SimpleCounter

