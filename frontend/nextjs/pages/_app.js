import React from 'react';
import '../styles/globals.css';
import ProfileCreationForm from '../components/ProfileCreationForm';
import ProfileVisualization from '../components/ProfileVisualization';
import PromotionStrategyRecommendations from '../components/PromotionStrategyRecommendations';
import AppointmentSchedulingDisplay from '../components/AppointmentSchedulingDisplay';
import ChatSimulation from '../components/ChatSimulation';
import PerformanceMetricsDisplay from '../components/PerformanceMetricsDisplay';
import SocialMediaReachDisplay from '../components/SocialMediaReachDisplay';
import VideoPresentation from '../components/VideoPresentation';
import ScrollSetup from '../components/ScrollSetup';
import StoryJourney from '../components/StoryJourney';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ProfileCreationForm />
      <ProfileVisualization />
      <PromotionStrategyRecommendations />
      <AppointmentSchedulingDisplay />
      <ChatSimulation />
      <PerformanceMetricsDisplay />
      <SocialMediaReachDisplay />
      <VideoPresentation />
      <ScrollSetup />
      <StoryJourney />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;