import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Home';

const Drawer = createDrawerNavigator();

function AppDrawer() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    );
}

export default AppDrawer;