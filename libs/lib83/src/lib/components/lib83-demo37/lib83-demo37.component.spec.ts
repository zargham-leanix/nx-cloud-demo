import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo37Component } from './lib83-demo37.component';

describe('Lib83Demo37Component', () => {
  let component: Lib83Demo37Component;
  let fixture: ComponentFixture<Lib83Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
