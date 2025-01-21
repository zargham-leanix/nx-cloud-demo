import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo37Component } from './lib76-demo37.component';

describe('Lib76Demo37Component', () => {
  let component: Lib76Demo37Component;
  let fixture: ComponentFixture<Lib76Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
