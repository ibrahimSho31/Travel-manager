import Sidebar from "../sidebar"
import NavBar from "../navbar"
import { useNavigate } from "react-router-dom"
import styles from "../clients/clients.css"
import { useState } from "react"
function Clients(){
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
      setSidebarVisible((prevState) => !prevState);
    };

    const navigate = useNavigate();

    function proceed(){
        navigate("/clientdata")
      }


    const clients = [
        {
            id: 1,
            tag1: "Name",
            tag2: "Email",
            tag3: "Phone",
            tag4: "Residential Address",
            name: "Adegoke Oluwadamilare",
            
            phone: "08160730668",
            address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigera"
        },
        {
            id: 2,
            name: "Adegoke Oluwadamilare",
            
            phone: "08160730668",
            address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigera"
        },
        {
            id: 3,
            name: "Adegoke Oluwadamilare",
            
            phone: "08160730668",
            address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigera"
        },
        {
            id: 4,
            name: "Adegoke Oluwadamilare",
            
            phone: "08160730668",
            address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigera"
        },
        {
            id: 5,
            name: "Adegoke Oluwadamilare",
            
            phone: "08160730668",
            address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigera"
        },
        {
            id: 6,
            name: "Adegoke Oluwadamilare",
            
            phone: "08160730668",
            address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigera"
        },
    ]

    return(
        <body
        className="workspace-body"
        >
            
            <Sidebar isVisible={isSidebarVisible} />
            <div
            className="space"
            style={{ width: isSidebarVisible ? '100vw' : '75vw' }}
            >
            <NavBar  onMenuClick={toggleSidebar} />
            <div className="workspace">

            <h1
                style={{
                    fontSize: '25px',
                    paddingBottom: '10px'
                }}
                >Clients</h1>
                <h3
                style={{
                    fontSize: '20px',
                    fontWeight: '400',
                    color: "grey",
                    paddingBottom: "40px"
                }}
                >Here's the clients list</h3>

                <section className="client-sec">
                    <section className="client-sec1">
                    <input type="text" placeholder="&#x1F50D; Search by name, email ..." />
                    
                    <div>
                    <button>Add new Client</button>
                    </div>
                    
                    </section>

                    <section
                    className="client-sec2"
                    >
                    <div>
                <table
                className="clientstable"
                >
                    <thead>
                    <tr>
                        <th>
                        Name
                        </th>
                        <th>
                        Email
                        </th>
                        <th>
                        Phone
                        </th>
                        <th>
                        Residential Address
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {clients.map((client) => (
                        <tr key={client.id} onClick={proceed}>
                        <td>
                            {client.name}
                        </td>
                        <td>
                        adegoketemitope<br></br>1909@gmail.com
                        </td>
                        <td>
                            {client.phone}
                        </td>
                        <td className="lasttd">
                            {client.address}
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>

                    </section>
                </section>
            </div>
            </div>
        </body>
    )
}

export default Clients