import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo32Component } from './lib60-demo32.component';

describe('Lib60Demo32Component', () => {
  let component: Lib60Demo32Component;
  let fixture: ComponentFixture<Lib60Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
