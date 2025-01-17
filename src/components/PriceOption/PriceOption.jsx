import PropTypes from 'prop-types'

const PriceOption = ({option}) => {
  console.log(option)
    
  return (
    <div>PriceOption</div>
  )
}

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption