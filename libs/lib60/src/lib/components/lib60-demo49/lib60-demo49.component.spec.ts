import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo49Component } from './lib60-demo49.component';

describe('Lib60Demo49Component', () => {
  let component: Lib60Demo49Component;
  let fixture: ComponentFixture<Lib60Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
