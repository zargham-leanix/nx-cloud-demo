import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib41Demo39Component } from './lib41-demo39.component';

describe('Lib41Demo39Component', () => {
  let component: Lib41Demo39Component;
  let fixture: ComponentFixture<Lib41Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib41Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib41Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
