import { useState } from 'react'
import './App.css'
import TextField from '@mui/material/TextField';


function App() {

  const [height, setHeight] = useState(0);
  const [weight, setweight] = useState(0);
  const [bmi, setbmi] = useState(0);
  const [result, setResult] = useState('');

  // const [IsHeight, setIsHeight] = useState(true);
  // const [IsWeight, setIsWeight] = useState(true);

//   const validate = (e)=>{
//     let name = e.target.name
//     let value = e.target.value
//     if(!!getValue.match(/^[0-9]*$/)){
//       if(name == 'height'){
//         setIsHeight(true);
//         setHeight(value)
//       }
//       else if(name == 'weight'){
//         setIsWeight(true);
//         setweight(value)
//       }
//     }
//     else{
//       if(name == 'height'){
//         setIsHeight(false);
//         setHeight(value)
//     }
//     else if(name == 'weight'){
//       setIsWeight(false);
//       setweight(value)
//   }
// } }

const handleReset = ()=>{
  setHeight(0);
  setweight(0);
  setbmi(0);
  setResult('');
  // setIsHeight(true);
  // setIsWeight(true);
}

const calculate = ()=>{

  let str = ''
  let height_m = height/100
  let bmi = weight/(height_m**2)
  setbmi(bmi.toFixed(2))
  if(bmi < 18.5){
    str = 'Underweight'
    }
    else if(bmi >= 18.5 && bmi < 24.9){
      str = 'Normal weight'
      }
      else if(bmi >= 25 && bmi < 29.9){
        str = 'Overweight'
        }
        else if(bmi >= 30){
          str = 'Obese'
          }
          setResult(str)
          }
        
          return (
            <>
            <div className='d-flex justify-content-center align-items-center' style={{width:'100%', height:'100vh'}}>
              <div className='bg-light p-4 border rounded-4' style={{width:'450px'}}>
              <div className='' style={{fontWeight:'650',fontSize:'25px'}}>Body Mass Index</div>
              <p className='card-text' style={{fontWeight:'450'}}>Body mass index is a value derived from the mass and height of a person. The BMI is defined as the body mass divided by the square of the body height, and is expressed in units of kg/m²</p>
              <div className='mt-4 flex-column rounded-5 bg-warning shadow d-flex justify-content-center align-items-center p-4'>
                <h3 className='text-light' style={{fontWeight:'550'}}>{bmi}</h3>
                <h4 className='text-danger' style={{fontWeight:'550'}}>{result}</h4>
              </div>
              <form action="" className='mt-4' onSubmit={(e) => e.preventDefault()}>
                <div className='mb-3 d-flex align-items-center justify-content-center'>
               <TextField  style={{width:'270px'}}
                value={height || ""}
                  id="outlined"
                  color="warning" focused 
                  label="Height in Cm"
                  type="number"
                    InputLabelProps={{
                   shrink: true,
                      }}
                      
                      onChange={(e)=>setHeight(e.target.value)}
                 />
                
                </div>

                <div className='mb-3 d-flex align-items-center justify-content-center'>
               <TextField  style={{width:'270px'}}
                  value={weight || ""}
                  id="outlined"
                  color="warning" focused 
                  label="Weight in KG"
                  type="number"
                    InputLabelProps={{
                   shrink: true,
                      }}
                      onChange={(e)=>setweight(e.target.value)}
                 />
                
                </div>

                <div className='d-flex justify-content-center mt-4'>
                  <button variant="contained" className='me-5' color='success' style={{width:'121px',height:'50px'} } onClick={calculate} >CALCULAT</button>
                  <button variant="outline" color='success' style={{width:'121px',height:'50px'} } onClick={handleReset} >RESET</button>

                </div>

              </form>
              </div>
              
            </div>
          </>
          )
         
}

  
  


export default App
