import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib44Demo37Component } from './lib44-demo37.component';

describe('Lib44Demo37Component', () => {
  let component: Lib44Demo37Component;
  let fixture: ComponentFixture<Lib44Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib44Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib44Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
