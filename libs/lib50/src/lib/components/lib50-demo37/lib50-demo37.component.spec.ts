import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib50Demo37Component } from './lib50-demo37.component';

describe('Lib50Demo37Component', () => {
  let component: Lib50Demo37Component;
  let fixture: ComponentFixture<Lib50Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib50Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib50Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
