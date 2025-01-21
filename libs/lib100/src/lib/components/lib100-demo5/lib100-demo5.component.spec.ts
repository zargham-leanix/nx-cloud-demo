import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo5Component } from './lib100-demo5.component';

describe('Lib100Demo5Component', () => {
  let component: Lib100Demo5Component;
  let fixture: ComponentFixture<Lib100Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
