import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo9Component } from './lib84-demo9.component';

describe('Lib84Demo9Component', () => {
  let component: Lib84Demo9Component;
  let fixture: ComponentFixture<Lib84Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
