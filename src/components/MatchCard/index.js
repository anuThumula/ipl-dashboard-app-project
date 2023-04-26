// Write your code here
import './index.css'

import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competingTeam, competingTeamLogo, matchStatus} = matchData

    return (
      <li className={`match-card ${matchStatus}`}>
        <img
          className="match-logo"
          src={competingTeamLogo}
          alt={`competing-team ${competingTeam}`}
        />
        <p className="mach-name">{competingTeam}</p>
        <p className="match-result">{result}</p>
        <p className="match-status">{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
