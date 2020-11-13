import { ComponentFixture, TestBed } from '@angular/core/testing'

import { InteractionsExampleComponent } from './interactions-example.component'

describe('InteractionsExampleComponent', () => {
    let component: InteractionsExampleComponent
    let fixture: ComponentFixture<InteractionsExampleComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [InteractionsExampleComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(InteractionsExampleComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
