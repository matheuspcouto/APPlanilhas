import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { CarrinhoService } from 'src/app/services/carrinho-state.service';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {

  loading = false;

  constructor(private router: Router, private carrinho: CarrinhoService){
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }
      if (event instanceof NavigationEnd || event instanceof NavigationError) {
        this.loading = false;
      }
    })
  }
}
