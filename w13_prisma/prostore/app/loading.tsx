import Image from "next/image";

import Loader  from "@/resources/assets/loader.gif";

 const Loading = () => {
  return (
    <div className="flex justify-center items-center h-lvh w-lvw">
        <Image src={Loader} alt="Loading..." height={150} width={150} />
    </div>
  )
}
export default Loading;