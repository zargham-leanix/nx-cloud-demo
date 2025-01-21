import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo9Component } from './lib29-demo9.component';

describe('Lib29Demo9Component', () => {
  let component: Lib29Demo9Component;
  let fixture: ComponentFixture<Lib29Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
