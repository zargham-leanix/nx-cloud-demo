import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib96Demo0Component } from './lib96-demo0.component';

describe('Lib96Demo0Component', () => {
  let component: Lib96Demo0Component;
  let fixture: ComponentFixture<Lib96Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib96Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib96Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
