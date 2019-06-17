import { storiesOf } from '@storybook/html';
import { withKnobs, select, text } from '@storybook/addon-knobs';

storiesOf('Simple Buttons', module)
  .addDecorator(withKnobs)
  .add('Customizable', () => {
    const colorOptions = {
      Plain: 'plain',
      Primary: 'primary',
      Secondary: 'secondary',
      Danger: 'danger'
    };
    const colorValue = select("Color", colorOptions, "primary");

    const typeOptions = {
      Basic: 'basic',
      Raised: 'raised',
      Outline: 'outline',
      Flat: 'flat'
    };
    const typeValue = select("Type", typeOptions, "raised");

    const textValue = text("Text", "Button text");

    return `<simple-button type="${typeValue}" color="${colorValue}">${textValue}</simple-button>`;
  })
  .add('All', () => {


    return `
      <h3>Basic</h3>

    <simple-button>Plain</simple-button>
    <simple-button color="primary">Primary</simple-button>
    <simple-button color="secondary">Secondary</simple-button>
    <simple-button color="danger">Danger</simple-button>
    <br>
    <br>
    <br>

    <h3>Raised</h3>

    <simple-button type="raised">Plain</simple-button>
    <simple-button type="raised" color="primary">Primary</simple-button>
    <simple-button type="raised" color="secondary">Secondary</simple-button>
    <simple-button type="raised" color="danger">Danger</simple-button>
    <br>
    <br>
    <br>

    <h3>Outline</h3>

    <simple-button type="outline">Plain</simple-button>
    <simple-button type="outline" color="primary">Primary</simple-button>
    <simple-button type="outline" color="secondary">Secondary</simple-button>
    <simple-button type="outline" color="danger">Danger</simple-button>
    <br>
    <br>
    <br>

    <h3>Flat</h3>

    <simple-button type="flat">Plain</simple-button>
    <simple-button type="flat" color="primary">Primary</simple-button>
    <simple-button type="flat" color="secondary">Secondary</simple-button>
    <simple-button type="flat" color="danger">Danger</simple-button>`;
  });
