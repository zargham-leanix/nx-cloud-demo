import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib99Demo9Component } from './lib99-demo9.component';

describe('Lib99Demo9Component', () => {
  let component: Lib99Demo9Component;
  let fixture: ComponentFixture<Lib99Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib99Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib99Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
