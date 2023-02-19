import { BiEdit, BiTrashAlt } from "react-icons/bi";
import data from '../database/data.json'
import {getUsers} from "../lib/helper";

export default function Table(){

    getUsers().then(res => console.log(res))
    return (
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-200">PartName</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">PartNumber</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Quantity</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Price</span>
                    </th>
                    
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Actions</span>
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

function Tr({id, partname, partnumber, quantity, price }){
  return (
      <tr className="bg-gray-50 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        
          <span className="text-center ml-2 font-semibold">{partname || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
          <span>{partnumber || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
          <span>{quantity || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
          <span>{price|| "Unknown"}</span>
      </td>
    
      <td className="px-16 py-2 flex justify-around gap-5">
          <button className="cursor"><BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit></button>
          <button className="cursor"><BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt></button>
      </td>
  </tr>
  )
}