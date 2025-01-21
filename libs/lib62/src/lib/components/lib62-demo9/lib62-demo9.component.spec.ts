import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo9Component } from './lib62-demo9.component';

describe('Lib62Demo9Component', () => {
  let component: Lib62Demo9Component;
  let fixture: ComponentFixture<Lib62Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
