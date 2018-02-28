/**
 * 2017-12-27 Jifeng Cheng
 */

import React from 'react';
import { connect } from 'react-redux';

class CountApp extends React.Component {
  render() {
    const { record, current } = this.props;
    console.log('asd', this.props);
    return (
      <div>
        <div>Higest Record: {record}</div>
        <div>{current}</div>
        <div>
          <button onClick={() => this.props.dispatch({ type: 'count/add' })}>+</button>
        </div>
      </div>
    );
  }
}

// function mapStatetoProps(state) {
//   return { count: state.count };
// }

// const HomePage = connect(mapStatetoProps)(CountApp);
const HomePage = connect(state => ({
  current: state.count.current,
  record: state.count.record,
}))(CountApp);

export default HomePage;
