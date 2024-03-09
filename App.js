
import './App.css';
import {useState} from 'react';

function App() 
{ const [calu,setcalu]=useState(" ");
  const [result,setresult]=useState(" ");
  const oper=['/','*','+','-','.'];
  const updatecal=value=>
  {  if((oper.includes(calu.slice(-1))&&oper.includes(value)) ||
        (calu===''&&oper.includes(value))){
      return;
    }
      setcalu(calu+value);
      if(!oper.includes(value)){
        setresult(eval(calu+value).toString());
      }
  }
  const solution=()=>{
    setcalu(eval(calu).toString());
  }
  const deletelast=()=>{
    if(calu ==''){
      return
    }
    setcalu(calu.slice(0,-1));
  }
  const allclear=()=>{
    setcalu(" ");
    setresult(" ");
  }
  
  const createnum=()=>{
    const digits=[];
    for(let i=0;i<10;i++)
    {
      digits.push(
        <button onClick={()=>updatecal(i.toString())}key={i}>{i}</button>
        
      )
    }
    return digits;

  }
  return (
    <div className="App">
      <div className="caluclator">
        <div className="screen">
         {result?<span>({result})</span>:' '}
         {calu||"0"}

        </div>
        <div className="operators">
          <button onClick={()=>updatecal('+')}>+</button>
          <button onClick={()=>updatecal('-')}>-</button>
          <button onClick={()=>updatecal('*')}>*</button>
          <button onClick={()=>updatecal('/')}>/</button>
          <button onClick={allclear}>AC</button>
          <button onClick={deletelast}>DEL</button>
        </div>
        <div className="numbers">
          {createnum()}
          <button onClick={()=>updatecal('.')}>.</button>
          <button onClick={solution}>=</button>
        </div>
        
        

      </div>

    
    </div>


  );
}

export default App;
