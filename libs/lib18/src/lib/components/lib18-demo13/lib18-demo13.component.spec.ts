import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo13Component } from './lib18-demo13.component';

describe('Lib18Demo13Component', () => {
  let component: Lib18Demo13Component;
  let fixture: ComponentFixture<Lib18Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
