import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib100Demo37Component } from './lib100-demo37.component';

describe('Lib100Demo37Component', () => {
  let component: Lib100Demo37Component;
  let fixture: ComponentFixture<Lib100Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib100Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib100Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
