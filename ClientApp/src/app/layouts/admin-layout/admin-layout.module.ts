import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
// import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { YeniRezervasyonComponent } from 'app/yeni-rezervasyon/yeni-rezervasyon.component';
import { MevcutKonaklayanlarComponent } from 'app/mevcut-konaklayanlar/mevcut-konaklayanlar.component';
import { GuestDetailsComponent } from 'app/guest-details/guest-details.component';
import { GuestEditComponent } from 'app/guest-edit/guest-edit.component';
import { YeniFaturaComponent } from 'app/yeni-fatura/yeni-fatura.component';
import { FaturaListComponent } from 'app/fatura-list/fatura-list.component';
import { FaturaDetailsComponent } from 'app/fatura-details/fatura-details.component';
import { FaturaPrintComponent } from 'app/fatura-print/fatura-print.component';
import {NgxPrintModule} from 'ngx-print';
import { YaziIleFiyatPipe } from 'app/yazi-ile-fiyat.pipe';
import { SearchFilterPipe } from 'app/search-filter.pipe';
import { GunlukMusteriListesiComponent } from 'app/gunluk-musteri-listesi/gunluk-musteri-listesi.component';
import { RezervasyonComponent } from 'app/rezervasyon/rezervasyon.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgxPrintModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    UpgradeComponent,
    YeniRezervasyonComponent,
    MevcutKonaklayanlarComponent,
    GuestDetailsComponent,
    GuestEditComponent,
    YeniFaturaComponent,
    FaturaListComponent,
    FaturaDetailsComponent,
    FaturaPrintComponent,
    YaziIleFiyatPipe,
    SearchFilterPipe,
    GunlukMusteriListesiComponent,
    RezervasyonComponent,

  ]
})

export class AdminLayoutModule {}
