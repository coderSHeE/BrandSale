
import { useReducer } from "react"
import { BiPlus} from 'react-icons/bi'
import Success from "./success"
import Bug from "./bug"

import{addUser} from "../lib/helper"

import {useQueryClient, useMutation} from "react-query"


const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function AddUserForm(){

    const [formData, setFormData] = useReducer(formReducer, {})
    const addMutation = useMutation(addUser, {
      onSuccess : () =>{
         console.log("data Inserted")

      }
    })



    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(formData).length == 0) return console.log("Don't have Form Data");

        let {partname, partnumber, quantity , price }= formData;

        const model ={
         partname : `${partname}`,
         partnumber :`${partnumber}`,
         quantity : `${quantity}`,
         price : `${price}`
        }
     }

    if(addMutation.isLoading)return <div>!loading </div>
    if(addMutation.isError)return <Bug message={addMutation.error.message}></Bug>
    if(addMutation.isSuccess)return <Success message={"added successfully"}></Success>


    return (
      <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
          <div className="input-type">
              <input type="text" onChange={setFormData} name="partname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="partname" />
          </div>
          <div className="input-type">
              <input type="text" onChange={setFormData} name="partnumber" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="partnumber" />
          </div>
          <div className="input-type">
              <input type="number" onChange={setFormData} name="quantity" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="quatitiy" />
          </div>
          <div className="input-type">
              <input type="number" onChange={setFormData} name="price" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="price" />
          </div>
         

          <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
           Add <span className="px-1"><BiPlus size={24}></BiPlus></span>
          </button>


        </form>
    )
}