import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo11Component } from './lib17-demo11.component';

describe('Lib17Demo11Component', () => {
  let component: Lib17Demo11Component;
  let fixture: ComponentFixture<Lib17Demo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
