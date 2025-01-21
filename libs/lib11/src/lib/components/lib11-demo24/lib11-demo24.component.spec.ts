import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo24Component } from './lib11-demo24.component';

describe('Lib11Demo24Component', () => {
  let component: Lib11Demo24Component;
  let fixture: ComponentFixture<Lib11Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
