import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo18Component } from './lib89-demo18.component';

describe('Lib89Demo18Component', () => {
  let component: Lib89Demo18Component;
  let fixture: ComponentFixture<Lib89Demo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
