import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo33Component } from './lib62-demo33.component';

describe('Lib62Demo33Component', () => {
  let component: Lib62Demo33Component;
  let fixture: ComponentFixture<Lib62Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
