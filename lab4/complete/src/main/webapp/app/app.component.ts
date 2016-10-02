import {Component} from '@angular/core';

@Component({
    selector: 'web-app',
    templateUrl: 'app/app.component.html',
})
export class AppComponent {
    private hello: string;

    ngOnInit() {
        this.hello = 'Hello, Angular2!';
    }
}