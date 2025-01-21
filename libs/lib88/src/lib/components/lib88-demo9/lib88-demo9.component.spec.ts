import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib88Demo9Component } from './lib88-demo9.component';

describe('Lib88Demo9Component', () => {
  let component: Lib88Demo9Component;
  let fixture: ComponentFixture<Lib88Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib88Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib88Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
