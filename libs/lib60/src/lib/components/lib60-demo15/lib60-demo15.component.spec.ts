import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo15Component } from './lib60-demo15.component';

describe('Lib60Demo15Component', () => {
  let component: Lib60Demo15Component;
  let fixture: ComponentFixture<Lib60Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
