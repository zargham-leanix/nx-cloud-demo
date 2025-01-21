import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo40Component } from './lib20-demo40.component';

describe('Lib20Demo40Component', () => {
  let component: Lib20Demo40Component;
  let fixture: ComponentFixture<Lib20Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
