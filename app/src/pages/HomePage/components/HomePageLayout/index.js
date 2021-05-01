import { Link } from "react-router-dom";

import Routes from "../../../../routes/routesNames";
import NextPage from "../../../../comonComponents/NextPage";

const HomePageLayout = ({ name, age }) => {
  return (
    <>
      <Link to={Routes.COUNTER_PAGE}>
        <NextPage page="Counter page" />
      </Link>
      <Link to={Routes.TODO_LIST_PAGE}>
        <NextPage page="Todo List" />
      </Link>
    </>
  );
};

export default HomePageLayout;
