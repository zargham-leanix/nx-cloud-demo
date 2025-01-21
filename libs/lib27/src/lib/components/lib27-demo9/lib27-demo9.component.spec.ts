import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib27Demo9Component } from './lib27-demo9.component';

describe('Lib27Demo9Component', () => {
  let component: Lib27Demo9Component;
  let fixture: ComponentFixture<Lib27Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib27Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib27Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
