import React, { useEffect, useState } from 'react'
import {updateEmployee, getEmployee, createEmployee} from '../services/EmployeeService'
import { useNavigate,useParams } from 'react-router-dom'
  
const EmployyeeComponent = () => {
  const [name, setName]=useState('')
  const [mob, setMob]=useState('')
  const [email, setEmail]=useState('')
  const {id}=useParams();
  const[errors,setErrors]= useState({
    name:'',
    mob:'',
    email:''
  })
 const navigator =useNavigate();

 useEffect(()=>{
    if(id){
      getEmployee(id).then((response)=>{
        setName(response.data.name);
        setMob(response.data.mob);
        setEmail(response.data.email);
      }).catch(error=>{
        console.error(error);
      })
    }
 },[])

  function saveOrUpdateEmployee(e)
  {
      e.preventDefault();
      if(validateForm()){
        
        const employee ={name,mob,email}
        console.log(employee);
        if(id){
          updateEmployee(id,employee).then((response)=>{
            console.log(response.data);
            navigator('/employees');
          }).catch(error=>{
            console.error(error);
          })
        }else{
          createEmployee(employee).then((response)=>{
          console.log(response.data);
           navigator('/employees')
            }).catch(error=>{
              console.error(error);
            })
        }

      
      }
      
  }

  function validateForm(){
    let valid =true;

    const errorsCopy={...errors}
    if(name.trim()){
      errorsCopy.name='';
    }
    else{
      errorsCopy.name='Required';
      valid=false;
    }
     if(mob.trim()){
      errorsCopy.mob='';
    }
    else{
      errorsCopy.mob='Required';
      valid=false;
    }
     if(email.trim()){
      errorsCopy.email='';
    }
    else{
      errorsCopy.email='Required';
      valid=false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle()
  {
    if(id){
      return <h2 className='text-center'>Update Emmployee</h2>
    }
    else{
      return <h2 className='text-center'>Add Emmployee</h2>
    }
  }
  return (
    <div className='container'>
      <br/> <br/>
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
              {pageTitle()}
              <div className='card-body'>
                  <form onSubmit={saveOrUpdateEmployee}>
                    <div className='form-group mb-2'>
                      <label htmlFor="" className='form-lable'>Name</label>
                      <input type="text" placeholder='Enter Employee Name' 
                              name='name' value={name} 
                              className={`form-control ${errors.name?'is-invalid':''}`}
                               onChange={(e)=>setName(e.target.value)} />
                               {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                    </div>
                    <div className='form-group mb-2'>
                      <label htmlFor="" className='form-lable'>Mobile No</label>
                      <input type="tel" placeholder='Enter Employee Mobile No' 
                              name='mob' value={mob} 
                              className={`form-control ${errors.mob?'is-invalid':''}`}
                              onChange={(e)=>setMob(e.target.value)}/>
                              {errors.mob && <div className='invalid-feedback'>{errors.mob}</div>}
                    </div>
                    <div className='form-group mb-2'>
                      <label htmlFor="" className='form-lable'>Email</label>
                      <input type="email" placeholder='Enter Employee Email' 
                              name='email' value={email} 
                              className={`form-control ${errors.email?'is-invalid':''}`}
                              onChange={(e)=>setEmail(e.target.value)}/>
                              {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                    </div>
                    <button type="submit" className="btn btn-primary" >Save</button>
                  </form>
              </div>
        </div>

      </div>

    </div>
  )
}

export default EmployyeeComponent