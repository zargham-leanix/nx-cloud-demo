import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib10Demo5Component } from './lib10-demo5.component';

describe('Lib10Demo5Component', () => {
  let component: Lib10Demo5Component;
  let fixture: ComponentFixture<Lib10Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib10Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib10Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
