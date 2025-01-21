import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo38Component } from './lib89-demo38.component';

describe('Lib89Demo38Component', () => {
  let component: Lib89Demo38Component;
  let fixture: ComponentFixture<Lib89Demo38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
