import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo11Component } from './lib62-demo11.component';

describe('Lib62Demo11Component', () => {
  let component: Lib62Demo11Component;
  let fixture: ComponentFixture<Lib62Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
