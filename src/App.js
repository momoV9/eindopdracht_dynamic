import React from "react";
import HomePage from "./pages/HomePage";
import {Tab, TabPanel, Tabs} from "react-tabs";
import {AnimePage} from "./pages/AnimePage";
import ContactPage from "./pages/ContactPage";
import {AppContainer, TabList} from "./components/StyledComponents";
import {ShopPage} from "./pages/ShopPage";
import "./services/firebase"
import AnimeApiPage from "./pages/AnimeApiPage";
import Footer from "./components/Footer";





function App() {
    return (
        <AppContainer>
            <Tabs>
                <TabList>
                    <Tab>Home</Tab>
                    <Tab>Shop</Tab>
                    <Tab>Anime's</Tab>
                    <Tab>Review</Tab>
                    <Tab>Contact us</Tab>
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
                    <AnimePage />
                </TabPanel>

                <TabPanel>
                    <ContactPage />
                </TabPanel>
            </Tabs>
            <Footer />
        </AppContainer>
    );
}

export default App;