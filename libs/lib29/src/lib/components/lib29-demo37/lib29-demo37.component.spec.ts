import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo37Component } from './lib29-demo37.component';

describe('Lib29Demo37Component', () => {
  let component: Lib29Demo37Component;
  let fixture: ComponentFixture<Lib29Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
