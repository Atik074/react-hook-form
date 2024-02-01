import { useContext } from "react";
import cn from "../../util/cn";
import { FormELementContext } from "./Form";

export const FormSubmit = () => {
  const {double} = useContext(FormELementContext)

    return (
        <div className={cn("w-full" ,{
            "max-w-5xl" : double ,
            "max-w-md"  : !double 
          })}>
              <div className=" w-full max-w-md col-start-1 md:col-start-2  flex justify-end">
                <button className="bg-orange-500 text-2xl rounded-md px-4 py-1 w-full md:w-fit">Submit</button>
            </div>
        </div>
    );
};

