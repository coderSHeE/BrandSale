import { BiEdit, BiTrashAlt } from "react-icons/bi";
import data from '../database/data.json'
import {getUsers} from "../lib/helper";

export default function Table(){

    getUsers().then(res => console.log(res))
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

function Tr({id, brand , transition_type , total_order,total_value, gross_margin_percentage, created_date, updated_date}){
  return (
      <tr className="bg-gray-50 text-center">
      <td className="px-3 py-2 flex flex-row items-center">
        
          <span className="text-center ml-2 font-semibold">{brand || "Unknown"}</span>
      </td>
      <td className="px-10 py-2">
          <span>{transition_type || "Unknown"}</span>
      </td>
      <td className="px-10 py-2">
          <span>{total_order || "Unknown"}</span>
      </td>
      <td className="px-10 py-2">
          <span>{total_value|| "Unknown"}</span>
      </td>
      <td className="px-10 py-2">
          <span>{gross_margin_percentage|| "Unknown"}</span>
      </td>
      <td className="px-10 py-2">
          <span>{created_date|| "Unknown"}</span>
      </td>
      <td className="px-10 py-2">
          <span>{updated_date|| "Unknown"}</span>
      </td>
    
      <td className="px-10 py-2 flex justify-around gap-5">
           
          <button className="cursor"><BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit></button>
          <button className="cursor"><BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt></button>
      </td>
  </tr>
  )
}

