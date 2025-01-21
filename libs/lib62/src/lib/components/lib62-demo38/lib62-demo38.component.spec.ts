import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo38Component } from './lib62-demo38.component';

describe('Lib62Demo38Component', () => {
  let component: Lib62Demo38Component;
  let fixture: ComponentFixture<Lib62Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
