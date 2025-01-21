import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo0Component } from './lib17-demo0.component';

describe('Lib17Demo0Component', () => {
  let component: Lib17Demo0Component;
  let fixture: ComponentFixture<Lib17Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
