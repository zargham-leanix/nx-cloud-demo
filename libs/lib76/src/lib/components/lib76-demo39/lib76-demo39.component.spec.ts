import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib76Demo39Component } from './lib76-demo39.component';

describe('Lib76Demo39Component', () => {
  let component: Lib76Demo39Component;
  let fixture: ComponentFixture<Lib76Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib76Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib76Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
