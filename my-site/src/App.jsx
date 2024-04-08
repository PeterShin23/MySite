import * as React from 'react';
import { HeaderButton } from './components/header-button';
import { ContactContainer } from './components/contact/contact';
import { HeroContainer } from './components/hero';
import { ProjectsContainer } from './components/projects/projects';
import { TimelineContainer } from './components/timeline/timeline';
import { headerHeight, tabEnum } from "./constants/constants";
import { Colors } from './utils/colors';

const orderedTabs = [tabEnum.Home, tabEnum.Experiences, tabEnum.Projects, tabEnum.Contact];

const App = () => {
  const [containerHeight, setContainerHeight] = React.useState(window.innerHeight - headerHeight);
  const [currentTab, setCurrentTab] = React.useState(tabEnum.Home);
  const scrollDirectionRef = React.useRef({
    position: 0,
    direction: "down",
  })

  const snapContainerY = {
    [tabEnum.Home]: 0,
    [tabEnum.Experiences]: containerHeight,
    [tabEnum.Projects]: containerHeight * 2,
    [tabEnum.Contact]: containerHeight * 3,
  }

  const handleTabClick = (tab) => {
    if (tab === currentTab) return;

    const container = document.getElementById(tabEnum.Main); // can't use window.scroll because of overflow properties

    container.scrollTo({
      top: snapContainerY[tab],
      behavior: "auto",
    })

    setCurrentTab(tab);
  }

  const handleScroll = () => {
    const mainContainer = document.getElementById(tabEnum.Main);

    let direction = mainContainer.scrollTop - scrollDirectionRef.current.position >= 0 ? "down" : "up";

    scrollDirectionRef.current = { position: mainContainer.scrollTop, direction: direction };

    if (direction === "down") {
      for (let i = 0; i < orderedTabs.length; i++) {
        if (
          mainContainer.scrollTop >= (snapContainerY[orderedTabs[i]] + containerHeight / 2) &&
          i + 1 < orderedTabs.length
        ) {
          setCurrentTab(orderedTabs[i+1]);
        }

      }
    } else {
      for (let i = orderedTabs.length - 1; i >= 0; i--) {
        if (
          mainContainer.scrollTop <= (snapContainerY[orderedTabs[i]] - containerHeight / 2) && 
          i - 1 > - 1
        ) {
          setCurrentTab(orderedTabs[i-1]);
        }
      }
    }
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
