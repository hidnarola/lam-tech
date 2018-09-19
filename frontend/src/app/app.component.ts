import { Component, Renderer2  } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  previousUrl: string;
  constructor(private renderer: Renderer2, private router: Router) {
    setTheme('bs4'); // or 'bs4'
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          // if (this.previousUrl) {
          //   this.renderer.removeClass(document.body, this.previousUrl);
          // }
          let currentUrlSlug = event.url.slice(1)
          console.log('current slug', currentUrlSlug);
          if (currentUrlSlug.includes('dashboard')) {
            this.renderer.addClass(document.body, 'dashboard-pages');
          } else {
            this.renderer.removeClass(document.body, 'dashboard-pages');
          }
          // this.previousUrl = currentUrlSlug;
        }
      });
  }
}
