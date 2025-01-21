import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib51Demo0Component } from './lib51-demo0.component';

describe('Lib51Demo0Component', () => {
  let component: Lib51Demo0Component;
  let fixture: ComponentFixture<Lib51Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib51Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib51Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
