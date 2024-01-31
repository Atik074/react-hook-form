import { createContext } from "react";
import cn from "../../util/cn";

export const FormELementContext = createContext<{double: boolean} | null>(null)

export const Form = ({children , onSubmit, double}) => {
   
    return (

        <FormELementContext.Provider value={{double}}>
           <form onSubmit={onSubmit}  className={cn("mt-10 w-full   border p-6" ,{
            "max-w-5xl" : double ,
            "max-w-md"  : !double 
          })}>
              <h1> {children}</h1>
            </form>
        </FormELementContext.Provider>
      
    );
};

