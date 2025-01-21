import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib19Demo0Component } from './lib19-demo0.component';

describe('Lib19Demo0Component', () => {
  let component: Lib19Demo0Component;
  let fixture: ComponentFixture<Lib19Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib19Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib19Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
