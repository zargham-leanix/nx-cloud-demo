import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo11Component } from './lib60-demo11.component';

describe('Lib60Demo11Component', () => {
  let component: Lib60Demo11Component;
  let fixture: ComponentFixture<Lib60Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
