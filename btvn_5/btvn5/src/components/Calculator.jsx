import React, { useState } from 'react'

const Calculator = () => {
    const [value, setValue] = useState('')
    const substractEle = () => {
        setValue(value.slice(0,-1))
    }
    const equal = () => {
        setValue(eval(value))
    }
    const reset = () => {
        setValue('')
    }
  return (
      <div className='calculator'>
          <form>
            <div className="value" >
              <input type="text" value={value}/>
          </div>
          <div>
              <input type="button" value="7" onClick={e => setValue(value + e.target.value)} />
              <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
              <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
          </div>
           <div>
              <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
          </div>
           <div>
              <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
              <input type="button" value="=" onClick={equal} />
              <input type="button" value="C" onClick={substractEle} />
              <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
              </div>
              <div>
                  <input type="button" value="reset" className='reset' onClick={reset}/>
              </div>
         </form>
    </div>
  )
}

export default Calculator