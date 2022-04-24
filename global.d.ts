import "little-state-machine";
import { RegistrationFormValues } from "types/registration-form-values";

declare module "little-state-machine" {
  interface GlobalState {
    registrationFormValues: RegistrationFormValues;
  }
}
