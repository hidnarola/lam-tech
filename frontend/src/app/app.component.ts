import { Component, Renderer2, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { setTheme } from 'ngx-bootstrap/utils';
import { MessageService } from "./shared/message.service";
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  previousUrl: string;
  constructor(private renderer: Renderer2,
     private router: Router,
    private messageService : MessageService) {
    setTheme('bs4'); // or 'bs4'
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          // if (this.previousUrl) {
          //   this.renderer.removeClass(document.body, this.previousUrl);
          // }
          const user = localStorage.getItem('user');
          let currentUrlSlug = event.url.slice(1);
          this.messageService.set_current_location(currentUrlSlug);
          if (currentUrlSlug.includes('login') || currentUrlSlug == "") {
            if (!user) {
              return true
            }
            this.router.navigate(['/overview']);
          }

          if (currentUrlSlug.includes('dashboard')) {
            this.renderer.addClass(document.body, 'dashboard-pages');
          } else {
            this.renderer.removeClass(document.body, 'dashboard-pages');
          }
          // this.previousUrl = currentUrlSlug;
        }
      });
  }

  ngOnInit() {
    AOS.init();
  }
}
