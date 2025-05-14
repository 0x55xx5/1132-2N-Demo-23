import React from 'react'
import {Button} from '@/components/ui/button'
import { Ghost } from 'lucide-react'
import {getLatestProducts_xx} from '@/lib/action/product.actions_23'
import { ProductList_23} from '@/components/shared/product_23/product_list';

const delay=(ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const HomeIndex_23 =async () => {
  await delay(100);
  const data = await getLatestProducts_xx();
  return (
    <div>
      <ProductList_23 data={data} title="new product arrivals" />
      <Button variant='ghost' >YU 912410023 ghost</Button>
      <Button variant='outline' >YU 912410023 outline</Button>
    </div>
  )
}

export default HomeIndex_23
