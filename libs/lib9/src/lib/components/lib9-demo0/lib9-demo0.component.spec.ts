import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib9Demo0Component } from './lib9-demo0.component';

describe('Lib9Demo0Component', () => {
  let component: Lib9Demo0Component;
  let fixture: ComponentFixture<Lib9Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib9Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib9Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
