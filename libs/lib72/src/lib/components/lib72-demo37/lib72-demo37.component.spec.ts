import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib72Demo37Component } from './lib72-demo37.component';

describe('Lib72Demo37Component', () => {
  let component: Lib72Demo37Component;
  let fixture: ComponentFixture<Lib72Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib72Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib72Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
