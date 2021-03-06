import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import ViewJob from './ViewJob';
// import SummaryGraph from './SummaryGraph';

class ResearchingTable extends Component {
  state = {};

  render() {
    return (
      <div className="table-job">
        <table className="rtable">
          <thead>
            <tr>
              <th>Company</th>
              <th>Position</th>
              <th>Link</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody className="tbody saved-jobs" id="saved-jobs">
            {this.props.jobs.filter(data => {
              return (
                <tr key={data._id}>
                  <td>{data.company}</td>
                  <td>{data.position}</td>
                  <td>{data.link}</td>
                  <td>{data.status}</td>
                  <td>
                    <Link
                      to={{
                        pathname: '/job/view',
                        state: {
                          jobInfo: data
                        }
                      }}
                    >
                      <button data-id={data._id} id="view-btn">
                        View
                      </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MyTable;
