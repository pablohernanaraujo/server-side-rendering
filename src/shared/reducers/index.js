import { combineReducers } from 'redux';

import device from './deviceReducer';
import blog from '../../app/pages/blog/reducer';

const rootReducer = combineReducers({
  device,
  blog
});

export default rootReducer;
