import { FieldValues, FormProvider, useForm } from "react-hook-form";
import cn from "../../util/cn";
import { zodResolver } from "@hookform/resolvers/zod";
import { TNormalForm, signUpShcema , } from "./Validation";





const ReactHookForm = () => {
    const methods = useForm<TNormalForm>({
            resolver:zodResolver(signUpShcema)
    })

    const {register , handleSubmit, formState:{errors}}  =methods

    const onSubmit = (data:FieldValues) =>{
        console.log(data)
    }
   const double = true;

    return (
        <FormProvider {...methods}>
             <form onSubmit={methods.handleSubmit(onSubmit)}
         className={cn("mt-10 w-full   border p-6" ,{
           "max-w-5xl" : double ,
           "max-w-md"  : !double 
         })}>

         
        <div className={cn(" grid grid-cols-1 justify-items-center   gap-y-4 gap-x-10" , {
          "md:grid-cols-2" : double
        })}>
            <div className="w-full max-w-md">
                <label className="block" htmlFor="name">Name</label>
            <input  type="text" id="name" {...register('name')} />
            {
                  errors.name && (
                        <span className="text-red-500 text-md ml-6">{errors?.name?.message}</span>
                    )}
          
            </div>
            
            <div className="w-full max-w-md">
                <label className="block" htmlFor="email">Email</label>
                <input className="border rounded" type="email" id="email" {...register('email')} />
                {
                  errors.email && (
                        <span className="text-red-500 text-md ml-6">{errors?.email?.message}</span>
                    )}
            </div>

      

            <div className="w-full max-w-md">
                <label className="block" htmlFor="password">Password</label>
                <input className="border rounded mb-2" type="password" id="password" {...register('password')} />
                
                <input  type="checkbox" name="" id="" />
                {
                  errors.password && (
                        <span className="text-red-500 text-md ml-6">{errors?.password?.message}</span>
                    )}

               
            </div>
           
          

     </div>

     <div className={cn(" grid grid-cols-1 justify-items-center   gap-y-4 gap-x-10 mt-2" , {
          "md:grid-cols-2" : double
        })}>

            <div className=" w-full max-w-md col-start-1 md:col-start-2  flex justify-end">
                <button className="bg-orange-500 text-2xl rounded-md px-4 py-1 w-full md:w-fit">Submit</button>
            </div>
         </div>
           
        </form>

        </FormProvider>
       
    );
};

export default ReactHookForm;