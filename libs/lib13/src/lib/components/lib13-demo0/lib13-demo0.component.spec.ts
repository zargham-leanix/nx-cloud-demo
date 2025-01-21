import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib13Demo0Component } from './lib13-demo0.component';

describe('Lib13Demo0Component', () => {
  let component: Lib13Demo0Component;
  let fixture: ComponentFixture<Lib13Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib13Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib13Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
