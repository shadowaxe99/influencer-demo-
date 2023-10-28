```javascript
import React from 'react';

class StoryJourney extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0,
            journeySteps: [
                'Welcome to the AI Talent Agency. Let\'s embark on a journey to explore our capabilities.',
                'First, we create interactive talent profiles using state-of-the-art technologies.',
                'Next, we simulate AI-driven talent management, providing promotional strategy recommendations and appointment scheduling.',
                'We also offer an interactive chat simulation, showcasing our AI\'s ability to interact with humans.',
                'Our real-time data visualization displays performance metrics and social media reach.',
                'Experience our 360-degree video and interactive 3D presentation software.',
                'Finally, enjoy a seamless rolling down experience as we transition between demo segments.',
                'Thank you for joining us on this journey. We look forward to working with you.'
            ]
        };
    }

    nextStep = () => {
        if (this.state.currentStep < this.state.journeySteps.length - 1) {
            this.setState(prevState => ({
                currentStep: prevState.currentStep + 1
            }));
        }
    }

    render() {
        return (
            <div id="storyJourney">
                <h2>Investor Walkthrough</h2>
                <p>{this.state.journeySteps[this.state.currentStep]}</p>
                <button onClick={this.nextStep}>Next</button>
            </div>
        );
    }
}

export default StoryJourney;
```