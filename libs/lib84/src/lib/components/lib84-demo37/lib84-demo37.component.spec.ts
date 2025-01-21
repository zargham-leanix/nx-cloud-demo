import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib84Demo37Component } from './lib84-demo37.component';

describe('Lib84Demo37Component', () => {
  let component: Lib84Demo37Component;
  let fixture: ComponentFixture<Lib84Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib84Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib84Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
