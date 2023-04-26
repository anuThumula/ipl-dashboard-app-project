// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamData} = props
  const {name, imageUrl, id} = teamData

  return (
    <Link exact to={`/team-matches/${id}`} className="link-cont">
      <li className="team-card">
        <img src={imageUrl} className="team-card-img" alt={name} />
        <p className="team-card-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
