import React from "react";
import HomePage from "./pages/HomePage";
import {Tab, TabPanel, Tabs} from "react-tabs";
import {AnimePage} from "./pages/AnimePage";
import ContactPage from "./pages/ContactPage";
import {TabList} from "./components/StyledComponents";
import {ShopPage} from "./pages/ShopPage";
import "./services/firebase"
import AnimeApiPage from "./pages/AnimeApiPage";

function App() {
    return (
        <Tabs >
        <TabList>
            <Tab>Home</Tab>
            <Tab>Shop</Tab>
            <Tab>Anime's</Tab>
            <Tab>Anime Api</Tab>
            <Tab>Contact us</Tab>
        </TabList>
    <TabPanel>
        <HomePage/>
    </TabPanel>
            <TabPanel>
                <ShopPage/>
            </TabPanel>
    <TabPanel>
        <AnimePage/>
    </TabPanel>
            <TabPanel>
            <AnimeApiPage/>
        </TabPanel>
    <TabPanel>
    <ContactPage/>
    </TabPanel>
</Tabs>
    );
}

export default App;