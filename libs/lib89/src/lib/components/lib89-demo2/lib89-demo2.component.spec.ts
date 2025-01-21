import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo2Component } from './lib89-demo2.component';

describe('Lib89Demo2Component', () => {
  let component: Lib89Demo2Component;
  let fixture: ComponentFixture<Lib89Demo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
