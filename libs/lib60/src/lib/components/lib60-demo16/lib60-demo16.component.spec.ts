import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo16Component } from './lib60-demo16.component';

describe('Lib60Demo16Component', () => {
  let component: Lib60Demo16Component;
  let fixture: ComponentFixture<Lib60Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
