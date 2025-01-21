import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo46Component } from './lib60-demo46.component';

describe('Lib60Demo46Component', () => {
  let component: Lib60Demo46Component;
  let fixture: ComponentFixture<Lib60Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
