import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const MoreSubject = () => {
  return (
    <div className="subjectList">
    <div>
      <div>
        <Navigation />
        <div>
          <h2>More Subjects For You</h2>
        </div>
      </div>
    </div>
    <div>
      <div>
        <h3>Science Tutors</h3>
        <ul>
          <li>
            <Link to='/'>Physics Tutors</Link>
          </li>
          <li>
            <Link to='/'>Chemistry Tutors</Link>
          </li>
          <li>
            <Link to='/'>Higher Math Tutors</Link>
          </li>
          <li>
            <Link to='/'>Biology Tutors</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Humanities Tutors</h3>
        <ul>
          <li>
            <Link to='/'>HistoryTutors</Link>
          </li>
          <li>
            <Link to='/'>English Tutors</Link>
          </li>
          <li>
            <Link to='/'>Geology Tutors</Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Business Tutors</h3>
        <ul>
          <li>
            <Link to='/'>Economics Tutors</Link>
          </li>
          <li>
            <Link to='/'>Accounting Tutors</Link>
          </li>
          <li>
            <Link to='/'>Marketing Tutors</Link>
          </li>
          <li>
            <Link to='/'>Finance Tutors</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  );
};

export default MoreSubject;