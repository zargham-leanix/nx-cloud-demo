import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo11Component } from './lib20-demo11.component';

describe('Lib20Demo11Component', () => {
  let component: Lib20Demo11Component;
  let fixture: ComponentFixture<Lib20Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
