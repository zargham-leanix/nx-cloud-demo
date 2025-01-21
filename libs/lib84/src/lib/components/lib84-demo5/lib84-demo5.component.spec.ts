import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo5Component } from './lib84-demo5.component';

describe('Lib84Demo5Component', () => {
  let component: Lib84Demo5Component;
  let fixture: ComponentFixture<Lib84Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
