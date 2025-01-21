import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo34Component } from './lib62-demo34.component';

describe('Lib62Demo34Component', () => {
  let component: Lib62Demo34Component;
  let fixture: ComponentFixture<Lib62Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
