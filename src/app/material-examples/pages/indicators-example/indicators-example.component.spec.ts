import { ComponentFixture, TestBed } from '@angular/core/testing'

import { IndicatorsExampleComponent } from './indicators-example.component'

describe('IndicatorsExampleComponent', () => {
    let component: IndicatorsExampleComponent
    let fixture: ComponentFixture<IndicatorsExampleComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [IndicatorsExampleComponent],
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(IndicatorsExampleComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })
})
