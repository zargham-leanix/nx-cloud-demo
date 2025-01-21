import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo37Component } from './lib74-demo37.component';

describe('Lib74Demo37Component', () => {
  let component: Lib74Demo37Component;
  let fixture: ComponentFixture<Lib74Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
