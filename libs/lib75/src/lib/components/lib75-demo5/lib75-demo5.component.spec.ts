import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo5Component } from './lib75-demo5.component';

describe('Lib75Demo5Component', () => {
  let component: Lib75Demo5Component;
  let fixture: ComponentFixture<Lib75Demo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
