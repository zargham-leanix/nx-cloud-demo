import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib63Demo9Component } from './lib63-demo9.component';

describe('Lib63Demo9Component', () => {
  let component: Lib63Demo9Component;
  let fixture: ComponentFixture<Lib63Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib63Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib63Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
