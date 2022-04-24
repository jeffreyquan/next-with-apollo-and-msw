import { GlobalState } from "little-state-machine";
import { PlayerRegistrationFormValues } from "./../components/player-registration";

export const updateAction = (
  state: GlobalState,
  payload: PlayerRegistrationFormValues
) => ({
  ...state,
  registrationFormValues: {
    ...state.registrationFormValues,
    ...payload,
  },
});
