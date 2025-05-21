import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card ,CardTitle,CardContent, CardHeader} from '@/components/ui/card';
import Rating_xx from './rating';
import ProductPrice_23  from './ProductPrice_23';


export const Product_card_23 = ({item}:{item:any}) => {
  return (
    <Card className='w-full max-w-sm'>
        <CardHeader className='p-0 items-center     '>
          <Link href={`/product/${item.slug}`}><Image src={item.images[0]} alt={item.name} width={300} height={300} className='w-full h-auto rounded-lg' /></Link>
        </CardHeader>
        <CardContent className='p-4 grid gap-4'>
            <div className='text-xs'>
                {item.brand}
            </div>
            <Link href={`/product/${item.slug}`}><CardTitle className='text-sm font-medium'>{item.name}</CardTitle></Link>
            <div className='flex-between gap-4'> 
                <Rating_xx value={Number(item.rating)}/>{
                    item.stock>0?(
                        <ProductPrice_23 value={Number(item.rating)} className='text-2xl font-bold' />
                    ):(
                        <p className='text-destructive '>Out of Stock</p>
                    )
                }
            </div>




        </CardContent>


    </Card>
  )
}
