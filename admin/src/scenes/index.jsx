import NavBar from "@/components/common/NavBar";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Spinner from "@/components/unused/spinner";
import API from "@/api";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthToken, setUser } from "../redux/user/userSlice";

function Root() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        async function init() {
            try {
                let response = await API.get("/users/token");
                dispatch(setAuthToken(response.data.token));
                dispatch(setUser(response.data.user));
                API.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
                //API.setAuthToken(response.token);
                console.log(response);
                setLoading(false);

                /*Redirect if the profile has not been created!*/
                if(!response.data.user.profileCreated && location.pathname !== "/create-profile"){
                    navigate("/create-profile");
                }
            } catch (error) {
                if (error.response.status === 401) {
                    setLoading(false);
                    return;
                }
                console.log(error);
            }
        }
        init();
    }, [navigate, location]);

    return (
        <>
            <NavBar />
                {loading && <Spinner />}
                {!loading && <Outlet />}
            <Toaster />
        </>
    );
}

export default Root;