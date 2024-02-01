
export const Input = ({label , register , errors , type}) => {
    return (
    
     <div className="w-full max-w-md">
        <label className="block" htmlFor="email">{label}</label>
     <input className="border rounded" type={type} id="email" {...register} />
                {
                  errors.email && (
                        <span className="text-red-500 text-md ml-6">{errors?.email?.message}</span>
                    )}
            </div>

    );
};

