/**
 * 2017-12-27 Jifeng Cheng
 */

export default({
  namespace: 'comment',
  state: {
    content: '',
    display: '',
  },

  reducers: {
    write(state, { payload }) {
      const newComment = state.content;
      console.log(payload.target.value);
      return {
        ...state,
        content: newComment,
        display: payload.target.value,
      };
    },
    dele(state) {
      return {
        ...state,
        display: null,
      };
    },
  },
});

