import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib52Demo37Component } from './lib52-demo37.component';

describe('Lib52Demo37Component', () => {
  let component: Lib52Demo37Component;
  let fixture: ComponentFixture<Lib52Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib52Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib52Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
