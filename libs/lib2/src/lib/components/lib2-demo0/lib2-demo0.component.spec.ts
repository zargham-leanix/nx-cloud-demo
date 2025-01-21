import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib2Demo0Component } from './lib2-demo0.component';

describe('Lib2Demo0Component', () => {
  let component: Lib2Demo0Component;
  let fixture: ComponentFixture<Lib2Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib2Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib2Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
