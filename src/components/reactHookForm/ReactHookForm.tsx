import { useForm } from "react-hook-form";
import cn from "../../util/cn";

const ReactHookForm = () => {
    const {register , handleSubmit} = useForm()

    const onSubmit = (data) =>{
        console.log(data)
    }
   const double = true;

    return (
        <form onSubmit={handleSubmit(onSubmit)}
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
            </div>
            <div className="w-full max-w-md">
                <label className="block" htmlFor="email">Email</label>
                <input className="border rounded" type="email" id="email" {...register('email')} />
            </div>

            <div className="w-full max-w-md">
                <label className="block" htmlFor="name">Contact Number</label>
                <input className="border rounded" type="number" id="number" {...register('number')} />
            </div>
            <div className="w-full max-w-md">
                <label className="block" htmlFor="password">Password</label>
                <input className="border rounded mb-2" type="password" id="password" {...register('password')} />
                <input  type="checkbox" name="" id="" />
            </div>
           
          

     </div>

     <div className={cn(" grid grid-cols-1 justify-items-center   gap-y-4 gap-x-10 mt-2" , {
          "md:grid-cols-2" : double
        })}>

            <div className="bg-green-400 w-full max-w-md col-start-1 md:col-start-2  flex justify-end">
                <button className="bg-orange-500 text-2xl rounded-md px-4 py-1 w-full md:w-fit">Submit</button>
            </div>
         </div>
           
        </form>
    );
};

export default ReactHookForm;