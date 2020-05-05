import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen.jsx";

it(`Render WelcomeScreen`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorCount={3}
      time={5}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
