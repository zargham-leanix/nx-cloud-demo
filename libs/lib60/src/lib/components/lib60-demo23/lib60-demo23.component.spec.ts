import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo23Component } from './lib60-demo23.component';

describe('Lib60Demo23Component', () => {
  let component: Lib60Demo23Component;
  let fixture: ComponentFixture<Lib60Demo23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
