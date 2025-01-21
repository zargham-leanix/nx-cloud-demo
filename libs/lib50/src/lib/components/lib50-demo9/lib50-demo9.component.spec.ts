import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo9Component } from './lib50-demo9.component';

describe('Lib50Demo9Component', () => {
  let component: Lib50Demo9Component;
  let fixture: ComponentFixture<Lib50Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
