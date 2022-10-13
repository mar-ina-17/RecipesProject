import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientInputsComponent } from './ingredient-inputs.component';

describe('IngredientInputsComponent', () => {
  let component: IngredientInputsComponent;
  let fixture: ComponentFixture<IngredientInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngredientInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
