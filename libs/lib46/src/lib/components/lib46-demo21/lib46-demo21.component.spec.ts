import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib46Demo21Component } from './lib46-demo21.component';

describe('Lib46Demo21Component', () => {
  let component: Lib46Demo21Component;
  let fixture: ComponentFixture<Lib46Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib46Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib46Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
