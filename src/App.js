import React from 'react'
import HomePage from './pages/HomePage'
import { Tab, TabPanel, Tabs } from 'react-tabs'
import { ReviewPage } from './pages/ReviewPage'
import ContactPage from './pages/ContactPage'
import { AppContainer, TabList } from './components/StyledComponents'
import { ShopPage } from './pages/ShopPage'
import './services/firebase'
import AnimeApiPage from './pages/AnimeApiPage'
import Footer from './components/Footer'

import ForumPage from './pages/ForumPage'
import { AnimeProvider } from './contexts/AnimeContext'
import ShareAnimePage from './pages/ShareAnimePage'
import { ImageUploadProvider } from './contexts/ImageUploadContext'

function App() {
  return (
    <AnimeProvider>
      <ImageUploadProvider>
        <AppContainer>
          <Tabs>
            <TabList>
              <Tab>Home</Tab>
              <Tab>Shop</Tab>
              <Tab>Anime's</Tab>
              <Tab>Review</Tab>
              <Tab>Forum</Tab>
              <Tab>Contact us</Tab>
              <Tab>Share</Tab>
            </TabList>
            <TabPanel>
              <HomePage />
            </TabPanel>
            <TabPanel>
              <ShopPage />
            </TabPanel>
            <TabPanel>
              <AnimeApiPage />
            </TabPanel>
            <TabPanel>
              <ReviewPage />
            </TabPanel>
            <TabPanel>
              <ForumPage />
            </TabPanel>
            <TabPanel>
              <ContactPage />
            </TabPanel>
            <TabPanel>
              <ShareAnimePage />
            </TabPanel>
          </Tabs>
          <Footer />
        </AppContainer>
      </ImageUploadProvider>
    </AnimeProvider>
  )
}

export default App
