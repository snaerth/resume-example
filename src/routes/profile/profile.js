import React, {Component} from 'react';
import Resume from '../../components/resume';
import './profile.css';

class Profile extends Component {
  render() {
    return (
      <div className="page-container">
        <Resume />
      </div>
    );
  }
}

export default Profile;
