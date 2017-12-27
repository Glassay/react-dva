/**
 * 2017-12-27 Jifeng Cheng
 */

import React from 'react';
import { connect } from 'react-redux';

const Review = ({ comment, dispatch }) => {
  // console.log(comment);
  return (
    <div>
      <textarea onChange={e => dispatch({ type: 'comment/write', payload: e })} />
      <hr />
      <button onClick={() => dispatch({ type: 'comment/dele' })}>清空</button>
      <p>{comment.display}</p>
    </div>
  );
};

function a(state) {
  return { comment: state.comment };
}

const PingLun = connect(a)(Review);

export default PingLun;
