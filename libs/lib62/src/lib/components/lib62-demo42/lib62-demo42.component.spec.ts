import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo42Component } from './lib62-demo42.component';

describe('Lib62Demo42Component', () => {
  let component: Lib62Demo42Component;
  let fixture: ComponentFixture<Lib62Demo42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
