import { createNamespacedHelpers } from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';
import { NAMESPACE } from './types';

export const { mapState, mapMutations, mapActions } = createNamespacedHelpers(NAMESPACE);

export { OPEN_CALENDAR_DIALIOG } from './types';

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
