import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib57Demo9Component } from './lib57-demo9.component';

describe('Lib57Demo9Component', () => {
  let component: Lib57Demo9Component;
  let fixture: ComponentFixture<Lib57Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib57Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib57Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
