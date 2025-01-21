import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib89Demo37Component } from './lib89-demo37.component';

describe('Lib89Demo37Component', () => {
  let component: Lib89Demo37Component;
  let fixture: ComponentFixture<Lib89Demo37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib89Demo37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib89Demo37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
