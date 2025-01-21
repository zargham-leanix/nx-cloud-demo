import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo16Component } from './lib89-demo16.component';

describe('Lib89Demo16Component', () => {
  let component: Lib89Demo16Component;
  let fixture: ComponentFixture<Lib89Demo16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
