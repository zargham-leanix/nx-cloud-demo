import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo39Component } from './lib29-demo39.component';

describe('Lib29Demo39Component', () => {
  let component: Lib29Demo39Component;
  let fixture: ComponentFixture<Lib29Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
