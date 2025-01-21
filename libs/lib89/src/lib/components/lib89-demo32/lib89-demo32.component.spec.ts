import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo32Component } from './lib89-demo32.component';

describe('Lib89Demo32Component', () => {
  let component: Lib89Demo32Component;
  let fixture: ComponentFixture<Lib89Demo32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
