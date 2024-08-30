import { useState } from 'react'
import { toppings } from './data'
toppings


function App() {
  const [total,setTotal] = useState(0);
  const [show,setShow] = useState([])
  const [show2,setShow2] = useState([])
  const [isShow,setIsShow] = useState(false)
  console.log(show)
  function hdlchange(e) {
    // setTotal((total e.target.value))
    // console.log(e.target.checked)
    if(e.target.checked == true){
      setTotal(prv=>prv+ Number(e.target.value))
      const newShow = [...show]
      newShow.push(e.target.name)
      setShow(newShow)
    }
    else{
      setTotal(prv=>prv- Number(e.target.value))
      const newShow = [...show]
      let a = newShow.indexOf(e.target.name)
      newShow.splice(a,1)
      setShow(newShow)
    }
  }

  function hdlClick(e){
    e.preventDefault()
    setIsShow(true)
    setShow2([...show])

  }    
  return (
    <>
      <h1 className="text-2xl border-b-2 mt-4 text-center font-bold">Select Topping</h1>
      <form className='text-center w-2/5 border mx-auto mt-5 border-gray-800 '>
        {toppings.map(el => {
          return (<div className='flex justify-between'>
            <div className='w-1/2 text-left ml-3 mt-1'>
              <input type="checkbox" onChange={hdlchange} name ={el.name} value={el.price} className='text-center'/> {el.name}
            </div>
          <p className='text-right -mr-56 mt-1'>฿{el.price.toFixed(2)}</p>
          <hr />
          </div>)
        })}

            <p className='bg-orange-200 text-lg font-bold'>Total {total.toFixed(2)}</p>
        <button className='border bg-gray-200 p-1 mt-2 w-3/4 mb-2 rounded-lg' onClick={hdlClick}>Check out</button>
    
      </form>
      <br />
      <div className='text-center w-2/5 border mx-auto p-5 border-gray-800'>{isShow  && show2.map(item => 
        <p>{item}</p>)}
        
        </div>
      
    </>
  )
}

export default App
