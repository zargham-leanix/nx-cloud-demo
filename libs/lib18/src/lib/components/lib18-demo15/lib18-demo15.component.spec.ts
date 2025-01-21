import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo15Component } from './lib18-demo15.component';

describe('Lib18Demo15Component', () => {
  let component: Lib18Demo15Component;
  let fixture: ComponentFixture<Lib18Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
