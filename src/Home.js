import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
   
    useEffect(() => {
       

        //Pass

    }, []);

    return (
        <div>
            
            <h1 className="text-center">🥳 WELCOME!</h1>
            <h2 className="text-center">We appreciate your presence here 🫶🏻 </h2>
            
            {<table className="table table-bordered">
                <thead>
                    <tr>
                        <td>Code</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Credit Limit</td>
                    </tr>
                </thead>
                <tbody>
                    {customerlist &&
                        customerlist.map(item => (
                            <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.creditLimit}</td>
                            </tr>

                        ))
                    }
                </tbody>

            </table> }
        </div>
    );
}

export default Home;