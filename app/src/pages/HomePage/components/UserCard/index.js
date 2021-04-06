import PropTypes from "prop-types";

import "./styles.css";

const UserCard = ({ name, age }) => {
  return (
    <div className="wrapper">
      <p>Hello, {name}</p>
      <p>I'm, {age} y.e</p>
    </div>
  );
};

UserCard.defaultProps = {
  name: "Some user"
};

UserCard.propTypes = {
  name: PropTypes.string
};

export default UserCard;
