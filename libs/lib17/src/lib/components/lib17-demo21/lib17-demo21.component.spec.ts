import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo21Component } from './lib17-demo21.component';

describe('Lib17Demo21Component', () => {
  let component: Lib17Demo21Component;
  let fixture: ComponentFixture<Lib17Demo21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
