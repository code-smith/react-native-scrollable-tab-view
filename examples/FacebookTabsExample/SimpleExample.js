import React from 'react';
import {
  Text,
} from 'react-native';

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import Container from './container.js'

export default React.createClass({
  render() {
    return <ScrollableTabView
      style={{marginTop: 20, }}
      renderTabBar={() => <DefaultTabBar />}
    >
    <Container tabLabel='Tab #1'>
      <Text >My</Text>
    </Container>
    <Container tabLabel='Tab #2'>
      <Text >FAv</Text>
    </Container>
    <Container tabLabel='Tab #3'>
      <Text >PRoject</Text>
    </Container>
    </ScrollableTabView>;
  },
});
