import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@mui/material";

const Record = () => {
    const [ data, setdata ] = useState([])
    const [ user, setUser ] = useState('')
    const read = async () => {
        // const res = await axios.get('http://localhost:4000/users/Admin', {
            const res = await axios.get('https://eattendance.onrender.com/users/Admin', {
            headers: {
                'If-None-Match': 'ETag-value-from-previous-request'
            }
        })
        setdata(res.data.found)
        // console.log(res.data);
    }
    const del_user = async (e) => {
        e.preventDefault()
        // const res = await axios.post('http://localhost:4000/users/delete', {
        const res = await axios.post('https://eattendance.onrender.com/users/delete', {
            Fac_ID: user
        })

        if (res.status === 200) {
            console.log("success")
            window.location.reload();
        }
        else {
        }
    }
    useEffect(() => {
        read()
    }, [])
    return (
        <>
            <div className="account-tables mx-auto border mt-5 overflow-auto" >
                <table className="table table-striped  table-hover ">
                    <thead>
                        <tr>
                            <th>Fac_ID</th>
                            <th>Fac_Name</th>
                            <th>Department</th>
                            <th>Phone_no</th>
                            <th>Email</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // console.log(data?.found)
                            data?.map((data, index) =>
                                <tr onMouseOver={() => { setUser(data.Fac_ID) }} style={{ 'textAlign': 'center' }} key={index}>
                                    <td>{data.Fac_ID}</td>
                                    <td>{data.Fac_Name}</td>
                                    <td>{data.Department}</td>
                                    <td>{data.Phone_no}</td>
                                    <td>{data.Email}</td>
                                    <td><Button onClick={del_user} variant="outlined" color="error">DELETE</Button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </>
    );
}

export default Record;