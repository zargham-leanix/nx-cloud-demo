import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo42Component } from './lib60-demo42.component';

describe('Lib60Demo42Component', () => {
  let component: Lib60Demo42Component;
  let fixture: ComponentFixture<Lib60Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
