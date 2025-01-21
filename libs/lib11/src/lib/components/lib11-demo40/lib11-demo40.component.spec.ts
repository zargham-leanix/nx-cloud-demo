import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo40Component } from './lib11-demo40.component';

describe('Lib11Demo40Component', () => {
  let component: Lib11Demo40Component;
  let fixture: ComponentFixture<Lib11Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
