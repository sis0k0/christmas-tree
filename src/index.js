import fir from './tree.js';
import { turnOn, restart } from './lights.js';

turnOn(fir);

if (module.hot) {
    module.hot.accept(['./tree.js'], () => {
      restart(fir);
    });
}
