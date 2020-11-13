import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ToolbarsExampleComponent } from './toolbars-example.component'

describe('ToolbarsExampleComponent', () => {
    let component: ToolbarsExampleComponent
    let fixture: ComponentFixture<ToolbarsExampleComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ToolbarsExampleComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(ToolbarsExampleComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
