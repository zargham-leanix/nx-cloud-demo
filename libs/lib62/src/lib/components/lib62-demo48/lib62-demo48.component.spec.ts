import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo48Component } from './lib62-demo48.component';

describe('Lib62Demo48Component', () => {
  let component: Lib62Demo48Component;
  let fixture: ComponentFixture<Lib62Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
