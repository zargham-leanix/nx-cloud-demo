import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo33Component } from './lib89-demo33.component';

describe('Lib89Demo33Component', () => {
  let component: Lib89Demo33Component;
  let fixture: ComponentFixture<Lib89Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
