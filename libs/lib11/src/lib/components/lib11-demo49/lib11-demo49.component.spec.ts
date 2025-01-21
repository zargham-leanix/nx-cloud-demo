import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib11Demo49Component } from './lib11-demo49.component';

describe('Lib11Demo49Component', () => {
  let component: Lib11Demo49Component;
  let fixture: ComponentFixture<Lib11Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib11Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib11Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
