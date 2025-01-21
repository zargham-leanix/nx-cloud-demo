import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo26Component } from './lib60-demo26.component';

describe('Lib60Demo26Component', () => {
  let component: Lib60Demo26Component;
  let fixture: ComponentFixture<Lib60Demo26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
