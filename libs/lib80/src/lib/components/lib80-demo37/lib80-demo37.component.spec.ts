import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo37Component } from './lib80-demo37.component';

describe('Lib80Demo37Component', () => {
  let component: Lib80Demo37Component;
  let fixture: ComponentFixture<Lib80Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
