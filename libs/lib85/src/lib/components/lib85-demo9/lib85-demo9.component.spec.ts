import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib85Demo9Component } from './lib85-demo9.component';

describe('Lib85Demo9Component', () => {
  let component: Lib85Demo9Component;
  let fixture: ComponentFixture<Lib85Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib85Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib85Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
