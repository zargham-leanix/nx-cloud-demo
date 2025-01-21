import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo39Component } from './lib89-demo39.component';

describe('Lib89Demo39Component', () => {
  let component: Lib89Demo39Component;
  let fixture: ComponentFixture<Lib89Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
