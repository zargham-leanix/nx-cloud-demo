import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo7Component } from './lib60-demo7.component';

describe('Lib60Demo7Component', () => {
  let component: Lib60Demo7Component;
  let fixture: ComponentFixture<Lib60Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
