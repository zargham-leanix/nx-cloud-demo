import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo24Component } from './lib89-demo24.component';

describe('Lib89Demo24Component', () => {
  let component: Lib89Demo24Component;
  let fixture: ComponentFixture<Lib89Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
