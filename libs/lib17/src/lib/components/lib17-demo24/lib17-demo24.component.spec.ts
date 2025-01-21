import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo24Component } from './lib17-demo24.component';

describe('Lib17Demo24Component', () => {
  let component: Lib17Demo24Component;
  let fixture: ComponentFixture<Lib17Demo24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
