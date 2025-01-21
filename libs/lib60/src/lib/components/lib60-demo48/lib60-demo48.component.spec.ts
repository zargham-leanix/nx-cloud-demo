import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo48Component } from './lib60-demo48.component';

describe('Lib60Demo48Component', () => {
  let component: Lib60Demo48Component;
  let fixture: ComponentFixture<Lib60Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
