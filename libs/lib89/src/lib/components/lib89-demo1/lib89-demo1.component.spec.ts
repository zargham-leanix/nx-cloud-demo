import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo1Component } from './lib89-demo1.component';

describe('Lib89Demo1Component', () => {
  let component: Lib89Demo1Component;
  let fixture: ComponentFixture<Lib89Demo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo1Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
