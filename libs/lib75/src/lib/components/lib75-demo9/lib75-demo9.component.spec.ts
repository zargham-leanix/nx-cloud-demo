import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo9Component } from './lib75-demo9.component';

describe('Lib75Demo9Component', () => {
  let component: Lib75Demo9Component;
  let fixture: ComponentFixture<Lib75Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
