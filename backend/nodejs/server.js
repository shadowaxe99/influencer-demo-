```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const talentRoutes = require('./routes/talent');
const promotionRoutes = require('./routes/promotion');
const appointmentRoutes = require('./routes/appointment');
const chatRoutes = require('./routes/chat');
const metricsRoutes = require('./routes/metrics');
const socialMediaRoutes = require('./routes/socialMedia');
const videoRoutes = require('./routes/video');
const scrollRoutes = require('./routes/scroll');
const storyRoutes = require('./routes/story');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/aiTalentAgency', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/api/talent', talentRoutes);
app.use('/api/promotion', promotionRoutes);
app.use('/api/appointment', appointmentRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/metrics', metricsRoutes);
app.use('/api/socialMedia', socialMediaRoutes);
app.use('/api/video', videoRoutes);
app.use('/api/scroll', scrollRoutes);
app.use('/api/story', storyRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
```