import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Ana Sayfa', icon: 'dashboard', class: '' },
  { path: '/rezervasyon', title: 'Rezervasyon', icon: 'add_task', class: '' },
  { path: '/yeni-rezervasyon', title: 'Yeni Müşteri', icon: 'person_add', class: '' },
  //{ path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
  { path: '/mevcut-konaklayanlar', title: 'Mevcut Konaklayanlar', icon: 'badge', class: '' },
  //{ path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
  { path: '/yeni-fatura', title: 'Fatura', icon: 'receipt', class: '' },
  { path: '/fatura-list', title: 'Fatura Listesi', icon: 'library_books', class: '' },
  { path: '/icons', title: 'Icons', icon: 'bubble_chart', class: '' },
  { path: '/gunluk-musteri-listesi', title: 'Günlük Müşteri Listesi', icon: 'fact_check', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };
}
