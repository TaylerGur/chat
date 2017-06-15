export const CHANGE_TEXTAREA = 'CHANGE_TEXTAREA';

export function changeTextarea(text) {
  return { type: CHANGE_TEXTAREA, payloads: text };
}
