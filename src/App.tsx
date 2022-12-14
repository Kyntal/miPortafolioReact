import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { useState } from 'react';
import { FooterClaudio } from './components/footer/Footer';
import { HeaderResponsive } from './components/navbar/Navbar';
import links from './data/DataNavbar.json'
import { MyProfile } from './components/profile/profileIndex';
import { MainInfo } from './components/profile/mainInfo';
import 'animate.css';

export default function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


  return (
    <ColorSchemeProvider colorScheme={colorScheme}
    toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <HeaderResponsive { ...links }/>
      <MainInfo />
      <MyProfile />
      <h1>test macbook</h1>
      <FooterClaudio></FooterClaudio>
  
    </MantineProvider>
    </ColorSchemeProvider>
    
  );
}
