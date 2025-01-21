import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib62Demo18Component } from './lib62-demo18.component';

describe('Lib62Demo18Component', () => {
  let component: Lib62Demo18Component;
  let fixture: ComponentFixture<Lib62Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib62Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib62Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
