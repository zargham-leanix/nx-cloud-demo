import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo9Component } from './lib47-demo9.component';

describe('Lib47Demo9Component', () => {
  let component: Lib47Demo9Component;
  let fixture: ComponentFixture<Lib47Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
