import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo6Component } from './lib60-demo6.component';

describe('Lib60Demo6Component', () => {
  let component: Lib60Demo6Component;
  let fixture: ComponentFixture<Lib60Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
