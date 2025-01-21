import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo49Component } from './lib89-demo49.component';

describe('Lib89Demo49Component', () => {
  let component: Lib89Demo49Component;
  let fixture: ComponentFixture<Lib89Demo49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
