import { StackNavigator, DrawerNavigator } from 'react-navigation';

import SignInScreen from './containers/AUTH/SignInScreen';
import SignUpScreen from './containers/AUTH/SignUpScreen';
import WalletScreen from './containers/WalletScreen';
import HistoryScreen from './containers/HistoryScreen';
import AnalyticScreen from './containers/AnalyticScreen';
import SettingsScreen from './containers/SettingsScreen';


const DrawerNav = DrawerNavigator(
  {
    Wallet: { screen: WalletScreen },
    History: { screen: HistoryScreen },
    Analytic: { screen: AnalyticScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    initialRouteName: 'Wallet'
  }
);

const StackNav = StackNavigator(
  {
    SignIn: { screen: SignInScreen },
    SignUp: { screen: SignUpScreen },
    Main: { screen: DrawerNav }
  },
  {
    initialRouteName: 'SignIn',
    headerMode: 'none'
  }
);

export default StackNav;
