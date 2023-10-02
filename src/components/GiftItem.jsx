import { PropTypes } from 'prop-types'

// eslint-disable-next-line react/prop-types
function GiftItem({title, url}) {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

GiftItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GiftItem