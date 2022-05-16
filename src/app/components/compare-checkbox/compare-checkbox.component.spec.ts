import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareCheckboxComponent } from './compare-checkbox.component';

describe('CompareCheckboxComponent', () => {
  let component: CompareCheckboxComponent;
  let fixture: ComponentFixture<CompareCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
