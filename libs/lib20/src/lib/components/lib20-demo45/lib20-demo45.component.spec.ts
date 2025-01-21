import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo45Component } from './lib20-demo45.component';

describe('Lib20Demo45Component', () => {
  let component: Lib20Demo45Component;
  let fixture: ComponentFixture<Lib20Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
