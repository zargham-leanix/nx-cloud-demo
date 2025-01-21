import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo9Component } from './lib41-demo9.component';

describe('Lib41Demo9Component', () => {
  let component: Lib41Demo9Component;
  let fixture: ComponentFixture<Lib41Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
