import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo29Component } from './lib60-demo29.component';

describe('Lib60Demo29Component', () => {
  let component: Lib60Demo29Component;
  let fixture: ComponentFixture<Lib60Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
