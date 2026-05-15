import { DateTime } from 'luxon';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

setInterval(() => {
  hh.textContent = DateTime
    .local()
    .setLocale('ru')
    .toFormat('dd.LL.yyyy HH:mm:ss');
}, 1000);