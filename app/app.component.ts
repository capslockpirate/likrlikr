import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h3>Login</h3>
        <input placeholder="Email" type="email">
        <input placeholder="Password" type="password">
    `
})
export class AppComponent { }
