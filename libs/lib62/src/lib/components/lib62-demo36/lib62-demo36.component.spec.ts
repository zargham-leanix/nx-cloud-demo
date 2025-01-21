import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo36Component } from './lib62-demo36.component';

describe('Lib62Demo36Component', () => {
  let component: Lib62Demo36Component;
  let fixture: ComponentFixture<Lib62Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
