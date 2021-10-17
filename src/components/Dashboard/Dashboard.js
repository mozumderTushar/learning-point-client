import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import userImg from '../../assets/arts.jpg';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [teacher, setTeacher] = useState([])
  const [tCount, setTcount] = useState([])
  const [tStripe, setTstripe] = useState([])
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    fetch('http://localhost:2000/api/all-teachers')
      .then(response => response.json())
      .then(data => {
        setTcount(data.teachers)
        setTeacher(data.teachers.slice(Math.floor(Math.random() * 11), Math.floor(Math.random() * 10) + 5))
        // setReserve(data.teachers.)
      })
  }, [])

  useEffect(() => {
    fetch('http://localhost:2000/api/stripe-info')
      .then(response => response.json())
      .then(data => {
        console.log(data.info);
        const total = data.info.filter(num => num.email === user.email)
        setTstripe(total)
      })
  }, [])

  return (
    <div>
      <input type="checkbox" id="nav-toggle" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <Link to="/">
            <h2 className="white"><span className="fab fa-accusoft"></span><i>Learning</i> <span style={ { color: "#1dbf73" } }>Point</span></h2>
          </Link>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li><a href="" className="active"><span className="fas fa-igloo"></span>
              <span>Dashboard</span></a>
            </li>
            <li><a href="/"><span className="fas fa-users"></span>
              <span>Home</span></a>
            </li>
            <li><a href="/more-subject"><span className="fas fa-clipboard-list"></span>
              <span>Subjects</span></a>
            </li>
            <li><a href="/about"><span className="fas fa-igloo"></span>
              <span>About</span></a>
            </li>
            <li><a href="contact-us"><span className="fas fa-igloo"></span>
              <span>Contact Us</span></a>
            </li>
            <li><a href=""><span className="fas fa-sign-out-alt"></span>
              <span>Log Out</span></a>
            </li>
            {/* <li><a href=""><span className="fas fa-igloo"></span>
              <span>Tasks</span></a>
            </li> */}
          </ul>
        </div>
      </div>

      <div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label>
            Dashboard
          </h2>

          <div className="search-wrapper">
            <span className="fas fa-search"></span>
            <input type="search" placeholder="Search Here" />
          </div>

          <div className="user-wrapper">
            <img src={ userImg } width="30px" height="30px" alt="" />
            <div>
              <h4>{ user.firstName } { user.lastName }</h4>
              <small>{ user.email }</small>
            </div>
          </div>
        </header>

        <main>

          <div className="cards">
            <Link to='all-teacher'>
              <div className="card-single">
                <div>
                  <h1>{ tCount.length }</h1>
                  <span>Available Teachers</span>
                </div>
                <div>
                  <span className="fas fa-users"></span>
                </div>
              </div>
            </Link>

            <Link to='more-subject'>
              <div className="card-single">
                <div>
                  <h1>14</h1>
                  <span>Available Subjects</span>
                </div>
                <div>
                  <span className="fas fa-users"></span>
                </div>
              </div>
            </Link>

            <div className="card-single">
              <div>
                <h1>{ tStripe.length }</h1>
                <span>Reserved Seat</span>
              </div>
              <div>
                <span className="fas fa-users"></span>
              </div>
            </div>

            <div className="card-single">
              <div>
                <h1>$6k</h1>
                <span>Attended Class</span>
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
                  <h2>Reserved Subjects</h2>
                  <Link to='/more-subject'><button>Reserve More <span className="fas fa-arrow-right"></span></button></Link>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Subject Title</td>
                          <td>Teacher Name</td>
                          <td>Status</td>
                        </tr>
                      </thead>
                      {
                        tStripe.map(t => (
                          <tbody>
                            <tr>
                              <td>{t.reservedSubject}</td>
                              <td>{t.teacherFirstName} {t.teacherLastName}</td>
                              <td>
                                <span className="status purple"></span>
                                review
                              </td>
                            </tr>
                          </tbody>
                        ))
                      }
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="projects">
              <div className="card">
                <div className="card-header">
                  <h2>Reserved Subjects</h2>

                  <button>See all <span className="fas fa-arrow-right"></span></button>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table width="100%">
                      <thead>
                        <tr>
                          <td>Subject Title</td>
                          <td>Teacher Name</td>
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
            </div> */}
            <div className="customers">
              <div className="card">
                <div className="card-header">
                  <h3>New Teachers</h3>
                  <Link to='all-teacher'>
                    <button>See all <span className="fas fa-arrow-right"></span></button>
                  </Link>
                </div>
                {
                  teacher.map(te => (
                    <div className="card-body" key={ te._id }>
                      <div className="customer">
                        <div className="info">
                          <img src={ userImg } width="40px" height="40px" alt="" />
                          <div>
                            <h4>{ te.firstName } { te.lastName }</h4>
                            <small>{ te.subject }</small>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="fas fa-user-circle"></span>
                        <span className="fas fa-comment"></span>
                        <span className="fas fa-phone"></span>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;