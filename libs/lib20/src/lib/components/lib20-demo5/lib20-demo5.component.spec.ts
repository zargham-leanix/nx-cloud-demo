import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib20Demo5Component } from './lib20-demo5.component';

describe('Lib20Demo5Component', () => {
  let component: Lib20Demo5Component;
  let fixture: ComponentFixture<Lib20Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib20Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib20Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
