import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo9Component } from './lib80-demo9.component';

describe('Lib80Demo9Component', () => {
  let component: Lib80Demo9Component;
  let fixture: ComponentFixture<Lib80Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
