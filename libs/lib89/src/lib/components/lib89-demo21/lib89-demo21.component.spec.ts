import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo21Component } from './lib89-demo21.component';

describe('Lib89Demo21Component', () => {
  let component: Lib89Demo21Component;
  let fixture: ComponentFixture<Lib89Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
