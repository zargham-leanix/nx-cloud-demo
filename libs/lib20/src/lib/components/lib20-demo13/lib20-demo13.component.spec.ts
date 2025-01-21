import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo13Component } from './lib20-demo13.component';

describe('Lib20Demo13Component', () => {
  let component: Lib20Demo13Component;
  let fixture: ComponentFixture<Lib20Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
