import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo4Component } from './lib60-demo4.component';

describe('Lib60Demo4Component', () => {
  let component: Lib60Demo4Component;
  let fixture: ComponentFixture<Lib60Demo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
