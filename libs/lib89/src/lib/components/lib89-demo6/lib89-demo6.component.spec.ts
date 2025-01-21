import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo6Component } from './lib89-demo6.component';

describe('Lib89Demo6Component', () => {
  let component: Lib89Demo6Component;
  let fixture: ComponentFixture<Lib89Demo6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo6Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
