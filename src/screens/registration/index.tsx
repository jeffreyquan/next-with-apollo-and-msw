import { createStore, StateMachineProvider } from "little-state-machine";
import * as React from "react";
import Confirmation from "./components/confirmation";
import PlayerRegistration from "./components/player-registration";
import TeamRegistration from "./components/team-registration";

const initialState = {
  gender: "",
  firstName: "",
  lastName: "",
  dateOfBirth: new Date(),
  mobile: "",
  email: "",
};

createStore({
  registrationFormValues: initialState,
});

const Registration = () => {
  const [step, setStep] = React.useState(0);

  const nextStep = () => {
    setStep((currentStep) => currentStep + 1);
  };

  const prevStep = () => {
    setStep((currentStep) => currentStep - 1);
  };

  const component = () => {
    switch (step) {
      case 0:
        return (
          <PlayerRegistration
            nextButtonLabel="Team Registration"
            nextStep={nextStep}
          />
        );
      case 1:
        return <TeamRegistration />;
      case 2:
        return <Confirmation />;
      default:
        return <div>You will not see this</div>;
    }
  };

  return <StateMachineProvider>{component()}</StateMachineProvider>;
};

export default Registration;
