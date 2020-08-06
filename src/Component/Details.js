import React from 'react'
import './Styling.css'

export default function Details() {
    const data=[
{srno:1, name:'Kid', price:100},
{srno:2, name:'Men', price:200},
{srno:3, name:'Women', price:300},
    ]
    const dataList=data.map(d=>(
    <h1>{d.name} {d.price}</h1>
    ))
    return (
        <div>
           {/*  {dataList} */}
            <h1 className="heading">Details</h1>
           <table>   
                    <tr className="tr">
                        <th className='th' colSpan="2"> Sr.No </th>
                        <th className='th' colSpan="2"> Name </th>
                        <th className='th' colSpan="2"> Address </th>
                        <th className='th' colSpan="2"> Kids </th>
                        <th className='th' colSpan="2"> Men </th>
                        <th className='th' colSpan="2"> Women </th>
                        <th className='th' colSpan="2"> Total </th>
                        <th className='th' colSpan="2"> Action </th>
                    </tr>
                    <tr>
                        <td className="td" colSpan="2" > Sr.No </td>
                        <td className="td" colSpan="2"> Name </td>
                        <td className="td" colSpan="2"> Address </td>
                        <td className="td" colSpan="2"> Kids </td>
                        <td className="td" colSpan="2"> Men </td>
                        <td className="td" colSpan="2"> Women </td>
                        <td className="td" colSpan="2"> Total </td>
                        <td className="td" colSpan="2"> Action </td>
                    </tr>
                </table>
        </div>
    )
}

