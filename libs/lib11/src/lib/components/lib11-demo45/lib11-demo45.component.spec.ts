import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo45Component } from './lib11-demo45.component';

describe('Lib11Demo45Component', () => {
  let component: Lib11Demo45Component;
  let fixture: ComponentFixture<Lib11Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
