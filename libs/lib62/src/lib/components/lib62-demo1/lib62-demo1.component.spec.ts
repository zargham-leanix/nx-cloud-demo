import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo1Component } from './lib62-demo1.component';

describe('Lib62Demo1Component', () => {
  let component: Lib62Demo1Component;
  let fixture: ComponentFixture<Lib62Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
