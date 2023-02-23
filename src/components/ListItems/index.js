import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const ListItems = props => {
  const {eachList, onDeleteList} = props
  const {id, imageUrl, name, genre, duration} = eachList

  const deleteList = () => {
    onDeleteList(id)
  }

  return (
    <li className="list-item-container">
      <div className="img-container">
        <img className="card-img" src={imageUrl} alt="track" />
        <div className="img-names-container">
          <p className="music-name">{name}</p>
          <p className="music-type">{genre}</p>
        </div>
      </div>
      <div className="time-container">
        <p className="time-text">{duration}</p>
        <button
          type="button"
          className="delete-btn"
          onClick={deleteList}
          data-testid="delete"
        >
          <AiOutlineDelete className="delete-icon" />
        </button>
      </div>
    </li>
  )
}
export default ListItems
