import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib12Demo37Component } from './lib12-demo37.component';

describe('Lib12Demo37Component', () => {
  let component: Lib12Demo37Component;
  let fixture: ComponentFixture<Lib12Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib12Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib12Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
