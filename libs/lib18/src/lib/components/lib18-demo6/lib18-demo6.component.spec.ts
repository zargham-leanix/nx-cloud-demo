import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo6Component } from './lib18-demo6.component';

describe('Lib18Demo6Component', () => {
  let component: Lib18Demo6Component;
  let fixture: ComponentFixture<Lib18Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
