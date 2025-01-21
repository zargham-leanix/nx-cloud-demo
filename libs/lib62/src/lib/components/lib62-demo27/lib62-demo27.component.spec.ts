import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo27Component } from './lib62-demo27.component';

describe('Lib62Demo27Component', () => {
  let component: Lib62Demo27Component;
  let fixture: ComponentFixture<Lib62Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
