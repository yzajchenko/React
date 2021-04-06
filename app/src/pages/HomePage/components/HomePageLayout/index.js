import PropTypes from "prop-types";

import UserCard from "../UserCard";

const HomePageLayout = ({ name, age }) => {
  return (
    <>
      <div>
        <UserCard name={name} age={age} />
      </div>
      <div>
        <UserCard name={name} age={age} />
      </div>
      <div>
        <UserCard name={name} age={age} />
      </div>
      <div>
        <UserCard name={name} age={age} />
      </div>
    </>
  );
};

HomePageLayout.defaultProps = {
  name: "Some user"
};

HomePageLayout.propTypes = {
  name: PropTypes.string
};

export default HomePageLayout;
