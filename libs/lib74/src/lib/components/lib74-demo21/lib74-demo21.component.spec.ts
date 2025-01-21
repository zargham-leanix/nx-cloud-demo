import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib74Demo21Component } from './lib74-demo21.component';

describe('Lib74Demo21Component', () => {
  let component: Lib74Demo21Component;
  let fixture: ComponentFixture<Lib74Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib74Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib74Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
