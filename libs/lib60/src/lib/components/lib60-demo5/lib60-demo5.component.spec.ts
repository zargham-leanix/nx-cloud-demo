import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo5Component } from './lib60-demo5.component';

describe('Lib60Demo5Component', () => {
  let component: Lib60Demo5Component;
  let fixture: ComponentFixture<Lib60Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
