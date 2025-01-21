import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo36Component } from './lib11-demo36.component';

describe('Lib11Demo36Component', () => {
  let component: Lib11Demo36Component;
  let fixture: ComponentFixture<Lib11Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
