import { APP_NAME } from '@/lib/constants';
import React from 'react';

 const Footer_23 = () => {
    const year = new Date().getFullYear();
    return (
    <footer className="border-t">
        <div className="p-5 flex-center">
            copyright &copy; {year} <a href="https://prostore.com" className="text-blue-500 hover:text-blue-700">{APP_NAME}</a>. All rights reserved.
        </div>


    </footer>
  )
}
export default Footer_23 ;


