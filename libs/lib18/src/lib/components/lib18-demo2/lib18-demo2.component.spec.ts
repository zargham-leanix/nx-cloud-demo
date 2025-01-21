import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo2Component } from './lib18-demo2.component';

describe('Lib18Demo2Component', () => {
  let component: Lib18Demo2Component;
  let fixture: ComponentFixture<Lib18Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
