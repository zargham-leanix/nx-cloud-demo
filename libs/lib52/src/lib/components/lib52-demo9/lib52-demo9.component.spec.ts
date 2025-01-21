import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo9Component } from './lib52-demo9.component';

describe('Lib52Demo9Component', () => {
  let component: Lib52Demo9Component;
  let fixture: ComponentFixture<Lib52Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
