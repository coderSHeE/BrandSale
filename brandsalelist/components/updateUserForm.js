/*import { use, useReducer } from "react";


const formReducer= (state ,event2)=>{
 return{
   ...state,
   [event2.target.name]: event2.target.value
 }
}*/
import { BiBrush } from "react-icons/bi";

export default function UpdateUserForm(){
    /*const [formDate, setFromData] = useReducer(formReducer,{})
    const handleSubmit = (e) =>{
       e.preventDefault();
       if(Object.keys(formData).length==0)return console.log("Don't have Form Data")
       console.log(formData)
    }*/
 
 
              return(
                 <form className="grid lg:grid-cols-2 w-4/6 gap-4" /*onSubmit={handleSubmit}*/>
    <div className="input-type">
     <input type="text" /*onChange={setFormData}*/ name="PartName" className="border w-full px-5 py-5 py-3 focus:outline-none rounded-md" placeholder="PartName"/>
     
    </div>
 
    <div className="input-type">
     <input type="text " /*onChange={setFormData}*/ name="Partnumber" className="border w-full px-5 py-5 py-3 focus:outline-none rounded-md" placeholder="PartNumber"/>
     
    </div>
 
    <div className="input-type">
     <input type="number" /*onChange={setFormData} */name="Quantity" className="border w-full px-5 py-5 py-3 focus:outline-none rounded-md" placeholder="Quantity"/>
     
    </div>
 
    <div className="input-type">
     <input type="number" /* onChange={setFormData}*/ name="Price" className="border w-full px-5 py-5 py-3 focus:outline-none rounded-md" placeholder="price"/>
     
    </div>
 
    <button  className="flex justify-center text-md w-3/6 bg-yellow-400 text-white border rounded-md">Update<span className="px-1"><BiBrush size={24}></BiBrush></span></button>
    </form>
    )
 }