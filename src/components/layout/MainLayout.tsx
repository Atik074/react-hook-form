import { Outlet } from "react-router-dom";
import ReactHookForm from "../reactHookForm/ReactHookForm";
import { Form } from "../reactHookForm/Form";
import { FormSection } from "../reactHookForm/FormSection";
import { FormSubmit } from "../reactHookForm/FormSubmit";
import { FieldValues, useForm } from "react-hook-form";
import { Input } from "../../ReuseableForm/input";


const MainLayout = () => {
    const {handleSubmit , register , formState:{errors}} = useForm()

    const onSubmit = (data : FieldValues)=>{
        console.log(data)
    }

    return (
        <div className="w-[1250px] mx-auto">
              <ReactHookForm/>
             {/* barrel Pattern */}
             <Form double={true} onSubmit={handleSubmit(onSubmit)}>
                <FormSection>

                <div className="w-full max-w-md">
                <label className="block" htmlFor="name">Name</label>
                 <input  type="text" id="name" {...register('name')} />
                   
                   {errors.name && (
                        <span className="text-red-500 text-md ml-6">{errors?.name?.message}</span>
                    )}
          
                    </div>

                 <Input 
                     type='text'
                        register={register('text')}
                        label= "Name"
                         errors={errors}
                    />
                     



                </FormSection>
                <FormSubmit/>
             </Form>
            {/* barrel Pattern */}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;