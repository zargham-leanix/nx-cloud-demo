import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib35Demo0Component } from './lib35-demo0.component';

describe('Lib35Demo0Component', () => {
  let component: Lib35Demo0Component;
  let fixture: ComponentFixture<Lib35Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib35Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib35Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
