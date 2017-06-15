export const CREATE_DIALOGS = 'CREATE_DIALOGS';
export const GET_DIALOGS = 'GET_DIALOGS';
export const FAIL_DIALOGS = 'FAIL_DIALOGS';
export const ADD_DIALOGS = 'ADD_DIALOGS';
export const DEL_DIALOGS = 'DEL_DIALOGS';

export function createDialogs(dialogs) {
  if (dialogs.length < 1) return { type: FAIL_DIALOGS };
    return { type: CREATE_DIALOGS, payloads: dialogs };
}
export function addDialogs(dialogs) {
  if (dialogs.length < 1) return { type: FAIL_DIALOGS };
    return { type: ADD_DIALOGS, payloads: dialogs };
}

