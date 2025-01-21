import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib32Demo5Component } from './lib32-demo5.component';

describe('Lib32Demo5Component', () => {
  let component: Lib32Demo5Component;
  let fixture: ComponentFixture<Lib32Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib32Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib32Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
