import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MaterialExamplesRoutingModule } from './material-examples-routing.module'
import { LayoutComponent } from './layout/layout.component'
import { LayoutModule } from '@angular/cdk/layout'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { DashboardExampleComponent } from './pages/dashboard-example/dashboard-example.component'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card'
import { MatMenuModule } from '@angular/material/menu'
import { AddressformExampleComponent } from './pages/addressform-example/addressform-example.component'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatRadioModule } from '@angular/material/radio'
import { ReactiveFormsModule } from '@angular/forms'
import { TableExampleComponent } from './pages/table-example/table-example.component'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatSortModule } from '@angular/material/sort'
import { IndicatorsExampleComponent } from './pages/indicators-example/indicators-example.component'
import { InteractionsExampleComponent } from './pages/interactions-example/interactions-example.component'

@NgModule({
    declarations: [
        LayoutComponent,
        DashboardExampleComponent,
        AddressformExampleComponent,
        TableExampleComponent,
        IndicatorsExampleComponent,
        InteractionsExampleComponent,
    ],
    imports: [
        CommonModule,
        MaterialExamplesRoutingModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
    ],
})
export class MaterialExamplesModule {}
