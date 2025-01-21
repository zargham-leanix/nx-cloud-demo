import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib5Demo0Component } from './lib5-demo0.component';

describe('Lib5Demo0Component', () => {
  let component: Lib5Demo0Component;
  let fixture: ComponentFixture<Lib5Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib5Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib5Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
