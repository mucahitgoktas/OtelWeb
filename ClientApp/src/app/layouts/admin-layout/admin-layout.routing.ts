import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { YeniRezervasyonComponent } from 'app/yeni-rezervasyon/yeni-rezervasyon.component';
import { MevcutKonaklayanlarComponent } from 'app/mevcut-konaklayanlar/mevcut-konaklayanlar.component';
import { GuestDetailsComponent } from 'app/guest-details/guest-details.component';
import { GuestEditComponent } from 'app/guest-edit/guest-edit.component';
import { YeniFaturaComponent } from 'app/yeni-fatura/yeni-fatura.component';
import { FaturaListComponent } from 'app/fatura-list/fatura-list.component';
import { FaturaDetailsComponent } from 'app/fatura-details/fatura-details.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'table-list', component: TableListComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent },
    { path: 'yeni-rezervasyon', component: YeniRezervasyonComponent },
    { path: 'mevcut-konaklayanlar', component: MevcutKonaklayanlarComponent },
    { path: 'guest-details', component: GuestDetailsComponent },
    { path: 'guest-edit', component: GuestEditComponent },
    { path: 'yeni-fatura', component: YeniFaturaComponent },
    { path: 'fatura-list', component: FaturaListComponent },
    { path: 'fatura-details', component: FaturaDetailsComponent }
];
