import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo14Component } from './lib20-demo14.component';

describe('Lib20Demo14Component', () => {
  let component: Lib20Demo14Component;
  let fixture: ComponentFixture<Lib20Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
