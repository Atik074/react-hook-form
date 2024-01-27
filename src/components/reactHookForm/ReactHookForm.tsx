import { useForm } from "react-hook-form";

const ReactHookForm = () => {
    const {register , handleSubmit} = useForm()

    const onSubmit = (data) =>{
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10    border border-red-500 p-6">
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-y-4 gap-x-10">
            <div>
                <label className="block" htmlFor="name">Name</label>
                <input className="border rounded w-full" type="text" id="name" {...register('name')} />
            </div>
            <div>
                <label className="block" htmlFor="email">Email</label>
                <input className="border rounded w-full" type="email" id="email" {...register('email')} />
            </div>

            <div>
                <label className="block" htmlFor="name">Contact Number</label>
                <input className="border rounded w-full" type="number" id="number" {...register('number')} />
            </div>
            <div>
                <label className="block" htmlFor="password">Password</label>
                <input className="border rounded w-full" type="password" id="password" {...register('password')} />
            </div>
           
            <input className="border border-black px-6 py-1 text-2xl rounded-md w-1/2 " type="submit" value="submit" />
  
   
     </div>
           
        </form>
    );
};

export default ReactHookForm;