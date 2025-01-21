import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo27Component } from './lib60-demo27.component';

describe('Lib60Demo27Component', () => {
  let component: Lib60Demo27Component;
  let fixture: ComponentFixture<Lib60Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
