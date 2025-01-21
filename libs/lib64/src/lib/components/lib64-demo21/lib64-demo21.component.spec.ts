import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib64Demo21Component } from './lib64-demo21.component';

describe('Lib64Demo21Component', () => {
  let component: Lib64Demo21Component;
  let fixture: ComponentFixture<Lib64Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib64Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib64Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
