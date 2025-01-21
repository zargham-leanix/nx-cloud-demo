import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo9Component } from './lib100-demo9.component';

describe('Lib100Demo9Component', () => {
  let component: Lib100Demo9Component;
  let fixture: ComponentFixture<Lib100Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
