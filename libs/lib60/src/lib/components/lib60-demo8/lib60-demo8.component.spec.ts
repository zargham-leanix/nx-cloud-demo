import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo8Component } from './lib60-demo8.component';

describe('Lib60Demo8Component', () => {
  let component: Lib60Demo8Component;
  let fixture: ComponentFixture<Lib60Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
