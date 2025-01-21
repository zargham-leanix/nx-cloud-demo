import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib54Demo21Component } from './lib54-demo21.component';

describe('Lib54Demo21Component', () => {
  let component: Lib54Demo21Component;
  let fixture: ComponentFixture<Lib54Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib54Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib54Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
