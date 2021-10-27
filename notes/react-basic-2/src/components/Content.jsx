import PropTypes from 'prop-types'

export default function Content (props) {
  return (
    <div className="text-center">
      {props?.title}
      <p>Count: {props?.number * 100}</p>
    </div>
  )
}

Content.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number
}