import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo17Component } from './lib60-demo17.component';

describe('Lib60Demo17Component', () => {
  let component: Lib60Demo17Component;
  let fixture: ComponentFixture<Lib60Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
