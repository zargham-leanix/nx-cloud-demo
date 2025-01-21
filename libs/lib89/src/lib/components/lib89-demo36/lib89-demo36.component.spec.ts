import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo36Component } from './lib89-demo36.component';

describe('Lib89Demo36Component', () => {
  let component: Lib89Demo36Component;
  let fixture: ComponentFixture<Lib89Demo36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
