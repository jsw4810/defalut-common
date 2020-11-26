import { IS_DIALOGS, OPEN_CALENDAR_DIALIOG } from './types';

export default {
  [IS_DIALOGS]: (state, payload) => {
    state.isDialog = payload;
  },
  [OPEN_CALENDAR_DIALIOG]: (state, payload) => {
    console.log('testeststs');
    console.log(state);
    console.log(payload);
  }
};
