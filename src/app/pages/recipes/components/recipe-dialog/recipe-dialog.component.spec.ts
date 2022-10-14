import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('IngredientDialogComponent', () => {
  let component: IngredientDialogComponent;
  let fixture: ComponentFixture<IngredientDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IngredientDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
