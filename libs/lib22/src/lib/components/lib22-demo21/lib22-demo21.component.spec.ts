import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo21Component } from './lib22-demo21.component';

describe('Lib22Demo21Component', () => {
  let component: Lib22Demo21Component;
  let fixture: ComponentFixture<Lib22Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
