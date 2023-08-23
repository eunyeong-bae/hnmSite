import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {
    const [isHover, setIsHover] = useState(null);
    
    const navigate = useNavigate();

    const showDetail = () => {
      navigate(`/product/${item.id}`)
    }
  return (
    <div>
        <div className='card-container' onClick={showDetail}>
                <img width={200} src={item?.img}/>
                <div>{item?.choice ? 'Conscious choice' : ''}</div>
                <div>{item?.title}</div>
                <div>₩{item?.price}</div>
                <div>{item?.new ? '신제품' : ''}</div>
            </div>
        {/* <Wrapper 
            onMouseOver={()=>{ setIsHover(item?.id)}} 
            onMouseOut={()=>setIsHover(null)}
        >
            
        </Wrapper> */}
    </div>
  )
}

export default ProductCard
