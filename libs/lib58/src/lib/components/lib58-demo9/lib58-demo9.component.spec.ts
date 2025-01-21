import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo9Component } from './lib58-demo9.component';

describe('Lib58Demo9Component', () => {
  let component: Lib58Demo9Component;
  let fixture: ComponentFixture<Lib58Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
