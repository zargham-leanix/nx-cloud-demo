import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo5Component } from './lib41-demo5.component';

describe('Lib41Demo5Component', () => {
  let component: Lib41Demo5Component;
  let fixture: ComponentFixture<Lib41Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
