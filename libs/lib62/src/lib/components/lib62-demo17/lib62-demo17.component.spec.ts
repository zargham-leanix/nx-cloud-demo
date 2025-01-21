import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo17Component } from './lib62-demo17.component';

describe('Lib62Demo17Component', () => {
  let component: Lib62Demo17Component;
  let fixture: ComponentFixture<Lib62Demo17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
