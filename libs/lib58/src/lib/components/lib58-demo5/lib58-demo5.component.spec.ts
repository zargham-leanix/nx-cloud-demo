import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo5Component } from './lib58-demo5.component';

describe('Lib58Demo5Component', () => {
  let component: Lib58Demo5Component;
  let fixture: ComponentFixture<Lib58Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
