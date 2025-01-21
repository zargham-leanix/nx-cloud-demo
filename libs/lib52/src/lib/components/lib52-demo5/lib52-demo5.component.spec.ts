import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo5Component } from './lib52-demo5.component';

describe('Lib52Demo5Component', () => {
  let component: Lib52Demo5Component;
  let fixture: ComponentFixture<Lib52Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
