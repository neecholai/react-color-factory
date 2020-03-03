import React, {useState} from 'react';
import { Route, Switch, Redirect, useParams } from 'react-router-dom';
import Colors from './Colors';
import ColorsForm from './ColorsForm';
import Color from './Color';

const Routes = () => {
  const [colors, setColors] = useState(['red', 'blue', 'green']);

  const addColor = color => {
    setColors([...colors, color]);
  }

  return (
    <Switch>
      <Route exact path="/colors"><Colors colors={colors} /></Route>
      <Route exact path="/colors/new"><ColorsForm addColor={addColor} /></Route>
      <Route exact path="/colors/:color"><Color /></Route >
      <Redirect to="/colors" />
    </Switch >
  );
}

export default Routes;