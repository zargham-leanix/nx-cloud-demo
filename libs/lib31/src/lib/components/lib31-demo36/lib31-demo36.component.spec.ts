import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo36Component } from './lib31-demo36.component';

describe('Lib31Demo36Component', () => {
  let component: Lib31Demo36Component;
  let fixture: ComponentFixture<Lib31Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
