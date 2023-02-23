import { ListGroup} from "react-bootstrap"
import { useEffect, useReducer, useState } from "react"
import MatchReducer, { initialState } from "../contexts/MatchReducer";

// @ts-ignore
const MatchComponent = () => {

  const [state] = useReducer(MatchReducer, initialState)


  const [matchInfo, setMatchInfo] = useState<any>();
  const [teamOne, setTeamOne] = useState<object[]>([]);
  const [teamTwo, setTeamTwo] = useState<object[]>([]);

  useEffect(() => {
    setMatchInfo(state.matchInfo)
    setTeamOne(state.teamOnePlaying11)
    setTeamTwo(state.teamTwoPlaying11)
  }, [state.matchInfo, state.teamOnePlaying11, state.teamTwoPlaying11])
  console.log("Context State ",state)
  return (
    <div className="match-info">
      {/* <div className="match-details border border-muted border-2 rounded p-2 my-3">
        <p className="text-capitalize fw-bold fs-5 mb-0">between: <span>{matchInfo.teamOne}</span> v <span>{matchInfo.teamTwo}</span></p>
        <p className="text-capitalize fw-bold fs-5 mb-0">Toss: <span>{matchInfo.tossWinner} opt to {matchInfo.tossDecision}</span></p>
        <p className="text-capitalize fw-bold fs-5 mb-0">Venue: <span>retro drive inn, madhapur</span></p>
      </div>
      <div className="playing-11 d-flex rounded">
        <ListGroup className="col me-2 border">
          <ListGroup.Item className="fw-bold">{matchInfo.teamOne}</ListGroup.Item>
          {teamOne.map((player: any, index: any) => {
            return (
              <ListGroup.Item key={index} className=' text-capitalize fw-bold'>{player.name}</ListGroup.Item>
            )
          })
          }
        </ListGroup>
        <ListGroup className="col ms-2 border">
          <ListGroup.Item className="fw-bold ">{matchInfo.teamTwo}</ListGroup.Item>
          {teamTwo.map((player: any, index: any) => {
            return (
              <ListGroup.Item key={index} className=' text-capitalize fw-bold'>{player.name}</ListGroup.Item>
            )
          })
          }
        </ListGroup>
      </div> */}
    </div>
  )
}

export default MatchComponent;