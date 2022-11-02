import { AlertActionType } from './actions';

const defaultState = false;

function reducerAlert(state = defaultState, action: AlertActionType) {
  switch (action.type) {
    case 'alert/GET':
      return state;

    case 'alert/SET':
      return action.payload;

    default:
      return state;
  }
}

export default reducerAlert;
