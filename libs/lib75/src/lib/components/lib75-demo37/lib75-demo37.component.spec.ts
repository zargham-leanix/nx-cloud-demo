import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib75Demo37Component } from './lib75-demo37.component';

describe('Lib75Demo37Component', () => {
  let component: Lib75Demo37Component;
  let fixture: ComponentFixture<Lib75Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib75Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib75Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
