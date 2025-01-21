import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo37Component } from './lib28-demo37.component';

describe('Lib28Demo37Component', () => {
  let component: Lib28Demo37Component;
  let fixture: ComponentFixture<Lib28Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
