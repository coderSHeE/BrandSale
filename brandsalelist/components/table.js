import {BiEdit , BiTrash} from "react-icons/bi";

export default function Table(){
    return (
         <table className="min-w-full table-auto">
            <thead>
                   <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                      <span className="text-gray-200">Part Name</span>  
                    </th>

                    <th className="px-16 py-2">
                      <span className="text-gray-200">Part Number</span>  
                    </th>

                    <th className="px-16 py-2">
                      <span className="text-gray-200">Quantity</span>  
                    </th>

                    <th className="px-16 py-2">
                      <span className="text-gray-200">Price</span>  
                    </th>

                    <th className="px-16 py-2">
                      <span className="text-gray-200">Action </span>  
                    </th>
                   </tr>
            </thead>
            <tbody className="bg-gray-200">
             <tr className="bg-gray-50 text-center">
              <td className="px-16 py-2 flex flex-row items-center">
                <img src="#" alt=""/>
                <span className="text-center ml-2 font-semibold">seat belt </span>

              </td>

              <td className="px-16 py-2">
                <span>prd2334eg5</span>
              </td>

              <td className="px-16 py-2">
                <span>7</span>
              </td>

              <td className="px-16 py-2">
                <span>$600</span>
              </td>

              <td className="px-16 py-2 flex justify-around gap-4">
                <button className="cursor"><BiEdit size={25} color={"green"}></BiEdit></button>
                <button className="cursor"><BiTrash size={25} color={"red"}></BiTrash></button>

              </td>
             </tr>
            </tbody>
         </table>
    )
}