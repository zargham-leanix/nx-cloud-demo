import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib53Demo9Component } from './lib53-demo9.component';

describe('Lib53Demo9Component', () => {
  let component: Lib53Demo9Component;
  let fixture: ComponentFixture<Lib53Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib53Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib53Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
