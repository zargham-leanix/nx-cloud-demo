import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo27Component } from './lib89-demo27.component';

describe('Lib89Demo27Component', () => {
  let component: Lib89Demo27Component;
  let fixture: ComponentFixture<Lib89Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
