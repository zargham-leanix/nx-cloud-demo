import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo2Component } from './lib60-demo2.component';

describe('Lib60Demo2Component', () => {
  let component: Lib60Demo2Component;
  let fixture: ComponentFixture<Lib60Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
