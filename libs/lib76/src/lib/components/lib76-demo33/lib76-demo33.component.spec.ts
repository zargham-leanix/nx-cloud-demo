import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo33Component } from './lib76-demo33.component';

describe('Lib76Demo33Component', () => {
  let component: Lib76Demo33Component;
  let fixture: ComponentFixture<Lib76Demo33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
