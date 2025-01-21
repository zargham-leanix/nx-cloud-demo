import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo5Component } from './lib55-demo5.component';

describe('Lib55Demo5Component', () => {
  let component: Lib55Demo5Component;
  let fixture: ComponentFixture<Lib55Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
