import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib28Demo34Component } from './lib28-demo34.component';

describe('Lib28Demo34Component', () => {
  let component: Lib28Demo34Component;
  let fixture: ComponentFixture<Lib28Demo34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Lib28Demo34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib28Demo34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
