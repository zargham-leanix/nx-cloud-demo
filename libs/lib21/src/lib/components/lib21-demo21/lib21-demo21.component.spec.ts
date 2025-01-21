import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib21Demo21Component } from './lib21-demo21.component';

describe('Lib21Demo21Component', () => {
  let component: Lib21Demo21Component;
  let fixture: ComponentFixture<Lib21Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib21Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib21Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
