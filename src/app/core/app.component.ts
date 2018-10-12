import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';
import {Component, HostListener} from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
    selector: 'app-container',
    templateUrl: './app.template.html'
})
export class AppComponent {
    mode = new FormControl('over');

    topPosition= true;
    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true); //third parameter
    }

    constructor(private router: Router,
                private activatedRoute: ActivatedRoute) {
    }
    ngOnDestroy() {
        window.removeEventListener('scroll', this.scroll, true);
    }

    scroll = (event): void => {
            if(event.srcElement.scrollTop===0){
                this.topPosition= true;
            } else {
                this.topPosition= false;

            }

    };

    gotToPage(page){
        this.router.navigate([page], {relativeTo: this.activatedRoute});
    }

}
