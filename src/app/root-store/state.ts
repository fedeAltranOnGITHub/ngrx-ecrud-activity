import {PersonStoreState} from '@root-store/person-store';
import {CoinStoreState} from '@root-store/coin-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';

export interface State {
person:PersonStoreState.State;
coin:CoinStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
