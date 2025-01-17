import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
  
  const {price, features, name} = option;
    
  return (
    <div className='bg-blue-400 text-white flex flex-col p-6 rounded-xl '>
      <h1 className='text-center'>
        <span className='text-4xl font-extrabold'>{price}</span>
        <span className='font-bold'>/mon</span>
      </h1>
      <h1 className='text-center text-xl font-bold mt-2'>{name}</h1>
      <div className='my-4 flex-grow'>
        {
          features.map((feature, idx) => <Feature 
          key={idx}
          feature={feature}
          ></Feature>)
        }
      </div>
      <button  className='bg-green-600 w-full py-2 font-semibold rounded-lg mt-9'>Purchase Now</button>
    </div>
  )
}

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption