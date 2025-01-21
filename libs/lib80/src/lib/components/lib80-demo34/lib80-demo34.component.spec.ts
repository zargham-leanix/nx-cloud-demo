import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib80Demo34Component } from './lib80-demo34.component';

describe('Lib80Demo34Component', () => {
  let component: Lib80Demo34Component;
  let fixture: ComponentFixture<Lib80Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib80Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib80Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
