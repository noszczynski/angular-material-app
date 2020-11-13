import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTable } from '@angular/material/table'
import {
    TableExampleDataSource,
    TableExampleItem,
} from './table-example-datasource'

@Component({
    selector: 'app-table-example',
    templateUrl: './table-example.component.html',
    styleUrls: ['./table-example.component.scss'],
})
export class TableExampleComponent implements AfterViewInit, OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator
    @ViewChild(MatSort) sort: MatSort
    @ViewChild(MatTable) table: MatTable<TableExampleItem>
    dataSource: TableExampleDataSource

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name']

    ngOnInit(): void {
        this.dataSource = new TableExampleDataSource()
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort
        this.dataSource.paginator = this.paginator
        this.table.dataSource = this.dataSource
    }
}