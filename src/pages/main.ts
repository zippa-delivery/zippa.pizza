import './main.scss';
import '../styles/main.scss';
import '../styles/components/footer.scss';
import '../styles/components/header.scss';
import { setupMenu } from './menu';

setupMenu();

const closePromoBannerButton = document.querySelector('#promo-banner button');

closePromoBannerButton?.addEventListener('click', () => {
  closePromoBannerButton.parentElement?.remove();
});
