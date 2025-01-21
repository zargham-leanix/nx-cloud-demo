import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo32Component } from './lib62-demo32.component';

describe('Lib62Demo32Component', () => {
  let component: Lib62Demo32Component;
  let fixture: ComponentFixture<Lib62Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
