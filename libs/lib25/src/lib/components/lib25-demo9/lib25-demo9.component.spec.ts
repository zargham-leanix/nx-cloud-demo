import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib25Demo9Component } from './lib25-demo9.component';

describe('Lib25Demo9Component', () => {
  let component: Lib25Demo9Component;
  let fixture: ComponentFixture<Lib25Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib25Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib25Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
