import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo3Component } from './lib60-demo3.component';

describe('Lib60Demo3Component', () => {
  let component: Lib60Demo3Component;
  let fixture: ComponentFixture<Lib60Demo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
