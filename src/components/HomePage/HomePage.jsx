import styles from './HomePage.css';
import { 
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckBox,
  FormButton
} from '../forms/FormControls.jsx';

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <form>
        <InputControl label="Car" name="car" 
          placeholder="Your favorite car"/>
        
        <InputControl label="Car's age(in years)" 
          name="age" type="number" 
          placeholder="Input a number" required />
        
        <SelectControl label="Speed" name="speed"
          placeholder="How fast is your car" required>
          <option value="1">Fast</option>
          <option value="2">Really Fast</option>
          <option value="3">Maximum OverFast</option>
        </SelectControl>

        <TextAreaControl label="Car bio" name="bio" 
          placeholder="Tell us about your car's history(optional)"/>

        <CheckBox legend="Are all these entries about your car true?" 
          label="Absolutely" />

        <FormButton text="Submit"/>
      </form>
    </div>
  );
}
