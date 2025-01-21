import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo7Component } from './lib89-demo7.component';

describe('Lib89Demo7Component', () => {
  let component: Lib89Demo7Component;
  let fixture: ComponentFixture<Lib89Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
