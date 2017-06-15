export const EDIT_LOCATION = "EDIT_LOCATION";
export const FAIL_LOCATION = "FAIL_LOCATION";

export function editLocation(location) {
  if (location == '') return { type: FAIL_LOCATION };
    return { type: EDIT_LOCATION, payloads: location };
}

