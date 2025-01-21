import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo45Component } from './lib89-demo45.component';

describe('Lib89Demo45Component', () => {
  let component: Lib89Demo45Component;
  let fixture: ComponentFixture<Lib89Demo45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
