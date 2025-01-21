import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo13Component } from './lib62-demo13.component';

describe('Lib62Demo13Component', () => {
  let component: Lib62Demo13Component;
  let fixture: ComponentFixture<Lib62Demo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
