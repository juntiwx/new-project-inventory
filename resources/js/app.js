import '../css/app.css';
import '../css/tailwind.css';
import '../assets/libs/tiny-slider/tiny-slider.css';
import '../assets/libs/@iconscout/unicons/css/line.css';
import '../assets/libs/@mdi/font/css/materialdesignicons.min.css';

import '../assets/libs/tiny-slider/min/tiny-slider.js';
import '../assets/libs/feather-icons/feather.min.js';
import '../assets/js/plugins.init.js';
import '../assets/js/app.js';


import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/vue3';

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./pages/**/*.vue', { eager: true })
        return pages[`./pages/${name}.vue`]
    },
    setup({el, App, props, plugin}) {
        createApp({render: () => h(App, props)})
            .use(plugin)
            .mount(el)
    },
}).then(r => console.log(r))
