```javascript
const natural = require('natural');
const tokenizer = new natural.WordTokenizer();

class NLP {
    constructor() {}

    tokenize(sentence) {
        return tokenizer.tokenize(sentence);
    }

    stem(word) {
        return natural.PorterStemmer.stem(word);
    }

    sentimentAnalysis(sentence) {
        const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');
        const tokens = this.tokenize(sentence);
        return analyzer.getSentiment(tokens);
    }
}

module.exports = new NLP();
```