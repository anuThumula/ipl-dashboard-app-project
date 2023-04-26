// Write your code here
import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props

    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div className="lm-cont">
        <h1 className="lm-heading">Latest Match</h1>
        <div className="lm-card">
          <div className="lm-logo-cont">
            <div className="lm-details">
              <h1 className="lm-team-name">{competingTeam}</h1>
              <p className="lm-date">{date}</p>
              <p className="lm-venue">{venue}</p>
              <p className="lm-status">{result}</p>
            </div>
            <img
              className="lm-logo"
              src={competingTeamLogo}
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="lm-details-info">
            <div className="match-info-item">
              <p className="lm-details-label">First Innings</p>
              <p className="lm-details-value">{firstInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="lm-details-label">Second Innings</p>
              <p className="lm-details-value">{secondInnings}</p>
            </div>
            <div className="match-info-item">
              <p className="lm-details-label">Man Of The Match</p>
              <p className="lm-details-value">{manOfTheMatch}</p>
            </div>
            <div className="match-info-item">
              <p className="lm-details-label">Umpires</p>
              <p className="lm-details-value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
