import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo46Component } from './lib62-demo46.component';

describe('Lib62Demo46Component', () => {
  let component: Lib62Demo46Component;
  let fixture: ComponentFixture<Lib62Demo46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
