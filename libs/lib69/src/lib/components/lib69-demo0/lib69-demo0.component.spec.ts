import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib69Demo0Component } from './lib69-demo0.component';

describe('Lib69Demo0Component', () => {
  let component: Lib69Demo0Component;
  let fixture: ComponentFixture<Lib69Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib69Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib69Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
