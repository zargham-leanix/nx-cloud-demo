import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo43Component } from './lib62-demo43.component';

describe('Lib62Demo43Component', () => {
  let component: Lib62Demo43Component;
  let fixture: ComponentFixture<Lib62Demo43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
