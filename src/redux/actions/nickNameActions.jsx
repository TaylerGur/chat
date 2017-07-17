export const EDIT_NICK = 'EDIT_NICK';
export const FAIL_NICK = 'FAIL_NICK';
export const GET_NICK = 'GET_NICK';

export function editNickName(NickName) {
  if (NickName === '' || !NickName) return { type: FAIL_NICK };
  return { type: EDIT_NICK, payloads: NickName };
}

export function getNickName() {
  return { type: GET_NICK };
}  
