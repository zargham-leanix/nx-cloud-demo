import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo40Component } from './lib89-demo40.component';

describe('Lib89Demo40Component', () => {
  let component: Lib89Demo40Component;
  let fixture: ComponentFixture<Lib89Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
