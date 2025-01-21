import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo37Component } from './lib47-demo37.component';

describe('Lib47Demo37Component', () => {
  let component: Lib47Demo37Component;
  let fixture: ComponentFixture<Lib47Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
