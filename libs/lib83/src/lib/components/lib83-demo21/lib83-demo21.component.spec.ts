import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib83Demo21Component } from './lib83-demo21.component';

describe('Lib83Demo21Component', () => {
  let component: Lib83Demo21Component;
  let fixture: ComponentFixture<Lib83Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib83Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib83Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
