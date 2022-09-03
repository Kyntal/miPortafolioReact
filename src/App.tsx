import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { useState } from 'react';
import { FooterClaudio } from './components/footer/Footer';
import { HeaderResponsive } from './components/navbar/Navbar';
import links from './data/DataNavbar.json'
import { MyProfile } from './components/profile/profileIndex';

export default function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));


  return (
    <ColorSchemeProvider colorScheme={colorScheme}
    toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <HeaderResponsive { ...links }/>
      <MyProfile />
      <h1>test macbook</h1>
      <FooterClaudio></FooterClaudio>
  
    </MantineProvider>
    </ColorSchemeProvider>
    
  );
}
