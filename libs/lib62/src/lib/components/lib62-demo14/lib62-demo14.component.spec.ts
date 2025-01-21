import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo14Component } from './lib62-demo14.component';

describe('Lib62Demo14Component', () => {
  let component: Lib62Demo14Component;
  let fixture: ComponentFixture<Lib62Demo14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
