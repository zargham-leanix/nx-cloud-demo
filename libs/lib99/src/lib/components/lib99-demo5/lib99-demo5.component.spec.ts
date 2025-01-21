import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo5Component } from './lib99-demo5.component';

describe('Lib99Demo5Component', () => {
  let component: Lib99Demo5Component;
  let fixture: ComponentFixture<Lib99Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
