import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib26Demo9Component } from './lib26-demo9.component';

describe('Lib26Demo9Component', () => {
  let component: Lib26Demo9Component;
  let fixture: ComponentFixture<Lib26Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib26Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib26Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
