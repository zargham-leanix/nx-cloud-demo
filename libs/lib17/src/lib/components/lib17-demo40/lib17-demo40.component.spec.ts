import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo40Component } from './lib17-demo40.component';

describe('Lib17Demo40Component', () => {
  let component: Lib17Demo40Component;
  let fixture: ComponentFixture<Lib17Demo40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
