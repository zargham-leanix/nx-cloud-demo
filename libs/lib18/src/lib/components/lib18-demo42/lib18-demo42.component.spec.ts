import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo42Component } from './lib18-demo42.component';

describe('Lib18Demo42Component', () => {
  let component: Lib18Demo42Component;
  let fixture: ComponentFixture<Lib18Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
