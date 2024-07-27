import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: `

  `,
})
export class LayoutPageComponent {

  public sidebarItems = [
    { label: 'List' , icon: 'label', url: './list'},
    { label: 'Add' , icon: 'add' , url: './new-hero'},
    {label: 'Search', icon: 'search', url:'./search' },
  ]

  constructor(
    private authService: AuthService
  ) { }

  onLogout() {
    this.authService.logout()
  }
}
