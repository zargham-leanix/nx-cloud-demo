import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib87Demo5Component } from './lib87-demo5.component';

describe('Lib87Demo5Component', () => {
  let component: Lib87Demo5Component;
  let fixture: ComponentFixture<Lib87Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib87Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib87Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
