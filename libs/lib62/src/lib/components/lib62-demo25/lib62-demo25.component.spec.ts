import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo25Component } from './lib62-demo25.component';

describe('Lib62Demo25Component', () => {
  let component: Lib62Demo25Component;
  let fixture: ComponentFixture<Lib62Demo25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
