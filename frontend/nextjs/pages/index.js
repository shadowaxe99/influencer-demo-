import React from 'react';
import Head from 'next/head';
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

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI Talent Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
      </main>

      <footer>
        <p>© 2022 Dr. A. I. Virtuoso</p>
      </footer>
    </div>
  )
}