import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo9Component } from './lib28-demo9.component';

describe('Lib28Demo9Component', () => {
  let component: Lib28Demo9Component;
  let fixture: ComponentFixture<Lib28Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
