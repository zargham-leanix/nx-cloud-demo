import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo8Component } from './lib89-demo8.component';

describe('Lib89Demo8Component', () => {
  let component: Lib89Demo8Component;
  let fixture: ComponentFixture<Lib89Demo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo8Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
