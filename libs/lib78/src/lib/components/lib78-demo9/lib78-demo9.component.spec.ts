import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib78Demo9Component } from './lib78-demo9.component';

describe('Lib78Demo9Component', () => {
  let component: Lib78Demo9Component;
  let fixture: ComponentFixture<Lib78Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib78Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib78Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
