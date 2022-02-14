import React, {useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getData, logoutUser } from '../service/api';

const Home = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const data = async () => {
            const res = await getData(id);
            if(!res){
                navigate('/');
            }
        };
        data();
    }, []);

    const logout = async () => {
        const res = await logoutUser();
        console.log(res.status);
        if(res.status === 200){
            navigate('/');
        }
    }


    return (
        <div>
            <h1>Hello This is home page...</h1>
            <center>
                <button style={{ padding: '8px 20px', marginTop: '20px' }} onClick={logout}>Logout</button>
            </center>
        </div>
    )
};

export default Home;