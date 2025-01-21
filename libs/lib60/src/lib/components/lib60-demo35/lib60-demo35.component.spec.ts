import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo35Component } from './lib60-demo35.component';

describe('Lib60Demo35Component', () => {
  let component: Lib60Demo35Component;
  let fixture: ComponentFixture<Lib60Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
