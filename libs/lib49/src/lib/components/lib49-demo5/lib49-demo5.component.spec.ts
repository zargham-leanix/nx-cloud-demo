import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib49Demo5Component } from './lib49-demo5.component';

describe('Lib49Demo5Component', () => {
  let component: Lib49Demo5Component;
  let fixture: ComponentFixture<Lib49Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib49Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib49Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
