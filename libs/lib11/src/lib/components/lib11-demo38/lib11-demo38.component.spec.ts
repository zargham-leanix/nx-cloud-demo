import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo38Component } from './lib11-demo38.component';

describe('Lib11Demo38Component', () => {
  let component: Lib11Demo38Component;
  let fixture: ComponentFixture<Lib11Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
