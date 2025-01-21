import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib29Demo34Component } from './lib29-demo34.component';

describe('Lib29Demo34Component', () => {
  let component: Lib29Demo34Component;
  let fixture: ComponentFixture<Lib29Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib29Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib29Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
