import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo47Component } from './lib20-demo47.component';

describe('Lib20Demo47Component', () => {
  let component: Lib20Demo47Component;
  let fixture: ComponentFixture<Lib20Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
