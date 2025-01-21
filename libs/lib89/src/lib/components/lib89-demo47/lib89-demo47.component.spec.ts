import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo47Component } from './lib89-demo47.component';

describe('Lib89Demo47Component', () => {
  let component: Lib89Demo47Component;
  let fixture: ComponentFixture<Lib89Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
