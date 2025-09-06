import { ArrowRightIcon } from "lucide-react"
import { Card, CardFooter, CardHeader } from "./Card"


const Footer = () => {
  return (
    <div>
       <Card
        className="w-1/2 h-2/3  flex p-2 flex-col items-center justify-between text-center gap-6 text-white bg-cover bg-center bg-no-repeat "
        
      >
        <CardHeader
        className="flex justify-end-safe "
        >
          <div className="flex gap-2 bg-black px-5   py-3 -mt-2.5 -mr-2.5 rounded-bl-3xl">
         
          </div>
         
        </CardHeader>
        <CardFooter>
          <button className="border flex items-center justify-between  border-white p-2 text-white w-2/3 rounded-full hover:backdrop-blur-3xl transition-all duration-300">
            Book Demo call{" "}
            <ArrowRightIcon
              className="p-1 rounded-full bg-white "
              size={26}
              color="#000000"
            />
          </button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Footer