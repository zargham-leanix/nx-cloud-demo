import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo48Component } from './lib89-demo48.component';

describe('Lib89Demo48Component', () => {
  let component: Lib89Demo48Component;
  let fixture: ComponentFixture<Lib89Demo48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
