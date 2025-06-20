"use client"
import { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';
import SelectDuration from './_components/SelectDuration';
import { Button } from '@/components/ui/button';


const CreateNew = () => {
    const [formData,setFormData]=useState([]);

    const onHandleInputChange=(fieldName,fieldValue)=>{
        console.log(fieldName,fieldValue);
        setFormData(prev=>({
            ...prev,
            [fieldName]:fieldValue
        }))
    }

  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl text-violet-700 text-center'>Create New</h2>
      <div className='mt-10 shadow-md p-10'>
            {/* Select Topic */}
            <SelectTopic onUserSelect={onHandleInputChange}/>

            {/* select style */}
            <SelectStyle onUserSelect={onHandleInputChange}/>

            {/* Duration */}
            <SelectDuration onUserSelect={onHandleInputChange}/>

            {/* create button */}
            <Button className='bg-violet-700 w-full mt-10'>Create</Button>
      </div>
    </div>
  )
}

export default CreateNew
