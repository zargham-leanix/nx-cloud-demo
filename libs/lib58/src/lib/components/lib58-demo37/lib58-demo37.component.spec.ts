import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib58Demo37Component } from './lib58-demo37.component';

describe('Lib58Demo37Component', () => {
  let component: Lib58Demo37Component;
  let fixture: ComponentFixture<Lib58Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib58Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib58Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
