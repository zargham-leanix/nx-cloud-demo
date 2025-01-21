import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib38Demo9Component } from './lib38-demo9.component';

describe('Lib38Demo9Component', () => {
  let component: Lib38Demo9Component;
  let fixture: ComponentFixture<Lib38Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib38Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib38Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
