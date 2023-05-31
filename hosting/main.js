import './style.css'

import {initializeApp} from 'firebase/app'

const app = initializeApp();

console.log(`App ${app.name} has been auto-initialized!`);

document.querySelector('#app').innerHTML = `
<h1>App ${app.name} has been auto-initialized!</h1>
<h2>Config</h2>
<code>${JSON.stringify(app.options, null, 2)}</code>
`