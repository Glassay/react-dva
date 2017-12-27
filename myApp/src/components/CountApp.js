/**
 * 2017-12-27 Jifeng Cheng
 */

import React from 'react';
import { connect } from 'react-redux';

const CountApp = ({ count, dispatch }) => {
  return (
    <div>
      <div>Higest Record: {count.record}</div>
      <div>{count.current}</div>
      <div>
        <button onClick={() => dispatch({ type: 'count/add' })}>+</button>
      </div>
    </div>
  );
};

function mapStatetoProps(state) {
  return { count: state.count };
}

const HomePage = connect(mapStatetoProps)(CountApp);

export default HomePage;
