import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib17Demo34Component } from './lib17-demo34.component';

describe('Lib17Demo34Component', () => {
  let component: Lib17Demo34Component;
  let fixture: ComponentFixture<Lib17Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib17Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib17Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
