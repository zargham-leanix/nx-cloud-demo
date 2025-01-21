import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo13Component } from './lib60-demo13.component';

describe('Lib60Demo13Component', () => {
  let component: Lib60Demo13Component;
  let fixture: ComponentFixture<Lib60Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
