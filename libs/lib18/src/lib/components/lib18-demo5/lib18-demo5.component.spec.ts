import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib18Demo5Component } from './lib18-demo5.component';

describe('Lib18Demo5Component', () => {
  let component: Lib18Demo5Component;
  let fixture: ComponentFixture<Lib18Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib18Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib18Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
