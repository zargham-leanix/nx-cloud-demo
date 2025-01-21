import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib66Demo5Component } from './lib66-demo5.component';

describe('Lib66Demo5Component', () => {
  let component: Lib66Demo5Component;
  let fixture: ComponentFixture<Lib66Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib66Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib66Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
