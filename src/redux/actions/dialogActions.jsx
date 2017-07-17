export const CREATE_DIALOG = 'CREATE_DIALOG';
export const FAIL_DIALOG = 'FAIL_DIALOG';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DEL_DIALOG = 'DEL_DIALOG';

export function createDialog(dialogs) {
  if (dialogs.length < 1) return { type: FAIL_DIALOG };
    return { type: CREATE_DIALOG, payloads: dialogs };
}
export function addMessage(message) {
  // if (dialogs == {}) return { type: FAIL_DIALOG };
    return { type: ADD_MESSAGE, payloads: message };
}

