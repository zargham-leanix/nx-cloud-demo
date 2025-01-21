import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo35Component } from './lib62-demo35.component';

describe('Lib62Demo35Component', () => {
  let component: Lib62Demo35Component;
  let fixture: ComponentFixture<Lib62Demo35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
