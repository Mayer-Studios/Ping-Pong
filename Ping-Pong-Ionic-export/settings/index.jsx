function mySettings(props) {
  return (
//import { units } from "user-settings";
//console.log(units.temperature);

<Page>

  
  <Section
   title={<Text bold align="center">Ping Pong Settings</Text>}> 
    <Text>Background Color</Text>
    <ColorSelect
          settingsKey="backColor"
          colors={[
            {color: 'black'}, 
            {color: 'white'},
            {color: 'whitesmoke'},
            {color: 'wheat'},
            {color: 'darkred'},
            {color: 'firebrick'},
            {color: 'indigo'},
            {color: 'royalblue'},
            {color: 'brown'},
            {color: 'darkmagenta'},
            {color: 'olive'},
            {color: 'darkviolet'},
            {color: 'aquamarine'},
            {color: 'chartreuse'},            
            {color: 'gold'},            
            {color: 'khaki'},
            {color: 'lawngreen'}, 
            {color: 'springgreen'},
            {color: 'lightseagreen'},
            {color: 'red'},
            {color: 'thistle'},
            {color: 'darkturquoise'},
            {color: 'lightsalmon'},
            {color: 'lightcoral'},
            {color: 'lightskyblue'},
            {color: 'orange'},
            {color: 'pink'},
            {color: 'yellow'}
                     ]}
        />
    <Text>Center Line Color</Text>
    <ColorSelect
          settingsKey="lineColor"
          colors={[
            {color: 'black'}, 
            {color: 'white'},
            {color: 'whitesmoke'},
            {color: 'wheat'},
            {color: 'darkred'},
            {color: 'firebrick'},
            {color: 'indigo'},
            {color: 'royalblue'},
            {color: 'brown'},
            {color: 'darkmagenta'},
            {color: 'olive'},
            {color: 'darkviolet'},
            {color: 'aquamarine'},
            {color: 'chartreuse'},            
            {color: 'gold'},            
            {color: 'khaki'},
            {color: 'lawngreen'}, 
            {color: 'springgreen'},
            {color: 'lightseagreen'},
            {color: 'red'},
            {color: 'thistle'},
            {color: 'darkturquoise'},
            {color: 'lightsalmon'},
            {color: 'lightcoral'},
            {color: 'lightskyblue'},
            {color: 'orange'},
            {color: 'pink'},
            {color: 'yellow'}
                     ]}
        />
    
    <Text>Ball Color</Text>
    <ColorSelect
          settingsKey="ballColor"
          colors={[
            {color: 'black'}, 
            {color: 'white'},
            {color: 'whitesmoke'},
            {color: 'wheat'},
            {color: 'darkred'},
            {color: 'firebrick'},
            {color: 'indigo'},
            {color: 'royalblue'},
            {color: 'brown'},
            {color: 'darkmagenta'},
            {color: 'olive'},
            {color: 'darkviolet'},
            {color: 'aquamarine'},
            {color: 'chartreuse'},            
            {color: 'gold'},            
            {color: 'khaki'},
            {color: 'lawngreen'}, 
            {color: 'springgreen'},
            {color: 'lightseagreen'},
            {color: 'red'},
            {color: 'thistle'},
            {color: 'darkturquoise'},
            {color: 'lightsalmon'},
            {color: 'lightcoral'},
            {color: 'lightskyblue'},
            {color: 'orange'},
            {color: 'pink'},
            {color: 'yellow'}
                     ]}
        />
    <Text>Paddle Color</Text>
    <ColorSelect
          settingsKey="paddleColor"
          colors={[
            {color: 'black'}, 
            {color: 'white'},
            {color: 'whitesmoke'},
            {color: 'wheat'},
            {color: 'darkred'},
            {color: 'firebrick'},
            {color: 'indigo'},
            {color: 'royalblue'},
            {color: 'brown'},
            {color: 'darkmagenta'},
            {color: 'olive'},
            {color: 'darkviolet'},
            {color: 'aquamarine'},
            {color: 'chartreuse'},            
            {color: 'gold'},            
            {color: 'khaki'},
            {color: 'lawngreen'}, 
            {color: 'springgreen'},
            {color: 'lightseagreen'},
            {color: 'red'},
            {color: 'thistle'},
            {color: 'darkturquoise'},
            {color: 'lightsalmon'},
            {color: 'lightcoral'},
            {color: 'lightskyblue'},
            {color: 'orange'},
            {color: 'pink'},
            {color: 'yellow'}
                     ]}
        />
    <Text>Text Color</Text>
    <ColorSelect
          settingsKey="textColor"
          colors={[
            {color: 'black'}, 
            {color: 'white'},
            {color: 'whitesmoke'},
            {color: 'wheat'},
            {color: 'darkred'},
            {color: 'firebrick'},
            {color: 'indigo'},
            {color: 'royalblue'},
            {color: 'brown'},
            {color: 'darkmagenta'},
            {color: 'olive'},
            {color: 'darkviolet'},
            {color: 'aquamarine'},
            {color: 'chartreuse'},            
            {color: 'gold'},            
            {color: 'khaki'},
            {color: 'lawngreen'}, 
            {color: 'springgreen'},
            {color: 'lightseagreen'},
            {color: 'red'},
            {color: 'thistle'},
            {color: 'darkturquoise'},
            {color: 'lightsalmon'},
            {color: 'lightcoral'},
            {color: 'lightskyblue'},
            {color: 'orange'},
            {color: 'pink'},
            {color: 'yellow'}
                     ]}
        />
    <Text> Thank you for downloading Ping Pong. We hope that you enjoy it. </Text> 
   
    <Link source="https://mayer-studios.com">Our Website</Link>
    <Link source="https://twitter.com/mayerdevstudios">We're on Twitter!</Link>
    <Link source="https://mayer-studios.com/contact.html">Contact Us</Link>

    </Section>
    
    </Page>
     );
}

registerSettingsPage(mySettings);