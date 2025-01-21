import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo14Component } from './lib18-demo14.component';

describe('Lib18Demo14Component', () => {
  let component: Lib18Demo14Component;
  let fixture: ComponentFixture<Lib18Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
