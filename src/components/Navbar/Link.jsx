import PropTypes from 'prop-types'
export const Link = ({route}) => {
  return (
      <li className="mr-3 hover:bg-slate-600">
        <a href={route.route}>{route.name}</a>
      </li>
  );
};

Link.propTypes = {
    route: PropTypes.object
}