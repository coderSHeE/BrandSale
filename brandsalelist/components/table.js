import { BiEdit, BiTrashAlt } from "react-icons/bi";
import data from '../database/data.json';
import {getUsers} from "../lib/helper";
import { useQuery } from "react-query";

export default function Table(){

   //const {isLoading , isError , data, error} =useQuery('user', getUsers)

  // if(isLoading) return <div>List is Loading</div>
   //if(isError) return<div>Got Error {error}</div>
  

    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-3 py-2">
                        <span className="text-gray-200">Brand</span>
                    </th>
                    <th className="px-3 py-2">
                        <span className="text-gray-200">Transition Type</span>
                    </th>
                    <th className="px-3 py-2">
                        <span className="text-gray-200">Total Order</span>
                    </th>
                    <th className="px-3 py-2">
                        <span className="text-gray-200">Total Order Value</span>
                    </th>
                    
                    <th className="px-3 py-2">
                        <span className="text-gray-200">Gross Margin Percentage</span>
                    </th>

                    <th className="px-3 py-2">
                        <span className="text-gray-200">Created Date</span>
                    </th>

                    <th className="px-3 py-2">
                        <span className="text-gray-200">Updated Date</span>
                    </th>
                    <th className="px-3 py-2">
                        <span className="text-gray-200">Action</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                    {   
                     
                        data.map((obj, i) => <Tr {...obj} key={i} />)
                    }
            </tbody>
        </table>
    )
}

function Tr({_id, brand ,transactionType , totalOrders,totalOrderValue, grossMarginPercentage, createdAt, updatedAt}){
  return (
      <tr className="bg-gray-50 text-center">
      <td className="px-3 py-2 flex flex-row items-center">
        
          <span className="text-center ml-2 font-semibold">{brand || "Unknown"}</span>
      </td>
      <td className="px-10 py-2">
          <span>{transactionType || "Unknown"}</span>
      </td>
      <td className="px-10 py-2">
          <span>{totalOrders || "Unknown"}</span>
      </td>
      <td className="px-10 py-2">
          <span>{totalOrderValue|| "Unknown"}</span>
      </td>
      <td className="px-10 py-2">
          <span>{grossMarginPercentage|| "Unknown"}</span>
      </td>
      <td className="px-10 py-2">
          <span>{createdAt|| "Unknown"}</span>
      </td>
      <td className="px-10 py-2">
          <span>{updatedAt|| "Unknown"}</span>
      </td>
    
      <td className="px-10 py-2 flex justify-around gap-5">
           
          <button className="cursor"><BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit></button>
          <button className="cursor"><BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt></button>
      </td>
  </tr>
  )
}

