import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo37Component } from './lib60-demo37.component';

describe('Lib60Demo37Component', () => {
  let component: Lib60Demo37Component;
  let fixture: ComponentFixture<Lib60Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
