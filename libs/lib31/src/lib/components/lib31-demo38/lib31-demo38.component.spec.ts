import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo38Component } from './lib31-demo38.component';

describe('Lib31Demo38Component', () => {
  let component: Lib31Demo38Component;
  let fixture: ComponentFixture<Lib31Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
