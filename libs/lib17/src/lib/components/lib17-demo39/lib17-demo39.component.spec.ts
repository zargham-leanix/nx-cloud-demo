import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo39Component } from './lib17-demo39.component';

describe('Lib17Demo39Component', () => {
  let component: Lib17Demo39Component;
  let fixture: ComponentFixture<Lib17Demo39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
