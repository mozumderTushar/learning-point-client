import React from 'react';
import { Link } from 'react-router-dom';
import './Subjects.css'
import Button from '@mui/material/Button';
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Subjects = () => {
  return (
    <div className="subject">
    <div>
      <h2>Tutors</h2>
      <p>Let's see who is waiting For you</p>
    </div>
    <div>
      <div>
        <img
          src="https://assets.skooli.com/images/homepage-images/homepage-tutors.png?1605871329"
          alt=""
        />
      </div>
      <div>
        <h2>Find your subject expert</h2>
        <h3>Get instant help for your questions.</h3>
        <div className='subject-list'>
          <Link to="/subject/math" >
            <Button className="black" >
              Math <ArrowRightAltIcon></ArrowRightAltIcon>
            </Button>
          </Link>
          <Link to="/subject/physics" >
            <Button className="black">
              Physics <ArrowRightAltIcon></ArrowRightAltIcon>
            </Button>
          </Link>
          <Link to="/subject/english" >
            <Button className="black">
              English <ArrowRightAltIcon></ArrowRightAltIcon>
            </Button>
          </Link>
          <Link to="/subject/science" >
            <Button className="black">
              Science <ArrowRightAltIcon></ArrowRightAltIcon>
            </Button>
          </Link>
          <Link to="/subject/business" >
            <Button className="black">
              Business <ArrowRightAltIcon></ArrowRightAltIcon>
            </Button>
          </Link>
          <Link to="/more-subject" >
            <Button className="black" variant="outlined" color="primary">
              More Subjects.
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Subjects;