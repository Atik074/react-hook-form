import { useContext } from "react";
import { FormELementContext } from "./Form";
import cn from "../../util/cn";

export const FormSection = ({children}) => {
  const {double}  = useContext(FormELementContext)

    return (
        <div className={cn("my-7 w-full" ,{
            "max-w-5xl" : double ,
            "max-w-md"  : !double 
          })}>
            <h1>{children}</h1>
        </div>
    );
};

