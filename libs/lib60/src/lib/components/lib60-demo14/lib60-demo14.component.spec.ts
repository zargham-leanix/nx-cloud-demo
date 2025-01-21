import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo14Component } from './lib60-demo14.component';

describe('Lib60Demo14Component', () => {
  let component: Lib60Demo14Component;
  let fixture: ComponentFixture<Lib60Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
