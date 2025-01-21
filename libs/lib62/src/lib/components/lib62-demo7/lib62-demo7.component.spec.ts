import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo7Component } from './lib62-demo7.component';

describe('Lib62Demo7Component', () => {
  let component: Lib62Demo7Component;
  let fixture: ComponentFixture<Lib62Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
