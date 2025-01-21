import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo5Component } from './lib47-demo5.component';

describe('Lib47Demo5Component', () => {
  let component: Lib47Demo5Component;
  let fixture: ComponentFixture<Lib47Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
