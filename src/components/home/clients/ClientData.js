import Sidebar from "../sidebar";
import NavBar from "../navbar";
import { useNavigate } from "react-router-dom";
import styles from "../clients/clientdata.css";
import { useState } from "react";
function ClientsData() {
  const navigate = useNavigate();
  const clients = [
    {
      id: 1,
      tag1: "Fullname",
      tag2: "Email",
      tag3: "Phone",
      tag4: "Residential Address",
      name: "Adegoke Oluwadamilare",
      email: "adegoketemitope1909@gmail.com",
      phone: "08160730668",
      address: "No 2, Olonade Close, Monato, Ibadan Oyo State, Nigera",
    },
  ];

  function goBack() {
    navigate("/clients");
  }

  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible((prevState) => !prevState);
  };
  return (
    <body className="workspace-body">
      <Sidebar isVisible={isSidebarVisible} />
      <div className="space"
      style={{ width: isSidebarVisible ? '100vw' : '75vw' }}
      >
      <NavBar  onMenuClick={toggleSidebar} />
        <div className="workspace">
          <h1
            style={{
              fontSize: "25px",
              paddingBottom: "10px",
            }}
          >
            Clients
          </h1>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "400",
              color: "grey",
              paddingBottom: "40px",
            }}
          >
            View Client profile here
          </h3>

          <section className="cd-sec">
            <section className="cd-sec1">
              <section>
                <p
                  style={{
                    fontWeight: "700",
                  }}
                >
                  Client's Picture
                </p>
                <div className="cd-sec1div">
                  <div className="cd-profile">
                    <img src="images/user.png" />
                  </div>

                  <div className="cd-profData">
                    <h4
                      style={{
                        fontWeight: "900",
                      }}
                    >
                      Odusote Mayokun
                    </h4>
                    <p className="cd-profMail">adegoketemitope1909<br></br>@gmail.com</p>
                    <div>
                      <p>Female</p>
                      <p>54 years old</p>
                      <p>Nigerian</p>
                    </div>
                  </div>
                </div>
              </section>
            </section>

            <section className="cd-sec2">
              <section>
                <p>Full name</p>
                <h4>Odusote Mayokun</h4>

                <p>
                  Applicant Fullname <span>(as shown in passport)</span>
                </p>
                <h4>Odusote Mayokun Kemi</h4>

                <div className="birth-info">
                  <div>
                    <p>Place of Birth</p>
                    <h4>Nigera</h4>
                  </div>

                  <div>
                    <p>Date of Birth</p>
                    <h4>04/11/2012</h4>
                  </div>
                </div>

                <p>Marital Status</p>
                <h4>Married</h4>

                <p>Current Occupation</p>
                <h4>Engineer</h4>

                <p>Residential Address</p>
                <h4>No 2, Olonade Close, Monato, Ibadan Oyo State, Nigera</h4>

                <p>Country of interest</p>
                <h4>Iceland</h4>
              </section>

              <section>
                <p>Email</p>
                <h4>
                  adegoketemitope1909<br></br>@gmail.com
                </h4>

                <p>Gender</p>
                <h4>Female</h4>

                <p>Country of citizenship</p>
                <h4>Nigeria, Uganda</h4>

                <p>
                  Education
                  <span> (Client's highest level of Education)</span>
                </p>
                <h4>Bachelor's Degree</h4>

                <p>Phone Number</p>
                <h4>+234(0)8160730668</h4>

                <p>Mailing Address</p>
                <h4>No 2, Olonade Close, Monato, Ibadan Oyo State, Nigera</h4>

                <p>Purpose of Traveling</p>
                <h4>Trading</h4>
              </section>
            </section>

            <section className="cd-btn-sec">
              <button onClick={goBack}>Back</button>
            </section>
          </section>
        </div>
      </div>
    </body>
  );
}

export default ClientsData;
