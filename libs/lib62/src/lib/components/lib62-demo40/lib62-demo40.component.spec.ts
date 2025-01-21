import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo40Component } from './lib62-demo40.component';

describe('Lib62Demo40Component', () => {
  let component: Lib62Demo40Component;
  let fixture: ComponentFixture<Lib62Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
