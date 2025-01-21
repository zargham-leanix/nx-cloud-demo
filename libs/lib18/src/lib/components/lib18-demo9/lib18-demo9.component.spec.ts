import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo9Component } from './lib18-demo9.component';

describe('Lib18Demo9Component', () => {
  let component: Lib18Demo9Component;
  let fixture: ComponentFixture<Lib18Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
