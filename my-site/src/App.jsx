import * as React from 'react';
import { HeaderButton } from './components/header-button';
import { ContactContainer } from './components/contact/contact';
import { HeroContainer } from './components/hero';
import { ProjectsContainer } from './components/projects/projects';
import { TimelineContainer } from './components/timeline/timeline';
import { headerHeight, tabEnum } from "./constants/constants";
import { Colors } from './utils/colors';

const App = () => {
  const [containerHeight, setContainerHeight] = React.useState(window.innerHeight - headerHeight);
  const [currentTab, setCurrentTab] = React.useState(tabEnum.Home);

  const handleTabClick = (tab) => {
    if (tab === currentTab) return;

    const container = document.getElementById(tabEnum.Main); // can't use window.scroll because of overflow properties

    const clickedTab = document.getElementById(tab);

    console.log("tab", tab, clickedTab.getBoundingClientRect().top)

    container.scrollTo({
      top: clickedTab.getBoundingClientRect().top - headerHeight,
      behavior: "smooth",
    });

    setCurrentTab(tab);
  }

  const handleScroll = () => {
      
    const tab = document.getElementById(currentTab).getBoundingClientRect()

    // console.log((tab.height - headerHeight) + tab.top, containerHeight)

    const ratio = (tab.height - headerHeight + tab.top) / containerHeight;

    if (Math.abs(ratio) > 0.4) return;

    return;
  }

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
    <div className="flex flex-col h-screen">
      <header 
        className="flex w-full h-12 text-center justify-end items-stretch shadow-md" // items-stretch makes so that flex button is same height as parent
        style={{
          backgroundColor: Colors.TeaGreenDark
        }}>
        <div className="flex flex-row mr-4">
          <HeaderButton 
            tabName="Home" 
            tabEnumValue={tabEnum.Home}
            isCurrentTab={tabEnum.Home === currentTab} 
            handleTabClick={handleTabClick} />
          <HeaderButton 
            tabName="Experiences" 
            tabEnumValue={tabEnum.Experiences}
            isCurrentTab={tabEnum.Experiences === currentTab} 
            handleTabClick={handleTabClick} />
          <HeaderButton 
            tabName="Projects" 
            tabEnumValue={tabEnum.Projects}
            isCurrentTab={tabEnum.Projects === currentTab} 
            handleTabClick={handleTabClick} />
          <HeaderButton 
            tabName="Contact Me" 
            tabEnumValue={tabEnum.Contact}
            isCurrentTab={tabEnum.Contact === currentTab} 
            handleTabClick={handleTabClick} />
        </div>
      </header>
      <main id="main-container" className="flex-1 overflow-y-auto" onScroll={handleScroll}>
        <HeroContainer id="hero-container" containerHeight={containerHeight} />
        <TimelineContainer id="timeline-container" containerHeight={containerHeight} />
        <ProjectsContainer id="projects-container" containerHeight={containerHeight} />
        <ContactContainer id="contact-container" containerHeight={containerHeight} />
      </main>
    </div>
  );
}

export default App;
