import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo43Component } from './lib18-demo43.component';

describe('Lib18Demo43Component', () => {
  let component: Lib18Demo43Component;
  let fixture: ComponentFixture<Lib18Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
