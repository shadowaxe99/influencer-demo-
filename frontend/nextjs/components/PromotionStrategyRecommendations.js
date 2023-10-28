```javascript
import React from 'react';

class PromotionStrategyRecommendations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendations: []
        };
    }

    componentDidMount() {
        // Fetch recommendations from the backend
        fetch('/api/recommendations')
            .then(response => response.json())
            .then(data => this.setState({ recommendations: data }));
    }

    render() {
        return (
            <div id="promotionRecommendations">
                <h2>Promotion Strategy Recommendations</h2>
                {this.state.recommendations.length > 0 ? (
                    <ul>
                        {this.state.recommendations.map((recommendation, index) => (
                            <li key={index}>
                                <h3>{recommendation.title}</h3>
                                <p>{recommendation.description}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No recommendations available at the moment.</p>
                )}
            </div>
        );
    }
}

export default PromotionStrategyRecommendations;
```