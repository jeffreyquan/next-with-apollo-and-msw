import { Paper, Select, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useForm, yupResolver } from "@mantine/form";
import { useStateMachine } from "little-state-machine";
import * as Yup from "yup";
import { updateAction } from "../actions/updateAction";

export interface PlayerRegistrationFormValues {
  gender: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  mobile: string;
  email: string;
}

const validationSchema = Yup.object().shape({
  gender: Yup.string().required("Please select a gender."),
  firstName: Yup.string().required("First name is required."),
  lastName: Yup.string().required("Last name is required."),
  dateOfBirth: Yup.date().nullable().required("Date of birth is required."),
  mobile: Yup.number().required("Mobile is required."),
  email: Yup.string()
    .email("Email must be valid.")
    .required("Email is required."),
});

interface PlayerRegistrationProps {
  nextButtonLabel: string;
  nextStep: () => void;
}

const PlayerRegistration = ({
  nextButtonLabel,
  nextStep,
}: PlayerRegistrationProps) => {
  const { actions, state } = useStateMachine({ updateAction });
  const form = useForm<PlayerRegistrationFormValues>({
    initialValues: state.registrationFormValues,
    schema: yupResolver(validationSchema),
  });

  const handleSubmit = (values: PlayerRegistrationFormValues) => {
    actions.updateAction(values);
    nextStep();
  };
  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Paper>
        <Select
          label="Gender"
          placeholder="Gender"
          data={[
            {
              value: "Female",
              label: "Female",
            },
            {
              value: "Male",
              label: "Male",
            },
            {
              value: "Other",
              label: "Other",
            },
          ]}
          {...form.getInputProps("gender")}
        />
        <TextInput
          label="First Name"
          placeholder="John"
          required
          mb="xl"
          {...form.getInputProps("firstName")}
        />
        <TextInput
          label="Last Name"
          placeholder="Smith"
          required
          mb="xl"
          {...form.getInputProps("lastName")}
        />
        <DatePicker
          allowFreeInput
          dateParser={(dateString) => new Date(Date.parse(dateString))}
          label="Date of birth"
          placeholder="Select date or enter date e.g. 1 May 2002 or MM/DD/YYYY"
          required
          mb="xl"
          inputFormat="D MMMM YYYY"
          maxDate={new Date()}
          value={new Date(form.getInputProps("dateOfBirth").value)}
        />
        <TextInput
          label="Email"
          placeholder="john.smith@abc.com"
          required
          mb="xl"
          {...form.getInputProps("email")}
        />
        <TextInput
          label="Mobile"
          placeholder="0400 000 000"
          required
          mb="xl"
          {...form.getInputProps("mobile")}
        />
      </Paper>
    </form>
  );
};

export default PlayerRegistration;
