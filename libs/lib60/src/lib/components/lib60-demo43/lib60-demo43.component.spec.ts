import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo43Component } from './lib60-demo43.component';

describe('Lib60Demo43Component', () => {
  let component: Lib60Demo43Component;
  let fixture: ComponentFixture<Lib60Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
