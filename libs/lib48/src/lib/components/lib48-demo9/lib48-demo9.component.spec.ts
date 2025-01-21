import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib48Demo9Component } from './lib48-demo9.component';

describe('Lib48Demo9Component', () => {
  let component: Lib48Demo9Component;
  let fixture: ComponentFixture<Lib48Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib48Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib48Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
