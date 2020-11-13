import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LayoutComponent } from './layout/layout.component'
import { DashboardExampleComponent } from './pages/dashboard-example/dashboard-example.component'
import { TableExampleComponent } from './pages/table-example/table-example.component'
import { AddressformExampleComponent } from './pages/addressform-example/addressform-example.component'
import { IndicatorsExampleComponent } from './pages/indicators-example/indicators-example.component'
import { InteractionsExampleComponent } from './pages/interactions-example/interactions-example.component'
import { ToolbarsExampleComponent } from './pages/toolbars-example/toolbars-example.component'

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: DashboardExampleComponent,
            },
            {
                path: 'table',
                component: TableExampleComponent,
            },
            {
                path: 'form',
                component: AddressformExampleComponent,
            },
            {
                path: 'indicators',
                component: IndicatorsExampleComponent,
            },
            {
                path: 'interactions',
                component: InteractionsExampleComponent,
            },
            {
                path: 'toolbars',
                component: ToolbarsExampleComponent,
            },
        ],
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MaterialExamplesRoutingModule {}
