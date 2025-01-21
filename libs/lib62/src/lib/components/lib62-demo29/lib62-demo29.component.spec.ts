import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo29Component } from './lib62-demo29.component';

describe('Lib62Demo29Component', () => {
  let component: Lib62Demo29Component;
  let fixture: ComponentFixture<Lib62Demo29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
