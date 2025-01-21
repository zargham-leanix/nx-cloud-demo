import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo44Component } from './lib60-demo44.component';

describe('Lib60Demo44Component', () => {
  let component: Lib60Demo44Component;
  let fixture: ComponentFixture<Lib60Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
