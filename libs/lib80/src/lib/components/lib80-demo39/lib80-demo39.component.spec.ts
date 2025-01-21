import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo39Component } from './lib80-demo39.component';

describe('Lib80Demo39Component', () => {
  let component: Lib80Demo39Component;
  let fixture: ComponentFixture<Lib80Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
