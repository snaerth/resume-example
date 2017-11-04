import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../../components/button';
import './notfound.css';

export default class NotFound extends Component {
  static propTypes = {
    staticContext: PropTypes.shape({
      status: PropTypes.number,
    }),
  };

  componentWillMount() {
    const { staticContext } = this.props;
    if (staticContext) {
      staticContext.status = 404;
    }
  }

  render() {
    return (
      <div>
        <section className="notfound_container">
          <div className="notfound_center">
            <h1 className="name visible relative text-center no-padding">
              404
            </h1>
            <p className="text-section text-center">
              The page you were looking for was not found.
            </p>
            <Link to="/">
              <div className="job-application--button-container">
                <Button text="Go back to Home" />
              </div>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}
