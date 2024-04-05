import * as React from 'react';
import { HeroContainer } from './components/hero';
import { TimelineContainer } from './components/timeline';
import { headerHeight } from "./constants/constants";

const App = () => {
  const [containerHeight, setContainerHeight] = React.useState(window.innerHeight - headerHeight);

  React.useEffect(() => {
    const handleResize = () => {
      setContainerHeight(window.innerHeight - headerHeight);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <header className="flex w-full h-12 text-center border-b border-grey flex-row justify-end items-center">
        <div className="flex mr-8">
          <button>Top</button>
          <button>Timeline</button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto">
        <HeroContainer containerHeight={containerHeight} />
        <TimelineContainer containerHeight={containerHeight} />
      </main>
    </div>
  );
}

export default App;
