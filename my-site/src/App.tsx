import React from 'react';
import { HeroContainer } from './components/hero';
import { TimelineContainer } from './components/timeline';
import logo from './logo.svg';
// import './App.css';

const App = () => {

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="w-full h-16 text-center border-b border-grey p-4">
        <div className="flex flex-row justify-end items-center mr-8">
          <button>Top</button>
          <button>Timeline</button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto">
        <HeroContainer />
        <TimelineContainer />
      </main>
    </div>
  );
}

export default App;
