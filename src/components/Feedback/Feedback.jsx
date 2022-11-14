import { useState } from 'react';
// import PropTypes from 'prop-types';

import ButtonList from './Buttons';
import Statistics from './Statistics';
import Section from './Section';

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const state = { good, neutral, bad };

  const onBtnClick = btnName => {
    switch (btnName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        console.log('No btn');
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <ButtonList onBtnClick={onBtnClick} />
      </Section>
      <Section title="Statistics">
        <Statistics state={state} />
      </Section>
    </>
  );
}

// const buttons = {
//   good: 'good',
//   neutral: 'neutral',
//   bad: 'bad',
// }

// export class Feedback extends Component {
//   state = {
//     buttons: null,
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onBtnClick = btnName => {
//     // console.log(btnName);
//     this.setState(prevState => ({
//       [btnName]: prevState[btnName] + 1,
//     }));
//   };

//   render() {
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <ButtonList
//             onBtnClick={this.onBtnClick}
//             selected={this.state.buttons}
//           />
//         </Section>
//         <Section title="Statistics">
//           <Statistics state={this.state} />
//         </Section>
//       </>
//     );
//   }
// }
