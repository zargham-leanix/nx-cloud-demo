import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo37Component } from './lib41-demo37.component';

describe('Lib41Demo37Component', () => {
  let component: Lib41Demo37Component;
  let fixture: ComponentFixture<Lib41Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
