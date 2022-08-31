import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { useState } from 'react';
import { FooterClaudio } from './components/footer/Footer';
import { HeaderResponsive } from './components/navbar/Navbar';
import links from './data/DataNavbar.json'

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

      <FooterClaudio></FooterClaudio>
  
    </MantineProvider>
    </ColorSchemeProvider>
    
  );
}
