import { createApp } from './main';
import { createRouter } from './router';

const router = createRouter('client');

const { app } = createApp();

app.use(router);


router.isReady().then(() => {
    app.mount('#app', true);
});
