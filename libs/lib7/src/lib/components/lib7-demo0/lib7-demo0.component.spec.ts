import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib7Demo0Component } from './lib7-demo0.component';

describe('Lib7Demo0Component', () => {
  let component: Lib7Demo0Component;
  let fixture: ComponentFixture<Lib7Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib7Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib7Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
