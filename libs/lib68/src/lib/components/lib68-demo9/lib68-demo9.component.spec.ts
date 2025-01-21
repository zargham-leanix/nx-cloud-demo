import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib68Demo9Component } from './lib68-demo9.component';

describe('Lib68Demo9Component', () => {
  let component: Lib68Demo9Component;
  let fixture: ComponentFixture<Lib68Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib68Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib68Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
