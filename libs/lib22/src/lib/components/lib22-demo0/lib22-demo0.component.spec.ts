import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib22Demo0Component } from './lib22-demo0.component';

describe('Lib22Demo0Component', () => {
  let component: Lib22Demo0Component;
  let fixture: ComponentFixture<Lib22Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib22Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib22Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
