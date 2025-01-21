import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo7Component } from './lib17-demo7.component';

describe('Lib17Demo7Component', () => {
  let component: Lib17Demo7Component;
  let fixture: ComponentFixture<Lib17Demo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo7Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
