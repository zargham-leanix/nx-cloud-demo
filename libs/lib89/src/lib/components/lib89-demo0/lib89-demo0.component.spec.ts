import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo0Component } from './lib89-demo0.component';

describe('Lib89Demo0Component', () => {
  let component: Lib89Demo0Component;
  let fixture: ComponentFixture<Lib89Demo0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo0Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
