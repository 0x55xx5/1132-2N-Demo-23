import React from 'react';
import { Product_card_23 } from './product_card_23';


export const ProductList_23 = ({data,title,limit}:{data:any;title?:string;limit?:number;} ) => {
    const limitedData = limit ? data.slice(0, limit) : data;
    return (
    <div className='my-10 '>
        <h2 className="h2-bold mb-4">{title}</h2>
            {
                data.length>0?(
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {limitedData.map((item:any) => 
                            (
                                <Product_card_23 key={item.slug} item={item} />
                            )
                           
                        )}
                    </div>
                ):(
                    <div className='flex-center'>
                  
                        <h2 className='h2-bold'>No products found</h2>
                    </div>
                )
            }
    </div>
  )
}
