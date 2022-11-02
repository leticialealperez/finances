export interface AlertActionType {
  type: 'alert/SET' | 'alert/GET';
  payload: boolean;
}

export function setAlert(payload: boolean): AlertActionType {
  return {
    type: 'alert/SET',
    payload,
  };
}

export function getAlert(payload: boolean): AlertActionType {
  return {
    type: 'alert/GET',
    payload,
  };
}


