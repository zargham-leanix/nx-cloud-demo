import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo15Component } from './lib89-demo15.component';

describe('Lib89Demo15Component', () => {
  let component: Lib89Demo15Component;
  let fixture: ComponentFixture<Lib89Demo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
