import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo12Component } from './lib18-demo12.component';

describe('Lib18Demo12Component', () => {
  let component: Lib18Demo12Component;
  let fixture: ComponentFixture<Lib18Demo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo12Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
