import * as React from 'react';
import { HeaderButton } from './components/header-button';
import { ContactContainer } from './components/contact/contact';
import { HeroContainer } from './components/hero';
import { ProjectsContainer } from './components/projects/projects';
import { TimelineContainer } from './components/timeline/timeline';
import { headerHeight, tabEnum } from "./constants/constants";
import { Colors } from './utils/colors';
import { headerColorMapper } from './helpers';

const orderedTabs = [tabEnum.Home, tabEnum.Experiences, tabEnum.Projects, tabEnum.Contact];

const App = () => {
  const [containerHeight, setContainerHeight] = React.useState(window.innerHeight - headerHeight);
  const [currentTab, setCurrentTab] = React.useState(tabEnum.Home);

  const [headerBackgroundColor, setHeaderBackgroundColor] = React.useState(Colors.TeaGreenDark);
  const [headerFontColor, setHeaderFontColor] = React.useState(Colors.WengeLight);
  const [selectedHeaderColor, setSelectedHeaderColor] = React.useState(Colors.Wenge);

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
      behavior: "smooth",
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

        if (mainContainer.scrollTop >= snapContainerY[orderedTabs[i]]) {
          const { backgroundColor, headerFontColor, selectedHeaderColor } = headerColorMapper(orderedTabs[i]);
        
          setHeaderBackgroundColor(backgroundColor);
          setHeaderFontColor(headerFontColor);
          setSelectedHeaderColor(selectedHeaderColor);
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

        if (mainContainer.scrollTop >= snapContainerY[orderedTabs[i]]) {
          const { backgroundColor, headerFontColor, selectedHeaderColor } = headerColorMapper(orderedTabs[i]);

          setHeaderBackgroundColor(backgroundColor);
          setHeaderFontColor(headerFontColor);
          setSelectedHeaderColor(selectedHeaderColor);

          break;
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
          backgroundColor: headerBackgroundColor
        }}>
        <div className="flex flex-row mr-4">
          <HeaderButton 
            tabName="Home" 
            tabEnumValue={tabEnum.Home}
            headerFontColor={headerFontColor}
            selectedHeaderColor={selectedHeaderColor}
            isCurrentTab={tabEnum.Home === currentTab} 
            handleTabClick={handleTabClick} />
          <HeaderButton 
            tabName="Experiences" 
            tabEnumValue={tabEnum.Experiences}
            headerFontColor={headerFontColor}
            selectedHeaderColor={selectedHeaderColor}
            isCurrentTab={tabEnum.Experiences === currentTab} 
            handleTabClick={handleTabClick} />
          <HeaderButton 
            tabName="Projects" 
            tabEnumValue={tabEnum.Projects}
            headerFontColor={headerFontColor} 
            selectedHeaderColor={selectedHeaderColor}          
            isCurrentTab={tabEnum.Projects === currentTab} 
            handleTabClick={handleTabClick} />
          <HeaderButton 
            tabName="Contact Me" 
            tabEnumValue={tabEnum.Contact}
            headerFontColor={headerFontColor} 
            selectedHeaderColor={selectedHeaderColor}           
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
