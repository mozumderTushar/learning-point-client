import React from 'react';
import './Dashboard.css';
import userImg from '../../assets/arts.jpg'

const Dashboard = () => {
  return (
    <div>
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <h2 className="white"><span className="fab fa-accusoft"></span><i>Learning</i> <span style={ { color: "#1dbf73" } }>Point</span></h2>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li><a href="" className="active"><span className="fas fa-igloo"></span>
              <span>Dashboard</span></a>
            </li>
            <li><a href=""><span className="fas fa-users"></span>
              <span>Customers</span></a>
            </li>
            <li><a href=""><span className="fas fa-clipboard-list"></span>
              <span>Projects</span></a>
            </li>
            <li><a href=""><span className="fas fa-igloo"></span>
              <span>Orders</span></a>
            </li>
            <li><a href=""><span className="fas fa-igloo"></span>
              <span>Inventory</span></a>
            </li>
            <li><a href=""><span className="fas fa-igloo"></span>
              <span>Accounts</span></a>
            </li>
            <li><a href=""><span className="fas fa-igloo"></span>
              <span>Tasks</span></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="main-content">
        <header>
          <h2>
            <label for="nav-toggle">
              <span className="fas fa-bars"></span>
            </label>
            Dashboard
          </h2>

          <div className="search-wrapper">
            <span className="fas fa-search"></span>
            <input type="search" placeholder="Search Here" />
          </div>

          <div className="user-wrapper">
            <img src={userImg} width="30px" height="30px" alt="" />
            <div>
              <h4>John Doe</h4>
              <small>Super Admin</small>
            </div>
          </div>
        </header>

        <main>

          <div className="cards">
            <div className="card-single">
              <div>
                <h1>54</h1>
                <span>Customers</span>
              </div>
              <div>
                <span className="fas fa-users"></span>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>79</h1>
                <span>Projects</span>
              </div>
              <div>
                <span className="fas fa-users"></span>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>123</h1>
                <span>Orders</span>
              </div>
              <div>
                <span className="fas fa-users"></span>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>$6k</h1>
                <span>Income</span>
              </div>
              <div>
                <span className="fas fa-google-wallet"></span>
              </div>
            </div>
          </div>

          <div className="recent-grid">
            <div className="projects">
              <div className="card">
                <div className="card-header">
                  <h2>Recent Projects</h2>

                  <button>See all <span className="fas fa-arrow-right"></span></button>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Project Title</td>
                        <td>Department</td>
                        <td>Status</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>UI/UX Design</td>
                        <td>UI Team</td>
                        <td>
                          <span className="status purple"></span>
                          review
                        </td>
                      </tr>
                      <tr>
                        <td>Web Development</td>
                        <td>Frontend</td>
                        <td>
                          <span className="status pink"></span>
                          in progress
                        </td>
                      </tr>
                      <tr>
                        <td>Ushop app</td>
                        <td>UI Team</td>
                        <td>
                          <span className="status orange"></span>
                          pending
                        </td>
                      </tr>
                      <tr>
                        <td>UI/UX Design</td>
                        <td>UI Team</td>
                        <td>
                          <span className="status purple"></span>
                          review
                        </td>
                      </tr>
                      <tr>
                        <td>Web Development</td>
                        <td>Frontend</td>
                        <td>
                          <span className="status pink"></span>
                          in progress
                        </td>
                      </tr>
                      <tr>
                        <td>Ushop app</td>
                        <td>UI Team</td>
                        <td>
                          <span className="status orange"></span>
                          pending
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
              </div>
            </div>
            <div className="customers">
              <div className="card">
                <div className="card-header">
                  <h3>New Teacher</h3>

                  <button>See all <span className="fas fa-arrow-right"></span></button>
                </div>
                <div className="card-body">
                  <div className="customer">
                    <div className="info">
                    <img src={userImg} width="40px" height="40px" alt="" />
                    <div>
                      <h4>Lewis S. Cunningham</h4>
                      <small>CEO Excerpt</small>
                    </div>
                    </div>
                  </div>
                  <div>
                    <span className="fas fa-user-circle"></span>
                    <span className="fas fa-comment"></span>
                    <span className="fas fa-phone"></span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="customer">
                    <div className="info">
                    <img src={userImg} width="40px" height="40px" alt="" />
                    <div>
                      <h4>Lewis S. Cunningham</h4>
                      <small>CEO Excerpt</small>
                    </div>
                    </div>
                  </div>
                  <div>
                    <span className="fas fa-user-circle"></span>
                    <span className="fas fa-comment"></span>
                    <span className="fas fa-phone"></span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="customer">
                    <div className="info">
                    <img src={userImg} width="40px" height="40px" alt="" />
                    <div>
                      <h4>Lewis S. Cunningham</h4>
                      <small>CEO Excerpt</small>
                    </div>
                    </div>
                  </div>
                  <div>
                    <span className="fas fa-user-circle"></span>
                    <span className="fas fa-comment"></span>
                    <span className="fas fa-phone"></span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="customer">
                    <div className="info">
                    <img src={userImg} width="40px" height="40px" alt="" />
                    <div>
                      <h4>Lewis S. Cunningham</h4>
                      <small>CEO Excerpt</small>
                    </div>
                    </div>
                  </div>
                  <div>
                    <span className="fas fa-user-circle"></span>
                    <span className="fas fa-comment"></span>
                    <span className="fas fa-phone"></span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="customer">
                    <div className="info">
                    <img src={userImg} width="40px" height="40px" alt="" />
                    <div>
                      <h4>Lewis S. Cunningham</h4>
                      <small>CEO Excerpt</small>
                    </div>
                    </div>
                  </div>
                  <div>
                    <span className="fas fa-user-circle"></span>
                    <span className="fas fa-comment"></span>
                    <span className="fas fa-phone"></span>
                  </div>
                </div>
                <div className="card-body">
                  <div className="customer">
                    <div className="info">
                    <img src={userImg} width="40px" height="40px" alt="" />
                    <div>
                      <h4>Lewis S. Cunningham</h4>
                      <small>CEO Excerpt</small>
                    </div>
                    </div>
                  </div>
                  <div>
                    <span className="fas fa-user-circle"></span>
                    <span className="fas fa-comment"></span>
                    <span className="fas fa-phone"></span>
                  </div>
                </div>
              </div>     
            </div>
          </div>

        </main>

      </div>



    </div>
  );
};

export default Dashboard;