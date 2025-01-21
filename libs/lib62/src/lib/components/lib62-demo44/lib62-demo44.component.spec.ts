import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo44Component } from './lib62-demo44.component';

describe('Lib62Demo44Component', () => {
  let component: Lib62Demo44Component;
  let fixture: ComponentFixture<Lib62Demo44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
