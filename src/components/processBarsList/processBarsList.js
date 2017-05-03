import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Processbars from '../processBars';
import classnames from 'classnames';
import './processBarsList.css';

class ProcessBarsList extends Component {
  static propTypes = {
    processbars: PropTypes.array.isRequired,
    visibleArr: PropTypes.array.isRequired
  };

  renderRows() {
    const { processbars, visibleArr } = this.props;
    return processbars.map((processbar, i) => {
      return (
        <div key={'processbarlist-row' + i}>
          <h2 className="name visible relative processbars-header">
            <span>{processbar.title}</span>
          </h2>
          <div
            className={classnames(
              'onscroll-reveal processbars',
              'processbar-' + i
            )}
          >
            {visibleArr[i]
              ? <Processbars height={20} data={processbar.items} id={i} />
              : null}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="processbars-list-container">{this.renderRows()}</div>
    );
  }
}

export default ProcessBarsList;
