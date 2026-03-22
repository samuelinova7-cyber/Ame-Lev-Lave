/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Structure } from './components/Structure';
import { Differentials } from './components/Differentials';
import { HowItWorks } from './components/HowItWorks';
import { Pricing } from './components/Pricing';
import { LockerService } from './components/LockerService';
import { Testimonials } from './components/Testimonials';
import { Comparison } from './components/Comparison';
import { BirthdayPromo } from './components/BirthdayPromo';
import { Restrictions } from './components/Restrictions';
import { FAQ } from './components/FAQ';
import { InstagramFeed } from './components/InstagramFeed';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Structure />
        <Differentials />
        <HowItWorks />
        <Pricing />
        <LockerService />
        <Testimonials />
        <Comparison />
        <BirthdayPromo />
        <Restrictions />
        <FAQ />
        <InstagramFeed />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
