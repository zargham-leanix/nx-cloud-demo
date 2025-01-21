import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo18Component } from './lib31-demo18.component';

describe('Lib31Demo18Component', () => {
  let component: Lib31Demo18Component;
  let fixture: ComponentFixture<Lib31Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
