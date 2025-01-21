import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo34Component } from './lib60-demo34.component';

describe('Lib60Demo34Component', () => {
  let component: Lib60Demo34Component;
  let fixture: ComponentFixture<Lib60Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
