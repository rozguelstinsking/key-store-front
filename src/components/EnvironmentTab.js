import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import KeyList from './KeyList'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

export default class EnvironmentTab extends Component{

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Dev" value={0} />
          <Tab label="Pre" value={1} />
          <Tab label="Pro" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2 style={styles.slide}>Tabs with slide effect</h2>
            Swipe to see the next slide.<br />
            <KeyList />
          </div>
          <div style={styles.slide}>
            <KeyList />
          </div>
          <div style={styles.slide}>
            slide n°3
            <KeyList />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
