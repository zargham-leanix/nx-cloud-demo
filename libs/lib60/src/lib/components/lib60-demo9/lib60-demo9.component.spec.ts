import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo9Component } from './lib60-demo9.component';

describe('Lib60Demo9Component', () => {
  let component: Lib60Demo9Component;
  let fixture: ComponentFixture<Lib60Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
