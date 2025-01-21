import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo16Component } from './lib62-demo16.component';

describe('Lib62Demo16Component', () => {
  let component: Lib62Demo16Component;
  let fixture: ComponentFixture<Lib62Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
