import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib81Demo9Component } from './lib81-demo9.component';

describe('Lib81Demo9Component', () => {
  let component: Lib81Demo9Component;
  let fixture: ComponentFixture<Lib81Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib81Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib81Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
