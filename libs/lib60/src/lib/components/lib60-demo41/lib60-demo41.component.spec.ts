import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo41Component } from './lib60-demo41.component';

describe('Lib60Demo41Component', () => {
  let component: Lib60Demo41Component;
  let fixture: ComponentFixture<Lib60Demo41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
