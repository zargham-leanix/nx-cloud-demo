import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo9Component } from './lib89-demo9.component';

describe('Lib89Demo9Component', () => {
  let component: Lib89Demo9Component;
  let fixture: ComponentFixture<Lib89Demo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo9Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
