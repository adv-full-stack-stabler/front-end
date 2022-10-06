import { render, screen } from '@testing-library/react';
import {
  CheckBox,
  FormButton,
  InputControl,
  SelectControl,
  TextAreaControl,
} from './FormControls.jsx';

test('input control should work', async () => {
  render(
    <InputControl
      label="User Name"
      name="username"
      required
      placeholder="Your user name"
    />
  );

  const inputControl = screen.getByLabelText('User Name');
  expect(inputControl.name).toEqual('username');
  expect(inputControl.placeholder).toEqual('Your user name');
  expect(inputControl.required).toEqual(true);
});

test('select control should render', async () => {
  render(
    <SelectControl label="Vehicle" name="vehicle" required>
      <option>Porsche</option>
      <option>Ferrari</option>
      <option>Lamborghini</option>
    </SelectControl>
  );
  const selectControl = screen.getByLabelText('Vehicle');
  expect(selectControl.name).toEqual('vehicle');
  expect(selectControl.required).toEqual(true);
  expect(selectControl.options.length).toEqual(3);
});

test('text area control should render', async () => {
  render(<TextAreaControl
    required
    label="Car"
    name="car"
    placeholder="Your favorite car" />
  );

  const textControl = screen.getByLabelText('Car');
  expect(textControl.name).toEqual('car');
  expect(textControl.placeholder).toEqual('Your favorite car');
  expect(textControl.required).toEqual(true);
});

test('checkbox should render', async () => {
  render(<CheckBox
    required
    legend="Will you join the brotherhood?"
    label="Summon Cthulu"
    name="accept"/>);

  const legend = screen.getByText('Will you join the brotherhood?');
  expect(legend).not.toBeNull();
  const checkBox = screen.getByLabelText('Summon Cthulu');
  expect(checkBox.name).toEqual('accept');
  expect(checkBox.required).toEqual(true);
});

test('button should render, preferably for submission', async () => {
  render(<FormButton text="Submit form" />);

  const button = screen.getByRole('button');
  expect(button.textContent).toEqual('Submit form');
});
