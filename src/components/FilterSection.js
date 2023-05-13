import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { curCategory } from '../redux/actions';


const FilterSection = () => {

  const {data}=useSelector((state)=>state)
  const dispatch=useDispatch();

  // getting the  filter labels of all properties
  const getValues=(data,property)=>{
    let dataTypes=data.map((curElem)=>{
      return curElem[property];
    });
    return ["All",...new Set(dataTypes)]
  }

  const domains=getValues(data,"domain");
  const gender=getValues(data,"gender");


  // to change the filter value
  const changeCategory=(event)=>{
    const {name,value}=event.target;
    dispatch(curCategory(value,name));
  }

  // to handle availiable filter
  const changeAvailable=(event)=>{
    const name="available";
    const value=event.target.checked?"Yes":"";
    dispatch(curCategory(value,name))
  }

  return (
    <div className='py-4 px-3 mx-2 rounded col-span-2 bg-blue-300'>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
            <input type="text" name="search" value={data.filter.search} onChange={changeCategory} className='mx-2 my-3 w-1/2 rounded border-2' placeholder='Search'/>
        </form>
        <h3 className='my-3 mt-10 mx-1 text-gray-800 font-medium text-xl'>Domains</h3>
        <div className="flex flex-col">
        {
          domains.map((domain,index)=>{
            return  <button key={index} name="domain" value={domain} onClick={changeCategory} className='mx-1 my-2 hover:text-purple-500 hover:underline hover:duration-150 text-left'>{domain}</button>
          })
        }
        </div>
        <h3 className='my-3 mt-10 mx-1 text-gray-800 font-medium text-xl'>Gender</h3>
        <form className='relative' action="#">
            <select name="gender" onClick={changeCategory} className='px-1 mx-1 my-2 block appearance-none w-1/2 border-gray-400 hover:border-gray-500 '>
            {
              gender.map((gender,index)=>{
              return <option key={index} name="gender" value={gender}>{gender}</option>
            })
            }

            </select>
            <div className="pointer-events-none absolute inset-y-0 right-48 px-2 text-gray-700">
            <svg class="fill-current pb-2 h-8 w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M6 8l4 4 4-4"></path>
            </svg>            
            </div>
        </form>
        <h3 className='my-3 mt-10 mx-1 text-gray-800 font-medium text-xl'>Availaiblity</h3>
        <form action="">
          <input type="checkbox" onChange={changeAvailable} className='mx-1 mt-1 form-checkbox '/>
          <label className='ml-1' htmlFor="checkbox">Availaible</label>

        </form>
    </div>
  )
}

export default FilterSection