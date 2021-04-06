import { Component } from "react";

import HomePageLayout from "../components/HomePageLayout";

class HomePageContainer extends Component {
  render() {
    return <HomePageLayout name="Ihor" age={22} />;
  }
}

export default HomePageContainer;
