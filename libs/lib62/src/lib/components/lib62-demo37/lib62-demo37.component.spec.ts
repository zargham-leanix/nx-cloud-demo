import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo37Component } from './lib62-demo37.component';

describe('Lib62Demo37Component', () => {
  let component: Lib62Demo37Component;
  let fixture: ComponentFixture<Lib62Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
