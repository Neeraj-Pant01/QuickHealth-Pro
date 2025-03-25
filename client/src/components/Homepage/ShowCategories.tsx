import React from 'react'

interface categories {
    id: string,
    name: string,
    img: string
    col: string,
    bg: string
}

const allCats: categories[] = [
    {
        id: "1",
        name: "Multivitamins",
        img: "https://m.media-amazon.com/images/I/81llSi8n25L._AC_UF1000,1000_QL80_.jpg",
        col: 'text-blue-400',
        bg: 'bg-blue-200'
    },
    {
        id: "1",
        name: "Protein suppliments",
        img: "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1500,w-1500,cm-pad_resize/catalog/optimum/product/1138080/1113190_1.jpg",
        col: 'text-[#DDA0DD]',
        bg: 'bg-blue-200'
    },
    {
        id: "1",
        name: "Beauty & Skincare",
        img: "https://m.media-amazon.com/images/I/4115xZCCRVL._AC_UF1000,1000_QL80_.jpg",
        col: 'text-[#589690]',
        bg: 'bg-blue-200'
    },
    {
        id: "1",
        name: "Hygeine",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsk8qD4DYyD8lN96FtGeyPJYVb_OIj2uorw&s",
        col: 'text-[tomato]',
        bg: 'bg-blue-200'
    }
]

interface cprop{
    c:categories
}

export const Cat:React.FC <cprop> = ({c}) =>{
    return (
        <div className="flex flex-col w-[20%] items-center justify-center h-[250px] cursor-pointer">
            <img className='w-[80%] h-[80%]' src={c?.img} alt="" />
            <h1 className={`${c?.col} text-[black] text-center text-xl font-semibold`}>{c?.name}</h1>
        </div>
    )
}

const ShowCategories = () => {
    return (
        <div className='flex px-10 mt-10 flex-col'>
            <h1 className='text-2xl font-bold text-[#1fc4b4]'>TOP CATEGORIES</h1>
            <div className="flex items-center justify-between">
                {
                    allCats.map((c,i)=>{
                        return (
                            <Cat c={c} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShowCategories
