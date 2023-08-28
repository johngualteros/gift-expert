// eslint-disable-next-line react/prop-types
function GiftItem({title, url}) {
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default GiftItem