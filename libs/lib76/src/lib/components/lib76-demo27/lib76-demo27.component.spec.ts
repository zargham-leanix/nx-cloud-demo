import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo27Component } from './lib76-demo27.component';

describe('Lib76Demo27Component', () => {
  let component: Lib76Demo27Component;
  let fixture: ComponentFixture<Lib76Demo27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
