import PropTypes from 'prop-types'
import { IoMdCheckmarkCircle } from "react-icons/io";

const Feature = ({feature}) => {
  return (
    <div>
        <p className="flex items-center mt-2 text-sm gap-3"><IoMdCheckmarkCircle className="text-green-400 text-xl"></IoMdCheckmarkCircle> {feature}</p>

    </div>
  )
}
Feature.propTypes = {
    feature: PropTypes.array
}
export default Feature