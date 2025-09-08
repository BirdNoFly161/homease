import NavBar from "@/components/common/NavBar";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "@/components/unused/spinner";
import API from "@/api";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthToken, setUser } from "../redux/user/userSlice";

function Root() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        async function init() {
            try {
                let response = await API.get("/users/token");
                dispatch(setAuthToken(response.data.token));
                dispatch(setUser(response.data.user));
                API.defaults.headers.common['Authorization'] = `Bearer ${response.token}`
                //API.setAuthToken(response.token);
                console.log(response);
                setLoading(false);
            } catch (error) {
                if (error.response.status === 401) {
                    setLoading(false);
                    return;
                }
                console.log(error);
            }
        }
        init();
    }, []);

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