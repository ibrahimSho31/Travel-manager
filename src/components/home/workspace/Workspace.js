import Sidebar from "../sidebar";
import NavBar from "../navbar";
import styles from "../workspace/workspace.css";
import { useState } from "react";
function WorkSpace({ isVisible }) {
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
      setSidebarVisible((prevState) => !prevState);
    };

  return (
    <body className="workspace-body">
    <div
    className="side"
    >
    <Sidebar isVisible={isSidebarVisible} />
    </div>
      
      <div className="space"
      style={{ width: isSidebarVisible ? '100vw' : '100vw' }}
      >
        <NavBar  onMenuClick={toggleSidebar} />
        <div className="workspace">
          <h1
            style={{
              fontSize: "25px",
              paddingBottom: "10px",
            }}
          >
            Your Workspace
          </h1>
          <h3
            style={{
              fontSize: "20px",
              fontWeight: "400",
              color: "grey",
              paddingBottom: "40px",
            }}
          >
            Welcome, xxx
          </h3>

          <h2
            style={{
              fontSize: "15px",
              fontWeight: "600",
              paddingBottom: "20px",
            }}
          >
            Overview
          </h2>

          <section className="overview">
            <section className="overview1">
              <section className="first-overview">
                <hr></hr>
                <h4>Today's Agenda</h4>

                <div>
                  <p>
                    You don't have any event schedule for today. <a>Add</a>
                  </p>
                </div>
              </section>

              <section className="second-overview">
                <hr></hr>
                <section className="SO-1">
                  <h4>Task that are due</h4>
                  <a>
                    Create Tasks <i class="bx bx-right-arrow-alt"></i>
                  </a>
                </section>

                <section className="SO-2">
                  <div className="SO-2-1">
                    <h4>
                      Follow up with <a>Odusote</a>
                    </h4>
                  </div>

                  <div className="SO-2-2">
                    <p>Due on:1/21/2021</p>
                    <p>Created on:1/15/2021</p>
                  </div>
                </section>
              </section>
            </section>

            <section className="overview2">
              <section className="overview2-sec">
                <hr></hr>

                <section className="ov2-1">
                  <h4>Activity Report</h4>

                  <a>
                    View full activity report
                    <i class="bx bx-right-arrow-alt"></i>
                  </a>
                </section>

                <section
                  style={{
                    padding: "10px",
                  }}
                >
                  <div className="ov2-2d1">
                    <hr></hr>
                    <p>Tuesday (18th Sept. 2019)</p>
                  </div>

                  <div className="ov2-2d2">
                    <p>You added a new client</p>
                    <h4 className="ov2-2d2-h41">Odusote Mayokun</h4>
                    <h4 className="ov2-2d2-h42">Status: Pending</h4>
                  </div>
                </section>
              </section>
            </section>
          </section>
        </div>
      </div>
    </body>
  );
}

export default WorkSpace;
