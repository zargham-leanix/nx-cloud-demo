import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib60Demo10Component } from './lib60-demo10.component';

describe('Lib60Demo10Component', () => {
  let component: Lib60Demo10Component;
  let fixture: ComponentFixture<Lib60Demo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib60Demo10Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib60Demo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
