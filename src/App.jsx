import {  useState } from "react"
export default function App() {
  const [formValues,setFormValues] = useState({ username:"", email:"", password:"", confirmPassword:"",})
  const [blurError, setBlurError]= useState({})
const handleBlur = (e) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPassword = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const { name, value } = e.target;
    let errorMsg = '';
    if(name === 'username' && value.length < 4 && value.length > 0) {
      errorMsg = 'Username must be at least 4 characters';
    } else if (name === 'username' && value.length > 10) {
      errorMsg = 'Username must be less than 10 characters';
    }else if (name === 'username' && value.length === 0) {
      errorMsg = 'Username is required';
    } 
    
    if(name === 'email' && value.length === 0) {
      errorMsg = 'Email is required';
    }else if (name === 'email' && !regexEmail.test(value)) {
      errorMsg = `${value} is not a valid email`;
    } else if(name === 'password' && value.length === 0) {
      errorMsg = 'Password is required';
    }else if (name === 'password' && !regexPassword.test(value)) {
      errorMsg = 'Password must be more than 8 characters and contain at least 1 number and 1 special character';
    }else if(name === 'confirmPassword' && value.length === 0) {
      errorMsg = 'Confirm Password is required';
    }else if (name === 'confirmPassword' && value !== formValues.password) {
      errorMsg = 'Passwords do not match';
    }

    setBlurError((prev) => ( { ...prev, [name]: errorMsg || '' }));
    
  };
  const onsubmit = (e)=>{
    e.preventDefault()
    const fields = ['username', 'email', 'password', 'confirmPassword'];
    fields.forEach(field => {
      const input = document.querySelector(`input[name="${field}"]`);
      if (input) {
        handleBlur({ target: input });
      }
    });
  }
  return (
    <div className="flex justify-center items-center h-screen ">
        <div className="bg-slate-50 w-5/6 block max-w-sm p-6 border border-default rounded-md shadow-xs">
           <form id="form" className="max-w-md mx-auto" onSubmit={onsubmit} noValidate>
                <h1 className="text-center text-3xl max-sm:text-2xl font-bold mb-6 ">Registration</h1>
                <div className="input-control relative z-0 w-full mb-5 group">
                  <input 
                  value={formValues.username} 
                  onChange={(e)=>{setFormValues({...formValues,username:e.target.value})}} 
                  onBlur={handleBlur}
                  name="username"
                  type="text" 
                  id="name" 
                  className={"block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer " 
                  + (blurError.username ? "border-red-500" : "border-default-medium focus:border-brand")}  />
                  <label htmlFor="name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-left  
                  peer-focus:inset-s-0peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75  
                  peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Username</label>
                  {blurError.username && <div className="error text-red-600 text-[12px] p-1 none">{blurError.username}</div>}
                </div>
                <div className="input-control relative z-0 w-full mb-5 group">
                  <input 
                  value={formValues.email} 
                  onChange={(e)=>{setFormValues({...formValues,email:e.target.value})}} 
                  onBlur={handleBlur}
                  name="email"
                  type="email" 
                  id="email" 
                  className={" block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer " 
                  + (blurError.email ? "border-red-500" : "border-default-medium focus:border-brand")}  />
                  <label htmlFor="email" className="absolute t text-sm text-body duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-left
                  peer-focus:inset-s-0peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75  
                  peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email address</label>
                   {blurError.email && <div className="error text-red-600 text-[12px] p-1 none">{blurError.email}</div>}
                </div>
                <div className="input-control relative z-0 w-full mb-5 group">
                    <input  
                    value={formValues.password} 
                    onChange={(e)=>{setFormValues({...formValues,password:e.target.value})}}  
                    onBlur={handleBlur}
                    name="password"
                    type="password" 
                    id="password" 
                    className={"block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer " 
                    + (blurError.password ? "border-red-500" : "border-default-medium focus:border-brand")}/>
                    <label htmlFor="password" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-left  
                    peer-focus:inset-s-0peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75  
                    peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Password</label>
                     {blurError.password && <div className="error text-red-600 text-[12px] p-1 none">{blurError.password}</div>}
                </div>
                  <div className="input-control relative z-0 w-full mb-5 group">
                      <input 
                      value={formValues.confirmPassword} 
                      onChange={(e)=>{setFormValues({...formValues,confirmPassword:e.target.value})}} 
                      onBlur={handleBlur}
                      name="confirmPassword"
                      type="password" 
                      id="repeat_password" 
                      className={"mt-1 block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer " 
                      + (blurError.confirmPassword ? "border-red-500" : "border-default-medium focus:border-brand")} />
                      <label htmlFor="repeat_password" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-left  
                      peer-focus:inset-s-0peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75  
                      peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Confirm password</label>
                       {blurError.confirmPassword && <div className="error text-red-600 text-[12px] p-1 none">{blurError.confirmPassword}</div>}
                  </div>
                 <button type="submit" className="w-full text-white bg-blue-600 box-border border border-transparent hover:bg-brand-strong focus:ring-4  
                 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-md text-sm px-4 py-2.5 focus:outline-none">Submit</button>
            </form>
        </div>
    </div>
  )
}