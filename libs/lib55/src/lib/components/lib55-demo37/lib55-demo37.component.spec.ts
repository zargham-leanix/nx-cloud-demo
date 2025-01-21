import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib55Demo37Component } from './lib55-demo37.component';

describe('Lib55Demo37Component', () => {
  let component: Lib55Demo37Component;
  let fixture: ComponentFixture<Lib55Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib55Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib55Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
