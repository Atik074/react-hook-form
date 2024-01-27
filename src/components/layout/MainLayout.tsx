import { Outlet } from "react-router-dom";
import ReactHookForm from "../reactHookForm/ReactHookForm";

const MainLayout = () => {
    return (
        <div className="w-[1250px] mx-auto">
              <ReactHookForm/>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;