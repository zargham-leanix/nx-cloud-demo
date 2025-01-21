import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo39Component } from './lib60-demo39.component';

describe('Lib60Demo39Component', () => {
  let component: Lib60Demo39Component;
  let fixture: ComponentFixture<Lib60Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
