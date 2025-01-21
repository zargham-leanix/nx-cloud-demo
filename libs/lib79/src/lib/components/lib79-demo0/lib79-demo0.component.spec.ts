import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib79Demo0Component } from './lib79-demo0.component';

describe('Lib79Demo0Component', () => {
  let component: Lib79Demo0Component;
  let fixture: ComponentFixture<Lib79Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib79Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib79Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
