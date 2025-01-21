import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib31Demo9Component } from './lib31-demo9.component';

describe('Lib31Demo9Component', () => {
  let component: Lib31Demo9Component;
  let fixture: ComponentFixture<Lib31Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib31Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib31Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
