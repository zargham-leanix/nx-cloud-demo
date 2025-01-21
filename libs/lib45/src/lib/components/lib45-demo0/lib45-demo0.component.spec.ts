import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib45Demo0Component } from './lib45-demo0.component';

describe('Lib45Demo0Component', () => {
  let component: Lib45Demo0Component;
  let fixture: ComponentFixture<Lib45Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib45Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib45Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
