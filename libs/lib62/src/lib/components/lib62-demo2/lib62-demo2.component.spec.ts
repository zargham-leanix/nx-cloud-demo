import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo2Component } from './lib62-demo2.component';

describe('Lib62Demo2Component', () => {
  let component: Lib62Demo2Component;
  let fixture: ComponentFixture<Lib62Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
