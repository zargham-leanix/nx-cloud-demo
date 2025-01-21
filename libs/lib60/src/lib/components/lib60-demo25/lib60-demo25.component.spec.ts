import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo25Component } from './lib60-demo25.component';

describe('Lib60Demo25Component', () => {
  let component: Lib60Demo25Component;
  let fixture: ComponentFixture<Lib60Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
