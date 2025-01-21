import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo19Component } from './lib60-demo19.component';

describe('Lib60Demo19Component', () => {
  let component: Lib60Demo19Component;
  let fixture: ComponentFixture<Lib60Demo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo19Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
