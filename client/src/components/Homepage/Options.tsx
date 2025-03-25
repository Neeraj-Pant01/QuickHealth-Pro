import React from 'react'

interface OptionInterface {
    icon:string,
    title:string,
    desc:string
}

const options : OptionInterface[] = [
    {
        icon:"/images/medi.jpg", 
        title:"Buy Medicines at low price",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur commodi repudiandae enim at quaerat suscipit minus sit esse dolorum et."
    },
    {
        icon:"/images/medi.jpg",
        title:"Buy Medicines at low price",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur commodi repudiandae enim at quaerat suscipit minus sit esse dolorum et."
    },
    {
        icon:"/images/doctor.jpg",
        title:"Consult Doctor",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur commodi repudiandae enim at quaerat suscipit minus sit esse dolorum et."
    },
    {
        icon:"/images/checkup.jpg",
        title:"Full body checkup",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur commodi repudiandae enim at quaerat suscipit minus sit esse dolorum et."
    }

] 

interface optionprop {
    o:OptionInterface
    }

export const Option: React.FC <optionprop> = ({o}) =>{

    return (
        <div className='flex bg-[#1fc4b4] items-center justify-center border border-[#1fc4b4]  text-[white] hover:bg-[white] hover:text-[#1fc4b4] transition-all duration-300 cursor-pointer md:w-[20%] w-[60%] flex-col gap-2 px-3 py-3 rounded-md'>
            <img src={o?.icon} alt={o?.title} className='w-[50%] rounded-md' />
            <p className='hover:text-[white]'>{o?.title}</p>
            <p className='text-xs'>{o?.desc}</p>
        </div>
    )
}

const Options: React.FC = () => {
  return (
    <div className='flex gap-5 mt-10 mb-5 items-center justify-center'>
      {
        options.map((o,i)=>{
            return (
                <Option o={o} />
            )
        })
      }
    </div>
  )
}

export default Options
