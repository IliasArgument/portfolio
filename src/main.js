// style
import '../styles/modern-normalize.css';
import '../styles/style.css';
import '../styles/components/header.css';
import '../styles/components/hero.css';
import '../styles/components/about.css';
import '../styles/components/animations.css';
import '../styles/components/featured.css';
import '../styles/components/work.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import '../styles/components/mobile-nav.css';
import '../styles/utils.css';

//js
import './animation-rotate';
import onScrollTopFn from './util/scrolltop';
import darkModeFn from './util/dark-mode';
import mobileNavFunction from './util/mobile-nav';
import lazyLoadingFn from './util/lazy-loading';

mobileNavFunction();
onScrollTopFn();
darkModeFn();
lazyLoadingFn();