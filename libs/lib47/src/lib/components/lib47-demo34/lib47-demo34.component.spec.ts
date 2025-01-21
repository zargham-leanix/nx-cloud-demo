import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib47Demo34Component } from './lib47-demo34.component';

describe('Lib47Demo34Component', () => {
  let component: Lib47Demo34Component;
  let fixture: ComponentFixture<Lib47Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib47Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib47Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
