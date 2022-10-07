import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeInputsComponent } from './recipe-inputs.component';

describe('RecipeInputsComponent', () => {
  let component: RecipeInputsComponent;
  let fixture: ComponentFixture<RecipeInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeInputsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
