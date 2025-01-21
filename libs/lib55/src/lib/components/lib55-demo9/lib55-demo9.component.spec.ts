import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo9Component } from './lib55-demo9.component';

describe('Lib55Demo9Component', () => {
  let component: Lib55Demo9Component;
  let fixture: ComponentFixture<Lib55Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
