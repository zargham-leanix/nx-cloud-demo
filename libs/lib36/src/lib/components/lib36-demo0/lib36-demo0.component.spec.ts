import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib36Demo0Component } from './lib36-demo0.component';

describe('Lib36Demo0Component', () => {
  let component: Lib36Demo0Component;
  let fixture: ComponentFixture<Lib36Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib36Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib36Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
