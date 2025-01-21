import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo47Component } from './lib17-demo47.component';

describe('Lib17Demo47Component', () => {
  let component: Lib17Demo47Component;
  let fixture: ComponentFixture<Lib17Demo47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
